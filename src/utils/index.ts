import { MutableRefObject } from 'react';

export const isElementVisible = (ref: MutableRefObject<HTMLElement | null>, offset: { top: number, bottom: number } = {top: 50, bottom: 50 }): boolean => {
  const element = ref.current?.getBoundingClientRect();

  if (!element) {
    return false;
  }

  return element.top <= offset.top && element.bottom >= offset.bottom;
};
