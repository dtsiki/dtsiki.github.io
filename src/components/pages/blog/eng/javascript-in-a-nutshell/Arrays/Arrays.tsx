import { Accordion } from 'src/components/common/Accordion';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const Arrays = () => {
  const exampleSimpleArray = `const something = ['yay', 'qeq', 'uou'];

console.log(typeof something);`;

  const resultSimpleArray = '> "object"';

  const exampleEmptyArray = `const something = [];
console.log(something);

something[0]= 'yay';
something[1]= 'qeq';
something[2]= 'uou';

console.log(something);`;

  const resultEmptyArray = `> []
> ["yay","qeq","uou"]`;

  const exampleNewKeywordArray = "const something = new Array('yay', 'qeq', 'uou');";

  const exampleMixedDataTypesArray = "const something = new Array('yay', 42, true);";

  const exampleIndexes = `const something = ['yay', 'qeq', 'uou'];

console.log(something[0]);
console.log(something[1]);
console.log(something[2]);
console.log(something[3]);
`;

  const resultIndexes = `> "yay"
> "qeq"
> "uou"
> undefined`;

  const exampleAddNewElement = `const something = ['yay', 'qeq', 'uou'];

console.log(something);

something[3] = 'kek';

console.log(something);`;

  const resultAddNewElement = `> ["yay","qeq","uou"]
> ["yay","qeq","uou", "kek"]`;

  const exampleLength = `const something = ['yay', 'qeq', 'uou'];

console.log(something.length);`;

  const resultLength = '> 3';

  return (
    <Accordion title='Arrays'>
      <p>In JavaScript arrays are objects that represent a collection of elements:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleSimpleArray} />
      <ExampleSnippet code={resultSimpleArray} />
      <p>There are two ways to create an array:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>
            using an array literal <code>[]</code>:
          </div>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleSimpleArray} />
          <p>It&#39;s apparent to create an empty array and then provide the elements:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleEmptyArray} />
          <ExampleSnippet code={resultEmptyArray} />
        </li>
        <li className='list__item'>
          <div className='list__title'>
            using the <code>new</code> keyword:
          </div>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleNewKeywordArray} />
        </li>
      </ol>
      <p className='note spacer top medium'>
        <span className='note__title'>Note: </span>
        it&#39;s a common practice to declare arrays with <code>const</code> keyword.
      </p>
      <p className='spacer top medium'>
        JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and
        so on:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleIndexes} />
      <ExampleSnippet code={resultIndexes} />

      <p className='spacer top medium'>JavaScript arrays can be with mixed data types:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleMixedDataTypesArray} />

      <p className='spacer top medium'>
        JavaScript arrays are resizable: we can dynamically add or remove its elements:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleAddNewElement} />
      <ExampleSnippet code={resultAddNewElement} />

      <p className='spacer top medium'>
        To find the length of an array use the <code>length</code> property:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleLength} />
      <ExampleSnippet code={resultLength} />
    </Accordion>
  );
};
