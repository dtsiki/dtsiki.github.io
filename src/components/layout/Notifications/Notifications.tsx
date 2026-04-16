import { useNotifications } from 'src/hooks/useNotifications';
import { Notification } from './Notification/Notification';

import styles from './Notifications.module.scss';

export const Notifications = () => {
  const { notifications } = useNotifications();

  if (!notifications.length) {
    return null;
  }

  return (
    <div className={styles.notifications}>
      <ul className={styles.notifications__list}>
        {notifications.map((notification) => (
          <li key={notification.id} className={styles.notifications__item}>
            <Notification config={{ id: notification.id, title: notification.title, message: notification.message }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
