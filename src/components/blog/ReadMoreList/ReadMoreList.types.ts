import type { TLanguage } from '~types/language';

export type TReadMoreSource = {
  id: string;
  link: string;
  label: string;
};

export interface IReadMoreListProps {
  items: Array<TReadMoreSource>;
  language?: TLanguage;
}
