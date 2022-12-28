import React, { ReactElement } from 'react';

import ExternalLink from 'src/components/common/ExternalLink';
import Project from 'src/components/pages/projects/Project';

import planner18minutesCover from '/public/assets/projects/18-minutes.png';

const Planner18Minutes = (): ReactElement => {
  const description = <>
    18 minute is a task board based upon a
    {' '}
    <ExternalLink
      href='https://www.goodreads.com/book/show/12138871'
      label='book' /> of the same name by Peter Bregman.
      The 18 minutes method clearly shows how you can cut through all the daily clutter and distractions and find a way to focus on those key items which are truly the top priorities in your life.
  </>;

  return (
    <Project
      name='18 minutes'
      description={description}
      tags={['HTML', 'CSS', 'React', 'TypeScript']}
      preview={planner18minutesCover}
      repoLink='https://github.com/dtsiki/18-minutes' />
  )
};

export default Planner18Minutes;
