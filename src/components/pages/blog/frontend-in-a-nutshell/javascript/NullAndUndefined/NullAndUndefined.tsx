import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import Accordion from 'src/components/common/Accordion';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';
import confusedTravolta from 'public/assets/blog/frontend-in-a-nutshell/javascript/confused-travolta.gif';
import toiletTissueHolder from 'public/assets/blog/frontend-in-a-nutshell/javascript/toilet-tissue-holder.png';
import nullAndUndefined from 'public/assets/blog/frontend-in-a-nutshell/javascript/null-and-undefined.jpg';

const NullAndUndefined = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleUndefined = `let yay;

console.log(yay); // undefined
console.log(typeof yay); // "undefined"`;

  const exampleNull = `let yay = null;

console.log(yay); // null
console.log(typeof yay); // "object"`;

  return (
    <Accordion title='What is the difference between null and undefined?'>
      <div className={bind([styles.post__image, 'spacer top medium'])}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='null-and-undefined.jpg'>
          <Image
            layout='responsive'
            src={nullAndUndefined}
            alt='Spider-Man (null) pointing at Spider-Man (undefined)' />
        </Window>
      </div>
      <p className='spacer medium top'>
        The difference between <code>nulle</code> and <code>undefined</code> data types is barely perceptible and deserves special attention.
      </p>
      <p>
        Type <code>undefined</code> represents the absence of a variable itself.
      </p>
      <div className='row'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleUndefined} />
        </div>
      </div>
      <p className='spacer top medium'>
        While <code>undefined</code> data type indicates the absence of a value, <code>null</code> data type indicates the absence of an object.
        That&#39;s why <code>typeof null</code> will return as result <code>object</code> type.
      </p>
      <div className='row spacer bottom medium'>
        <div className='col col--100'>
          <Code
            language={CodeLanguage.JAVASCRIPT}
            name='index'
            code={exampleNull} />
        </div>
      </div>
      <p className='spacer bottom medium'>
        This means that there is literally nothing here.
      </p>
      <div className={bind([styles.post__gif, 'spacer bottom medium'])}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='null.jpg'>
          <Image
            layout='responsive'
            src={confusedTravolta}
            alt='Confused Travolta is trying to find a null variable value' />
        </Window>
      </div>
      <p className='spacer bottom medium'>
        The difference between <code>null</code> and <code>undefined</code> can be easily explained with toilet tissue holder:
      </p>
      <div className={styles.post__image}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='toilet-tissue-holder.jpg'>
          <Image
            layout='responsive'
            src={toiletTissueHolder}
            alt='JavaScript data types explained with toilet tissue holder' />
        </Window>
      </div>
    </Accordion>
  );
};

export default NullAndUndefined;
