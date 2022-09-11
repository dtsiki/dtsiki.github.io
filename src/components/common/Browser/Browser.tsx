import React, { ReactElement, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';

import CustomScrollbar from '../CustomScrollbar';

import styles from './browser.module.scss';

interface Props {
  name?: string;
  children: ReactNode;
  hasScroll?: boolean;
}

const Browser = ({ name, children, hasScroll = true }: Props): ReactElement => {
  return (
    <div className={styles.browser}>
      <div className={styles.browser__header}>
        <div className={styles.browser__title}>
          <span className={styles.browser__icon}>
            <FontAwesomeIcon icon={faFirefox} />
          </span>
          {name && (
            <div className={styles.browser__name}>
              {name}
            </div>
          )}
        </div>
        <div className={styles.browser__actions}>
          <span className={styles.browser__control}>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </span>
          <span className={styles.browser__control}>
            <FontAwesomeIcon icon={faWindowMaximize} />
          </span>
          <span className={styles.browser__control}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
      </div>
      <div className={styles.browser__body}>
        {hasScroll ? (
          <CustomScrollbar>
            <div className={styles.browser__content}>
              {children}
            </div>
          </CustomScrollbar>
        ) : (
          <div className={styles.browser__content}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browser;
