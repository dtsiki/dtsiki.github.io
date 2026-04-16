import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { Accordion } from 'src/components/common/Accordion';
import { ECodeLang } from 'src/components/common/Code/Code.types';

export const Hoisting = () => {
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

  const exampleHoistingArrowFunctionResult =
    "> ReferenceError: can't access lexical declaration 'doSomething' before initialization";

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
      <p>Below is an example of classical hoisting. Here you can see calling a function before defining it.</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleHoisting} />
      <p>
        In the terminal you will find the following output after executing this code snippet. Everything works fine. But
        how?
      </p>
      <ExampleSnippet code={exampleHoistingResult} />
      <p className='spacer top medium'>
        The reason is hoisting. Hoisting is a JavaScript mechanism where variables and function{' '}
        <strong>declarations</strong> are moved to the top of their scope before code execution. Javascript statements
        are executed in the order they appear. In other words, JavaScript executes code from top to bottom. That is
        until hoisting get involved into game. Function declaration statements are always hoisted to their containing
        scope, so their functions exist even before the statements appear. But any statements that operate on a function
        still run in normal order. Unfortunately, it doesn&#39;t apply to anonymous functions or arrow functions because
        we cannot call them before initialization:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleHoistingArrowFunction} />

      <p>
        In the terminal you will find the following output after executing the code snippet above. We will get exactly
        the same result for arrow function with <code>let</code> keyword.
      </p>
      <ExampleSnippet code={exampleHoistingArrowFunctionResult} />
      <p className='spacer top medium'>
        But there is trick for <code>var</code> arrow function:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleHoistingVarArrowFunction} />
      <ExampleSnippet code={exampleHoistingVarArrowFunctionResult} />
      <p className='spacer top medium'>
        Why that happened? Variable declarations using <code>var</code> keyword are also hoisted, are not? This occurs
        because variable assignments actually are not hoisted. The <code>var doSomething</code> variable will contain{' '}
        <code>undefined</code> until the line of code that does the assignment is executed. In other words, the code
        snipper below is equal the code snippet above:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleHoistingVarArrowFunctionReality} />
      <ExampleSnippet code={exampleHoistingVarArrowFunctionRealityResult} />
    </Accordion>
  );
};
