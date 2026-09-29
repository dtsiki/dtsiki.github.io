import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { BLOG, BLOG_DESCRIPTION } from 'src/i18n/';
import { getPostsByLang } from 'src/data/postsConfig';
import { PostPreview } from 'src/components/blog/PostPreview/PostPreview';
import { useTranslate } from 'src/hooks/useTranslate';
import { TPostConfig } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { BLOG_THUMBNAIL_PATH } from 'src/constants';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EWindowRecord, WINDOW_REGISTRY } from 'src/context/WindowManager/WindowManager.utils';

import styles from './blog.module.scss';

const Blog = () => {
  const bind = classNames.bind(styles);
  const { openWindow, minimizeWindow } = useWindowManager();

  const { language } = useTranslate();
  const [posts, setPosts] = useState<TPostConfig[]>([]);

  useEffect(() => {
    minimizeWindow(WINDOW_REGISTRY[EWindowRecord.SLIDES_PPT_FILE].id);
    openWindow(WINDOW_REGISTRY[EWindowRecord.BLOG_FOLDER].id, true, false);
  }, []);

  useEffect(() => {
    setPosts(getPostsByLang(language));
  }, [language]);

  const renderPosts = useMemo(() => {
    return posts.reverse().map((post) => {
      const { id, language, link } = post;

      return (
        <li key={id} className='col col--100'>
          <PostPreview
            postConfig={{
              ...post,
              link: `${language.toLowerCase()}/${link}`,
              thumbnail: `${BLOG_THUMBNAIL_PATH}${link}.png`,
            }}
          />
        </li>
      );
    });
  }, [posts]);

  return (
    <div className={styles.blog}>
      <div className='container'>
        <header className={styles.blog__heading}>
          <h1 className={styles.blog__title}>{BLOG[language]}</h1>
          <p className={styles.blog__description}>{BLOG_DESCRIPTION[language]}</p>
        </header>
        <main>
          <ul className={bind([styles.blog__posts, 'row'])}>{renderPosts}</ul>
        </main>
      </div>
    </div>
  );
};

export default Blog;
