import React, { useRef } from 'react';

import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import LatestPosts from 'src/components/common/LatestPosts';
import LatestProjects from 'src/components/common/LatestProjects';
import Contacts from 'src/components/common/Contacts';
import IntroHero from 'src/components/pages/home/IntroHero';
import Header from 'src/components/pages/home/Header';

import styles from './home.module.scss';

const Home = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(ref);

  return (
    <div className={styles.home}>
      <Header
        targetRef={ref}
        showButton={!isVisible} />
      <IntroHero sourceRef={ref} />
      <LatestProjects />
      <Contacts />
      <LatestPosts showThumbnails />
    </div>
  );
};

export default Home;
