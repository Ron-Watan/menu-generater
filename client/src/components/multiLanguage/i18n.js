import i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en: {
        translation: {
          "text": "hello world"
        }
      },
      th: {
        translation: {
          "text": "thai"
        }
      },
    }
  });

export default i18n;