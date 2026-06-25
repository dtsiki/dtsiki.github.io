import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T, initialValue?: T): T | undefined => {
  const ref = useRef<T | undefined>(initialValue);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
