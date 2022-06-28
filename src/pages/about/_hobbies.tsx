import React, { ReactElement } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeviantart, faGoodreads, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';

const AboutHobbies = (): ReactElement => {
  return (
    <ul className='tags tags--outline-dark'>
      <li className='tag tag--with-link'>
        <a
          href='https://www.strava.com/athletes/15896548'
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Running
          <FontAwesomeIcon
            icon={faStrava}
            color='#8a2be2' />
        </a>
      </li>
      <li className='tag'>Crossfit</li>
      <li className='tag'>Puzzles</li>
      <li className='tag tag--with-link'>
        <a
          href='https://www.deviantart.com/tvm-resources'
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Photoshopping
          <FontAwesomeIcon
            icon={faDeviantart}
            color='#8a2be2' />
        </a>
      </li>
      <li className='tag tag--with-link'>
        <a
          href='https://www.goodreads.com/thevioletmaniac '
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Reading
          <FontAwesomeIcon
            icon={faGoodreads}
            color='#8a2be2' />
        </a>
      </li>
      <li className='tag'>Learning english</li>
      <li className='tag'>Traveling</li>
      <li className='tag tag--with-link'>
        <a
          href='https://www.instagram.com/keshathecorgi'
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Spending time with my dog
          <FontAwesomeIcon
            icon={faInstagram}
            color='#8a2be2' />
        </a>
      </li>
    </ul>
  );
};

export default AboutHobbies;
