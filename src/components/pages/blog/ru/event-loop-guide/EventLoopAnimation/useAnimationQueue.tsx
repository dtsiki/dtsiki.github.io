import { useRef, useEffect } from 'react';
import { AnimationQueue } from './AnimationQueue';

export const useAnimationQueue = () => {
  const queueRef = useRef<AnimationQueue | null>(null);

  if (queueRef.current === null) {
    queueRef.current = new AnimationQueue();
  }

  useEffect(() => {
    return () => {
      queueRef.current?.abort();
    };
  }, []);

  return queueRef.current;
};
