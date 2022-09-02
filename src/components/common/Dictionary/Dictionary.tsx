import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSearch, faStar, faVolumeUp, faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './dictionary.module.scss';

interface Props {
  word:  string;
  type: string;
  definition: string;
  pronunciation: string;
}

const Dictionary = ({ word, type, definition, pronunciation }: Props): ReactElement => {
  return (
    <div className={styles.dictionary}>
      <div className={styles.dictionary__header}>
        <div className={styles.dictionary__title}>
          <FontAwesomeIcon icon={faBook} />
          Dictionary
        </div>
        <div className={styles.dictionary__actions}>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className={styles.dictionary__body}>
        <div className={styles.dictionary__form}>
          <span>
            <FontAwesomeIcon icon={faSearch} />
            {word}
          </span>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className={styles.dictionary__word}>
          {word}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.dictionary__pronunciation}>
          <FontAwesomeIcon icon={faVolumeUp} />
          {pronunciation}
        </div>
        <div className={styles.dictionary__type}>{type}</div>
        <div className={styles.dictionary__definition}>{definition}</div>
      </div>
    </div>
  );
};

export default Dictionary;
