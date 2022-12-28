import { ReactElement } from 'react';

import Project from 'src/components/pages/projects/Project';

import ticTacToePreview from '/public/assets/projects/previews/tic-tac-toe.png';

const TicTacToe = (): ReactElement => {
  return (
    <Project
      name='Tic Tac Toe'
      description='Tic tac toe is one of the oldest and most popular board games in the world and there is my React implementation of this legendary game for one or two players.'
      tags={['HTML', 'CSS', 'React']}
      preview={ticTacToePreview}
      demoLink='https://dtsiki.github.io/tic-tac-toe'
      repoLink='https://github.com/dtsiki/tic-tac-toe' />
  );
};

export default TicTacToe;
