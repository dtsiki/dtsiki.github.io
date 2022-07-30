import React, { ReactElement, useMemo, useState } from 'react';
import Link from 'next/link';

import classNames from 'classnames';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);
  const bind = classNames.bind(styles);

  const headerClassname = bind(styles.header, { [styles.header_opened]: isMenuOpened });

  const icon = useMemo(() => {
    return (
      <FontAwesomeIcon
        icon={isMenuOpened ? faXmark : faBars}
        color='#000000' />
    );
  }, [isMenuOpened])

  const toggleMenu = (): void => {
    setMenuOpened(!isMenuOpened);
  }

  return (
    <header className={headerClassname}>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link href='/'>
              <a className={styles.header__link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={styles.header__link}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a className={styles.header__link}>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={bind([styles.header__button, styles.header__button_toggle])}
        onClick={toggleMenu}>
        {icon}
        <span className='visually-hidden'>{isMenuOpened ? 'Close' : 'Open'} menu</span>
      </button>
    </header>
  );
};

export default Header;
