import React, { ReactElement } from 'react';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Details from '../_details';

const QuoteGenerator = (): ReactElement => {
  return (
    <>
      <Hero variant={HeroVariant.PRIMARY}>
        <iframe
          className='frame'
          src='https://dtsiki.github.io/quote-generator'
          title='Quote generator' />
      </Hero>
      <Details
        title='Quote generator'
        tags={['HTML', 'CSS', 'JavaScript']}
        description='A simple pure JavaScript generator shows random quote and random background color for every quote.'
        demoLink='https://dtsiki.github.io/quote-generator'
        sourceLink='https://github.com/dtsiki/quote-generator'
      />
    </>
  );
};

export default QuoteGenerator;
