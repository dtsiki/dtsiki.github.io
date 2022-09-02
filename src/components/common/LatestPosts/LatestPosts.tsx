import React, { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Preview from 'src/components/pages/blog/Preview';
import { posts } from 'src/constants';

import styles from './latest-posts.module.scss';

const LatestPosts = (): ReactElement => {
  const bind = classNames.bind(styles);

  const renderLatestPosts = useMemo(() => posts.map((post) => {
    const { id, title, highlight, link, category, date, tags } = post;

    return (
      <Preview
        key={id}
        title={title}
        highlight={highlight}
        link={link}
        category={category}
        date={date}
        tags={tags} />
    )
  }), [posts]);

  return (
    <div className='container'>
      <h2 className={styles.latestPosts__title}>
        <span className='highlighted primary'>Latest posts</span>
      </h2>
      <div className='spacer large top'>
        <ul className='row'>
          {renderLatestPosts}
        </ul>
      </div>
      <Link href='/blog'>
        <a className={bind(['link', styles.latestPosts__link])}>
          Read blog
          <FontAwesomeIcon icon={faRightLong} />
        </a>
      </Link>
    </div>
  );
};

export default LatestPosts;
