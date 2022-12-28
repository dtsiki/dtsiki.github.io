import { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import styles from './shortcut-preview.module.scss';

export enum ShortcutPreviewViewType {
  LIST = 'list',
  GRID = 'grid'
}

interface Props {
  title: string;
  highlight: string;
  link: string;
  category: string;
  date: string;
  tags?: Array<string>;
  viewType?: ShortcutPreviewViewType;
}

const ShortcutPreview = ({ title, highlight, link, date, viewType = ShortcutPreviewViewType.GRID }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const formattedTitle = title.replace(/\s/g, '_') + '.txt';

  return (
    <div className={bind(['tooltip', styles.shortcutPreview, styles[viewType]])}>
      <span className={bind([styles.shortcutPreview__icon, styles[viewType]])}>
        <FontAwesomeIcon icon={faFileLines} />
      </span>
      <span className={bind([styles.shortcutPreview__title, styles[viewType]])}>
        {formattedTitle}
      </span>
      {viewType === ShortcutPreviewViewType.LIST && (
        <div className={styles.shortcutPreview__aside}>
          {date}
        </div>
      )}
      <Link href={link}>
        <a className={styles.shortcutPreview__link}>
          {title}
        </a>
      </Link>
      <div
        className={bind(['tooltip__message', styles.shortcutPreview__tooltip, styles[viewType]])}>
        <div className={styles.shortcutPreview__label}>
          File description: {highlight}...
        </div>
        <div className={styles.shortcutPreview__label}>
          Date created: {date}
        </div>
      </div>
    </div>
  );
};

export default ShortcutPreview;
