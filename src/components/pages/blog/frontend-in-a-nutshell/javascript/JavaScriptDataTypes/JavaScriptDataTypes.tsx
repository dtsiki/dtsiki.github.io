import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';
import everythingIsObject from 'public/assets/blog/frontend-in-a-nutshell/javascript/everything-is-object.png';

const JavaScriptDataTypes = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleTypeAssign = `let yay = 42;
yay = 'yay';
yay = true;`;

  const exampleTypeof = `console.log(typeof 'yay'); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"`;

  const exampleObject = `let yay = {
  id: 42,
  name: 'yay',
  isAwesome: true
};

console.log(typeof yay); // "object"`;

  const exampleArrayObject = `let awesomeArray = ['yay', 'qeq', 'uou'];

console.log(typeof awesomeArray); // "object"`;

  const exampleString = `let yay = 'Yay!';

console.log(typeof yay); // "string"`;

  const exampleNumber = `let yay = 42;
let qeq = 42.42;

console.log(typeof yay); // "number"
console.log(typeof qeq); // "number"`;

  const exampleBigInt = `let yay = 42n;

console.log(typeof yay); // "bigint"`;

  const exampleBoolean = `let isAwesome = true;

console.log(typeof isAwesome); // "boolean"`;

  const exampleSymbol = `let yay = Symbol('✨');
let qeq = Symbol('✨');

console.log(yay === qeq); // false
console.log(yay === qeq); // false

console.log(typeof yay); // "symbol";
console.log(typeof qeq); // "symbol";`;

  return (
    <Accordion title='What are data types in JavaScript?'>
      <p>
        First at all, JavaScript is a dynamic language with dynamic types.
        Variables are not directly associated with any type and can be assigned or reassigned at any moment.
        In the example below a variable <code>yay</code> was initialized with one type, then it was reassigned twice by modifying the value.
        What are these types?
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleTypeAssign} />
        </div>
      </div>
      <p className='spacer top medium'>
        There are only two kind of data types in JavaScript: primitive and reference data types.
        Primitive types are pretty simple as the name suggests.
        They are so simple that they don&#39;t have methods.
        Wait, stop - you might say, strings actually have methods!
        In fact, JavaScript converts primitive types to objects (it&#39;s called <em>Object wrapper</em>), so this is why it is possible to use string object methods.
      </p>
      <div className='note spacer bottom large'>
        <div className='note__title'>typeof operator</div>
        <p>
          We can use <code>typeof</code> operator to find the data type of JavaScript variables.
          If we use this operator along with each of primitive type, it will return a type of the same name:
        </p>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleTypeof} />
          </div>
        </div>
      </div>
      <p>
        There are 7 primitive types in JavaScript:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>
            string
          </div>
          <div className='list__footer spacer bottom medium'>
            represents any textual data
          </div>
          <div className='row'>
            <div className='col col--100'>
              <Code
                language={CodeLanguage.JAVASCRIPT}
                name='index'
                code={exampleString} />
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            number
          </div>
          <div className='list__footer spacer bottom medium'>
            represents an integer or a floating-point number
          </div>
          <div className='row'>
            <div className='col col--100'>
              <Code
                language={CodeLanguage.JAVASCRIPT}
                name='index'
                code={exampleNumber} />
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            bigInt
          </div>
          <div className='list__footer spacer bottom medium'>
            represents an integer with arbitrary precision
          </div>
          <div className='row'>
            <div className='col col--100'>
              <Code
                language={CodeLanguage.JAVASCRIPT}
                name='index'
                code={exampleBigInt} />
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            boolean
          </div>
          <div className='list__footer spacer bottom medium'>
            represents one of two values: true or false
          </div>
          <div className='row'>
            <div className='col col--100'>
              <Code
                language={CodeLanguage.JAVASCRIPT}
                name='index'
                code={exampleBoolean} />
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            symbol
          </div>
          <div className='list__footer spacer bottom medium'>
            represents a unique identifier. Every symbol has its own identity and will never be equal even if they have same name
          </div>
          <div className='row'>
            <div className='col col--100'>
              <Code
                language={CodeLanguage.JAVASCRIPT}
                name='index'
                code={exampleSymbol} />
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            null
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            undefined
          </div>
        </li>
      </ol>
      <p>
        The difference between <code>null</code> and <code>undefined</code> data types is barely perceptible and deserves special attention that you can find in the section below.
      </p>
      <p>
        All these types, except <code>null</code> and <code>undefined</code>, have their corresponding object wrapper types or class, for example: <code>number</code> - <code>Number</code>, <code>string</code> - <code>String</code>, etc.
        As a result, these object wrappers provide us methods for primitive types, for exampe <code>toUpperCase()</code> for numbers or <code>toLowerCase()</code> for strings.
      </p>
      <p className='spacer top medium'>
        And, last but not least, objects are JavaScript data types.
        While primitive types can contain only a single thing, objects are used to store collections of key-value pairs.
        <code>typeof object</code> command always returns <code>object</code>.
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleObject} />
        </div>
      </div>
      <p className='spacer top medium'>
        Arrays in JavaScript are a special type of objects. <code>typeof</code> operator in JavaScript also returns <code>object</code> for arrays:
      </p>
      <div className={bind(['row spacer bottom medium'])}>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleArrayObject} />
        </div>
      </div>
      <p className='spacer bottom medium'>
        Thus, almost everything in JavaScript is an object.
        In fact, only six things are not objects: null , undefined , strings, numbers, boolean, and symbols.
        Object wrappers, thanks for that!
      </p>
      <div className={bind([styles.post__image, 'spacer bottom large'])}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='THIS-IS-AN-OBJECT!.jpg'>
          <Image
            layout='responsive'
            src={everythingIsObject}
            alt='Sparta meme but everything is an object in JavaScript' />
        </Window>
      </div>
    </Accordion>
  );
};

export default JavaScriptDataTypes;
