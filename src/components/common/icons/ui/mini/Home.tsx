import type { FC, SVGProps } from 'react';

export const HomeMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='2' y='20' width='20' height='2' fill='currentColor' />
      <rect x='20' y='10' width='2' height='10' fill='currentColor' />
      <rect x='2' y='10' width='2' height='10' fill='currentColor' />
      <rect x='4' y='8' width='2' height='2' fill='currentColor' />
      <rect x='6' y='6' width='2' height='2' fill='currentColor' />
      <rect x='8' y='4' width='2' height='2' fill='currentColor' />
      <rect x='10' y='2' width='4' height='2' fill='currentColor' />
      <rect x='14' y='4' width='2' height='2' fill='currentColor' />
      <rect x='16' y='6' width='2' height='2' fill='currentColor' />
      <rect x='18' y='8' width='2' height='2' fill='currentColor' />
      <rect x='8' y='14' width='2' height='6' fill='currentColor' />
      <rect x='8' y='12' width='8' height='2' fill='currentColor' />
      <rect x='14' y='14' width='2' height='6' fill='currentColor' />
    </svg>
  );
};
