import React, { ReactElement } from 'react';

const AboutWorkExperience = (): ReactElement => {
  return (
    <ul className='list'>
      <li className='list__item'>
        <h3 className='list__title'>
          Frontend developer
        </h3>
        <p>Ronas IT</p>
        <p className='list__footer'>2021 - present</p>
      </li>
      <li className='list__item'>
        <h3 className='list__title'>
          Frontend developer
        </h3>
        <p>ADCI Solutions</p>
        <p className='list__footer'>2020 - 2021</p>
      </li>
      <li className='list__item'>
        <h3 className='list__title'>
          Signal Processing Engineer
        </h3>
        <p>Central Design Bureau of Automation </p>
        <p className='list__footer'>2014 - 2020</p>
      </li>
    </ul>
  );
};

export default AboutWorkExperience;
