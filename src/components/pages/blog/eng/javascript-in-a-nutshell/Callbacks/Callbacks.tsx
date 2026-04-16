import { Accordion } from 'src/components/common/Accordion';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { PostImage } from 'src/components/blog/PostImage/PostImage';

import callbackHell from 'public/assets/blog/frontend-in-a-nutshell/javascript/callback-hell.jpg';

export const Callbacks = () => {
  const exampleSetTimeout = `setTimeout(() => {
  console.log('yay');
}, 1000);`;

  return (
    <Accordion title='Callbacks'>
      <p>
        A callback is a function that is passed inside another function, and then called in that function to perform a
        task. You&#39;ve already faced with callbacks.
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleSetTimeout} />

      <p className='spacer top medium'>
        The <code>setTimeout()</code> is a JavaScript function that takes two parameters: an another function and time
        in milliseconds after which that function should be executed. So <code>console.log(&#39;yay&#39;)</code> is
        actually the callback in the example above.
      </p>
      <p className='spacer bottom medium'>
        Using callbacks was very efficient, but only to a certain point (e.g. using synchronous callbacks is still
        normal practice) and now using asynchronous callbacks is a bad practice. If synchronous callbacks are ways to
        achieve greater programming flexibility, then asynchronous callbacks are ways to achieve greater performance and
        user experience. The phenomenon which happens when we nest multiple callbacks within a function is called a
        callback hell.
      </p>
      <PostImage src={callbackHell} alt='Callback hell' fileTitle='callback-hell.jpg' maxWidth={500} />

      <p className='spacer top large'>
        To fix this problem <em>promises</em> were introduced.
      </p>
    </Accordion>
  );
};
