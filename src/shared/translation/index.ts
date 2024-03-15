import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import deTranslation from './locales/de.json';
import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import jaTranslation from './locales/ja.json';
import ruTranslation from './locales/ru.json';
import trTranslation from './locales/tr.json';
import ukTranslation from './locales/uk.json';
import viTranslation from './locales/vi.json';
import zhTranslation from './locales/zh.json';

i18n.use(initReactI18next).init({
  // Язык по умолчанию
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
  lng: 'ru',
  resources: {
    de: {
      translation: deTranslation,
    },
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    ja: {
      translation: jaTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
    tr: {
      translation: trTranslation,
    },
    uk: {
      translation: ukTranslation,
    },
    vi: {
      translation: viTranslation,
    },
    zh: {
      translation: zhTranslation,
    },
  },
});

export default i18n;
