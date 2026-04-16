import { DARIA_T, FRONTEND_DEVELOPER } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './Header.module.scss';

export const Header = () => {
  const { translate } = useTranslate();

  return (
    <h3 className={styles.header}>
      <span className={styles.header__name}>{translate(DARIA_T)}</span>
      <span className={styles.header__position}>{translate(FRONTEND_DEVELOPER)}</span>
    </h3>
  );
};
