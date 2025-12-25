import React, { ReactElement, ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import styles from './hint.module.scss';

interface Props {
  title: string | ReactNode;
  hint: string | ReactNode;
}

export const Hint = ({ title, hint }: Props): ReactElement => {
  const [showHint, setShowHint] = useState<boolean>(false);

  const onMouseEnter = () => {
    setShowHint(true);
  };

  const onMouseLeave = () => {
    setShowHint(false);
  };

  return (
    <span className={styles.hint}>
      <span className={styles.hint_wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span className={styles.hint_title}>{title}</span>
        <FontAwesomeIcon icon={faCircleQuestion} className={styles.hint_icon} />
      </span>
      {showHint && <span className={styles.hint_content}>{hint}</span>}
    </span>
  );
};
