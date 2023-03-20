import React, { ReactElement, ReactNode, useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './preview.module.scss';

interface Props {
  title: string;
  highlight: string | ReactNode;
  link: string;
  category?: string;
  date?: string;
  tags?: Array<string>;
  thumbnail?: string;
  hasExternalLink?: boolean;
}

const Preview = ({ title, highlight, link, category, date, tags, thumbnail, hasExternalLink = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const renderTags = useMemo(() => {
    return tags?.map((tag) => {
      return (
        <li
          key={tag}
          className={styles.preview__tag}>
          {tag}
        </li>
      )
    })
  }, [tags]);

  return (
    <li className='col col--50 col--tablet-100'>
      <div className={styles.preview}>
        {tags?.length && (
          <div className={styles.preview__header}>
            <ul className={styles.preview__tags}>
              {renderTags}
            </ul>
            {date && (
              <div className={styles.preview__date}>
                {date}
              </div>
            )}
            {category && (
              <div className={styles.preview__category}>
                {category}
              </div>
            )}
          </div>
        )}
        {thumbnail && (
          <div className={bind(['image-box', styles.preview__image])}>
            <div
              className={bind(['image-box__wrapper', styles.preview__thumbnail])}
              style={{ backgroundImage: `url(${thumbnail})` }}/>
          </div>
        )}
        <h2 className={styles.preview__title}>
          {hasExternalLink ? (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={bind(['link', styles.preview__link])}>
              {title}
            </a>
          ) : (
            <Link href={`/blog/${link}`}>
              <a className={bind(['link', styles.preview__link])}>
                {title}
              </a>
            </Link>
          )}
        </h2>
        <p className={styles.preview__highlight}>
          {highlight}
        </p>
      </div>
    </li>
  );
};

export default Preview;
