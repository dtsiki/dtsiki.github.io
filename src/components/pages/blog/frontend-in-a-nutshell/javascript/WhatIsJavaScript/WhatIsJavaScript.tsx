import { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Accordion from 'src/components/common/Accordion';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';
import javaScript from 'public/assets/blog/frontend-in-a-nutshell/javascript/javascript.jpg';

const WhatIsJavaScript = (): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <Accordion title='What is JavaScript?'>
      <p className='spacer bottom medium'>
        JavaScript is a scripting language that allows to implement different features on web pages: dynamically updating content, control, animate staff, etc, etc, etc.
      </p>
      <div className={bind([styles.post__image, 'spacer bottom large'])}>
        <Window
          type={WindowType.IMAGE}
          title='GALLERY'
          fileTitle='javascript-is-awesome.jpg'>
          <Image
            layout='responsive'
            src={javaScript}
            alt='Sparta meme but everything is an object in JavaScript' />
        </Window>
      </div>
    </Accordion>
  );
};

export default WhatIsJavaScript;
