import { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { BLOG, BLOG_DESCRIPTION } from 'src/i18n/';
import { getPostsByLang } from 'src/data/postsConfig';
import { PostPreview } from 'src/components/blog/PostPreview/PostPreview';
import { Language } from 'src/types';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';

import styles from './../blog.module.scss';

const BlogEng = () => {
  const bind = classNames.bind(styles);
  const { openWindow, minimizeWindow } = useWindowManager();

  useEffect(() => {
    openWindow(EWindowRecord.BLOG_FOLDER);
    minimizeWindow(EWindowRecord.BLOG_FOLDER);
  }, []);

  const renderPosts = useMemo(() => {
    const posts = getPostsByLang(Language.ENG);

    return posts.reverse().map((post) => {
      return (
        <li key={post.id} className='col col--100'>
          <PostPreview
            postConfig={{
              ...post,
              link: `eng/${post.link}`,
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
          <h1 className={styles.blog__title}>{BLOG[Language.ENG]}</h1>
          <p className={styles.blog__description}>{BLOG_DESCRIPTION[Language.ENG]}</p>
        </header>
        <main>
          <ul className={bind([styles.blog__posts, 'row'])}>{renderPosts}</ul>
        </main>
      </div>
    </div>
  );
};

export default BlogEng;
