import { Accordion } from 'src/components/common/Accordion';
import { PostImage } from 'src/components/blog/PostImage/PostImage';

import javaScript from 'public/assets/blog/frontend-in-a-nutshell/javascript/javascript.jpg';

export const WhatIsJavaScript = () => {
  return (
    <Accordion title='What is JavaScript?'>
      <p className='spacer bottom medium'>
        JavaScript is a scripting language that allows to implement different features on web pages: dynamically
        updating content, control, animate staff, etc, etc, etc.
      </p>
      <PostImage
        src={javaScript}
        alt='Sparta meme but everything is an object in JavaScript'
        fileTitle='javascript-is-awesome.jpg'
        maxWidth={500}
      />
    </Accordion>
  );
};
