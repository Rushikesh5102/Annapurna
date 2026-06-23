// scripts.js — safe global script with null guards

// Login form (only runs on login-registration.html)
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        alert(`Login attempt with Email: ${email}`);
    });
}

// Registration form (only runs on login-registration.html)
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const userType = document.getElementById('user-type').value;
        alert(`Registration attempt with Email: ${email} as ${userType}`);
    });
}

// Track order form (only runs on order-tracking.html)
const trackForm = document.querySelector('.track-form');
if (trackForm) {
    trackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const orderId = document.getElementById('order-id').value;
        const displayId = document.getElementById('display-order-id');
        const orderStatus = document.getElementById('order-status');
        if (displayId) displayId.innerText = orderId;
        if (orderStatus) orderStatus.innerText = 'In Transit';
    });
}