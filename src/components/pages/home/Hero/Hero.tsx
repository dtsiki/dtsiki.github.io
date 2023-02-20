import { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import Hero from 'src/components/layout/Hero';
import Shortcut, { ShortcutVariant } from 'src/components/common/Shortcut';
import DropArea from 'src/components/common/DropArea';
import HomeImageWindow from '../ImageWindow/ImageWindow';
import { DragItemType } from 'src/components/common/DragItem';
import HomeTicTacToeWindow from '../TicTacToeWindow/TicTacToeWindow';

import styles from './hero.module.scss';
import ticTacToeIcon from '../../../../../public/assets/icons/tic-tac-toe.svg';

const HomeHero = (): ReactElement => {
  const [isImageOpened, setImageIsOpened] = useState<boolean>(false);
  const [isTicTacToeOpened, setTicTacToeIsOpened] = useState<boolean>(false);
  const router = useRouter();

  const onShortcutClicked = (shortcut: string): void => {
    if (shortcut === 'image') {
      setImageIsOpened(true);

      return;
    }

    if (shortcut === 'tic-tac-toe') {
      setTicTacToeIsOpened(true);

      return;
    }

    router.push(`/${shortcut}`);
  };

  const shortcuts = [
    {
      id: 'about',
      icon: faFolderOpen,
      label: 'about',
      top: 10,
      left: 40
    },
    {
      id: 'projects',
      label: 'projects',
      icon: faFolderOpen,
      top: 75,
      left: 60
    },
    {
      id: 'blog',
      label: 'blog',
      icon: faFolderOpen,
      top: 30,
      left: 80
    },
    {
      id: 'image',
      label: 'yay.jpg',
      icon: faImage,
      top: 20,
      left: 5
    },
    {
      id: 'tic-tac-toe',
      label: 'tic-tac-toe.exe',
      customIcon: ticTacToeIcon,
      left: 90,
      top: 80
    }
  ];

  const [dragItems, setDragItems]  = useState<Array<any>>([
    ...shortcuts.map((shortcut) => {
      return {
        id: shortcut.id,
        top: shortcut.top,
        left: shortcut.left,
        type: DragItemType.SHORTCUT,
        component: <Shortcut
          handleAction={() => onShortcutClicked(shortcut.id)}
          variant={ShortcutVariant.PRIMARY}
          icon={shortcut.icon}
          customIcon={shortcut.customIcon}
          name={shortcut.label} />
      }
    })
  ]);

  useEffect(() => {
    if (isImageOpened) {
      const imageShortcut = shortcuts.find((item) => item.id === 'image');

      const windowItem = {
        id: 'imageWindow',
        top: imageShortcut ? imageShortcut.top + 8 : 16,
        left: imageShortcut ? imageShortcut.left + 5 : 7,
        type: DragItemType.WINDOW,
        component: <HomeImageWindow close={() => closeWindow('imageWindow')} />
      };

      setDragItems((prevDragItems) => [...prevDragItems, windowItem]);
    }
  }, [isImageOpened]);

  useEffect(() => {
    if (isTicTacToeOpened) {
      const windowSize = {
        width: 746,
        height: 600
      };

      const windowItem = {
        id: 'ticTacToeWindow',
        top: 50 - (((windowSize.width / 2) * 100) / window.screen.height),
        left: 50 - (((windowSize.height / 2) * 100) / window.screen.width),
        type: DragItemType.WINDOW,
        component: <HomeTicTacToeWindow close={() => closeWindow('ticTacToeWindow')} />
      };

      setDragItems((prevDragItems) => [...prevDragItems, windowItem]);
    }
  }, [isTicTacToeOpened]);

  const closeWindow = (id: string): void => {
    if (id === 'ticTacToeWindow') {
      setTicTacToeIsOpened(false);
    }

    if (id === 'imageWindow') {
      setImageIsOpened(false);
    }

    const nextDragItems = dragItems.filter(
      (item: any) => item.id !== id
    );

    setDragItems(nextDragItems);
  };

  return (
    <div className={styles.hero}>
      <Hero>
        <DropArea initialItems={dragItems} />
        <div className={styles.hero__overlay}>
          <div className='container'>
            <div className={styles.hero__wrapper}>
              <h1 className={styles.hero__heading}>
                <span className={styles.hero__icon}>
                  <FontAwesomeIcon icon={faSmile} />
                </span>
                <span className='accented accented--primary'>
                  Yay!
                </span>
              </h1>
              <h2 className={styles.hero__title}>
                <span className='stroke primary'>
                  My name is
                </span>
                {' '}
                <span className='accented accented--primary'>
                  Daria
                </span>
              </h2>
              <h3 className={styles.hero__subtitle}>
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
        </div>
      </Hero>
    </div>
  );
};

export default HomeHero;
