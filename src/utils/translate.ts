import { Language, LanguageKey, TranslationObject } from 'src/types';

export const translate = (
  language: Language,
  translation: TranslationObject,
  fallback: string = 'Перевод не найден...'
): string => {
  const languageKey: LanguageKey = Language[language];

  return translation[languageKey] || fallback;
};

export const translateTitle = (language: LanguageKey, title?: string | TranslationObject) => {
  if (typeof title === 'string') {
    return title;
  }

  if (typeof title === 'object') {
    return translate(language, title);
  }
};
