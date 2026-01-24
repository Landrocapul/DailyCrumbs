// Main JavaScript functionality for DailyCrumbs website
// This file contains general functionality for the landing page

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Enhanced scroll animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger animations
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards for animation
    const animatedElements = document.querySelectorAll('section, .group');
    animatedElements.forEach((element, index) => {
        // Only set initial state if not already visible
        const rect = element.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(element);
        } else {
            // Element is already visible, ensure it's shown
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
    
    // Enhanced card interactions
    const pastryCards = document.querySelectorAll('.group');
    pastryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-lift');
            
            // Add a subtle glow effect
            this.style.boxShadow = '0 20px 40px rgba(245, 158, 11, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-lift');
            this.style.boxShadow = '';
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
    
    // Handle "Add to Cart" buttons with enhanced feedback
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Add to Cart')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handleAddToCart(this);
            });
        }
    });
    
    // Handle "Explore Full Menu" button
    const exploreButton = document.querySelector('button');
    if (exploreButton && exploreButton.textContent.includes('Explore Full Menu')) {
        exploreButton.addEventListener('click', function() {
            showNotification('Full menu coming soon! 🍰', 'info');
        });
    }
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('section.relative');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = heroSection.querySelectorAll('.absolute');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Add floating animation to decorative elements
    const decorativeElements = document.querySelectorAll('.absolute .text-8xl, .absolute .text-7xl, .absolute .text-6xl, .absolute .text-5xl');
    decorativeElements.forEach((element, index) => {
        element.classList.add('animate-float');
        element.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Counter animation for stats
    const statsNumbers = document.querySelectorAll('.text-4xl, .text-5xl');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Ripple effect function
function createRipple(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(245, 158, 11, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-ripple]')) {
        style.setAttribute('data-ripple', 'true');
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Enhanced add to cart functionality
function handleAddToCart(button) {
    const originalContent = button.innerHTML;
    const productName = button.closest('.group').querySelector('h3').textContent;
    
    // Change button to loading state
    button.innerHTML = `
        <span class="flex items-center justify-center gap-2">
            <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding...
        </span>
    `;
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success state
        button.innerHTML = `
            <span class="flex items-center justify-center gap-2">
                ✅ Added to Cart
            </span>
        `;
        button.classList.add('bg-green-600', 'hover:bg-green-700');
        button.classList.remove('bg-gradient-to-r', 'from-amber-600', 'to-orange-600');
        
        // Show notification
        showNotification(`${productName} added to cart! 🛒`, 'success');
        
        // Reset button after delay
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.disabled = false;
            button.classList.remove('bg-green-600', 'hover:bg-green-700');
            button.classList.add('bg-gradient-to-r', 'from-amber-600', 'to-orange-600');
        }, 2000);
    }, 1000);
}

// Counter animation for stats
function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('★');
    const isPlus = target.includes('+');
    let finalNumber = parseFloat(target.replace(/[^0-9.]/g, ''));
    
    if (isNaN(finalNumber)) return;
    
    let currentNumber = 0;
    const increment = finalNumber / 50;
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(timer);
        }
        
        if (isPercentage) {
            element.textContent = currentNumber.toFixed(1) + '★';
        } else if (isPlus) {
            element.textContent = Math.floor(currentNumber) + '+';
        } else {
            element.textContent = Math.floor(currentNumber);
        }
    }, 30);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 p-4 rounded-lg shadow-xl transform translate-x-full transition-all duration-500 flex items-center gap-3`;
    
    // Set icon and color based on type
    let icon = '';
    if (type === 'success') {
        notification.className += ' bg-green-500 text-white';
        icon = '✅';
    } else if (type === 'error') {
        notification.className += ' bg-red-500 text-white';
        icon = '❌';
    } else {
        notification.className += ' bg-amber-500 text-white';
        icon = 'ℹ️';
    }
    
    notification.innerHTML = `
        <span class="text-xl">${icon}</span>
        <span class="font-medium">${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-4 text-white/80 hover:text-white">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Slide in with bounce effect
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0', 'animate-bounce');
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 500);
    }, 4000);
}

// Form validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

// Loading state helper
function showLoading(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    button.classList.add('opacity-75');
    
    return function hideLoading() {
        button.textContent = originalText;
        button.disabled = false;
        button.classList.remove('opacity-75');
    };
}
