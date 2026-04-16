import { ENoteType, INoteProps } from './Note.types';
import { AlertMiniIcon } from '../icons/ui';

import styles from './Note.module.scss';

export const Note = ({ title, children, type = ENoteType.DEFAULT }: INoteProps) => {
  return (
    <p className={styles.note}>
      {type === ENoteType.ALERT && <AlertMiniIcon className={styles.note__icon} />}
      {title && <span className={styles.note__title}>{title}: </span>}
      {children}
    </p>
  );
};
