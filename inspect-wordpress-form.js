/**
 * WordPress Form Inspector
 * This script fetches the actual form HTML from WordPress to discover the real field names
 */

const WORDPRESS_URL = 'https://go.nexdeer.com';
const FORM_ID = 1;

async function inspectForm() {
  try {
    console.log('🔍 Fetching form from WordPress...');
    
    // Method 1: Fetch the contact page or any page with the form
    const pageUrl = `${WORDPRESS_URL}/contact/`;
    console.log('📡 URL:', pageUrl);
    
    const response = await fetch(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await response.text();
    
    // Save HTML for inspection
    const fs = await import('fs');
    fs.writeFileSync('wordpress-page.html', html);
    console.log('💾 Saved HTML to wordpress-page.html');
    
    console.log('\n📝 Searching for input fields...\n');
    
    // Extract all input and textarea fields with their names
    const inputRegex = /<(input|textarea)[^>]*name=["']([^"']+)["'][^>]*>/gi;
    const matches = [...html.matchAll(inputRegex)];
    
    console.log('Found', matches.length, 'form fields:\n');
    
    matches.forEach((match, index) => {
      const tag = match[1];
      const name = match[2];
      const fullTag = match[0];
      
      // Check if it's email, message, or name related
      if (name.toLowerCase().includes('email') || 
          name.toLowerCase().includes('message') || 
          name.toLowerCase().includes('name') ||
          name.toLowerCase().includes('subject') ||
          name.toLowerCase().includes('textarea') ||
          name.toLowerCase().includes('description')) {
        console.log(`${index + 1}. <${tag}> name="${name}"`);
        
        // Try to extract type and other attributes
        const typeMatch = fullTag.match(/type=["']([^"']+)["']/i);
        if (typeMatch) {
          console.log(`   type="${typeMatch[1]}"`);
        }
        console.log('');
      }
    });
    
    // Also search for data-name attributes (Fluent Forms sometimes uses this)
    console.log('\n🔍 Checking for data-name attributes...\n');
    const dataNameRegex = /data-name=["']([^"']+)["']/gi;
    const dataMatches = [...html.matchAll(dataNameRegex)];
    
    dataMatches.forEach((match, index) => {
      console.log(`${index + 1}. data-name="${match[1]}"`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

inspectForm();
