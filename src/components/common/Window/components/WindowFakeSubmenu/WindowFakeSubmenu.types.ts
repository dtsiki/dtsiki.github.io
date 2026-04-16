import { FC, ReactNode, SVGProps } from 'react';
import { EWindowType } from '../../Window.types';

export interface IWindowFakeSubmenuProps {
  type: EWindowType;
  children?: ReactNode;
}

export type TWindowFakeSubmenuItem = {
  id: string;
  type: 'icon-item' | 'custom-item' | 'select-item';
  content: JSX.Element | ReactNode;
  className?: string;
};

export type TWindowFakeSubmenuLineGroup = {
  id: string;
  type: 'line-group';
  items: TWindowFakeSubmenuItem[];
};

export type TWindowFakeSubmenuLine = {
  id: string;
  type: 'line';
  items: TWindowFakeSubmenuLineGroup[];
};
