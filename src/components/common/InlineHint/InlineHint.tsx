import { useState } from 'react';
import classNames from 'classnames';
import { CircleIcon } from '../icons/ui';
import { IInlineHintProps } from './InlineHint.types';

import styles from './InlineHint.module.scss';

export const InlineHint = ({ title, hint }: IInlineHintProps) => {
  const bind = classNames.bind(styles);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsVisible(true);
  };

  const onMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <span className={styles.inline_hint}>
      <span className={styles.inline_hint__wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span className={styles.inline_hint__title}>{title}</span>
        <span className={styles.inline_hint__icon}>
          <CircleIcon />
          <span className={styles.inline_hint__icon_label}>?</span>
        </span>
      </span>
      <span className={bind([styles.inline_hint__content, { [styles.ACTIVE]: isVisible }])}>{hint}</span>
    </span>
  );
};
