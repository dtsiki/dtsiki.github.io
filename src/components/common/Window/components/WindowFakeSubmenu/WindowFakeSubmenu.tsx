import { useMemo } from 'react';
import {
  IWindowFakeSubmenuProps,
  TWindowFakeSubmenuItem,
  TWindowFakeSubmenuLine,
  TWindowFakeSubmenuLineGroup,
} from './WindowFakeSubmenu.types';
import {
  BrushMiniIcon,
  ChevronDownMiniIcon,
  ClipboardMiniIcon,
  CutMiniIcon,
  FileMiniIcon,
  LoopMiniIcon,
  MailOpenMiniIcon,
  PictureIcon,
  PrinterMiniIcon,
  RedoMiniIcon,
  ScriptMiniIcon,
  TextAlignCenterMiniIcon,
  TextAlignJustifyMiniIcon,
  TextAlignLeftMiniIcon,
  TextAlignRightMiniIcon,
  UndoMiniIcon,
} from 'src/components/common/icons/ui';
import classNames from 'classnames';
import { EWindowType } from '../../Window.types';
import { nanoid } from 'nanoid';
import { SquareMiniIcon } from 'src/components/common/icons/ui/mini/Square';

import styles from './WindowFakeSubmenu.module.scss';

export const WindowFakeSubmenu = ({ type, children }: IWindowFakeSubmenuProps) => {
  const bind = classNames.bind(styles);

  const TEXT_ALIGN_CONFIG: TWindowFakeSubmenuLineGroup[] = [
    {
      id: nanoid(),
      type: 'line-group',
      items: [
        {
          id: nanoid(),
          type: 'icon-item',
          content: <TextAlignLeftMiniIcon />,
        },
        {
          id: nanoid(),
          type: 'icon-item',
          content: <TextAlignCenterMiniIcon />,
        },
        {
          id: nanoid(),
          type: 'icon-item',
          content: <TextAlignRightMiniIcon />,
        },
        {
          id: nanoid(),
          type: 'icon-item',
          content: <TextAlignJustifyMiniIcon />,
        },
      ],
    },
  ];

  const FONT_STYLE_CONFIG: TWindowFakeSubmenuLineGroup[] = [
    {
      id: nanoid(),
      type: 'line-group',
      items: [
        {
          id: nanoid(),
          type: 'custom-item',
          className: styles.BOLD,
          content: <>B</>,
        },
        {
          id: nanoid(),
          type: 'custom-item',
          className: styles.ITALIC,
          content: <>I</>,
        },
        {
          id: nanoid(),
          type: 'custom-item',
          className: styles.UNDERLINE,
          content: <>U</>,
        },
      ],
    },
  ];

  const SLIDES_CONFIG: TWindowFakeSubmenuLine[] = [
    {
      id: nanoid(),
      type: 'line',
      items: [
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'select-item',
              className: styles.FONT_FAMILY,
              content: (
                <>
                  <span>Comic Sans</span>
                  <ChevronDownMiniIcon className={styles.window_fake_submenu__chevron} />
                </>
              ),
            },
            {
              id: nanoid(),
              type: 'select-item',
              className: styles.FONT_SIZE,
              content: (
                <>
                  <span>42</span>
                  <ChevronDownMiniIcon className={styles.window_fake_submenu__chevron} />
                </>
              ),
            },
          ],
        },
        ...FONT_STYLE_CONFIG,
        ...TEXT_ALIGN_CONFIG,
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'icon-item',
              content: <PictureIcon useMini={true} />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <SquareMiniIcon />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <BrushMiniIcon />,
            },
          ],
        },
      ],
    },
  ];

  const DOC_FILE_CONFIG: TWindowFakeSubmenuLine[] = [
    {
      id: nanoid(),
      type: 'line',
      items: [
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'icon-item',
              content: <FileMiniIcon />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <MailOpenMiniIcon />,
            },
          ],
        },
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'icon-item',
              content: <PrinterMiniIcon />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <ScriptMiniIcon />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <LoopMiniIcon />,
            },
          ],
        },
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'icon-item',
              content: <CutMiniIcon />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <ClipboardMiniIcon />,
            },
            {
              id: nanoid(),
              type: 'icon-item',
              content: <BrushMiniIcon />,
            },
          ],
        },
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'custom-item',
              content: (
                <>
                  <UndoMiniIcon className={bind([styles.window_fake_submenu__item, styles.DEFAULT])} />
                  <ChevronDownMiniIcon className={styles.window_fake_submenu__chevron} />
                </>
              ),
            },
            {
              id: nanoid(),
              type: 'custom-item',
              content: (
                <>
                  <RedoMiniIcon className={bind([styles.window_fake_submenu__item, styles.DEFAULT])} />
                  <ChevronDownMiniIcon className={styles.window_fake_submenu__chevron} />
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      type: 'line',
      items: [
        {
          id: nanoid(),
          type: 'line-group',
          items: [
            {
              id: nanoid(),
              type: 'custom-item',
              className: styles.FONT,
              content: <>Aa</>,
            },
            {
              id: nanoid(),
              type: 'select-item',
              className: styles.FONT_FAMILY,
              content: (
                <>
                  <span>Inter</span>
                  <ChevronDownMiniIcon className={styles.window_fake_submenu__chevron} />
                </>
              ),
            },
            {
              id: nanoid(),
              type: 'select-item',
              className: styles.FONT_SIZE,
              content: (
                <>
                  <span>14</span>
                  <ChevronDownMiniIcon className={styles.window_fake_submenu__chevron} />
                </>
              ),
            },
          ],
        },
        ...FONT_STYLE_CONFIG,
        ...TEXT_ALIGN_CONFIG,
      ],
    },
  ];

  const FAKE_SUBMENU_ITEMS = {
    [EWindowType.DOC_FILE]: DOC_FILE_CONFIG,
    [EWindowType.SLIDESHOW]: SLIDES_CONFIG,
  };

  const hasFakeSubmenu = (type: EWindowType): type is keyof typeof FAKE_SUBMENU_ITEMS => {
    return type in FAKE_SUBMENU_ITEMS;
  };

  const renderItem = (item: TWindowFakeSubmenuItem) => {
    if (item.type === 'icon-item') {
      return <div className={bind([styles.window_fake_submenu__item, styles.DEFAULT])}>{item.content}</div>;
    }

    if (item.type === 'custom-item') {
      return <div className={bind([styles.window_fake_submenu__item, item.className])}>{item.content}</div>;
    }

    if (item.type === 'select-item') {
      return <div className={bind([styles.window_fake_submenu__select, item.className])}>{item.content}</div>;
    }
  };

  const renderLineGroups = (lineGroups: TWindowFakeSubmenuLineGroup[]) => {
    return lineGroups.map((lineGroupsItem) => {
      if (lineGroupsItem.type === 'line-group') {
        return (
          <div key={lineGroupsItem.id} className={styles.window_fake_submenu__group}>
            {lineGroupsItem.items.map((item) => renderItem(item))}
          </div>
        );
      }
    });
  };

  const renderLine = (line: TWindowFakeSubmenuLine) => {
    if (line.type === 'line') {
      return (
        <div key={line.id} className={styles.window_fake_submenu__line}>
          {renderLineGroups(line.items)}
        </div>
      );
    }
  };

  const renderItems = useMemo(() => {
    if (type === EWindowType.CUSTOM && children) {
      return <div className={styles.window_fake_submenu__line}>{children}</div>;
    }

    if (hasFakeSubmenu(type)) {
      const lines = FAKE_SUBMENU_ITEMS[type];

      return lines?.map((line: TWindowFakeSubmenuLine) => renderLine(line));
    }
  }, [type, children]);

  return (
    <div className={styles.window_fake_submenu} aria-hidden={true}>
      {renderItems}
    </div>
  );
};
