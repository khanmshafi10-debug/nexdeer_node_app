// Try to get the form HTML to extract field names

async function getFormFields() {
  // Common pages where the form might be embedded
  const testUrls = [
    'https://go.nexdeer.com/',
    'https://go.nexdeer.com/contact/',
    'https://go.nexdeer.com/contact-us/',
  ];
  
  for (const url of testUrls) {
    console.log(`\n=== Trying ${url} ===`);
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        console.log(`Status: ${response.status} - Skipping`);
        continue;
      }
      
      const html = await response.text();
      
      // Look for Fluent Forms shortcode or form HTML
      if (html.includes('fluentform') || html.includes('ff-el-group')) {
        console.log('✓ Found Fluent Form on this page!');
        
        // Extract form field names using regex
        const nameMatches = html.match(/name=["']([^"']*input[^"']*)["']/gi);
        
        if (nameMatches) {
          console.log('\nFound field names:');
          nameMatches.forEach(match => {
            console.log('  ', match);
          });
        }
        
        // Look for email and textarea fields specifically
        console.log('\nEmail fields:', html.match(/name=["']([^"']*email[^"']*)["']/gi));
        console.log('Textarea fields:', html.match(/name=["']([^"']*text[^"']*area[^"']*)["']/gi));
        console.log('Message fields:', html.match(/name=["']([^"']*message[^"']*)["']/gi));
        
        break;
      } else {
        console.log('No Fluent Form found on this page');
      }
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

getFormFields();
