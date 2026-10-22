import { EWindowType, type TWindowContent } from 'src/components/common/Window/Window.types';
import type { TranslationObject } from './language';
import type { ReactNode } from 'react';
import type { TFolderItem } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

export type TWindowPosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform?: string;
};

export type TWindowSize = {
  width?: string;
  height?: string;
};

export type TWindowState = {
  path?: string[];
  title?: string | TranslationObject;
  content?: TFolderItem[];
};

export type TResponsive = {
  hideOnMobile: boolean;
  hideOnTablet?: boolean;
};

export type TWindow = {
  id: string;
  isMinimized?: boolean;
  isFocused?: boolean;
  position?: TWindowPosition;
  size?: TWindowSize;
  responsive?: TResponsive;
  config?: TWindowConfig;
  initialState?: TWindowState;
  state?: TWindowState;
};

export type TWindowConfig = {
  type?: EWindowType;
  title?: TranslationObject | string | undefined;
  children?: ReactNode;
  initialState?: TWindowState;
  content?: TWindowContent;
  customComponent?: {
    type?: string;
    component: ReactNode;
  };
};

export type TCustomWindowConfig = {
  id: string;
  component: ReactNode;
  position?: TWindowPosition;
  size?: TWindowSize;
  responsive?: TResponsive;
};
