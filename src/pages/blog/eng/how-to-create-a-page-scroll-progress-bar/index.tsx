import Image from 'next/image';
import { nanoid } from 'nanoid';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { ReadMoreList } from 'src/components/blog/ReadMoreList/ReadMoreList';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExternalLink } from 'src/components/common/ExternalLink';
import HtmlTag from 'src/components/common/HtmlTag';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';
import { TReadMoreSource } from 'src/components/blog/ReadMoreList/ReadMoreList.types';

import heights from 'public/assets/blog/how-to-create-a-page-scroll-progress-bar/heights.svg';

const Post = () => {
  const SOURCES_CONFIG: Array<TReadMoreSource> = [
    {
      id: nanoid(),
      link: 'https://create-react-app.dev/',
      label: 'React Create App',
    },
    {
      id: nanoid(),
      link: 'https://react.dev/reference/react/hooks',
      label: 'React Hooks',
    },
    {
      id: nanoid(),
      link: 'https://usehooks-ts.com/react-hook/use-event-listener',
      label: 'useEventListener',
    },
    {
      id: nanoid(),
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight',
      label: 'What is scroll height',
    },
    {
      id: nanoid(),
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight',
      label: 'What is client height',
    },
  ];

  const componentStructure = `.
└── <YOUR AWESOME PROJECT NAME>/
    └── src/
        └── components/
            └── ProgressScroll/
                ├── ProgressScroll.tsx
                └── progress-scroll.module.scss`;

  const emptyComponent = `export const ProgressScroll = () => {
  return (
    <div></div>
  );
};`;

  const progressState = `import { useState } from 'react';

export const ProgressScroll = (): ReactElement => {
  const [progress, setProgress] = useState<number>(0);

  return (
    <div></div>
  );
};`;

  const markup = `import { useState } from 'react';

import styles from './progress-scroll.module.scss';

export const ProgressScroll = () => {
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

  const result = `import { useState } from 'react';
import useEventListener, { Event } from 'src/hooks/useEventListener';

import styles from './progress-scroll.module.scss';

export const ProgressScroll = () => {
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

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.SPRINKLES,
        variant: EHeroVariant.SECONDARY,
      }}>
      <section>
        <p className='note spacer bottom large'>
          It&#39;s supposed that you have already have your configured project. If you don&#39;t have one, I recommend
          install React via <ExternalLink href='https://create-react-app.dev' label='Create React App' />
        </p>
      </section>
      <section>
        <h2>Step 1: Create a component in your project directory</h2>
        <p>
          For example, I created <HtmlTag isSingle>ProgressScroll</HtmlTag> component folder. There are two files
          inside: the component file itself <code>ProgressScroll.tsx</code> and the style file{' '}
          <code>progress-scroll.module.scss</code>. As you can see I&#39;m using TypeScript and Sass, but feel free and
          use any syntax and preprocessor you want, it will not affect the result.
        </p>

        <ExampleSnippet code={componentStructure} isCopyable={false} />

        <p>The code below is an example of an empty component. Next we will add some ✨code✨ to this file.</p>

        <CodeSnippet code={emptyComponent} lang={ECodeLang.REACT} name='ProgressScroll' />
      </section>
      <section>
        <h2>Step 2: Add a progress state</h2>
        <p>
          To display scrolling progress we need to store scroll progress somewhere. React Hook <code>useState</code> is
          ideal for it. Add a state <code>[progress, setProgress]</code> to your component. Don&#39;t forget to import{' '}
          <code>useState</code>.
        </p>

        <CodeSnippet code={progressState} lang={ECodeLang.TYPESCRIPT} name='ProgressScroll' />
        <p>
          The first value, <code>progress</code>, is our scroll progress value or how many percent did we scroll down
          the page. The second value, <code>setProgress</code>, is the function that is used to update our state.
        </p>
      </section>
      <section>
        <h2>Step 3: Add some style</h2>
        <p>
          Before we add magic let&#39;s style our scroll progress bar. Check the code below, there are updated markup:
        </p>

        <CodeSnippet code={markup} lang={ECodeLang.TYPESCRIPT} name='ProgressScroll' />

        <p>Of course we need to add some style:</p>

        <CodeSnippet code={styleFile} lang={ECodeLang.SCSS} name='progress-scroll.module' />
        <p>
          A few notes on the style. <code>z-index</code> should be such that the scroll progress bar appears on top of
          all elements on your page. <code>height</code>, <code>background</code> and <code>background-color</code> can
          be anything you like.
        </p>
        <p>
          If you run the component now, you will just see a gray bar at the top of the page. It&#39;s time for magic!
        </p>
      </section>
      <section>
        <h2>Step 4: Add magic</h2>
        <p>
          It&#39;s right around the corner. Before we added the scroll progress state. Now let&#39;s add a function that
          will calculate scrolling progress: <code>handleScroll()</code>. Also we will use <code>useEventListener</code>{' '}
          hook. It&#39;s a custom hook that attaches event listeners to DOM elements, the window, or media query lists.
          You can check it <ExternalLink href='https://usehooks-ts.com/react-hook/use-event-listener' label='here' />.
          About React custom hooks you can read{' '}
          <ExternalLink href='https://react.dev/learn/reusing-logic-with-custom-hooks' label='here' />.
        </p>

        <CodeSnippet code={result} lang={ECodeLang.TYPESCRIPT} name='ProgressScroll' />

        <p className='spacer bottom large top'>
          We will receive via <code>DOM Event Listener</code> in <code>handleScroll()</code> an information about scroll
          height and client height after each scroll. Here is difference between scroll height and client height:
        </p>
        <Image src={heights} layout='responsive' objectFit='cover' />
        <p className='explanation'>
          Here&apos;s an explanation of the difference between scroll height and client height
        </p>
        <p className='spacer top large'>
          Then using the formula above we calculate the scrolling progress. If you want to see the final result just
          look at the top of this page and scroll up and down.
        </p>
      </section>
      <ReadMoreList
        items={SOURCES_CONFIG}
        language={POSTS_CONFIG_[EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR].language}
      />
    </PostWrapper>
  );
};

export default Post;
