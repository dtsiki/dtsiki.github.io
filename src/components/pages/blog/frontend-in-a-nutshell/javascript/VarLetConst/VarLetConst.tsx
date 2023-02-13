import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Accordion from 'src/components/common/Accordion';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';
import constLetVar from 'public/assets/blog/frontend-in-a-nutshell/javascript/const-let-var.png';
import letOrVar from 'public/assets/blog/frontend-in-a-nutshell/javascript/let-or-var.png';

const VarLetConst = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleVar = `var yay = 42; // declared
yay = 'yay'; // updated

if (true) {
  yay = 'qeq'; // updated in block scope
  var isAwesome = true; // declared in block scope
}

console.log(isAwesome); // true - available in global scope
console.log(yay); // "qeq"`;

  const exampleLet = `let yay = 42; // declared
let = 'yay'; // updated

if (true) {
  yay = 'qeq'; // updated in block scope
  let isAwesome = true; // declared in block scope
}

console.log(isAwesome); // ReferenceError: isAwesome is not defined
console.log(yay); // "qeq"`;

  const exampleConstUpdating = `const yay = 42;
yay = 'yay'; // TypeError: invalid assignment to const 'yay'`;

  const exampleConst = `const yay = 42;

if (true) {
  yay = 'yay'; // TypeError: invalid assignment to const 'yay'
}`;

  const exampleConstScope = `if (true) {
  const yay = 'yay';
}

console.log(yay); // ReferenceError: yay is not defined`;

  const exampleConstObject = `const yay = {
  id: 13,
  name: 'qeq',
  isAwesome: false
}

console.log(yay.id, yay.name, yay.isAwesome); // 13 "qeq" false

yay.id = 42;
yay.name = 'yay';
yay.isAwesome = true;

console.log(yay.id, yay.name, yay.isAwesome); // 42 "yay" true`;

  return (
    <Accordion title='What is the difference between var, let, and const?'>
      <p>
        We can declare a variable using 3 keywords in JavaScript:
      </p>
      <div className='row row--centered row--centered-content spacer bottom medium'>
        {['var', 'let', 'const'].map((item) => (
          <div
            key={item}
            className='col col--33'>
            <div className='list__title'>
              {item}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.post__image}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='const-let-var.jpg'>
          <Image
            layout='responsive'
            src={constLetVar}
            alt='Three-headed dragon meme but const, let and var' />
        </Window>
      </div>
      <p className='spacer top medium'>
        Keyword <code>var</code> is used in all JavaScript code from 1995 to 2015 for variable declaration.
        One of the features that came with ES6 is the addition of <code>let</code> and <code>const</code>, which can be used for variable declaration.
      </p>
      <p>
        There is brief summary of var, let and const:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>
            <code>var</code>
          </div>
          <div className='list__footer'>
            <ul className='list markered'>
              <li className='list__item'>
                can be redeclared and updated
              </li>
              <li className='list__item'>
                global scoped
              </li>
              <li className='list__item'>
                doesn&#39;t exist in <em>temporal dead zone</em>
              </li>
            </ul>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleVar} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>let</code>
          </div>
          <div className='list__footer'>
            <ul className='list markered'>
              <li className='list__item'>
                can be only updated, not redeclared
              </li>
              <li className='list__item'>
                block scoped
              </li>
              <li className='list__item'>
                exist in <em>temporal dead zone</em>
              </li>
            </ul>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleLet} />
              </div>
            </div>
          </div>
        </li>
        <li className='list__item'>
          <div className='list__title'>
            <code>let</code>
          </div>
          <div className='list__footer'>
            <ul className='list markered'>
              <li className='list__item'>
                cannot be neither updated or redeclared
              </li>
              <li className='list__item'>
                block scoped
              </li>
              <li className='list__item'>
                exist in <em>temporal dead zone</em>
              </li>
            </ul>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleConstUpdating} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleConst} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleConstScope} />
              </div>
            </div>
          </div>
        </li>
      </ol>
      <p>
        But not so strict with <code>const</code> variables. Actually we can update them!
        The key-value pairs of an object declared using <code>const</code> can be updated directly, but the variable cannot be reassigned:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleConstObject} />
          </div>
        </div>
      </div>
      <div className={bind([styles.post__image, 'spacer top large'])}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='let-or-var.jpg'>
          <Image
            layout='responsive'
            src={letOrVar}
            alt='Meme with a guy with two buttons "let" and "var"' />
        </Window>
      </div>
      <p className='spacer top medium'>
        There is an unspoken rule: always declare variables with <code>const</code>.
        But if you think the value of the variable can change - use <code>let</code>.
        And never use <code>var</code>!
        But why?
        The problem lies in scope.
      </p>
    </Accordion>
  );
};

export default VarLetConst;
