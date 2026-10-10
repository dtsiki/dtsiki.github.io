import { ReactNode } from 'react';

export interface ICustomScrollbarProps {
  children: ReactNode;
  maxHeight?: number | string;
  fixedHeight?: number | string;
  onScroll?: (scrollElement: HTMLElement) => void;
}

export interface ICustomScrollbarRef {
  getScrollElement: () => HTMLElement | null;
}
