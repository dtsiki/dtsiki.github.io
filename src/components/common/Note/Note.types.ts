import { ReactNode } from 'react';

export enum ENoteType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export const NoteType = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
} as const;

export type NoteType = typeof NoteType[keyof typeof NoteType];

export interface INoteProps {
  children: ReactNode;
  title?: ReactNode;
  type?: ENoteType | NoteType;
}
