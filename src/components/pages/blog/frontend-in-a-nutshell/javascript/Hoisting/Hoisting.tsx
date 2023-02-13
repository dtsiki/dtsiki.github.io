import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Example from 'src/components/common/Example';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';

const Hoisting = (): ReactElement => {
  const exampleHoisting = `doSomething();

function doSomething() {
  console.log('yay');
  console.log('qeq');
}`;

  const exampleHoistingResult = `> "yay"
> "qeq"`;

  const exampleHoistingArrowFunction = `doSomething();

const doSomething = () => {
  console.log('yay');
}`;

  const exampleHoistingArrowFunctionResult = '> ReferenceError: can\'t access lexical declaration \'doSomething\' before initialization';

  const exampleHoistingVarArrowFunction = `doSomething();

var doSomething = () => {
  console.log('yay');
}`;

  const exampleHoistingVarArrowFunctionResult = '> TypeError: doSomething is not a function';

  const exampleHoistingVarArrowFunctionReality = `doSomething();

var doSomething = undefined;`;

  const exampleHoistingVarArrowFunctionRealityResult = '> TypeError: doSomething is not a function';

  return (
    <Accordion title='Hoisting'>
      <p>
        Below is an example of classical hoisting.
        Here you can see calling a function before defining it.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleHoisting} />
          </div>
        </div>
      </div>
      <p>
        In the terminal you will find the following output after executing this code snippet.
        Everything works fine.
        But how?
      </p>
      <Example code={exampleHoistingResult} />
      <p className='spacer top medium'>
        The reason is hoisting.
        Hoisting is a JavaScript mechanism where variables and function <strong>declarations</strong> are moved to the top of their scope before code execution.
        Javascript statements are executed in the order they appear.
        In other words, JavaScript executes code from top to bottom.
        That is until hoisting get involved into game.
        Function declaration statements are always hoisted to their containing scope, so their functions exist even before the statements appear.
        But any statements that operate on a function still run in normal order.
        Unfortunately, it doesn&#39;t apply to anonymous functions or arrow functions because we cannot call them before initialization:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleHoistingArrowFunction} />
          </div>
        </div>
      </div>
      <p>
        In the terminal you will find the following output after executing the code snippet above. We will get exactly the same result for arrow function with <code>let</code> keyword.
      </p>
      <Example code={exampleHoistingArrowFunctionResult} />
      <p className='spacer top medium'>
        But there is trick for <code>var</code> arrow function:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleHoistingVarArrowFunction} />
          </div>
        </div>
      </div>
      <Example code={exampleHoistingVarArrowFunctionResult} />
      <p className='spacer top medium'>
        Why that happened? Variable declarations using <code>var</code> keyword are also hoisted, are not?
        This occurs because variable assignments actually are not hoisted.
        The <code>var doSomething</code> variable will contain <code>undefined</code> until the line of code that does the assignment is executed.
        In other words, the code snipper below is equal the code snippet above:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleHoistingVarArrowFunctionReality} />
          </div>
        </div>
      </div>
      <Example code={exampleHoistingVarArrowFunctionRealityResult} />
    </Accordion>
  );
};

export default Hoisting;
