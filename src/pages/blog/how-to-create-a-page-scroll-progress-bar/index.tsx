import React, { ReactElement } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';
import Hero from 'src/components/layout/Hero';
import { HeroPattern, HeroSize, HeroVariant } from 'src/components/layout/Hero/Hero';
import Thanks from 'src/components/common/Thanks';
import Example from 'src/components/common/Example';
import HtmlTag from 'src/components/common/HtmlTag';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import ReadMore from 'src/components/pages/blog/ReadMore';
import { ISource } from 'src/interfaces';

import styles from './post.module.scss';
import heights from 'public/assets/blog/how-to-create-a-page-scroll-progress-bar/heights.svg';

const Post = (): ReactElement => {
  const title = 'How to create a page scroll progress bar';
  const highlight = 'In this quick tutorial you will learn how to create a simple scroll progress bar using React step by step.';
  const metaDescription = 'Scroll progress bar React';
  const metaTags = 'React, JavaScript, tutorial, progress scroll bar, scroll bar, scroll bar indicator, прокрутка, кастомный скролл бар';
  const date = '29 apr, 2024';
  const tags = ['React'];

  const componentStructure = `.
└── Your awesome project/
    └── src/
        └── components/
            └── ProgressScroll/
                ├── ProgressScroll.tsx
                └── progress-scroll.module.scss`;

  const emptyComponent = `import React, { ReactElement } from 'react';

export const ProgressScroll = (): ReactElement => {
  return (
    <div></div>
  );
};`;

  const progressState = `import React, { ReactElement, useState } from 'react';

export const ProgressScroll = (): ReactElement => {
  const [progress, setProgress] = useState<number>(0);

  return (
    <div></div>
  );
};`;

  const markup = `import React, { ReactElement, useState } from 'react';

import styles from './progress-scroll.module.scss';

export const ProgressScroll = (): ReactElement => {
  const [progress, setProgress] = useState<number>(0);

  return (
    <div className={styles.progressScroll}>
      <div
        className={styles.progressScroll__bar}
        style={{ width: \`\${progress}%\` }} />
    </div>
  );
};`;

  const styleFile = `.progressScroll {
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100%;
    height: 5px;
    background: LightGray;

    &__tracker {
      height: 100%;
      background-color: DarkViolet;
      transition: 0.5s width;
    }
  }`;

  const result = `import React, { ReactElement, useState } from 'react';
import useEventListener, { Event } from 'src/hooks/useEventListener';

import styles from './progress-scroll.module.scss';

export const ProgressScroll = (): ReactElement => {
  const [progress, setProgress] = useState<number>(0);

  const handleScroll = (): void => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledHeight = window.scrollY;
    const scrolledPercent = Math.round((scrolledHeight * 100) / height);

    setProgress(scrolledPercent);
  };

  useEventListener(Event.SCROLL, handleScroll);

  return (
    <div className={styles.progressScroll}>
      <div
        className={styles.progressScroll__bar}
        style={{ width: \`\${progress}%\` }} />
    </div>
  );
};`;

  const sources: Array<ISource> = [
    {
      id: nanoid(),
      link: 'https://create-react-app.dev/',
      label: 'React Create App'
    },
    {
      id: nanoid(),
      link: 'https://react.dev/reference/react/hooks',
      label: 'React Hooks'
    },
    {
      id: nanoid(),
      link: 'https://usehooks-ts.com/react-hook/use-event-listener',
      label: 'useEventListener'
    },
    {
      id: nanoid(),
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight',
      label: 'What is scroll height'
    },
    {
      id: nanoid(),
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight',
      label: 'What is client height'
    }
  ];

  return (
    <>
      <Hero
        size={HeroSize.CUSTOM}
        variant={HeroVariant.SECONDARY}
        pattern={HeroPattern.SPRINKLES}
        height={400}
        hasOverlay />
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='tutorial'
        date={date}
        metaDescription={metaDescription}
        metaTags={metaTags}
        tags={tags}>
        <section>
          <p className='note spacer bottom large'>
            It&#39;s supposed that you have already have your configured project.
            If you don&#39;t have one, I recommend install React via <ExternalLink
              href='https://create-react-app.dev'
              label='Create React App' />
          </p>
        </section>
        <section>
          <h2>Step 1: Create a component in your project directory</h2>
          <p>
            For example, I created <HtmlTag isSingle>ProgressScroll</HtmlTag> component folder.
            There are two files inside: the component file itself <code>ProgressScroll.tsx</code> and the style file <code>progress-scroll.module.scss</code>.
            As you can see I&#39;m using TypeScript and Sass, but feel free and use any syntax and preprocessor you want, it will not affect the result.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example
                  code={componentStructure}
                  isCopyable={false} />
              </div>
            </div>
          </div>
          <p>
            The code below is an example of an empty component.
            Next we will add some ✨code✨ to this file.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Code
                  code={emptyComponent}
                  language={CodeLanguage.REACT}
                  showLineNumbers={true}
                  name='ProgressScroll'
                  isNameUppercase={false} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Step 2: Add a progress state</h2>
          <p>
            To display scrolling progress we need to store scroll progress somewhere.
            React Hook <code>useState</code> is ideal for it.
            Add a state <code>[progress, setProgress]</code> to your component.
            Don&#39;t forget to import <code>useState</code>.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Code
                  code={progressState}
                  language={CodeLanguage.TYPESCRIPT}
                  showLineNumbers={true}
                  name='ProgressScroll'
                  isNameUppercase={false} />
              </div>
            </div>
          </div>
          <p>
            The first value, <code>progress</code>, is our scroll progress value or how many percent did we scroll down the page.
            The second value, <code>setProgress</code>, is the function that is used to update our state.
          </p>
        </section>
        <section>
          <h2>Step 3: Add some style</h2>
          <p>
            Before we add magic let&#39;s style our scroll progress bar.
            Check the code below, there are updated markup:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Code
                  code={markup}
                  language={CodeLanguage.TYPESCRIPT}
                  showLineNumbers={true}
                  name='ProgressScroll'
                  isNameUppercase={false} />
              </div>
            </div>
          </div>
          <p>
            Of course we need to add some style:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Code
                  code={styleFile}
                  language={CodeLanguage.SCSS}
                  showLineNumbers={true}
                  name='progress-scroll.module'
                  isNameUppercase={false} />
              </div>
            </div>
          </div>
          <p>
            A few notes on the style. <code>z-index</code> should be such that the scroll progress bar appears on top of all elements on your page. <code>height</code>, <code>background</code> and <code>background-color</code> can be anything you like.
          </p>
          <p>
            If you run the component now, you will just see a gray bar at the top of the page.
            It&#39;s time for magic!
          </p>
        </section>
        <section>
          <h2>Step 4: Add magic</h2>
          <p>
            It&#39;s right around the corner.
            Before we added the scroll progress state.
            Now let&#39;s add a function that will calculate scrolling progress: <code>handleScroll()</code>.
            Also we will use <code>useEventListener</code> hook.
            It&#39;s a custom hook that attaches event listeners to DOM elements, the window, or media query lists.
            You can check it <ExternalLink
              href='https://usehooks-ts.com/react-hook/use-event-listener'
              label='here' />.
            About React custom hooks you can read <ExternalLink
              href='https://react.dev/learn/reusing-logic-with-custom-hooks'
              label='here' />.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Code
                  code={result}
                  language={CodeLanguage.TYPESCRIPT}
                  showLineNumbers={true}
                  name='ProgressScroll'
                  isNameUppercase={false} />
              </div>
            </div>
          </div>
          <p className='spacer bottom large top'>
            We will receive via <code>DOM Event Listener</code> in <code>handleScroll()</code> an information about scroll height and client height after each scroll.
            Here is difference between scroll height and client height:
          </p>
          <div className={styles.post__image}>
            <Image
              src={heights}
              layout='responsive'
              objectFit='cover' />
          </div>
          <p className='spacer top large'>
            Then using the formula above we calculate the scrolling progress.
            If you want to see the final result just look at the top of this page and scroll up and down.
          </p>
        </section>
        <ReadMore items={sources} />
        <Thanks />
      </PostLayout>
    </>
  );
};

export default Post;
