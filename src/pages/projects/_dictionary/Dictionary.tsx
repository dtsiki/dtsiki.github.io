import React, { ReactElement } from 'react';
import Image from 'next/image';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Details from '../_details';

import dictionary from '/public/assets/projects/dictionary.png';

const Dictionary = (): ReactElement => {
  return (
    <>
      <Hero variant={HeroVariant.DARK}>
        <Image
          src={dictionary}
          alt='dictionary'
          layout='fill'
          objectFit='cover' />
      </Hero>
      <Details
        title='Dictionary'
        tags={['HTML', 'CSS', 'React', 'API']}
        description='This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.'
        demoLink='https://dtsiki.github.io/react-dictionary-app'
        sourceLink='https://github.com/dtsiki/react-dictionary-app'
      />
    </>
  );
};

export default Dictionary;
