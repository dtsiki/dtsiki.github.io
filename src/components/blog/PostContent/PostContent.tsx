import { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { NextSeo } from 'next-seo';
import { useTranslate } from 'src/hooks/useTranslate';
import { IPostContentProps } from './PostContent.types';
import { translate } from 'src/utils/translate';
import { BLOG, NEXT_POST } from 'src/i18n';
import { CATEGORY_LOC } from './PostContent.utils';
import { POSTS_CONFIG_ } from 'src/data/postsConfig';
import { ArrowRightIcon, ArrowLeftIcon } from 'src/components/common/icons/ui';

import styles from './PostContent.module.scss';
import { Thanks } from 'src/components/common/Thanks';
import { Copyright } from '../Copyright';

export const PostContent = ({ postConfig, children }: IPostContentProps) => {
  const { title, highlight, createdAt, meta, category, tags, strictLanguage, pagination } = postConfig;

  const bind = classNames.bind(styles);
  const { language } = useTranslate();

  const renderSeoTitle = useMemo(() => {
    const BASE = '@dtsiki';

    return `${BASE}/${translate(strictLanguage ? postConfig.language : language, BLOG).toLocaleLowerCase()}: ${title}`;
  }, [title, language]);

  const blogLink = strictLanguage
    ? `/blog/${postConfig.language.toLocaleLowerCase()}`
    : `/blog/${language.toLocaleLowerCase()}`;

  return (
    <>
      <NextSeo title={renderSeoTitle} description={meta.description} />
      <div className={styles.post_content}>
        <article className='container'>
          <header className={styles.post_content__header}>
            {(category || tags) && (
              <ul className={styles.post_content__tags}>
                {category && (
                  <li className={bind([styles.post_content__tag, styles.CATEGORY])}>
                    {translate(strictLanguage ? postConfig.language : language, CATEGORY_LOC[category])}
                  </li>
                )}
                {tags &&
                  tags.map((tag) => (
                    <li key={tag} className={bind([styles.post_content__tag, styles.TAG])}>
                      {tag}
                    </li>
                  ))}
              </ul>
            )}
            <h1 className={styles.post_content__title}>{title}</h1>
          </header>
          <div className={styles.post_content__info}>
            <div className={styles.post_content__details}>
              <div className={styles.post_content__date}>{createdAt}</div>
            </div>
            <p className={styles.post_content__highlight}>{highlight}</p>
          </div>
          <main className={styles.post_content__content}>{children}</main>

          <footer className={styles.post_content__footer}>
            <Thanks />
            <nav className={styles.post_content__pagination}>
              <ul className={styles.post_content__pagination_list}>
                <li>
                  <Link href={blogLink}>
                    <a className={bind(['link', styles.post_content__pagination_link, styles.BACK])}>
                      <span className={styles.post_content__pagination_wrapper}>
                        <ArrowLeftIcon />
                        {translate(strictLanguage ? postConfig.language : language, BLOG)}
                      </span>
                    </a>
                  </Link>
                </li>
                {pagination?.next && POSTS_CONFIG_[pagination.next] && (
                  <li>
                    <Link href={POSTS_CONFIG_[pagination.next].link}>
                      <a className={bind(['link', styles.post_content__pagination_link, styles.NEXT])}>
                        <span className={styles.post_content__pagination_wrapper}>
                          {translate(strictLanguage ? postConfig.language : language, NEXT_POST)}
                          <ArrowRightIcon />
                        </span>
                        <span className={styles.post_content__pagination_title}>
                          {POSTS_CONFIG_[pagination.next].title}
                        </span>
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            <Copyright />
          </footer>
        </article>
      </div>
    </>
  );
};
