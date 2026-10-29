import type { ReactNode } from 'react';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { GitHubIcon, PlaneMiniIcon, MailIcon } from 'src/components/common/icons/ui';
import { HHIcon } from '~components/common/icons/HH';
import { HabrIcon } from '~components/common/icons/Habr';

export enum EContactType {
  EMAIL = 'EMAIL',
  SOCIAL = 'SOCIAL',
}

type TContactIcon = {
  fontAwesome?: IconDefinition;
  svg?: ReactNode;
};

type TContact = {
  title: string;
  icon: TContactIcon;
  type: EContactType;
  link: string;
};

export const CONTACTS_CONFIG: TContact[] = [
  {
    type: EContactType.EMAIL,
    title: 'thevioletmaniac@gmail.com',
    link: 'thevioletmaniac@gmail.com',
    icon: {
      svg: <MailIcon useMini={true} />,
    },
  },
  {
    type: EContactType.SOCIAL,
    title: 'Телеграм',
    link: 'https://t.me/thevioletmaniac',
    icon: {
      svg: <PlaneMiniIcon />,
    },
  },
  {
    type: EContactType.SOCIAL,
    title: 'GitHub',
    icon: {
      svg: <GitHubIcon />,
    },
    link: 'https://github.com/dtsiki',
  },
  {
    type: EContactType.SOCIAL,
    title: 'Хабр.Карьера',
    icon: {
      svg: <HabrIcon />,
    },
    link: 'https://career.habr.com/thevioletmaniac',
  },
  {
    type: EContactType.SOCIAL,
    icon: {
      svg: <HHIcon />,
    },
    title: 'Резюме на hh.ru',
    link: 'https://omsk.hh.ru/resume/867658c5ff07dcfb470039ed1f56646b6b4733',
  },
];
