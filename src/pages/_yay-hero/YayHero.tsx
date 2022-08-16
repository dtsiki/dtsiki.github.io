import React, { MutableRefObject, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import Hero from 'src/components/layout/Hero';
import ScrollDownButton from 'src/components/common/ScrollDownButton';

import styles from './yay-hero.module.scss';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const HomeYayHero = ({ targetRef, showButton }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <Hero>
      <div className='container'>
        <div className={styles.yayHero__wrapper}>
          <h1 className={styles.yayHero__heading}>
            <span className='highlighted highlighted--lavander'>
              <span className={bind([styles.yayHero__icon, styles.smile])}>
                <FontAwesomeIcon icon={faSmile} />
              </span>
              Yay!
            </span>
          </h1>
          <h2 className={styles.yayHero__title}>
            My name is <span className='highlighted highlighted--primary'>
              Daria
            </span>
          </h2>
          <h3 className={styles.yayHero__subtitle}>
            I&apos;m a <span className='accented accented--primary highlighted highlighted--grey'>
              frontend
            </span> developer
          </h3>
        </div>
      </div>
      <ScrollDownButton
        isHidden={!showButton}
        targetRef={targetRef} />
    </Hero>

  );
};

export default HomeYayHero;
