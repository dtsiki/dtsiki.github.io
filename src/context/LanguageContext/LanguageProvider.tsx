import { useState } from 'react';
import { Language } from 'src/types';
import { ILanguageProviderProps } from './LanguageProvider.types';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(Language.RU);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === Language.ENG ? Language.RU : Language.ENG));
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};
