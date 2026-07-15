import type { Plugin } from 'vite';

// ✅ CONFIRMED: Form ID 1 = "Contact Form Demo" on go.nexdeer.com
// ✅ CONFIRMED: Fluent Forms requires field data in a 'data' param as URL-encoded string
// Fields: names[first_name], names[last_name], email (required), subject, message (required)
const FLUENT_FORMS_AJAX_URL = 'https://go.nexdeer.com/wp-admin/admin-ajax.php';
const FORM_ID = 1;
const WP_BASE_URL = 'https://go.nexdeer.com';

export function apiPlugin(): Plugin {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method === 'POST') {
          let body = '';

          req.on('data', (chunk) => {
            body += chunk.toString();
          });

          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              const { name, email, message } = data;

              console.log('🚀 SERVER: Received contact form submission');
              console.log('📝 Data:', { name, email, message });

              if (!name || !email || !message) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'Name, email and message are required.' }));
                return;
              }

              // Split name into first + last
              const nameParts = name.trim().split(/\s+/);
              const firstName = nameParts[0] || name;
              const lastName = nameParts.slice(1).join(' ') || '';

              // ✅ CRITICAL FIX: Fluent Forms requires field data as a serialized string
              // in the 'data' parameter, NOT as top-level POST fields.
              // This was confirmed by testing: only "data=names[first_name]=...&email=...&message=..."
              // returns HTTP 200 from admin-ajax.php
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
              outerBody.append('data', fieldData.toString()); // ✅ KEY: data as serialized string

              console.log('🌐 Submitting to Fluent Forms:', FLUENT_FORMS_AJAX_URL);
              console.log('📦 Payload:', outerBody.toString().substring(0, 200));

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
              console.log('📄 WordPress response:', responseText);

              let responseData: any;
              try {
                responseData = JSON.parse(responseText);
              } catch {
                if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: false, message: 'WordPress returned an error page.' }));
                  return;
                }
                responseData = { rawResponse: responseText };
              }

              // ✅ Fluent Forms success response: { success: true, data: { insert_id, result: { message } } }
              if (responseData.success === true && responseData.data) {
                const wpMessage = responseData.data?.result?.message || "Message sent successfully! We'll get back to you soon.";
                console.log('✅ SUCCESS! Entry ID:', responseData.data?.insert_id);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                  success: true,
                  message: wpMessage,
                  entryId: responseData.data?.insert_id,
                }));
                return;
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
                res.writeHead(422, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: `Validation failed: ${errorMessages}` }));
                return;
              }

              // Generic failure
              console.error('❌ Unexpected response:', responseData);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                success: false,
                message: responseData.message || 'Failed to submit form. Please try again.',
              }));

            } catch (error: any) {
              console.error('💥 Fatal error in /api/contact:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, message: error.message || 'Internal server error' }));
            }
          });

        } else if (req.method === 'OPTIONS') {
          res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          });
          res.end();
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Method not allowed' }));
        }
      });
    },
  };
}
