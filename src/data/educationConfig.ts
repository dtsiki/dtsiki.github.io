import { BACHELOR, MASTER } from 'src/i18n';
import type { TranslationObject } from '~types/language';

export type TEducationConfig = {
  speciality: TranslationObject;
  year: string;
};

export const EDUCATION_CONFIG: TEducationConfig[] = [
  {
    speciality: BACHELOR,
    year: '2010 - 2014',
  },
  {
    speciality: MASTER,
    year: '2014 - 2016',
  },
];
