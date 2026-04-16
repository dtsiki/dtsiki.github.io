import { TranslationObject } from 'src/types';
import { EWindowType } from '../../Window.types';
import { ReactNode } from 'react';

export interface IWindowHeaderProps {
  type: EWindowType;
  windowStyles: {
    [x: string]: boolean | undefined;
  };
  title?: string | TranslationObject;
  fileTitle?: string;
  customIcon?: ReactNode;
  handleMinimizeWindow: () => void;
  handleMaximizeWindow: () => void;
  handleCloseWindow: () => void;
}
