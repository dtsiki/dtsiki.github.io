import React, { ReactElement } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import HtmlTag from 'src/components/common/HtmlTag';
import { HtmlTagElement, HtmlTagVariant } from 'src/components/common/HtmlTag/HtmlTag';

import styles from './preview.module.scss';

interface Props {
  title: string;
  highlight: string;
  link: string;
  category: string;
}

const Preview = ({ title, highlight, link, category }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <li className='col col--50 col--tablet-100'>
      <div className={styles.preview}>
        <div className={styles.preview__heading}>
          <h2 className={styles.preview__title}>
            <HtmlTag
              element={HtmlTagElement.SECONDARY_HEADING}
              variant={HtmlTagVariant.SECONDARY}>
              {title}
            </HtmlTag>
          </h2>
          <div className={styles.preview__category}>
            {category}
          </div>
        </div>
        <p className={styles.preview__highlight}>
          {highlight}
        </p>
        <Link href={link}>
          <a className={bind(['link', styles.preview__link])}>
            Read more
            <FontAwesomeIcon icon={faRightLong} />
          </a>
        </Link>
      </div>
    </li>
  );
};

export default Preview;
