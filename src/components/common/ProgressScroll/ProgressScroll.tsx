import React, { ReactElement, useState } from 'react';

import styles from './progress-scroll.module.scss';
import useEventListener, { Event } from 'src/hooks/useEventListener';

const ProgressScroll = (): ReactElement => {
  const [progress, setProgress] = useState(0);

  const handleScroll = (): void => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledHeight = window.scrollY;
    const scrolledPercent = Math.round((scrolledHeight * 100) / height);

    setProgress(scrolledPercent);
  }

  useEventListener(Event.SCROLL, handleScroll);

  return (
    <div className={styles.progressScroll}>
      <div
        className={styles.progressScroll__tracker}
        style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressScroll;
