import type { FC, SVGProps } from 'react';

export const SadRobotMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='4' y='6' width='16' height='2' fill='currentColor' />
      <rect x='4' y='20' width='16' height='2' fill='currentColor' />
      <rect x='2' y='8' width='2' height='12' fill='currentColor' />
      <rect x='20' y='8' width='2' height='12' fill='currentColor' />
      <rect x='11' y='4' width='2' height='4' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(1 0 0 -1 8 18)' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(1 0 0 -1 14 18)' fill='currentColor' />
      <rect width='4' height='2' transform='matrix(1 0 0 -1 10 16)' fill='currentColor' />
      <rect x='8' y='10' width='2' height='2' fill='currentColor' />
      <rect x='14' y='10' width='2' height='2' fill='currentColor' />
      <rect x='13' y='2' width='4' height='2' fill='currentColor' />
      <rect y='12' width='2' height='2' fill='currentColor' />
      <rect x='22' y='12' width='2' height='2' fill='currentColor' />
    </svg>
  );
};
