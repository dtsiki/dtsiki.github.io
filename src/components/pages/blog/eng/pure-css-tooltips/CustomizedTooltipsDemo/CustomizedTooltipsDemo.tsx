import classNames from 'classnames/bind';
import { Window } from 'src/components/common/Window/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './CustomizedTooltipsDemo.module.scss';
import { EWindowType } from 'src/components/common/Window/Window.types';

export const CustomizedTooltipsDemo = () => {
  const bind = classNames.bind(styles);

  return (
    <Window type={EWindowType.CUSTOM} title='tooltip-demo(4).exe'>
      <div className={styles.customized_tooltips_demo}>
        <h3 className={styles.customized_tooltips_demo__title}>There are two types of tooltips:</h3>
        <ol className='list ordered'>
          <li className='list__item'>
            <div className={styles.customized_tooltips_demo__item}>
              <DemoTooltip
                tooltip={
                  <span className={bind([styles.customized_tooltips_demo__label, 'underlined dotted primary'])}>
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
            <div className={styles.customized_tooltips_demo__item}>
              <DemoTooltip
                tooltip={
                  <span className={bind([styles.customized_tooltips_demo__label, 'underlined dotted primary'])}>
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
