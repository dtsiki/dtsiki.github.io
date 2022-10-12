import React, { ReactElement, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { faBriefcase, faCode, faComments, faGraduationCap, faList, faSmile } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import Avatar from 'src/components/common/Avatar';
import Block from 'src/components/common/Block';
import AboutWorkExperience from './_work-experience';
import AboutSkills from './_skills';
import AboutEducation from './_education';
import AboutHobbies from './_hobbies';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import AboutProjects from './_projects';
import ShortAbout from 'src/components/pages/about/ShortAbout';
import LongestAbout from 'src/components/pages/about/LongestAbout';
import Gratitude from 'src/components/pages/about/Gratitude';
import Header from 'src/components/pages/about/Header';
import styles from './about.module.scss';
import avatar from '/public/assets/avatar.jpeg';
import AboutContacts from './_contacts';

export enum ViewType {
  SHORTEST = 'shortest',
  SHORT = 'short',
  LONGEST = 'longest'
}

const About = (): ReactElement => {
  const [viewType, setViewType] = useState(ViewType.SHORTEST);
  const resumeRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const isResumeVisible = useIntersectionObserver(resumeRef);

  const bind = classNames.bind(styles);

  const handleView = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id } = e.target;

    setViewType(id as ViewType);
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
      title: 'Contacts',
      icon: faComments,
      content: <AboutContacts />,
      ref: contactsRef,
      showInNav: true,
      isReversed: true
    }
  ];

  const renderItems = useMemo(() => {
    return items.map((item) => {
      const { id, title, icon, content, isReversed, ref } = item;

      return (
        <div
          key={id}
          ref={ref}>
          <Block
            icon={icon}
            title={title}
            content={content}
            isReversed={isReversed} />
        </div>
      );
    });
  }, [items]);

  return (
    <div className={styles.about}>
      <Header
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
          <div className={styles.shortAbout__section}>
            <div className='container'>
              <ShortAbout />
            </div>
          </div>
        </div>
      )}
      {viewType === ViewType.SHORT && (
        <div className={styles.about__tab}>
          <div className={styles.about__section}>
            <div className={styles.about__header}>
              <Avatar
                label='Yay, that&#39;s me!'
                image={avatar}
                className={styles.about__avatar} />
            </div>
            <div className='container'>
              {renderItems}
            </div>
            <Gratitude />
          </div>
        </div>
      )}
      {viewType === ViewType.LONGEST && (
        <div className={styles.about__tab}>
          <div className={styles.about__section}>
            <LongestAbout />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
