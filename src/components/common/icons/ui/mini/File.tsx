import type { FC, SVGProps } from 'react';

export const FileMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect width='2' height='16' transform='matrix(-1 0 0 1 6 4)' fill='currentColor' />
      <rect width='12' height='2' transform='matrix(-1 0 0 1 16 2)' fill='currentColor' />
      <rect width='2' height='14' transform='matrix(-1 0 0 1 20 6)' fill='currentColor' />
      <rect width='16' height='2' transform='matrix(-1 0 0 1 20 20)' fill='currentColor' />
      <rect x='16' y='4' width='2' height='2' fill='currentColor' />
      <rect x='12' y='4' width='2' height='6' fill='currentColor' />
      <rect x='12' y='8' width='6' height='2' fill='currentColor' />
    </svg>
  );
};
