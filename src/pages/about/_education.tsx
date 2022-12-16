import { ReactElement } from 'react';

const AboutEducation = (): ReactElement => {
  return (
    <ul className='list'>
      <li className='list__item'>
        <h3 className='list__title'>
          Bachelor of Informatics and Computer Science
        </h3>
        <p>Omsk State Technical University</p>
        <p className='list__footer'>2010 - 2014</p>
      </li>
      <li className='list__item'>
        <h3 className='list__title'>
          Master of Informatics and Computer Science
        </h3>
        <p>Omsk State Technical University</p>
        <p className='list__footer'>2014 - 2016</p>
      </li>
    </ul>
  );
};

export default AboutEducation;
