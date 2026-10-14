import type { MutableRefObject } from 'react';
import type { StaticImageData } from 'next/image';

export interface IAvatarProps {
  image: StaticImageData;
  label?: string;
  className?: string;
  avatarRef?: MutableRefObject<HTMLElement | null>;
}
