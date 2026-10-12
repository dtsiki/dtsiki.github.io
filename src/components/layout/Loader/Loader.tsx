import { Window } from 'src/components/common/Window/Window';
import { LOADING } from 'src/i18n';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { useTranslate } from 'src/hooks/useTranslate';
import { HourglassIcon } from 'src/components/common/icons/ui';

import styles from './Loader.module.scss';

export const Loader = () => {
  const { translate } = useTranslate();

  return (
    <div className={styles.loader}>
      <div className={styles.loader__wrapper}>
        <Window title={translate(LOADING)} type={EWindowType.SYSTEM}>
          <div className={styles.loader__content}>
            <HourglassIcon className={styles.loader__icon} />
            <div className={styles.loader__bar}>
              <div className={styles.loader__progress} />
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
};
