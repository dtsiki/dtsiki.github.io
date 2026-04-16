export const Language = {
  ENG: 'ENG',
  RU: 'RU',
} as const;

export type Language = typeof Language[keyof typeof Language];

export interface TranslationObject {
  [Language.ENG]: string;
  [Language.RU]: string;
}

export type LanguageKey = typeof Language.ENG | typeof Language.RU;
