import React, { MutableRefObject, ReactElement } from 'react';

import styles from './yay-hero.module.scss';
import Hero from 'src/components/layout/Hero';
import ScrollDownButton from 'src/components/common/ScrollDownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const YayHero = ({ targetRef, showButton }: Props): ReactElement => {
  return (
    <Hero>
      <div className='container'>
        <div className={styles.yayHero__wrapper}>
          <h1 className={styles.yayHero__heading}>
            <span className={styles.yayHero__icon}>
              <FontAwesomeIcon icon={faSmile} />
            </span>
            Yay!
          </h1>
          <h2 className={styles.yayHero__title}>
            My name is <span className='accent'>Daria</span>
          </h2>
          <h3 className={styles.yayHero__subtitle}>
            I&apos;m a <span className='accent'>frontend</span> developer
          </h3>
        </div>
      </div>
      {showButton && <ScrollDownButton targetRef={targetRef} />}
    </Hero>

  );
};

export default YayHero;
