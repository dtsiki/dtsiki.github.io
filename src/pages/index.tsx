import React, { useRef } from 'react';

import styles from './home.module.scss';
import YayHero from 'src/components/custom/YayHero';
import IntroHero from 'src/components/custom/IntroHero';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

const Home = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(ref);

  return (
    <div className={styles.home}>
      <YayHero
        targetRef={ref}
        showButton={!isVisible} />
      <IntroHero sourceRef={ref} />
    </div>
  );
};

export default Home;
