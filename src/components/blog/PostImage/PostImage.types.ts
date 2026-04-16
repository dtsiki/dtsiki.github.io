import { StaticImageData } from 'next/image';

export interface IPostImageProps {
  src: StaticImageData;
  alt: string;
  fileTitle: string;
  maxWidth?: number;
}
