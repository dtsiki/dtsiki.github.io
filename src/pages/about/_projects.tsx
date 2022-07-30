import Link from 'next/link';
import React, { ReactElement } from 'react';

const AboutProjects = (): ReactElement => {
  return (
    <p>You can check more about what I do <Link href='/projects'><a className='link'>here</a></Link></p>
  );
};

export default AboutProjects;
