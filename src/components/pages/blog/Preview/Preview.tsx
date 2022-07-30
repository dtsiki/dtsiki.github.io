import React, { ReactElement } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import styles from './preview.module.scss';

interface Props {
  title: string;
  highlight: string;
  link: string;
  category: string;
}

const Preview = ({ title, highlight, link, category }: Props): ReactElement => {
  return (
    <li className='col col--50'>
      <div className={styles.preview}>
        <div className={styles.preview__heading}>
          <h2 className={styles.preview__title}>
            {title}
          </h2>
          <div className={styles.preview__category}>
            {category}
          </div>
        </div>
        <p className={styles.preview__highlight}>
          {highlight}
        </p>
        <Link href={link}>
          <a className={styles.preview__link}>
            {category === 'tutorial' ? 'Learn how' : 'Read more'}
            <FontAwesomeIcon icon={faRightLong} />
          </a>
        </Link>
      </div>
    </li>
  );
};

export default Preview;
