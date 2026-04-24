import { StaticImageData } from 'next/image';
import { TranslationObject } from 'src/types';

export interface IImageThumbnailProps {
  image: StaticImageData;
  alt: string | TranslationObject;
}
