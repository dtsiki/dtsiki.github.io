import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Window } from 'src/components/common/Window/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';
import { IDefaultTooltipDemoProps } from './DefaultTooltipDemo.types';

import styles from './DefaultTooltipDemo.module.scss';
import { EWindowType } from 'src/components/common/Window/Window.types';

export const DefaultTooltipDemo = ({ disableTriggering = false, title }: IDefaultTooltipDemoProps) => {
  return (
    <Window type={EWindowType.CUSTOM} title={title}>
      <div className={styles.default_tooltip_demo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud yay{' '}
        <DemoTooltip
          tooltip={<FontAwesomeIcon icon={faCircleInfo} />}
          message='I&#39;m a tooltip!'
          isInline
          disableTriggering={disableTriggering}
          variant={DemoTooltipVariant.DEFAULT}
        />
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </Window>
  );
};
