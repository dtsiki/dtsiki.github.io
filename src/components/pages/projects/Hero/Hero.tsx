import { ReactElement, useState } from 'react';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import Hero from 'src/components/layout/Hero';
import Shortcut, { ShortcutVariant } from 'src/components/common/Shortcut';
import DropArea from 'src/components/common/DropArea';
import { DragItemType } from 'src/components/common/DragItem';
import { HeroVariant } from 'src/components/layout/Hero/Hero';

import styles from './hero.module.scss';

interface ProjectsHeroProps {
  handleScroll?: () => void;
}

const ProjectsHero = ({ handleScroll }: ProjectsHeroProps): ReactElement => {
  const shortcuts = [
    {
      id: 'quote-generator',
      icon: faFolderOpen,
      label: 'quote generator',
      top: 10,
      left: 40
    },
    {
      id: 'todo',
      label: 'to do',
      icon: faFolderOpen,
      top: 75,
      left: 60
    },
    {
      id: 'tic-tac-toe',
      label: 'tic tac toe',
      icon: faFolderOpen,
      top: 30,
      left: 80
    },
    {
      id: '18-minutes',
      label: '18 minutes',
      icon: faFolderOpen,
      top: 50,
      left: 20
    },
    {
      id: 'dictionary',
      label: 'dictionary',
      icon: faFolderOpen,
      top: 15,
      left: 67
    },
    {
      id: 'audioplayer',
      label: 'audio player',
      icon: faFolderOpen,
      top: 45,
      left: 45
    },
    {
      id: 'task-manager',
      label: 'task manager',
      icon: faFolderOpen,
      top: 60,
      left: 17
    }
  ];

  const [dragItems, _]  = useState<Array<any>>([
    ...shortcuts.map((shortcut) => {
      return {
        id: shortcut.id,
        top: shortcut.top,
        left: shortcut.left,
        type: DragItemType.SHORTCUT,
        component: <Shortcut
          handleAction={handleScroll}
          variant={ShortcutVariant.LIGHT}
          icon={shortcut.icon}
          name={shortcut.label} />
      }
    })
  ]);

  return (
    <div className={styles.hero}>
      <Hero variant={HeroVariant.PRIMARY}>
        <DropArea initialItems={dragItems} />
      </Hero>
    </div>
  );
};

export default ProjectsHero;
