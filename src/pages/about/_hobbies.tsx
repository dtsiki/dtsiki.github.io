import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeviantart, faGoodreads, faInstagram, faStrava } from '@fortawesome/free-brands-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';
import Like from 'src/components/common/Like';
import { LikeVariant } from 'src/components/common/Like/Like';

import styles from './about.module.scss';

interface Props {
  isExtended?: boolean;
}

const AboutHobbies = ({ isExtended = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const hobbies = [
    {
      name: 'Running',
      icon: faStrava,
      link: 'https://www.strava.com/athletes/15896548',
      isExtended: false
    },
    {
      name: 'Reading',
      icon: faGoodreads,
      link: 'https://www.goodreads.com/thevioletmaniac',
      isExtended: false
    },
    {
      name: 'Spending time with my dog',
      icon: faInstagram,
      link: 'https://www.instagram.com/keshathecorgi',
      isExtended: false
    },
    {
      name: 'Crossfit',
      isExtended: false
    },
    {
      name: 'Puzzles',
      isExtended: true
    },
    {
      name: 'Creating something',
      icon: faDeviantart,
      link: 'https://www.deviantart.com/tvm-resources',
      isExtended: false
    },
    {
      name: 'Learning english',
      isExtended: true
    },
    {
      name: 'Traveling',
      isExtended: false
    },
    {
      name: 'Writing',
      icon: faPen,
      link: 'https://dtsiki.github.io/blog',
      isExtended: true
    }
  ];

  const renderHobbies = useMemo(() => {
    return hobbies.map((hobby) => {
      if (isExtended) {
        return (
          <li
            key={hobby.name}
            className='list__item spacer bottom small'>
            <Like
              icon={hobby.link ? hobby.icon : undefined}
              variant={LikeVariant.LIGHT}>
              {hobby.link ? (
                <a
                  href={hobby.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={bind(['link', styles.about__likeLink])}>
                  {hobby.name}
                </a>
              ) : hobby.name}
            </Like>
          </li>
        );
      }

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
  }, [hobbies, isExtended]);

  return (
    <ul className={bind(['list inline', styles.about__hobbies, { [styles.about__likes]: isExtended }])}>
      {renderHobbies}
    </ul>
  );
};

export default AboutHobbies;
