import React, { ReactElement, ReactNode } from 'react';

import styles from './slideshow.module.scss';

interface Props {
  title?: string | ReactNode;
  text?: string | ReactNode;
}

const SlideshowBaseSlide = ({ title = 'Click to add Title', text = 'Click to add Text' }: Props): ReactElement => {
  return (
    <div className={styles.slideshow__baseSlide}>
      <div className={styles.slideshow__baseTitle}>
        {title}
      </div>
      <div className={styles.slideshow__baseText}>
        {text}
      </div>
    </div>
  );
};

export default SlideshowBaseSlide;
