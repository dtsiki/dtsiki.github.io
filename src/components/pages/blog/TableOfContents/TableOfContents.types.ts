import { MutableRefObject } from 'react';
import { Language } from 'src/types';

export type TItemOfContent = {
  title: string;
  ref: MutableRefObject<HTMLElement | null>;
};

export interface ITableOfContentsProps {
  items: TItemOfContent[];
  strictLanguage?: Language;
  hideNumbers?: boolean;
}
