import { ReactNode } from 'react';

export interface ICustomScrollbarProps {
  children: ReactNode;
  maxHeight?: number;
  fixedHeight?: number;
  onScroll?: (scrollElement: HTMLElement) => void;
}

export interface ICustomScrollbarRef {
  getScrollElement: () => HTMLElement | null;
}
