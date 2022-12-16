import { ReactElement } from 'react';

import styles from './shortcut-tooltip.module.scss';

interface Props {
  items: Array<{ [key: string]: string }>;
}

const ShortcutTooltip = ({ items }: Props): ReactElement => {
  return (
    <ul className={styles.shortcutTooltip}>
      {items.map((item) => (
        <li
          key={item.name}
          className={styles.shortcutTooltip__item}>
          <span className={styles.shortcutTooltip__name}>{item.name}:</span>{' '}
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default ShortcutTooltip;
