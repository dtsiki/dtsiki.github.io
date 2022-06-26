import React, { MutableRefObject, ReactElement, useMemo } from 'react';

import styles from './intro-hero.module.scss';
import Hero from 'src/components/layout/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import { nanoid } from 'nanoid';
import Link from 'next/link';

interface Props {
  sourceRef:  MutableRefObject<HTMLElement | null>;
}

const IntroHero = ({ sourceRef }: Props): ReactElement => {
  const tags = [
    'frontend',
    'html',
    'css',
    'javascript',
    'violet maniac',
    'ex DSP engineer',
    'master of computer science',
    'run',
    'bookworm',
    'crossfit',
    'corgi lover'
  ];

  const tagList = useMemo(() => {
    return tags.map((tag) => {

      return (
        <li
          key={nanoid()}
          className='tag'>
          {tag}
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
          <div className='col col--50 col--mobile-100'>
            <h1 className={styles.introHero__title}>
              Let me introduce myself
            </h1>
          </div>
          <div className='col col--50 col--mobile-100'>
            <ul className='tags tags--primary'>
              {tagList}
              <li className='tag tag--with-link'>
                <Link href='/about'>
                  <a className='tag__link'>
                    Read more
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      color='#8a2be2' />
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

export default IntroHero;
