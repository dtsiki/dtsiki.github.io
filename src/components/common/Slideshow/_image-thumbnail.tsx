import React, { ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  image: StaticImageData;
  alt: string;
}

const SlideshowImageThumbnail = ({ image, alt }: Props): ReactElement => {
  return (
    <div className='image-box'>
      <Image
        className='image-box__wrapper'
        layout='fill'
        src={image}
        alt={alt} />
    </div>
  );
};

export default SlideshowImageThumbnail;
