import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faCaretDown, faVolumeXmark, faWifi } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import styles from './top-panel.module.scss';

const TopPanel = (): ReactElement => {
  const currentDate = moment()
    .format('MMM D HH:mm');

  return (
    <div className={styles.topPanel}>
      {currentDate}
      <div className={styles.topPanel__actions}>
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faVolumeXmark} />
        <FontAwesomeIcon icon={faBattery} />
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default TopPanel;
