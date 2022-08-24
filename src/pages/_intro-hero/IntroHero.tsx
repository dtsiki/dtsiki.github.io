import React, { MutableRefObject, ReactElement, useMemo } from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

import styles from './intro-hero.module.scss';

interface Props {
  sourceRef:  MutableRefObject<HTMLElement | null>;
}

const HomeIntroHero = ({ sourceRef }: Props): ReactElement => {
  const tags = [
    'frontend developer',
    'violet maniac',
    'runner',
    'bookworm',
    'crossfitter',
    'corgi lover',
    'diyer'
  ];

  const tagList = useMemo(() => {
    return tags.map((tag) => {

      return (
        <li
          key={nanoid()}
          className='list__item'>
          <Tag variant={TagVariant.LIGHT}>{tag}</Tag>
        </li>
      );
    });
  }, [tags]);

  return (
    <Hero
      heroRef={sourceRef}
      variant={HeroVariant.PRIMARY}
      className={styles.introHero}>
      <div className='container'>
        <div className='row row--centered'>
          <div className='col col--50 col--tablet-100'>
            <h1 className={styles.introHero__title}>
              Let me introduce myself
            </h1>
          </div>
          <div className='col col--50 col--tablet-100'>
            <ul className='list inline'>
              {tagList}
              <li className='list__item'>
                <Link href='/about'>
                  <a className='link-with-tag'>
                    <Tag
                      variant={TagVariant.LIGHT}
                      isOutlined>
                      Read more
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Tag>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Hero>

  );
};

export default HomeIntroHero;
