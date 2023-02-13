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

const  AsynchronousJavaScript = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleSynchronousCode = `const yay = 'yay';
const qeq = 'qeq';
const yayQeq = \`$\{yay} $\{qeq}\`;`;

  const exampleAsyncMarkup = `<button onclick="doSomething()">
  Do something
</button>`;

  const exampleAsync = `setInterval(() => {
  console.log('yay');
}, 1000);

function doSomething() {
  console.log('qeq');
}`;

  const resultAsync = `> "yay"
> "yay"
> "yay"
> "qeq"
> "yay"
> "yay"`;

  return (
    <Accordion title='Asynchronous JavaScript'>
      <p>
        Synchronous programming is a programming model where operations take place sequentially step by step:
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleSynchronousCode} />
        </div>
      </div>
      <p className='spacer top medium'>
        This code above declares a string called <code>yay</code>, then declares a string called <code>qeq</code> and then declares another string called <code>yayQeq</code>, which uses <code>yay</code> and <code>qeq</code>.
        In other words, the browser steps through this code one line at a time in the order it was written.
      </p>
      <p>
        What if the synchronous function takes a long time?
        If any function will execute too long or will be <code>long-running</code>, the whole program can be completely unresponsive: you cannot type anything, click anything or do anything else.
        There are asynchronous functions to address this issue.
      </p>
      <p className='spacer bottom medium'>
        With asynchronous programming, JavaScript programs can start long-running tasks and continue running other tasks in paralell.
      </p>
      <div className={styles.post__image}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='async.jpg'>
          <Image
            layout='responsive'
            src={async}
            alt='Knock knock. Race condition. Who is there?' />
        </Window>
      </div>
      <p className='spacer top large'>
        Mentioned earlier <code>setTimeout()</code> and <code>setInterval()</code> methods are the only native functions of the JavaScript to execute code asynchronously.
        What does it mean?
        Asynchronous functions are not block the JavaScript main thread.
        Check out the example below. There is a button that do something.
        There is also inteval timer starts which executes <code>console.log()</code> once every second.
        If a non-asynchronous function were used in the example below we cannot click on this button: it would be blocked by execution of the non-asynchronous function.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-50 col--mobile-50'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleAsyncMarkup} />
          </div>
          <div className='col col--50 col--tablet-50 col--mobile-50'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleAsync} />
          </div>
        </div>
      </div>
      <p>
        But the asynchronous function <code>setInterval()</code> is used here and we can see the following output if we click on the button:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultAsync} />
          </div>
        </div>
      </div>
      <p>
        By default, JavaScript is a synchronous and single threaded programming language.
        What are we supposed to do, if we need to fetch some large amount of data from a backend and then display it on our web page?
        With the help of callbacks, <code>async/await</code> and promises, JavaScript is used to do asynchronous programming.
      </p>
    </Accordion>
  );
};

export default  AsynchronousJavaScript;
