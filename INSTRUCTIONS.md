# Fix Contact Form Submission - Step by Step

## The Problem
Your React app cannot submit forms to WordPress because of CORS (Cross-Origin Resource Sharing) restrictions. The browser blocks requests from `localhost` to `go.nexdeer.com`.

## The Solution
Add CORS headers to your WordPress site so it accepts requests from your React app.

## Steps to Fix

### Option 1: Using WordPress Admin (Easiest)

1. **Login to WordPress**
   - Go to: https://go.nexdeer.com/wp-admin
   - Login with your credentials

2. **Install Code Snippets Plugin** (if not already installed)
   - Go to: Plugins → Add New
   - Search for "Code Snippets"
   - Install and Activate

3. **Add CORS Code**
   - Go to: Snippets → Add New
   - Title: "Enable CORS for Fluent Forms"
   - Paste this code:

```php
// Enable CORS for Fluent Forms
add_action('init', 'enable_cors_fluent_forms');
function enable_cors_fluent_forms() {
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    
    $allowed = array(
        'http://localhost:8080',
        'http://localhost:8081',
        'http://localhost:3000',
        'https://nexdeer.com',
        'https://www.nexdeer.com'
    );
    
    if (in_array($origin, $allowed)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
        header('Access-Control-Allow-Credentials: true');
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
}
```

4. **Save and Activate** the snippet

5. **Test the form** at: http://localhost:8081/contact

---

### Option 2: Edit functions.php directly

1. **Login to WordPress**
2. **Go to**: Appearance → Theme File Editor
3. **Select**: functions.php (on the right side)
4. **Scroll to the bottom** and add the same code as above
5. **Click "Update File"**

---

### Option 3: Via FTP/cPanel

1. **Connect via FTP** or use cPanel File Manager
2. **Navigate to**: `/wp-content/themes/your-theme-name/functions.php`
3. **Add the code** at the end of the file
4. **Save**

---

## After Adding CORS

Once CORS is enabled:

1. **Restart your React dev server**:
   ```
   Stop the server (Ctrl+C in terminal)
   npm run dev
   ```

2. **Open**: http://localhost:8081/contact

3. **Fill the form** and submit

4. **Check the terminal** where `npm run dev` is running
   - You'll see detailed logs with emojis (🚀, 📝, ✅, ❌)
   - These logs will show exactly what's happening

5. **If there are still errors**, the logs will tell us the EXACT field names needed

---

## Verification

After submitting:
- ✅ Success: You'll see "Message sent successfully!"
- ✅ Data will appear in: WordPress Admin → Fluent Forms → Entries
- ❌ If error: Terminal logs will show the exact problem

---

## Need Help?

If you still see errors after adding CORS:
1. Copy the full error message from the terminal
2. Copy the full error from browser console (F12)
3. Send me both - I'll fix it immediately

---

## Alternative: Temporary Test

If you can't edit WordPress right now, temporarily test with:

1. **Disable browser security** (Chrome):
   ```
   chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
   ```

2. Test the form - it should work without CORS

This confirms the form logic is correct, just needs CORS enabled.
