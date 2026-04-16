import { useEffect, useState } from 'react';

import styles from './CurrentTime.module.scss';

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    setCurrentTime(formatTime(new Date()));

    const timerId = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <span className={styles.current_time}>{currentTime}</span>;
};
