// Authentication functionality for DailyCrumbs website
// This file handles login and signup form validation and submission

document.addEventListener('DOMContentLoaded', function() {
    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Handle signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

// Login form handler
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Clear previous messages
    hideMessages();
    
    // Validate inputs
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    if (!password) {
        showMessage('Please enter your password', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const hideLoading = showLoading(submitButton);
    
    // Simulate API call (in a real app, this would be an actual API request)
    setTimeout(() => {
        // Simulate successful login
        console.log('Login attempt:', { email, remember });
        
        // Store user session (simplified)
        if (remember) {
            localStorage.setItem('rememberedEmail', email);
        }
        
        showMessage('Login successful! Redirecting...', 'success');
        
        // Redirect to home page after successful login
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        
        hideLoading();
    }, 1500);
}

// Signup form handler
function handleSignup(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userType = document.getElementById('userType').value;
    const terms = document.getElementById('terms').checked;
    
    // Clear previous messages
    hideMessages();
    
    // Validate inputs
    if (!fullName || fullName.trim().length < 2) {
        showMessage('Please enter your full name', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showMessage('Password must be at least 8 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (!userType) {
        showMessage('Please select a user type', 'error');
        return;
    }
    
    if (!terms) {
        showMessage('You must agree to the terms and conditions', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const hideLoading = showLoading(submitButton);
    
    // Simulate API call (in a real app, this would be an actual API request)
    setTimeout(() => {
        // Simulate successful signup
        console.log('Signup attempt:', { fullName, email, userType });
        
        showMessage('Account created successfully! Redirecting to login...', 'success');
        
        // Redirect to login page after successful signup
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2500);
        
        hideLoading();
    }, 1500);
}

// Message display functions
function showMessage(text, type) {
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    
    // Hide both messages first
    hideMessages();
    
    if (type === 'error') {
        errorElement.textContent = text;
        errorElement.classList.remove('hidden');
    } else if (type === 'success') {
        successElement.textContent = text;
        successElement.classList.remove('hidden');
    }
}

function hideMessages() {
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    
    if (errorElement) {
        errorElement.classList.add('hidden');
        errorElement.textContent = '';
    }
    
    if (successElement) {
        successElement.classList.add('hidden');
        successElement.textContent = '';
    }
}

// Check for remembered email on page load
document.addEventListener('DOMContentLoaded', function() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const emailInput = document.getElementById('email');
    const rememberCheckbox = document.getElementById('remember');
    
    if (rememberedEmail && emailInput && rememberCheckbox) {
        emailInput.value = rememberedEmail;
        rememberCheckbox.checked = true;
    }
    
    // Clear remembered email if user unchecks "remember me"
    if (rememberCheckbox) {
        rememberCheckbox.addEventListener('change', function() {
            if (!this.checked) {
                localStorage.removeItem('rememberedEmail');
            }
        });
    }
});
