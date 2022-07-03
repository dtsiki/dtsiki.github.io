import { useState, useEffect, MutableRefObject } from 'react';

const useIntersectionObserver = (
  ref: MutableRefObject<HTMLElement | null>,
  threshold?: Array<number> | number,
  rootMargin?: string
): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const options = {
    root: null,
    rootMargin: rootMargin ?? '0px',
    threshold: threshold ?? 0.1
  };

  const handleObserverElement = (entries: Array<IntersectionObserverEntry>): void => {
    if (ref.current) {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserverElement, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

export default useIntersectionObserver;
