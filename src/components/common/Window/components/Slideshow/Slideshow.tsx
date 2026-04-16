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
  const [emptyThumbnails, setEmptyThumbnails] = useState<number>(1);
  const [showEmptySlide, setShowEmptySlide] = useState<number | null>(null);

  const onEmptyThumbnailClicked = (thumbnailIndex: number) => {
    if (thumbnailIndex + 1 === emptyThumbnails) {
      setEmptyThumbnails(emptyThumbnails + 1);
    }

    setShowEmptySlide(thumbnailIndex);
  };

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

  const renderThumbnails = useMemo(() => {
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

  const renderEmptyThumbnails = useMemo(() => {
    return Array(emptyThumbnails)
      .fill(0)
      .map((_, index) => {
        return (
          <li className={styles.slideshow__thumbnail} key={`empty-thumbnail-${index}`}>
            <div className={styles.slideshow__preview}>
              <div className='image-box'>
                <div className='image-box__wrapper'>
                  {index + 1 === emptyThumbnails && <PlusIcon className={styles.slideshow__thumbnail_icon} />}
                </div>
              </div>
            </div>
            <button
              className={styles.slideshow__button}
              onClick={() => onEmptyThumbnailClicked(index)}
              aria-label={translate(SELECT_SLIDE)}></button>
          </li>
        );
      });
  }, [emptyThumbnails]);

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__wrapper}>
        <div className='row row--no-margin'>
          <div className={bind(['col col--25'])}>
            <div className={styles.slideshow__sidebar_heading}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={styles.slideshow__sidebar}>
              <CustomScrollbar maxHeight={400}>
                <ul className={styles.slideshow__thumbnails}>
                  {renderThumbnails}
                  {renderEmptyThumbnails}
                </ul>
              </CustomScrollbar>
            </div>
          </div>
          <div className='col col--75'>
            <div className={styles.slideshow__main}>
              {isNumber(showEmptySlide) ? (
                <div className={styles.slideshow__mainSlide}>
                  <BaseSlide />
                </div>
              ) : (
                slides &&
                (selectedSlide > 0 ? (
                  <div className={styles.slideshow__mainThumbnail}>{slides[selectedSlide].content}</div>
                ) : (
                  <div className={styles.slideshow__mainSlide}>{slides[0].content}</div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className={styles.slideshow__footer}>
          <WindowFooter
            content={`${translate(SLIDE)} ${getSlideNumber()} ${translate(OF)} ${
              emptyThumbnails + (slides?.length || 0)
            }`}
          />
        </div>
      </div>
    </div>
  );
};
