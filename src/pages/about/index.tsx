import React, { ReactElement, useMemo, useRef } from 'react';

import { nanoid } from 'nanoid';
import { faBriefcase, faCode, faGraduationCap, faHeart, faList, faSmile } from '@fortawesome/free-solid-svg-icons';

import Avatar from 'src/components/common/Avatar';
import Block from 'src/components/common/Block';
import AboutHero from './_hero';
import AboutNav from './_nav';
import AboutWorkExperience from './_work-experience';
import AboutSkills from './_skills';
import AboutEducation from './_education';
import AboutHobbies from './_hobbies';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

import styles from './about.module.scss';
import avatar from '/public/assets/avatar.jpeg';
import AboutProjects from './_projects';

const About = (): ReactElement => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isResumeVisible = useIntersectionObserver(resumeRef);

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
  }, [items])

  return (
    <div className={styles.about}>
      <AboutHero
        targetRef={resumeRef}
        showButton={!isResumeVisible} />
      <div
        ref={resumeRef}
        className={styles.about__resume}>
        <AboutNav
          items={items}
          isVisible={isResumeVisible} />
        <Avatar
          image={avatar}
          className={styles.about__avatar} />
        <div className='container'>
          {renderItems}
        </div>
      </div>
    </div>
  );
};

export default About;
