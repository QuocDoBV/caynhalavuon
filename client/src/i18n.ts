import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enAboutSection from './locales/en/aboutSection.json';
import enChatSection from './locales/en/chatSection.json';
import enContactSection from './locales/en/contactSection.json';
import enFooterSection from './locales/en/footerSection.json';
import enHeader from './locales/en/header.json';
import enHeroSection from './locales/en/heroSection.json';
import enMissonSection from './locales/en/missonSection.json';
import enServicesSection from './locales/en/servicesSection.json';
import enTestimonnialsSection from './locales/en/testimonnialsSection.json';
import enVisionSection from './locales/en/visionSection.json';

import viCommon from './locales/vi/common.json';
import viAboutSection from './locales/vi/aboutSection.json';
import viChatSection from './locales/vi/chatSection.json';
import viContactSection from './locales/vi/contactSection.json';
import viFooterSection from './locales/vi/footerSection.json';
import viHeader from './locales/vi/header.json';
import viHeroSection from './locales/vi/heroSection.json';
import viMissonSection from './locales/vi/missonSection.json';
import viServicesSection from './locales/vi/servicesSection.json';
import viTestimonnialsSection from './locales/vi/testimonnialsSection.json';
import viVisionSection from './locales/vi/visionSection.json';

const savedLang = localStorage.getItem('lang') || 'vi';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        visionSection: enVisionSection,
        aboutSection: enAboutSection,
        chatSection: enChatSection,
        contactSection: enContactSection,
        footerSection: enFooterSection,
        header: enHeader,
        heroSection: enHeroSection,
        missonSection: enMissonSection,
        servicesSection: enServicesSection,
        testimonnialsSection: enTestimonnialsSection
      },
      vi: {
        common: viCommon,
        visionSection: viVisionSection,
        aboutSection: viAboutSection,
        chatSection: viChatSection,
        contactSection: viContactSection,
        footerSection: viFooterSection,
        header: viHeader,
        heroSection: viHeroSection,
        missonSection: viMissonSection,
        servicesSection: viServicesSection,
        testimonnialsSection: viTestimonnialsSection
      },
    },
    lng: savedLang,
    fallbackLng: 'en',
    ns: ['common', 'visionSection', 'aboutSection', 'chatSection', 'contactSection', 'footerSection', 'header', 'missonSection', 'servicesSection', 'testimonnialsSection'], // tên namespace
    defaultNS: 'header',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
