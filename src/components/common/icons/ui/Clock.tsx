import type { FC, SVGProps } from 'react';

//      <rect x='11' y='6' width='2' height='7' fill='currentColor' />

export const ClockMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='6' y='2' width='12' height='2' fill='currentColor' />
      <rect x='2' y='6' width='2' height='12' fill='currentColor' />
      <rect x='20' y='6' width='2' height='12' fill='currentColor' />
      <rect x='18' y='4' width='2' height='2' fill='currentColor' />
      <rect x='4' y='4' width='2' height='2' fill='currentColor' />
      <rect width='12' height='2' transform='matrix(1 0 0 -1 6 22)' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(1 0 0 -1 18 20)' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(1 0 0 -1 4 20)' fill='currentColor' />
      <rect x='13' y='13' width='2' height='2' fill='currentColor' />
      <rect x='15' y='15' width='2' height='2' fill='currentColor' />
    </svg>
  );
};
