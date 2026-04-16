import { useMemo } from 'react';
import classNames from 'classnames/bind';
import { EWindowBodyBackground, EWindowType, IWindowProps } from './Window.types';
import { OBJECTS } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { TextFile } from './components/TextFile/TextFile';
import { DocFile } from './components/DocFile';
import { Slideshow } from './components/Slideshow/Slideshow';
import { WindowFakeMenu } from './components/WindowFakeMenu';
import { WindowFakeSubmenu } from './components/WindowFakeSubmenu';
import { WindowHeader } from './components/WindowHeader/WindowHeader';
import { Language } from 'src/types';

import styles from './Window.module.scss';

export const Window = (props: IWindowProps) => {
  const {
    id,
    type = EWindowType.WINDOW,
    title,
    fileTitle,
    children,
    pattern,
    filesCount,
    isInverted = false,
    isPopUp = false,
    bodyBackground = EWindowBodyBackground.LIGHT,
    closeAction,
    isFocused = false,
    isMinimized = false,
    content,
    isRoot,
  } = props;
  const bind = classNames.bind(styles);
  const { closeWindow, minimizeWindow, windowsOrder, focusWindow } = useWindowManager();

  const maximizeWindow = () => {};

  const handleCloseWindow = () => {
    if (id) {
      closeAction?.();
      closeWindow(id);
    }
  };

  const handleMinimizeWindow = () => {
    if (id) {
      minimizeWindow(id);
    }
  };

  const handleWindowClick = () => {
    if (id && windowsOrder[windowsOrder.length - 1] !== id) {
      focusWindow(id);
    }

    return;
  };

  const isStaticWindow =
    type === EWindowType.LOADER ||
    type === EWindowType.IMAGE ||
    type === EWindowType.VIDEO ||
    type === EWindowType.CUSTOM;

  const windowStyles = useMemo(() => {
    return {
      ...{ [styles.popUp]: isPopUp },
      ...{ [styles.inverted]: isInverted },
      ...{ [styles.minimized]: isMinimized },
      ...{ [styles.focused]: isStaticWindow ? true : isFocused },
    };
  }, [isPopUp, isInverted, isFocused, isMinimized, windowsOrder]);

  const renderContent = useMemo(() => {
    if (type === EWindowType.TXT_FILE) {
      return <TextFile content={content?.textFile} />;
    }

    if (type === EWindowType.DOC_FILE) {
      return <DocFile pages={content?.docPages} />;
    }

    if (type === EWindowType.SLIDESHOW) {
      return <Slideshow slides={content?.slides} />;
    }

    if (children) {
      return <div className={bind([styles.window__content])}>{children}</div>;
    }
  }, [type, content, children, id, isRoot]);

  const renderOverlay = useMemo(() => {
    if (type === EWindowType.IMAGE || type === EWindowType.VALIDATOR || type === EWindowType.CUSTOM) {
      return;
    }

    return <div className={bind([styles.window__overlay, windowStyles])} />;
  }, [type, windowStyles]);

  return (
    <div className={bind([styles.window, windowStyles])} onClick={handleWindowClick}>
      <div className={bind([styles.window__wrapper, windowStyles])}>
        {renderOverlay}
        <WindowHeader
          type={type}
          windowStyles={windowStyles}
          title={title}
          fileTitle={fileTitle}
          handleMinimizeWindow={handleMinimizeWindow}
          handleCloseWindow={handleCloseWindow}
          handleMaximizeWindow={maximizeWindow}
        />
        <WindowFakeMenu type={type} />
        <WindowFakeSubmenu type={type} />
        <div className={bind([styles.window__body, styles[type], styles[bodyBackground], windowStyles])}>
          {renderContent}
          {pattern && <div className={bind([styles.window__pattern, styles[pattern]])} />}
        </div>
      </div>
    </div>
  );
};
