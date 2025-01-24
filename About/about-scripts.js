

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a, .cta-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    document.getElementById(targetID).scrollIntoView({
    behavior: 'smooth'
    });
    });
});

// Fade-in animations on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('fade-in');
    } else {
    entry.target.classList.remove('fade-in');
    }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
});

// Navbar Shrink on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Button Hover Effect
document.querySelectorAll('.cta-btn').forEach(button => {
button.addEventListener('mouseenter', function () {
this.style.transform = 'scale(1.1)';
});
button.addEventListener('mouseleave', function () {
this.style.transform = 'scale(1)';
});
});