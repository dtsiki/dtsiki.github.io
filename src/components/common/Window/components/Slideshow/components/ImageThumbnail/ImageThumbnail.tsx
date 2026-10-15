import Image from 'next/image';
import type { IImageThumbnailProps } from './ImageThumbnail.types';
import { useTranslate } from '~hooks/useTranslate';

export const ImageThumbnail = ({ src, alt }: IImageThumbnailProps) => {
  const { translate } = useTranslate();

  const getAltText = () => {
    if (typeof alt === 'string') {
      return alt;
    }

    if (typeof alt === 'object') {
      return translate(alt);
    }

    return '';
  };

  return (
    <div className='image-box'>
      <Image className='image-box__wrapper' layout='fill' src={src} alt={getAltText()} />
    </div>
  );
};
