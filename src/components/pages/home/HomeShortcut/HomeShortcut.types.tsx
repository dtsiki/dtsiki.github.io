import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StaticImageData } from 'next/image';

export enum EHomeShortcutVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARK = 'dark',
  LIGHT = 'light',
  GHOST = 'ghost',
}

export interface IHomeShortcutProps {
  icon?: JSX.Element; // IconProp | ReactNode;
  useCustomIcon?: boolean;
  name?: string;
  variant?: EHomeShortcutVariant;
  handleAction?: () => any;
  tooltip?: ReactNode;
  iconSize?: number;
}
