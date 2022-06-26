import { faGoodreads, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

const AboutHobby = (): ReactElement => {
  return (
    <ul className='tags tags--outline-dark'>
      <li className='tag tag--with-link'>
        <a
          href='https://www.strava.com/athletes/15896548'
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Run
          <FontAwesomeIcon
            icon={faStrava}
            color='#8a2be2' />
        </a>
      </li>
      <li className='tag'>Crossfit</li>
      <li className='tag'>Puzzles</li>
      <li className='tag tag--with-link'>
        <a
          href='https://www.goodreads.com/thevioletmaniac '
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Read
          <FontAwesomeIcon
            icon={faGoodreads}
            color='#8a2be2' />
        </a>
      </li>
      <li className='tag'>Learn english</li>
      <li className='tag tag--with-link'>
        <a
          href='https://www.instagram.com/keshathecorgi'
          target='_blank'
          rel='noopener noreferrer'
          className='tag__link'>
          Spend time with my dog
          <FontAwesomeIcon
            icon={faInstagram}
            color='#8a2be2' />
        </a>
      </li>
      <li className='tag'>Travel</li>
    </ul>
  );
};

export default AboutHobby;
