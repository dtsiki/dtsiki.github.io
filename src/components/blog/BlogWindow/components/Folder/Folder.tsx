import { useMemo, useState } from 'react';
import { EFolderView, IFolderProps, TFolderItem, TFolderItemType } from './Folder.types';
import { BACK, FOLDER_IS_EMPTY, OBJECTS, SEARCH, TOGGLE_VIEW, TYPE_HERE } from 'src/i18n';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderMinus } from '@fortawesome/free-solid-svg-icons';
import { ArrowLeftIcon, ListMiniIcon, GridMiniIcon } from 'src/components/common/icons/ui';
import { WindowFooter } from 'src/components/common/Window/components/WindowFooter';
import { Language } from 'src/types';
import { useTranslate } from 'src/hooks/useTranslate';
import { CustomScrollbar } from 'src/components/common/CustomScrollbar';
import { Shortcut } from '../Shortcut';
import { WindowFakeSubmenu } from 'src/components/common/Window/components/WindowFakeSubmenu';
import { EWindowType } from 'src/components/common/Window/Window.types';

import styles from './Folder.module.scss';

export const Folder = ({ content, handleItemClick, isRoot, navigateBack }: IFolderProps) => {
  const bind = classNames.bind(styles);
  const { translate, language } = useTranslate();

  const [view, setView] = useState<EFolderView>(EFolderView.LIST);

  const toggleView = () => {
    setView(view === EFolderView.GRID ? EFolderView.LIST : EFolderView.GRID);
  };

  const renderShortcuts = useMemo(() => {
    if (!content?.length) {
      return (
        <li className={styles.folder__empty_placeholder}>
          <FontAwesomeIcon className={styles.folder__empty_placeholder_icon} icon={faFolderMinus} />
          <div className={styles.folder__empty_placeholder_title}>{translate(FOLDER_IS_EMPTY)}</div>
        </li>
      );
    }

    return content.map((shortcut: TFolderItem) => (
      <li
        key={shortcut.type === TFolderItemType.TXT_FILE ? shortcut.postConfig?.title : shortcut.id}
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
  }, [content, view]);

  const renderFooter = useMemo(() => {
    const footerContent =
      language === Language.ENG
        ? `${content?.length} ${translate(OBJECTS)}`
        : `${translate(OBJECTS)}: ${content?.length}`;

    return <WindowFooter content={footerContent} />;
  }, [content, language]);

  return (
    <div className={styles.folder}>
      <WindowFakeSubmenu type={EWindowType.CUSTOM}>
        <div className={styles.folder__menu}>
          <button
            onClick={navigateBack}
            className={bind([styles.folder__control, styles.BACK, { [styles.disabled]: isRoot }])}
            aria-label={translate(BACK)}>
            <ArrowLeftIcon useMini={true} />
            {translate(BACK)}
          </button>
          <button
            onClick={toggleView}
            className={bind([styles.folder__control, styles.VIEW])}
            aria-label={translate(TOGGLE_VIEW)}>
            {view === EFolderView.GRID ? (
              <GridMiniIcon className={styles.folder__view_icon} />
            ) : (
              <ListMiniIcon className={styles.folder__view_icon} />
            )}
          </button>
        </div>
      </WindowFakeSubmenu>
      <CustomScrollbar fixedHeight={400}>
        <ul className={bind([styles.folder__shortcuts, styles[view]])}>{renderShortcuts}</ul>
      </CustomScrollbar>
      {renderFooter}
    </div>
  );
};
