
import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

import Hero from 'src/components/layout/Hero';
import { HeroSize, HeroVariant } from 'src/components/layout/Hero/Hero';
import Preview from 'src/components/pages/blog/Preview';

import styles from './blog.module.scss';

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
      <Hero
        size={HeroSize.HALF}
        variant={HeroVariant.PRIMARY}>
        <h1 className={styles.blog__title}>
          Let&#39;s make frontend great again
        </h1>
      </Hero>
      <div className='container'>
        <ul className={bind(['row', styles.blog__posts])}>
          {renderPosts}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
