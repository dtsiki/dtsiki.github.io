import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { BLOG, BLOG_DESCRIPTION } from 'src/i18n/';
import { getPostsByLang } from 'src/data/postsConfig';
import { PostPreview } from 'src/components/blog/PostPreview/PostPreview';
import { Language } from 'src/types';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EWindowRecord, WINDOW_REGISTRY } from 'src/context/WindowManager/WindowManager.utils';

import styles from './../blog.module.scss';

const BlogRu = () => {
  const bind = classNames.bind(styles);

  const { openWindow, minimizeWindow } = useWindowManager();

  useEffect(() => {
    minimizeWindow(WINDOW_REGISTRY[EWindowRecord.SLIDES_PPT_FILE].id);
    openWindow(WINDOW_REGISTRY[EWindowRecord.BLOG_FOLDER].id, true, false);
  }, []);

  const renderPosts = useMemo(() => {
    const posts = getPostsByLang(Language.RU);

    return posts.reverse().map((post) => {
      return (
        <li key={post.id} className='col col--100'>
          <PostPreview
            postConfig={{
              ...post,
              link: `ru/${post.link}`,
              thumbnail: `../assets/blog/thumbnails/${post.link}.png`,
            }}
          />
        </li>
      );
    });
  }, [getPostsByLang]);

  return (
    <div className={styles.blog}>
      <div className='container'>
        <header className={styles.blog__heading}>
          <h1 className={styles.blog__title}>{BLOG[Language.RU]}</h1>
          <p className={styles.blog__description}>{BLOG_DESCRIPTION[Language.RU]}</p>
        </header>
        <main>
          <ul className={bind([styles.blog__posts, 'row'])}>{renderPosts}</ul>
        </main>
      </div>
    </div>
  );
};

export default BlogRu;
