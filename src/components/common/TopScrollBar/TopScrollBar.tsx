import { useState } from 'react';
import { EVENT, useEventListener } from '~hooks/useEventListener';

import styles from './TopScrollBar.module.scss';

export const TopScrollBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = (): void => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledHeight = window.scrollY;
    const scrolledPercent = Math.round((scrolledHeight * 100) / height);

    setProgress(scrolledPercent);
  };

  useEventListener(EVENT.SCROLL, handleScroll);

  return (
    <div className={styles.top_scroll_bar}>
      <div className={styles.top_scroll_bar__tracker} style={{ width: `${progress}%` }} />
    </div>
  );
};
