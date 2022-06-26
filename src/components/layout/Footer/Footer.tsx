import React, { ReactElement } from 'react';

import classNames from 'classnames';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './footer.module.scss';

const Footer = (): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__inner}>
          <div className={styles.footer__section}>
            <FontAwesomeIcon icon={faGithub} />
            <a
              href='https://github.com/dtsiki'
              target='_blank'
              rel='noopener noreferrer'
              className={bind(['link', styles.footer__link])}>
              dtsiki
            </a>
          </div>
          <div className={styles.footer__section}>
            If you&apos;d like to contact me, hit me up via
            <a
              href='mailto:thevioletmaniac@gmail.com'
              className={bind(['link', styles.footer__link])}>
              mail
            </a>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
