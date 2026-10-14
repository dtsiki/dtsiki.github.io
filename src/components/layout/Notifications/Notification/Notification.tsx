import type { INotificationProps } from './Notification.types';
import { useTranslate } from '~hooks/useTranslate';
import { useNotifications } from '~hooks/useNotifications';
import { CLOSE_THE_NOTIFICATION } from 'src/i18n';
import { translateTitle } from 'src/utils/translate';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Notification.module.scss';

export const Notification = ({ config }: INotificationProps) => {
  const { id, title, message } = config;

  const { translate, language } = useTranslate();
  const { hideNotification } = useNotifications();

  return (
    <div className={styles.notification}>
      <button
        onClick={() => hideNotification(id)}
        aria-label={translate(CLOSE_THE_NOTIFICATION)}
        className={styles.notification__control}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className={styles.notification__title}>{translateTitle(language, title)}</div>
      <div className={styles.notification__body}>{translateTitle(language, message)}</div>
    </div>
  );
};
