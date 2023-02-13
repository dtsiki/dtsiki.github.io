import React, { ReactElement, useRef } from 'react';
import classNames from 'classnames';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import WhatIsJavaScript from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/WhatIsJavaScript';
import JavaScriptDataTypes from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/JavaScriptDataTypes';
import NullAndUndefined from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/NullAndUndefined';
import VarLetConst from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/VarLetConst';
import Scope from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Scope';
import Hoisting from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Hoisting';
import TemporalDeadZone from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/TemporalDeadZone';
import StrictMode from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/StrictMode';
import AboutGratitude from 'src/components/pages/about/Gratitude';
import Closures from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Closures';
import Functions from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Functions';
import Arrays from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Arrays';
import ArraysMethods from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/ArraysMethods';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Image from 'next/image';

import styles from './post.module.scss';
import book from 'public/assets/blog/frontend-in-a-nutshell/javascript/book.jpg';
import Timers from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Timers';
import EventLoop from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/EventLoop';
import AsynchronousJavaScript from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/ AsynchronousJavaScript';
import AsyncAwait from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/AsyncAwait';
import Callbacks from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Callbacks';
import Promises from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/Promises';
import MutableAndImmutable from 'src/components/pages/blog/frontend-in-a-nutshell/javascript/MutableAndImmutable';
import Hero from 'src/components/layout/Hero';
import { HeroSize, HeroVariant, HeroPattern } from 'src/components/layout/Hero/Hero';

const Post = (): ReactElement => {
  const heroRef = useRef<HTMLDivElement>(null);

  const bind = classNames.bind(styles);

  const title = 'Frontend in a nutshell';
  const highlight = 'Well, almost in a nutshell. Here\'s an ultimate and compact guide to get into the frontend development.';
  const metaDescription = 'Frontend essential questions';
  const metaTags = 'frontend, javascript, interview, questions, html, css, react, guide';

  return (
    <div className={styles.post}>
      <ProgressScroll />
      <section ref={heroRef}>
        <Hero
          size={HeroSize.HALF}
          pattern={HeroPattern.MOTION_LINES}
          variant={HeroVariant.VIOLET}
          height={500}
          hasOverlay>
          <div className='highlighted primary'>
            <span className='visually-hidden'>Frontend guide</span>
          </div>
        </Hero>
      </section>
      <article>
        <PostLayout
          title={title}
          highlight={highlight}
          category='guide'
          date='13 feb, 2023'
          metaDescription={metaDescription}
          metaTags={metaTags}
          tags={['guide']}
          isWorkInProgress>
          <section>
            <h2>JavaScript</h2>
            <WhatIsJavaScript />
            <JavaScriptDataTypes />
            <MutableAndImmutable />
            <NullAndUndefined />
            <VarLetConst />
            <Functions />
            <Scope />
            <Hoisting />
            <TemporalDeadZone />
            <StrictMode />
            <Closures />
            <Arrays />
            <ArraysMethods />
            <Timers />
            <EventLoop />
            <AsynchronousJavaScript />
            <Callbacks />
            <Promises />
            <AsyncAwait />
            <div className={bind([styles.post__image, 'spacer top bottom large'])}>
              <Window
                type={WindowType.IMAGE}
                title='GALLERY'
                fileTitle='yay.jpg'>
                <Image
                  layout='responsive'
                  src={book}
                  alt='Spider-Man (null) pointing at Spider-Man (undefined)' />
              </Window>
            </div>
          </section>
          <section>
            <AboutGratitude />
          </section>
        </PostLayout>
      </article>
    </div>
  );
};

export default Post;
