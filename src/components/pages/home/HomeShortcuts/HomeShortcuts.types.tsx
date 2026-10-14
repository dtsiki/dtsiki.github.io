import type { ReactNode } from 'react';
import type { TranslationObject } from '~types/language';
import type { TWindow } from '~types/window';

export const HomeItem = {
  CV: 'CV',
  SLIDES: 'SLIDES',
  README: 'README',
} as const;

export type HomeItem = typeof HomeItem[keyof typeof HomeItem];

export const HomeShortcut = {
  CV: 'CV',
  BLOG: 'BLOG',
  SLIDES: 'SLIDES',
  README: 'README',
  TRASH_BIN: 'TRASH_BIN',
} as const;

export type HomeShortcut = typeof HomeShortcut[keyof typeof HomeShortcut];

export type THomeShortcut = {
  id: HomeShortcut;
  icon: JSX.Element;
  loc: TranslationObject;
  route?: string;
  window?: TWindow;
  customWindow?: ReactNode;
  // initialPosition: TDragItemPosition;
};
