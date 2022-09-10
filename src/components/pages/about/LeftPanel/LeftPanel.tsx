import React, { ReactElement, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirefoxBrowser, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faFolder, faGear, faTerminal } from '@fortawesome/free-solid-svg-icons';

import styles from './left-panel.module.scss';

const LeftPanel = (): ReactElement => {
  const icons = [faFolder, faFirefoxBrowser, faTerminal, faTelegram];

  const renderShortcuts = useMemo(() => {
    return icons.map((icon, index) => {
      return (
        <div
          key={index}
          className={styles.leftPanel__shortcut}>
          <FontAwesomeIcon icon={icon} />
        </div>
      )
    })
  }, [icons]);

  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftPanel__actions}>
        {renderShortcuts}
      </div>
      <div className={styles.leftPanel__footer}>
        <div className={styles.leftPanel__shortcut}>
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
