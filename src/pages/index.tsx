import React, { useMemo, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import HomeYayHero from './_yay-hero/YayHero';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import HomeIntroHero from './_intro-hero';

import styles from './home.module.scss';

const Home = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(ref);

  const projects = [
    {
      className: 'todo',
      title: 'Todo',
      description: 'Simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.'
    },
    {
      className: 'quote-generator',
      title: 'Quote generator',
      description: 'A simple pure JavaScript generator shows random quote and random background color for every quote.'
    },
    {
      className: 'dictionary',
      title: 'Dictionary',
      description: 'This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.'
    },
    {
      className: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      description: 'My React implementation of one of the most popular board games in the world for one or two players.'
    }
  ];

  const renderProjects = useMemo(() => {
    return projects.map((project) => {
      const { className, title, description } = project;

      return (
        <li
          key={title}
          className='col col--50 col--tablet-100'>
          <div className={`project project--${className}`}>
            <div className='project__overlay'>
              <h2 className='project__title'>{title}</h2>
              <p className='project__description'>
                {description}
              </p>
              <Link href='/projects'>
                <a className='project__link'>
                  Read more
                  <FontAwesomeIcon icon={faRightLong} />
                </a>
              </Link>
            </div>
          </div>
        </li>
      )
    })
  }, [projects]);

  return (
    <div className={styles.home}>
      <HomeYayHero
        targetRef={ref}
        showButton={!isVisible} />
      <HomeIntroHero sourceRef={ref} />
      <Hero variant={HeroVariant.LIGHT}>
        <div className='container'>
          <p className={styles.home__subtitle}>
            <span className='highlighted highlighted--primary'>
              I&#39;m working to make a better web and I love what I do
            </span>
          </p>
        </div>
      </Hero>
      <Hero>
        <ul className='row row--no-margin'>
          {renderProjects}
        </ul>
      </Hero>
    </div>
  );
};

export default Home;
