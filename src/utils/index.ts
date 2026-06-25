import { MutableRefObject } from 'react';
import { TWindowSize } from 'src/hooks';

export const isElementVisible = (
  ref: MutableRefObject<HTMLElement | null>,
  offset: { top: number; bottom: number } = { top: 50, bottom: 50 }
): boolean => {
  const element = ref.current?.getBoundingClientRect();

  if (!element) {
    return false;
  }

  return element.top <= offset.top && element.bottom >= offset.bottom;
};

export const convertPixelsToPercentage = (
  top: number,
  left: number,
  windowSize: TWindowSize
): { left: number; top: number } => {
  return {
    left: (left * 100) / windowSize.width,
    top: (top * 100) / windowSize.height,
  };
};

export const convertPercentageToPixels = (
  top: number,
  left: number,
  windowSize: TWindowSize
): { left: number; top: number } => {
  return {
    left: (left * windowSize.width) / 100,
    top: (top * windowSize.height) / 100,
  };
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomSign = () => {
  return Math.round(Math.random()) * 2 - 1;
};

export const getEmptyArray = (length: number) => {
  return Array.from({ length }, (_) => null);
};
