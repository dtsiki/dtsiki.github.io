import classNames from 'classnames';
import { GET_IN_TOUCH } from 'src/i18n';
import { CONTACTS_CONFIG, EContactType } from 'src/data/contactsConfig';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './Contacts.module.scss';

export const Contacts = () => {
  const bind = classNames.bind(styles);
  const { translate } = useTranslate();

  return (
    <section className={styles.contacts}>
      <h3 className={styles.contacts__title}>{translate(GET_IN_TOUCH)}</h3>
      <ul>
        {CONTACTS_CONFIG.map(({ type, title, link, icon }) => (
          <li key={title} className={styles.contacts__item}>
            {icon.svg && <span className={styles.contacts__icon}>{icon.svg}</span>}
            {type === EContactType.EMAIL ? (
              <a href={link} className={bind([styles.contacts__link, 'link'])}>
                {title}
              </a>
            ) : (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className={bind([styles.contacts__link, 'link'])}>
                {title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
