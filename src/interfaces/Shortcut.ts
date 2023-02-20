import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { StaticImageData } from 'next/image';

export interface IShortcut {
  id: string;
  label: string;
  action?: (any: any) => void;
  icon?: IconDefinition;
  customIcon?: StaticImageData;
}
