import YouTube from 'react-youtube';
import { IPostVideoProps } from './PostVideo.types';
import { Window } from 'src/components/common/Window/Window';
import { EWindowType } from 'src/components/common/Window/Window.types';

import styles from './PostVideo.module.scss';

const VIDEO_OPTIONS = {
  height: '390',
  width: '640',
};

export const PostVideo = ({ youtubeId, videoTitle }: IPostVideoProps) => {
  return (
    <div className={styles.post_video}>
      <Window type={EWindowType.VIDEO} fileTitle={videoTitle}>
        <YouTube videoId={youtubeId} opts={VIDEO_OPTIONS} />
      </Window>
    </div>
  );
};
