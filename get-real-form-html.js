const { JSDOM } = require('jsdom');

async function getRealForm() {
  try {
    const response = await fetch('https://go.nexdeer.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const html = await response.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    
    // Find the Fluent Form
    const form = doc.querySelector('form[data-form_id="1"]') || 
                 doc.querySelector('form.fluentform') ||
                 doc.querySelector('[class*="fluent"]');
    
    if (form) {
      console.log('✅ Found form!');
      console.log('\n📋 Form HTML:\n');
      console.log(form.outerHTML);
      
      // Extract all input names
      const inputs = form.querySelectorAll('input, textarea, select');
      console.log('\n📝 Field names:');
      inputs.forEach(input => {
        const name = input.getAttribute('name');
        const type = input.getAttribute('type') || input.tagName.toLowerCase();
        if (name) {
          console.log(`  - ${name} (${type})`);
        }
      });
    } else {
      console.log('❌ Form not found in page HTML');
      console.log('The form might be loaded via JavaScript');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

getRealForm();
