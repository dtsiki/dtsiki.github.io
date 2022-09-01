import React, { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './preview.module.scss';

interface Props {
  title: string;
  highlight: string;
  link: string;
  category: string;
  date: string;
  tags?: Array<string>;
}

const Preview = ({ title, highlight, link, category, date, tags }: Props): ReactElement => {
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
        <div className={styles.preview__heading}>
          <div className={styles.preview__date}>
            {date}
          </div>
          <h2 className={styles.preview__title}>
            <Link href={link}>
              <a className={bind(['link', styles.preview__link])}>
                {title}
              </a>
            </Link>
          </h2>
          <div className={styles.preview__category}>
            {category}
          </div>
        </div>
        <p className={styles.preview__highlight}>
          {highlight}
        </p>
        {tags?.length && (
          <div className={styles.preview__footer}>
            <ul className={styles.preview__tags}>
              {renderTags}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default Preview;
