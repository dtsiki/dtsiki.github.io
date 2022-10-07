import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useMemo } from 'react';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';

import styles from './contacts.module.scss';

const Contacts = (): ReactElement => {
  const contacts = [
    {
      title: 'thevioletmaniac@gmail.com',
      icon: faEnvelope,
      email: 'thevioletmaniac@gmail.com'
    },
    {
      title: 'dtsiki',
      icon: faGithub,
      link: 'https://github.com/dtsiki'
    },
    {
      title: 'thevioletmaniac',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/daria-terenteva-466392216/'
    }
  ];

  const renderContacts = useMemo(() => {
    return contacts.map((contact) => {
      const { title, icon } = contact;

      return (
        <li
          key={title}
          className={styles.contacts__contact}>
          <FontAwesomeIcon icon={icon} />
          {contact.email && (
            <a
              href={contact.email}
              className='link light'>
              <span className='accented accented--light'>
                {contact.title}
              </span>
            </a>
          )}
          {contact.link && (
            <a
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
              className='link light'>
              <span className='accented accented--light'>
                {title}
              </span>
            </a>
          )}
        </li>
      );
    })
  },[contacts]);

  return (
    <div className={styles.contacts}>
      <Hero variant={HeroVariant.PRIMARY}>
        <div className='container'>
          <div className={styles.contacts__wrapper}>
            <h2 className='heading-l2'>
              Got any <span className='stroke light'>questions?</span>
            </h2>
            <h3 className='heading-l3'>
              <span className='stroke light'>Feel free</span> to reach me out:
            </h3>
            <ul className='list spacer top medium'>
              {renderContacts}
            </ul>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Contacts;
