import classNames from 'classnames';
import { IClockProps } from './Clock.types';

import styles from './Clock.module.scss';

export const Clock = ({ delay }: IClockProps) => {
  const bind = classNames.bind(styles);

  return (
    <div className={styles.clock}>
      <div className={styles.clock__frame}>
        <div className={styles.clock__hand} />
        <div className={bind([styles.clock__mark, styles.TOP])} />
        <div className={bind([styles.clock__mark, styles.RIGHT])} />
        <div className={bind([styles.clock__mark, styles.BOTTOM])} />
        <div className={bind([styles.clock__mark, styles.LEFT])} />
      </div>
      {delay && <div className={styles.clock__delay}>{delay} ms</div>}
    </div>
  );
};
