import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import useEventListener, { Event } from 'src/hooks/useEventListener';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  const [isPageScrolled, setPageScrolled] = useState<boolean>(false);
  const [showBackButton, setShowBackButton] = useState<boolean>(false);
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);
  const router = useRouter();

  const bind = classNames.bind(styles);

  useEffect(() => {
    setShowBackButton(router.pathname.includes('/blog/'));
  }, [router]);

  const menuItems = [
    {
      path: '',
      label: 'Home'
    },
    {
      path: 'about',
      label: 'About'
    },
    {
      path: 'projects',
      label: 'Projects'
    },
    {
      path: 'blog',
      label: 'Blog'
    }
  ];

  const handleScroll = (): void => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setPageScrolled(window.pageYOffset === height)
  }

  useEventListener(Event.SCROLL, handleScroll);

  const toggleMenu = (): void => {
    setMenuOpened(!isMenuOpened);
  }

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth'
    });
  }

  const onLinkClicked = (): void => {
    toggleMenu();
  }

  const goBack = (): void => {
    router.back();
  }

  const renderIcon = useMemo(() => {
    return (
      <span className={bind([styles.header__icon, { [styles.opened]: isMenuOpened }])}>
        <span className={styles.header__bar} />
        <span className={styles.header__bar} />
        <span className={styles.header__bar} />
      </span>
    );
  }, [isMenuOpened]);

  const renderMenuList = useMemo(() => {
    return menuItems.map((item) => {
      const { path, label } = item;

      return (
        <li key={label}>
          <Link href={`/${path}`}>
            <a
              role='button'
              tabIndex={0}
              onClick={onLinkClicked}
              onKeyDown={onLinkClicked}
              className={bind(['link', styles.header__link, { [styles.active]: router.asPath === `/${path}` }])}>
              {label}
            </a>
          </Link>
        </li>
      );
    })
  }, [menuItems]);

  return (
    <header className={styles.header}>
      <button
        className={bind([styles.header__toggle, { [styles.opened]: isMenuOpened }])}
        onClick={toggleMenu}>
        {renderIcon}
        <span className='visually-hidden'>
          {isMenuOpened ? 'Close' : 'Open'} menu
        </span>
      </button>
      <nav className={bind([styles.header__nav, { [styles.opened]: isMenuOpened }])}>
        <ul className={styles.header__list}>
          {renderMenuList}
        </ul>
      </nav>
      <aside className={styles.header__sidebar}>
        <ul className={styles.header__actions}>
          <li>
            <button
              onClick={scrollToTop}
              className={bind([styles.header__upButton, { [styles.visible]: isPageScrolled }])}>
              <span className='visually-hidden'>Scroll to top</span>
              <FontAwesomeIcon
                icon={faAngleUp}
                color='#ffffff'
                size='2x' />
            </button>
          </li>
          {showBackButton && (
            <li>
              <button
                onClick={goBack}
                className={bind([styles.header__backButton, { [styles.visible]: isPageScrolled }])}>
                <span className='visually-hidden'>Go back to previous page</span>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  color='#ffffff'
                  size='2x' />
              </button>
            </li>
          )}
        </ul>
      </aside>
    </header>
  );
};

export default Header;
