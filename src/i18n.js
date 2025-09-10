// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          government: "Government of India",
          home: "Home",
          about: "About Us",
          category: "Category",
          calendar: "Dairy Calendar 2025",
          login: "Login",
          signup: "Signup",
        },
      },
      hi: {
        translation: {
          government: "भारत सरकार",
          home: "होम",
          about: "हमारे बारे में",
          category: "श्रेणी",
          calendar: "डेयरी कैलेंडर 2025",
          login: "लॉगिन",
          signup: "साइनअप",
        },
      },
    },
  });

export default i18n;
