import { ReactElement } from 'react';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';

import styles from 'src/pages/blog/frontend-in-a-nutshell/post.module.scss';

const TemporalDeadZone = (): ReactElement => {

  const exampleTDZLetFailed = `{// TDZ starts here
  // TDZ continues here
  console.log(yay); // ReferenceError: can't access lexical declaration 'yay' before initialization
  // TDZ continues here
  let yay = "yay"; // TDZ ends here
  // TDZ does not exist here
}`;

  const exampleTDZLetSuccess = `{// TDZ starts here
  // TDZ continues here
  // TDZ continues here
  let yay = "yay"; // TDZ ends here
  // TDZ does not exist here
  console.log(yay); // "yay"
  // TDZ does not exist here
}`;

  const exampleTDZVar = `{// TDZ starts and ends here
  // TDZ does not exist here
  console.log(yay); // undefined
  // TDZ does not exist here
  var yay = "yay"; // TDZ does not exist here
  // TDZ does not exist here
  console.log(yay); // "yay"
  // TDZ does not exist here
}`;

  return (
    <Accordion title='What is temporal dead zone?'>
      <p>
        A temporal dead zone (also known as TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
        A block is a pair of curly braces.
        A block&#39;s temporal dead zone starts at the beginning of the block&#39;s local scope.
        It ends when variable is fully initialized with a value.
        Here&#39;s the example of TDZ of variables declared with <code>let</code> keyword:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleTDZLetFailed} />
          </div>
        </div>
      </div>
      <p>
        In the example above TDZ of the <code>yay</code> variable starts from the opening curly bracket and ends once when it initialized with the value.
        The <code>yay</code> variable was invoked within its temporal dead zone that is why JavaScript will return a ReferenceError.
      </p>
      <p>
        Here is the example how we can access a variable successfully after its complete initialization:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleTDZLetSuccess} />
          </div>
        </div>
      </div>
      <p>
        Another difference between <code>var</code>, <code>let</code> and <code>const</code> variables is when their TDZ ends.
        Let&#39;s look at an example of TDZ of <code>var</code>:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              name='index'
              code={exampleTDZVar} />
          </div>
        </div>
      </div>
      <p>
        In contrast to <code>let</code> or <code>const</code>, JavaScript automatically initializes <code>var</code> variables with <code>undefined</code> value.
        <code>let</code> and <code>const</code> both remains dead and inaccessible.
        However, <code>var</code> TDZ ends immediately after its hoisting.
      </p>
    </Accordion>
  );
};

export default TemporalDeadZone;
