import { IAngleBracketsProps } from './AngleBrackets.types';

export const AngleBrackets = ({ children = '' }: IAngleBracketsProps) => {
  return <>&lt;{children}&gt;</>;
};
