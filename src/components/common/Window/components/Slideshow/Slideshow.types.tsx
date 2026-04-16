import { ReactNode } from 'react';
import { Language } from 'src/types';

export type TThumbnail = {
  [Language.ENG]: ReactNode;
  [Language.RU]: ReactNode;
};

export type TSlide = {
  id: string;
  content: ReactNode;
  thumbnail?: TThumbnail;
};

export interface ISlideshowProps {
  slides?: Array<TSlide>;
}
