import React, { MutableRefObject, ReactElement, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFolder } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';

import styles from './intro-hero.module.scss';

interface Props {
  sourceRef:  MutableRefObject<HTMLElement | null>;
}

const IntroHero = ({ sourceRef }: Props): ReactElement => {
  const [showLongIntro] = useState<boolean>(false);

  const router = useRouter();
  const bind = classNames.bind(styles);

  const longTags = [
    'frontend developer',
    'violet maniac',
    'runner',
    'bookworm',
    'crossfitter',
    'corgi lover',
    'diyer'
  ];

  const renderLongTagsList = useMemo(() => {
    return longTags.map((tag) => {

      return (
        <li
          key={nanoid()}
          className='list__item'>
          <Tag variant={TagVariant.LIGHT}>{tag}</Tag>
        </li>
      );
    });
  }, [longTags]);

  const shortTags = [
    'frontend',
    'violet color',
    'run',
    'books',
    'corgi',
    'english',
    'puzzles',
    'travel'
  ];

  const onShortcutClicked = (): void => {
    router.push('/about');
  }

  const renderShortTagsList = useMemo(() => {
    return shortTags.map((tag) => {

      return (
        <li
          key={nanoid()}
          className='col col--20 col--mobile-50'>
          <div className={styles.introHero__shortcut}>
            <Shortcut
              variant={ShortcutVariant.LIGHT}
              icon={faFolder}
              name={tag}
              handleAction={onShortcutClicked} />
          </div>
        </li>
      );
    });
  }, [shortTags]);

  return (
    <Hero
      heroRef={sourceRef}
      variant={HeroVariant.PRIMARY}
      className={styles.introHero}>
      <div className='container'>
        <Window
          type={WindowType.FOLDER}
          filesCount={shortTags.length}
          title='D:\dtsiki'
          isInverted>
          <ul className={bind(['row', styles.introHero__folder])}>
            {renderShortTagsList}
          </ul>
        </Window>
        {showLongIntro && (
          <div className='row row--centered'>
            <div className='col col--50 col--tablet-100'>
              <h1 className={styles.introHero__title}>
                Let me introduce myself
              </h1>
            </div>
            <div className='col col--50 col--tablet-100'>
              <ul className='list inline'>
                {renderLongTagsList}
                <li className='list__item'>
                  <Link href='/about'>
                    <a className='link-with-tag'>
                      <Tag
                        variant={TagVariant.LIGHT}
                        isOutlined>
                        Read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Tag>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={styles.introHero__footer}>
        <Link href='/about'>
          <a className='link-with-tag'>
            <Tag
              variant={TagVariant.LIGHT}
              isOutlined>
              Let me introduce myself
              <FontAwesomeIcon icon={faArrowRight} />
            </Tag>
          </a>
        </Link>
      </div>
    </Hero>

  );
};

export default IntroHero;
