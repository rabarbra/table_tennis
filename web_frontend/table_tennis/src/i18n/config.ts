import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from 'i18n/translations.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: translations,
    interpolation: {
        escapeValue: false
    },
})

export default i18n;