import { ReactNode } from 'react';

export type TDocPage = {
  id: string;
  content?: ReactNode[];
};

export interface IDocPageProps {
  page: TDocPage;
  order: number;
}
