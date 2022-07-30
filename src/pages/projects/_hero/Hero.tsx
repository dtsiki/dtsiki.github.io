import React, { MutableRefObject, ReactElement } from 'react';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import ScrollDownButton, { ScrollDownButtonVariant } from 'src/components/common/ScrollDownButton/ScrollDownButton';

import styles from './hero.module.scss';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const ProjectsHero = ({ targetRef, showButton }: Props): ReactElement => {
  return (
    <Hero variant={HeroVariant.LIGHT}>
      <h1 className={styles.hero__title}>
        the frontend made me do it
      </h1>
      <ScrollDownButton
        isHidden={!showButton}
        variant={ScrollDownButtonVariant.PRIMARY}
        targetRef={targetRef} />
    </Hero>
  );
};

export default ProjectsHero;
