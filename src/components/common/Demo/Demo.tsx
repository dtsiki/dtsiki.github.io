import React, { ReactElement, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './demo.module.scss';

export enum DemoPatternVariant {
  WAVY = 'wavy',
  CROSS = 'cross'
}
interface Props {
  name?: string;
  children: ReactNode;
  pattern?: DemoPatternVariant;
}

const Demo = ({ name, children, pattern }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <div className={styles.demo}>
      <div className={styles.demo__header}>
        <span className={styles.demo__icon}>
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
        {name && (
          <div className={styles.demo__name}>
            {name}
          </div>
        )}
        <div className={styles.demo__actions}>
          <span className={styles.demo__control}>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </span>
          <span className={styles.demo__control}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </div>
      <div className={styles.demo__body}>
        <div className={styles.demo__content}>
          {children}
        </div>
        {pattern && (
          <div className={bind([styles.demo__pattern, styles[pattern]])} />
        )}
      </div>
    </div>
  );
};

export default Demo;
