import classNames from 'classnames';
import { IWindowHeaderProps } from './WindowHeader.types';
import { useMemo } from 'react';
import { useTranslate } from 'src/hooks/useTranslate';
import { EWindowType } from '../../Window.types';
import { CLOSE_THE_WINDOW, MAXIMIZE_THE_WINDOW, MINIMIZE_THE_WINDOW } from 'src/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CircleIcon } from '../../../icons/ui';
import { translateTitle } from 'src/utils/translate';
import { WINDOW_ICON, hasWindowIcon } from './WindowHeader.utils';

import styles from './WindowHeader.module.scss';

export const WindowHeader = (props: IWindowHeaderProps) => {
  const {
    type,
    windowStyles,
    customIcon,
    title,
    fileTitle,
    handleCloseWindow,
    handleMaximizeWindow,
    handleMinimizeWindow,
  } = props;
  const bind = classNames.bind(styles);
  const { translate, language } = useTranslate();

  const renderHeaderIcon = useMemo(() => {
    const icon = customIcon ? customIcon : hasWindowIcon(type) ? WINDOW_ICON[type] : null;

    if (icon) {
      return <span className={styles.window_header__icon}>{icon}</span>;
    }
  }, [customIcon, type]);

  const getHeaderDecoration = () => {
    return (
      <span className={bind([styles.window_header__decoration, windowStyles])}>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <CircleIcon
              key={`circle-icon-${index}`}
              useMini={true}
              useFilled={true}
              className={styles.window_header__decoration_icon}
            />
          ))}
      </span>
    );
  };

  const renderTitle = useMemo(() => {
    if (title) {
      return (
        <span className={bind([styles.window_header__title, styles[type], { [styles.hasFile]: !!fileTitle }])}>
          {translateTitle(language, title)}
        </span>
      );
    }
  }, [title, fileTitle]);

  const renderActions = useMemo(() => {
    if (type === EWindowType.IMAGE || type === EWindowType.VALIDATOR) {
      return null;
    }

    return (
      <div className={styles.window_header__actions}>
        <button
          onClick={handleMinimizeWindow}
          className={bind([styles.window_header__control, windowStyles])}
          aria-label={translate(MINIMIZE_THE_WINDOW)}>
          <FontAwesomeIcon
            icon={faWindowMinimize}
            className={bind([styles.window_header__control_icon, styles.MINIMIZE])}
          />
        </button>
        <button
          onClick={handleMaximizeWindow}
          className={bind([styles.window_header__control, windowStyles])}
          aria-label={translate(MAXIMIZE_THE_WINDOW)}>
          <FontAwesomeIcon
            icon={faWindowMaximize}
            className={bind([styles.window_header__control_icon, styles.MAXIMIZE])}
          />
        </button>
        <button
          onClick={handleCloseWindow}
          className={bind([styles.window_header__control, windowStyles])}
          aria-label={translate(CLOSE_THE_WINDOW)}>
          <FontAwesomeIcon icon={faXmark} className={bind([styles.window_header__control_icon, styles.CLOSE])} />
        </button>
      </div>
    );
  }, [type]);

  return (
    <div className={bind([styles.window_header, styles[type], windowStyles])}>
      <div className={bind([styles.window_header__heading])}>
        {getHeaderDecoration()}
        <span className={styles.window_header__title_wrapper}>
          {renderHeaderIcon}
          {renderTitle}
          {fileTitle && <span className={styles.window_header__fileTitle}>{fileTitle}</span>}
        </span>
      </div>
      {renderActions}
    </div>
  );
};
