import { useMemo } from 'react';
import classNames from 'classnames';
import { IShortcutProps } from './Shortcut.types';
import { SHORTCUT_FORMAT, SHORTCUT_ICON, isFileType } from './Shortcut.utils';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { useTranslate } from 'src/hooks/useTranslate';
import { translateTitle } from 'src/utils/translate';
import { EFolderView } from 'src/components/common/Window/components/Folder/Folder.types';

import styles from './Shortcut.module.scss';
import { TextFileIcon } from 'src/components/common/icons/ui';
import { HomeShortcut } from '../../HomeShortcuts/HomeShortcuts.types';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';

export const TrashBinShortcut = ({ title, createdAt, view = EFolderView.GRID }: IShortcutProps) => {
  const { language } = useTranslate();
  const { openWindow } = useWindowManager();
  const bind = classNames.bind(styles);

  const renderTitle = useMemo(() => {
    return translateTitle(language, title);
  }, [title, language]);

  const handleClick = () => {
    openWindow(EWindowRecord.TRASH_BIN_CV_DOC_FILE);
  };

  return (
    <button className={bind([styles.shortcut, styles[view]])} onClick={handleClick}>
      <span className={bind([styles.shortcut__main, styles[view]])}>
        <span className={bind([styles.shortcut__icon, styles[view]])}>
          <TextFileIcon useMini={view === EFolderView.LIST} />
        </span>
        <span className={bind([styles.shortcut__title, styles[view]])}>{renderTitle}</span>
      </span>
      {view === EFolderView.LIST && createdAt && <span className={styles.shortcut__date}>{createdAt}</span>}
    </button>
  );
};
