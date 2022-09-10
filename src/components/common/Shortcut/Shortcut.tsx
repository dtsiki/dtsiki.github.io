import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './shortcut.module.scss';

export enum ShortcutVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DARK = 'dark',
  LIGHT = 'light',
  GHOST = 'ghost'
}

interface Props {
  icon: IconProp;
  name?:  string;
  variant?: ShortcutVariant;
  handleAction?: () => void;
}

const Shortcut = ({ icon, name, variant = ShortcutVariant.PRIMARY, handleAction }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <div className={bind([styles.shortcut, styles[variant]])}>
      <span className={styles.shortcut__icon}>
        <FontAwesomeIcon icon={icon} />
      </span>
      {name && (
        <span className={styles.shortcut__label}>
          {name}
        </span>
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
