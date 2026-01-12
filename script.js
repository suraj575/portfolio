// ===== Mobile Navigation Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
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

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');
const texts = ['DevOps Engineer', 'Cloud Architect', 'Kubernetes Expert', 'Automation Specialist'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeText, speed);
}

// Start typing animation
setTimeout(typeText, 1000);

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .stat-item, .about-text, .contact-info, .contact-form'
);

animateElements.forEach(el => {
    observer.observe(el);
});

// ===== Skill Progress Bars Animation =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
    skillObserver.observe(category);
});

// ===== Form Submission =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    console.log('Form submitted:', formData);
    
    // Show success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent! ✓';
    submitButton.style.background = 'linear-gradient(135deg, #27c93f 0%, #20bf6b 100%)';
    submitButton.disabled = true;
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.background = '';
        submitButton.disabled = false;
    }, 3000);
});

// ===== Active Navigation Link Highlighting =====
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ===== Parallax Effect for Hero Background =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ===== Code Window Typing Effect =====
const codeLines = document.querySelectorAll('.code-line');
let codeIndex = 0;

function typeCodeLine() {
    if (codeIndex < codeLines.length) {
        const line = codeLines[codeIndex];
        const originalContent = line.innerHTML;
        line.innerHTML = '';
        line.style.opacity = '0';
        
        setTimeout(() => {
            line.innerHTML = originalContent;
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.5s ease';
            codeIndex++;
            if (codeIndex < codeLines.length) {
                setTimeout(typeCodeLine, 300);
            }
        }, 100);
    }
}

// Start code typing effect after a delay
setTimeout(typeCodeLine, 2000);

// ===== Add Active Class to Nav Links on Load =====
window.addEventListener('load', () => {
    highlightNav();
});

// ===== Smooth Reveal Animation for Stats =====
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const finalValue = statNumber.textContent;
            const numericValue = parseInt(finalValue);
            
            if (!isNaN(numericValue)) {
                let currentValue = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        statNumber.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        statNumber.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => {
    statsObserver.observe(item);
});

// ===== Add Hover Effect to Project Cards =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Console Welcome Message =====
console.log('%c👋 Welcome to my Portfolio!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion for DevOps and Cloud Technologies', 'color: #94a3b8; font-size: 14px;');
console.log('%cFeel free to explore the code! 🚀', 'color: #7c3aed; font-size: 12px;');
