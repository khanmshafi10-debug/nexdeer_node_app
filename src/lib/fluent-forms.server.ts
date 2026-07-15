// This file runs on the SERVER ONLY - no CORS issues
// ✅ CONFIRMED working: Form ID 1 = "Contact Form Demo" on https://go.nexdeer.com
// ✅ CONFIRMED: data must be sent as a serialized URL-encoded string in the 'data' parameter

const FLUENT_FORMS_AJAX_URL = 'https://go.nexdeer.com/wp-admin/admin-ajax.php';
const WP_BASE_URL = 'https://go.nexdeer.com';
const FORM_ID = 1;

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
    console.log('🚀 SERVER: Submitting to Fluent Forms (Contact Form Demo, ID=1)');
    console.log('📝 Form Data:', JSON.stringify(formData));

    const { name, email, message } = formData;

    // Split full name into first + last
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(' ') || '';

    // ✅ CRITICAL: Field data must go inside a 'data' parameter as a URL-encoded string
    // This is how the Fluent Forms JavaScript on the frontend serializes the form
    const fieldData = new URLSearchParams();
    fieldData.append('names[first_name]', firstName);
    fieldData.append('names[middle_name]', '');
    fieldData.append('names[last_name]', lastName);
    fieldData.append('email', email);
    fieldData.append('subject', 'Website Contact Form Submission');
    fieldData.append('message', message);

    // Outer POST body wrapping the serialized field data
    const outerBody = new URLSearchParams();
    outerBody.append('action', 'fluentform_submit');
    outerBody.append('form_id', FORM_ID.toString());
    outerBody.append('__fluent_form_embded_post_id', '0');
    outerBody.append('_wp_http_referer', '/');
    outerBody.append('data', fieldData.toString()); // ✅ THE FIX

    console.log('🌐 Request URL:', FLUENT_FORMS_AJAX_URL);
    console.log('📦 Outer body:', outerBody.toString().substring(0, 300));

    const response = await fetch(FLUENT_FORMS_AJAX_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Origin': WP_BASE_URL,
        'Referer': `${WP_BASE_URL}/`,
      },
      body: outerBody.toString(),
    });

    const responseText = await response.text();
    console.log('📊 Response Status:', response.status);
    console.log('📄 Response Body:', responseText);

    let responseData: any;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
        console.error('❌ WordPress returned an HTML error page');
        return {
          success: false,
          message: 'WordPress returned an error. Please check Fluent Forms is active.',
        };
      }
      responseData = { rawResponse: responseText };
    }

    // ✅ Fluent Forms success: { success: true, data: { insert_id, result: { message, action } } }
    if (responseData.success === true && responseData.data) {
      const successMsg =
        responseData.data?.result?.message ||
        "Message sent successfully! We'll get back to you soon.";
      console.log('✅ Form submitted successfully! Entry ID:', responseData.data?.insert_id);
      return {
        success: true,
        message: successMsg,
        data: responseData,
      };
    }

    // Validation errors from Fluent Forms
    if (responseData.errors && typeof responseData.errors === 'object') {
      console.error('❌ Validation errors:', JSON.stringify(responseData.errors, null, 2));
      const errorMessages = Object.entries(responseData.errors)
        .map(([field, errors]: [string, any]) => {
          const errorList =
            typeof errors === 'object' ? Object.values(errors).join(', ') : errors;
          return `${field}: ${errorList}`;
        })
        .join('; ');
      return {
        success: false,
        message: `Validation failed: ${errorMessages}`,
      };
    }

    // Generic WP error
    if (responseData.success === false) {
      return {
        success: false,
        message: responseData.message || 'Form submission failed.',
      };
    }

    // HTTP-level error
    if (!response.ok) {
      return {
        success: false,
        message: `Server error (${response.status})`,
      };
    }

    console.warn('⚠️ Unknown response format:', responseData);
    return {
      success: false,
      message: 'Unexpected response from WordPress.',
    };
  } catch (error) {
    console.error('💥 Fatal error in submitToFluentForms:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit form.',
    };
  }
}
