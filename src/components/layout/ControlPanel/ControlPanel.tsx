import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HOME, OPEN_THE_WINDOW, SWITCH_LANGUAGE } from 'src/i18n';
import { useWindowManager } from '~hooks/useWindowManager';
import { useNotifications } from '~hooks/useNotifications';
import { useFolderNavigation } from '~hooks/useFolderNavigation';
import { useTranslate } from '~hooks/useTranslate';
import { EPanelControl } from './ControlPanel.types';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { CurrentTime } from 'src/components/common/CurrentTime/CurrentTime';
import { Notifications } from '../Notifications/Notifications';
import { EBlogRecord } from 'src/components/blog/BlogWindow/BlogWindow.utils';
import { HomeIcon } from 'src/components/common/icons/ui';
import { getCustomWindowIcon, getCustomWindowTitle, getWindowIcon, getWindowTitle } from './ControlPanel.utils';
import { SignalIcon } from 'src/components/common/icons/ui/Signal';
import { useWindowSize } from '~hooks/useWindowSize/useWindowSize';
import { hideOnMobile, hideOnTablet } from '~components/common/Window/components/WindowRenderer/WindowRenderer.utils';

import styles from './ControlPanel.module.scss';

export const ControlPanel = () => {
  const bind = classNames.bind(styles);
  const router = useRouter();

  const { isMobile, isTablet } = useWindowSize();
  const { windows, openWindow } = useWindowManager();
  const { translate, language, toggleLanguage } = useTranslate();
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
                <span className={styles.control_panel__control_label}>Home</span>
              </button>
            </li>
          </ul>
          <ul className={styles.control_panel__windows}>
            {windows
              .filter((window) => !(hideOnMobile(isMobile, window) || hideOnTablet(isTablet, window)))
              .map(({ id, isFocused, isMinimized, config }) => (
                <li key={id} className={styles.control_panel__window}>
                  <button
                    onClick={() => openWindow(id, false, true)}
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
