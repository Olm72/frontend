import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Configuración de i18next
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma por defecto
    supportedLngs: ['en', 'es'], // Idiomas soportados
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta para los archivos de traducción
    },
    interpolation: {
      escapeValue: false // React ya se encarga de escapar los valores por nosotros
    }
  });

export default i18n;


























/*import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      name: "Name",
      email: "Email",
      password: "Password",
      phone: "Phone",
      submit: "Submit"
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      login: "Inicio de sesión",
      name: "Nombre",
      email: "Correo Electrónico",
      password: "Contraseña",
      phone: "Teléfono",
      submit: "Enviar"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;*/
