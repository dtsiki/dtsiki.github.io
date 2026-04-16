import { useMemo } from 'react';
import classNames from 'classnames';
import { IShortcutProps } from './Shortcut.types';
import { SHORTCUT_FORMAT, SHORTCUT_ICON, isFileType } from './Shortcut.utils';
import { EFolderView, TFolderItemType } from '../Folder/Folder.types';
import { useTranslate } from 'src/hooks/useTranslate';
import { translateTitle } from 'src/utils/translate';

import styles from './Shortcut.module.scss';

export const Shortcut = ({
  title,
  createdAt,
  view = EFolderView.GRID,
  type = TFolderItemType.FOLDER,
}: IShortcutProps) => {
  const { language } = useTranslate();
  const bind = classNames.bind(styles);

  const renderTitle = useMemo(() => {
    const translatedTitle = translateTitle(language, title);

    if (isFileType(type)) {
      return translatedTitle?.replace(/\s/g, '_') + SHORTCUT_FORMAT[type];
    }

    return translatedTitle;
  }, [title, language]);

  const renderShortcutIcon = useMemo(() => {
    return SHORTCUT_ICON[view][type];
  }, [type, view]);

  return (
    <button className={bind([styles.shortcut, styles[view]])}>
      <span className={bind([styles.shortcut__main, styles[view]])}>
        <span className={bind([styles.shortcut__icon, styles[view]])}>{renderShortcutIcon}</span>
        <span className={bind([styles.shortcut__title, styles[type], styles[view]])}>{renderTitle}</span>
      </span>
      {view === EFolderView.LIST && createdAt && <span className={styles.shortcut__date}>{createdAt}</span>}
    </button>
  );
};
