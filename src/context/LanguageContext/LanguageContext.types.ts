import { Language } from 'src/types';

export interface ILanguageContextData {
  language: Language;
  toggleLanguage?: () => void;
}
