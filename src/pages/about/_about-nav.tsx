import React, { ReactElement } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClipboardList, faCode, faGraduationCap, faSmile } from '@fortawesome/free-solid-svg-icons';

import styles from './about.module.scss';

const AboutNav = (): ReactElement => {
  return (
    <nav className={styles.about__navigation}>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faBriefcase}
            size='2x' />
          <span className='visually-hidden'>
            Work experience
          </span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faGraduationCap}
            size='2x' />
          <span className='visually-hidden'>
            Education
          </span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCode}
            size='2x' />
          <span className='visually-hidden'>
            Skills
          </span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faSmile}
            size='2x' />
          <span className='visually-hidden'>
            Hobbies
          </span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faClipboardList}
            size='2x' />
          <span className='visually-hidden'>
            Projects
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default AboutNav;
