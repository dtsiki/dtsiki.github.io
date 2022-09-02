import Link from 'next/link';
import React, { ReactElement } from 'react';

const AboutProjects = (): ReactElement => {
  return (
    <p>
      Check out what I did <Link href='/projects'><a className='link'>here</a></Link>
    </p>
  );
};

export default AboutProjects;
