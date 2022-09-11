import React, { MutableRefObject, ReactElement } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './scroll-down-button.module.scss';

export enum ScrollDownButtonVariant {
  LIGHT = 'light',
  PRIMARY = 'primary',
  DARK = 'dark'
}

interface ScrollDownButtonProps {
  variant?: ScrollDownButtonVariant;
  targetRef:  MutableRefObject<HTMLElement | null>;
  isHidden?: boolean;
}

const ScrollDownButton = ({ targetRef, variant = ScrollDownButtonVariant.PRIMARY, isHidden }: ScrollDownButtonProps): ReactElement => {
  const bind = classNames.bind(styles);

  const onScrollDown = (): void => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className={bind([styles.scrollDownButton, { [styles.scrollDownButton_hidden]: isHidden } ])}>
      <button
        onClick={onScrollDown}
        className={bind(['button', styles.scrollDownButton__button, styles[variant]])}>
        <span className='visually-hidden'>Scroll down</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    </div>
  );
};

export default ScrollDownButton;
