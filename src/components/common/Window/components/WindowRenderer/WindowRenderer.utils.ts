import { CSSProperties } from 'react';
import { TWindow } from 'src/types';

export const getWindowStyle = (window: TWindow, windowIndex: number, isMobile: boolean): CSSProperties => {
  const commonStyle = {
    pointerEvents: 'auto',
    position: 'absolute',
    zIndex: window.isFocused ? 1002 : 1001,
  } as const;

  if (isMobile) {
    return {
      ...commonStyle,
      top: '20px',
      right: '20px',
      left: '20px',
      bottom: '20px',
      width: 'calc(100% - 40px)',
      height: 'calc(100% - 40px)',
      transform: 'none',
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
