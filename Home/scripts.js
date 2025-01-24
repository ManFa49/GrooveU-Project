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

// Hero Section Text Animation
const heroText = document.querySelector('.hero h1');
heroText.innerHTML = heroText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
.add({
targets: '.letter',
scale: [4, 1],
opacity: [0, 1],
translateZ: 0,
easing: "easeOutExpo",
duration: 950,
delay: (el, i) => 70 * i
}).add({
targets: '.hero h1',
opacity: 0,
duration: 1000,
easing: "easeOutExpo",
delay: 1000
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

