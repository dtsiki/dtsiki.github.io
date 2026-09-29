import classNames from 'classnames';
import { CORE_LANGUAGES, DARIA, DEVELOPER, EXPERIENCE_WITH, FRONTEND, I_AM, MY_NAME_IS, YAY } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './About.module.scss';

export const About = () => {
  const bind = classNames.bind(styles);
  const { translate } = useTranslate();

  return (
    <header className={styles.about}>
      <div className={bind([styles.about__title, styles.about__line])}>
        <span className={bind([styles.about__text, styles.secondary, styles.about__line, 'stroke primary'])}>
          {translate(CORE_LANGUAGES)}
        </span>
        <span className={bind([styles.about__text, styles.primary, 'accented primary'])}>JavaScript, TypeScript</span>
      </div>
      <div className={bind([styles.about__title, styles.about__line])}>
        <span className={bind([styles.about__text, styles.secondary, styles.about__line, 'stroke primary'])}>
          {translate(EXPERIENCE_WITH)}
        </span>{' '}
        <span className={bind([styles.about__text, styles.primary, 'accented primary'])}>React, Next.js, Angular</span>
      </div>
    </header>
  );
};
