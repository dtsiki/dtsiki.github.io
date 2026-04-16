import { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faFileLines, faFolder } from '@fortawesome/free-solid-svg-icons';

import styles from './shortcut-preview.module.scss';

export enum ShortcutPreviewViewType {
  LIST = 'list',
  GRID = 'grid',
}

export enum EShortcutPreviewType {
  TXT_FILE = 'txt-file',
  FOLDER = 'folder',
}

interface Props {
  title: string;
  highlight?: string;
  link?: string;
  action?: () => void;
  category?: string;
  date: string;
  tags?: Array<string>;
  viewType?: ShortcutPreviewViewType;
  type: EShortcutPreviewType;
}

const ShortcutPreview = ({
  title,
  highlight,
  link,
  date,
  viewType = ShortcutPreviewViewType.GRID,
  type = EShortcutPreviewType.TXT_FILE,
  action,
}: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const formattedTitle = type === EShortcutPreviewType.TXT_FILE ? title.replace(/\s/g, '_') + '.txt' : title;

  const shortcutPreviewIcon = {
    [EShortcutPreviewType.TXT_FILE]: faFileLines,
    [EShortcutPreviewType.FOLDER]: faFolder,
  };

  const handleClick = (): void => {
    action?.();
  };

  return (
    <div className={bind(['tooltip', styles.shortcutPreview, styles[viewType]])} onClick={handleClick}>
      <span className={bind([styles.shortcutPreview__icon, styles[viewType]])}>
        <FontAwesomeIcon icon={shortcutPreviewIcon[type]} />
      </span>
      <span className={bind([styles.shortcutPreview__title, styles[viewType]])}>{formattedTitle}</span>
      {viewType === ShortcutPreviewViewType.LIST && <div className={styles.shortcutPreview__aside}>{date}</div>}
      {link && (
        <Link href={link}>
          <a className={styles.shortcutPreview__link}>{title}</a>
        </Link>
      )}
      <div className={bind(['tooltip__message', styles.shortcutPreview__tooltip, styles[viewType]])}>
        {highlight && <div className={styles.shortcutPreview__label}>File description: {highlight}...</div>}
        <div className={styles.shortcutPreview__label}>Date created: {date}</div>
      </div>
    </div>
  );
};

export default ShortcutPreview;
