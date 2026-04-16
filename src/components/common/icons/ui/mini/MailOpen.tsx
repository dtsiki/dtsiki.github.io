import type { FC, SVGProps } from 'react';

export const MailOpenMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect width='2' height='2' transform='matrix(1 0 0 -1 4 8)' fill='currentColor' />
      <rect x='6' y='12' width='2' height='2' fill='currentColor' />
      <rect x='4' y='10' width='2' height='2' fill='currentColor' />
      <rect x='18' y='10' width='2' height='2' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(1 0 0 -1 6 6)' fill='currentColor' />
      <rect x='8' y='14' width='8' height='2' fill='currentColor' />
      <rect x='20' y='8' width='2' height='2' transform='rotate(180 20 8)' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(-1 0 0 1 18 12)' fill='currentColor' />
      <rect x='18' y='6' width='2' height='2' transform='rotate(180 18 6)' fill='currentColor' />
      <rect width='8' height='2' transform='matrix(1 0 0 -1 8 4)' fill='currentColor' />
      <rect x='2' y='8' width='2' height='12' fill='currentColor' />
      <rect x='20' y='8' width='2' height='12' fill='currentColor' />
      <rect x='2' y='20' width='20' height='2' fill='currentColor' />
    </svg>
  );
};
