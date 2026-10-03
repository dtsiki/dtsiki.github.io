import { useState } from 'react';
import { ISpoilerProps } from './Spoiler.types';
import classNames from 'classnames';

import styles from './Spoiler.module.scss';

export const Spoiler = ({ label, children = '' }: ISpoilerProps) => {
  const bind = classNames.bind(styles);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <p className={styles.spoiler}>
      <span className={styles.spoiler__label}>{label}</span>
      <span onClick={handleReveal} className={bind([styles.spoiler__content, isRevealed && styles.REVEALED])}>
        {children}
      </span>
    </p>
  );
};
