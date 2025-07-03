// Language switching functionality
class LanguageToggle {
    constructor() {
        this.currentLanguage = 'pl'; // Default to Polish
        this.init();
    }

    init() {
        this.createToggleButton();
        this.bindEvents();
        this.loadLanguage();
    }

    createToggleButton() {
        // Create language toggle container
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'language-toggle';
        toggleContainer.innerHTML = `
            <button class="lang-btn active" data-lang="pl">PL</button>
            <button class="lang-btn" data-lang="en">EN</button>
        `;

        // Insert at the beginning of hero section
        const heroSection = document.querySelector('.hero');
        heroSection.insertBefore(toggleContainer, heroSection.firstChild);
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                const selectedLang = e.target.dataset.lang;
                this.switchLanguage(selectedLang);
            }
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update document language
        document.documentElement.lang = lang;

        // Save preference to localStorage
        localStorage.setItem('preferred-language', lang);

        // Update all translatable elements
        this.updateContent();
    }

    updateContent() {
        // Update all elements with data-translations
        document.querySelectorAll('[data-translations]').forEach(element => {
            try {
                const translations = JSON.parse(element.dataset.translations);
                if (translations[this.currentLanguage]) {
                    element.textContent = translations[this.currentLanguage];
                }
            } catch (e) {
                console.error('Error parsing translations:', e);
            }
        });

        // Update elements with data-html-translations (for HTML content)
        document.querySelectorAll('[data-html-translations]').forEach(element => {
            try {
                const translations = JSON.parse(element.dataset.htmlTranslations);
                if (translations[this.currentLanguage]) {
                    element.innerHTML = translations[this.currentLanguage];
                }
            } catch (e) {
                console.error('Error parsing HTML translations:', e);
            }
        });

        // Update title
        const titleTranslations = {
            'pl': 'Biletuj – Sprzedaż biletów i wejściówek online',
            'en': 'Biletuj – Online Ticket and Entry Sales'
        };
        document.title = titleTranslations[this.currentLanguage];
    }

    loadLanguage() {
        // Load saved language preference or default to Polish
        const savedLang = localStorage.getItem('preferred-language') || 'pl';
        this.switchLanguage(savedLang);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageToggle();
});