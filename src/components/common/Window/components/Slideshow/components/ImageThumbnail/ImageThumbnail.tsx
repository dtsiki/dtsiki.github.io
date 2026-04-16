import Image from 'next/image';
import { IImageThumbnailProps } from './ImageThumbnail.types';
import { useTranslate } from 'src/hooks/useTranslate';

export const ImageThumbnail = ({ image, alt }: IImageThumbnailProps) => {
  const { translate } = useTranslate();

  const getAltText = () => {
    if (typeof alt === 'string') {
      return alt;
    }

    if (typeof alt === 'object') {
      return translate(alt);
    }
  };

  return (
    <div className='image-box'>
      <Image className='image-box__wrapper' layout='fill' src={image} alt={getAltText()} />
    </div>
  );
};
