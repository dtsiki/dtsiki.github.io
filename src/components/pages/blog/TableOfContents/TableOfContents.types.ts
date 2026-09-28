import { MutableRefObject } from 'react';
import { Language, TranslationObject } from 'src/types';

export const TableOfContentsVariant = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
} as const;

export type TableOfContentsVariant = typeof TableOfContentsVariant[keyof typeof TableOfContentsVariant];

export type TItemOfContent = {
  title: string;
  ref: MutableRefObject<HTMLElement | null>;
};

export interface ITableOfContentsProps {
  customTitle?: TranslationObject;
  items: TItemOfContent[];
  strictLanguage?: Language;
  hideNumbers?: boolean;
  showOnScroll?: boolean;
  variant?: TableOfContentsVariant;
}
