// Test script to fetch Fluent Forms structure
const FLUENT_FORMS_API_URL = 'https://go.nexdeer.com/wp-json/fluentform/v1';
const FORM_ID = 1;
const WP_USERNAME = 'shahzadrando';
const WP_PASSWORD = 'In@ndOut99-NX-PAK';

async function testFluentFormsAPI() {
  try {
    const auth = Buffer.from(`${WP_USERNAME}:${WP_PASSWORD}`).toString('base64');
    
    // First, get the form structure
    console.log('\n=== Fetching Form Structure ===');
    const formUrl = `${FLUENT_FORMS_API_URL}/forms/${FORM_ID}`;
    console.log('GET:', formUrl);
    
    const formResponse = await fetch(formUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Accept': 'application/json',
      },
    });
    
    console.log('Status:', formResponse.status);
    const formData = await formResponse.json();
    console.log('Form Data:', JSON.stringify(formData, null, 2));
    
    // Parse the form fields
    if (formData.form_fields) {
      console.log('\n=== Form Fields ===');
      const fields = JSON.parse(formData.form_fields);
      console.log('Fields:', JSON.stringify(fields, null, 2));
      
      // Extract field names
      console.log('\n=== Field Names/Attributes ===');
      if (fields.fields) {
        fields.fields.forEach(field => {
          console.log(`- ${field.element}: ${field.attributes?.name || field.attributes?.id || 'N/A'}`);
        });
      }
    }
    
    // Now test a submission
    console.log('\n\n=== Testing Submission ===');
    
    // Try different endpoint URLs
    const endpointTests = [
      `${FLUENT_FORMS_API_URL}/forms/${FORM_ID}/submissions`,
      `${FLUENT_FORMS_API_URL}/form-submit/${FORM_ID}`,
      `https://go.nexdeer.com/wp-admin/admin-ajax.php?action=fluentform_submit&form_id=${FORM_ID}`,
    ];
    
    for (const submissionUrl of endpointTests) {
      console.log('\n--- Testing URL:', submissionUrl, '---');
    
    // Try different payload formats
    const testPayloads = [
      {
        name: 'Format 1: Direct fields',
        data: {
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message',
        }
      },
      {
        name: 'Format 2: With data wrapper',
        data: {
          data: {
            name: 'Test User',
            email: 'test@example.com',
            message: 'Test message',
          }
        }
      },
      {
        name: 'Format 3: Using field attributes',
        data: {
          data: {
            input_text_1: 'Test User',
            email_1: 'test@example.com',
            textarea_1: 'Test message',
          }
        }
      }
    ];
    
    for (const payload of testPayloads) {
      console.log(`\n    ${payload.name}`);
      console.log('    Payload:', JSON.stringify(payload.data, null, 2));
      
      const response = await fetch(submissionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload.data),
      });
      
      const responseText = await response.text();
      console.log('    Status:', response.status);
      console.log('    Response:', responseText.substring(0, 200));
      
      if (response.ok) {
        console.log('    ✓ SUCCESS! This format works.');
        return; // Exit entirely on success
      }
      
      // Wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testFluentFormsAPI();
