import { Accordion } from 'src/components/common/Accordion';
import { ExternalLink } from '~components/common/ExternalLink';

export const EventLoop = () => {
  return (
    <Accordion title='Event loop'>
      <p className='spacer bottom medium'>
        I&#39;m not sure I can say it any better on this topic:{' '}
        <ExternalLink
          href='https://www.youtube.com/watch?v=8aGhZQkoFbQ'
          label='[Youtube]: What the heck is the event loop anyway? | Philip Roberts'
        />
      </p>
    </Accordion>
  );
};
