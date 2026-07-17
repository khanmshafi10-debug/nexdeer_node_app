<?php
/**
 * Add this code to your WordPress theme's functions.php file
 * or use a plugin like "Code Snippets" to add it
 * 
 * This enables CORS for the Fluent Forms AJAX endpoint
 * so your React app can submit forms directly
 */

// Enable CORS for Fluent Forms submissions
add_action('init', 'enable_fluent_forms_cors');
function enable_fluent_forms_cors() {
    // Allow requests from your development and production domains
    $allowed_origins = array(
        'http://localhost:8080',
        'http://localhost:8081',
        'http://localhost:3000',
        'https://nexdeer.com',
        'https://www.nexdeer.com'
    );
    
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Credentials: true');
    }
    
    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        exit;
    }
}

// Also add CORS headers specifically for admin-ajax.php
add_action('admin_init', 'fluent_forms_ajax_cors');
function fluent_forms_ajax_cors() {
    $allowed_origins = array(
        'http://localhost:8080',
        'http://localhost:8081',
        'http://localhost:3000',
        'https://nexdeer.com',
        'https://www.nexdeer.com'
    );
    
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
        header('Access-Control-Allow-Credentials: true');
    }
}
?>
