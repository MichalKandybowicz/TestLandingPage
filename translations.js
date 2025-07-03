// Translation system for Biletuj landing page
const translations = {
    pl: {
        // Meta
        pageTitle: "Biletuj – Sprzedaż biletów i wejściówek online",
        
        // Hero section
        heroDesc: "Sprzedawaj bilety i wejściówki online – prosto, szybko i wygodnie.<br>Twórz wydarzenia, przyjmuj płatności, skanuj bilety na wejściu!",
        ctaBtn: "Zapisz się na start",
        
        // Features section
        featuresTitle: "Co oferuje Biletuj?",
        
        feature1Title: "Prosta rejestracja",
        feature1Desc: "Załóż konto w minutę i zacznij sprzedawać bilety na swoje wydarzenia.",
        
        feature2Title: "Kreator wydarzeń i biletów",
        feature2Desc: "Twórz wydarzenia, ustalaj ilość i cenę biletów, personalizuj formularz zakupu.",
        
        feature3Title: "Płatności online",
        feature3Desc: "Zintegrowana bramka płatnicza – szybkie i bezpieczne transakcje.",
        
        feature4Title: "Wysyłka biletów do kupującego",
        feature4Desc: "Bilety trafiają automatycznie na e-mail kupującego po zakupie.",
        
        feature5Title: "Skanowanie biletów",
        feature5Desc: "Wygodna aplikacja do skanowania biletów na wejściu – pełna kontrola uczestników.",
        
        // Steps section
        stepsTitle: "Jak to działa?",
        
        step1Title: "Zarejestruj się",
        step1Desc: "Załóż darmowe konto organizatora w kilka chwil.",
        
        step2Title: "Dodaj wydarzenie",
        step2Desc: "Opisz wydarzenie, ustal bilety i ceny.",
        
        step3Title: "Skonfiguruj formularz",
        step3Desc: "Wybierz, jakie dane ma podać kupujący.",
        
        step4Title: "Udostępnij link",
        step4Desc: "Sprzedawaj bilety przez stronę, social media lub e-mail.",
        
        step5Title: "Skanuj bilety",
        step5Desc: "Weryfikuj wejścia aplikacją mobilną lub webową.",
        
        // Founders section
        foundersTitle: "Założyciele projektu",
        founderDesc: "Opis....",
        
        // Footer
        footerText: "© 2024 Biletuj. Wszelkie prawa zastrzeżone."
    },
    
    en: {
        // Meta
        pageTitle: "Biletuj – Online Ticket Sales Platform",
        
        // Hero section
        heroDesc: "Sell tickets and passes online – simple, fast and convenient.<br>Create events, accept payments, scan tickets at the entrance!",
        ctaBtn: "Sign up for launch",
        
        // Features section
        featuresTitle: "What does Biletuj offer?",
        
        feature1Title: "Simple registration",
        feature1Desc: "Create an account in a minute and start selling tickets for your events.",
        
        feature2Title: "Event and ticket creator",
        feature2Desc: "Create events, set quantity and ticket prices, customize the purchase form.",
        
        feature3Title: "Online payments",
        feature3Desc: "Integrated payment gateway – fast and secure transactions.",
        
        feature4Title: "Ticket delivery to buyer",
        feature4Desc: "Tickets are automatically sent to the buyer's email after purchase.",
        
        feature5Title: "Ticket scanning",
        feature5Desc: "Convenient application for scanning tickets at the entrance – full participant control.",
        
        // Steps section
        stepsTitle: "How does it work?",
        
        step1Title: "Register",
        step1Desc: "Create a free organizer account in moments.",
        
        step2Title: "Add event",
        step2Desc: "Describe the event, set tickets and prices.",
        
        step3Title: "Configure form",
        step3Desc: "Choose what data the buyer should provide.",
        
        step4Title: "Share link",
        step4Desc: "Sell tickets through website, social media or email.",
        
        step5Title: "Scan tickets",
        step5Desc: "Verify entries with mobile or web application.",
        
        // Founders section
        foundersTitle: "Project founders",
        founderDesc: "Description....",
        
        // Footer
        footerText: "© 2024 Biletuj. All rights reserved."
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('biletuj-lang') || 'pl';
        this.init();
    }
    
    init() {
        this.createLanguageToggle();
        this.translatePage();
        this.updatePageLang();
    }
    
    createLanguageToggle() {
        // Create language toggle button
        const langToggle = document.createElement('div');
        langToggle.className = 'language-toggle';
        langToggle.innerHTML = `
            <button class="lang-btn ${this.currentLang === 'pl' ? 'active' : ''}" data-lang="pl">PL</button>
            <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        `;
        
        // Insert at the beginning of hero section
        const heroSection = document.querySelector('.hero');
        heroSection.insertBefore(langToggle, heroSection.firstChild);
        
        // Add event listeners
        langToggle.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                this.switchLanguage(e.target.dataset.lang);
            }
        });
    }
    
    switchLanguage(lang) {
        if (lang !== this.currentLang) {
            this.currentLang = lang;
            localStorage.setItem('biletuj-lang', lang);
            this.translatePage();
            this.updatePageLang();
            this.updateToggleButtons();
        }
    }
    
    updateToggleButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
    
    updatePageLang() {
        document.documentElement.lang = this.currentLang;
        document.title = translations[this.currentLang].pageTitle;
    }
    
    translatePage() {
        const t = translations[this.currentLang];
        
        // Hero section
        document.querySelector('[data-translate="heroDesc"]').innerHTML = t.heroDesc;
        document.querySelectorAll('[data-translate="ctaBtn"]').forEach(btn => {
            btn.textContent = t.ctaBtn;
        });
        
        // Features section
        document.querySelector('[data-translate="featuresTitle"]').textContent = t.featuresTitle;
        
        document.querySelector('[data-translate="feature1Title"]').textContent = t.feature1Title;
        document.querySelector('[data-translate="feature1Desc"]').textContent = t.feature1Desc;
        
        document.querySelector('[data-translate="feature2Title"]').textContent = t.feature2Title;
        document.querySelector('[data-translate="feature2Desc"]').textContent = t.feature2Desc;
        
        document.querySelector('[data-translate="feature3Title"]').textContent = t.feature3Title;
        document.querySelector('[data-translate="feature3Desc"]').textContent = t.feature3Desc;
        
        document.querySelector('[data-translate="feature4Title"]').textContent = t.feature4Title;
        document.querySelector('[data-translate="feature4Desc"]').textContent = t.feature4Desc;
        
        document.querySelector('[data-translate="feature5Title"]').textContent = t.feature5Title;
        document.querySelector('[data-translate="feature5Desc"]').textContent = t.feature5Desc;
        
        // Steps section
        document.querySelector('[data-translate="stepsTitle"]').textContent = t.stepsTitle;
        
        document.querySelector('[data-translate="step1Title"]').textContent = t.step1Title;
        document.querySelector('[data-translate="step1Desc"]').textContent = t.step1Desc;
        
        document.querySelector('[data-translate="step2Title"]').textContent = t.step2Title;
        document.querySelector('[data-translate="step2Desc"]').textContent = t.step2Desc;
        
        document.querySelector('[data-translate="step3Title"]').textContent = t.step3Title;
        document.querySelector('[data-translate="step3Desc"]').textContent = t.step3Desc;
        
        document.querySelector('[data-translate="step4Title"]').textContent = t.step4Title;
        document.querySelector('[data-translate="step4Desc"]').textContent = t.step4Desc;
        
        document.querySelector('[data-translate="step5Title"]').textContent = t.step5Title;
        document.querySelector('[data-translate="step5Desc"]').textContent = t.step5Desc;
        
        // Founders section
        document.querySelector('[data-translate="foundersTitle"]').textContent = t.foundersTitle;
        document.querySelectorAll('[data-translate="founderDesc"]').forEach(desc => {
            desc.textContent = t.founderDesc;
        });
        
        // Footer
        document.querySelector('[data-translate="footerText"]').innerHTML = t.footerText;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});