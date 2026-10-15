import type { StaticImageData } from 'next/image';
import type { TranslationObject } from '~types/language';

export interface IImageThumbnailProps {
  src: string;
  alt: string | TranslationObject;
}
