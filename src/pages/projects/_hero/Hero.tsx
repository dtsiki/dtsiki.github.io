import React, { MutableRefObject, ReactElement } from 'react';
import { nanoid } from 'nanoid';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import ScrollDownButton, { ScrollDownButtonVariant } from 'src/components/common/ScrollDownButton/ScrollDownButton';
import Slideshow from 'src/components/common/Slideshow';
import SlideshowImageThumbnail from 'src/components/common/Slideshow/_image-thumbnail';
import SlideshowBaseSlide from 'src/components/common/Slideshow/_base-slide';

import styles from './hero.module.scss';
import todo from '/public/assets/projects/slideshow/todo.png';
import taskManager from '/public/assets/projects/slideshow/task-manager.png';
import ticTacToe from '/public/assets/projects/slideshow/tic-tac-toe.png';
import dictionary from '/public/assets/projects/slideshow/dictionary.png';
import quoteGenerator from '/public/assets/projects/slideshow/quote-generator.png';
import main from '/public/assets/projects/slideshow/main.png';

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const ProjectsHero = ({ targetRef, showButton }: Props): ReactElement => {
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
    }
  ];

  return (
    <div className={styles.hero}>
      <Hero variant={HeroVariant.LIGHT}>
        <div className='container'>
          <Slideshow
            name='Projects'
            fileTitle='Presentation1_new.ppt'
            slides={slides} />
        </div>
        <ScrollDownButton
          isHidden={!showButton}
          variant={ScrollDownButtonVariant.PRIMARY}
          targetRef={targetRef}
          isJumping />
      </Hero>
    </div>
  );
};

export default ProjectsHero;
