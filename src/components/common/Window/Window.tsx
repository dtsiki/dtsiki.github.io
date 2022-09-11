import React, { ReactElement, ReactNode, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faFolder, faHouse, faLayerGroup, faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import styles from './window.module.scss';

export enum WindowType {
  WINDOW = 'window',
  BROWSER = 'browser',
  SLIDESHOW = 'slideshow',
  FOLDER = 'folder'
}

export enum WindowPatternVariant {
  WAVY = 'wavy',
  CROSS = 'cross',
  SMILEY = 'smiley'
}

interface Props {
  type?: WindowType;
  title?: string;
  fileTitle?: string;
  children: ReactNode;
  pattern?: WindowPatternVariant;
  filesCount?: number;
  showMenu?: boolean;
}

const Window = ({ type = WindowType.WINDOW, title, fileTitle, children, pattern, filesCount, showMenu = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const menuItems = {
    slideshow: ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'],
    folder: ['File', 'Edit', 'View', 'Favourites', 'Tools', 'Help']
  }

  const icons = {
    browser: faFirefox,
    slideshow: faLayerGroup,
    folder: faFolder
  };

  const renderMenuItems = useMemo(() => {
    const items = menuItems.slideshow;

    return items.map((menuItem) => {
      return (
        <li key={menuItem}>
          {menuItem}
        </li>
      )
    })
  }, [menuItems]);

  const renderHeaderIcon = useMemo(() => {
    if (type && type !== WindowType.WINDOW) {
      return <FontAwesomeIcon icon={icons[type]} />
    }
  }, [type])

  return (
    <div className={styles.window}>
      <div className={bind([styles.window__header, styles[type]])}>
        <div className={styles.window__heading}>
          {renderHeaderIcon}
          <span className={styles.window__title}>
            {title}
          </span>
          {fileTitle && (
            <span className={styles.window__fileTitle}>
              {fileTitle}
            </span>
          )}
        </div>
        <div className={styles.window__actions}>
          <span className={styles.window__control}>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </span>
          <span className={styles.window__control}>
            <FontAwesomeIcon icon={faWindowMaximize} />
          </span>
          <span className={styles.window__control}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </div>
      {showMenu && (type === WindowType.SLIDESHOW || type === WindowType.FOLDER) && (
        <div className={styles.window__menu}>
          {renderMenuItems}
        </div>
      )}
      <div className={bind([styles.window__body, styles[type]])}>
        <div className={styles.window__content}>
          {children}
        </div>
        {pattern && (
          <div className={bind([styles.window__pattern, styles[pattern]])} />
        )}
        {type === WindowType.FOLDER && (
          <div className={styles.window__footer}>
            <span className={styles.window__count}>
              {filesCount} object(s)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Window;
