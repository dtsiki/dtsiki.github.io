import { Language } from 'src/types';

export type TReadMoreSource = {
  id: string;
  link: string;
  label: string;
};

export interface IReadMoreListProps {
  items: Array<TReadMoreSource>;
  language?: Language;
}
