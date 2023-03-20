import { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import { ThemeColor, ThemerEvent } from 'src/store/themer';
import { useStoreon } from 'storeon/react';
import { isElementVisible } from 'src/utils';
import useEventListener, { Event } from 'src/hooks/useEventListener';
import Preview from 'src/components/pages/blog/Preview';
import { projects } from 'src/constants';
import ProjectsHero from 'src/components/pages/projects/Hero/Hero';

import styles from './projects.module.scss';

const Projects = (): ReactElement => {
  const [topColor, setTopColor] = useState<ThemeColor>(ThemeColor.WHITE);
  const [bottomColor, setBottomColor] = useState<ThemeColor>(ThemeColor.WHITE);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useStoreon();

  const bind = classNames.bind(styles);

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

    if (isElementVisible(projectsRef)) {
      setTopColor(ThemeColor.VIOLET);
    }

    if (isElementVisible(projectsRef, bottomOffset)) {
      setBottomColor(ThemeColor.VIOLET);
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

  const onScrollDown = (): void => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const renderPreviews = useMemo(() => {
    return projects.map((preview) => {
      const { id, title, highlight, link, tags, thumbnail } = preview;

      return (
        <Preview
          key={id}
          title={title}
          highlight={highlight}
          link={link}
          hasExternalLink
          tags={tags}
          thumbnail={`assets/projects/previews/${thumbnail}.png`} />
      );
    });
  }, []);

  return (
    <div className={styles.projects}>
      <div ref={headerRef}>
        <ProjectsHero handleScroll={onScrollDown}/>
      </div>
      <div ref={projectsRef}>
        <div className='container'>
          <ul className={bind(['row', styles.projects__list])}>
            {renderPreviews}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
