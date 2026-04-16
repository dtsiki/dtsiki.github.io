import { ReactNode } from 'react';

export enum ENoteType {
  DEFAULT = 'DEFAULT',
  ALERT = 'ALERT',
}

export interface INoteProps {
  children: ReactNode;
  title?: ReactNode;
  type?: ENoteType;
}
