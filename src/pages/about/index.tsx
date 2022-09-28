import React, { ReactElement, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { faBriefcase, faCode, faGraduationCap, faHeart, faList, faSmile } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Link from 'next/link';

import Avatar from 'src/components/common/Avatar';
import Block from 'src/components/common/Block';
import AboutHero from './_hero/_hero';
import AboutWorkExperience from './_work-experience';
import AboutSkills from './_skills';
import AboutEducation from './_education';
import AboutHobbies from './_hobbies';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import Hero from 'src/components/layout/Hero';
import ExternalLink from 'src/components/common/ExternalLink';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Palette from 'src/components/common/Palette';
import Projects from 'src/components/common/Projects';
import AboutProjects from './_projects';
import LatestPosts from 'src/components/common/LatestPosts';

import styles from './about.module.scss';
import avatar from '/public/assets/avatar.jpeg';

export enum ViewType {
  SHORTEST = 'shortest',
  SHORT = 'short',
  LONGEST = 'longest'
}

const About = (): ReactElement => {
  const [viewType, setViewType] = useState(ViewType.SHORT);
  const resumeRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isResumeVisible = useIntersectionObserver(resumeRef);

  const bind = classNames.bind(styles);

  const handleView = (e: any): void => {
    const { id } = e.target;

    setViewType(id);
  }

  const items = [
    {
      id: nanoid(),
      title: 'Work experience',
      icon: faBriefcase,
      content: <AboutWorkExperience />,
      ref: workExperienceRef,
      showInNav: true
    },
    {
      id: nanoid(),
      title: 'Skills',
      icon: faCode,
      content: <AboutSkills />,
      isReversed: true,
      ref: skillsRef,
      showInNav: true
    },
    {
      id: nanoid(),
      title: 'Education',
      icon: faGraduationCap,
      content: <AboutEducation />,
      ref: educationRef,
      showInNav: true
    },
    {
      id: nanoid(),
      title: 'Hobbies',
      icon: faSmile,
      content: <AboutHobbies />,
      isReversed: true,
      ref: hobbiesRef,
      showInNav: true
    },
    {
      id: nanoid(),
      title: 'Projects',
      icon: faList,
      content: <AboutProjects />,
      ref: projectsRef,
      showInNav: true
    },
    {
      id: nanoid(),
      title: 'Thanks for watching!',
      icon: faHeart,
      isCentered: true
    }
  ];

  const renderItems = useMemo(() => {
    return items.map((item) => {
      const { id, title, icon, content, isReversed, isCentered, ref } = item;

      return (
        <div
          key={id}
          ref={ref}>
          <Block
            icon={icon}
            title={title}
            content={content}
            isReversed={isReversed}
            isCentered={isCentered} />
        </div>
      );
    });
  }, [items]);

  return (
    <div className={styles.about}>
      <AboutHero
        targetRef={resumeRef}
        showButton={!isResumeVisible} />
      <div
        ref={resumeRef}
        className={styles.about__actions}>
        <ul className={`switcher ${viewType}`}>
          <li className='switcher__item'>
            <input
              onChange={handleView}
              type='radio'
              className='switcher__input'
              id={ViewType.SHORTEST}
              name='radioSwitch'
              checked={viewType === ViewType.SHORTEST} />
            <label
              htmlFor={ViewType.SHORTEST}
              className='switcher__label'>{ViewType.SHORTEST}</label>
          </li>
          <li className='switcher__item'>
            <input
              onChange={handleView}
              type='radio'
              className='switcher__input'
              id={ViewType.SHORT}
              name='radioSwitch'
              checked={viewType === ViewType.SHORT} />
            <label
              htmlFor={ViewType.SHORT}
              className='switcher__label'>{ViewType.SHORT}</label>
          </li>
          <li className='switcher__item'>
            <input
              onChange={handleView}
              type='radio'
              className='switcher__input'
              id={ViewType.LONGEST}
              name='radioSwitch'
              checked={viewType === ViewType.LONGEST} />
            <label
              htmlFor={ViewType.LONGEST}
              className='switcher__label'>{ViewType.LONGEST}</label>
          </li>
        </ul>
      </div>
      {viewType === ViewType.SHORTEST && (
        <div className={styles.about__tab}>
          <div className={styles.about__section}>
            <div className='container'>
              <div className={styles.about__shortest}>
                <Avatar image={avatar} />
                <p className='spacer top medium'>
                  My name is Daria, I&#39;m a frontend developer 👋
                </p>
                <p className='spacer bottom large'>
                  Check out <Link href='/about/cv'>
                    <a className='link'>
                      my CV
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewType === ViewType.SHORT && (
        <div className={styles.about__tab}>
          <div className={styles.about__section}>
            <Avatar
              image={avatar}
              className={styles.about__avatar} />
            <div className='container'>
              {renderItems}
            </div>
          </div>
        </div>
      )}
      {viewType === ViewType.LONGEST && (
        <div className={styles.about__tab}>
          <div className={styles.about__section}>
            <div className='container'>
              <div className='spacer bottom large'>
                <Avatar image={avatar} />
              </div>
              <div className='row'>
                <div className={bind(['col col--50 col--tablet-100', styles.reversed])}>
                  <h2 className={styles.about__headline}>
                    My name is <span className='highlighted primary'>Daria</span>
                  </h2>
                  <h2 className={styles.about__headline}>
                    I&#39;m a <span className='highlighted secondary'>frontend</span> developer
                  </h2>
                  <h3 className={styles.about__headline}>
                    And this is my <span className='highlighted ghost'>journey</span>
                  </h3>
                </div>
                <div className='col col--50 col--tablet-100'>
                  <p className={styles.about__text}>
                    My interest in web development started back in <span className='underlined primary'>2009</span> when I decided to try creating my own little web art project. <ExternalLink
                      href='http://thevioletmaniac.narod.ru/'
                      label='It still alive!' />
                  </p>
                  <p className={styles.about__text}>
                    I created different stuff in Photoshop <span className='strikethroughed primary'>CS3 is my favorite version  for all times!</span>: icons, collages, wallpapers, textures, forum signatures, patterns, tumblr themes, PNGs, pixel art, layout templates, etc, etc, etc.
                    I especially loved to make collages. <ExternalLink
                      href='https://www.deviantart.com/tvm-resources'
                      label='Here' /> you can see it.
                  </p>
                  <p className={bind(['spacer bottom extra-large', styles.about__text])}>
                    I remember that time when JavaScript wasn&#39;t popular, everyone loves jQuery and CSS flexbox didn&#39;t exist. It was a great time, however!
                  </p>
                </div>
              </div>
            </div>
            <Hero variant={HeroVariant.PRIMARY}>
              <div className='container'>
                <div className='row'>
                  <div className={bind(['col col--50 col--tablet-100', styles.reversed])}>
                    <h2 className={styles.about__headline}>
                      Where I&#39;ve <span className='highlighted highlighted--primary'>worked</span>
                    </h2>
                  </div>
                  <div className='col col--50 col--tablet-100'>
                    <p className={styles.about__text}>
                      I had been a digital signal processor <span className='highlighted highlighted--dark'>engineer</span>.
                      In addition I have a <span className='underlined ghost'>masters degree</span> in computer science.
                    </p>
                    <p className={styles.about__text}>
                      In those days I engineered and maintained major features of digital signal processor based systems, proposed and implemented solutions with field programmable gate arrays, developed and maintained code primarily using <span className='highlighted highlighted--lavander'>C++, Assembler and VHDL</span>.
                    </p>
                    <p className={styles.about__text}>
                      It&#39;s all in the past for me because...
                    </p>
                  </div>
                </div>
              </div>
            </Hero>
            <Hero variant={HeroVariant.LIGHT}>
              <div className='container'>
                <div className='row'>
                  <div className={bind(['col col--50 col--tablet-100', styles.reversed])}>
                    <h2 className={styles.about__headline}>
                      Now I&#39;m working to make a better web: awesome, easy to use, accessible at all
                    </h2>
                    <h2 className={styles.about__headline}>
                      And I love what I do
                    </h2>
                  </div>
                  <div className='col col--50 col--tablet-100'>
                    <p className={styles.about__text}>
                      I have worked as a full-time <span className='underlined dotted primary'>frontend developer</span> since 2020 with a variety of different languages, platforms, frameworks and content management systems and I have solved various tasks and problems.
                    </p>
                    <p className={styles.about__text}>
                      I like to pay great attention to <span className='highlighted highlighted--grey'>semantic</span> and <span className='underlined solid primary'>accessibility</span>.
                      I write code that is standards based, easy to maintain and cross-browser compatible.
                    </p>
                    <p className={styles.about__text}>
                      The core technologies I&#39;m working with now: <span className='highlighted highlighted--lavander'>HTML, CSS</span> and its preprocessors and, of course,  <span className='highlighted highlighted--lavander'>JavaScript</span>.
                    </p>
                    <p className={styles.about__text}>
                      Check out the list below showing each technologies:
                    </p>
                  </div>
                </div>
              </div>
            </Hero>
            <Hero variant={HeroVariant.SECONDARY}>
              <div className='container'>
                <h2 className={bind([styles.about__headline, 'spacer large bottom'])}>
                  Tools or technologies I have worked with and my skills
                </h2>
                <AboutSkills isExtended />
              </div>
            </Hero>
            <Hero variant={HeroVariant.PRIMARY}>
              <div className='container'>
                <h2 className={bind([styles.about__headline, 'spacer large bottom'])}>
                  Outside of work I like
                </h2>
                <AboutHobbies />
              </div>
            </Hero>
            <Hero>
              <div className='container'>
                <div className={styles.about__pallete}>
                  <p className={styles.about__text}>
                    <span className='highlighted ghost'>The most important thing about me</span>
                  </p>
                  <h3 className={styles.about__subtitle}>
                    I&#39;m the <span className='highlighted primary'>violet</span> maniac
                  </h3>
                  <Palette />
                </div>
              </div>
            </Hero>
            <Hero>
              <Projects />
            </Hero>
            <Hero>
              <LatestPosts showThumbnails />
            </Hero>
            <Hero variant={HeroVariant.SECONDARY}>
              <div className='container'>
                <h2 className={styles.about__subtitle}>
                  Got any <span className='highlighted primary'>questions?</span>
                </h2>
                <h3 className={styles.about__subtitle}>
                  <span className='highlighted ghost'>Feel free</span> to reach me out
                </h3>
              </div>
            </Hero>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
