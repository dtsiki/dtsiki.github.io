import type { ReactNode } from 'react';
import { LANGUAGE } from '~types/language';

export type TThumbnail = {
  [LANGUAGE.ENG]: ReactNode;
  [LANGUAGE.RU]: ReactNode;
};

export type TSlide = {
  id: string;
  content: ReactNode;
  thumbnail?: TThumbnail;
};

export interface ISlideshowProps {
  slides?: Array<TSlide>;
}
