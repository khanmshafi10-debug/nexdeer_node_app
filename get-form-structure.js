/**
 * Get Fluent Forms structure using WordPress REST API with auth
 */

const WORDPRESS_URL = 'https://go.nexdeer.com';
const USERNAME = 'shahzadrando';
const PASSWORD = 'In@ndOut99-NX-PAK';
const FORM_ID = 1;

async function getFormStructure() {
  try {
    console.log('🔐 Authenticating with WordPress...');
    
    // Create basic auth header
    const authString = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');
    
    // Try Fluent Forms REST API endpoint
    const apiUrl = `${WORDPRESS_URL}/wp-json/fluentform/v1/forms/${FORM_ID}`;
    console.log('📡 Requesting:', apiUrl);
    
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Basic ${authString}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      console.log('❌ Status:', response.status);
      console.log('Trying alternative endpoint...');
      
      // Try alternative endpoint
      const altUrl = `${WORDPRESS_URL}/wp-json/wp/v2/fluentform/${FORM_ID}`;
      console.log('📡 Trying:', altUrl);
      
      const altResponse = await fetch(altUrl, {
        headers: {
          'Authorization': `Basic ${authString}`,
          'User-Agent': 'Mozilla/5.0'
        }
      });
      
      if (!altResponse.ok) {
        throw new Error(`Both APIs failed: ${response.status}, ${altResponse.status}`);
      }
      
      const data = await altResponse.json();
      console.log('\n✅ Form data retrieved!\n');
      console.log(JSON.stringify(data, null, 2));
      return;
    }
    
    const data = await response.json();
    console.log('\n✅ Form data retrieved!\n');
    
    // Save full response
    const fs = await import('fs');
    fs.writeFileSync('form-structure.json', JSON.stringify(data, null, 2));
    console.log('💾 Saved to form-structure.json\n');
    
    // Extract field information
    console.log('📋 FIELD MAPPING:\n');
    
    if (data.fields) {
      Object.entries(data.fields).forEach(([key, field]) => {
        console.log(`Field Key: ${key}`);
        console.log(`  Element: ${field.element}`);
        console.log(`  Label: ${field.settings?.label || field.admin_label}`);
        console.log(`  Name Attribute: ${field.attributes?.name || key}`);
        console.log(`  Required: ${field.settings?.validation_rules?.required?.value || false}`);
        console.log('');
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 The Fluent Forms REST API might not be enabled.');
    console.log('Please check WordPress → Fluent Forms → Settings → Advanced');
  }
}

getFormStructure();
