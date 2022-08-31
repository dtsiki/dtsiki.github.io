import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './demo-tooltip.module.scss';

export enum DemoTooltipVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  HERO = 'hero'
}

export enum DemoTooltipDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right'
}

interface Props {
  tooltip: ReactNode | string;
  message: string;
  variant?: DemoTooltipVariant;
  direction?: DemoTooltipDirection;
  isInline?: boolean;
  disableTriggering?: boolean;
}

const DemoTooltip = ({ tooltip, message, variant = DemoTooltipVariant.PRIMARY, direction = DemoTooltipDirection.RIGHT, isInline = false, disableTriggering = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const showDirection = !isInline && variant !== DemoTooltipVariant.HERO;

  return (
    <div className={bind(['tooltip', styles.demoTooltip, styles[variant], showDirection && styles[direction], { [styles.inline]: isInline }])}>
      {tooltip}
      <div className={bind([!disableTriggering && 'tooltip__message', styles.demoTooltip__message])}>
        {message}
      </div>
    </div>
  );
};

export default DemoTooltip;
