
import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';

import Preview from 'src/components/pages/blog/Preview';
import { posts } from './../../constants';

import styles from './blog.module.scss';

const Blog = (): ReactElement => {
  const bind = classNames.bind(styles);

  const renderPosts = useMemo(() => posts.map((post) => {
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
  }), [posts])

  return (
    <div className={styles.blog}>
      <div className='container'>
        <h1 className={styles.blog__title}>Blog</h1>
        <ul className={bind(['row', styles.blog__posts])}>
          {renderPosts}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
