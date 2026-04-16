import { nanoid } from 'nanoid';
import { DSP_ENGINEER, FRONTEND_DEVELOPER_TEAMLEAD, WEB_DEVELOPER, CDBA, FRONTEND_DEVELOPER } from 'src/i18n';
import { TranslationObject } from 'src/types';

export type TCompanyType = string | TranslationObject | undefined;

export type TWorkExperience = {
  id: string;
  company?: TCompanyType;
  position: TranslationObject;
  start: string;
  end?: string;
};

export const WORK_EXPERIENCE_CONFIG: TWorkExperience[] = [
  {
    id: nanoid(),
    position: FRONTEND_DEVELOPER,
    start: 'Sep 2025',
  },
  {
    id: nanoid(),
    company: 'Infomaximum',
    position: FRONTEND_DEVELOPER_TEAMLEAD,
    start: 'Apr 2023',
    end: 'Aug 2025',
  },
  {
    id: nanoid(),
    company: 'Ronas IT',
    position: FRONTEND_DEVELOPER,
    start: 'Aug 2021',
    end: 'Feb 2023',
  },
  {
    id: nanoid(),
    company: 'ADCI Solutions',
    position: FRONTEND_DEVELOPER,
    start: 'June 2020',
    end: 'Aug 2021',
  },
  {
    id: nanoid(),
    company: CDBA,
    position: DSP_ENGINEER,
    start: 'Sep 2014',
    end: 'Jan 2020',
  },
  {
    id: nanoid(),
    position: WEB_DEVELOPER,
    start: 'Sep 2009',
    end: 'Sep 2014',
  },
];
