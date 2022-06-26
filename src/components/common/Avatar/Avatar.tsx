import React, { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';

import classNames from 'classnames';

import styles from './avatar.module.scss';

interface Props {
  image: StaticImageData;
  label?:  string;
  className?: string;
}

const Avatar = ({ image, label, className }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <figure className={bind([styles.avatar, className])}>
      <Image
        className={styles.avatar__image}
        src={image}
        alt='Me' />
      {label && <figcaption className={styles.avatar__label}>{label}</figcaption>}
    </figure>
  );
};

export default Avatar;
