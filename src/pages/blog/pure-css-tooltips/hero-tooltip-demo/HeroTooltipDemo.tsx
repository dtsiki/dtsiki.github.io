import React, { ReactElement } from 'react';

import Demo from 'src/components/common/Demo';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './hero-tooltip-demo.module.scss';

const HeroTooltipDemo = (): ReactElement => {
  return (
    <Demo>
      <div className={styles.heroTooltipDemo}>
        Let&#39;s make a <DemoTooltip
          tooltip={<span className='underlined dotted primary'>tooltip</span>}
          message='Yay!'
          variant={DemoTooltipVariant.HERO}
          direction={DemoTooltipDirection.BOTTOM}
        />
      </div>
    </Demo>
  );
};

export default HeroTooltipDemo;
