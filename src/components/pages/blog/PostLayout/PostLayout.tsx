import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import Hero from 'src/components/layout/Hero';
import { HeroSize, HeroVariant } from 'src/components/layout/Hero/Hero';

import styles from './post.module.scss';

interface Props {
  title: string | ReactNode;
  highlight: string;
  category: string;
  date: string;
  children: ReactNode;
}

const PostLayout = ({ title, highlight, category, date, children }: Props): ReactElement => {
  return (
    <div className={styles.post}>
      <Hero
        size={HeroSize.SMALL}
        variant={HeroVariant.PRIMARY}>
        <h1 className={styles.post__title}>
          {title}
        </h1>
      </Hero>
      <div className='container'>
        <div className={styles.post__info}>
          <div className={styles.post__details}>
            <div className={styles.post__tag}>
              {category}
            </div>
            <div className={styles.post__date}>
              {date}
            </div>
          </div>
          <p className={styles.post__highlight}>
            {highlight}
          </p>
        </div>
        <div className={styles.post__content}>
          {children}
        </div>
        <div className={styles.post__footer}>
          <Link href='/blog'>
            <a className={styles.post__link}>
              <FontAwesomeIcon icon={faLeftLong} />
              Back
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
