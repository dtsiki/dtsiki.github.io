import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext/LanguageContext';
import type { TranslationObject } from '~types/language';

export const useTranslate = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslate должен использоваться внутри LanguageProvider');
  }

  const translate = (translations: TranslationObject): string => {
    return translations[context.language];
  };

  return {
    translate,
    language: context.language,
    toggleLanguage: context.toggleLanguage,
  };
};
