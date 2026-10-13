import { useEffect } from 'react';

export const EVENT = {
  SCROLL: 'scroll',
  RESIZE: 'resize',
} as const;

export type TEvent = typeof EVENT[keyof typeof EVENT];

export const useEventListener = (event: TEvent, handler: () => void): void => {
  useEffect(() => {
    window.addEventListener(event, handler);

    return () => {
      window.removeEventListener(event, handler);
    };
  }, [event]);
};
