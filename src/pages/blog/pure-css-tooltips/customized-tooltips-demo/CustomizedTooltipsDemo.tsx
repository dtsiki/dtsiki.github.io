import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';

import Window from 'src/components/common/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './customized-tooltips-demo.module.scss';

const CustomizedTooltipsDemo = (): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <Window>
      <div className={styles.customizedTooltipsDemo}>
        <h3 className={styles.customizedTooltipsDemo__title}>
          There are two types of tooltips:
        </h3>
        <ol className='list ordered'>
          <li className='list__item'>
            <div className={styles.customizedTooltipsDemo__item}>
              <DemoTooltip
                tooltip={
                  <span className={bind([styles.customizedTooltipsDemo__label, 'underlined dotted primary'])}>
                    Primary
                  </span>
                }
                message='Yay!'
                variant={DemoTooltipVariant.PRIMARY}
                direction={DemoTooltipDirection.RIGHT}
              />
            </div>
          </li>
          <li className='list__item'>
            <div className={styles.customizedTooltipsDemo__item}>
              <DemoTooltip
                tooltip={
                  <span className={bind([styles.customizedTooltipsDemo__label, 'underlined dotted primary'])}>
                    Secondary tooltip
                  </span>
                }
                message='Yay!'
                variant={DemoTooltipVariant.SECONDARY}
                direction={DemoTooltipDirection.RIGHT}
              />
            </div>
          </li>
        </ol>
      </div>
    </Window>
  );
};

export default CustomizedTooltipsDemo;
