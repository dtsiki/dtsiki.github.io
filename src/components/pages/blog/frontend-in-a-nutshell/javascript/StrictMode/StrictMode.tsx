import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';

const StrictMode = (): ReactElement => {
  const exampleUseStrictModeGlobal = `"use strict";
...
...
...`;

  const exampleUseStrictModeFunction = `function doSomething() {
  "use strict";
  ...
  ...
  ...
}`;

  return (
    <Accordion title='Strict mode'>
      <p>
        Strict mode was introduced in ES5.
        This mode prevents certain actions from being taken and throws more exceptions.
        Strict mode makes several changes to normal JavaScript semantics.
      </p>
      <p>
        Strict mode can be used in two ways:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>
            For the entire script in global scope
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            For certain functions
          </div>
        </li>
      </ol>
      <p className='spacer top medium'>
        Along with this, strict mode doesn`&#39;t work with block statements enclosed in curly braces.
      </p>
      <p>
        To invoke strict mode for an entire script just put the following statement before any other statements:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleUseStrictModeGlobal} />
          </div>
        </div>
      </div>
      <p>
        To invoke strict mode for a function put the exact statement in the body of function before any other statements:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleUseStrictModeFunction} />
          </div>
        </div>
      </div>
      <p>
        Pay attention: the entire contents of JavaScript modules are automatically in strict mode.
        Also all parts of a class&#39;s body are strict mode code too.
      </p>
    </Accordion>
  );
};

export default StrictMode;
