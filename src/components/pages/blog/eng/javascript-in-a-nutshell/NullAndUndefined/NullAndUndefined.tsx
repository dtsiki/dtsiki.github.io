import { Accordion } from 'src/components/common/Accordion';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { PostImage } from 'src/components/blog/PostImage/PostImage';

import confusedTravolta from 'public/assets/blog/frontend-in-a-nutshell/javascript/confused-travolta.gif';
import toiletTissueHolder from 'public/assets/blog/frontend-in-a-nutshell/javascript/toilet-tissue-holder.png';
import nullAndUndefined from 'public/assets/blog/frontend-in-a-nutshell/javascript/null-and-undefined.jpg';

export const NullAndUndefined = () => {
  const exampleUndefined = `let yay;

console.log(yay); // undefined
console.log(typeof yay); // "undefined"`;

  const exampleNull = `let yay = null;

console.log(yay); // null
console.log(typeof yay); // "object"`;

  return (
    <Accordion title='What is the difference between null and undefined?'>
      <PostImage
        src={nullAndUndefined}
        alt='Spider-Man (null) pointing at Spider-Man (undefined)'
        fileTitle='null-and-undefined.jpg'
        maxWidth={400}
      />
      <p className='spacer medium top'>
        The difference between <code>null</code> and <code>undefined</code> data types is barely perceptible and
        deserves special attention.
      </p>
      <p>
        Type <code>undefined</code> represents the absence of a variable itself:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleUndefined} />
      <p className='spacer top medium'>
        While <code>undefined</code> data type indicates the absence of a value, <code>null</code> data type indicates
        the absence of an object. That&#39;s why <code>typeof null</code> will return as result <code>object</code>{' '}
        type.
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleNull} />
      <p className='spacer bottom medium'>This means that there is literally nothing here.</p>
      <PostImage
        src={confusedTravolta}
        alt='Confused Travolta is trying to find a null variable value'
        fileTitle='null.jpg'
        maxWidth={400}
      />
      <p className='spacer bottom medium'>
        The difference between <code>null</code> and <code>undefined</code> can be easily explained with toilet tissue
        holder:
      </p>
      <PostImage
        src={toiletTissueHolder}
        alt='JavaScript data types explained with toilet tissue holder'
        fileTitle='toilet-tissue-holder.jpg'
        maxWidth={500}
      />
    </Accordion>
  );
};
