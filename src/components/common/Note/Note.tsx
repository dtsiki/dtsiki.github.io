import classNames from 'classnames';
import { ENoteType, INoteProps } from './Note.types';

import styles from './Note.module.scss';

export const Note = ({ title, children, type = ENoteType.PRIMARY }: INoteProps) => {
  const bind = classNames.bind(styles);

  return (
    <div className={bind([styles.note, styles[type]])}>
      {title && <span className={styles.note__title}>{title}: </span>}
      {children}
    </div>
  );
};
