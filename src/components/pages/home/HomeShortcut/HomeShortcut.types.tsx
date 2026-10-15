import type { JSX, ReactNode } from 'react';

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
