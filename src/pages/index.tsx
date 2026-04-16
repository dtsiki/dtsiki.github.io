import { Hero } from 'src/components/layout/Hero/Hero';
import { HomeShortcuts } from 'src/components/pages/home/HomeShortcuts/HomeShortcuts';

import styles from './index.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <div className={styles.home__hero}>
        <HomeShortcuts />
      </div>
    </div>
  );
};

export default Home;
