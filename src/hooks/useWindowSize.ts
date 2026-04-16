import { useEffect, useState } from 'react';
import useEventListener, { Event } from './useEventListener';

export enum WindowBreakpoint {
  MOBILE = 576,
  TABLET = 768,
  DESKTOP = 1024,
}

export type TWindowSize = {
  width: number;
  height: number;
};

interface IWindowSizeResult {
  isMobile: boolean;
  windowSize: TWindowSize;
}

export const useWindowSize = (): IWindowSizeResult => {
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

    setIsMobile(window.innerWidth < WindowBreakpoint.MOBILE);
  };

  useEventListener(Event.RESIZE, handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return {
    isMobile,
    windowSize,
  };
};
