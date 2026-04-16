import classNames from 'classnames';
import { HomeShortcut as Shortcut } from '../HomeShortcut/HomeShortcut';
import { EHomeShortcutVariant } from '../HomeShortcut/HomeShortcut.types';
import { THomeShortcut } from './HomeShortcuts.types';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { HOME_SHORTCUTS_CONFIG } from './HomeShortcuts.utils';
import { translateTitle } from 'src/utils/translate';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './HomeShortcuts.module.scss';

export const HomeShortcuts = () => {
  const { language } = useTranslate();
  const { openWindow } = useWindowManager();
  const bind = classNames.bind(styles);

  /*
  const [dragItems, _] = useState<Array<TDragItemComponent>>([
    ...HOME_SHORTCUTS_CONFIG.map((shortcut) => {
      return {
        id: shortcut.id,
        type: TDragItemType.SHORTCUT,
        initialPosition: shortcut.initialPosition,
        children: (
          <Shortcut
            handleAction={() => onShortcutClicked(shortcut)}
            variant={EHomeShortcutVariant.PRIMARY}
            icon={shortcut.icon}
            name={translateTitle(language, shortcut.loc)}
          />
        ),
      };
    }),
  ]);
  */

  const onShortcutClicked = (shortcut: THomeShortcut): void => {
    if (shortcut.window) {
      openWindow(shortcut.window.id);
    }
  };

  return (
    <div className={styles.home_shortcuts}>
      <ul className={styles.home_shortcuts__grid}>
        {HOME_SHORTCUTS_CONFIG.map((shortcut) => (
          <li key={shortcut.id} className={bind([styles.home_shortcuts__item, styles[shortcut.id]])}>
            <Shortcut
              handleAction={() => onShortcutClicked(shortcut)}
              variant={EHomeShortcutVariant.PRIMARY}
              icon={shortcut.icon}
              name={translateTitle(language, shortcut.loc)}
            />
          </li>
        ))}
      </ul>
      {/*<DropArea initialItems={dragItems} />*/}
    </div>
  );
};
