import React, { MutableRefObject, ReactElement, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faHeart } from '@fortawesome/free-solid-svg-icons';
import { nanoid } from 'nanoid';

import MyAvatar from 'src/components/common/MyAvatar';
import ExternalLink from 'src/components/common/ExternalLink';
import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import AboutHobbies from 'src/pages/about/_hobbies';
import Palette from 'src/components/common/Palette';
import LatestProjects from 'src/components/common/LatestProjects';
import LatestPosts from 'src/components/common/LatestPosts';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';
import Contacts from 'src/components/common/Contacts';
import AboutGratitude from '../Gratitude';

import styles from './longest-about.module.scss';
import AboutSkills from '../Skills';

const AboutLongestAbout = (): ReactElement => {
  const forewordRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const qualificationsRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const violetManiacRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const bind = classNames.bind(styles);

  const content = [
    {
      title: 'foreword',
      ref: forewordRef
    },
    {
      title: 'work-experience',
      ref: workExperienceRef
    },
    {
      title: 'work-experience(2)',
      ref: qualificationsRef
    },
    {
      title: 'skills',
      ref: skillsRef
    },
    {
      title: 'hobbies',
      ref: hobbiesRef
    },
    {
      title: 'violet-maniac',
      ref: violetManiacRef
    },
    {
      title: 'projects',
      ref: projectsRef
    },
    {
      title: 'blog',
      ref: blogRef
    },
    {
      title: 'contacts',
      ref: contactsRef
    }
  ];

  const onShortcutClicked = (ref: MutableRefObject<HTMLElement | null>): void => {
    const element = ref.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 100;
      const offset = element.top + window.pageYOffset - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  const renderContent = useMemo(() => {
    return content.map((item) => {
      const { title, ref } = item;

      return (
        <li
          key={nanoid()}
          className='col col--20 col--mobile-50'>
          <div className={styles.longestAbout__shortcut}>
            <Shortcut
              variant={ShortcutVariant.PRIMARY}
              icon={faFileLines}
              name={`${title}.txt`}
              handleAction={() => onShortcutClicked(ref)} />
          </div>
        </li>
      );
    });
  }, [content]);

  return (
    <div className={styles.lognestAbout}>
      <div className={styles.longestAbout__tableOfContent}>
        <div className='container'>
          <div className='spacer top bottom large'>
            <Window
              type={WindowType.FOLDER}
              filesCount={content.length}
              title='D:\dtsiki'>
              <ul className={bind(['row', styles.longestAbout__folder])}>
                {renderContent}
              </ul>
            </Window>
          </div>
        </div>
      </div>
      <Hero heroRef={forewordRef}>
        <div className='container'>
          <div className='row'>
            <div className='col col--40 col--tablet-100 col--reversed'>
              <div className='spacer bottom medium'>
                <MyAvatar />
              </div>
              <h2 className='heading-l3'>
                My name is <span className='accented accented--primary'>Daria</span>
              </h2>
              <h2 className='heading-l3'>
                I&#39;m a <span className='accented accented--primary'>frontend</span> developer
              </h2>
            </div>
            <div className='col col--60 col--tablet-100'>
              <p className='heading-l4'>
                My interest in web development started back in <span className='underlined primary'>2009</span> when I decided to try creating my own little web art project. <ExternalLink
                  href='http://thevioletmaniac.narod.ru/'
                  label='It&#39;s still alive!' />
              </p>
              <p className='heading-l4'>
                I created different stuff in Photoshop <span className='strikethroughed primary'>CS3 is my favorite version  for all times!</span>: icons, collages, wallpapers, textures, forum signatures, patterns, tumblr themes, PNGs, pixel art, layout templates, etc, etc, etc.
                I especially loved to make collages. <ExternalLink
                  href='https://www.deviantart.com/tvm-resources'
                  label='Here' /> you can check out my old art works.
              </p>
              <p className='heading-l4'>
                Broadly speaking, I&#39;m literally a frontend dinosaur.
                I remember that time when JavaScript wasn&#39;t popular not even a bit, everyone was keen on jQuery and CSS flexbox didn&#39;t exist yet.
                It was a great time!
              </p>
              <p className='heading-l4 spacer bottom extra-large'>
                However, web development was just a hobby for me in those days.
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <Hero
        heroRef={workExperienceRef}
        variant={HeroVariant.PRIMARY}>
        <div className='container'>
          <div className='row'>
            <div className='col col--40 col--tablet-100 col--reversed'>
              <h2 className='heading-l3'>
                Once upon a time...
              </h2>
            </div>
            <div className='col col--60 col--tablet-100'>
              <p className='heading-l4'>
                I had been a digital signal processor <span className='accented accented--light'>engineer</span> for over five years.
              </p>
              <p className='heading-l4'>
                Back in the days, I wore my white lab coat, engineered and maintained major features of digital signal processor based systems, proposed and implemented solutions with field programmable gate arrays, developed and maintained code primarily using <span className='highlighted highlighted--lavander'>C++</span>, <span className='highlighted highlighted--lavander'>Assembler</span> and hardware description languages such as <span className='highlighted highlighted--lavander'>VHDL</span>, <span className='highlighted highlighted--lavander'>AHDL</span>, etc.
              </p>
              <p className='heading-l4'>
                And by the way, I have a <span className='accented accented--light'>masters degree</span> in computer science.
              </p>
              <p className='heading-l4'>
                But once I realized that my engineer&#39;s career had stucked in the rut and I decided to change everything and to do something that I really love...
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <Hero
        heroRef={qualificationsRef}
        variant={HeroVariant.LIGHT}>
        <div className='container'>
          <div className='row'>
            <div className='col col--40 col--tablet-100 col--reversed'>
              <h2 className='heading-l3 spacer bottom small'>
                <span className='width-limiter medium'>
                  Now I&#39;m working to make a better web:
                </span>
              </h2>
              <ul className='list'>
                <li className='heading-l3'>
                  <span className='stroke primary'>
                    awesome
                  </span>
                </li>
                <li className='heading-l3'>
                  <span className='stroke primary'>
                    easy to use
                  </span>
                </li>
                <li className='heading-l3'>
                  <span className='stroke primary'>
                  accessible at all
                  </span>
                </li>
              </ul>
            </div>
            <div className='col col--60 col--tablet-100'>
              <p className='heading-l4'>
                I have worked as a full-time <span className='accented accented--primary'>frontend developer</span> since 2020 with a variety of different languages, platforms, frameworks and content management systems and I have solved various tasks and problems.
                Now I love what I do and I do what I love <span className={styles.longestAbout__heart}><FontAwesomeIcon icon={faHeart} /></span>
              </p>
              <p className='heading-l4'>
                I pay great attention to <span className='accented accented--primary'>semantic</span> and <span className='accented accented--primary'>accessibility</span>.
                I write code that is standards based, easy to maintain and cross-browser compatible.
              </p>
              <p className='heading-l4'>
                The core technologies I&#39;m working with now: <span className='highlighted highlighted--lavander'>HTML, CSS</span> and its preprocessors and, of course,  <span className='highlighted highlighted--lavander'>JavaScript</span>.
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <Hero
        heroRef={skillsRef}
        variant={HeroVariant.SECONDARY}>
        <div className='container'>
          <div className={styles.longestAbout__likes}>
            <h2 className='heading-l3 spacer bottom medium'>
              Skills
            </h2>
            <p className='heading-l4 spacer bottom medium'>
              Tech stack I have worked with:
            </p>
            <div className='width-limiter large'>
              <AboutSkills isExtended />
            </div>
          </div>
        </div>
      </Hero>
      <div ref={projectsRef}>
        <LatestProjects />
      </div>
      <Hero
        heroRef={hobbiesRef}
        variant={HeroVariant.PRIMARY}>
        <div className='container'>
          <div className={styles.longestAbout__likes}>
            <h2 className='heading-l3 spacer bottom medium'>
              Hobbies
            </h2>
            <p className='heading-l4 spacer bottom medium'>
              I&#39;m keen on working but also I like:
            </p>
            <div className='width-limiter large'>
              <AboutHobbies isExtended />
            </div>
          </div>
        </div>
      </Hero>
      <div ref={blogRef}>
        <LatestPosts showThumbnails />
      </div>
      <div ref={contactsRef}>
        <Contacts />
      </div>
      <Hero heroRef={violetManiacRef}>
        <div className='container'>
          <div className={styles.longestAbout__pallete}>
            <p className='spacet bottom medium'>
              Last but not least, the most important thing about me:
            </p>
            <h3 className='heading-l2'>
              I&#39;m the <span className='stroke primary'>violet</span> maniac
            </h3>
            <Palette />
          </div>
        </div>
      </Hero>
      <AboutGratitude />
    </div>
  );
};

export default AboutLongestAbout;
