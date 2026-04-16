import classNames from 'classnames';
import { DARIA, DEVELOPER, FRONTEND, I_AM, MY_NAME_IS, YAY } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './Greeting.module.scss';

export const Greeting = () => {
  const bind = classNames.bind(styles);
  const { translate } = useTranslate();

  return (
    <header className={styles.greeting}>
      <h1>
        <span className={bind([styles.greeting__item, styles['primary'], styles.greeting__line])}>
          <span className='accented accented--primary'>{translate(YAY)}! ;)</span>
        </span>
        <span className={bind([styles.greeting__item, styles['secondary'], styles.greeting__line])}>
          <span className='stroke primary'>{translate(MY_NAME_IS)}</span>{' '}
          <span className='accented accented--primary'>{translate(DARIA)}</span>
        </span>
        <span className={bind([styles.greeting__item, styles['secondary'], styles.greeting__line])}>
          <span className='stroke primary'>{translate(I_AM)}</span>{' '}
          <span className='accented accented--primary'>{translate(FRONTEND)}</span>{' '}
          <span className='stroke primary'>{translate(DEVELOPER)}</span>
        </span>
      </h1>
    </header>
  );
};
