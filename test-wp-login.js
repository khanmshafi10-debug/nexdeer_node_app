/**
 * Login to WordPress and export the form
 */

const USERNAME = 'shahzadrando';
const PASSWORD = 'In@ndOut99-NX-PAK';
const WP_URL = 'https://go.nexdeer.com';

async function exportForm() {
  try {
    console.log('🔐 Logging into WordPress...');
    
    // Step 1: Get login page to get nonce
    const loginPage = await fetch(`${WP_URL}/wp-login.php`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const loginHtml = await loginPage.text();
    
    // Extract cookies
    const cookies = loginPage.headers.get('set-cookie') || '';
    
    // Step 2: Login
    const loginData = new URLSearchParams();
    loginData.append('log', USERNAME);
    loginData.append('pwd', PASSWORD);
    loginData.append('wp-submit', 'Log In');
    loginData.append('redirect_to', `${WP_URL}/wp-admin/`);
    loginData.append('testcookie', '1');
    
    const loginResponse = await fetch(`${WP_URL}/wp-login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0',
        'Cookie': cookies,
      },
      body: loginData.toString(),
      redirect: 'manual'
    });
    
    const authCookies = loginResponse.headers.get('set-cookie') || '';
    console.log('✅ Logged in');
    
    // Step 3: Access Fluent Forms export
    console.log('📥 Fetching form data...');
    
    const formUrl = `${WP_URL}/wp-admin/admin.php?page=fluent_forms&route=entries&form_id=1`;
    const formResponse = await fetch(formUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Cookie': authCookies,
      }
    });
    
    if (formResponse.ok) {
      const html = await formResponse.text();
      console.log('✅ Got form page');
      
      // Look for form config in the HTML
      const configMatch = html.match(/window\.fluentFormVars\s*=\s*({[^;]+})/);
      if (configMatch) {
        console.log('Form config:', configMatch[1]);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

exportForm();
