import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { EHomeShortcutVariant, IHomeShortcutProps } from './HomeShortcut.types';

import styles from './HomeShortcut.module.scss';

export const HomeShortcut = ({
  icon,
  name,
  variant = EHomeShortcutVariant.PRIMARY,
  handleAction,
  tooltip,
  iconSize = 60,
}: IHomeShortcutProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <div className={bind([styles.home_shortcut, styles[variant], tooltip ? ' tooltip' : ''])}>
      {icon && (
        <span className={styles.home_shortcut__icon} style={{ width: iconSize }}>
          {icon}
        </span>
      )}
      {name && <span className={styles.home_shortcut__label}>{name}</span>}
      {tooltip && <div className={bind(['tooltip__message', styles.home_shortcut__tooltip])}>{tooltip}</div>}
      {handleAction && (
        <button onClick={handleAction} className={styles.home_shortcut__button}>
          <span>Click on shortcut</span>
        </button>
      )}
    </div>
  );
};
