import { useCallback, useEffect, useRef, useState } from 'react';
import { EVENT, useEventListener } from '~hooks/useEventListener';
import { type IUseWindowSizeHookResult, type TWindowType, type TWindowSize, WINDOW_TYPE } from './useWindowSize.types';
import { getInitialSize, getInitialType, getWindowType } from './useWindowSize.utils';

export const useWindowSize = (): IUseWindowSizeHookResult => {
  const [windowSize, setWindowSize] = useState<TWindowSize>(getInitialSize);
  const [windowType, setWindowType] = useState<TWindowType>(getInitialType);
  const rafRef = useRef<number | null>(null);

  const handleSize = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const type = getWindowType(width);

      setWindowSize({ width, height });
      setWindowType(type);
      rafRef.current = null;
    });
  }, []);

  useEventListener(EVENT.RESIZE, handleSize);

  useEffect(() => {
    handleSize();
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleSize]);

  const isMobile = windowType === WINDOW_TYPE.MOBILE;
  const isTablet = windowType === WINDOW_TYPE.TABLET;

  return { isMobile, isTablet, windowSize, windowType };
};
