import { useContext } from 'react';
import { LanguageContext } from 'src/context/LanguageContext/LanguageContext';

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguageContext должен использоваться внутри LanguageProvider');
  }

  return context;
};
