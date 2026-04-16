import { useMemo } from 'react';
import classNames from 'classnames';
import { BLOG, BLOG_DESCRIPTION } from 'src/i18n/';
import { getPostsByLang } from 'src/data/postsConfig';
import { PostPreview } from 'src/components/blog/PostPreview/PostPreview';
import { Language } from 'src/types';

import styles from './../Blog.module.scss';

const BlogRu = () => {
  const bind = classNames.bind(styles);

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
