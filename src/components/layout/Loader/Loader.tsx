import { Hero } from '../Hero/Hero';
import { Window } from 'src/components/common/Window/Window';
import { LOADING } from 'src/i18n';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './Loader.module.scss';

export const Loader = () => {
  const { translate } = useTranslate();

  return (
    <Hero>
      <div className={styles.loader}>
        <Window title={translate(LOADING)} type={EWindowType.LOADER}>
          <div className={styles.loader__wrapper}>
            <div className={styles.loader__bar}>
              <div className={styles.loader__progress} />
            </div>
          </div>
        </Window>
      </div>
    </Hero>
  );
};
