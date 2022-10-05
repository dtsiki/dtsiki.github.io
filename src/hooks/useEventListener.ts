import { useEffect } from 'react';

export enum Event {
  SCROLL = 'scroll',
  RESIZE = 'resize'
}

const useEventListener = (eventName: Event, handler: () => void): void => {
  useEffect(() => {
    window.addEventListener(eventName, handler);

    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [eventName]);
};

export default useEventListener;
