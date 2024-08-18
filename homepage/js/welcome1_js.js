const translations = {
    en: {
        logo: "Yugal",
        home: "Home",
        features: "Features",
        aboutUs: "About Us",
        testimonials: "Testimonials",
        blog: "Blog",
        contact: "Contact",
        joinNow: "Join Now"
    },
    ne: {
        logo: "युगल",
        home: "गृहपृष्ठ",
        features: "विशेषताहरू",
        aboutUs: "हाम्रो बारेमा",
        testimonials: "प्रशंसापत्र",
        blog: "ब्लग",
        contact: "सम्पर्क",
        joinNow: "अब सम्मिलित हुनुहोस्"
    },
    es: {
        logo: "Yugal",
        home: "Inicio",
        features: "Características",
        aboutUs: "Sobre Nosotros",
        testimonials: "Testimonios",
        blog: "Blog",
        contact: "Contacto",
        joinNow: "Únete Ahora"
    },
    fr: {
        logo: "Yugal",
        home: "Accueil",
        features: "Caractéristiques",
        aboutUs: "À Propos De Nous",
        testimonials: "Témoignages",
        blog: "Blog",
        contact: "Contact",
        joinNow: "Rejoignez Maintenant"
    },
    de: {
        logo: "Yugal",
        home: "Startseite",
        features: "Merkmale",
        aboutUs: "Über Uns",
        testimonials: "Testimonials",
        blog: "Blog",
        contact: "Kontakt",
        joinNow: "Jetzt Beitreten"
    },
    zh: {
        logo: "友加尔",
        home: "首页",
        features: "功能",
        aboutUs: "关于我们",
        testimonials: "推荐",
        blog: "博客",
        contact: "联系",
        joinNow: "现在加入"
    },
    hi: {
        logo: "युगल",
        home: "होम",
        features: "विशेषताएं",
        aboutUs: "हमारे बारे में",
        testimonials: "प्रशंसापत्र",
        blog: "ब्लॉग",
        contact: "संपर्क",
        joinNow: "अभी शामिल हों"
    }
};

function changeLanguage() {
    const language = document.getElementById('language').value;
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });
}
