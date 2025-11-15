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
        return;
    }
    
    let current = 0;
    const increment = numericTarget / (duration / 16);
    
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

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && statNumber.textContent.trim()) {
                const targetValue = statNumber.textContent.trim();
                // Start animation
                animateCounter(statNumber, targetValue);
                statsObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

// Observe all stat items
document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
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
