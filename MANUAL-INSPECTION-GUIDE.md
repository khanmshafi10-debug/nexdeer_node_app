# Manual Field Name Inspection Guide

Since the REST API is not accessible, please follow these steps to get the EXACT field names:

## Steps:

1. **Log into WordPress Admin**
   - URL: https://go.nexdeer.com/wp-admin
   - Username: shahzadrando
   - Password: In@ndOut99-NX-PAK

2. **Open Fluent Forms**
   - Go to: Fluent Forms → All Forms
   - Click "Edit" on "Contact Form Demo" (Form ID: 1)

3. **Check Email Field**
   - Click on the "Email" field in the form builder
   - Look for the right panel that opens
   - Find the "Advanced" tab or "General Settings" tab
   - Look for **"Name Attribute"** or **"Element Name"** or **"Field Name"**
   - **WRITE DOWN THIS EXACT VALUE** (e.g., it might be `email`, `input_email_1`, `email_1`, etc.)

4. **Check Message Field**
   - Click on the "Your Message" field
   - Look in the right panel
   - Find the **"Name Attribute"** or **"Element Name"**
   - **WRITE DOWN THIS EXACT VALUE** (e.g., it might be `message`, `description`, `input_textarea_1`, etc.)

5. **Optional: Check Subject Field**
   - Click on the "Subject" field
   - Note its **"Name Attribute"**

6. **Tell me the exact values you found:**
   - Email field name: `???`
   - Message field name: `???`
   - Subject field name: `???`

## Alternative Method: Inspect HTML

If the above doesn't work:

1. Go to a page where the form is displayed on your site (not the builder)
2. Right-click on the Email input field → "Inspect" or "Inspect Element"
3. Look at the HTML code for the `<input>` tag
4. Find the `name="..."` attribute
5. That's the exact name we need!

Example HTML:
```html
<input type="email" name="input_email_1" class="..." />
```
In this example, the field name is `input_email_1`

## Quick Test

Once you have the field names, update `vite-plugin-api.ts`:

Replace the email/message field lines with the EXACT names you found.
