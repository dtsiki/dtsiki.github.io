import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import Window from 'src/components/common/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './post.module.scss';

interface Props {
  disableTriggering?: boolean;
}

const DefaultTooltipDemo = ({ disableTriggering = false }: Props): ReactElement => {
  return (
    <Window>
      <div className={styles.post__example}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud yay <DemoTooltip
          tooltip={<FontAwesomeIcon icon={faCircleInfo} />}
          message='I&#39;m a tooltip!'
          isInline
          disableTriggering={disableTriggering}
          variant={DemoTooltipVariant.DEFAULT}
        />
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </Window>
  );
};

export default DefaultTooltipDemo;
