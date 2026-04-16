import { IBaseSlideProps } from './BaseSlide.types';
import { CLICK_TO_ADD_TEXT, CLICK_TO_ADD_TITLE } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './BaseSlide.module.scss';

export const BaseSlide = ({ title, text }: IBaseSlideProps) => {
  const { translate } = useTranslate();

  return (
    <div className={styles.base_slide}>
      <div className={styles.base_slide__title}>{title || translate(CLICK_TO_ADD_TITLE)}</div>
      <div className={styles.base_slide__text}>{text || translate(CLICK_TO_ADD_TEXT)}</div>
    </div>
  );
};
