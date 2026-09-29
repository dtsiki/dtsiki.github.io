import { Accordion } from 'src/components/common/Accordion';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const Promises = () => {
  const examplePromiseConstructor = `const promise = new Promise(function(resolve, reject) {
  // executor
});`;

  const examplePromise = `let promise = new Promise(function(resolve, reject) {
  resolve('yay');

  reject(new Error('Error')); // ignored

  setTimeout(() => resolve('qeq')); // ignored
});`;

  const examplePromisesChaining = `new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result);

  return result * 2;

}).then(function(result) {

  console.log(result);

  return result * 2;

}).then(function(result) {

  console.log(result);

  return result * 2;
}).finally(() => {
  console.log("All done")
)};`;

  const resultPromisesChaining = `> 1
> 2
> 4
> "I am done"`;

  const exampleResolvedPromise = `const promise = new Promise(function(resolve, reject) {
  resolve('I am done');
});

promise.then((result) => {
  console.log(result);
});`;

  const resultResolvedPromise = '> "I am done"';

  const exampleRejectedPromise = `const promise = new Promise(function(resolve, reject) {
  reject(new Error('Something went wrong'));
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });`;

  const resultRejectedPromise = '> [Object error]';

  return (
    <Accordion title='Promises'>
      <p>
        Promises came along to solve the problems of callback functions. Promise is a special JavaScript object which
        contains its state and produces a value after some asynchronous operation completes successfully or
        unsuccessfully. This promise&#39;s state can be:
      </p>
      <ul className='list markered'>
        {[
          {
            title: 'pending',
            description: 'while the state is pending the result is undefined',
          },
          {
            title: 'fulfilled',
            description: 'when the state is fulfilled the result is a value',
          },
          {
            title: 'rejected',
            description: 'when the state is rejected the result is an error object',
          },
        ].map((item) => (
          <li key={item.title} className='list__item'>
            <div className='list__title'>{item.title}</div>
            <div className='list__footer'>{item.description}</div>
          </li>
        ))}
      </ul>
      <p>
        Initially state is pending, then changes to either fulfilled when resolve is called or rejected when reject is
        called.
      </p>
      <p>The constructor syntax for a promise object is:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={examplePromiseConstructor} />

      <p className='spacer top medium'>
        The function passed to new promise is called the executor. The executor performs a job, usually it is something
        that takes time.
      </p>
      <p>
        Its arguments <code>resolve</code> and <code>reject</code> are callbacks provided by JavaScript itself. When the
        executor obtains the result, it should call one of these callbacks. Callback <code>resolve(value)</code> will
        call if the job is finished successfully with result value:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleResolvedPromise} />
      <ExampleSnippet code={resultResolvedPromise} />

      <p>
        Callback <code>reject(error)</code> will call if an error has occurred, where error is the error object:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleRejectedPromise} />
      <ExampleSnippet code={resultRejectedPromise} />

      <p>There can be only a single result: a value or an error. Here&#39;s the example:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={examplePromise} />

      <p className='spacer top medium'>
        Promises can be chained as we touched above. JavaScript provide a couple of methods to do that:{' '}
        <code>then</code>, <code>catch</code> and <code>finally</code>. All these methods, in its turn, return promises.
        The chain is composed of <code>then</code> calls, and typically but not necessarily has a single{' '}
        <code>catch</code> at the end and optionally followed by <code>finally</code>. Promises chaining looks like
        this:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={examplePromisesChaining} />
      <ExampleSnippet code={resultPromisesChaining} />

      <p>
        Apart from the handler methods <code>then</code>, <code>catch</code> and <code>finally</code>, there are six
        static methods for handle multiple promises.
      </p>
      <p>How can promises be used? In frontend, promises are often used for network requests.</p>
    </Accordion>
  );
};
