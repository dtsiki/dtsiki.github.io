import { MutableRefObject } from 'react';

export const isElementVisible = (ref: MutableRefObject<HTMLElement | null>, offset: { top: number, bottom: number } = {top: 50, bottom: 50 }): boolean => {
  const element = ref.current?.getBoundingClientRect();

  if (!element) {
    return false;
  }

  return element.top <= offset.top && element.bottom >= offset.bottom;
};

export const convertPixelsToPercentage = (top: number, left: number): { left: number, top: number } => {
  return {
    left: (left * 100) / window.screen.width,
    top: (top * 100) / window.screen.height
  }
};

export const convertPercentageToPixels = (top: number, left: number): { left: number, top: number } => {
  return {
    left: (left * window.screen.width) / 100,
    top: (top * window.screen.height) / 100
  }
};
