import { PostImage } from 'src/components/blog/PostImage/PostImage';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import {
  Arrays,
  ArraysMethods,
  Callbacks,
  Closures,
  WhatIsJavaScript,
  JavaScriptDataTypes,
  MutableAndImmutable,
  NullAndUndefined,
  VarLetConst,
  Functions,
  Scope,
  Hoisting,
  TemporalDeadZone,
  StrictMode,
  Timers,
  EventLoop,
  AsynchronousJavaScript,
  AsyncAwait,
  Promises,
} from 'src/components/pages/blog/eng/javascript-in-a-nutshell/components/';

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
