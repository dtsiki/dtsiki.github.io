import { ReactElement, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleUp, faCaretRight, faDownLong, faUpLong } from '@fortawesome/free-solid-svg-icons';
import { useStoreon } from 'storeon/react';

import useEventListener, { Event } from 'src/hooks/useEventListener';
import Help from '../Help';

import styles from './menu.module.scss';

const Menu = (): ReactElement => {
  const { topColor, bottomColor } = useStoreon('topColor', 'bottomColor');
  const [isPageScrolled, setPageScrolled] = useState<boolean>(false);
  const [isBackButtonShown, setIsBackButtonShown] = useState<boolean>(false);
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);
  const [isHelpOpened, setIsHelpOpened] = useState<boolean>(false);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('');
  const bind = classNames.bind(styles);

  const pages = ['home', 'about', 'projects', 'blog'];

  useEffect(() => {
    const method = isMenuOpened ? 'add' : 'remove';

    document.body.classList[method]('unscrollable');
  }, [isMenuOpened]);

  useEffect(() => {
    setIsBackButtonShown(router.pathname.includes('/blog/'));
    const pathname = router.pathname.split('/')[1];

    if (pathname === '') {
      setCurrentPage(pages[0]);
    }

    pages.forEach((page) => {
      if (pathname === page) {
        setCurrentPage(page);
      }
    });
  }, [router]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        router.push(`/${currentPage === pages[0] ? '' : currentPage}`);
      }

      if (event.key === 'Escape') {
        if (isHelpOpened) {
          setIsHelpOpened(false);
        } else {
          setMenuOpened(false);
        }
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        const currentIndex = pages.indexOf(currentPage);
        const newIndex = event.key === 'ArrowUp' ? currentIndex === 0 ? pages.length - 1 : currentIndex - 1 : currentIndex === pages.length - 1 ? 0 : currentIndex + 1;

        setCurrentPage(pages[newIndex]);
      }

      if (event.key === 'h') {
        setIsHelpOpened(true);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [currentPage, isHelpOpened]);

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

    router.push(`/${path}`);
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
    return menuItems.map((item, index) => {
      const { path, label } = item;

      return (
        <li
          key={label}
          className={styles.menu__item}>
          <div className={bind([styles.menu__pointer, { [styles.visible]: currentPage === label }])}>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
          <button
            className={bind([styles.menu__button, { [styles.active]: currentPage === label }])}
            onClick={() => onLinkClicked(path)}>
            {index + 1} {label}
          </button>
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
        <ul className={styles.menu__footer}>
          <li className={styles.menu__hotkey}>
            <div className={styles.menu__key}>H</div>
            to open help
          </li>
          <li className={styles.menu__hotkey}>
            <div className={styles.menu__key}>
              <FontAwesomeIcon icon={faDownLong} />
              <FontAwesomeIcon icon={faUpLong} />
            </div>
            to select an item
          </li>
          <li className={styles.menu__hotkey}>
            <div className={styles.menu__key}>Enter</div>
            to open
          </li>
          <li className={styles.menu__hotkey}>
            <div className={styles.menu__key}>Esc</div>
            to exit
          </li>
        </ul>
        {isHelpOpened && (
          <Help />
        )}
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
