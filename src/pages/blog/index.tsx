
import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

import Preview from 'src/components/pages/blog/Preview';

import styles from './blog.module.scss';

const Blog = (): ReactElement => {
  const bind = classNames.bind(styles);

  const posts = [
    {
      id: nanoid(),
      title: 'Pure CSS tooltips',
      highlight: 'A step-by-step tutorial that will show you how to create a tooltip using only CSS without any additional JavaScript code.',
      link: '/blog/pure-css-tooltips',
      category: 'tutorial',
      date: '30 jul 2022'
    }
  ];

  const renderPosts = useMemo(() => posts.map((post) => {
    const { id, title, highlight, link, category, date } = post;

    return (
      <Preview
        key={id}
        title={title}
        highlight={highlight}
        link={link}
        category={category}
        date={date} />
    )
  }), [posts])

  return (
    <div className={styles.blog}>
      <div className='container'>
        <h1 className={styles.blog__title}>
          Blog
        </h1>
        <ul className={bind(['row', styles.blog__posts])}>
          {renderPosts}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
