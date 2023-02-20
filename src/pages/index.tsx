import { useEffect } from 'react';
import { useStoreon } from 'storeon/react';

import HomeHero from 'src/components/pages/home/Hero';
import { ThemeColor, ThemerEvent } from 'src/store/themer';

import styles from './home.module.scss';

const Home = (): JSX.Element => {
  const { dispatch } = useStoreon();

  useEffect(() => {
    dispatch(ThemerEvent.SET_TOP_COLOR, ThemeColor.VIOLET);
  }, []);

  useEffect(() => {
    dispatch(ThemerEvent.SET_BOTTOM_COLOR, ThemeColor.VIOLET);
  }, []);

  return (
    <div className={styles.home}>
      <HomeHero />
    </div>
  );
};

export default Home;
