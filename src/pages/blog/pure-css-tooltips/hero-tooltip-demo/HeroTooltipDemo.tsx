import React, { ReactElement } from 'react';

import Window from 'src/components/common/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './hero-tooltip-demo.module.scss';

const HeroTooltipDemo = (): ReactElement => {
  return (
    <Window>
      <div className={styles.heroTooltipDemo}>
        Let&#39;s make a <DemoTooltip
          tooltip={<span className='underlined dotted primary'>tooltip</span>}
          message='Yay!'
          variant={DemoTooltipVariant.HERO}
          direction={DemoTooltipDirection.BOTTOM}
        />
      </div>
    </Window>
  );
};

export default HeroTooltipDemo;
