import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Example from 'src/components/common/Example';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';

const ArraysMethods = (): ReactElement => {
  const exampleIsArray = `const something = ['yay', 'qeq', 'uou'];

console.log(Array.isArray(something));`;

  const resultIsArray = '> true';

  const exampleIncludes = `const something = ['yay', 'qeq', 'uou'];

console.log(something.includes(42));
console.log(something.includes('yay'));`;

  const resultIncludes = `> false
> true`;

  const exampleIndexOf = `const something = ['yay', 'qeq', 'uou'];

console.log(something.indexOf(42));
console.log(something.indexOf('yay'));
console.log(something.indexOf('uou'));`;

  const resultIndexOf = `> -1
> 0
> 2`;

  const exampleLastIndexOf = `const something = ['yay', 'qeq', 'uou', 'yay', 'kek'];

console.log(something.lastIndexOf(42));
console.log(something.lastIndexOf('yay'));`;

  const resultLastIndexOf = `> -1
> 3`;

  const exampleMap = `const something = ['yay', 'qeq', 'uou', 'yay', 'kek'];

const somethingElse = something.map((item) => {
  console.log('do something with: ', item);

  return item.toUpperCase();
});

console.log(something);
console.log(somethingElse);`;

  const resultMap = `> "do something with: yay"
> "do something with: qeq"
> "do something with: uou"
> "do something with: yay"
> "do something with: kek"
> ["yay","qeq","uou","yay","kek"] // something
> ["YAY","QEQ","UOU","YAY","KEK"] // somethingElse `;

  const exampleMapUndefined = `const something = ['yay', 'qeq', 'uou', 'yay', 'kek'];

const somethingElse = something.map((item) => {
  console.log('do something with: ', item);
});

console.log(something);
console.log(somethingElse);`;

  const resultMapUndefined = `> "do something with: yay"
> "do something with: qeq"
> "do something with: uou"
> "do something with: yay"
> "do something with: kek"
> ["yay","qeq","uou","yay","kek"] // something
> [undefined, undefined, undefined, undefined, undefined] // somethingElse`;

  const exampleFilter = `const something = [7, 16, 10, 42];

const somethingElse = something.filter((item) => {
  return item >= 42;
});

console.log(something);
console.log(somethingElse);`;

  const resultFilter = `> [7, 16, 10, 42]
> [42]`;

  const exampleForEach = `const something = ['yay', 'qeq', 'uou', 'yay', 'kek']

const somethingElse = something.forEach((item) => {
  console.log(item);
});

console.log(something);
console.log(somethingElse);`;

  const resultForEach = `> "yay"
> "qeq"
> "uou"
> "yay"
> "kek"
> ["yay","qeq","uou","yay","kek"] // something
> undefined // somethingElse`;

  return (
    <Accordion title='Arrays methods'>
      <p>
        Let&#39;s see the list of JavaScript array methods and that they do:
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <div className='list__title'>
            <code>isArray()</code>
          </div>
          <p>
            It tests if the given array is an array:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleIsArray} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultIsArray} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>includes()</code>
          </div>
          <p>
            It checks whether the given array contains the specified element:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleIncludes} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultIncludes} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>indexOf()</code>
          </div>
          <p>
            It searches the specified element in the given array and returns the index of the first match:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleIndexOf} />
              </div>
            </div>
          </div>
          <p className='spacer top medium'>
            It returns <code>-1</code> value if the given element not present in the array.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultIndexOf} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>lastIndexOf()</code>
          </div>
          <p>
            It&#39;s similar to <code>indexOf</code>, but it searches the specified element in the given array and returns the index of the last match:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleLastIndexOf} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultLastIndexOf} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>map()</code>
          </div>
          <p>
            It&#39;s probably one of the most popular methods in JavaScript - the <code>map()</code> method.
            It calls the specified function for every array element and returns the new array:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleMap} />
              </div>
            </div>
          </div>
          <p>
            In the code snippet above every element of the array converted to uppercase.
            This method is a copying method: the original array remains the same.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultMap} />
              </div>
            </div>
          </div>
          <p>
            If nothing is returned in an callback function it will automatically return <code>undefined</code> value:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleMapUndefined} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultMapUndefined} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>filter()</code>
          </div>
          <p>
            It&#39;s probably another one of the most popular methods in JavaScript - the <code>filter()</code> method.
            It&#39;s similar to the <code>map()</code> method mentioned above.
            It returns the new array containing the elements that pass the provided <strong>condition</strong>.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleFilter} />
              </div>
            </div>
          </div>
          <p>
            In the code snippet above every element of the array converted to uppercase.
            This method is also a copying method: the original array remains the same.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultFilter} />
              </div>
            </div>
          </div>
          <p>
            An empty array will be returned if no elements pass the condition.
          </p>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>forEach()</code>
          </div>
          <p>
            It&#39;s similar to the <code>map()</code> method mentioned above.
            The difference between these two methods is that the <code>map()</code> creates a new array:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleForEach} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100 col--tablet-100'>
                <Example code={resultForEach} />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Accordion>
  );
};

export default ArraysMethods;
