import React, { ReactElement, useMemo } from 'react';
import { nanoid } from 'nanoid';

import Hero from 'src/components/layout/Hero';

import styles from './commercial-projects.module.scss';

const CommercialProjects = (): ReactElement => {
  const projects = [
    {
      id: nanoid(),
      name: 'Voluntary return and reintegration information portal',
      stack: 'Next.js'
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
      name: 'China Studies institute web-site',
      stack: 'Dripal/JavaScript'
    },
    {
      id: nanoid(),
      name: 'Boat marketplace',
      stack: 'Angular'
    },
    {
      id: nanoid(),
      name: 'Сorporate portal',
      stack: 'Next.js'
    },
    {
      id: nanoid(),
      name: 'Employee scheduling system',
      stack: 'Angular'
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
      <div className={styles.commercialProjects}>
        <div className='container'>
          <div className='row row--centered'>
            <div className='col col--tablet-100 col--50'>
              <h2 className={styles.commercialProjects__title}>
                Commercial projects
              </h2>
            </div>
            <div className='col col--tablet-100 col--50'>
              <ul className='list'>
                {projectsList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default CommercialProjects;
