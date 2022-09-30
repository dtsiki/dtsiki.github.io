import React, { ReactElement, ReactNode, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faComments, faFolder, faImage, faLayerGroup, faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import styles from './window.module.scss';

export enum WindowBodyBackground {
  LIGHT = 'light',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARK = 'dark',
  GHOST = 'ghost'
}

export enum WindowType {
  WINDOW = 'window',
  BROWSER = 'browser',
  SLIDESHOW = 'slideshow',
  FOLDER = 'folder',
  IMAGE = 'image',
  VALIDATOR = 'validator',
  CHAT = 'chat'
}

export enum WindowPatternVariant {
  WAVY = 'wavy',
  CROSS = 'cross',
  SMILEY = 'smiley',
  SCALES = 'scales',
  SPRINKLES = 'sprinkles'
}

interface Props {
  type?: WindowType;
  title?: string;
  fileTitle?: string;
  children: ReactNode;
  pattern?: WindowPatternVariant;
  filesCount?: number;
  showMenu?: boolean;
  isInverted?: boolean;
  isPopUp?: boolean;
  bodyBackground?: WindowBodyBackground;
}

const Window = ({ type = WindowType.WINDOW, title, fileTitle, children, pattern, filesCount, showMenu = false, isInverted = false, isPopUp = false, bodyBackground = WindowBodyBackground.LIGHT }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const menuItems = {
    slideshow: ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'],
    folder: ['File', 'Edit', 'View', 'Favourites', 'Tools', 'Help']
  }

  const icons = {
    browser: faFirefox,
    slideshow: faLayerGroup,
    folder: faFolder,
    image: faImage,
    validator: faCode,
    chat: faComments
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
    if (type && type !== WindowType.WINDOW && type !== WindowType.CHAT) {
      return <FontAwesomeIcon icon={icons[type]} />
    }
  }, [type])

  return (
    <div className={styles.window}>
      <div className={bind([styles.window__header, styles[type], { [styles.inverted]: isInverted }, { [styles.popUp]: isPopUp }])}>
        <div className={bind([styles.window__heading, { [styles.inverted]: isInverted }])}>
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
          <span className={bind([styles.window__control, { [styles.inverted]: isInverted }])}>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </span>
          <span className={bind([styles.window__control, { [styles.inverted]: isInverted }])}>
            <FontAwesomeIcon icon={faWindowMaximize} />
          </span>
          <span className={bind([styles.window__control, { [styles.inverted]: isInverted }])}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </div>
      {showMenu && (type === WindowType.SLIDESHOW || type === WindowType.FOLDER) && (
        <div className={styles.window__menu}>
          {renderMenuItems}
        </div>
      )}
      <div className={bind([styles.window__body, styles[type], styles[bodyBackground], { [styles.inverted]: isInverted }])}>
        <div className={bind([styles.window__content])}>
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
