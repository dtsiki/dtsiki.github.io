import { Accordion } from 'src/components/common/Accordion';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { PostImage } from 'src/components/blog/PostImage/PostImage';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

import async from 'public/assets/blog/frontend-in-a-nutshell/javascript/async.png';

export const AsynchronousJavaScript = () => {
  const exampleSynchronousCode = `const yay = 'yay';
const qeq = 'qeq';
const yayQeq = \`$\{yay} $\{qeq}\`;`;

  const exampleAsyncMarkup = `<button onclick="doSomething()">
  Do something
</button>`;

  const exampleAsync = `setInterval(() => {
  console.log('yay');
}, 1000);

function doSomething() {
  console.log('qeq');
}`;

  const resultAsync = `> "yay"
> "yay"
> "yay"
> "qeq"
> "yay"
> "yay"`;

  return (
    <Accordion title='Asynchronous JavaScript'>
      <p>Synchronous programming is a programming model where operations take place sequentially step by step:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleSynchronousCode} />
      <p className='spacer top medium'>
        This code above declares a string called <code>yay</code>, then declares a string called <code>qeq</code> and
        then declares another string called <code>yayQeq</code>, which uses <code>yay</code> and <code>qeq</code>. In
        other words, the browser steps through this code one line at a time in the order it was written.
      </p>
      <p>
        What if the synchronous function takes a long time? If any function will execute too long or will be{' '}
        <code>long-running</code>, the whole program can be completely unresponsive: you cannot type anything, click
        anything or do anything else. There are asynchronous functions to address this issue.
      </p>
      <p className='spacer bottom medium'>
        With asynchronous programming, JavaScript programs can start long-running tasks and continue running other tasks
        in paralell.
      </p>
      <PostImage fileTitle='async.jpg' src={async} alt='Knock knock. Race condition. Who is there?' maxWidth={500} />
      <p className='spacer top large'>
        Mentioned earlier <code>setTimeout()</code> and <code>setInterval()</code> methods are the only native functions
        of the JavaScript to execute code asynchronously. What does it mean? Asynchronous functions are not block the
        JavaScript main thread. Check out the example below. There is a button that do something. There is also inteval
        timer starts which executes <code>console.log()</code> once every second. If a non-asynchronous function were
        used in the example below we cannot click on this button: it would be blocked by execution of the
        non-asynchronous function.
      </p>
      <DoubleCodeSnippet
        name={['index', 'index']}
        code={[exampleAsyncMarkup, exampleAsync]}
        lang={[ECodeLang.HTML, ECodeLang.JAVASCRIPT]}
      />
      <p>
        But the asynchronous function <code>setInterval()</code> is used here and we can see the following output if we
        click on the button:
      </p>
      <ExampleSnippet code={resultAsync} />
      <p>
        By default, JavaScript is a synchronous and single threaded programming language. What are we supposed to do, if
        we need to fetch some large amount of data from a backend and then display it on our web page? With the help of
        callbacks, <code>async/await</code> and promises, JavaScript is used to do asynchronous programming.
      </p>
    </Accordion>
  );
};
