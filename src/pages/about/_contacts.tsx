import classNames from 'classnames';
import React, { ReactElement, useMemo } from 'react';

import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';
import Like from 'src/components/common/Like';

import styles from './about.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutContacts = (): ReactElement => {
  const bind = classNames.bind(styles);

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
          className='list__item'>
          <FontAwesomeIcon icon={icon} />
          {contact.email && (
            <a
              href={contact.email}
              className='link'>
              {contact.title}
            </a>
          )}
          {contact.link && (
            <a
              href={contact.link}
              target='_blank'
              rel='noopener noreferrer'
              className='link'>
              {title}
            </a>
          )}
        </li>
      );
    })
  },[contacts]);

  return (
    <>
      <p className='spacer bottom medium'>
        Got any questions?<br />Feel free to reach me out:
      </p>
      <ul className={bind(['list', styles.about__contacts])}>
        {renderContacts}
      </ul>
    </>
  );
};

export default AboutContacts;
