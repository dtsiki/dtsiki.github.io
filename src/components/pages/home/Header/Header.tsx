import { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText, faFolder, faSmile } from '@fortawesome/free-solid-svg-icons';

import Hero from 'src/components/layout/Hero';
import Shortcut from 'src/components/common/Shortcut';
import { useRouter } from 'next/router';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';
import { IShortcut } from 'src/interfaces';

import styles from './header.module.scss';

const HomeHeader = (): ReactElement => {
  const bind = classNames.bind(styles);
  const router = useRouter();

  const onShortcutClicked = (path: string): void => {
    router.push(`/${path}`)
  };

  const shortcuts: Array<IShortcut> = [
    {
      path: 'about',
      label: 'about',
      icon: faFolder
    },
    {
      path: 'projects',
      label: 'projects',
      icon: faFolder
    },
    {
      path: 'blog',
      label: 'blog.txt',
      icon: faFileText
    }
  ];

  return (
    <div className={styles.header}>
      <Hero>
        <div className='container'>
          <div className={styles.header__wrapper}>
            <h1 className={styles.header__heading}>
              <span className={styles.header__icon}>
                <FontAwesomeIcon icon={faSmile} />
              </span>
              <span className='accented accented--primary'>
                Yay!
              </span>
            </h1>
            <h2 className={styles.header__title}>
              <span className='stroke primary'>
                My name is
              </span>
              {' '}
              <span className='accented accented--primary'>
                Daria
              </span>
            </h2>
            <h3 className={styles.header__subtitle}>
              <span className='stroke primary'>
                I&apos;m a
              </span>
              {' '}
              <span className='accented accented--primary'>
                frontend
              </span>
              {' '}
              <span className='stroke primary'>
                developer
              </span>
            </h3>
          </div>
        </div>
        <div className={styles.header__shortcuts}>
          {shortcuts.map((item) => (
            <div
              className={bind([styles.header__shortcut, styles[item.path]])}
              key={item.path}>
              <Shortcut
                handleAction={() => onShortcutClicked(item.path)}
                variant={ShortcutVariant.PRIMARY}
                icon={item.icon}
                name={item.label} />
            </div>
          ))}
        </div>
      </Hero>
    </div>
  );
};

export default HomeHeader;
