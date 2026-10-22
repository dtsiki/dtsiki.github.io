import { WINDOW_BREAKPOINT, WINDOW_TYPE, type TWindowSize, type TWindowType } from './useWindowSize.types';

export const getWindowType = (width: number): TWindowType => {
  if (width < WINDOW_BREAKPOINT[WINDOW_TYPE.MOBILE]) {
    return WINDOW_TYPE.MOBILE;
  }

  if (width < WINDOW_BREAKPOINT[WINDOW_TYPE.DESKTOP]) {
    return WINDOW_TYPE.TABLET;
  }

  return WINDOW_TYPE.DESKTOP;
};

export const getInitialSize = (): TWindowSize => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  return { width: window.innerWidth, height: window.innerHeight };
};

export const getInitialType = (): TWindowType => {
  if (typeof window === 'undefined') {
    return WINDOW_TYPE.DESKTOP;
  }

  return getWindowType(window.innerWidth);
};
