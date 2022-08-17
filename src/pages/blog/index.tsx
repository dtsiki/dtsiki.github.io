
import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

import Preview from 'src/components/pages/blog/Preview';

import styles from './blog.module.scss';
import HtmlTag from 'src/components/common/HtmlTag.tsx';
import { HtmlTagElement } from 'src/components/common/HtmlTag.tsx/HtmlTag';

const Blog = (): ReactElement => {
  const bind = classNames.bind(styles);

  const posts = [
    {
      id: nanoid(),
      title: 'Pure CSS tooltips',
      highlight: 'This tutorial shows you how to create a tooltip using only CSS without any additional JavaScript code.',
      link: '/blog/pure-css-tooltips',
      category: 'tutorial'
    }
  ];

  const renderPosts = useMemo(() => posts.map((post) => {
    const { id, title, highlight, link, category } = post;

    return (
      <Preview
        key={id}
        title={title}
        highlight={highlight}
        link={link}
        category={category} />
    )
  }), [posts])

  return (
    <div className={styles.blog}>
      <div className='container'>
        <h1 className={styles.blog__title}>
          <HtmlTag element={HtmlTagElement.PRIMARY_HEADING}>Blog</HtmlTag>
        </h1>
        <ul className={bind(['row', styles.blog__posts])}>
          {renderPosts}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
