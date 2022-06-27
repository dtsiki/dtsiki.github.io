import React from 'react';
import Link from 'next/link';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './404.module.scss';

const Custom404 = (): JSX.Element => {
  return (
    <div className={styles.custom404}>
      <Hero variant={HeroVariant.PRIMARY}>
        <h1 className={styles.custom404__title}>
          Yay, page not found
        </h1>
        <div className={styles.custom404__subtitle}>
          4<FontAwesomeIcon icon={faFaceFrown} />4
        </div>
        <Link href='/'>
          <a className={styles.custom404__button}>
            Back to home page
          </a>
        </Link>
      </Hero>
    </div>
  );
};

export default Custom404;
