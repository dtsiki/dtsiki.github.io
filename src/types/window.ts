import { EWindowType, TWindowContent } from 'src/components/common/Window/Window.types';
import { TranslationObject } from './language';
import { ReactNode } from 'react';
import { TFolderItem } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

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

export type TWindow = {
  id: string;
  isMinimized?: boolean;
  isFocused?: boolean;
  position?: TWindowPosition;
  size?: TWindowSize;
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
};
