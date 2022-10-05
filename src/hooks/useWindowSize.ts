import { useEffect, useState } from 'react';
import useEventListener, { Event } from './useEventListener';

export enum WindowBreakpoint {
  MOBILE = 576,
  TABLET = 768,
  DESKTOP = 1024
}

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): any => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  const handleSize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    setIsMobile(window.innerWidth < WindowBreakpoint.MOBILE);
  }

  useEventListener(Event.RESIZE, handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return {
    isMobile,
    windowSize
  };
}

export default useWindowSize;
