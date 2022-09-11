import React, { ReactElement, ReactNode, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Window from '../Window';
import CustomScrollbar from '../CustomScrollbar';

import styles from './slideshow.module.scss';

export enum WindowType {
  WINDOW = 'window',
  BROWSER = 'browser',
  SLIDESHOW = 'slideshow'
}

export enum WindowPatternVariant {
  WAVY = 'wavy',
  CROSS = 'cross',
  SMILEY = 'smiley'
}

interface Props {
  slides: Array<{ id: string; slide: ReactNode; thumbnail?: ReactNode }>;
  name?: string;
  fileTitle?: string;
}

const Slideshow = ({ name, fileTitle = 'Presentation1.ppt', slides }: Props): ReactElement => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [showEmptySlide] = useState<boolean>(true);
  const bind = classNames.bind(styles);

  const selectSlide = (index: number): void => {
    setSelectedSlide(index);
  }

  const renderThumbnails = useMemo(() => {
    return slides?.map((item, index) => {
      const { id, slide, thumbnail } = item;

      return (
        <li
          key={id}
          className={bind([styles.slideshow__thumbnail, { [styles.selected]: selectedSlide === index }])}>
          <span className={styles.slideshow__number}>
            {index + 1}
          </span>
          <div className={styles.slideshow__preview}>
            {thumbnail || slide}
          </div>
          <button
            className={styles.slideshow__button}
            onClick={() => selectSlide(index)}>
            <span className='visually-hidden'>Select slide</span>
          </button>
        </li>
      )
    })

  }, [slides, selectedSlide]);

  return (
    <div className={styles.slideshow}>
      <Window
        type={WindowType.SLIDESHOW}
        fileTitle={fileTitle}
        title={name}
        showMenu>
        <div className={styles.slideshow__wrapper}>
          <div className='row row--no-margin'>
            <div className={bind(['col col--25'])}>
              <div className={styles.slideshow__sidebarName}>
                Slides
                <FontAwesomeIcon icon={faXmark} />
              </div>
              <div  className={styles.slideshow__sidebar}>
                <CustomScrollbar maxHeight={450}>
                  <ul className={styles.slideshow__thumbnails}>
                    {renderThumbnails}
                    {showEmptySlide && (
                      <li className={styles.slideshow__thumbnail}>
                        <div className={styles.slideshow__preview}>
                          <div className='image-box'>
                            <div className='image-box__wrapper' />
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </CustomScrollbar>
              </div>
            </div>
            <div className='col col--75'>
              <div className={styles.slideshow__main}>
                {slides && (
                  selectedSlide > 0 ? (
                    <div className={styles.slideshow__mainThumbnail}>
                      {slides[selectedSlide].slide}
                    </div>
                  ) : (
                    <div className={styles.slideshow__mainSlide}>
                      {slides[0].slide}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.slideshow__footer}>
            {slides && (
              <div className={styles.slideshow__count}>
                Slide {selectedSlide + 1} of {slides?.length}
              </div>
            )}
          </div>
        </div>
      </Window>
    </div>
  );
};

export default Slideshow;
