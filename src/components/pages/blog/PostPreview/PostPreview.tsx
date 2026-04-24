import { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { IPostPreviewProps } from './PostPreview.types';
import { useTranslate } from 'src/hooks/useTranslate';
import { CATEGORY_LOC } from 'src/components/blog/PostContent/PostContent.utils';

import styles from './PostPreview.module.scss';
import { translate } from 'src/utils/translate';

export const PostPreview = ({
  title,
  highlight,
  link,
  category,
  date,
  tags,
  thumbnail,
  hasExternalLink = false,
  strictLang,
  language,
}: IPostPreviewProps) => {
  const bind = classNames.bind(styles);
  const { language: currentLanguage } = useTranslate();

  const renderTags = useMemo(() => {
    return tags?.map((tag) => (
      <li key={tag} className={bind([styles.post_preview__tag, styles.TAG])}>
        {tag}
      </li>
    ));
  }, [tags]);

  return (
    <div className={styles.post_preview}>
      {tags?.length && (
        <div className={styles.post_preview__header}>
          <ul className={styles.post_preview__tags}>
            {category && (
              <li className={bind([styles.post_preview__tag, styles.CATEGORY])}>
                {translate(strictLang ? language : currentLanguage, CATEGORY_LOC[category])}
              </li>
            )}
            {renderTags}
          </ul>
          {date && <div className={styles.post_preview__date}>{date}</div>}
          {category && <div className={styles.post_preview__category}>{category}</div>}
        </div>
      )}
      {thumbnail && (
        <div className={bind(['image-box', styles.post_preview__image])}>
          <div
            className={bind(['image-box__wrapper', styles.post_preview__thumbnail])}
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        </div>
      )}
      <h2 className={styles.post_preview__title}>
        {hasExternalLink ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={bind(['link', styles.post_preview__link])}>
            {title}
          </a>
        ) : (
          <Link href={`/blog/${link}`}>
            <a className={bind(['link', styles.post_preview__link])}>{title}</a>
          </Link>
        )}
      </h2>
      <p className={styles.post_preview__highlight}>{highlight}</p>
    </div>
  );
};
