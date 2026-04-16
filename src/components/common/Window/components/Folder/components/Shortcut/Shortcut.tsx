import { useMemo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IShortcutProps } from './Shortcut.types';
import { EFolderView, TFolderItemType } from '../../Folder.types';
import { SHORTCUT_FORMAT, SHORTCUT_ICON, isFileType } from './Shortcut.utils';
import { useTranslate } from 'src/hooks/useTranslate';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';
import { translateTitle } from 'src/utils/translate';

import styles from './Shortcut.module.scss';

export const Shortcut = ({
  title,
  highlight,
  link,
  createdAt,
  view = EFolderView.GRID,
  type = TFolderItemType.FOLDER,
  onClick,
}: IShortcutProps) => {
  const { language } = useTranslate();
  const { minimizeWindow } = useWindowManager();
  const bind = classNames.bind(styles);

  const renderTitle = useMemo(() => {
    const translatedTitle = translateTitle(language, title);

    if (isFileType(type)) {
      return translatedTitle?.replace(/\s/g, '_') + SHORTCUT_FORMAT[type];
    }

    return translatedTitle;
  }, [title, language]);

  const handleClick = (): void => {
    onClick?.();

    if (link) {
      minimizeWindow(EWindowRecord.BLOG_FOLDER);
    }
  };

  return (
    <button className={bind([styles.shortcut, styles[view]])} onClick={handleClick}>
      <span className={bind([styles.shortcut__icon, styles[view]])}>
        <FontAwesomeIcon icon={SHORTCUT_ICON[type]} />
      </span>
      <span className={bind([styles.shortcut__title, styles[type], styles[view]])}>{renderTitle}</span>
      {view === EFolderView.LIST && createdAt && <div className={styles.shortcut__aside}>{createdAt}</div>}
      {link && (
        <Link href={link}>
          <a className={styles.shortcut__link}>{renderTitle}</a>
        </Link>
      )}
      <div className={bind([styles.shortcut__tooltip, styles[view]])}>
        {highlight && <div className={styles.shortcut__label}>File description: {highlight}...</div>}
        <div className={styles.shortcut__label}>Date created: {createdAt}</div>
      </div>
    </button>
  );
};
