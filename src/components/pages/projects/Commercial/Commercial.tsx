import React, { ReactElement, useMemo } from 'react';
import { nanoid } from 'nanoid';

import Hero from 'src/components/layout/Hero';

import styles from './commercial.module.scss';
import Window from 'src/components/common/Window';

const ProjectsCommercial = (): ReactElement => {
  const projects = [
    {
      id: nanoid(),
      name: 'Information portal of voluntary return and reintegration',
      stack: 'Next.js/KeystoneJS'
    },
    {
      id: nanoid(),
      name: 'Social media marketing reporting platform',
      stack: 'React'
    },
    {
      id: nanoid(),
      name: 'Corporate portal for environmental protection company',
      stack: 'Drupal/Javascript'
    },
    {
      id: nanoid(),
      name: 'China studies institute web-portal',
      stack: 'Dripal/JavaScript'
    },
    {
      id: nanoid(),
      name: 'Boat marketplace',
      stack: 'Angular'
    },
    {
      id: nanoid(),
      name: 'Сorporate portal for IT company',
      stack: 'Next.js'
    },
    {
      id: nanoid(),
      name: 'Employee scheduling system for event venue',
      stack: 'Angular'
    },
    {
      id: nanoid(),
      name: 'Landing page for stack pool operation company',
      stack: 'Next.js'
    }
  ];

  const projectsList = useMemo(() => {
    return projects.map((item) => {
      const { id, name, stack } = item;

      return (
        <li
          key={id}
          className='list__item'>
          <h3 className='list__title'>
            {name}
          </h3>
          <p className='list__footer'>
            {stack}
          </p>
        </li>
      )
    })
  }, [projects]);

  return (
    <Hero>
      <Window title='commercial-projects.txt'>
        <ol className={styles.commercialProjects__list}>
          {projectsList}
        </ol>
      </Window>
    </Hero>
  );
};

export default ProjectsCommercial;
