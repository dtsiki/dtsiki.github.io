import { ReactElement } from 'react';
import classNames from 'classnames';
import YouTube from 'react-youtube';

import Accordion from 'src/components/common/Accordion';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './../../../../../../pages/blog/frontend-in-a-nutshell/post.module.scss';

const EventLoop = (): ReactElement => {
  const bind = classNames.bind(styles);

  const videoOptions = {
    height: '390',
    width: '640'
  };

  return (
    <Accordion title='Event loop'>
      <p className='spacer bottom medium'>
        I&#39;m not sure I can say it any better on this topic:
      </p>
      <div className={bind([styles.post__video, 'spacer bottom large'])}>
        <Window
          type={WindowType.VIDEO}
          title='VIDEO'
          fileTitle='event-loop.mp4'>
          <YouTube
            videoId='8aGhZQkoFbQ'
            opts={videoOptions} />
        </Window>
      </div>
    </Accordion>
  );
};

export default EventLoop;
