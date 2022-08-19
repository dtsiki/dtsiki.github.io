import classNames from 'classnames';
import React, { MutableRefObject, ReactElement, useRef } from 'react';
import ProgressScroll from 'src/components/common/ProgressScroll';
import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';

import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

import styles from './projects.module.scss';
import CommercialProjects from './_commercial-projects';
import Dictionary from './_dictionary';
import ProjectsHero from './_hero';
import QuoteGenerator from './_quote-generator';
import TicTacToe from './_tic-tac-toe';
import Todo from './_todo';

const Projects = (): ReactElement => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const quoteGeneratorRef = useRef<HTMLDivElement>(null);
  const todoRef = useRef<HTMLDivElement>(null);
  const ticTacToeRef = useRef<HTMLDivElement>(null);
  const dictionaryRef =useRef<HTMLDivElement>(null);
  const isProjectsVisible = useIntersectionObserver(projectsRef);

  const bind = classNames.bind(styles);

  const onScrollDown = (ref: MutableRefObject<HTMLElement | null>): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  };

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
                <ul className={bind(['tags tags--primary', styles.projects__list])}>
                  <li className='tag tag--with-link'>
                    <button
                      className='tag__link'
                      onClick={() => onScrollDown(quoteGeneratorRef)}>
                        quote generator
                    </button>
                  </li>
                  <li className='tag tag--with-link'>
                    <button
                      className='tag__link'
                      onClick={() => onScrollDown(todoRef)}>
                        todo
                    </button>
                  </li>
                  <li className='tag tag--with-link'>
                    <button
                      className='tag__link'
                      onClick={() => onScrollDown(ticTacToeRef)}>
                        tic tac toe
                    </button>
                  </li>
                  <li className='tag tag--with-link'>
                    <button
                      className='tag__link'
                      onClick={() => onScrollDown(dictionaryRef)}>
                        dictionary
                    </button>
                  </li>
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
      <div ref={ticTacToeRef}>
        <TicTacToe />
      </div>
      <div ref={dictionaryRef}>
        <Dictionary />
      </div>
      <CommercialProjects />
    </div>
  );
};

export default Projects;
