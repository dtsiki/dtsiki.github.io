import { ReactNode } from 'react';
import { EPostType } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { Language } from 'src/types';

export interface IPostPreviewProps {
  title: string;
  highlight: ReactNode;
  link: string;
  category: EPostType;
  date?: string;
  tags?: Array<string>;
  thumbnail?: string;
  hasExternalLink?: boolean;
  strictLang?: boolean;
  language: Language;
}
