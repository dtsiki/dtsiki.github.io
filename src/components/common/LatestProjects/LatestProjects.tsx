import React, { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import Tag, { TagVariant } from '../Tag/Tag';
import Window from '../Window';
import { WindowPatternVariant, WindowType } from '../Window/Window';
import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import useWindowSize from 'src/hooks/useWindowSize';
import Project from '../Project';

import styles from './latest-projects.module.scss';
import todo from 'public/assets/projects/previews/todo.png';
import taskManager from 'public/assets/projects/previews/task-manager.png';
import quoteGenerator from 'public/assets/projects/previews/quote-generator.png';
import ticTacToe from 'public/assets/projects/previews/tic-tac-toe.png';
import dictionary from 'public/assets/projects/previews/dictionary.png';

const LatestProjects = (): ReactElement => {
  const { isMobile } = useWindowSize();

  const bind = classNames.bind(styles);

  const projects = [
    {
      id: nanoid(),
      fileName: 'todo',
      variant: 'todo',
      title: 'Todo',
      description: 'A simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.',
      image: todo
    },
    {
      id: nanoid(),
      fileName: 'quote-generator',
      variant: 'quoteGenerator',
      title: 'Quote generator',
      description: 'A simple pure JavaScript generator shows random quote and random background color for every quote.',
      image: quoteGenerator
    },
    {
      id: nanoid(),
      fileName: 'tic-tac-toe',
      variant: 'ticTacToe',
      title: 'Tic Tac Toe',
      description: 'My React implementation of one of the most popular board games in the world for one or two players.',
      image: ticTacToe
    },
    {
      id: nanoid(),
      fileName: 'dictionary',
      variant: 'dictionary',
      title: 'Dictionary',
      description: 'This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.',
      image: dictionary
    },
    {
      id: nanoid(),
      fileName: 'task-manager',
      variant: 'taskManager',
      title: 'Task manager',
      description: 'A simplified kanban board inspired by Trello built with React and TypeScript. HTML drag and drop API is used here.',
      image: taskManager
    }
  ];

  const renderWindows = useMemo(() => {
    return projects?.map((project) => {
      const { id, fileName, image, variant } = project;

      return (
        <div
          key={id}
          className={bind([styles.latestProjects__item, styles[variant]])}>
          <Window
            type={WindowType.IMAGE}
            fileTitle={`${fileName}.jpg`}>
            <Image
              src={image}
              layout='responsive'
              alt='' />
          </Window>
        </div>
      );
    })
  }, [projects]);

  const renderPreviews = useMemo(() => {
    return projects.map((project) => {
      const { title, description, variant } = project;

      return (
        <Project
          key={title}
          title={title}
          description={description}
          variant={variant}
          col='col--100' />
      )
    })
  }, [projects]);

  return (
    <Hero variant={HeroVariant.LIGHT}>
      <div className={styles.latestProjects}>
        <div className='container'>
          <h2 className={styles.latestProjects__title}>
            Latest projects
          </h2>
        </div>
        {isMobile ? (
          <ul className='row row--no-margin'>
            {renderPreviews}
          </ul>
        ) : (
          <div className='container'>
            <Window
              title='Projects'
              pattern={WindowPatternVariant.SMILEY}>
              <div className={styles.latestProjects__wrapper}>
                {renderWindows}
              </div>
            </Window>
          </div>
        )}
        <div className={styles.latestProjects__footer}>
          <Link href='/projects'>
            <a className='link-with-tag'>
              <Tag
                variant={TagVariant.PRIMARY}
                isOutlined>
                Check out
                <FontAwesomeIcon icon={faArrowRight} />
              </Tag>
            </a>
          </Link>
        </div>
      </div>
    </Hero>
  );
};

export default LatestProjects;
