import { ReactNode } from 'react';

export interface IPostPreviewProps {
  title: string;
  highlight: ReactNode;
  link: string;
  category: string;
  date?: string;
  tags?: Array<string>;
  thumbnail?: string;
  hasExternalLink?: boolean;
  strictLang?: boolean;
}
