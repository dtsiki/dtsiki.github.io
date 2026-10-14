import { TLanguage } from '~types/language';

export interface ILanguageContextData {
  language: TLanguage;
  toggleLanguage?: () => void;
}
