const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".bar");
const header = document.querySelector(".header");

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll('.bar a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    if (currentScroll > 100) {
        if (isSmallMobile) {
            header.style.padding = '10px 20px';
        } else if (isMobile) {
            header.style.padding = '12px 30px';
        } else {
            header.style.padding = '15px 100px';
        }
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        if (isSmallMobile) {
            header.style.padding = '12px 20px';
        } else if (isMobile) {
            header.style.padding = '15px 30px';
        } else {
            header.style.padding = '20px 100px';
        }
        header.style.background = 'rgba(255, 255, 255, 0.05)';
        header.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Smooth reveal on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll indicator click to About section
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.style.cursor = 'pointer';
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}