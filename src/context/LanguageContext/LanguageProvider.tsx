import { useState } from 'react';
import { type TLanguage, LANGUAGE } from '~types/language';
import type { ILanguageProviderProps } from './LanguageProvider.types';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState<TLanguage>(LANGUAGE.RU);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === LANGUAGE.ENG ? LANGUAGE.RU : LANGUAGE.ENG));
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};
