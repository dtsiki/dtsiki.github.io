
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFaceFrown, faList, faMagicWandSparkles, faSearch, faTh, faXmark } from '@fortawesome/free-solid-svg-icons';

import { WindowType } from 'src/components/common/Window/Window';
import ShortcutPreview from 'src/components/pages/blog/ShortcutPreview';
import { ShortcutPreviewViewType } from 'src/components/pages/blog/ShortcutPreview/ShortcutPreview';
import Preview from 'src/components/pages/blog/Preview';
import { posts } from './../../constants';
import Window from 'src/components/common/Window';
import Hero from 'src/components/layout/Hero';
import CustomScrollbar from 'src/components/common/CustomScrollbar';

import styles from './blog.module.scss';

export enum BlogViewStyle {
  FANCY = 'fancy',
  BORING = 'boring'
}

const Blog = (): ReactElement => {
  const [viewStyle, setViewStyle] = useState<BlogViewStyle>(BlogViewStyle.BORING);
  const [viewType, setViewType] = useState<ShortcutPreviewViewType>(ShortcutPreviewViewType.GRID);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [blogPosts, setBlogPosts] = useState<Array<any>>(posts);
  const bind = classNames.bind(styles);

  useEffect(() => {
    if (!query.length) return;

    const filteredPosts = viewStyle === BlogViewStyle.BORING ?
      posts.filter((post) => {
        return post.title.toLowerCase()
          .includes(query.toLowerCase()) ||
          post.highlight.toLowerCase()
            .includes(query.toLowerCase()) ||
          post.category.toLowerCase()
            .includes(query.toLowerCase()) ||
          post.tags.toString()
            .toLowerCase()
            .includes(query.toLowerCase())
      }) :
      posts.filter((post) => post.title.toLowerCase()
        .includes(query.toLowerCase()));

    setBlogPosts(filteredPosts);
  }, [query]);

  const toggleViewType = (): void => {
    setViewType(viewType === ShortcutPreviewViewType.GRID ? ShortcutPreviewViewType.LIST : ShortcutPreviewViewType.GRID);
  }

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  }

  const makeItFancy = (): void => {
    setViewStyle(BlogViewStyle.FANCY);
    setShowSearch(false);
  }

  const makeItBoring = (): void => {
    setViewStyle(BlogViewStyle.BORING);
    setShowSearch(false);
  }

  const renderPosts = useMemo(() => {
    return blogPosts.map((post) => {
      const { id, title, highlight, link, category, date, tags } = post;

      if (viewStyle === BlogViewStyle.BORING) {
        return (
          <Preview
            key={id}
            title={title}
            highlight={highlight}
            link={link}
            category={category}
            date={date}
            tags={tags}
            showThumbnail />
        )
      }

      if (viewStyle === BlogViewStyle.FANCY) {
        return (
          <li
            key={id}
            className={bind([styles.blog__shortcut, styles[viewType]])}>
            <ShortcutPreview
              title={title}
              highlight={highlight}
              link={`/blog/${link}`}
              category={category}
              date={date}
              viewType={viewType}
              tags={tags} />
          </li>
        )
      }
    })
  }, [blogPosts, viewStyle, viewType]);

  return (
    <div className={bind([styles.blog, styles[viewStyle]])}>
      {viewStyle === BlogViewStyle.BORING && (
        <div className='container'>
          <div className={styles.blog__wrapper}>
            <div className={styles.blog__heading}>
              <h1 className={styles.blog__title}>Blog</h1>
              <div className={styles.blog__actions}>
                <div className={bind([styles.blog__form, styles[viewStyle], { [styles.opened]: showSearch }])}>
                  <input
                    className={bind([styles.blog__input, styles[viewStyle]])}
                    type='text'
                    id='query'
                    name='query'
                    placeholder='Search something'
                    onChange={changeQuery}
                    value={query}
                  />
                </div>
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className={bind([styles.blog__control, styles[viewStyle], { [styles.active]: showSearch }])}>
                  <FontAwesomeIcon icon={showSearch ? faXmark: faSearch} />
                </button>
                <button
                  className={styles.blog__control}
                  onClick={makeItFancy}>
                  <span className='visually-hidden'>Make it fancy</span>
                  <FontAwesomeIcon icon={faMagicWandSparkles} />
                </button>
              </div>
            </div>
            {blogPosts.length ? (
              <ul className={bind(['row', styles.blog__posts])}>
                {renderPosts}
              </ul>
            ) : (
              <div className={styles.blog__notification}>
                <FontAwesomeIcon icon={faFaceFrown} />
                <div className='heading-l2 spacer top small'>
                  Oh, no!
                </div>
                <div className='heading-l3 spacer top extra-small'>
                  Posts not found
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {viewStyle === BlogViewStyle.FANCY && (
        <Hero>
          <div className='container'>
            <div className={styles.blog__wrapper}>
              <Window
                type={WindowType.FOLDER}
                title='blog'
                filesCount={posts.length}>
                <div className={styles.blog__menu}>
                  <div className={styles.blog__actions}>
                    <button
                      onClick={makeItBoring}
                      className={styles.blog__control}>
                      <span className='visually-hidden'>Make it boring</span>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                      onClick={() => setShowSearch(!showSearch)}
                      className={bind([styles.blog__control, styles[viewStyle], { [styles.active]: showSearch }])}>
                      <FontAwesomeIcon icon={showSearch ? faXmark: faSearch} />
                    </button>
                    <div className={bind([styles.blog__form, styles[viewStyle], { [styles.opened]: showSearch }])}>
                      <input
                        className={bind([styles.blog__input, styles[viewStyle]])}
                        type='text'
                        id='query'
                        name='query'
                        placeholder='Search something'
                        onChange={changeQuery}
                        value={query}
                      />
                    </div>
                  </div>
                  <button
                    onClick={toggleViewType}
                    className={styles.blog__control}>
                    <span className='visually-hidden'>Toggle view type</span>
                    <FontAwesomeIcon icon={viewType === ShortcutPreviewViewType.GRID ? faTh : faList} />
                  </button>
                </div>
                <CustomScrollbar maxHeight={300}>
                  <ul className={bind([styles.blog__shortcuts, styles[viewType]])}>
                    {renderPosts}
                  </ul>
                </CustomScrollbar>
              </Window>
            </div>
          </div>
        </Hero>
      )}
    </div>
  );
};

export default Blog;
