import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Accordion from 'src/components/common/Accordion';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';
import async from 'public/assets/blog/frontend-in-a-nutshell/javascript/async.png';
import Example from 'src/components/common/Example';

const  AsyncAwait = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleAsyncFunction = `async function doSomethingAsync() {
  // do something async here
}`;

  const exampleAsyncExpression = `const doSomethingAsync = async() => {
  // do something async here
};`;

  return (
    <Accordion title='Async and await'>
      <p>
        How to handle asynchronous code in JavaScript?
        One way is to use the <code>async</code> and <code>await</code> keywords which allow to write asynchronous code in a synchronous-looking style.
      </p>
      <p>
        To define an async function just add <code>async</code> keyword:
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleAsyncFunction} />
        </div>
      </div>
      <p className='spacer top medium'>
        Async functions may also be defined as expressions:
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleAsyncExpression} />
        </div>
      </div>
      <p>
        Async functions can contain zero or more <code>await</code> expressions.
        The <code>await</code> keyword make functions behave as though they&#39;re synchronous by suspending execution until the returned promise is fulfilled or rejected.
        That&#39;s why is calling an async function will always return a <code>Promise</code>.
      </p>
      <p className='note spacer top medium'>
        <span className='note__title'>
          Keep in mind:{' '}
        </span>
          the <code>await</code> keyword is only valid inside async functions. If use it outside of an async function, we will get a <code>SyntaxError</code>.
      </p>
    </Accordion>
  );
};

export default  AsyncAwait;
