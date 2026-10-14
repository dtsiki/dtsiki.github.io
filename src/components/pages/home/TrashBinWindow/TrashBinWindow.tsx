import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import type { ITrashBinWindowProps } from './TrashBinWindow.types';
import { BACK, OBJECTS, OLD_CV_FILE_NAME, TRASH_BIN } from 'src/i18n';
import { useWindowManager } from '~hooks/useWindowManager';
import { useTranslate } from '~hooks/useTranslate';
import { useFolderNavigation } from '~hooks/useFolderNavigation';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';
import { GridMiniIcon, ArrowLeftIcon, BinIcon, ListMiniIcon } from 'src/components/common/icons/ui';
import { WindowHeader } from 'src/components/common/Window/components/WindowHeader/WindowHeader';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { LANGUAGE, type TranslationObject } from '~types/language';
import { TrashBinShortcut } from './Shortcut/Shortcut';
import { WindowFooter } from 'src/components/common/Window/components/WindowFooter';
import { WindowFakeMenu } from 'src/components/common/Window/components/WindowFakeMenu';
import { WindowFakeSubmenu } from 'src/components/common/Window/components/WindowFakeSubmenu';
import { EFolderView } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

import styles from './TrashBinWindow.module.scss';

const TRASH_BIN_ITEMS = [OLD_CV_FILE_NAME];

export const TrashBinWindow = (props: ITrashBinWindowProps) => {
  const { isMinimized, isFocused } = props;

  const bind = classNames.bind(styles);
  const { language, translate } = useTranslate();

  const { closeWindow, minimizeWindow, windowsOrder, focusWindow } = useWindowManager();
  const { currentTitle } = useFolderNavigation(EWindowRecord.TRASH_BIN);
  const [view, setView] = useState<EFolderView>(EFolderView.GRID);

  const [title, setTitle] = useState<string | TranslationObject>(TRASH_BIN);

  useEffect(() => {
    if (currentTitle) {
      setTitle(currentTitle);
    }
  }, [currentTitle]);

  const maximizeWindow = () => {};

  const handleMinimizeWindow = () => {
    minimizeWindow(EWindowRecord.TRASH_BIN);
  };

  const handleWindowClick = () => {
    if (EWindowRecord.TRASH_BIN && windowsOrder[windowsOrder.length - 1] !== EWindowRecord.TRASH_BIN) {
      focusWindow(EWindowRecord.TRASH_BIN);
    }

    return;
  };

  const toggleViewType = (): void => {
    setView(view === EFolderView.GRID ? EFolderView.LIST : EFolderView.GRID);
  };

  const windowStyles = useMemo(() => {
    return {
      ...{ [styles.minimized]: isMinimized },
      ...{ [styles.focused]: isFocused },
    };
  }, [windowsOrder, isFocused, isMinimized]);

  const renderOverlay = useMemo(() => {
    return <div className={bind([styles.trash_bin_window__overlay, windowStyles])} />;
  }, [windowStyles]);

  const renderFooter = useMemo(() => {
    const footerContent =
      language === LANGUAGE.ENG
        ? `${TRASH_BIN_ITEMS?.length} ${translate(OBJECTS)}`
        : `${translate(OBJECTS)}: ${TRASH_BIN_ITEMS?.length}`;

    return <WindowFooter content={footerContent} />;
  }, [TRASH_BIN_ITEMS, language]);

  return (
    <div className={bind([styles.trash_bin_window, windowStyles])} onClick={handleWindowClick}>
      <div className={bind([styles.trash_bin_window__wrapper, windowStyles])}>
        {renderOverlay}
        <WindowHeader
          type={EWindowType.FOLDER}
          customIcon={<BinIcon useMini={true} />}
          windowStyles={windowStyles}
          title={title}
          handleMinimizeWindow={handleMinimizeWindow}
          handleCloseWindow={() => closeWindow(EWindowRecord.TRASH_BIN)}
          handleMaximizeWindow={maximizeWindow}
          isFocused={isFocused || false}
        />
        <WindowFakeMenu type={EWindowType.FOLDER} />
        <WindowFakeSubmenu type={EWindowType.CUSTOM}>
          <div className={styles.trash_bin_window__submenu}>
            <div className={styles.trash_bin_window__submenu_controls}>
              <button className={bind([styles.trash_bin_window__submenu_control, [styles.disabled]])}>
                <ArrowLeftIcon useMini={true} />
                {translate(BACK)}
              </button>
            </div>
            <div className={styles.trash_bin_window__submenu_controls}>
              <button onClick={toggleViewType} className={bind([styles.trash_bin_window__submenu_control])}>
                {view === EFolderView.GRID ? (
                  <GridMiniIcon className={styles.trash_bin_window__view_icon} />
                ) : (
                  <ListMiniIcon className={styles.trash_bin_window__view_icon} />
                )}
              </button>
            </div>
          </div>
        </WindowFakeSubmenu>
        <div className={bind([styles.trash_bin_window__body, windowStyles])}>
          <ul className={styles.trash_bin_window__shortcuts}>
            <li className={bind([styles.trash_bin_window__shortcut, styles[view]])}>
              <TrashBinShortcut view={view} title={translate(OLD_CV_FILE_NAME)} />
            </li>
          </ul>
        </div>
        {renderFooter}
      </div>
    </div>
  );
};
