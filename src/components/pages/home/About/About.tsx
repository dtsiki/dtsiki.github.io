import { MutableRefObject, ReactElement, useMemo } from 'react';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';

import styles from './about.module.scss';
import ShortcutTooltip from 'src/components/common/ShortcutTooltip';

interface Props {
  sourceRef:  MutableRefObject<HTMLElement | null>;
}

const HomeAbout = ({ sourceRef }: Props): ReactElement => {
  const router = useRouter();
  const bind = classNames.bind(styles);

  const onShortcutClicked = (route: string): void => {
    router.push(route);
  };

  const shortcutsItems = [
    {
      name: 'about',
      route: '/about',
      icon: faFolder,
      tooltipItems: [
        {
          name: 'Folders',
          value: 'skills, work experience, education, hobbies, projects, ...'
        },
        {
          name: 'Date created',
          value: '16 october'
        }
      ]
    },
    {
      name: 'projects',
      route: '/projects',
      icon: faFolder,
      tooltipItems: [
        {
          name: 'Folders',
          value: 'to do, tic tac toe, task manager, quote generator, ...'
        },
        {
          name: 'Stack',
          value: 'html, css, javascript, react, angular, next.js, ...'
        }
      ]
    },
    {
      name: 'posts',
      route: '/blog',
      icon: faFolder,
      tooltipItems: [
        {
          name: 'Files',
          value: 'Pure_CSS_tooltips.txt, Drag_and_drop.txt, ...'
        },
        {
          name: 'Date modified',
          value: '1 october'
        }
      ]
    }
  ]

  const renderShortcuts = useMemo(() => {
    return shortcutsItems.map((item) => {
      return (
        <li
          key={item.name}
          className={bind([styles.about__shortcut, styles[item.name]])}>
          <Shortcut
            variant={ShortcutVariant.LIGHT}
            icon={item.icon}
            name={item.name}
            tooltip={<ShortcutTooltip items={item.tooltipItems} />}
            handleAction={() => onShortcutClicked(item.route)} />
        </li>
      );
    });
  }, []);

  return (
    <div className={styles.about}>
      <Hero
        heroRef={sourceRef}
        variant={HeroVariant.PRIMARY}>
        <div className='container'>
          <ul className={styles.about__shortcuts}>
            {renderShortcuts}
          </ul>
        </div>
      </Hero>
    </div>
  );
};

export default HomeAbout;
