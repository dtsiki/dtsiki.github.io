import classNames from 'classnames';
import { useMemo } from 'react';
import { Window } from 'src/components/common/Window/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './DirectionsTooltipDemo.module.scss';
import { EWindowType } from 'src/components/common/Window/Window.types';

export const DirectionsTooltipDemo = () => {
  const bind = classNames.bind(styles);

  const TOOLTIP_DIRECTIONS = [
    DemoTooltipDirection.RIGHT,
    DemoTooltipDirection.TOP,
    DemoTooltipDirection.LEFT,
    DemoTooltipDirection.BOTTOM,
  ];

  const renderDirections = useMemo(() => {
    return TOOLTIP_DIRECTIONS.map((direction) => {
      return (
        <li key={direction} className='col col--25 col--tablet-50 col--mobile-100'>
          <div className={styles.directions_tooltips_demo__item}>
            <DemoTooltip
              tooltip={
                <span className={bind([styles.directions_tooltips_demo__label, 'underlined dotted primary'])}>
                  {direction}
                </span>
              }
              message={direction}
              variant={DemoTooltipVariant.PRIMARY}
              direction={direction}
            />
          </div>
        </li>
      );
    });
  }, [TOOLTIP_DIRECTIONS]);

  return (
    <Window type={EWindowType.CUSTOM} title='tooltip-demo(5).exe'>
      <div className={styles.directions_tooltips_demo}>
        <h3 className={styles.directions_tooltips_demo__title}>There are four directions of tooltips:</h3>
        <ul className={bind(['row', styles.directions_tooltips_demo__list])}>{renderDirections}</ul>
      </div>
    </Window>
  );
};
