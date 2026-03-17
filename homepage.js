const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".bar");
const header = document.querySelector(".header");

// Hamburger menu toggle
if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// Close menu when clicking a link
document.querySelectorAll('.bar a').forEach((link) => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    if (!header) {
        return;
    }

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

    // Multilingual hero greeting animation
    const greetingEl = document.getElementById('heroGreeting');

    if (greetingEl) {
        const greetings = [
            "Hi, I'm Rafael!",            // English
            'こんにちは、ラファエルです！',     // Japanese
            '你好，我是 Rafael！',            // Mandarin Chinese
            '¡Hola, soy Rafael!',         // Spanish
            'Hi, ako si Rafael!',         // Tagalog
            'Salut, je suis Rafael !'     // French
        ];

        const switchInterval = 2000;
        const fadeTime = 320;
        let greetingIndex = 0;

        function cycleGreeting() {
            greetingEl.classList.add('is-leaving');

            window.setTimeout(() => {
                greetingIndex = (greetingIndex + 1) % greetings.length;
                greetingEl.textContent = greetings[greetingIndex];

                greetingEl.classList.remove('is-leaving');
                greetingEl.classList.add('is-entering');

                // Trigger enter transition after DOM paints the starting state.
                requestAnimationFrame(() => {
                    greetingEl.classList.remove('is-entering');
                });

                window.setTimeout(cycleGreeting, switchInterval);
            }, fadeTime);
        }

        window.setTimeout(cycleGreeting, switchInterval);
    }

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

// Contact modal controls
const contactToggle = document.getElementById('contactToggle');
const contactModalOverlay = document.getElementById('contactModalOverlay');
const contactClose = document.getElementById('contactClose');

if (contactToggle && contactModalOverlay) {
    const openModal = () => {
        contactModalOverlay.hidden = false;
        requestAnimationFrame(() => {
            contactModalOverlay.classList.add('is-open');
        });
    };

    const closeModal = () => {
        contactModalOverlay.classList.remove('is-open');
        setTimeout(() => {
            contactModalOverlay.hidden = true;
        }, 250);
    };

    contactToggle.addEventListener('click', () => {
        if (contactModalOverlay.classList.contains('is-open')) {
            closeModal();
            return;
        }
        openModal();
    });

    if (contactClose) {
        contactClose.addEventListener('click', closeModal);
    }

    contactModalOverlay.addEventListener('click', (event) => {
        if (event.target === contactModalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && contactModalOverlay.classList.contains('is-open')) {
            closeModal();
        }
    });
}