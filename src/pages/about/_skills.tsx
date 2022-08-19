import React, { ReactElement } from 'react';

interface Props {
  isExtended?: boolean;
}

const AboutSkills = ({ isExtended = false }: Props): ReactElement => {
  return (
    <ul className='tags tags align-right tags--outline-dark'>
      <li className='tag'>HTML</li>
      <li className='tag'>BEM</li>
      <li className='tag'>CSS</li>
      <li className='tag'>SASS</li>
      <li className='tag'>JavaScript</li>
      <li className='tag'>TypeScript</li>
      <li className='tag'>React</li>
      <li className='tag'>Next.js</li>
      <li className='tag'>Angular</li>
      <li className='tag'>API</li>
      <li className='tag'>Git flow</li>
      {isExtended && <li className='tag'>ESLinter</li>}
      {isExtended && <li className='tag'>Prettier</li>}
      {isExtended && <li className='tag'>Webpack</li>}
      <li className='tag'>English B1</li>
    </ul>
  );
};

export default AboutSkills;
