import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Example from 'src/components/common/Example';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';

const Timers = (): ReactElement => {
  const exampleSetTimeout = `setTimeout(() => {
  console.log('yay');
}, 1000);`;

  const resultSetTimeout = '> "yay"';

  const exampleClearTimeoutMarkup = `<button onclick="clearTimeoutyay)">
  Stop
</button>`;

  const exampleClearTimeout = `setTimeout(() => {
  console.log('yay');
}, 1000);`;

  const examplSetInterval = `setInterval(() => {
  console.log('yay');
}, 1000);`;

  const resultSetInterval = `> "yay"
> "yay"
> "yay"
> "yay"
> "yay"
> "yay"
> "yay"`;

  const exampleClearIntervalMarkup = `<button onclick="clearInterval(yay)">
  Stop
</button>`;

  const exampleClearInterval = `setInterval(() => {
  console.log('yay');
}, 1000);`;

  const exampleSetTimeoutOrder = `console.log('yay');

setTimeout(() => {
  console.log('qeq');
}, 1000);

console.log('uou');`;

  const resultSetTimeoutOrder = `> "yay"
> "uou"
> "qeq"`;

  const exampleSetTimeoutOrderZeroDelay = `console.log('yay');

setTimeout(() => {
  console.log('qeq');
}, 0);

console.log('uou');`;

  const resultSetTimeoutOrderZeroDelay = `> "yay"
> "uou"
> "qeq"`;

  return (
    <Accordion title='Timers'>
      <p className='spacer bottom medium'>
        There are timers.
        A timer is created to execute any task at a particular time.
        Basically, the timer is used to delay the execution of the JavaScript code in a regular time interval.
      </p>
      <p className='note spacer bottom medium'>
        <span className='note__title'>
          Keep in mind:{' '}
        </span>
        The <code>setTimeout()</code> and <code>setInterval()</code> are both methods of the HTML DOM Window object, they are not part of JavaScript.
      </p>
      <p>
        There are two key methods to use timers:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>
            <code>setTimeout(function, milliseconds)</code>
          </div>
          <div className='list__footer'>
            It executes a function after waiting a specified number of milliseconds
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleSetTimeout} />
              </div>
            </div>
          </div>
          <p className='spacer top medium'>
            Wait 1 second and the following output will appear:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultSetTimeout} />
              </div>
            </div>
          </div>
          <p>
            Timeout timers can be cancelled using <code>clearTimeout()</code>:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code
                  language={CodeLanguage.HTML}
                  name='index'
                  code={exampleClearTimeoutMarkup} />
              </div>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleClearTimeout} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>setInterval(function, milliseconds)</code>
          </div>
          <div className='list__footer'>
            It also executes a function after waiting a specified number of milliseconds, but repeats the execution continuously, e.g., every X milliseconds.
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={examplSetInterval} />
              </div>
            </div>
          </div>
          <p className='spacer top medium'>
            The example executes <code>console.log()</code> once every second:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultSetInterval} />
              </div>
            </div>
          </div>
          <p>
            Interval timers can be cancelled using <code>clearInterval()</code>:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code
                  language={CodeLanguage.HTML}
                  name='index'
                  code={exampleClearIntervalMarkup} />
              </div>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleClearInterval} />
              </div>
            </div>
          </div>
        </li>
      </ol>
      <p className='spacer top medium'>
        A delay set with a timer is not a guaranteed thing.
        Let&#39;s experiment!
        In what order will be <code>console.log()</code> displayed after the execution of the code below?
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleSetTimeoutOrder} />
          </div>
        </div>
      </div>
      <p>
        It&#39;s quite easy: <code>console.log(&#39;qeq&#39;)</code> is delayed for a second and will execute last:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultSetTimeoutOrder} />
          </div>
        </div>
      </div>
      <p>
        But what if we change the delay from <code>1 second</code> to <code>0</code>?
        Well, it&#39;s possible to set a zero-delay, so why not?
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleSetTimeoutOrderZeroDelay} />
          </div>
        </div>
      </div>
      <p>
        This time the result doesn&#39;t seem so obvious, huh?
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultSetTimeoutOrderZeroDelay} />
          </div>
        </div>
      </div>
      <p className='spacer bottom large'>
        Yep, there are no mistakes in the output above.
        What does <code>setTimeout()</code> with a zero-delay delay do?
        The answer is that there is only one event queue in JavaScript which is a list of events to be processed.
        Despite the zero-delay, <code>setTimeout(0)</code> gets into the event queue and executes at the end of it.
        Check out section <em>Event loop</em> to read more about this concept.
      </p>
      <p className='note spacer bottom medium'>
        <span className='note__title'>
          Friendly reminder:{' '}
        </span>
        there are 1000 milliseconds in one second.
      </p>
    </Accordion>
  );
};

export default Timers;
