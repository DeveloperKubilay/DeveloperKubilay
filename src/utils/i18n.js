import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Create a promise that will be resolved when translations are loaded
let translationsLoaded;
export const i18nInitialized = new Promise(resolve => {
  translationsLoaded = resolve;
});

const loadTranslations = async () => {
  const languages = ["en", "tr"];
  const resources = {};

  try {
    // Load all translations in parallel
    const translationPromises = languages.map(async (lang) => {
      try {
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${lang} translation: ${response.statusText}`);
        }
        resources[lang] = {
          translation: await response.json(),
        };
      } catch (error) {
        console.error(`Failed to load ${lang} translations:`, error);
      }
    });

    await Promise.all(translationPromises);
    
    // Get user preferred language from localStorage or use browser language
    const savedLanguage = localStorage.getItem('userLanguage');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLanguage || (languages.includes(browserLang) ? browserLang : "tr");
    
    console.log("Initializing i18n with language:", defaultLang);
    console.log("Available resources:", resources);

    await i18n.use(initReactI18next).init({
      resources,
      lng: defaultLang,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
        bindI18n: 'languageChanged loaded',
        bindI18nStore: 'added removed',
      }
    });
    
    // Resolve the promise when translations are loaded
    translationsLoaded();
    console.log("Translations loaded successfully");
  } catch (error) {
    console.error("Error loading translations:", error);
    // Still resolve the promise even if there's an error
    translationsLoaded();
  }
};

// Add function to change language
export const changeLanguage = (lang) => {
  console.log(`Changing language to: ${lang}`);
  localStorage.setItem('userLanguage', lang);
  return i18n.changeLanguage(lang);
};

// Start loading translations immediately
loadTranslations();

export default i18n;
