import { ReactNode } from 'react';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';
import { EBlogPostRecord } from 'src/data/postsConfig';
import { Language } from 'src/types';

export enum EPostType {
  GUIDE = 'GUIDE',
  TUTORIAL = 'TUTORIAL',
  ENGLISH = 'ENGLISH',
  THOUGHTS = 'THOUGHTS',
  READING = 'READING',
}

export type TPostMeta = {
  keywords?: string[];
  description: string;
};

export type TPostPagination = {
  next?: EBlogPostRecord;
  prev?: EBlogPostRecord;
};

export type TPostConfig = {
  id: EBlogPostRecord;
  link: string;
  title: string;
  highlight: string;
  category: EPostType;
  tags?: string[];
  createdAt: string;
  meta: TPostMeta;
  language: Language;
  strictLanguage?: boolean;
  pagination?: TPostPagination;
  thumbnail?: string;
};

export type TPostHero = {
  size?: EHeroSize;
  pattern?: EHeroPattern;
  variant?: EHeroVariant;
  content?: ReactNode;
};

export interface IPostProps {
  postConfig: TPostConfig;
  heroConfig?: TPostHero;
  customHero?: ReactNode;
  children: ReactNode;
}
