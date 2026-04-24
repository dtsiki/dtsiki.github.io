import { PostImage } from 'src/components/blog/PostImage/PostImage';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { WhatIsJavaScript } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/WhatIsJavaScript/WhatIsJavaScript';
import { JavaScriptDataTypes } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/JavaScriptDataTypes/JavaScriptDataTypes';
import { MutableAndImmutable } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/MutableAndImmutable/MutableAndImmutable';
import { NullAndUndefined } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/NullAndUndefined/NullAndUndefined';
import { VarLetConst } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/VarLetConst/VarLetConst';
import { Functions } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Functions/Functions';
import { Scope } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Scope/Scope';
import { Hoisting } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Hoisting/Hoisting';
import { TemporalDeadZone } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/TemporalDeadZone/TemporalDeadZone';
import { StrictMode } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/StrictMode/StrictMode';
import { Closures } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Closures/Closures';
import { Arrays } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Arrays/Arrays';
import { ArraysMethods } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/ArraysMethods/ArraysMethods';
import { Timers } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Timers/Timers';
import { EventLoop } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/EventLoop/EventLoop';
import { AsynchronousJavaScript } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/AsynchronousJavaScript/AsynchronousJavaScript';
import { Callbacks } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Callbacks/Callbacks';
import { AsyncAwait } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/AsyncAwait/AsyncAwait';
import { Promises } from 'src/components/pages/blog/eng/javascript-in-a-nutshell/Promises/Promises';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';

import book from './../../../../../public/assets/blog/frontend-in-a-nutshell/javascript/book.jpg';

const Post = () => {
  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.MOTION_LINES,
      }}>
      <>
        <WhatIsJavaScript />
        <JavaScriptDataTypes />
        <MutableAndImmutable />
        <NullAndUndefined />
        <VarLetConst />
        <Functions />
        <Scope />
        <Hoisting />
        <TemporalDeadZone />
        <StrictMode />
        <Closures />
        <Arrays />
        <ArraysMethods />
        <Timers />
        <EventLoop />
        <AsynchronousJavaScript />
        <Callbacks />
        <Promises />
        <AsyncAwait />
        <section className='spacer top large'>
          <PostImage
            fileTitle='yay.jpg'
            src={book}
            alt='Spider-Man (null) pointing at Spider-Man (undefined)'
            maxWidth={500}
          />
        </section>
      </>
    </PostWrapper>
  );
};

export default Post;
