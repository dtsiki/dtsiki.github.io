import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './gratitude.module.scss';

const Gratitude = (): ReactElement => {
  return (
    <div className={styles.gratitude}>
      <div className='container'>
        <span className={styles.gratitude__heart}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <p className='heading-l3'>
          Thanks for watching!
        </p>
      </div>
    </div>
  );
};

export default Gratitude;
