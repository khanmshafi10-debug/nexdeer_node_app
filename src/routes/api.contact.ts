import { createFileRoute } from '@tanstack/react-router';

// CONFIRMED: Form ID 1 = "Contact Form Demo" on go.nexdeer.com
const FLUENT_FORMS_AJAX_URL = 'https://go.nexdeer.com/wp-admin/admin-ajax.php';
const FORM_ID = 1;
const WP_BASE_URL = 'https://go.nexdeer.com';

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { name, email, message } = body;

          console.log('🚀 SERVER: Received contact form submission (TanStack API)');
          console.log('📝 Data:', { name, email, message });

          if (!name || !email || !message) {
            return Response.json(
              { success: false, message: 'Name, email and message are required.' },
              { status: 400 }
            );
          }

          // Split name into first + last
          const nameParts = name.trim().split(/\s+/);
          const firstName = nameParts[0] || name;
          const lastName = nameParts.slice(1).join(' ') || '';

          // Fluent Forms requires field data as a serialized string
          // in the 'data' parameter, NOT as top-level POST fields.
          const fieldData = new URLSearchParams();
          fieldData.append('names[first_name]', firstName);
          fieldData.append('names[middle_name]', '');
          fieldData.append('names[last_name]', lastName);
          fieldData.append('email', email);
          fieldData.append('subject', 'Contact Form Submission from Website');
          fieldData.append('message', message);

          const outerBody = new URLSearchParams();
          outerBody.append('action', 'fluentform_submit');
          outerBody.append('form_id', FORM_ID.toString());
          outerBody.append('__fluent_form_embded_post_id', '0');
          outerBody.append('_wp_http_referer', '/');
          outerBody.append('data', fieldData.toString());

          console.log('🌐 Submitting to Fluent Forms:', FLUENT_FORMS_AJAX_URL);

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
          console.log('📊 WordPress response status:', response.status);

          let responseData: any;
          try {
            responseData = JSON.parse(responseText);
          } catch {
            if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
              return Response.json(
                { success: false, message: 'WordPress returned an error page.' },
                { status: 500 }
              );
            }
            responseData = { rawResponse: responseText };
          }

          if (responseData.success === true && responseData.data) {
            const wpMessage = responseData.data?.result?.message || "Message sent successfully! We'll get back to you soon.";
            console.log('✅ SUCCESS! Entry ID:', responseData.data?.insert_id);
            return Response.json({
              success: true,
              message: wpMessage,
              entryId: responseData.data?.insert_id,
            });
          }

          // Validation errors
          if (responseData.errors) {
            const errorMessages = Object.entries(responseData.errors)
              .map(([field, errs]: [string, any]) => {
                const msg = typeof errs === 'object' ? Object.values(errs).join(', ') : errs;
                return `${field}: ${msg}`;
              })
              .join('; ');
            console.error('❌ Validation errors:', errorMessages);
            return Response.json(
              { success: false, message: `Validation failed: ${errorMessages}` },
              { status: 422 }
            );
          }

          console.error('❌ Unexpected response:', responseData);
          return Response.json(
            {
              success: false,
              message: responseData.message || 'Failed to submit form. Please try again.',
            },
            { status: 500 }
          );

        } catch (error: any) {
          console.error('💥 Fatal error in /api/contact:', error);
          return Response.json(
            { success: false, message: error.message || 'Internal server error' },
            { status: 500 }
          );
        }
      },
    },
  },
});
