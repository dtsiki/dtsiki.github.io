import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './select-user.module.scss';

interface Props {
  handleSelect:  () => void;
}

const SelectUser = ({ handleSelect }: Props): ReactElement => {
  return (
    <div className={styles.selectUser}>
      <div className={styles.selectUser__wrapper}>
        <div className={styles.selectUser__icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={styles.selectUser__username}>
          dtsiki
        </div>
        <button
          onClick={handleSelect}
          className={styles.selectUser__button}>
          <span className='visually-hidden'>Select</span>
        </button>
      </div>
    </div>
  );
};

export default SelectUser;
