import React, { ReactElement, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './like.module.scss';

export enum LikeVariant {
  PRIMARY = 'primary',
  LIGHT = 'light'
}

interface Props {
  children: ReactNode;
  variant?: LikeVariant;
  icon?: IconProp;
  clickHandle?: () => void;
}

const Like = ({ children, variant = LikeVariant.PRIMARY, icon = faHeart, clickHandle }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  if (clickHandle) {
    return (
      <button
        onClick={clickHandle}
        className={bind([styles.like, styles.button, styles[variant]])}>
        <FontAwesomeIcon icon={icon} />
        {children}
      </button>
    );
  }

  return (
    <div className={bind([styles.like, styles[variant]])}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </div>
  );
};

export default Like;
