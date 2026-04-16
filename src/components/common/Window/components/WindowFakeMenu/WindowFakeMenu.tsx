import { IWindowFakeMenuProps } from './WindowFakeMenu.types';
import { useTranslate } from 'src/hooks/useTranslate';
import { FAKE_MENU_ITEMS, hasFakeMenu } from './WindowFakeMenu.utils';

import styles from './WindowFakeMenu.module.scss';

export const WindowFakeMenu = ({ type }: IWindowFakeMenuProps) => {
  const { language } = useTranslate();

  if (hasFakeMenu(type)) {
    const items = FAKE_MENU_ITEMS[type][language];

    return (
      <div className={styles.window_fake_menu__wrapper}>
        {items.map((item) => (
          <div key={item} className={styles.window_fake_menu__item}>
            {item}
          </div>
        ))}
      </div>
    );
  }

  return <div className={styles.window_fake_menu} aria-hidden={true}></div>;
};
