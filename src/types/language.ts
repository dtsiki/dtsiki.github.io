export const LANGUAGE = {
  ENG: 'ENG',
  RU: 'RU',
} as const;

export type TLanguage = typeof LANGUAGE[keyof typeof LANGUAGE];

export interface TranslationObject {
  [LANGUAGE.ENG]: string;
  [LANGUAGE.RU]: string;
}

export type TLanguageKey = typeof LANGUAGE.ENG | typeof LANGUAGE.RU;
