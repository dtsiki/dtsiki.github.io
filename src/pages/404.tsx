import React from 'react';
import Link from 'next/link';
import { faArrowLeft, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Tag, { TagVariant } from 'src/components/common/Tag/Tag';

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
        <div className={styles.custom404__footer}>
          <Link href='/'>
            <a className='link-with-tag'>
              <Tag
                variant={TagVariant.LIGHT}
                isOutlined>
                <FontAwesomeIcon icon={faArrowLeft} />
                Back to home
              </Tag>
            </a>
          </Link>
        </div>
      </Hero>
    </div>
  );
};

export default Custom404;
