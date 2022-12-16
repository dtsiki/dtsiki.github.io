import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleUp, faFolder } from '@fortawesome/free-solid-svg-icons';

import useEventListener, { Event } from 'src/hooks/useEventListener';
import { useStoreon } from 'storeon/react';

import styles from './menu.module.scss';
import Shortcut, { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';

const Menu = (): ReactElement => {
  const { topColor, bottomColor } = useStoreon('topColor', 'bottomColor');
  const [isPageScrolled, setPageScrolled] = useState<boolean>(false);
  const [isBackButtonShown, setIsBackButtonShown] = useState<boolean>(false);
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);
  const router = useRouter();

  const bind = classNames.bind(styles);

  useEffect(() => {
    const method = isMenuOpened ? 'add' : 'remove';

    document.body.classList[method]('unscrollable');
  }, [isMenuOpened]);

  useEffect(() => {
    setIsBackButtonShown(router.pathname.includes('/blog/'));
  }, [router]);

  const menuItems = [
    {
      path: '',
      label: 'home'
    },
    {
      path: 'about',
      label: 'about'
    },
    {
      path: 'projects',
      label: 'projects'
    },
    {
      path: 'blog',
      label: 'blog'
    }
  ];

  const handleScroll = (): void => {
    setPageScrolled(window.pageYOffset >= document.documentElement.clientHeight / 2)
  };

  useEventListener(Event.SCROLL, handleScroll);

  const toggleMenu = (): void => {
    setMenuOpened(!isMenuOpened);
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth'
    });
  };

  const onLinkClicked = (path: string): void => {
    toggleMenu();

    router.push(`/${path}`)
  };

  const goBack = (): void => {
    router.back();
  };

  const renderIcon = useMemo(() => {
    return (
      <span className={bind([styles.menu__toggleIcon, styles[topColor], { [styles.opened]: isMenuOpened }])}>
        <span className={styles.menu__bar} />
        <span className={styles.menu__bar} />
        <span className={styles.menu__bar} />
      </span>
    );
  }, [isMenuOpened, topColor]);

  const renderMenuList = useMemo(() => {
    return menuItems.map((item) => {
      const { path, label } = item;

      return (
        <li
          key={label}
          className={styles.menu__shortcut}>
          <Shortcut
            handleAction={() => onLinkClicked(path)}
            variant={router.asPath === `/${path}` ? ShortcutVariant.GHOST : ShortcutVariant.LIGHT}
            icon={faFolder}
            name={label} />
        </li>
      );
    })
  }, [menuItems]);

  return (
    <header className={bind([styles.menu, { [styles.opened]: isMenuOpened }])}>
      <button
        className={bind([styles.menu__toggle, { [styles.opened]: isMenuOpened }])}
        onClick={toggleMenu}>
        {renderIcon}
        <span className='visually-hidden'>
          {isMenuOpened ? 'Close' : 'Open'} menu
        </span>
      </button>
      <nav className={bind([styles.menu__nav, { [styles.opened]: isMenuOpened }])}>
        <ul className={styles.menu__list}>
          {renderMenuList}
        </ul>
      </nav>
      {!isMenuOpened && (
        <aside className={styles.menu__sidebar}>
          <ul className={styles.menu__actions}>
            <li>
              <button
                onClick={scrollToTop}
                className={bind([styles.menu__action, styles.up, { [styles.visible]: isPageScrolled }])}>
                <span className='visually-hidden'>Scroll to top</span>
                <FontAwesomeIcon
                  className={bind([styles.menu__icon, styles[bottomColor]])}
                  icon={faAngleUp}
                  color='#ffffff'
                  size='2x' />
              </button>
            </li>
            {isBackButtonShown && (
              <li>
                <button
                  onClick={goBack}
                  className={bind([styles.menu__action, styles.back, { [styles.visible]: isPageScrolled }])}>
                  <span className='visually-hidden'>Go back to previous page</span>
                  <FontAwesomeIcon
                    className={bind([styles.menu__icon, styles[bottomColor]])}
                    icon={faAngleLeft}
                    color='#ffffff'
                    size='2x' />
                </button>
              </li>
            )}
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Menu;
