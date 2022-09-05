import i18n                 from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector     from "i18next-browser-languagedetector";
import translations         from 'i18n/translations.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "ru", "hy"],
        fallbackLng: 'en',
        resources: translations,
        interpolation: {
            escapeValue: false
        },
})

export default i18n;