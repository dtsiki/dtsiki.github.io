import { INotificationProps } from './Notification.types';

import styles from './Notification.module.scss';

export const Notification = ({ config }: INotificationProps) => {
  const { title, message } = config;

  return (
    <div className={styles.notification}>
      <div className={styles.notification__title}>{title}</div>
      <div className={styles.notification__body}>{message}</div>
    </div>
  );
};
