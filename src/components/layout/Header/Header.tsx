import React, { ReactElement } from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/page'>
              <a>Page</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
