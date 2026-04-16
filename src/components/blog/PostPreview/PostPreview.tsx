import Link from 'next/link';
import classNames from 'classnames';
import { IPostPreviewProps } from './PostPreview.types';
import { translate } from 'src/utils/translate';
import { useTranslate } from 'src/hooks/useTranslate';
import { CATEGORY_LOC } from 'src/components/blog/PostContent/PostContent.utils';

import styles from './PostPreview.module.scss';

export const PostPreview = ({ postConfig }: IPostPreviewProps) => {
  const { title, highlight, createdAt, category, tags, strictLanguage, thumbnail, link } = postConfig;

  const bind = classNames.bind(styles);
  const { language } = useTranslate();

  return (
    <div className={styles.post_preview}>
      <div className={styles.post_preview__header}>
        <ul className={styles.post_preview__tags}>
          {category && (
            <li className={bind([styles.post_preview__tag, styles.CATEGORY])}>
              {translate(strictLanguage ? postConfig.language : language, CATEGORY_LOC[category])}
            </li>
          )}
          {tags &&
            tags.map((tag) => (
              <li key={tag} className={bind([styles.post_preview__tag, styles.TAG])}>
                {tag}
              </li>
            ))}
        </ul>
        {createdAt && <div className={styles.post_preview__date}>{createdAt}</div>}
      </div>
      {thumbnail && (
        <div className={bind(['image-box', styles.post_preview__image])}>
          <div
            className={bind(['image-box__wrapper', styles.post_preview__thumbnail])}
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        </div>
      )}
      <h2 className={styles.post_preview__title}>
        <Link href={`/blog/${link}`}>
          <a className={bind(['link', styles.post_preview__link])}>{title}</a>
        </Link>
      </h2>
      <p className={styles.post_preview__highlight}>{highlight}</p>
    </div>
  );
};
