import { ReactNode } from 'react';

export enum ENoteType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export interface INoteProps {
  children: ReactNode;
  title?: ReactNode;
  type?: ENoteType;
}
