import styles from './../../Slideshow.module.scss';

export const EmptySlide = () => {
  return (
    <li className={styles.slideshow__thumbnail}>
      <div className={styles.slideshow__preview}>
        <div className='image-box'>
          <div className='image-box__wrapper' />
        </div>
      </div>
    </li>
  );
};
