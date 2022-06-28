import React, { ReactElement, useMemo, useRef } from 'react';

import AboutHero from 'src/components/custom/AboutHero';
import avatar from '/public/assets/avatar.jpeg';
import Avatar from 'src/components/common/Avatar';
import { faBriefcase, faCode, faGraduationCap, faHeart, faSmile } from '@fortawesome/free-solid-svg-icons';
import Block from 'src/components/common/Block';
import AboutWorkExperience from './_work-experience';
import AboutSkills from './_skills';
import AboutEducation from './_education';
import AboutHobbies from './_hobbies';
import { nanoid } from 'nanoid';

import styles from './about.module.scss';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

const About = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(ref);

  const blocks = [
    {
      title: 'Work experience',
      icon: faBriefcase,
      content: <AboutWorkExperience />
    },
    {
      title: 'Skills',
      icon: faCode,
      content: <AboutSkills />,
      isReversed: true
    },
    {
      title: 'Education',
      icon: faGraduationCap,
      content: <AboutEducation />
    },
    {
      title: 'Hobbies',
      icon: faSmile,
      content: <AboutHobbies />,
      isReversed: true
    },
    {
      title: 'Thanks for watching!',
      icon: faHeart,
      isCentered: true
    }
  ];

  const renderBlocks = useMemo(() => {
    return blocks.map((block) => {
      const { title, icon, content, isReversed, isCentered } = block;

      return (
        <Block
          key={nanoid()}
          icon={icon}
          title={title}
          content={content}
          isReversed={isReversed}
          isCentered={isCentered} />
      );
    });
  }, [blocks])

  return (
    <div className={styles.about}>
      <AboutHero
        targetRef={ref}
        showButton={!isVisible} />
      <div
        ref={ref}
        className={styles.about__resume}>
        <Avatar
          image={avatar}
          className={styles.about__avatar} />
        <div className='container'>
          {renderBlocks}
        </div>
      </div>
    </div>
  );
};

export default About;
