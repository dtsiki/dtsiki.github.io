import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ShareIcon, GitHubIcon, PlaneMiniIcon, MailIcon } from 'src/components/common/icons/ui';

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
      //svg: <HabrIcon />,
      svg: <ShareIcon />,
    },
    link: 'https://career.habr.com/thevioletmaniac',
  },
];
