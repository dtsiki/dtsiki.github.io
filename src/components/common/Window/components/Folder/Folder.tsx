/*import { useContext, useEffect, useMemo, useState } from 'react';
import { isEqual } from 'lodash';
import { IFolderProps, EFolderView, TFolderItem, TFolderItemType } from './Folder.types';
import CustomScrollbar from '../../CustomScrollbar';
import { useLangContext } from 'src/hooks/useLangContent';
import { ELang } from 'src/context/LangContext/LangProvider.types';
import { BACK, FOLDER_IS_EMPTY, OBJECTS, SEARCH, TOGGLE_VIEW, TYPE_HERE } from 'src/i18n/common';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFolderMinus, faList, faSearch, faTh, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Shortcut } from './components/Shortcut/Shortcut';

import styles from './Folder.module.scss';
import { useFolderNavigation } from 'src/hooks/useFolderNavigation';
import { useRouter } from 'next/router';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';
import { useTranslate } from 'src/hooks/useTranslate';

export const Folder = ({ windowId, content }: IFolderProps) => {
  const bind = classNames.bind(styles);
  const { translate, lang } = useTranslate();
  const router = useRouter();
  const { minimizeWindow } = useWindowManager();

  // 👇 теперь получаем и объект, и массив
  //const { currentPath } = useFolderNavigation(windowId, content || {});

  const [view, setView] = useState<EFolderView>(EFolderView.GRID);
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleViewType = (): void => {
    setView(view === EFolderView.GRID ? EFolderView.LIST : EFolderView.GRID);
  };

  const handleSearchQuery = () => {
    if (isSearchVisible) {
      setSearchQuery('');
    }
    setSearchVisible(!isSearchVisible);
  };

  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleItemClick = (item: TFolderItem) => {
    if (item.type === TFolderItemType.FOLDER) {
      // 👇 передаём children как объект конфига
      navigateToFolder(item.id, (item.children as Record<string, TFolderItem>) || {}, [...currentPath, item.id]);
    } else if (item.type === TFolderItemType.TXT_FILE || item.type === TFolderItemType.PDF_FILE) {
      if (item.postConfig) {
        const { link, lang } = item?.postConfig;
        router.push(`/blog/${lang.toLocaleLowerCase()}/${link}`);
        minimizeWindow(EWindowRecord.BLOG_FOLDER);
      }
    }
  };

  const renderShortcuts = useMemo(() => {
    // 👇 используем массив для отображения
    const items = folderItemsArray || [];

    if (items.length === 0) {
      return (
        <li className={styles.folder__empty_placeholder}>
          <FontAwesomeIcon className={styles.folder__empty_placeholder_icon} icon={faFolderMinus} />
          <div className={styles.folder__empty_placeholder_title}>{translate(FOLDER_IS_EMPTY)}</div>
        </li>
      );
    }

    return items.map((shortcut: TFolderItem) => (
      <li
        key={shortcut.id}
        className={bind([styles.folder__shortcut, styles[view]])}
        onClick={() => handleItemClick(shortcut)}>
        <Shortcut
          title={shortcut.title}
          highlight=''
          link={shortcut.route}
          view={view}
          type={shortcut.type}
          createdAt={shortcut?.postConfig?.createdAt}
        />
      </li>
    ));
  }, [folderItemsArray, view]);

  // Количество объектов в папке
  const itemsCount = folderItemsArray?.length || 0;

  return (
    <div className={styles.folder}>
      <div className={styles.folder__menu}>
        <div className={styles.folder__controls}>
          <button
            onClick={navigateBack}
            className={bind([styles.folder__control, { [styles.disabled]: !canGoBack }])}
            aria-label={translate(BACK)}>
            <FontAwesomeIcon icon={faArrowLeft} />
            {translate(BACK)}
          </button>
          {false && (
            <button
              onClick={handleSearchQuery}
              aria-label='Search'
              className={bind([styles.folder__control, { [styles.active]: isSearchVisible }])}>
              <FontAwesomeIcon icon={isSearchVisible ? faXmark : faSearch} />
              {translate(SEARCH)}
            </button>
          )}
          {false && (
            <form className={bind([styles.folder__form, { [styles.opened]: isSearchVisible }])}>
              <input
                className={bind([styles.folder__search_input])}
                type='text'
                id='query'
                name='query'
                placeholder={translate(TYPE_HERE)}
                onChange={changeQuery}
                value={searchQuery}
              />
            </form>
          )}
        </div>
        <div className={styles.folder__controls}>
          <button onClick={toggleViewType} className={styles.folder__control} aria-label={translate(TOGGLE_VIEW)}>
            <FontAwesomeIcon icon={view === EFolderView.GRID ? faTh : faList} />
          </button>
        </div>
      </div>
      <CustomScrollbar fixedHeight={400}>
        <ul className={bind([styles.folder__shortcuts, styles[view]])}>{renderShortcuts}</ul>
      </CustomScrollbar>
      <div className={styles.folder__footer}>
        <span className={styles.folder__footer_text}>
          {lang === ELang.ENG ? `${itemsCount} ${translate(OBJECTS)}` : `${translate(OBJECTS)}: ${itemsCount}`}
        </span>
      </div>
    </div>
  );
};
*/
