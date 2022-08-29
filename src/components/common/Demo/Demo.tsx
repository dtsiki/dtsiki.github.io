import React, { ReactElement, ReactNode } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './demo.module.scss';

interface Props {
  name: string;
  children: ReactNode
}

const Demo = ({ name, children }: Props): ReactElement => {
  return (
    <div className={styles.demo}>
      <div className={styles.demo__header}>
        <div className={styles.demo__name}>
          <FontAwesomeIcon icon={faFile} />
          {name}
        </div>
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
        {children}
      </div>
    </div>
  );
};

export default Demo;
