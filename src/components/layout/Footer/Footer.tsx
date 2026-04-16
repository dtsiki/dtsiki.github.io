import classNames from 'classnames';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MADE_WITH_YAY } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './Footer.module.scss';

export const Footer = () => {
  const bind = classNames.bind(styles);
  const { translate } = useTranslate();

  const links = [
    {
      name: 'github',
      icon: faGithub,
      link: 'https://github.com/dtsiki',
    },
  ];

  const getCurrentYear = (): number => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__inner}>
          <div className={styles.footer__section}>
            <div className={styles.footer__copyright}>
              © {getCurrentYear()} {translate(MADE_WITH_YAY)}
            </div>
          </div>
          <div className={styles.footer__section}>
            <ul>
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={bind(['link', styles.footer__link])}>
                    <FontAwesomeIcon icon={item.icon} />
                    <span className='visually-hidden'>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
