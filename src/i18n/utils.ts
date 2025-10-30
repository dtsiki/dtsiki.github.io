export enum EBlogPostLanguage {
  RU = 'RUSSIAN',
  ENG = 'ENGLISH',
}

export type LanguageKey = 'ru' | 'en';

const LANGUAGE_MAP: Record<EBlogPostLanguage, LanguageKey> = {
  [EBlogPostLanguage.RU]: 'ru',
  [EBlogPostLanguage.ENG]: 'en',
};

export interface TranslationObject {
  ru: string;
  en: string;
}

export function translate(
  language: EBlogPostLanguage,
  translation: TranslationObject,
  fallback: string = 'Перевод не найден!'
): string {
  const langKey: LanguageKey = LANGUAGE_MAP[language];
  return translation[langKey] || fallback;
}
