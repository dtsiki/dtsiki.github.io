import React, { ReactElement } from 'react';

import styles from './footer.module.scss';

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        Powered by{' '}
        <a
          href='https://github.com/dtsiki'
          target='_blank'
          rel='noopener noreferrer'>
          @dtsiki
        </a>
      </div>
    </footer>
  );
};

export default Footer;
