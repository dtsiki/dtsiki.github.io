import { Window } from 'src/components/common/Window/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './HeroTooltipDemo.module.scss';
import { EWindowType } from 'src/components/common/Window/Window.types';

export const HeroTooltipDemo = () => {
  return (
    <Window type={EWindowType.CUSTOM} title='tooltip-demo.exe'>
      <div className={styles.hero_tooltip_demo}>
        Let&#39;s make a{' '}
        <DemoTooltip
          tooltip={<span className='underlined dotted primary'>tooltip</span>}
          message='Yay!'
          variant={DemoTooltipVariant.HERO}
          direction={DemoTooltipDirection.BOTTOM}
        />
      </div>
    </Window>
  );
};
