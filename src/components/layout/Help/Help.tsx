import { ReactElement } from 'react';

import styles from './help.module.scss';

const Help = (): ReactElement => {
  const getCurrentYear = (): number => {
    return new Date()
      .getFullYear();
  };

  return (
    <div className={styles.help}>
      <div className={styles.help__title}>
        Welcome to dtsiki.github.io!
      </div>
      <div>Copyright{' '}
        (c){' '}
        <a
          href='https://github.com/dtsiki'
          target='_blank'
          rel='noopener noreferrer'
          className='link'>
          @dtsiki
        </a>{' '}
        {getCurrentYear()}</div>
      <div>All right reserved</div>
      <div className={styles.help__footer}>
        Press <span className={styles.help__key}>ESC</span> to clear this dialog
      </div>
    </div>
  );
};

export default Help;
