import React, { MutableRefObject, ReactElement, useMemo, useRef } from 'react';
import classNames from 'classnames';

import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import CommercialProjects from './_commercial-projects';
import Dictionary from './_dictionary';
import ProjectsHero from './_hero';
import QuoteGenerator from './_quote-generator';
import TicTacToe from './_tic-tac-toe';
import Todo from './_todo';
import ProgressScroll from 'src/components/common/ProgressScroll';
import Tag, { TagElement, TagVariant } from 'src/components/common/Tag/Tag';
import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import TaskManager from './_task-manager';
import Planner18Minutes from './_planner-18-minutes';

import styles from './projects.module.scss';

const Projects = (): ReactElement => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const quoteGeneratorRef = useRef<HTMLDivElement>(null);
  const todoRef = useRef<HTMLDivElement>(null);
  const ticTacToeRef = useRef<HTMLDivElement>(null);
  const dictionaryRef =useRef<HTMLDivElement>(null);
  const taskManagerRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const isProjectsVisible = useIntersectionObserver(projectsRef);

  const bind = classNames.bind(styles);

  const petProjects = [
    {
      name: 'Quote generator',
      ref: quoteGeneratorRef
    },
    {
      name: '18 minutes',
      ref: minutesRef
    },
    {
      name: 'Todo',
      ref: todoRef
    },
    {
      name: 'Tic Tac Toe',
      ref: ticTacToeRef
    },
    {
      name: 'Dictionary',
      ref: dictionaryRef
    },
    {
      name: 'Task manager',
      ref: taskManagerRef
    }
  ];

  const onScrollDown = (ref: MutableRefObject<HTMLElement | null>): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const renderPetProjects = useMemo(() => {
    return petProjects.map((project) => {
      return (
        <li
          key={project.name}
          className='list__item'>
          <Tag
            element={TagElement.BUTTON}
            onClick={() => onScrollDown(project.ref)}
            variant={TagVariant.LIGHT}
            isOutlined>
            {project.name}
          </Tag>
        </li>
      )
    })
  }, [petProjects]);

  return (
    <div className={styles.projects}>
      <ProgressScroll />
      <ProjectsHero
        targetRef={projectsRef}
        showButton={!isProjectsVisible} />
      <div ref={projectsRef}>
        <Hero variant={HeroVariant.PRIMARY}>
          <div className='container'>
            <div className={bind(['row row--centered', styles.projects__pet])}>
              <div className='col col--tablet-100 col--50'>
                <ul className={bind(['list inline', styles.projects__list])}>
                  {renderPetProjects}
                </ul>
              </div>
              <div className='col col--tablet-100 col--50'>
                <h2 className={styles.projects__subtitle}>
                  Pet projects
                </h2>
              </div>
            </div>
          </div>
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
      <CommercialProjects />
    </div>
  );
};

export default Projects;
