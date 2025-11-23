// Translations
const translations = {
    th: {
        nav: {
            home: "หน้าแรก",
            about: "เกี่ยวกับ",
            experience: "ประสบการณ์",
            education: "การศึกษา",
            skills: "ทักษะ",
            contact: "ติดต่อ"
        },
        hero: {
            badge: "พร้อมเริ่มงาน",
            greeting: "สวัสดีครับ, ผม <span class=\"text-gradient\">ยศกร</span>",
            role: "วิศวกรรมอิเล็กทรอนิกส์และระบบคอมพิวเตอร์",
            description: "มุ่งเน้นการดูแลระบบ สนับสนุนผู้ใช้งาน และพัฒนาโซลูชันด้วย Python, C++ และ SQL",
            contact: "ติดต่อผม",
            learn_more: "เรียนรู้เพิ่มเติม"
        },
        about: {
            title: "เกี่ยวกับฉัน",
            personal_info: "ข้อมูลส่วนตัว",
            label_name: "ชื่อ:",
            name: "ยศกร เหมหอมวงษ์ (กานต์)",
            label_age: "อายุ:",
            age: "24 ปี",
            label_nationality: "สัญชาติ:",
            nationality: "ไทย",
            label_military: "สถานะทางทหาร:",
            military: "ผ่านการเกณฑ์ทหารแล้ว",
            summary_title: "สรุปย่อ",
            summary_text: "ผมมีพื้นฐานด้านเทคนิคที่หลากหลาย ทั้งระบบเครือข่าย (Network), การเขียนโปรแกรม (C++, Python, SQL) และการพัฒนาเว็บ มีประสบการณ์ตรงจากการฝึกงานที่ NT และประสบการณ์ด้านการบริการลูกค้าพร้อมการแก้ไขปัญหาเชิงเทคนิคจาก Samsung ผมมุ่งเน้นการดูแลระบบและสนับสนุนผู้ใช้งานอย่างมีประสิทธิภาพ พร้อมเรียนรู้เทคโนโลยีใหม่ๆ เสมอ"
        },
        experience: {
            title: "ประสบการณ์ทำงาน",
            badge_work: "ประสบการณ์ทำงาน",
            badge_intern: "ฝึกงาน",
            samsung: {
                role: "Technical Support & Customer Service",
                company: "Samsung",
                desc1: "ให้บริการลูกค้าและแก้ไขปัญหาเชิงเทคนิคเกี่ยวกับผลิตภัณฑ์",
                desc2: "วิเคราะห์และวินิจฉัยอาการเสียของอุปกรณ์เบื้องต้น",
                desc3: "ประสานงานและให้คำแนะนำการใช้งานแก่ผู้ใช้"
            },
            nt: {
                role: "Internship Program",
                company: "NT (National Telecom Public Company Limited)",
                desc1: "เรียนรู้และปฏิบัติงานด้านระบบเครือข่ายและโทรคมนาคม",
                desc2: "ศึกษาโครงสร้างพื้นฐานของระบบอินเทอร์เน็ตองค์กร",
                desc3: "สนับสนุนการทำงานของทีมวิศวกร"
            }
        },
        education: {
            title: "การศึกษา",
            silpakorn: "มหาวิทยาลัยศิลปากร",
            degree: "วิศวกรรมอิเล็กทรอนิกส์และระบบคอมพิวเตอร์",
            university_level: "อุดมศึกษา",
            highschool: "โรงเรียนพรหมานุสรณ์",
            highschool_level: "มัธยมศึกษาตอนปลาย",
            juniorhigh_level: "มัธยมศึกษาตอนต้น",
            primary: "โรงเรียนวัดแก่นเหล็กฯ",
            primary_level: "ประถมศึกษา"
        },
        skills: {
            title: "ทักษะและความสามารถ",
            subtitle: "เครื่องมือและเทคโนโลยีที่ผมใช้งานได้คล่องแคล่ว"
        },
        contact: {
            title: "ติดต่อผม",
            subtitle: "สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ตามช่องทางด้านล่าง",
            info_title: "ข้อมูลการติดต่อ",
            label_phone: "เบอร์โทรศัพท์",
            label_email: "อีเมล",
            label_address: "ที่อยู่",
            address: "ต.ไร่ส้ม อ.เมือง จ.เพชรบุรี 76000",
            cta_title: "พร้อมเริ่มงานทันที!",
            cta_text: "ผมมีความกระตือรือร้นและพร้อมที่จะเรียนรู้สิ่งใหม่ๆ หากคุณกำลังมองหาบุคลากรที่มีความมุ่งมั่นและทักษะหลากหลาย อย่าลังเลที่จะติดต่อผมครับ",
            cta_button: "ส่งอีเมลหาผม"
        },
        footer: {
            copyright: "© 2024 Yossakorn Hemhomwong. All Rights Reserved."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            badge: "Available for Work",
            greeting: "Hello, I'm <span class=\"text-gradient\">Yossakorn</span>",
            role: "Electronics and Computer Systems Engineer",
            description: "Focused on system maintenance, user support, and solution development with Python, C++, and SQL.",
            contact: "Contact Me",
            learn_more: "Learn More"
        },
        about: {
            title: "About Me",
            personal_info: "Personal Info",
            label_name: "Name:",
            name: "Yossakorn Hemhomwong (Karn)",
            label_age: "Age:",
            age: "24 Years",
            label_nationality: "Nationality:",
            nationality: "Thai",
            label_military: "Military Status:",
            military: "Exempted",
            summary_title: "Summary",
            summary_text: "Enthusiastic candidate with foundational knowledge in Networking, C++, Python, and SQL. Possessing practical experience from an NT internship and proven ability in technical troubleshooting and customer support gained at Samsung. Focused on efficient system maintenance and user assistance."
        },
        experience: {
            title: "Work Experience",
            badge_work: "Work Experience",
            badge_intern: "Internship",
            samsung: {
                role: "Sales and Service Consultant",
                company: "Jaymart Mobile Co., Ltd. (SAMSUNG EXPERIENCE STORE)",
                desc1: "Drove sales performance for Samsung mobile devices and accessories.",
                desc2: "Provided expert technical consultation and service, including diagnostics and firmware updates.",
                desc3: "Enhanced customer satisfaction by delivering comprehensive product setup and tutorials."
            },
            nt: {
                role: "Network Engineer Intern",
                company: "National Telecom Public Co., Ltd.",
                desc1: "Gained experience in installing and maintaining network equipment.",
                desc2: "Assisted technicians in cable installation and rack organization.",
                desc3: "Contributed to equipment condition inspections and reported anomalies."
            }
        },
        education: {
            title: "Education",
            silpakorn: "Silpakorn University",
            degree: "Bachelor of Engineering in Electronics and Computer Systems",
            university_level: "Higher Education",
            highschool: "Prommanusorn School",
            highschool_level: "High School",
            juniorhigh_level: "Junior High School",
            primary: "Wat Kaen Lek School",
            primary_level: "Primary School"
        },
        skills: {
            title: "Skills & Abilities",
            subtitle: "Tools and technologies I use proficiently"
        },
        contact: {
            title: "Contact Me",
            subtitle: "Interested in working together? Feel free to contact me via the channels below.",
            info_title: "Contact Info",
            label_phone: "Phone",
            label_email: "Email",
            label_address: "Address",
            address: "Rai Som, Mueang Phetchaburi, Phetchaburi 76000",
            cta_title: "Ready to Start!",
            cta_text: "I am enthusiastic and ready to learn new things. If you are looking for a committed individual with diverse skills, please don't hesitate to contact me.",
            cta_button: "Send Email"
        },
        footer: {
            copyright: "© 2024 Yossakorn Hemhomwong. All Rights Reserved."
        }
    }
};

// State
let activeSection = 'home';
let isMenuOpen = false;
let currentLang = localStorage.getItem('lang') || 'th';
let currentTheme = localStorage.getItem('theme') || 'light';

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['home', 'about', 'experience', 'education', 'skills', 'contact'];
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

// Initialize
function init() {
    // Set initial theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    }

    // Set initial lang
    updateLanguage(currentLang);

    // Initialize Icons
    lucide.createIcons();
}

// Language Handler
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update Toggle Button Text
    if (langToggle) langToggle.textContent = lang === 'th' ? 'EN' : 'TH';

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            value = value ? value[k] : null;
        }

        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.innerHTML = value;
            }
        }
    });
}

function toggleLanguage() {
    const newLang = currentLang === 'th' ? 'en' : 'th';
    updateLanguage(newLang);
}

// Theme Handler
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    currentTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
        lucide.createIcons();
    }
}

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
if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (langToggle) langToggle.addEventListener('click', toggleLanguage);

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
        if (document.body.classList.contains('dark-mode')) {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
        if (document.body.classList.contains('dark-mode')) {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    }
});

// Initial active section check
window.dispatchEvent(new Event('scroll'));

// Run Init
init();
