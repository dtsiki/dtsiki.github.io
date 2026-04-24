import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { isString, noop } from 'lodash';
import { IBlogWindowProps } from './BlogWindow.types';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EBlogRecord } from './BlogWindow.utils';
import { useTranslate } from 'src/hooks/useTranslate';
import { TFolderItem, TFolderItemType } from './components/Folder/Folder.types';
import { Folder } from './components/Folder';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';
import { useFolderNavigation } from 'src/hooks/useFolderNavigation';
import { useRouter } from 'next/router';
import { WindowHeader } from 'src/components/common/Window/components/WindowHeader/WindowHeader';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { TypingMachineIcon } from 'src/components/common/icons/ui';
import { translateTitle } from 'src/utils/translate';
import { BLOG_FOLDER_NAME } from 'src/i18n';
import { WindowFakeMenu } from 'src/components/common/Window/components/WindowFakeMenu';

import styles from './BlogWindow.module.scss';

export const BlogWindow = (props: IBlogWindowProps) => {
  const { isMinimized, isFocused } = props;

  const bind = classNames.bind(styles);
  const router = useRouter();
  const { language, translate } = useTranslate();
  const { closeWindow, minimizeWindow, windowsOrder, focusWindow } = useWindowManager();

  const BLOG_FOLDER_TITLE = translate(BLOG_FOLDER_NAME);
  const { currentTitle, currentContent, updateContent, isRoot, backToRoot } = useFolderNavigation(
    EBlogRecord.BLOG_FOLDER
  );

  const [title, setTitle] = useState<string>(BLOG_FOLDER_TITLE);

  useEffect(() => {
    if (isString(currentTitle)) {
      setTitle(currentTitle);
    }
  }, [currentTitle]);

  const handleMinimizeWindow = () => {
    minimizeWindow(EWindowRecord.BLOG_FOLDER);
  };

  const handleWindowClick = () => {
    if (EWindowRecord.BLOG_FOLDER && windowsOrder[windowsOrder.length - 1] !== EWindowRecord.BLOG_FOLDER) {
      focusWindow(EWindowRecord.BLOG_FOLDER);
    }

    return;
  };

  const handleItemClick = useCallback(
    (item: TFolderItem) => {
      if (item.type === TFolderItemType.FOLDER) {
        if (item.children && item.title) {
          const title = translateTitle(language, item.path);

          updateContent(item.children, title);
        }

        if (item.route) {
          router.push(item.route);
        }

        minimizeWindow(EWindowRecord.BLOG_FOLDER);
      }

      if (item.type === TFolderItemType.TXT_FILE) {
        router.push(`/blog/${language.toLocaleLowerCase()}/${item.postConfig?.link}`);

        minimizeWindow(EWindowRecord.BLOG_FOLDER);
      }
    },
    [language, isRoot, router]
  );

  const windowStyles = useMemo(() => {
    return {
      ...{ [styles.minimized]: isMinimized },
      ...{ [styles.focused]: isFocused },
    };
  }, [windowsOrder, isFocused, isMinimized]);

  const renderContent = useMemo(() => {
    return (
      <div className={styles.blog_window__content}>
        <Folder content={currentContent} handleItemClick={handleItemClick} isRoot={isRoot} navigateBack={backToRoot} />
      </div>
    );
  }, [currentContent, isRoot]);

  const renderOverlay = useMemo(() => {
    return <div className={bind([styles.blog_window__overlay, windowStyles])} />;
  }, [windowStyles]);

  return (
    <div className={bind([styles.blog_window, windowStyles])} onClick={handleWindowClick} role='none'>
      <div className={bind([styles.blog_window__wrapper, windowStyles])}>
        {renderOverlay}
        <WindowHeader
          type={EWindowType.FOLDER}
          customIcon={<TypingMachineIcon useMini={true} />}
          windowStyles={windowStyles}
          title={title}
          handleMinimizeWindow={handleMinimizeWindow}
          handleCloseWindow={() => closeWindow(EWindowRecord.BLOG_FOLDER)}
          handleMaximizeWindow={noop}
        />
        <WindowFakeMenu type={EWindowType.FOLDER} />
        <div className={bind([styles.blog_window__body, windowStyles])}>{renderContent}</div>
      </div>
    </div>
  );
};
