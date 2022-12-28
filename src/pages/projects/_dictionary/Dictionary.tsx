import { ReactElement } from 'react';

import Project from 'src/components/pages/projects/Project';

import dictionaryPreview from '/public/assets/projects/dictionary.png';

const Dictionary = (): ReactElement => {
  return (
    <Project
      name='Dictionary'
      description='This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.'
      tags={['HTML', 'CSS', 'React', 'API']}
      preview={dictionaryPreview}
      demoLink='https://dtsiki.github.io/react-dictionary-app'
      repoLink='https://github.com/dtsiki/react-dictionary-app' />
  );
};

export default Dictionary;
