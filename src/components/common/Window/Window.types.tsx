import { ReactNode } from 'react';
import { TDocPage } from './components/DocFile/components/DocPage/DocPage.types';
import { TSlide } from './components/Slideshow/Slideshow.types';
import { TranslationObject } from 'src/types';
import { TFolderConfig } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

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
  LOADER = 'LOADER',
}

export enum EWindowPatternVariant {
  WAVY = 'WAVY',
  CROSS = 'CROSS',
  SMILEY = 'SMILEY',
  SCALES = 'SCALES',
  SPRINKLES = 'SPRINKLES',
  BUBBLES = 'BUBBLES',
  FOUR_POINT_STAR = 'FOUR-POINT-STAR',
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
