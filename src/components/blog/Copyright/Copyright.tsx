import { useTranslate } from 'src/hooks/useTranslate';
import { MADE_WITH_YAY } from 'src/i18n';

import styles from './Copyright.module.scss';

export const Copyright = () => {
  const { translate } = useTranslate();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.copyright}>
      <span>{translate(MADE_WITH_YAY)}/</span>
      <span>
        <a href='https://github.com/dtsiki' target='_blank' rel='noopener noreferrer' className='link'>
          dtsiki
        </a>
      </span>
      <span>/{getCurrentYear()}</span>
    </div>
  );
};
