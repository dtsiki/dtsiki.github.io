import type { FC, SVGProps } from 'react';

export const RedoMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect width='14' height='2' transform='matrix(-1 0 0 1 20 8)' fill='currentColor' />
      <rect x='4' y='10' width='2' height='8' fill='currentColor' />
      <rect x='6' y='18' width='6' height='2' fill='currentColor' />
      <rect width='2' height='6' transform='matrix(-1 0 0 1 18 6)' fill='currentColor' />
      <rect width='2' height='8' transform='matrix(-1 0 0 1 16 4)' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(-1 0 0 1 16 12)' fill='currentColor' />
    </svg>
  );
};
