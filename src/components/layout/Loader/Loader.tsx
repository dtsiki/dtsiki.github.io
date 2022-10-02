import React, { ReactElement } from 'react';

import Window from 'src/components/common/Window';
import Hero from '../Hero';

import styles from './loader.module.scss';

const Loader = (): ReactElement => {
  return (
    <Hero>
      <div className={styles.loader}>
        <Window title='Loading...'>
          <div className={styles.loader__wrapper}>
            <div className={styles.loader__bar}>
              <div className={styles.loader__progress} />
            </div>
          </div>
        </Window>
      </div>
    </Hero>
  );
};

export default Loader;
