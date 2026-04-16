import { INotificationProps } from './Notification.types';
import { useTranslate } from 'src/hooks/useTranslate';
import { CLOSE_THE_NOTIFICATION } from 'src/i18n';
import { useNotifications } from 'src/hooks/useNotifications';
import { CloseIcon } from 'src/components/common/icons/ui';
import { translateTitle } from 'src/utils/translate';

import styles from './Notification.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
