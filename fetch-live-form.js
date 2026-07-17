/**
 * Fetch the live form HTML from a page where it's embedded
 */

const WORDPRESS_URL = 'https://go.nexdeer.com';

async function fetchLiveForm() {
  try {
    // Try different URLs where the form might be
    const urls = [
      `${WORDPRESS_URL}/contact/`,
      `${WORDPRESS_URL}/contact-us/`,
      `${WORDPRESS_URL}/`,
    ];
    
    for (const url of urls) {
      console.log(`\n🔍 Trying: ${url}`);
      
      try {
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          }
        });
        
        if (response.ok) {
          const html = await response.text();
          
          // Look for Fluent Forms HTML
          if (html.includes('fluentform') || html.includes('ff-el')) {
            console.log('✅ Found Fluent Forms on this page!');
            
            // Extract form HTML
            const formRegex = /<form[^>]*class="[^"]*fluent[^"]*"[^>]*>([\s\S]*?)<\/form>/i;
            const formMatch = html.match(formRegex);
            
            if (formMatch) {
              const formHtml = formMatch[0];
              
              // Extract email field
              const emailRegex = /<input[^>]*type=["']email["'][^>]*>/gi;
              const emailMatches = [...formHtml.matchAll(emailRegex)];
              
              console.log('\n📧 EMAIL FIELD(S):');
              emailMatches.forEach((match, i) => {
                const nameMatch = match[0].match(/name=["']([^"']*)["']/);
                if (nameMatch) {
                  console.log(`  ${i + 1}. name="${nameMatch[1]}"`);
                }
              });
              
              // Extract textarea (message) field
              const textareaRegex = /<textarea[^>]*>([\s\S]*?)<\/textarea>/gi;
              const textareaMatches = [...formHtml.matchAll(textareaRegex)];
              
              console.log('\n💬 MESSAGE FIELD(S):');
              textareaMatches.forEach((match, i) => {
                const fullTag = match[0];
                const nameMatch = fullTag.match(/name=["']([^"']*)["']/);
                if (nameMatch) {
                  console.log(`  ${i + 1}. name="${nameMatch[1]}"`);
                }
              });
              
              // Extract text inputs (could be subject, name, etc.)
              const textRegex = /<input[^>]*type=["']text["'][^>]*>/gi;
              const textMatches = [...formHtml.matchAll(textRegex)];
              
              console.log('\n📝 TEXT INPUT FIELDS:');
              textMatches.forEach((match, i) => {
                const nameMatch = match[0].match(/name=["']([^"']*)["']/);
                if (nameMatch) {
                  console.log(`  ${i + 1}. name="${nameMatch[1]}"`);
                }
              });
              
              // Save the form HTML
              const fs = await import('fs');
              fs.writeFileSync('form-html.html', formHtml);
              console.log('\n💾 Saved form HTML to form-html.html');
              
              return;
            } else {
              console.log('⚠️  Found Fluent Forms but could not extract form HTML (might be loaded via JS)');
            }
          }
        }
      } catch (e) {
        console.log(`❌ Failed: ${e.message}`);
      }
    }
    
    console.log('\n💡 The form might be loaded dynamically via JavaScript.');
    console.log('Please manually inspect the form in your browser:');
    console.log('1. Go to https://go.nexdeer.com/contact/');
    console.log('2. Right-click on Email field → Inspect');
    console.log('3. Look for name="..." attribute');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fetchLiveForm();
