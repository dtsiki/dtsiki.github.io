import type { FC, SVGProps } from 'react';

export const PrinterMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='6' y='2' width='12' height='2' fill='currentColor' />
      <rect x='4' y='8' width='16' height='2' fill='currentColor' />
      <rect x='6' y='4' width='2' height='4' fill='currentColor' />
      <rect x='2' y='8' width='2' height='8' fill='currentColor' />
      <rect x='16' y='4' width='2' height='4' fill='currentColor' />
      <rect x='2' y='16' width='4' height='2' fill='currentColor' />
      <rect x='6' y='14' width='2' height='6' fill='currentColor' />
      <rect x='16' y='14' width='2' height='6' fill='currentColor' />
      <rect x='6' y='12' width='12' height='2' fill='currentColor' />
      <rect x='6' y='20' width='12' height='2' fill='currentColor' />
      <rect x='18' y='16' width='4' height='2' fill='currentColor' />
      <rect x='20' y='8' width='2' height='8' fill='currentColor' />
    </svg>
  );
};
