import React, { ReactElement } from 'react';
import Hero from '../Hero';

const Loader = (): ReactElement => {
  return (
    <Hero>
      <div className='loader'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </Hero>
  );
};

export default Loader;
