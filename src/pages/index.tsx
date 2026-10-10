import { useEffect } from 'react';
import { EWindowRecord, WINDOW_REGISTRY } from 'src/context/WindowManager/WindowManager.utils';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { HomeShortcuts } from 'src/components/pages/home/HomeShortcuts/HomeShortcuts';

import styles from './index.module.scss';

const Home = (): JSX.Element => {
  const { openWindow } = useWindowManager();

  useEffect(() => {
    openWindow(WINDOW_REGISTRY[EWindowRecord.SLIDES_PPT_FILE].id, false, true);
    openWindow(WINDOW_REGISTRY[EWindowRecord.CV_DOC_FILE].id, true, false);
    openWindow(WINDOW_REGISTRY[EWindowRecord.BLOG_FOLDER].id, true, false);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.home__hero}>
        <HomeShortcuts />
      </div>
    </div>
  );
};

export default Home;
