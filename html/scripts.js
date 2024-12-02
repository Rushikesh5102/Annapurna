// scripts.js

// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // Placeholder for actual authentication logic
    alert(`Login attempt with Email: ${email}`);
});

// Function to handle registration form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const userType = document.getElementById('user-type').value;
    // Placeholder for actual registration logic
    alert(`Registration attempt with Email: ${email} as ${userType}`);
});

// Track order.js
  document.querySelector('.track-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const orderId = document.getElementById('order-id').value;
    const orderStatus = 'In Transit'; // Mocked status; replace with dynamic data as needed.

    document.getElementById('display-order-id').innerText = orderId;
    document.getElementById('order-status').innerText = orderStatus;
  });