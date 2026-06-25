import { useRef, useEffect } from 'react';
import { AnimationQueue } from './AnimationQueue';

export const useAnimationQueue = () => {
  const queueRef = useRef<AnimationQueue | null>(null);

  useEffect(() => {
    queueRef.current = new AnimationQueue();

    return () => {
      queueRef.current?.abort();
    };
  }, []);

  return queueRef.current;
};
