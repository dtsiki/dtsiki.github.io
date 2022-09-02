import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeviantart, faGoodreads, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';

import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

import styles from './about.module.scss';

const AboutHobbies = (): ReactElement => {
  const bind = classNames.bind(styles);

  const hobbies = [
    {
      name: 'Running',
      icon: faStrava,
      link: 'https://www.strava.com/athletes/15896548'
    },
    {
      name: 'Reading',
      icon: faGoodreads,
      link: 'https://www.goodreads.com/thevioletmaniac'
    },
    {
      name: 'Spending time with my dog',
      icon: faInstagram,
      link: 'https://www.instagram.com/keshathecorgi'
    },
    {
      name: 'Crossfit'
    },
    {
      name: 'Puzzles'
    },
    {
      name: 'Photoshopping',
      icon: faDeviantart,
      link: 'https://www.deviantart.com/tvm-resources'
    },
    {
      name: 'Learning english'
    },
    {
      name: 'Traveling'
    }
  ];

  const renderHobbies = useMemo(() => {
    return hobbies.map((hobby) => {
      return (
        <li
          key={hobby.name}
          className='list__item'>
          {hobby.link ? (
            <a
              href={hobby.link}
              target='_blank'
              rel='noopener noreferrer'
              className='link-with-tag'>
              <Tag
                variant={TagVariant.DARK}
                isOutlined>
                {hobby.name}
                <FontAwesomeIcon icon={hobby.icon} />
              </Tag>
            </a>
          ) : (
            <Tag
              variant={TagVariant.DARK}
              isOutlined>
              {hobby.name}
            </Tag>
          )}
        </li>
      );
    });
  }, [hobbies]);

  return (
    <ul className={bind(['list inline', styles.about__hobbies])}>
      {renderHobbies}
    </ul>
  );
};

export default AboutHobbies;
