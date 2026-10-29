import type { ReactNode } from 'react';
import type { TDocPage } from './components/DocFile/components/DocPage/DocPage.types';
import type { TSlide } from './components/Slideshow/Slideshow.types';
import type { TranslationObject } from '~types/language';
import type { TFolderConfig } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

export type TWindowContent = {
  slides?: TSlide[];
  docPages?: TDocPage[];
  textFile?: ReactNode;
  folder?: TFolderConfig;
};

export interface IWindowProps {
  id?: string;
  type?: EWindowType;
  title?: TranslationObject | string;
  fileTitle?: string;
  pattern?: EWindowPatternVariant;
  filesCount?: number;
  showMenu?: boolean;
  isInverted?: boolean;
  isPopUp?: boolean;
  bodyBackground?: EWindowBodyBackground;
  closeAction?: () => any;
  isModal?: boolean;
  isFocused?: boolean;
  isMinimized?: boolean;
  isManuallyStatic?: boolean;
  children?: ReactNode;
  content?: TWindowContent;
  isRoot?: boolean;
}

export enum EWindowType {
  WINDOW = 'WINDOW',
  BROWSER = 'BROWSER',
  SLIDESHOW = 'SLIDESHOW',
  FOLDER = 'FOLDER',
  IMAGE = 'IMAGE',
  VALIDATOR = 'VALIDATOR',
  CHAT = 'CHAT',
  VIDEO = 'VIDEO',
  DOC_FILE = 'DOC_FILE',
  TXT_FILE = 'TXT_FILE',
  CUSTOM = 'CUSTOM',
  SYSTEM = 'SYSTEM',
}

export enum EWindowPatternVariant {
  WAVY = 'WAVY',
  CROSS = 'CROSS',
  SMILEY = 'SMILEY',
  SCALES = 'SCALES',
  SPRINKLES = 'SPRINKLES',
  BUBBLES = 'BUBBLES',
  FOUR_POINT_STAR = 'FOUR-POINT-STAR',
  MEMPHIS = 'MEMPHIS',
  CURSORS = 'CURSORS',
}

export enum EWindowBodyBackground {
  LIGHT = 'LIGHT',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  DARK = 'DARK',
  GHOST = 'GHOST',
}

export enum EWindowControl {
  CLOSE = 'CLOSE',
  MINIMIZE = 'MINIMIZE',
  MAXIMIZE = 'MAXIMIZE',
}
