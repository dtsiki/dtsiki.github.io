import React, { MutableRefObject, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import Hero from 'src/components/layout/Hero';
import ScrollDownButton from 'src/components/common/ScrollDownButton';

import styles from './header.module.scss';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const Header = ({ targetRef, showButton }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <Hero>
      <div className='container'>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__heading}>
            <span className={bind([styles.header__icon, styles.smile])}>
              <FontAwesomeIcon icon={faSmile} />
            </span>
            <span className='accented accented--primary'>
              Yay!
            </span>
          </h1>
          <h2 className={styles.header__title}>
            <span className='stroke primary'>
              My name is
            </span> <span className='accented accented--primary'>
              Daria
            </span>
          </h2>
          <h3 className={styles.header__subtitle}>
            <span className='stroke primary'>
              I&apos;m a
            </span> <span className='accented accented--primary'>
              frontend
            </span> <span className='stroke primary'>
              developer
            </span>
          </h3>
        </div>
      </div>
      <ScrollDownButton
        isHidden={!showButton}
        targetRef={targetRef}
        isJumping />
    </Hero>

  );
};

export default Header;
