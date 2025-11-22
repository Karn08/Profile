// Initialize Lucide icons
lucide.createIcons();

// State
let activeSection = 'home';
let isMenuOpen = false;

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];

// Scroll to section handler
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        closeMenu();
    }
}

// Set active section
function setActiveSection(sectionId) {
    activeSection = sectionId;

    // Update desktop menu classes
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Toggle mobile menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

function closeMenu() {
    isMenuOpen = false;
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
}

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);

// Scroll Spy
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
            if (activeSection !== section) {
                setActiveSection(section);
            }
        }
    }

    // Navbar background on scroll
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
});

// Initial active section check
window.dispatchEvent(new Event('scroll'));
