import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Accordion from 'src/components/common/Accordion';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Example from 'src/components/common/Example';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';
import callbackHell from 'public/assets/blog/frontend-in-a-nutshell/javascript/callback-hell.jpg';

const  Callbacks = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleSetTimeout = `setTimeout(() => {
  console.log('yay');
}, 1000);`;

  return (
    <Accordion title='Callbacks'>
      <p>
        A callback is a function that is passed inside another function, and then called in that function to perform a task.
        You&#39;ve already faced with callbacks.
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleSetTimeout} />
        </div>
      </div>
      <p className='spacer top medium'>
        The <code>setTimeout()</code> is a JavaScript function that takes two parameters: an another function and time in milliseconds after which that function should be executed.
        So <code>console.log(&#39;yay&#39;)</code> is actually the callback in the example above.
      </p>
      <p className='spacer bottom medium'>
        Using callbacks was very efficient, but only to a certain point (e.g. using synchronous callbacks is still normal practice) and now using asynchronous callbacks is a bad practice.
        If synchronous callbacks are ways to achieve greater programming flexibility, then asynchronous callbacks are ways to achieve greater performance and user experience.
        The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.
      </p>
      <div className={styles.post__image}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='callback-hell.jpg'>
          <Image
            layout='responsive'
            src={callbackHell}
            alt='Callback hell' />
        </Window>
      </div>
      <p className='spacer top large'>
        To fix this problem <em>promises</em> were introduced.
      </p>
    </Accordion>
  );
};

export default  Callbacks;
