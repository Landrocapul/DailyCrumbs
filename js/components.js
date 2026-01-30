// Reusable components for DailyCrumbs website
// This file contains header and footer components that are shared across pages

// Header component
function loadHeader() {
    const headerHTML = `
        <header class="bg-white shadow-md sticky top-0 z-50">
            <nav class="container mx-auto px-4">
                <div class="flex justify-between items-center py-4">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="index.html" class="text-2xl font-bold text-red-900 hover:text-red-700 transition">
                            🥐 DailyCrumbs
                        </a>
                    </div>
                    
                    <!-- Navigation Menu -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="index.html" class="text-gray-700 hover:text-red-600 transition">Home</a>
                        <a href="#" class="text-gray-700 hover:text-red-600 transition">Menu</a>
                        <a href="#" class="text-gray-700 hover:text-red-600 transition">About</a>
                        <a href="#" class="text-gray-700 hover:text-red-600 transition">Contact</a>
                    </div>
                    
                    <!-- Auth Buttons -->
                    <div class="hidden md:flex items-center space-x-4">
                        <a href="login.html" class="text-red-600 hover:text-red-700 font-medium">Login</a>
                        <a href="signup.html" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Sign Up</a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobileMenuBtn" class="md:hidden text-gray-700 hover:text-red-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobileMenu" class="hidden md:hidden pb-4">
                    <div class="flex flex-col space-y-2">
                        <a href="index.html" class="text-gray-700 hover:text-red-600 py-2">Home</a>
                        <a href="#" class="text-gray-700 hover:text-red-600 py-2">Menu</a>
                        <a href="#" class="text-gray-700 hover:text-red-600 py-2">About</a>
                        <a href="#" class="text-gray-700 hover:text-red-600 py-2">Contact</a>
                        <div class="flex space-x-2 pt-2">
                            <a href="login.html" class="text-red-600 hover:text-red-700 font-medium">Login</a>
                            <a href="signup.html" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // Insert header into the page
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
        
        // Add mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

// Footer component
function loadFooter() {
    const footerHTML = `
        <footer class="bg-red-900 text-white">
            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div>
                        <h3 class="text-xl font-bold mb-4">🥐 DailyCrumbs</h3>
                        <p class="text-red-100 mb-4">
                            Connecting customers with local bakeries for fresh, delicious pastries delivered daily.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-red-100 hover:text-white transition">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-red-100 hover:text-white transition">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-red-100 hover:text-white transition">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="text-red-100 hover:text-white transition">Home</a></li>
                            <li><a href="#" class="text-red-100 hover:text-white transition">Menu</a></li>
                            <li><a href="#" class="text-red-100 hover:text-white transition">About Us</a></li>
                            <li><a href="#" class="text-red-100 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    
                    <!-- Customer Service -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-red-100 hover:text-white transition">FAQ</a></li>
                            <li><a href="#" class="text-red-100 hover:text-white transition">Delivery Info</a></li>
                            <li><a href="#" class="text-red-100 hover:text-white transition">Returns</a></li>
                            <li><a href="#" class="text-red-100 hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                    
                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul class="space-y-2 text-red-100">
                            <li>📧 info@dailycrumbs.com</li>
                            <li>📞 1-800-PASTRY</li>
                            <li>📍 123 Bakery Lane, Sweet City</li>
                            <li>🕐 Mon-Sat: 6AM-8PM, Sun: 7AM-6PM</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Bottom Bar -->
                <div class="border-t border-red-800 mt-8 pt-8 text-center">
                    <p class="text-red-100">
                        &copy; 2024 DailyCrumbs. All rights reserved. Made with ❤️ for pastry lovers.
                    </p>
                </div>
            </div>
        </footer>
    `;
    
    // Insert footer into the page
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});
