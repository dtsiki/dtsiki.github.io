import React, { MutableRefObject, ReactElement } from 'react';

import Hero from 'src/components/layout/Hero';
import ScrollDownButton from 'src/components/common/ScrollDownButton';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import { ScrollDownButtonVariant } from 'src/components/common/ScrollDownButton/ScrollDownButton';

import styles from './about-hero.module.scss';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const AboutHero = ({ targetRef, showButton }: Props): ReactElement => {
  return (
    <Hero variant={HeroVariant.PRIMARY}>
      <h1 className={styles.aboutHero__title}>
        Let me introduce myself
      </h1>
      {showButton && (
        <ScrollDownButton
          variant={ScrollDownButtonVariant.LIGHT}
          targetRef={targetRef} />
      )}
    </Hero>
  );
};

export default AboutHero;
