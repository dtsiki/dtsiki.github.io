import React, { ReactElement } from 'react';
import Image from 'next/image';

import Hero from 'src/components/layout/Hero';
import Details from '../_details';
import ExternalLink from 'src/components/common/ExternalLink';

import minutes from '/public/assets/projects/18-minutes.png';

const Planner18Minutes = (): ReactElement => {
  const description = <>
    18 minute is a task board, based upon a <ExternalLink
      href='https://www.goodreads.com/book/show/12138871'
      label='book' /> of the same name by Peter Bregman.
      The 18 minutes method clearly shows how you can cut through all the daily clutter and distractions and find a way to focus on those key items which are truly the top priorities in your life.
  </>;
  return (
    <>
      <Hero>
        <Image
          src={minutes}
          alt='18 minutes planner' />
      </Hero>
      <Details
        title='18 minutes'
        description={description}
        tags={['HTML', 'CSS', 'React', 'TypeScript']}
        sourceLink='https://github.com/dtsiki/18-minutes'
      />
    </>
  );
};

export default Planner18Minutes;
