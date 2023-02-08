
import { ReactElement } from 'react';

import Project from 'src/components/pages/projects/Project';

import audioPlayerPreview from '/public/assets/projects/audio-player.png';

const AudioPlayer = (): ReactElement => {
  return (
    <Project
      name='Audio player'
      description='A simple React with TypeScript audio player I made to listen to audiobooks on my laptop because I can 😂'
      tags={['HTML', 'CSS', 'React', 'TypeScript']}
      preview={audioPlayerPreview}
      repoLink='https://github.com/dtsiki/react-audioplayer' />
  );
};

export default AudioPlayer;
