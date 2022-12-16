import { ReactElement } from 'react';
import classNames from 'classnames';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './footer.module.scss';

const Footer = (): ReactElement => {
  const bind = classNames.bind(styles);

  const links = [
    {
      name: 'github',
      icon: faGithub,
      link: 'https://github.com/dtsiki'
    }
  ];

  const getCurrentYear = (): number => {
    return new Date()
      .getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__inner}>
          <div className={styles.footer__section}>
            <div className={styles.footer__copyright}>
              © {getCurrentYear()} Made with yay{' '}
              <FontAwesomeIcon icon={faHeart} />
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

export default Footer;
