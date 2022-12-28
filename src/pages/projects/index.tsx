import { MutableRefObject, ReactElement, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { faFileText, faFolder } from '@fortawesome/free-solid-svg-icons';

import Dictionary from './_dictionary';
import QuoteGenerator from './_quote-generator';
import TicTacToe from './_tic-tac-toe';
import Todo from './_todo';
import ProgressScroll from 'src/components/common/ProgressScroll';
import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import TaskManager from './_task-manager';
import Planner18Minutes from './_planner-18-minutes';
import ProjectsCommercial from 'src/components/pages/projects/Commercial';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';

import styles from './projects.module.scss';

const Projects = (): ReactElement => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const quoteGeneratorRef = useRef<HTMLDivElement>(null);
  const todoRef = useRef<HTMLDivElement>(null);
  const ticTacToeRef = useRef<HTMLDivElement>(null);
  const dictionaryRef =useRef<HTMLDivElement>(null);
  const taskManagerRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const commercialRef = useRef<HTMLDivElement>(null);

  const bind = classNames.bind(styles);

  const shortcuts = [
    {
      name: 'quote-generator',
      title: 'quote generator',
      ref: quoteGeneratorRef,
      icon: faFolder
    },
    {
      name: 'planner-18-minutes',
      title: '18 minutes',
      ref: minutesRef,
      icon: faFolder
    },
    {
      name: 'todo',
      title: 'todo',
      ref: todoRef,
      icon: faFolder
    },
    {
      name: 'tic-tac-toe',
      title: 'tic tac toe',
      ref: ticTacToeRef,
      icon: faFolder
    },
    {
      name: 'dictionary',
      title: 'dictionary',
      ref: dictionaryRef,
      icon: faFolder
    },
    {
      name: 'task-manager',
      title: 'task manager',
      ref: taskManagerRef,
      icon: faFolder
    },
    {
      name: 'commercial',
      title: 'commercial.txt',
      ref: commercialRef,
      icon: faFileText
    }
  ];

  const onScrollDown = (ref: MutableRefObject<HTMLElement | null>): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const renderShortcuts = useMemo(() => {
    return shortcuts.map((shortcut) => {
      return (
        <div
          key={shortcut.name}
          className={bind([styles.projects__shortcut, styles[shortcut.name]])}>
          <Shortcut
            name={shortcut.title}
            icon={shortcut.icon}
            variant={ShortcutVariant.LIGHT}
            handleAction={() => onScrollDown(shortcut.ref)} />
        </div>
      );
    });
  }, [shortcuts]);

  return (
    <div className={styles.projects}>
      <ProgressScroll />
      <div ref={projectsRef}>
        <Hero variant={HeroVariant.PRIMARY}>
          {renderShortcuts}
        </Hero>
      </div>
      <div ref={todoRef}>
        <Todo />
      </div>
      <div ref={quoteGeneratorRef}>
        <QuoteGenerator />
      </div>
      <div ref={minutesRef}>
        <Planner18Minutes />
      </div>
      <div ref={ticTacToeRef}>
        <TicTacToe />
      </div>
      <div ref={dictionaryRef}>
        <Dictionary />
      </div>
      <div ref={taskManagerRef}>
        <TaskManager />
      </div>
      <div ref={commercialRef}>
        <ProjectsCommercial />
      </div>
    </div>
  );
};

export default Projects;
