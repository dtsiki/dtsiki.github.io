import type { CSSProperties } from 'react';
import { WINDOW_TYPE, type TWindowType } from '~hooks/useWindowSize/useWindowSize.types';
import type { TWindow } from '~types/window';

export const getWindowStyle = (window: TWindow, windowIndex: number, windowType: TWindowType): CSSProperties => {
  const commonStyle = {
    pointerEvents: 'auto',
    position: 'absolute',
    zIndex: window.isFocused ? 1002 : 1001,
  } as const;

  if (windowType !== WINDOW_TYPE.DESKTOP) {
    return {
      ...commonStyle,
      top: 'calc(50% - 40px)',
      left: '50%',
      width: 'calc(100% - 40px)',
      transform: 'translate(-50%, -50%)',
    };
  }

  return {
    ...commonStyle,
    top: window.position?.top || `${100 + windowIndex * 60}px`,
    right: window.position?.right || 'unset',
    left: window.position?.right ? 'unset' : window.position?.left || `${100 + windowIndex * 60}px`,
    width: window.size?.width || 400,
    height: window.size?.height || 'auto',
    transform: window.position?.transform || 'none',
  };
};

export const hideOnMobile = (isMobile: boolean, window: TWindow) => {
  return isMobile && window.responsive?.hideOnMobile;
};

export const hideOnTablet = (isTablet: boolean, window: TWindow) => {
  return isTablet && window.responsive?.hideOnTablet;
};
