import { PostVideo } from 'src/components/blog/PostVideo/PostVideo';
import { Accordion } from 'src/components/common/Accordion';

export const EventLoop = () => {
  return (
    <Accordion title='Event loop'>
      <p className='spacer bottom medium'>I&#39;m not sure I can say it any better on this topic:</p>
      <PostVideo youtubeId='8aGhZQkoFbQ' videoTitle='event-loop.mp4' />
    </Accordion>
  );
};
