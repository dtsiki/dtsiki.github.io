import Image from 'next/image';
import classNames from 'classnames';
import { IAvatarProps } from './Avatar.types';

import styles from './Avatar.module.scss';

export const Avatar = ({ image, label, className, avatarRef }: IAvatarProps) => {
  const bind = classNames.bind(styles);

  return (
    <figure ref={avatarRef} className={bind([styles.avatar, className, 'tooltip primary'])}>
      <Image className={styles.avatar__image} src={image} alt={label} />
      {label && <figcaption className={bind(['tooltip__message', styles.avatar__tooltip])}>{label}</figcaption>}
    </figure>
  );
};
