import React, { MutableRefObject, ReactElement } from 'react';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import ScrollDownButton, { ScrollDownButtonVariant } from 'src/components/common/ScrollDownButton/ScrollDownButton';

import styles from './hero.module.scss';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const AboutHero = ({ targetRef, showButton }: Props): ReactElement => {
  return (
    <Hero variant={HeroVariant.PRIMARY}>
      <h1 className={styles.hero__title}>
        <em>Let</em> me <span className='underlined light dotted'>introduce</span> <span className='accented accented--dark highlighted light'>myself</span>
      </h1>
      <ScrollDownButton
        isHidden={!showButton}
        variant={ScrollDownButtonVariant.LIGHT}
        targetRef={targetRef} />
    </Hero>
  );
};

export default AboutHero;
