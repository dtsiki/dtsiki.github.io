import { StaticImageData } from 'next/image';
import { TranslationObject } from 'src/utils/translate';

export interface IImageThumbnailProps {
  image: StaticImageData;
  alt: string | TranslationObject;
}
