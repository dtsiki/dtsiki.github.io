import React, { useRef } from 'react';

import HomeYayHero from './_yay-hero/YayHero';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import Hero from 'src/components/layout/Hero';
import HomeIntroHero from './_intro-hero';
import Projects from 'src/components/common/Projects';
import LatestPosts from 'src/components/common/LatestPosts';

import styles from './home.module.scss';

const Home = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(ref);

  return (
    <div className={styles.home}>
      <HomeYayHero
        targetRef={ref}
        showButton={!isVisible} />
      <HomeIntroHero sourceRef={ref} />
      <LatestPosts showThumbnails />
      <Hero>
        <Projects />
      </Hero>
    </div>
  );
};

export default Home;
