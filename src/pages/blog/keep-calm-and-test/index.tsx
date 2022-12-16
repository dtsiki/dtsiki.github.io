import { ReactElement, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';
import { useStoreon } from 'storeon/react';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';
import Code, { CodeLanguage } from 'src/components/common/Code/Code';
import ReadMore from 'src/components/pages/blog/ReadMore';
import Window from 'src/components/common/Window';
import HtmlTag from 'src/components/common/HtmlTag';
import { WindowType } from 'src/components/common/Window/Window';
import Example from 'src/components/common/Example';
import Hero from 'src/components/layout/Hero';
import { HeroSize, HeroVariant } from 'src/components/layout/Hero/Hero';
import TableOfContents from 'src/components/pages/blog/TableOfContents';
import { IItemOfContent, ISource } from 'src/interfaces';
import { isElementVisible } from 'src/utils';
import { ThemeColor, ThemerEvent } from 'src/store/themer';
import useEventListener, { Event } from 'src/hooks/useEventListener';

import styles from './post.module.scss';
import meme from 'public/assets/blog/keep-calm-and-test/meme.jpeg';

const Post = (): ReactElement => {
  const [topColor, setTopColor] = useState<ThemeColor>(ThemeColor.WHITE);
  const [bottomColor, setBottomColor] = useState<ThemeColor>(ThemeColor.VIOLET);

  const heroRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);

  const { dispatch } = useStoreon();

  const noteRef = useRef<HTMLParagraphElement>(null);
  const whatIsJestRef = useRef<HTMLDivElement>(null);
  const prerequisitesRef = useRef<HTMLDivElement>(null);
  const introductionToJestRef = useRef<HTMLDivElement>(null);
  const snapshotTestingRef = useRef<HTMLDivElement>(null);
  const handlingAssetsRef = useRef<HTMLDivElement>(null);
  const coverageReportingRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);

  const onScrollToNote = (): void => {
    noteRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const handleScroll = (): void => {
    const bottomOffset = {
      top: document.documentElement.clientHeight - 50,
      bottom: document.documentElement.clientHeight
    };

    if (isElementVisible(heroRef)) {
      setTopColor(ThemeColor.WHITE);
    }

    if (isElementVisible(postRef)) {
      setTopColor(ThemeColor.VIOLET);
    }

    if (isElementVisible(heroRef, bottomOffset)) {
      setBottomColor(ThemeColor.WHITE);
    }

    if (isElementVisible(postRef, bottomOffset)) {
      setBottomColor(ThemeColor.VIOLET);
    }
  };

  useEventListener(Event.SCROLL, handleScroll);

  useEffect(() => {
    if (topColor) {
      dispatch(ThemerEvent.SET_TOP_COLOR, topColor);
    }
  }, [topColor]);

  useEffect(() => {
    if (bottomColor) {
      dispatch(ThemerEvent.SET_BOTTOM_COLOR, bottomColor);
    }
  }, [bottomColor]);

  const title = 'Keep calm and test (and then test again and test one more time)';
  const highlight = 'In this tutorial, I\'ll lead you through setting up and using Jest for snapshot testing a simple React web application. If you need a sign to start testing, this is it.';
  const metaDescription = '';
  const metaTags = 'React, JavaScript, TypeScript, Jest, test, testing, automated tests, automated testing';

  const tableOfContents: Array<IItemOfContent> = [
    {
      title: 'What is Jest?',
      ref: whatIsJestRef
    },
    {
      title: 'Prerequisites',
      ref: prerequisitesRef
    },
    {
      title: 'Introduction to Jest',
      ref: introductionToJestRef
    },
    {
      title: 'Snapshot testing',
      ref: snapshotTestingRef
    },
    {
      title: 'Handling assets',
      ref: handlingAssetsRef
    },
    {
      title: 'Coverage reporting',
      ref: coverageReportingRef
    },
    {
      title: 'Conclusion',
      ref: conclusionRef
    }
  ];

  const sources: Array<ISource> = [
    {
      id: nanoid(),
      link: 'https://jestjs.io',
      label: 'Jest documentation'
    },
    {
      id: nanoid(),
      link: 'https://reactjs.org/docs/test-renderer.html',
      label: 'Test Rendered documentation'
    },
    {
      id: nanoid(),
      link: 'https://jestjs.io/docs/snapshot-testing',
      label: 'Jest snapshot testing documentation'
    },
    {
      id: nanoid(),
      link: 'https://www.valentinog.com/blog/jest-coverage/',
      label: 'Configuring code coverage in Jest'
    },
    {
      id: nanoid(),
      link: 'https://reactjs.org/docs/test-renderer.html',
      label: 'React Test Rendered documentation'
    }
  ];

  const installCommandShort = 'npm install --save-dev react-test-renderer';
  const installCommandFull = 'npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer';

  const importJestGlobals = `...
import { describe, expect, test } from '@jest/globals'
...`;

  const runScript = `"scripts": {
  ...
  "test": "jest"
}`;

  const noTestsResultExample = `npm test

> test-test-test@0.1.0 test
> jest

No tests found, exiting with code 1
Run with \`--passWithNoTests\` to exit with code 0
`;

  const runCommand = 'npm test';

  const packageJsonFile = `...
"dependencies": {
  "react": ...,
  "react-dom": ...,
  "react-scripts": ...
  ...
},
"devDependencies": {
  "@babel/preset-env": ...,
  "@babel/preset-react": ...,
  "@babel/preset-typescript": ...,
  "@jest/globals": ...,
  "@types/jest": ...,
  "babel-jest": ...,
  "jest": ...,
  "react-test-renderer": ...,
  "ts-jest": ...,
  "typescript": ...
},
...`;

  const describeExample = `describe('Component', () => {
  ...
});`;

  const nestedDescribeExample = `describe('Component', () => {
  describe("check some state", () => {
  ...
  });

  describe("check another state", () => {
    ...
  });
});`;

  const testExample = `describe('Component', () => {
  test('test something', () => {
    ...
  });
});`;

  const beforeAfterEachExample = `describe('Component', () => {
  beforeEach(() => {
    initialize();
  });

  afterEach(() => {
    reset();
  });

  test('test something', () => {
    ...
  });

  test('test another', () => {
    ...
  });
});`;

  const beforeAfterAllExample = `describe('Component', () => {
  beforeAll(() => {
    initialize();
  });

  afterAll(() => {
    reset();
  });

  test('test something', () => {
    ...
  });

  test('test another', () => {
    ...
  });
});`;

  const onlyExample = `describe('Component', () => {
  test.only('test something', () => {
    ...
  });

  test('test another', () => {
    ...
  });
});`;

  const withoutEachExample = `describe('Button', () => {
  test('renders correctly', () => {
    ...
  });

  test('renders disabled button', () => {
    ...
  });

  test('renders focused button', () => {
    ...
  });

  test('renders large button', () => {
    ...
  });
});`;

  const eachExample = `const variants = ...

test.each(variants)(
  'renders %s correctly',
  (variant) => {
    ...
  }
);`;

  const testAppExample = `import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';

describe('App', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});`;

  const testAppSnapshotExample = `// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[\`App renders correctly 1\`] = \`
  <div>
    ...
  </div>
\`;
`;

  const coverageCommand = 'npm test -- --coverage';

  const reactImportExample = 'import React from \'react\';';

  const testAppTerminalExample = `npm test
> test-test-test@0.1.0 test
> jest

PASS  src/components/__tests__/App.test.tsx

App
  ✓ renders correctly (8 ms)

  › 1 snapshot written.

Snapshot Summary
  › 1 snapshot written from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 written, 1 total
Time:        2.656 s

Ran all test suites.`;

  const testAppTerminalSecondExample = `npm test
> test-test-test@0.1.0 test
> jest

PASS  src/components/__tests__/App.test.tsx

App
  ✓ renders correctly (8 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        1.816 s, estimated 3 s
Ran all test suites.`;

  const testAppHeadingExample = `...
<div className='container'>
  <h1>Yay!</h1>
  ...
</div>
...`;

  const testAppFailedExample = `npm test
> test-test-test@0.1.0 test
> jest

FAIL  src/components/__tests__/App.test.tsx
App
  ✕ renders correctly (10 ms)

● App › renders correctly

  expect(received).toMatchSnapshot()

  Snapshot name: \`App renders correctly 1]\`

    - Snapshot  - 0
    + Received  + 3

    @@ -1,8 +1,11 @@
      <div
        className="container"
      >
    +   <h1>
    +     Yay!
    +   </h1>
      11 |
      12 |     expect(tree)
    > 13 |       .toMatchSnapshot();
          |        ^
      14 |   });
      15 | });
      16 |

      at Object.<anonymous> (src/components/__tests__/App.test.tsx:13:8)

   › 1 snapshot failed.
  Snapshot Summary
   › 1 snapshot failed from 1 test suite. Inspect your code changes or run \`npm test -- -u\` to update them.

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   1 failed, 1 total
Time:        2.792 s
Ran all test suites.`;

  const updateSnapshotCommand = 'npm test -- -u';

  const coverageReportExample = `npm test -- --coverage
> test-test-test@0.1.0 test
> jest "--coverage"

PASS  src/components/__tests__/App.test.tsx
App
  ✓ renders correctly (13 ms)

  ------------------------|---------|----------|---------|---------|-------------------
  File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
  ------------------------|---------|----------|---------|---------|-------------------
  All files               |     100 |      100 |     100 |     100 |
  src                     |     100 |      100 |      50 |     100 |
  App.tsx                 |     100 |      100 |      50 |     100 |
  ------------------------|---------|----------|---------|---------|-------------------

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        4.583 s
Ran all test suites.`;

  const assetsError = `SyntaxError: Invalid or unexpected token
  > 10 | import cover from './assets/cover.jpg';`;

  const jestConfigExample = `/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js'
  }
  ...
};`;

  const mockFileExample = 'module.exports = \'test-file-stub\';';

  const buttonComponentExample = `import React, { ReactNode } from 'react';
import classNames from 'classnames';

export enum ButtonVariant {
  INFO = 'is-info',
  SUCCESS = 'is-success',
  WARNING = 'is-warning',
  DANGER = 'is-danger'
}

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = ButtonVariant.INFO, onClick }: ButtonProps) => {
  const bind = classNames.bind([]);

  return (
    <button
      className={bind(['button', variant])}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;`;

  const buttonWithoutEach = `import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('Button', () => {
  test('renders INFO correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.INFO}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });

  test('renders SUCCESS correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.SUCCESS}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });

  test('renders WARNING correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.WARNING}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });

  test('renders ERROR correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.WARNING}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});`;

  const buttonWithEach = `import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import { ButtonVariant } from './../Button/Button';

const variants = Object.keys(ButtonVariant);

describe('Button', () => {
  test.each(variants)(
    'renders %s correctly',
    (variant) => {
      const tree = renderer
        .create(<Button
          variant={variant as ButtonVariant}>
          Click me
        </Button>)
        .toJSON();

      expect(tree)
        .toMatchSnapshot();
    }
  );
});`;

  return (
    <div className={styles.post}>
      <ProgressScroll />
      <section ref={heroRef}>
        <Hero
          size={HeroSize.HALF}
          variant={HeroVariant.VIOLET}>
          <div className='marquee'>
            This is a sign<br/>
            to start testing
          </div>
        </Hero>
      </section>
      <article ref={postRef}>
        <PostLayout
          title={title}
          highlight={highlight}
          category='tutorial'
          date='16 dec, 2022'
          tags={['React', 'TypeScript', 'Jest', 'testing']}
          metaTags={metaTags}
          metaDescription={metaDescription}>
          <TableOfContents items={tableOfContents} />
          <section ref={whatIsJestRef}>
            <h2 className='spacer top large'>What is Jest?</h2>
            <p>
              There are many different ways of testing, in particular React applications.
              For instance, you can use{' '}
              <ExternalLink
                label='React Testing Library'
                href='https://github.com/testing-library/react-testing-library' />
              {' '}or{' '}
              <ExternalLink
                label='Enzyme'
                href='https://enzymejs.github.io' />
              {' '}for these purposes.
              In this article we&#39;ll focus on tests using Jest in pair with{' '}
              <ExternalLink
                label='Test Renderer'
                href='https://reactjs.org/docs/test-renderer.html' />{' '}package (<code>react-test-renderer</code>)
            </p>
            <p>
              Jest is a popular JavaScript testing framework which works with projects using React, Angular, Vue, etc.
              Initially, Jest was created by Facebook specifically for testing React applications.
              It&#39;s one of the most popular framework for testing React components.
              Thus, Jest can be easily integrated with React, that&#39;s why my choice fell on it.
            </p>
          </section>
          <section ref={prerequisitesRef}>
            <h2>Prerequisites</h2>
            <p>
              Let&#39;s begin by installing the required libraries and setting up the project.
              You can create a sample project for testing in any convenient way (e.g. by using{' '}
              <ExternalLink
                label='Create React App'
                href='https://create-react-app.dev/' />){' '}
              or implement it in already existing project, there are no any restrictions or requirements.
            </p>
            <p>
              First, add Jest and other reqiured packages as a dev dependencies to the project.
              If your project based on mentioned above <code>create-react-app</code>, you&#39;ll only need to add <code>react-test-renderer</code> because Jest is already included out of the box in <code>create-react-app</code>:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={installCommandShort} />
                </div>
              </div>
            </div>
            <p className='spacer top medium'>
              If you have an existing application, as in my case, you&#39;ll need to install a few packages to make everything work well together:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={installCommandFull} />
                </div>
              </div>
            </div>
            <p>
              We install the <code>@types/jest</code> package to provide types for Jest globals without a need to import them.
              Without this package you have to import globals as in the example below in all test files:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={importJestGlobals} />
                </div>
              </div>
            </div>
            <p className='spacer top large'>
              After installing required packages, add a new npm script to your <span className='highlighted ghost'>package.json</span> to make tests runnable:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={runScript} />
                </div>
              </div>
            </div>
            <p className='spacer top large'>
              Here&#39;s my <span className='highlighted ghost'>package.json</span>:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={packageJsonFile} />
                </div>
              </div>
            </div>
            <p className='spacer top medium'>
              Make sure you are using the same version of <i>react</i> and <i>react-test-renderer</i>.
              Otherwise you&#39;ll end up with a confusing TypeScript error such as <span className='highlighted secondary'>cannot read properties of undefined</span> (as it has happened with me).
            </p>
            <p>
              Pay attention, Jest doesn&#39;t require any configuration to find test files.
              It goes through the whole project and looks for files that look like they&#39;re tests, for example files with <code>.test.*</code> extension.
              For your convenience, tests can be organized into special <code>__tests__</code> folder under a top-level src directory.
              We&#39;ll get to that below.
            </p>
            <p className='spacer top medium'>
              Now we can run this command to fire up Jest and run all tests:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={runCommand} />
                </div>
              </div>
            </div>
            <p>
              Let&#39;s run it to make sure nothing has broken yet because there&#39;re no test yet:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={noTestsResultExample} />
                </div>
              </div>
            </div>
            <div className={styles.post__gallery}>
              <Window
                type={WindowType.IMAGE}
                title='GALLERY'
                fileTitle='meme.jpg'>
                <div className={styles.post__meme}>
                  <Image
                    layout='responsive'
                    src={meme}
                    alt='Roll Safe meme with text: tests cannot fail if there are no test' />
                </div>
              </Window>
            </div>
          </section>
          <section ref={introductionToJestRef}>
            <h2>Introduction to Jest</h2>
            <p>
              Before testing we should take a look at some Jest basics.
              There are a few key concept which you need to know before diving in.
              Jest comes with three different built-in blocks for organizing tests.
              The most important are:
            </p>
            <ul className='list markered'>
              <li className='list__item'>
                <span className='list__title'>describe()</span>
              </li>
              <li className='list__item'>
                <span className='list__title'>test()</span>
              </li>
              <li className='list__item'>
                <span className='list__title'>it()</span>
              </li>
            </ul>
            <p>
              Method <code>describe()</code> creates a block that groups together several related tests.
              Whenever you start writing your test files from an empty file you may start with <code>describe()</code>.
              However, starting with <code>describe()</code> is not necessarily.
              The describe block may contain other different blocks that will be mentioned below.
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={describeExample} />
                </div>
              </div>
            </div>
            <p className='spacer top large'>
              You can nest <code>describe()</code> blocks into each other to further break down your tests and improve readability if needed.
              Meanwhile, nested blocks do not depend on each other to run.
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={nestedDescribeExample} />
                </div>
              </div>
            </div>
            <p className='spacer top large'>
              Method <code>test()</code>, as you can guess, runs a test, and method <code>it()</code>is just an alias of <code>test()</code>.
              Yep, it&#39;s confusing, but <code>test()</code> and <code>it()</code> are interchangeable according to the official API of Jest.
              You can use either of these.
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={testExample} />
                </div>
              </div>
            </div>
            <p className='spacer top large'>
              To run only one test with Jest, add <code className='accented accented--primary'>only()</code> after block name.
              This applies to <code>test()</code> as well as to its alias <code>it()</code>.
              In the example below the first test will be the only test that runs, and the second test will not run:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={onlyExample} />
                </div>
              </div>
            </div>
            <p className='spacer top large'>
              Another way to focus on some tests is replacing <code>it()</code> with <code>xit()</code> to temporarily exclude a test from being executed.
              Similarly, <code>fit()</code> lets focus on a specific test without running any other tests.
            </p>
            <p className='spacer top large'>
              Moreover, there are a few of useful methods in Jest which will be worth a lot in the future:
            </p>
            <ul className='list markered'>
              <li className='list__item'>
                <span className='list__title'>beforeEach()</span>
              </li>
              <li className='list__item'>
                <span className='list__title'>beforeAll()</span>
              </li>
              <li className='list__item'>
                <span className='list__title'>afterEach()</span>
              </li>
              <li className='list__item'>
                <span className='list__title'>afterAll()</span>
              </li>
              <li className='list__item'>
                <span className='list__title'>each()</span>
              </li>
            </ul>
            <p>
              Let&#39;s quickly go through all of them.
            </p>
            <p>
              If you have some tests you need to do repeatedly for many times, you can use <code>beforeEach()</code> and <code>afterEach()</code>. <code>beforeEach()</code> runs before any other block and <code>afterEach()</code> runs after, respectively.
              For example, if you need to initialize something before testing and reset some things immediately after, you can do this with following:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={beforeAfterEachExample} />
                </div>
              </div>
            </div>
            <p>
              In the example above, initializing will be called before each of these two tests, and reset method will be called after each of them.
            </p>
            <p>
              In some cases, the opposite situation is also possible when you only need to do something once at the beginning of a test file.
              Jest provides <code>beforeAll()</code> and <code>afterAll()</code> blocks to handle this.
              In the example below, initializing will be called before all of tests, and reset method will be called after all of them:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='Component.test.tsx'
                    code={beforeAfterAllExample} />
                </div>
              </div>
            </div>
            <p>
              There are some situation, when we need to write similar tests.
              For example, you may need to check all possible variants of a component property.
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    language={CodeLanguage.TYPESCRIPT}
                    customName='Button.test.tsx'
                    code={withoutEachExample} />
                </div>
              </div>
            </div>
            <p>
              The only difference between the two tests below are the variant of button.
              To avoid repetition, you can use <code>each()</code> that will alow to reduce all these tests into one.
              Using <code>each()</code> block, tests could be rewritten like this:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    language={CodeLanguage.TYPESCRIPT}
                    customName='Button.test.tsx'
                    code={eachExample} />
                </div>
              </div>
            </div>
            <p className='spacer top arge'>
              At last, but not least, writing tests is impossible without <code>expect()</code>.
              This method in most cases is used with its matchers.
              There are a lot of matchers: <code>toBe()</code>, <code>toEqual()</code>, <code>toContain()</code>, etc.
              You can find full list of Jest matchers in its <ExternalLink href='https://jestjs.io/docs/expect' label='documenation' />.
              Below we will consider a couple of them in more detail.
            </p>
            <p>
              Let&#39;s not stray too far, in Jest{' '}
              <ExternalLink
                href='https://jestjs.io/docs/api'
                label='documentation' />
              {' '}you can find more information about its API.
            </p>
          </section>
          <section ref={snapshotTestingRef}>
            <h2>Snapshot testing</h2>
            <p>
              Finally, let&#39;s the tests!
              We&#39;ll create a snapshot test for a small component.
              Based on that you will be able to create tests for other components in a similar way.
            </p>
            <p>
              Snapshot testing is popular use case.
              In the process of snapshot testing, as the name suggests, renders a UI component and then takes a snapshot to compare it to a reference snapshot file stored alongside the test.
              The test will fail if these two snapshots do not match to each other.
              What is the difference between snapshots and visual testing?
              Visual testing requires building the entire application.
              But instead you can use a test renderer to quickly generate snapshots for specific components.
              All generated snapshots you will find in your <code>__tests__</code> directory in folder <code>__snapshots__</code>.
            </p>
            <p>
              To create test just add <code>code()</code> or <code>it()</code> blocks with the name of the test and its code.
              You can optionally wrap them in <code>describe()</code> blocks for logical grouping but this not strict required.
            </p>
            <p>
              Let&#39;s test a top-level React component <HtmlTag isSingle>App /</HtmlTag>.
              This will be the easiest test to check correct rendering without crashing.
              To test we&#39;ll <code>App.test.jsx</code> file in the <code>__tests__</code> folder and with the following code:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='App.test.tsx'
                    code={testAppExample} />
                </div>
              </div>
            </div>
            <p>
              If you are using JSX in your Jest test files, you&#39;ll need to add the following import line to the top of the file:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={reactImportExample} />
                </div>
              </div>
            </div>
            <p>
              The reason for this is that Babel transforms the JSX syntax into a series of <code>React.createElement()</code> calls, and if you fail to import React, those will fail.
            </p>
            <p>
              The test above mounts <HtmlTag isSingle>App /</HtmlTag> component and makes sure that it didn&#39;t throw during rendering.
              Let&#39;s find out what&#39;s going on the code above.
              Method <code>create()</code> create a Test Renderer instance with the passed React element, in this case <HtmlTag isSingle>App /</HtmlTag> component.
              Then <code>toJSON()</code> return an object representing the rendered tree.
              After that we should use mentioned above <code>expect</code>.
              It has a lot matchers, that let validate different things.
              One of this matchers is <code>toMatchSnapshot</code> that ensures that a value matches the most recent snapshot.
            </p>
            <p>
              If you run test command after adding <HtmlTag isSingle>App /</HtmlTag> test you&#39;ll see the following output in your terminal:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={testAppTerminalExample} />
                </div>
              </div>
            </div>
            <p>
              Also you will find a new file in <code>__snapshots__</code> folder.
              This file will contain code below that is called <code>snapshot</code>:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={testAppSnapshotExample} />
                </div>
              </div>
            </div>
            <p>
              If you run test again without changing test file, you&#39;ll get the following output:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={testAppTerminalSecondExample} />
                </div>
              </div>
            </div>
            <p>
              As you can see, there is not snapshot summary.
              That&#39;s because there are no changes in snapshots.
              Let&#39;s change something in  <HtmlTag isSingle>App /</HtmlTag> component and run test command again.
              I&#39;ve just changed component template and added a new <HtmlTag isSingle>h1</HtmlTag> element:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    customName='App.jsx'
                    code={testAppHeadingExample} />
                </div>
              </div>
            </div>
            <p>
              Now Jest will print this output:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={testAppFailedExample} />
                </div>
              </div>
            </div>
            <p>
              This snapshot test failed because the snapshot for updated component no longer matches a snapshot artifact for this test case.
              To resolve this, we will need to update the snapshot artifacts.
              To do this you can run Jest with special flag that will tell it to re-generate snapshots. Note extra -- in the middle of the command.
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={updateSnapshotCommand} />
                </div>
              </div>
            </div>
            <p>
              This command will re-generate snapshot artifacts for all failing snapshot tests.
              Let&#39;s complicate a task and create a new component <HtmlTag isSingle>Button /</HtmlTag>:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    language={CodeLanguage.TYPESCRIPT}
                    customName='Button.jsx'
                    code={buttonComponentExample} />
                </div>
              </div>
            </div>
            <p>
              You may have noticed, there&#39;s a property <code>variant</code>, that may have one of a certain value: <code>INFO</code>, <code>SUCCESS</code>, <code>WARNING</code> or <code>ERROR</code>
              <button
                className={styles.post__anchor}
                onClick={onScrollToNote}>
                *
                <span className='visually-hidden'>Scroll to note</span>
              </button>.
              To test all of this button variants we can write the following test in a file <code>Button.test.tsx</code>:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    language={CodeLanguage.TYPESCRIPT}
                    customName='Button.test.tsx'
                    code={buttonWithoutEach} />
                </div>
              </div>
            </div>
            <p>
              Well, so far it doesn&#39;t look that bad, but if you add a new property, that may have one of an another certain value, you&#39;ll{' '}
              <ExternalLink
                href='https://thevaluable.dev/dry-principle-cost-benefit-example/'
                label='repeat yourself' />.
              There&#39;s a simple solution, that we&#39;ve already mentioned above: <code>each()</code>.
              Take a look at how amazing test looks after refactoring:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Code
                    language={CodeLanguage.TYPESCRIPT}
                    customName='Button.test.tsx'
                    code={buttonWithEach} />
                </div>
              </div>
            </div>
            <p>
              It looks much better!
            </p>
            <p
              ref={noteRef}
              className='note spacer top medium'>
              <span className='note__title accented accented--primary'>Note:</span> I&#39;ve used CSS framework{' '}
              <ExternalLink
                label='Bulma'
                href='https://bulma.io/' />
              {' '}in this example project. Used above <code>is-info</code>, <code>is-success</code>, etc are Bulma CSS classes for buttons.
            </p>
          </section>
          <section ref={handlingAssetsRef}>
            <h2>Handling assets</h2>
            <p>
              If you&#39;re using any static files in your project, e.g. images, you&#39;ll probably face with an configuration error in the process of running tests:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={assetsError} />
                </div>
              </div>
            </div>
            <p>
              Let&#39;s configure Jest to handle asset files.
              Usually, asset files aren&#39;t useful in tests so we can safely mock them out like this in <code>jest.config.js</code>:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={jestConfigExample} />
                </div>
              </div>
            </div>
            <p>
              Then create folder <code>__mocks__</code> under a top-level src directory and add the following file in this folder:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={mockFileExample} />
                </div>
              </div>
            </div>
            <p>
              That&#39;s all! Now this assets problem must be solved.
            </p>
          </section>
          <section ref={coverageReportingRef}>
            <h2>Coverage reporting</h2>
            <p>
              Code coverage makes possible to spot untested paths in your code.
              Jest has an integrated coverage reporter that requires no configuration.
              Run the following command to include a coverage report like this.
              Again note extra <code>--</code> in the middle of the command.
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={coverageCommand} />
                </div>
              </div>
            </div>
            <p>
              After running this command you&#39;ll see test coverage report in the output:
            </p>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--100 col--tablet-100'>
                  <Example code={coverageReportExample} />
                </div>
              </div>
            </div>
            <p>
              Recommended to run coverage test separately from your normal workflow because it runs much slower.
            </p>
          </section>
          <section ref={conclusionRef}>
            <h2>Conclusion</h2>
            <p>
              Testing doesn&#39;t hurt.
            </p>
            <p>
              The full source code for this article can be found in  this <ExternalLink href='' label='Github repository' />.
            </p>
          </section>
          <ReadMore items={sources} />
        </PostLayout>
      </article>
    </div>
  );
};

export default Post;
