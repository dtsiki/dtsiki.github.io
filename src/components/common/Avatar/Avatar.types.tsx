import { MutableRefObject } from 'react';
import { StaticImageData } from 'next/image';

export interface IAvatarProps {
  image: StaticImageData;
  label?: string;
  className?: string;
  avatarRef?: MutableRefObject<HTMLElement | null>;
}
