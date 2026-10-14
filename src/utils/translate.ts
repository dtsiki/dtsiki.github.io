import type { TLanguage, TLanguageKey, TranslationObject } from '~types/language';
import { LANGUAGE } from '~types/language';

export const translate = (
  language: TLanguage,
  translation: TranslationObject,
  fallback: string = 'Перевод не найден...'
): string => {
  const languageKey: TLanguageKey = LANGUAGE[language];

  return translation[languageKey] || fallback;
};

export const translateTitle = (language: TLanguageKey, title?: string | TranslationObject) => {
  if (typeof title === 'string') {
    return title;
  }

  if (typeof title === 'object') {
    return translate(language, title);
  }
};
