import { useEffect, useState } from 'react';
import { EVENT, useEventListener } from '~hooks/useEventListener';

export const WINDOW_BREAKPOINT = {
  MOBILE: 576,
  TABLET: 768,
  DESKTOP: 1024,
} as const;

export type TWindowBreakpoint = typeof WINDOW_BREAKPOINT[keyof typeof WINDOW_BREAKPOINT];

export type TWindowSize = {
  width: number;
  height: number;
};

interface IWindowSizeHookResult {
  isMobile: boolean;
  windowSize: TWindowSize;
}

export const useWindowSize = (): IWindowSizeHookResult => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setIsMobile(window.innerWidth < WINDOW_BREAKPOINT.MOBILE);
  };

  useEventListener(EVENT.RESIZE, handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return {
    isMobile,
    windowSize,
  };
};
