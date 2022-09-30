import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';

import Window from 'src/components/common/Window';
import { WindowPatternVariant } from 'src/components/common/Window/Window';

import styles from './smile-toggle.module.scss';

const SmileToggle = (): ReactElement => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const bind = classNames.bind(styles);

  const toggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggled(e.target.checked);
  }

  return (
    <div className={styles.smileToggle}>
      <Window pattern={isToggled ? WindowPatternVariant.SMILEY : undefined}>
        <div className={styles.smileToggle__wrapper}>
          <Window title='Settings'>
            <div className={styles.smileToggle__settings}>
              <label className={bind(['toggle', styles.smileToggle__toggle])}>
                <span className={bind(['toggle__label', styles.smileToggle__label])}>
                  Make it {isToggled ? 'boring' : 'fancy'}
                </span>
                <input
                  className={bind(['toggle__checkbox', styles.smileToggle__checkbox])}
                  type='checkbox'
                  onChange={toggle} />
                <span className={bind(['toggle__switch', styles.smileToggle__switch])} />
              </label>
            </div>
          </Window>
        </div>
      </Window>
    </div>
  );
};

export default SmileToggle;
