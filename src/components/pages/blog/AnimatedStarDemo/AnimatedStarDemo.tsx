import React, { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

export const AnimatedStarDemo = () => {
  const eyesRef = useRef<(HTMLDivElement | null)[]>([]);

  const moveEyesToCursor = (event: MouseEvent) => {
    eyesRef.current.forEach((eye) => {
      if (!eye) {
        return;
      }

      const rect = eye.getBoundingClientRect();
      const x = rect.left + eye.clientWidth / 2;
      const y = rect.top + eye.clientHeight / 2;

      const radian = Math.atan2(event.pageX - x, event.pageY - y);
      const rotation = radian * (180 / Math.PI) * -1 + 270;

      eye.style.transform = `rotate(${rotation}deg)`;
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveEyesToCursor);

    return () => {
      document.removeEventListener('mousemove', moveEyesToCursor);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !eyesRef.current.includes(el)) {
      eyesRef.current[index] = el;
    }
  };

  return (
    <div className={styles.demo_wrapper}>
      <div className={styles.eyes_container}>
        <div ref={(el) => addToRefs(el, 0)} className={styles.eye}></div>
        <div ref={(el) => addToRefs(el, 1)} className={styles.eye}></div>
      </div>
    </div>
  );
};
