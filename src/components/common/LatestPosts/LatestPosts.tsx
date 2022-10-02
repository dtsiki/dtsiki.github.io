import React, { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Preview from 'src/components/pages/blog/Preview';
import { posts } from 'src/constants';

import styles from './latest-posts.module.scss';
import Tag, { TagVariant } from '../Tag/Tag';

interface Props {
  showThumbnails?: boolean;
}

const LatestPosts = ({ showThumbnails = false }: Props): ReactElement => {
  const renderLatestPosts = useMemo(() => {
    const latestPosts = posts.slice(0, 4);

    return latestPosts?.map((post) => {
      const { id, title, highlight, link, category, date, tags } = post;

      return (
        <Preview
          key={id}
          title={title}
          highlight={highlight}
          link={link}
          category={category}
          date={date}
          tags={tags}
          showThumbnail={showThumbnails} />
      );
    })
  }, [posts]);

  return (
    <div className={styles.latestPosts}>
      <div className='container'>
        <h2 className={styles.latestPosts__title}>
          Latest posts
        </h2>
        <div className='spacer large top'>
          <ul className='row'>
            {renderLatestPosts}
          </ul>
        </div>
        <div className={styles.latestPosts__footer}>
          <Link href='/blog'>
            <a className='link-with-tag'>
              <Tag
                variant={TagVariant.PRIMARY}
                isOutlined>
                All posts
                <FontAwesomeIcon icon={faArrowRight} />
              </Tag>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
