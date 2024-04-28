import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './thanks.module.scss';

const Thanks = (): ReactElement => {
  return (
    <div className={styles.thanks}>
      <div className='container'>
        <span className={styles.thanks__heart}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <p className='heading-l3'>
          Thanks for reading!
        </p>
      </div>
    </div>
  );
};

export default Thanks;
