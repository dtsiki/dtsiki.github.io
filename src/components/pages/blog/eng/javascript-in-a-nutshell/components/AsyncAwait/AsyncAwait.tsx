import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { Accordion } from 'src/components/common/Accordion';
import { ECodeLang } from 'src/components/common/Code/Code.types';

export const AsyncAwait = () => {
  const exampleAsyncFunction = `async function doSomethingAsync() {
  // do something async here
}`;

  const exampleAsyncExpression = `const doSomethingAsync = async() => {
  // do something async here
};`;

  return (
    <Accordion title='Async and await'>
      <p>
        How to handle asynchronous code in JavaScript? One way is to use the <code>async</code> and <code>await</code>{' '}
        keywords which allow to write asynchronous code in a synchronous-looking style.
      </p>
      <p>
        To define an async function just add <code>async</code> keyword:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleAsyncFunction} />

      <p className='spacer top medium'>Async functions may also be defined as expressions:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleAsyncExpression} />

      <p>
        Async functions can contain zero or more <code>await</code> expressions. The <code>await</code> keyword make
        functions behave as though they&#39;re synchronous by suspending execution until the returned promise is
        fulfilled or rejected. That&#39;s why is calling an async function will always return a <code>Promise</code>.
      </p>
      <p className='note spacer top medium'>
        <span className='note__title'>Keep in mind: </span>
        the <code>await</code> keyword is only valid inside async functions. If use it outside of an async function, we
        will get a <code>SyntaxError</code>.
      </p>
    </Accordion>
  );
};
