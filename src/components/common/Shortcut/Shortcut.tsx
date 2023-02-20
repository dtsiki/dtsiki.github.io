import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Image, { StaticImageData } from 'next/image';

import styles from './shortcut.module.scss';

export enum ShortcutVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARK = 'dark',
  LIGHT = 'light',
  GHOST = 'ghost'
}

interface Props {
  icon?: IconProp;
  customIcon?: StaticImageData;
  name?:  string;
  variant?: ShortcutVariant;
  handleAction?: (any: any) => any;
  tooltip?: ReactNode;
}

const Shortcut = ({ icon, name, variant = ShortcutVariant.PRIMARY, handleAction, tooltip, customIcon }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <div className={bind([styles.shortcut, styles[variant], tooltip ? ' tooltip' : ''])}>
      {icon && (
        <span className={styles.shortcut__icon}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {customIcon && (
        <Image
          src={customIcon}
          alt=''
          width={60}
          height={60} />
      )}
      {name && (
        <span className={styles.shortcut__label}>
          {name}
        </span>
      )}
      {tooltip && (
        <div className={bind(['tooltip__message', styles.shortcut__tooltip])}>
          {tooltip}
        </div>
      )}
      {handleAction && (
        <button
          onClick={handleAction}
          className={styles.shortcut__button}>
          <span>Click on shortcut</span>
        </button>
      )}
    </div>
  );
};

export default Shortcut;
