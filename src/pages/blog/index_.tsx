/*import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faFaceFrown,
  faList,
  faMagicWandSparkles,
  faSearch,
  faTh,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import ShortcutPreview from 'src/components/pages/blog/ShortcutPreview';
import { EShortcutPreviewType, ShortcutPreviewViewType } from 'src/components/pages/blog/ShortcutPreview/ShortcutPreview';
import { posts } from '../../constants';
import {Window} from 'src/components/common/Window/Window';
import { Hero } from 'src/components/layout/Hero/Hero';
import CustomScrollbar from 'src/components/common/CustomScrollbar';
import { translate } from 'src/utils/translate';
import { EBlogPostLanguage } from 'src/i18n/utils';
import { BLOG } from 'src/i18n';
import { EWindowType } from 'src/components/common/Window/Window.types';

import styles from './blog.module.scss';

export enum BlogViewStyle {
  FANCY = 'fancy',
  BORING = 'boring',
}

const Blog = (): ReactElement => {
  const [viewStyle, setViewStyle] = useState<BlogViewStyle>(BlogViewStyle.BORING);
  const [viewType, setViewType] = useState<ShortcutPreviewViewType>(ShortcutPreviewViewType.GRID);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [blogPosts, setBlogPosts] = useState<Array<any>>(posts);
  const [language, setLanguage] = useState<EBlogPostLanguage>(EBlogPostLanguage.ENG);

  const bind = classNames.bind(styles);

  useEffect(() => {
    const filteredByViewPosts =
      viewStyle === BlogViewStyle.BORING
        ? posts.filter((post) => {
            return (
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.highlight.toLowerCase().includes(query.toLowerCase()) ||
              post.category.toLowerCase().includes(query.toLowerCase()) ||
              post.tags.toString().toLowerCase().includes(query.toLowerCase())
            );
          })
        : posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));

    const filteredByLanguagePosts = filteredByViewPosts.filter((post) => post.language === language);

    setBlogPosts(filteredByLanguagePosts);
  }, [query, language]);

  const toggleViewType = (): void => {
    setViewType(
      viewType === ShortcutPreviewViewType.GRID ? ShortcutPreviewViewType.LIST : ShortcutPreviewViewType.GRID
    );
  };

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const makeItFancy = (): void => {
    setViewStyle(BlogViewStyle.FANCY);
    setShowSearch(false);
  };

  const makeItBoring = (): void => {
    setViewStyle(BlogViewStyle.BORING);
    setShowSearch(false);
  };

  const toggleLanguage = (): void => {
    setLanguage(language === EBlogPostLanguage.ENG ? EBlogPostLanguage.RU : EBlogPostLanguage.ENG);
  };

  const renderPosts = useMemo(() => {
    return blogPosts.map((post) => {
      const { id, title, highlight, link, category, date, tags } = post;


        return (
          <li key={id} className={bind([styles.blog__shortcut, styles[viewType]])}>
            <ShortcutPreview
              title={title}
              highlight={highlight}
              link={`/blog/${link}`}
              category={category}
              date={date}
              viewType={ShortcutPreviewViewType.LIST}
              tags={tags}
              type={EShortcutPreviewType.TXT_FILE}
            />
          </li>
        );
      }
  }, [blogPosts]);

  return (
    <div className={bind(styles.blog)}>
      <Hero>
        <div className='container'>
          <div className={styles.blog__wrapper}>
            <Window type={EWindowType.FOLDER} title={translate(lang, BLOG)} filesCount={posts.length}>
              <div className={styles.blog__menu}>
                <div className={styles.blog__actions}>
                  <button onClick={makeItBoring} className={styles.blog__control}>
                    <span className='visually-hidden'>Make it boring</span>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button
                    onClick={() => setShowSearch(!showSearch)}
                    className={bind([styles.blog__control, styles[viewStyle], { [styles.active]: showSearch }])}>
                    <FontAwesomeIcon icon={showSearch ? faXmark : faSearch} />
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
                <div className={styles.blog__controls}>
                  <button onClick={toggleViewType} className={styles.blog__control}>
                    <span className='visually-hidden'>Toggle view type</span>
                    <FontAwesomeIcon icon={ShortcutPreviewViewType.GRID ? faTh} />
                  </button>
                  <button className={styles.blog__language} onClick={toggleLanguage}>
                    {language}
                  </button>
                </div>
              </div>
              <CustomScrollbar maxHeight={300}>
                <ul className={bind([styles.blog__shortcuts, styles[ShortcutPreviewViewType.GRID]])}>{renderPosts}</ul>
              </CustomScrollbar>
            </Window>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Blog;
*/
