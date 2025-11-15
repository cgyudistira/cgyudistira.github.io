// ===== PARTICLE BACKGROUND =====
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#8B5CF6'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.3,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#8B5CF6',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
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
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

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

// ===== CURSOR GLOW EFFECT =====
const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.display = 'block';
        glow.style.left = e.clientX - 10 + 'px';
        glow.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mouseleave', () => {
        glow.style.display = 'none';
    });
};

// Only enable cursor glow on desktop
if (window.innerWidth > 768) {
    createCursorGlow();
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
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const adminBtn = document.getElementById('adminBtn');
const automationBtn = document.getElementById('automationBtn');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

// Function to open modal
function openLoginModal() {
    console.log('Opening login modal');
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close mobile menu if open
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Login button (works for both desktop and mobile)
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openLoginModal();
    });
}

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('active')) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Admin button click
if (adminBtn) {
    adminBtn.addEventListener('click', () => {
        // Add your admin portal URL here
        console.log('Admin portal clicked');
        // window.location.href = 'your-admin-url';
    });
}

// Automation button click
if (automationBtn) {
    automationBtn.addEventListener('click', () => {
        window.open('https://n8n.cgyudistira.my.id/', '_blank');
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// ===== CUSTOM CURSOR =====
if (window.innerWidth > 768) {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
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
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-card, .contact-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        document.body.classList.add('cursor-click');
    });

    document.addEventListener('mouseup', () => {
        document.body.classList.remove('cursor-click');
    });
}

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

// ===== PARALLAX EFFECT ON SCROLL =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero shapes
    const shapes = document.querySelectorAll('.gradient-orb');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translate(${scrolled * speed * 0.5}px, ${scrolled * speed}px)`;
    });
    
    // Parallax for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
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

// ===== ADD SHIMMER EFFECT TO GRADIENT TEXT =====
const gradientTexts = document.querySelectorAll('.gradient-text, .hero-title .username');
gradientTexts.forEach(text => {
    text.classList.add('shimmer-text');
});

// ===== FLOATING ANIMATION FOR CARDS =====
const floatingCards = document.querySelectorAll('.skill-card, .project-card');
floatingCards.forEach((card, index) => {
    if (index % 2 === 0) {
        card.style.animation = `floatSlow ${6 + index * 0.5}s ease-in-out infinite`;
    } else {
        card.style.animation = `floatMedium ${7 + index * 0.5}s ease-in-out infinite`;
    }
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
