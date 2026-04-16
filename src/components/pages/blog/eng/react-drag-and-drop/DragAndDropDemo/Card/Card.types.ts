export enum ECardType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export interface ICardProps {
  title: string;
  variant?: ECardType;
}
