import type { FC, SVGProps } from 'react';

export const ListMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='10' y='5' width='12' height='2' fill='currentColor' />
      <rect x='10' y='9' width='8' height='2' fill='currentColor' />
      <rect x='10' y='13' width='12' height='2' fill='currentColor' />
      <rect x='10' y='17' width='8' height='2' fill='currentColor' />
      <path d='M4 7V9H6V7H4ZM8 11H2V5H8V11Z' fill='currentColor' />
      <rect x='2' y='13' width='6' height='2' fill='currentColor' />
      <rect x='2' y='17' width='6' height='2' fill='currentColor' />
      <rect x='2' y='17' width='2' height='2' transform='rotate(-90 2 17)' fill='currentColor' />
      <rect x='6' y='17' width='2' height='2' transform='rotate(-90 6 17)' fill='currentColor' />
    </svg>
  );
};
