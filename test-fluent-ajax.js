// Test Fluent Forms AJAX submission with different field name patterns
const FORM_ID = 1;

async function testFluentFormsAjax() {
  const baseUrl = 'https://go.nexdeer.com/wp-admin/admin-ajax.php';
  
  // Common Fluent Forms field name patterns
  const testPayloads = [
    {
      name: 'Standard field names',
      data: new URLSearchParams({
        action: 'fluentform_submit',
        form_id: FORM_ID,
        '___fluent_form_embded_post_id': '0',
        '_fluentform_1_fluentformnonce': '',
        '_wp_http_referer': '/contact',
        'names[first_name]': 'Test',
        'names[last_name]': 'User',
        'email': 'test@example.com',
        'message': 'Test message from API',
      })
    },
    {
      name: 'Alternative names format',
      data: new URLSearchParams({
        action: 'fluentform_submit',
        form_id: FORM_ID,
        'input_text': 'Test User',
        'email': 'test@example.com',
        'description': 'Test message from API',
      })
    },
    {
      name: 'Simple field names',
      data: new URLSearchParams({
        action: 'fluentform_submit',
        form_id: FORM_ID,
        'name': 'Test User',
        'email': 'test@example.com',
        'message': 'Test message from API',
      })
    },
    {
      name: 'Input field IDs',
      data: new URLSearchParams({
        action: 'fluentform_submit',
        form_id: FORM_ID,
        'input_text_1': 'Test User',
        'email_1': 'test@example.com',
        'textarea_1': 'Test message from API',
      })
    },
  ];
  
  for (const test of testPayloads) {
    console.log(`\n=== ${test.name} ===`);
    console.log('Data:', test.data.toString());
    
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: test.data,
      });
      
      const responseText = await response.text();
      console.log('Status:', response.status);
      console.log('Response:', responseText.substring(0, 300));
      
      if (response.ok && !responseText.includes('error')) {
        console.log('✓ SUCCESS! This format likely works.');
      }
      
      // Wait between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

testFluentFormsAjax();
