import Link from 'next/link';
import { useTranslate } from '~hooks/useTranslate';
import { ERROR, GO_TO_HOME, PAGE_NOT_FOUND, TASK_FAILED_SUCCESSFULLY } from 'src/i18n';
import { Window } from 'src/components/common/Window';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { TriangleAlertIcon } from 'src/components/common/icons/ui';

import styles from './404.module.scss';

const Custom404 = () => {
  const { translate } = useTranslate();

  return (
    <div className={styles.custom404}>
      <div className={styles.custom404__wrapper}>
        <Window title={`${translate(ERROR)} [404]`} type={EWindowType.SYSTEM}>
          <div className={styles.custom404__content}>
            <h1 className={styles.custom404__title}>
              <TriangleAlertIcon /> {translate(TASK_FAILED_SUCCESSFULLY)}
            </h1>
            <h2 className={styles.custom404__text}>{translate(PAGE_NOT_FOUND)}</h2>
            <div className={styles.custom404__footer}>
              <Link href='/'>
                <a className={styles.custom404__button}>{translate(GO_TO_HOME)}</a>
              </Link>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
};

export default Custom404;
