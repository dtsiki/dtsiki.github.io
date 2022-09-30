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
      <Window pattern={WindowPatternVariant.CROSS}>
        <div className={bind([styles.smileToggle__overlay, { [styles.smiley]: isToggled }, { [styles.blank]: !isToggled }])} />
        <div className={styles.smileToggle__wrapper}>
          <label className={bind(['toggle', styles.smileToggle__toggle])}>
            <span className={bind(['toggle__label', styles.smileToggle__label])}>
              <span className='visually-hidden'>
                Make it {isToggled ? 'boring' : 'fancy'}
              </span>
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
  );
};

export default SmileToggle;
