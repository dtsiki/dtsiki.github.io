/*import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faFolder,
  faFolderBlank,
  faList,
  faSearch,
  faTh,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import ShortcutPreview from 'src/components/pages/blog/ShortcutPreview';
import {
  EShortcutPreviewType,
  ShortcutPreviewViewType,
} from 'src/components/pages/blog/ShortcutPreview/ShortcutPreview';
import { Window } from 'src/components/common/Window/Window';
import { Hero } from 'src/components/layout/Hero/Hero';
import CustomScrollbar from 'src/components/common/CustomScrollbar';
import { EBlogPostLanguage, translate } from 'src/i18n/utils';
import { BLOG } from 'src/i18n';
import ScrollDownButton from 'src/components/common/ScrollDownButton';
import { ScrollDownButtonVariant } from 'src/components/common/ScrollDownButton/ScrollDownButton';
import { EShortcutVariant, TShortcut } from './index.types';
import Shortcut, { ShortcutVariant } from 'src/components/common/Shortcut';

import styles from './blog.module.scss';
import { posts } from './../../constants';
import { EHeroPattern } from 'src/components/layout/Hero/Hero.types';
import { EWindowType } from 'src/components/common/Window/Window.types';

const ROOT_SHORTCUTS: TShortcut[] = [
  {
    id: nanoid(),
    variant: EShortcutVariant.ENG_POSTS,
    title: 'Eng',
    highlight: 'English blog posts',
    date: '1 jan 2020',
    type: EShortcutPreviewType.FOLDER,
  },
  {
    id: nanoid(),
    variant: EShortcutVariant.RU_POSTS,
    title: 'Ru',
    highlight: 'Статьи на русском языке',
    date: '1 jan 2020',
    type: EShortcutPreviewType.FOLDER,
  },
  {
    id: nanoid(),
    variant: EShortcutVariant.DRAFTS,
    title: 'Drafts',
    highlight: 'Blog posts drafts and other',
    date: '1 jan 2020',
    type: EShortcutPreviewType.FOLDER,
  },
  {
    id: nanoid(),
    variant: EShortcutVariant.EMPTY_FOLDER,
    title: 'New folder(1)',
    highlight: '',
    date: '16 oct 2020',
    type: EShortcutPreviewType.FOLDER,
  },
  {
    id: nanoid(),
    variant: EShortcutVariant.EMPTY_FOLDER,
    title: 'New folder(2)',
    highlight: '',
    date: '16 oct 2020',
    type: EShortcutPreviewType.FOLDER,
  },
];

const DRAFT_SHORTCUTS = [
  {
    id: nanoid(),
    title: 'Frontend in a nutshell',
    link: '/blog/frontend-in-a-nutshell',
    highlight: 'An ultimate and compact guide to get into the frontend development',
    date: '13 feb 2023',
    type: EShortcutPreviewType.TXT_FILE,
    variant: EShortcutVariant.TXT_FILE,
  },
  {
    id: nanoid(),
    title: 'How to create a React app',
    link: '/blog/how-to-create-a-react-app',
    date: '31 feb 2024',
    type: EShortcutPreviewType.TXT_FILE,
    variant: EShortcutVariant.TXT_FILE,
  },
];

const ROOT_WINDOW_TITLE = 'C:/dtsiki/blog/';

const Blog = (): ReactElement => {
  const [viewType, setViewType] = useState<ShortcutPreviewViewType>(ShortcutPreviewViewType.GRID);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [blogPosts, setBlogPosts] = useState<Array<any>>(posts);
  const [language, setLanguage] = useState<EBlogPostLanguage>(EBlogPostLanguage.ENG);
  const [shortcuts, setShortcuts] = useState<any[]>(ROOT_SHORTCUTS);
  const [windowTitle, setWindowTitle] = useState<string>(ROOT_WINDOW_TITLE);
  const [showBlogFolder, setShowBlogFolder] = useState<boolean>(true);
  const postsRef = useRef<HTMLDivElement>(null);

  const bind = classNames.bind(styles);

  useEffect(() => {
    const filteredByLanguagePosts = posts.filter((post) => post.language === language);

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

  const scrollDown = (): void => {
    const element = postsRef.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 100;
      const offset = element.top + window.scrollY - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const renderPosts = useMemo(() => {
    return blogPosts.map((post) => {
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
          thumbnail={`assets/blog/${link}/thumbnail.png`}
        />
      );
    });
  }, [blogPosts]);

  const handleShortcutClicked = (variant: EShortcutVariant, title?: string): void => {
    if (variant === EShortcutVariant.ENG_POSTS || variant === EShortcutVariant.RU_POSTS) {
      const language = variant === EShortcutVariant.ENG_POSTS ? EBlogPostLanguage.ENG : EBlogPostLanguage.RU;

      const engPostsShortcuts = posts
        .filter((post) => post.language === language)
        .map((post) => ({
          ...post,
          link: `/blog/${post.link}`,
          tags: post.tags,
          category: post.category,
          variant: EShortcutVariant.TXT_FILE,
          type: EShortcutPreviewType.TXT_FILE,
        }));

      setShortcuts(engPostsShortcuts);
      setWindowTitle(`${ROOT_WINDOW_TITLE}${variant === EShortcutVariant.ENG_POSTS ? 'ENG' : 'RU'}`);
      setLanguage(variant === EShortcutVariant.ENG_POSTS ? EBlogPostLanguage.ENG : EBlogPostLanguage.RU);
    }

    if (variant === EShortcutVariant.DRAFTS) {
      setWindowTitle(`${ROOT_WINDOW_TITLE}drafts`);
      setShortcuts(DRAFT_SHORTCUTS);
    }

    if (variant === EShortcutVariant.EMPTY_FOLDER) {
      setWindowTitle(`${ROOT_WINDOW_TITLE}${title}`);
      setShortcuts([]);
    }
  };

  const renderShortcuts = useMemo(() => {
    if (!shortcuts.length) {
      return (
        <li className={styles.blog__empty_folder}>
          <FontAwesomeIcon className={styles.blog__empty_folder_icon} icon={faFolderBlank} />
          <div className={styles.blog__empty_folder_title}>Folder is empty</div>
        </li>
      );
    }

    return shortcuts.map((shortcut) => (
      <li key={shortcut.id} className={bind([styles.blog__shortcut, styles[viewType]])}>
        <ShortcutPreview
          title={shortcut.title}
          highlight={shortcut.highlight}
          date={shortcut.date}
          viewType={viewType}
          type={shortcut.type}
          link={shortcut.link}
          tags={shortcut.tags}
          action={() => handleShortcutClicked(shortcut.variant, shortcut.title)}
        />
      </li>
    ));
  }, [shortcuts, viewType]);

  const backToRoot = (): void => {
    setWindowTitle(ROOT_WINDOW_TITLE);
    setShortcuts(ROOT_SHORTCUTS);
    setLanguage(EBlogPostLanguage.ENG);
  };

  const onBlogShortcutClicked = (): void => {
    setShowBlogFolder(true);
    backToRoot();
  };

  return (
    <div className={styles.blog}>
      <Hero>
        <div className={styles.blog__blog_shortcut}>
          <Shortcut
            handleAction={() => onBlogShortcutClicked()}
            variant={ShortcutVariant.PRIMARY}
            icon={faFolder}
            iconSize={80}
            name='blog'
          />
        </div>
        <div className='container'>
          <div className={styles.blog__wrapper}>
            {showBlogFolder && (
              <Window
                type={EWindowType.FOLDER}
                title={windowTitle}
                filesCount={shortcuts.length}
                isModal
                isFocused
                closeAction={() => setShowBlogFolder(false)}>
                <div className={styles.blog__menu}>
                  <div className={styles.blog__actions}>
                    {windowTitle !== ROOT_WINDOW_TITLE && (
                      <button onClick={() => backToRoot()} className={styles.blog__control}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                    )}
                    <button
                      onClick={() => setShowSearch(!showSearch)}
                      aria-label='Search'
                      className={bind([styles.blog__control, { [styles.active]: showSearch }])}>
                      <FontAwesomeIcon icon={showSearch ? faXmark : faSearch} />
                    </button>
                    <div className={bind([styles.blog__form, { [styles.opened]: showSearch }])}>
                      <input
                        className={bind([styles.blog__input])}
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
                    <button onClick={toggleViewType} className={styles.blog__control} aria-label='Toggle view type'>
                      <FontAwesomeIcon icon={viewType === ShortcutPreviewViewType.GRID ? faTh : faList} />
                    </button>
                  </div>
                </div>
                <CustomScrollbar fixedHeight={300}>
                  <ul className={bind([styles.blog__shortcuts, styles[viewType]])}>{renderShortcuts}</ul>
                </CustomScrollbar>
              </Window>
            )}
          </div>
        </div>
        <ScrollDownButton
          isHidden={false}
          variant={ScrollDownButtonVariant.PRIMARY}
          targetRef={postsRef}
          handleScroll={scrollDown}
          isJumping={true}
        />
      </Hero>
      <div className='container' ref={postsRef}>
        <div className={styles.blog__wrapper}>
          <div className={styles.blog__heading}>
            <h1 className={styles.blog__title}>Blog</h1>
          </div>
          <div className={styles.blog__languages}>
            <button
              className={bind([styles.blog__language_switch, { [styles.active]: language === EBlogPostLanguage.ENG }])}
              onClick={() => setLanguage(EBlogPostLanguage.ENG)}>
              Eng
            </button>
            <button
              className={bind([styles.blog__language_switch, { [styles.active]: language === EBlogPostLanguage.RU }])}
              onClick={() => setLanguage(EBlogPostLanguage.RU)}>
              Ru
            </button>
          </div>
          <ul className={bind([styles.blog__posts, 'row'])}>{renderPosts}</ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
*/
