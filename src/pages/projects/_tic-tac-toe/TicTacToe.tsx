import React, { ReactElement } from 'react';
import Image from 'next/image';

import Hero from 'src/components/layout/Hero';
import Details from '../_details';

import ticTacToe from '/public/assets/projects/tic-tac-toe.png';

const TicTacToe = (): ReactElement => {
  return (
    <>
      <Hero>
        <Image
          src={ticTacToe}
          alt='tic tac toe' />
      </Hero>
      <Details
        title='Tic Tac Toe'
        tags={['HTML', 'CSS', 'React']}
        description='Tic tac toe is one of the oldest and most popular board games in the world and there is my React implementation of this legendary game for one or two players.'
        demoLink='https://dtsiki.github.io/tic-tac-toe'
        sourceLink='https://github.com/dtsiki/tic-tac-toe'
      />
    </>
  );
};

export default TicTacToe;
