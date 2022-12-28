import React, { ReactElement } from 'react';
import { nanoid } from 'nanoid';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Slideshow from 'src/components/common/Slideshow';
import SlideshowImageThumbnail from 'src/components/common/Slideshow/_image-thumbnail';
import SlideshowBaseSlide from 'src/components/common/Slideshow/_base-slide';

import styles from './presentation.module.scss';
import todo from '/public/assets/projects/slideshow/todo.png';
import taskManager from '/public/assets/projects/slideshow/task-manager.png';
import ticTacToe from '/public/assets/projects/slideshow/tic-tac-toe.png';
import dictionary from '/public/assets/projects/slideshow/dictionary.png';
import quoteGenerator from '/public/assets/projects/slideshow/quote-generator.png';
import main from '/public/assets/projects/slideshow/main.png';
import minutes from '/public/assets/projects/18-minutes.png';

const ProjectsPresentation = (): ReactElement => {
  const slides = [
    {
      id: nanoid(),
      thumbnail: <SlideshowImageThumbnail
        image={main}
        alt='the frontend made me do it' />,
      slide:
        <SlideshowBaseSlide title={<h1 className={styles.hero__title}>the frontend<br /> made me do it</h1>} />
    },
    {
      id: nanoid(),
      slide:
        <SlideshowImageThumbnail
          image={ticTacToe}
          alt='Tic Tac Toe' />
    },
    {
      id: nanoid(),
      slide:
        <SlideshowImageThumbnail
          image={quoteGenerator}
          alt='Quote generator' />
    },
    {
      id: nanoid(),
      slide: <SlideshowImageThumbnail
        image={taskManager}
        alt='Task manager' />
    },
    {
      id: nanoid(),
      slide: <SlideshowImageThumbnail
        image={dictionary}
        alt='Dictionary' />
    },
    {
      id: nanoid(),
      slide: <SlideshowImageThumbnail
        image={todo}
        alt='To do' />
    },
    {
      id: nanoid(),
      slide: <SlideshowImageThumbnail
        image={minutes}
        alt='18 minutes' />
    }
  ];

  return (
    <div className={styles.presentation}>
      <Hero variant={HeroVariant.LIGHT}>
        <div className='container'>
          <Slideshow
            name='Projects'
            fileTitle='Presentation1_new.ppt'
            slides={slides} />
        </div>
      </Hero>
    </div>
  );
};

export default ProjectsPresentation;
