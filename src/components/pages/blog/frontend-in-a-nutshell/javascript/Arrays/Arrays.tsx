import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Example from 'src/components/common/Example';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';

const Arrays = (): ReactElement => {
  const exampleSimpleArray = `const something = ['yay', 'qeq', 'uou'];

console.log(typeof something);`;

  const resultSimpleArray = '> "object"';

  const exampleEmptyArray = `const something = [];
console.log(something);

something[0]= 'yay';
something[1]= 'qeq';
something[2]= 'uou';

console.log(something);`;

  const resultEmptyArray = `> []
> ["yay","qeq","uou"]`;

  const exampleNewKeywordArray = 'const something = new Array(\'yay\', \'qeq\', \'uou\');';

  const exampleMixedDataTypesArray = 'const something = new Array(\'yay\', 42, true);';

  const exampleIndexes = `const something = ['yay', 'qeq', 'uou'];

console.log(something[0]);
console.log(something[1]);
console.log(something[2]);
console.log(something[3]);
`;

  const resultIndexes = `> "yay"
> "qeq"
> "uou"
> undefined`;

  const exampleAddNewElement = `const something = ['yay', 'qeq', 'uou'];

console.log(something);

something[3] = 'kek';

console.log(something);`;

  const resultAddNewElement = `> ["yay","qeq","uou"]
> ["yay","qeq","uou", "kek"]`;

  const exampleLength = `const something = ['yay', 'qeq', 'uou'];

console.log(something.length);`;

  const resultLength = '> 3';

  return (
    <Accordion title='Arrays'>
      <p>
        In JavaScript arrays are objects that represent a collection of elements:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleSimpleArray} />
          </div>
        </div>
      </div>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultSimpleArray} />
          </div>
        </div>
      </div>
      <p>
        There are two ways to create an array:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>
            using an array literal <code>[]</code>:
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleSimpleArray} />
              </div>
            </div>
          </div>
          <p>
            It&#39;s apparent to create an empty array and then provide the elements:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleEmptyArray} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultEmptyArray} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            using the <code>new</code> keyword:
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleNewKeywordArray} />
              </div>
            </div>
          </div>
        </li>
      </ol>
      <p className='note spacer top medium'>
        <span className='note__title'>Note: </span>
        it&#39;s a common practice to declare arrays with <code>const</code> keyword.
      </p>
      <p className='spacer top medium'>
        JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleIndexes} />
          </div>
        </div>
      </div>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultIndexes} />
          </div>
        </div>
      </div>
      <p className='spacer top medium'>
        JavaScript arrays can be with mixed data types:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleMixedDataTypesArray} />
          </div>
        </div>
      </div>
      <p className='spacer top medium'>
        JavaScript arrays can be with mixed data types:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleMixedDataTypesArray} />
          </div>
        </div>
      </div>
      <p className='spacer top medium'>
        JavaScript arrays are resizable: we can dynamically add or remove its elements:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleAddNewElement} />
          </div>
        </div>
      </div>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultAddNewElement} />
          </div>
        </div>
      </div>
      <p className='spacer top medium'>
        To find the length of an array use the <code>length</code> property:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleLength} />
          </div>
        </div>
      </div>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100 col--tablet-100'>
            <Example code={resultLength} />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Arrays;
