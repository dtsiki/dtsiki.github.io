import Link from 'next/link';
import { EHeroVariant } from 'src/components/layout/Hero/Hero.types';
import { Hero } from 'src/components/layout/Hero/Hero';
import { useTranslate } from 'src/hooks/useTranslate';
import {
  ERROR,
  FATAL_EXCEPTION_HAS_OCCURRED_AT,
  GO_TO_HOME,
  HTTP_SESSION_WILL_BE_TERMINATED,
  NON_EXISTENT_PAGE_ACCESS,
  PAGE_NOT_FOUND,
} from 'src/i18n';

import styles from './404.module.scss';

const Custom404 = () => {
  const { translate } = useTranslate();

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    const year = date.getFullYear().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  };

  return (
    <div className={styles.custom404}>
      <Hero variant={EHeroVariant.VIOLET}>
        <div className={styles.custom404__wrapper}>
          <div className={styles.custom404__heading}>
            <div className={styles.custom404__error} aria-hidden='true'>
              404 {translate(ERROR)}
            </div>
          </div>
          <div className={styles.custom404__divider} />
          <h1 className={styles.custom404__title}>{translate(PAGE_NOT_FOUND)}</h1>
          <p className={styles.custom404__text}>
            {translate(FATAL_EXCEPTION_HAS_OCCURRED_AT)} {formatTime(new Date())}.<br />
            {translate(NON_EXISTENT_PAGE_ACCESS)}
            <br />
            {translate(HTTP_SESSION_WILL_BE_TERMINATED)}
          </p>
          <div className={styles.custom404__divider} aria-hidden='true' />
          <div className={styles.custom404__footer}>
            <Link href='/'>
              <a className={styles.custom404__link}>{translate(GO_TO_HOME)}</a>
            </Link>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Custom404;
