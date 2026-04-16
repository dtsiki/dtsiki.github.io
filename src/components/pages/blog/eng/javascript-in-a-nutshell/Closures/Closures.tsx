import { Accordion } from 'src/components/common/Accordion';
import { PostImage } from 'src/components/blog/PostImage/PostImage';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

import closures from 'public/assets/blog/frontend-in-a-nutshell/javascript/closures.jpg';

export const Closures = () => {
  const exampleSimpleClosure = `let name = "yay";

function doSomething() {
  console.log("Hey, " + name);
}

name = "qeq";

doSomething();`;

  const resultSimpleClosure = '> "Hey, qeq"';

  const exampleTrickyClosure = `function doSomething() {
  let name = "yay";

  return function() {
    console.log(name);
  };
}

let name = "qeq";

let do = doSomething();

do();`;

  const resultTrickyClosure = '> "yay"';

  return (
    <Accordion title='Closures'>
      <p className='spacer bottom medium'>
        A closure is a function having access to the parent scope. In other words, a closure gives access to an outer
        function&#39;s scope from an inner function. In JavaScript, closures are created every time a function is
        created at function creation time. It might seem, at first, that closures are not so common, but:
      </p>
      <PostImage
        fileTitle='EVERYWHERE!.jpg'
        src={closures}
        alt='A toy story meme: Buzz is saying to Woddy that closures everywhere'
        maxWidth={500}
      />

      <p>An example of simple closure is demonstrated in the example below:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleSimpleClosure} />

      <p className='spacer top medium'>
        What result will output the code above: <em>Hey, yay</em> or <em>Hey, qeq</em>?
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={resultSimpleClosure} />

      <p className='spacer top medium'>
        The <code>doSomething</code> function uses an external variable <code>name</code>. A function uses only the most
        recent value <code>qeq</code> and old variable value <code>yay</code> is not saved anywhere. When a function
        wants a variable it takes the <strong>current</strong> value from its own lexical environment or the outer one.
        If the <code>name</code> variable was declared inside the <code>doSomething</code> function the code below will
        output <code>Hey, yay</code> because the function used value from its own own lexical environment.
      </p>
      <p>
        Let&#39;s look at another example of closure. The function <code>doSomething</code> create another function and
        returns it. Then this new function can be called. What result will output the code snippet below?
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleTrickyClosure} />

      <p className='spacer top medium'>
        The answer is <code>yay</code>!
      </p>
      <ExampleSnippet code={exampleTrickyClosure} />

      <p>
        The <code>do</code> function in the code above gets name from the place of its origin through the outer lexical
        environment reference.
      </p>
    </Accordion>
  );
};
