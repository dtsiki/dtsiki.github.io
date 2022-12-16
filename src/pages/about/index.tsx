import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { faBriefcase, faCode, faComments, faGraduationCap, faList, faSmile } from '@fortawesome/free-solid-svg-icons';
import { useStoreon } from 'storeon/react';

import MyAvatar from 'src/components/common/MyAvatar';
import Block from 'src/components/common/Block';
import AboutHeader from 'src/components/pages/about/Header';
import AboutShortAbout from 'src/components/pages/about/ShortAbout';
import AboutGratitude from 'src/components/pages/about/Gratitude';
import AboutWorkExperience from 'src/components/pages/about/WorkExperience';
import AboutSkills from 'src/components/pages/about/Skills';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import { isElementVisible } from 'src/utils';
import { ThemeColor, ThemerEvent } from 'src/store/themer';
import useEventListener, { Event } from 'src/hooks/useEventListener';
import AboutEducation from './_education';
import AboutHobbies from './_hobbies';
import AboutProjects from './_projects';
import AboutContacts from './_contacts';

import styles from './about.module.scss';

export enum ViewType {
  SHORTEST = 'shortest',
  SHORT = 'short'
}

const About = (): ReactElement => {
  const [viewType, setViewType] = useState(ViewType.SHORTEST);
  const [topColor, setTopColor] = useState<ThemeColor>(ThemeColor.WHITE);
  const [bottomColor, setBottomColor] = useState<ThemeColor>(ThemeColor.WHITE);
  const headerRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const isResumeVisible = useIntersectionObserver(resumeRef);

  const { dispatch } = useStoreon();

  const handleScroll = (): void => {
    const bottomOffset = {
      top: document.documentElement.clientHeight - 50,
      bottom: document.documentElement.clientHeight
    };

    if (isElementVisible(headerRef)) {
      setTopColor(ThemeColor.WHITE);
    }

    if (isElementVisible(headerRef, bottomOffset)) {
      setBottomColor(ThemeColor.WHITE);
    }
  };

  useEventListener(Event.SCROLL, handleScroll);

  useEffect(() => {
    dispatch(ThemerEvent.SET_TOP_COLOR, topColor);
    dispatch(ThemerEvent.SET_BOTTOM_COLOR, bottomColor);
  }, []);

  useEffect(() => {
    if (topColor) {
      dispatch(ThemerEvent.SET_TOP_COLOR, topColor);
    }
  }, [topColor]);

  useEffect(() => {
    if (bottomColor) {
      dispatch(ThemerEvent.SET_BOTTOM_COLOR, bottomColor);
    }
  }, [bottomColor]);

  const handleView = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id } = e.target;

    setViewType(id as ViewType);
  };

  const shortAboutItems = [
    {
      id: nanoid(),
      title: 'Work experience',
      icon: faBriefcase,
      content: <AboutWorkExperience />
    },
    {
      id: nanoid(),
      title: 'Skills',
      icon: faCode,
      content: <AboutSkills />,
      isReversed: true
    },
    {
      id: nanoid(),
      title: 'Education',
      icon: faGraduationCap,
      content: <AboutEducation />
    },
    {
      id: nanoid(),
      title: 'Hobbies',
      icon: faSmile,
      content: <AboutHobbies />,
      isReversed: true
    },
    {
      id: nanoid(),
      title: 'Projects',
      icon: faList,
      content: <AboutProjects />
    },
    {
      id: nanoid(),
      title: 'Contacts',
      icon: faComments,
      content: <AboutContacts />,
      isReversed: true
    }
  ];

  const renderSwitchers = useMemo(() => {
    return Object.entries(ViewType)
      .map(([key, value]) => {
        return (
          <li
            key={key}
            className='switcher__item'>
            <input
              onChange={handleView}
              type='radio'
              className='switcher__input'
              id={value}
              name='radioSwitch'
              checked={viewType === value} />
            <label
              htmlFor={value}
              className='switcher__label'>{value}</label>
          </li>
        );
      });
  }, [viewType]);

  const renderShortAboutItems = useMemo(() => {
    return shortAboutItems.map((item) => {
      const { id, title, icon, content, isReversed } = item;

      return (
        <li key={id}>
          <Block
            icon={icon}
            title={title}
            content={content}
            isReversed={isReversed} />
        </li>
      );
    });
  }, [shortAboutItems]);

  return (
    <div className={styles.about}>
      <div ref={headerRef}>
        <AboutHeader
          targetRef={resumeRef}
          showButton={!isResumeVisible} />
      </div>
      <div
        ref={resumeRef}
        className={styles.about__actions}>
        <ul className={`switcher ${viewType}`}>
          {renderSwitchers}
        </ul>
      </div>
      {viewType === ViewType.SHORTEST && (
        <div className={styles.about__tab}>
          <div className={styles.shortAbout__section}>
            <div className='container'>
              <AboutShortAbout />
            </div>
          </div>
        </div>
      )}
      {viewType === ViewType.SHORT && (
        <div className={styles.about__tab}>
          <div className={styles.about__section}>
            <div className={styles.about__header}>
              <MyAvatar className={styles.about__avatar} />
            </div>
            <ul className='container'>
              {renderShortAboutItems}
            </ul>
            <AboutGratitude />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
