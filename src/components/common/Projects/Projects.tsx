import React, { ReactElement, useMemo } from 'react';

import Project from '../Project/Project';

const Projects = (): ReactElement => {
  const projects = [
    {
      variant: 'todo',
      title: 'Todo',
      description: 'A simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.',
      col: 'col--33'
    },
    {
      variant: 'quoteGenerator',
      title: 'Quote generator',
      description: 'A simple pure JavaScript generator shows random quote and random background color for every quote.',
      col: 'col--33'
    },
    {
      variant: 'ticTacToe',
      title: 'Tic Tac Toe',
      description: 'My React implementation of one of the most popular board games in the world for one or two players.',
      col: 'col--33'
    },
    {
      variant: 'dictionary',
      title: 'Dictionary',
      description: 'This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.',
      col: 'col--50'
    },
    {
      variant: 'taskManager',
      title: 'Task manager',
      description: 'A simplified kanban board inspired by Trello built with React and TypeScript. HTML drag and drop API is used here.',
      col: 'col--50'
    }
  ];

  const renderProjects = useMemo(() => {
    return projects.map((project) => {
      const { title, description, variant, col } = project;

      return (
        <Project
          key={title}
          title={title}
          description={description}
          variant={variant}
          col={col} />
      )
    })
  }, [projects]);

  return (
    <ul className='row row--no-margin'>
      {renderProjects}
    </ul>
  );
};

export default Projects;
