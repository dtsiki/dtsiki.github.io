import React, { ReactElement, useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeviantart, faGoodreads, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

const AboutHobbies = (): ReactElement => {
  const hobbies = [
    {
      name: 'Running',
      icon: faStrava,
      link: 'https://www.strava.com/athletes/15896548'
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
      name: 'Reading',
      icon: faGoodreads,
      link: 'https://www.goodreads.com/thevioletmaniac'
    },
    {
      name: 'Learning english'
    },
    {
      name: 'Traveling'
    },
    {
      name: 'Spending time with my dog',
      icon: faInstagram,
      link: 'https://www.instagram.com/keshathecorgi'
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
    <ul className='list inline'>
      {renderHobbies}
    </ul>
  );
};

export default AboutHobbies;
