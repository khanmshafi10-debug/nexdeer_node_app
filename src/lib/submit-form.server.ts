const FLUENT_FORMS_API_URL = 'https://go.nexdeer.com/wp-json/fluentform/v1';
const FORM_ID = 1;
const WP_USERNAME = 'shahzadrando';
const WP_PASSWORD = 'In@ndOut99-NX-PAK';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
}

export async function submitToFluentForms(formData: FormData): Promise<SubmissionResponse> {
  try {
    const auth = btoa(`${WP_USERNAME}:${WP_PASSWORD}`);
    
    // Try multiple endpoint structures
    const endpoints = [
      `${FLUENT_FORMS_API_URL}/forms/${FORM_ID}/submissions`,
      `${FLUENT_FORMS_API_URL}/submissions`,
      `${FLUENT_FORMS_API_URL}/forms/${FORM_ID}`,
    ];

    let lastError = null;

    for (const apiUrl of endpoints) {
      try {
        console.log('Trying endpoint:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${auth}`,
          },
          body: JSON.stringify({
            data: {
              names_first_name: formData.name.split(' ')[0] || formData.name,
              names_last_name: formData.name.split(' ').slice(1).join(' ') || '',
              email: formData.email,
              description: formData.message,
            },
          }),
        });

        console.log('Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Success with endpoint:', apiUrl, data);
          return {
            success: true,
            message: 'Form submitted successfully!',
            data,
          };
        }

        const errorData = await response.json().catch(() => ({}));
        lastError = { status: response.status, message: errorData.message || 'Unknown error' };
        console.log('Failed with endpoint:', apiUrl, lastError);
      } catch (err) {
        lastError = err;
        console.log('Error with endpoint:', apiUrl, err);
        continue;
      }
    }

    // If API endpoints fail, try form submission
    try {
      const params = new URLSearchParams();
      params.append('form_id', FORM_ID.toString());
      params.append('_fluentform_id', FORM_ID.toString());
      params.append('__fluent_form_nonce', 'temp_nonce');
      params.append('data[names][first_name]', formData.name.split(' ')[0] || formData.name);
      params.append('data[names][last_name]', formData.name.split(' ').slice(1).join(' ') || '');
      params.append('data[email]', formData.email);
      params.append('data[description]', formData.message);

      const formResponse = await fetch('https://go.nexdeer.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      console.log('Form submission response status:', formResponse.status);
      
      if (formResponse.ok) {
        return {
          success: true,
          message: 'Form submitted successfully!',
        };
      }
    } catch (formErr) {
      console.log('Form submission error:', formErr);
    }

    return {
      success: false,
      message: `All submission methods failed. Last error: ${lastError instanceof Error ? lastError.message : 'Unknown error'}`,
    };
  } catch (error) {
    console.error('Server submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Server error occurred',
    };
  }
}
