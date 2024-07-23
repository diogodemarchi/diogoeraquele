import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./i18n/en/translation.json";
import ptTranslation from "./i18n/pt/translation.json";
import deTranslation from "./i18n/de/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      "pt-BR": ["en-US", "de-DE"],
      pt: ["en-US", "de-DE"],
      "en-US": ["de-DE", "pt-BR"],
      en: ["de-DE", "pt-BR"],
      "de-DE": ["en-US", "pt-BR"],
      de: ["en-US", "pt-BR"],
    },
    lng: "pt-BR",
    resources: {
      en: {
        translation: enTranslation,
      },
      "en-US": {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
      "pt-BR": { translation: ptTranslation },
      de: {
        translation: deTranslation,
      },
      "de-DE": {
        translation: deTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
