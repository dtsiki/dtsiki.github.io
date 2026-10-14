import type { ReactNode } from 'react';

export const NOTE_TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export type TNoteType = typeof NOTE_TYPE[keyof typeof NOTE_TYPE];

export interface INoteProps {
  children: ReactNode;
  title?: ReactNode;
  type?: TNoteType;
}
