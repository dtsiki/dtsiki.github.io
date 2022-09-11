import classNames from 'classnames';
import React, { ReactElement, useMemo } from 'react';

import Window from 'src/components/common/Window';
import DemoTooltip from 'src/components/pages/blog/DemoTooltip';
import { DemoTooltipDirection, DemoTooltipVariant } from 'src/components/pages/blog/DemoTooltip/DemoTooltip';

import styles from './directions-tooltips-demo.module.scss';

const DirectionsTooltipDemo = (): ReactElement => {
  const bind = classNames.bind(styles);

  const directions = [
    DemoTooltipDirection.RIGHT,
    DemoTooltipDirection.TOP,
    DemoTooltipDirection.LEFT,
    DemoTooltipDirection.BOTTOM
  ];

  const renderDirections = useMemo(() => {
    return directions.map((direction) => {
      return (
        <li
          key={direction}
          className='col col--25 col--tablet-50 col--mobile-100'>
          <div className={styles.directionsTooltipsDemo__item}>
            <DemoTooltip
              tooltip={
                <span className={bind([styles.directionsTooltipsDemo__label, 'underlined dotted primary'])}>
                  {direction}
                </span>
              }
              message={direction}
              variant={DemoTooltipVariant.PRIMARY}
              direction={direction}
            />
          </div>
        </li>
      )
    })
  }, [directions]);

  return (
    <Window>
      <div className={styles.directionsTooltipsDemo}>
        <h3 className={styles.directionsTooltipsDemo__title}>
          There are four directions of tooltips:
        </h3>
        <ul className={bind(['row', styles.directionsTooltipsDemo__list])}>
          {renderDirections}
        </ul>
      </div>
    </Window>
  );
};

export default DirectionsTooltipDemo;
