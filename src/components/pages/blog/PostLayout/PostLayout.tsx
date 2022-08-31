import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './post.module.scss';

interface Props {
  title: string | ReactNode;
  highlight: string;
  category: string;
  date: string;
  children: ReactNode;
  nextLink?: string;
  nextLinkLabel?: string;
}

const PostLayout = ({ title, highlight, category, date, children, nextLink, nextLinkLabel }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <div className={styles.post}>
      <div className='container'>
        <div className={styles.post__header}>
          <h1 className={styles.post__title}>
            {title}
          </h1>
        </div>
        <div className={styles.post__info}>
          <div className={styles.post__details}>
            <div className={styles.post__category}>
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
            <a className={bind(['link', styles.post__link, styles.back])}>
              <FontAwesomeIcon icon={faLeftLong} />
              Back to blog
            </a>
          </Link>
          {nextLink && (
            <Link href={nextLink}>
              <a className={bind(['link', styles.post__link, styles.next])}>
                Next
                <FontAwesomeIcon icon={faRightLong} />
                <span className={styles.post__next}>{nextLinkLabel}</span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
