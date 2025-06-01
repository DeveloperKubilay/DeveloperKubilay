import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Create a promise that will be resolved when translations are loaded
let translationsLoaded;
export const i18nInitialized = new Promise(resolve => {
  translationsLoaded = resolve;
});

const loadTranslations = async () => {
  const languages = ["en", "tr", "ar", "de", "es", "fr", "ja", "ru", "zh"];
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
    
    // Only log in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log("Initializing i18n with language:", defaultLang);
    }
    
    if (Object.keys(resources).length === 0) {
      throw new Error("No translation resources were loaded");
    }
    
    await i18n.use(initReactI18next).init({
      resources,
      lng: defaultLang,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      debug: false, // Disable debug logs
      react: {
        useSuspense: false,
        bindI18n: 'languageChanged loaded',
        bindI18nStore: 'added removed',
      }
    });
    
    // Resolve the promise when translations are loaded
    translationsLoaded();
    
    // Only log in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log("Translations loaded successfully");
    }
  } catch (error) {
    console.error("Error loading translations:", error);
    
    // Provide fallback translations if fetching fails
    const fallbackResources = {
      en: {
        translation: {
          "loading": "Loading...",
          "hello": "Hello",
          "greeting": "Hello, I'm",
          "name": "Kubilay"
          // Add other essential translations here
        }
      },
      tr: {
        translation: {
          "loading": "Yükleniyor...",
          "hello": "Merhaba",
          "greeting": "Merhaba, Ben",
          "name": "Kubilay"
          // Add other essential translations here
        }
      }
    };
    
    try {
      await i18n.use(initReactI18next).init({
        resources: fallbackResources,
        lng: "tr",
        fallbackLng: "en",
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: false
        }
      });
    } catch (err) {
      console.error("Critical error initializing i18n with fallbacks:", err);
    }
    
    // Still resolve the promise even if there's an error
    translationsLoaded();
  }
};

// Add function to change language
export const changeLanguage = (lang) => {
  // Only log in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`Changing language to: ${lang}`);
  }
  localStorage.setItem('userLanguage', lang);
  return i18n.changeLanguage(lang);
};

// Start loading translations immediately
loadTranslations();

export default i18n;