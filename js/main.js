// Enhanced Animation System for DailyCrumbs
// Implements micro-animations, scroll-reveal, hero animations, subtle parallax, and mask & reveal effects

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animation systems
    initScrollReveal();
    initHeroAnimations();
    initMicroAnimations();
    initParallax();
    initFloatingElements();
    initCounterAnimations();
    initButtonInteractions();
    initMaskRevealAnimations();
});

// ===== MASK & REVEAL ANIMATIONS =====
function initMaskRevealAnimations() {
    // Line reveal animations
    initLineReveal();
    
    // Circle and wave reveals
    initCircleWaveReveal();
    
    // Curtain animations
    initCurtainReveal();
    
    // Interactive spotlight reveals
    initSpotlightReveal();
    
    // Text mask reveals
    initTextMaskReveal();
}

// Line Reveal Text Animation
function initLineReveal() {
    const lineRevealElements = document.querySelectorAll('.line-reveal');
    
    lineRevealElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else {
                    entry.target.classList.add('animate-out');
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px' 
        });
        
        element.classList.add('animate-out');
        observer.observe(element);
    });
    
    // Staggered line reveal
    const staggerElements = document.querySelectorAll('.line-reveal-stagger');
    staggerElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else {
                    entry.target.classList.add('animate-out');
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px' 
        });
        
        element.classList.add('animate-out');
        observer.observe(element);
    });
}

// Circle and Wave Reveal Effects
function initCircleWaveReveal() {
    // Circle reveal for images
    const circleRevealElements = document.querySelectorAll('.circle-reveal');
    
    circleRevealElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else {
                    entry.target.classList.add('animate-out');
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px' 
        });
        
        element.classList.add('animate-out');
        observer.observe(element);
    });
    
    // Wave reveal effects
    const waveRevealElements = document.querySelectorAll('.wave-reveal');
    
    waveRevealElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else {
                    entry.target.classList.add('animate-out');
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px' 
        });
        
        element.classList.add('animate-out');
        observer.observe(element);
    });
}

// Curtain Reveal Animations
function initCurtainReveal() {
    const curtainElements = document.querySelectorAll('.curtain-open, .curtain-vertical');
    
    curtainElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                } else {
                    entry.target.classList.add('animate-out');
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px' 
        });
        
        element.classList.add('animate-out');
        observer.observe(element);
    });
}

// Interactive Spotlight Reveal
function initSpotlightReveal() {
    const spotlightElements = document.querySelectorAll('.spotlight-reveal');
    
    spotlightElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            element.style.setProperty('--x', `${x}%`);
            element.style.setProperty('--y', `${y}%`);
        });
        
        element.addEventListener('mouseenter', () => {
            element.classList.add('revealed');
        });
        
        element.addEventListener('mouseleave', () => {
            element.classList.remove('revealed');
        });
    });
}

// Text Mask Reveal
function initTextMaskReveal() {
    const textMaskElements = document.querySelectorAll('.text-mask-reveal');
    
    textMaskElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                    const text = element.textContent;
                    element.setAttribute('data-text', text);
                } else {
                    entry.target.classList.add('animate-out');
                    entry.target.classList.remove('animate-in');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px' 
        });
        
        element.classList.add('animate-out');
        observer.observe(element);
    });
}

// ===== SCROLL-REVEAL ANIMATIONS =====
function initScrollReveal() {
    const observerOptions = {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.classList.remove('animate-out');
                
                // Handle staggered animations
                if (entry.target.classList.contains('reveal-stagger')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            } else {
                entry.target.classList.add('animate-out');
                entry.target.classList.remove('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all elements with entrance animations
    const animatedElements = document.querySelectorAll('.slide-fade-entrance, .scale-fade-entrance, .rotate-fade-entrance, .bounce-entrance, .flip-entrance, .slide-up-entrance, .slide-down-entrance, .zoom-entrance, .reveal, .reveal-stagger, .curtain-open, .curtain-vertical, .diagonal-reveal, .text-mask-reveal');
    animatedElements.forEach(element => {
        element.classList.add('animate-out');
        observer.observe(element);
    });
}

// ===== HERO SECTION ANIMATIONS =====
function initHeroAnimations() {
    // Apply hero animations with proper timing
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('.text-xl.md\\:text-2xl');
    const heroCta = document.querySelector('.explore-btn');
    
    if (heroTitle) heroTitle.classList.add('hero-title');
    if (heroSubtitle) heroSubtitle.classList.add('hero-subtitle');
    if (heroCta) heroCta.classList.add('hero-cta');
    
    // Animate floating pastry elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 1200 + (index * 200));
    });
}

// ===== MICRO-ANIMATIONS =====
function initMicroAnimations() {
    // Apply micro-animations to buttons
    const buttons = document.querySelectorAll('button, a[href]');
    buttons.forEach(button => {
        button.classList.add('btn-micro');
    });
    
    // Apply card hover effects
    const cards = document.querySelectorAll('.group, .design-card');
    cards.forEach(card => {
        card.classList.add('card-micro');
    });
    
    // Icon animations
    const icons = document.querySelectorAll('.text-3xl, .text-4xl, .text-5xl, .text-6xl, .text-7xl, .text-8xl');
    icons.forEach((icon, index) => {
        icon.classList.add('icon-fade-up');
        
        setTimeout(() => {
            icon.classList.add('animate');
        }, 800 + (index * 100));
    });
}

// ===== SUBTLE PARALLAX =====
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-bg');
    
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.classList.contains('parallax-slow') ? 0.3 : 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== FLOATING ELEMENTS =====
function initFloatingElements() {
    const floatingBg = document.querySelectorAll('.absolute .text-8xl, .absolute .text-7xl, .absolute .text-6xl');
    floatingBg.forEach((element, index) => {
        element.classList.add('floating-bg');
        element.style.animationDelay = `${index * 2}s`;
    });
}

// ===== COUNTER ANIMATIONS =====
function initCounterAnimations() {
    const statsNumbers = document.querySelectorAll('.text-4xl.md\\:text-5xl');
    
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
}

// ===== BUTTON INTERACTIONS =====
function initButtonInteractions() {
    // Enhanced "Add to Cart" buttons
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
    
    // Add ripple effects to buttons
    const allButtons = document.querySelectorAll('button, .btn-micro');
    allButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
}

// ===== UTILITY FUNCTIONS =====

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
