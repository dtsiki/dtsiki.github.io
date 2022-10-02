import React, { MutableRefObject, ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';

import classNames from 'classnames';

import styles from './avatar.module.scss';

interface Props {
  image: StaticImageData;
  label?:  string;
  className?: string;
  avatarRef?: MutableRefObject<HTMLElement | null>;
}

const Avatar = ({ image, label, className, avatarRef }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <figure
      ref={avatarRef}
      className={bind([styles.avatar, className, 'tooltip primary'])}>
      <Image
        className={styles.avatar__image}
        src={image}
        alt={label} />
      {label && <figcaption className={bind(['tooltip__message', styles.avatar__label])}>
        {label}
      </figcaption>}
    </figure>
  );
};

export default Avatar;
