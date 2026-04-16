import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HOME, OPEN_THE_WINDOW, SWITCH_LANGUAGE, BLOG_FOLDER_NAME } from 'src/i18n';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EPanelControl } from './ControlPanel.types';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { CurrentTime } from 'src/components/common/CurrentTime/CurrentTime';
import { useTranslate } from 'src/hooks/useTranslate';
import { Notifications } from '../Notifications/Notifications';
import { useNotifications } from 'src/hooks/useNotifications';
import { useFolderNavigation } from 'src/hooks/useFolderNavigation';
import { BLOG_FOLDER_CONFIG, EBlogRecord } from 'src/components/blog/BlogWindow/BlogWindow.utils';
import { HomeIcon } from 'src/components/common/icons/ui';
import { getCustomWindowIcon, getCustomWindowTitle, getWindowIcon, getWindowTitle } from './ControlPanel.utils';

import styles from './ControlPanel.module.scss';
import { SignalIcon } from 'src/components/common/icons/ui/Signal';

export const ControlPanel = () => {
  const bind = classNames.bind(styles);
  const router = useRouter();

  const { windows, openWindow } = useWindowManager();
  const { language, toggleLanguage } = useTranslate();
  const { translate } = useTranslate();
  const { getUnreadCount } = useNotifications();
  const unreadNotificationsCount = getUnreadCount();
  /*const initialState = {
    title: translate(BLOG_FOLDER_NAME),
    content: BLOG_FOLDER_CONFIG.children,
  };*/
  const { currentTitle } = useFolderNavigation(EBlogRecord.BLOG_FOLDER /*, initialState*/);

  const handleHome = () => {
    router.push('/');
  };

  return (
    <nav className={styles.control_panel}>
      <div className={styles.control_panel__wrapper}>
        <div className={styles.control_panel__section}>
          <ul className={styles.control_panel__controls}>
            <li>
              <button
                className={bind([styles.control_panel__control, styles[EPanelControl.HOME]])}
                aria-label={translate(HOME)}
                onClick={handleHome}>
                <HomeIcon />
              </button>
            </li>
          </ul>
          <ul className={styles.control_panel__windows}>
            {windows?.map(({ id, isFocused, isMinimized, config }) => (
              <li key={id} className={styles.control_panel__window}>
                <button
                  onClick={() => openWindow(id)}
                  aria-label={translate(OPEN_THE_WINDOW)}
                  className={bind([
                    styles.control_panel__window_button,
                    { [styles.focused]: isFocused && !isMinimized },
                  ])}>
                  {getCustomWindowIcon(id)}
                  {getCustomWindowTitle(id, { language, currentTitle, translate })}
                  {getWindowIcon(config)}
                  {getWindowTitle(language, config)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.control_panel__section}>
          {!!unreadNotificationsCount && (
            <div className={styles.control_panel__notifications}>
              <Notifications />
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
          )}
          <div className={styles.control_panel__system_controls}>
            <button
              onClick={toggleLanguage}
              aria-label={translate(SWITCH_LANGUAGE)}
              className={bind([styles.control_panel__control, styles[EPanelControl.LANG]])}>
              {language}
            </button>
            <div className={bind([styles.control_panel__control, styles[EPanelControl.WI_FI]])}>
              <SignalIcon />
            </div>
            <div className={styles.control_panel__time}>
              <CurrentTime />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
