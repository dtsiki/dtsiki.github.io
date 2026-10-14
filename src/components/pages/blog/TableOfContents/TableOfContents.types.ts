import type { MutableRefObject } from 'react';
import type { TLanguage, TranslationObject } from '~types/language';

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
  strictLanguage?: TLanguage;
  hideNumbers?: boolean;
  showOnScroll?: boolean;
  variant?: TableOfContentsVariant;
}
