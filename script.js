// ===== WAIT FOR DOM AND PARTICLES.JS TO LOAD =====
window.addEventListener('load', function() {
    console.log('🚀 Page loaded, initializing...');
    
    // Check if particlesJS is available
    if (typeof particlesJS !== 'undefined') {
        console.log('✅ Particles.js loaded');
        initParticles();
    } else {
        console.error('❌ Particles.js not loaded');
    }
});

// ===== OPTIMIZED PARTICLE BACKGROUND =====
function initParticles() {
    particlesJS('particles-js', {
    particles: {
        number: {
            value: 50, // Reduced from 80 for better performance
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#8B5CF6'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false // Disable opacity animation for performance
            }
        },
        size: {
            value: 6, // Larger particles for better visibility
            random: true,
            anim: {
                enable: false // Disable size animation for performance
            }
        },
        line_linked: {
            enable: true,
            distance: 200, // Increased for better visibility
            color: '#8B5CF6',
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 1.5, // Slower for smoother performance
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: false // Disable click to reduce interactions
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.6
                }
            }
        }
    },
    retina_detect: true
    });
    
    // Force refresh particles after initialization
    setTimeout(() => {
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            window.pJSDom[0].pJS.particles.size.value = 6;
            window.pJSDom[0].pJS.particles.line_linked.width = 2;
            window.pJSDom[0].pJS.particles.line_linked.distance = 200;
            window.pJSDom[0].pJS.fn.particlesRefresh();
            console.log('✅ Particles size forced to 6px');
        }
    }, 500);
    
    console.log('✅ Particles initialized (optimized)');
}

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.skill-card, .project-card, .about-grid, .contact-card');
fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 20, 0.95)';
        navbar.style.boxShadow = '0 5px 30px rgba(139, 92, 246, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 20, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== TYPING EFFECT FOR HERO =====
const typingTexts = document.querySelectorAll('.typing-text');
typingTexts.forEach((text, index) => {
    const originalText = text.textContent;
    text.textContent = '';
    text.style.opacity = '1';
    
    let charIndex = 0;
    const delay = index * 1000 + 1500;
    
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (charIndex < originalText.length) {
                text.textContent += originalText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }, delay);
});

// ===== ANIMATED COUNTER FOR STATS =====
const animateCounter = (element, targetText, duration = 2000) => {
    // Extract number and suffix from target text
    const hasPlus = targetText.includes('+');
    const hasPercent = targetText.includes('%');
    const numericTarget = parseInt(targetText.replace(/[^0-9]/g, ''));
    
    // If parsing fails, just show the original text
    if (isNaN(numericTarget) || numericTarget === 0) {
        console.log('Invalid target:', targetText);
        return;
    }
    
    console.log('Animating:', targetText, 'to', numericTarget);
    
    let current = 0;
    const increment = numericTarget / (duration / 16);
    
    // Set initial value to 0
    element.textContent = '0' + (hasPercent ? '%' : hasPlus ? '+' : '');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            element.textContent = numericTarget + (hasPercent ? '%' : hasPlus ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (hasPercent ? '%' : hasPlus ? '+' : '');
        }
    }, 16);
};

// Initialize stats animation when page loads
window.addEventListener('load', () => {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && statNumber.textContent.trim()) {
                    const targetValue = statNumber.textContent.trim();
                    // Start animation
                    setTimeout(() => {
                        animateCounter(statNumber, targetValue);
                    }, 100);
                    statsObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.3 });

    // Observe all stat items
    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
});

// ===== PARALLAX EFFECT FOR GRADIENT ORBS =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.3;
        orb.style.transform = `translate(${scrolled * speed * 0.5}px, ${scrolled * speed}px)`;
    });
});

// ===== CUSTOM CURSOR (REPLACED OLD CURSOR GLOW) =====
if (window.innerWidth > 768) {
    console.log('🎯 Initializing custom cursor...');
    
    // Remove default cursor
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    // Add cursor none to all elements
    const style = document.createElement('style');
    style.textContent = `
        * {
            cursor: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #8B5CF6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transition: all 0.1s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4px;
        height: 4px;
        background: #8B5CF6;
        border-radius: 50%;
    `;
    cursor.appendChild(cursorDot);

    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    follower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 1px solid #8B5CF6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        transition: all 0.3s ease;
        opacity: 0.5;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follower animation
    function animateFollower() {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;
        
        followerX += distX * 0.1;
        followerY += distY * 0.1;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card, .contact-card, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.background = 'rgba(139, 92, 246, 0.1)';
            cursor.style.borderColor = '#EC4899';
            follower.style.width = '60px';
            follower.style.height = '60px';
            follower.style.borderColor = '#EC4899';
            follower.style.opacity = '0.8';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'transparent';
            cursor.style.borderColor = '#8B5CF6';
            follower.style.width = '40px';
            follower.style.height = '40px';
            follower.style.borderColor = '#8B5CF6';
            follower.style.opacity = '0.5';
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    console.log('✅ Custom cursor loaded!');
}

// ===== SKILL CARD HOVER EFFECT =====
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== PROJECT CARD 3D TILT EFFECT =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== PROGRESS BAR ANIMATION =====
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            if (progressBar) {
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
    progressObserver.observe(card);
});

// ===== LAZY LOAD IMAGES (if any added later) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== CONSOLE MESSAGE =====
console.log('%c🚀 Welcome to my portfolio!', 'color: #8B5CF6; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #EC4899; font-size: 14px;');

// ===== LOGIN MODAL =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔐 Initializing login modal...');
    
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const adminBtn = document.getElementById('adminBtn');
    const automationBtn = document.getElementById('automationBtn');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // Function to open modal
    function openLoginModal() {
        console.log('✅ Opening login modal');
        if (loginModal) {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Close mobile menu if open
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        } else {
            console.error('❌ Login modal not found');
        }
    }

    // Login button (works for both desktop and mobile)
    if (loginBtn) {
        console.log('✅ Login button found');
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Login button clicked');
            openLoginModal();
        });
    } else {
        console.error('❌ Login button not found');
    }

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && loginModal && loginModal.classList.contains('active')) {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Admin button click
    if (adminBtn) {
        adminBtn.addEventListener('click', () => {
            console.log('🔧 Admin portal clicked');
            // Add your admin portal URL here
            // window.location.href = 'your-admin-url';
        });
    }

    // Automation button click
    if (automationBtn) {
        console.log('✅ Automation button found');
        automationBtn.addEventListener('click', () => {
            console.log('🤖 Opening automation portal');
            window.open('https://n8n.cgyudistira.my.id/', '_blank');
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    console.log('✅ Login modal initialized');
});

// ===== CUSTOM CURSOR (DUPLICATE REMOVED - USING INLINE STYLES VERSION ABOVE) =====

// ===== SCROLL PROGRESS INDICATOR =====
const scrollIndicator = document.createElement('div');
scrollIndicator.className = 'scroll-indicator';
document.body.appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollIndicator.style.width = scrolled + '%';
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.section, .skill-card, .project-card, .about-grid, .contact-card');

revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ===== MAGNETIC BUTTON EFFECT =====
const magneticButtons = document.querySelectorAll('.btn, .nav-login-btn, .modal-btn');

magneticButtons.forEach(btn => {
    btn.classList.add('magnetic-btn');
    
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ===== OPTIMIZED PARALLAX (ONLY IN HERO SECTION) =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            
            // Only apply parallax if in hero section (first 100vh)
            if (scrolled < window.innerHeight) {
                // Parallax for hero shapes
                const shapes = document.querySelectorAll('.gradient-orb');
                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 0.2; // Reduced speed
                    shape.style.transform = `translate(${scrolled * speed * 0.3}px, ${scrolled * speed}px)`;
                });
                
                // Parallax for hero content
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                    heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
                }
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// ===== RIPPLE EFFECT =====
const rippleButtons = document.querySelectorAll('.btn, button');
rippleButtons.forEach(btn => {
    btn.classList.add('ripple');
});

// ===== SMOOTH SCROLL WITH EASING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== OPTIMIZED: SHIMMER ONLY ON HOVER =====
const gradientTexts = document.querySelectorAll('.gradient-text, .hero-title .username');
gradientTexts.forEach(text => {
    text.addEventListener('mouseenter', function() {
        this.classList.add('shimmer-text');
    });
    
    text.addEventListener('mouseleave', function() {
        this.classList.remove('shimmer-text');
    });
});

// ===== OPTIMIZED: FLOATING ANIMATION ONLY ON HOVER =====
const floatingCards = document.querySelectorAll('.skill-card, .project-card');
floatingCards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'floatSlow 2s ease-in-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Animate hero elements sequentially
    const heroElements = [
        '.hero-badge',
        '.hero-title',
        '.hero-name',
        '.hero-subtitle',
        '.hero-description',
        '.hero-buttons',
        '.hero-stats'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
});

console.log('%c🚀 Custom cursor and animations loaded!', 'color: #8B5CF6; font-size: 14px; font-weight: bold;');


// ===== FIX LOGO DISPLAY =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Fixing logo display...');
    
    // Check navbar logo
    const navBrand = document.querySelector('.nav-brand');
    const navLogo = document.querySelector('.nav-brand .brand-logo-img');
    
    if (navLogo && navBrand) {
        // Wait a bit for image to load
        setTimeout(() => {
            if (navLogo.complete && navLogo.naturalHeight !== 0) {
                navBrand.classList.add('has-logo');
                console.log('✅ Navbar logo loaded, hiding icon/text');
            } else {
                // If logo fails, remove it
                navLogo.remove();
                console.log('⚠️ Navbar logo failed, using fallback');
            }
        }, 100);
    }
    
    // Check footer logo
    const footerBrand = document.querySelector('.brand-logo');
    const footerLogo = document.querySelector('.footer-logo-img');
    
    if (footerLogo && footerBrand) {
        setTimeout(() => {
            if (footerLogo.complete && footerLogo.naturalHeight !== 0) {
                footerBrand.classList.add('has-logo');
                console.log('✅ Footer logo loaded, hiding icon/text');
            } else {
                footerLogo.remove();
                console.log('⚠️ Footer logo failed, using fallback');
            }
        }, 100);
    }
});
