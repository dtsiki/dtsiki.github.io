import { Accordion } from 'src/components/common/Accordion';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { PostImage } from 'src/components/blog/PostImage/PostImage';

import functions from 'public/assets/blog/frontend-in-a-nutshell/javascript/functions.jpg';

export const Functions = () => {
  const exampleFunctionDeclaration = `function doSomething() {
  console.log('yay');
}

doSomething();`;

  const exampleFunctionDeclarationReturn = `function getAnswerToLifeTheUniverseAndEverything() {
  return 42;
}

console.log(getAnswerToLifeTheUniverseAndEverything());`;

  const exampleFunctionDeclarationReturnResult = '> 42';

  const exampleHoisting = `doSomething();

function doSomething() {
  console.log('yay');
  console.log('qeq');
}`;

  const exampleHoistingResult = `> "yay"
> "qeq"`;

  const exampleFunctionExpression = `const doSomething = function() {
  console.log('yay');
};

doSomething();`;

  const exampleFunctionExpressionResult = '> "yay"';

  const exampleFunctionExpressionAssign = `const calculate = function getAnswerToLifeTheUniverseAndEverything() {
  return 42;
};

const result = calculate(); // 42
getAnswerToLifeTheUniverseAndEverything(); // ReferenceError: getAnswerToLifeTheUniverseAndEverything is not defined`;

  const exampleHoistingFunctionExpression = `doSomething();

var doSomething = function () {
  console.log('yay');
};`;

  const exampleHoistingFunctionExpressionResult = '> TypeError: doSomething is not a function ';

  const exampleFunctionExpressionIIFE = `(function () {
  console.log('Yay!');
})();`;

  const exampleArrowExpression = `const doSomething = () => {
  console.log('yay!');
}`;

  const exampleArrowExpressionShort = "const doSomething = () => console.log('yay!');";

  const exampleNestedFunctions = `function doSomething() {
  console.log('yay');

  function doSomethingElse() {
    console.log('qeq');
  }
}

doSomething();`;

  const exampleNestedFunctionsResult = `> "yay"
> "qeq"`;

  const exampleNestedIIFEFunctions = `(function () {
  console.log('yay');

  (function () {
    console.log('qeq');
  })();
})();`;

  const exampleNestedIIFEFunctionsResult = `> "yay"
> "qeq"`;

  return (
    <Accordion title='Functions'>
      <p>
        JavaScript provides functions similar to most of the languages. A function is a block of code designed to
        perform a particular task. All the functions in JavaScript can use arguments object by default or may not have
        any arguments.
      </p>
      <p>To create a function in JavaScript we can use different approaches:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>function declaration</div>
          <p>
            A function created with a function declaration is a <code>Function</code> object and has all its properties,
            methods and behavior of <code>Function</code> objects.
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleFunctionDeclaration} />
          <p>
            Functions declared with function declaration return <code>undefined</code> value by default. To return any
            other value, the function must have a return statement:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleFunctionDeclarationReturn} />

          <ExampleSnippet code={exampleFunctionDeclarationReturnResult} />
          <p>
            Furthermore, function declarations in JavaScript are hoisted to the top of the enclosing function or global
            scope:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleHoisting} />

          <p>
            In the terminal you will find the following output after executing this code snippet. As you can see, any
            statements that operate on a function still run in normal order.
          </p>
          <ExampleSnippet code={exampleHoistingResult} />
        </li>
        <li className='list__item'>
          <div className='list__title'>function expression</div>
          <p>
            A function expression is very similar to a function declaration. Here&#39;s the code snippet of an unnamed
            function declaration:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleFunctionExpression} />
          <ExampleSnippet code={exampleFunctionExpressionResult} />

          <p>
            The main difference between function expressions and function declarations is the function name: JavaScript
            allows to assign a function to a variable and then use that variable as a function:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleFunctionExpressionAssign} />

          <p>Function expressions, unlike function declarations, are not hoisted:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleHoistingFunctionExpression} />
          <ExampleSnippet code={exampleHoistingFunctionExpressionResult} />

          <p className='spacer top medium'>
            A function expression can be used as an IIFE or Immediately Invoked Function Expression which runs as soon
            as it is defined.
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleFunctionExpressionIIFE} />
        </li>
        <li className='list__item'>
          <div className='list__title'>arrow function expression</div>
          <p>An arrow function expression is a alternative to a regular function expression:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleArrowExpression} />

          <p className='spacer top medium'>Arrow functions can have a concise body:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleArrowExpressionShort} />

          <p>
            Arrow functions don&#39;t have their own bindings to <code>this</code>, <code>arguments</code>, or{' '}
            <code>super</code>. Also they should not be used as methods. Arrow functions cannot be used as constructors
            too. Calling them with new throws a <code>TypeError</code>.
          </p>
        </li>
      </ol>
      <PostImage
        fileTitle='javascript-is-awesome.jpg'
        src={functions}
        alt='Tuxedo Winnie The Pooh meme but JavaScript functions'
        maxWidth={600}
      />

      <p>Functions in JavaScript can be nested:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleNestedFunctions} />
      <ExampleSnippet code={exampleNestedFunctionsResult} />

      <p>This applies to all types of functions:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleNestedIIFEFunctions} />
      <ExampleSnippet code={exampleNestedIIFEFunctionsResult} />
    </Accordion>
  );
};
