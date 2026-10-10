import { useMemo, useState } from 'react';
import { isNumber } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { ISlideshowProps } from './Slideshow.types';
import { CustomScrollbar } from '../../../CustomScrollbar';
import { EmptySlide } from './components/EmptySlide/EmptySlide';
import { OF, SELECT_SLIDE, SLIDE, SLIDES } from 'src/i18n';
import { WindowFooter } from '../WindowFooter';
import { useTranslate } from 'src/hooks/useTranslate';
import { PlusIcon } from 'src/components/common/icons/ui/Plus';
import { BaseSlide } from './components/BaseSlide';

import styles from './Slideshow.module.scss';

export const Slideshow = ({ slides }: ISlideshowProps) => {
  const bind = classNames.bind(styles);
  const { translate, language } = useTranslate();

  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [showEmptySlide, setShowEmptySlide] = useState<number | null>(null);

  const onSlideThumbnailClicked = (thumbnailIndex: number) => {
    setShowEmptySlide(null);
    setSelectedSlide(thumbnailIndex);
  };

  const getSlideNumber = () => {
    if (isNumber(showEmptySlide)) {
      return showEmptySlide + 1 + (slides?.length || 0);
    }

    return selectedSlide + 1;
  };

  const thumbnails = useMemo(() => {
    return slides?.map((item, index) => {
      const { id, thumbnail } = item;

      return (
        <li key={id} className={bind([styles.slideshow__thumbnail, { [styles.selected]: selectedSlide === index }])}>
          <span className={styles.slideshow__number}>{index + 1}</span>
          {thumbnail ? <div className={styles.slideshow__preview}>{thumbnail[language]}</div> : <EmptySlide />}
          <button
            className={styles.slideshow__button}
            onClick={() => onSlideThumbnailClicked(index)}
            aria-label={translate(SELECT_SLIDE)}></button>
        </li>
      );
    });
  }, [slides, selectedSlide, language]);

  const emptyThumbnail = useMemo(() => {
    return (
      <li className={styles.slideshow__thumbnail} key='empty-thumbnail'>
        <div className={styles.slideshow__preview}>
          <div className='image-box'>
            <div className='image-box__wrapper'>
              <PlusIcon className={styles.slideshow__thumbnail_icon} />
            </div>
          </div>
        </div>
      </li>
    );
  }, []);

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__wrapper}>
        <div className={styles.slideshow__content}>
          <div className={styles.slideshow__sidebar}>
            <div className={styles.slideshow__sidebar_heading}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={styles.slideshow__sidebar_thumbnails}>
              <CustomScrollbar maxHeight={425}>
                <ul className={styles.slideshow__thumbnails}>
                  {thumbnails}
                  {emptyThumbnail}
                </ul>
              </CustomScrollbar>
            </div>
          </div>
          <div className={styles.slideshow__main}>
            <div className={styles.slideshow__frame}>
              {isNumber(showEmptySlide) ? (
                <div className={styles.slideshow__slide}>
                  <BaseSlide />
                </div>
              ) : (
                slides &&
                (selectedSlide > 0 ? (
                  <div className={styles.slideshow__slide}>{slides[selectedSlide].content}</div>
                ) : (
                  <div className={styles.slideshow__slide}>{slides[0].content}</div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className={styles.slideshow__footer}>
          <WindowFooter content={`${translate(SLIDE)} ${getSlideNumber()} ${translate(OF)} ${slides?.length || 0}`} />
        </div>
      </div>
    </div>
  );
};
