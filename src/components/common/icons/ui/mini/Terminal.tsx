import type { FC, SVGProps } from 'react';

export const TerminalMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='4' y='20' width='16' height='2' fill='currentColor' />
      <rect x='4' y='2' width='16' height='2' fill='currentColor' />
      <rect x='2' y='4' width='2' height='16' fill='currentColor' />
      <rect x='20' y='4' width='2' height='16' fill='currentColor' />
      <rect x='12' y='12' width='2' height='2' transform='rotate(90 12 12)' fill='currentColor' />
      <rect x='10' y='10' width='2' height='2' transform='rotate(90 10 10)' fill='currentColor' />
      <rect x='8' y='8' width='2' height='2' transform='rotate(90 8 8)' fill='currentColor' />
      <rect x='10' y='14' width='2' height='2' transform='rotate(90 10 14)' fill='currentColor' />
      <rect x='8' y='16' width='2' height='2' transform='rotate(90 8 16)' fill='currentColor' />
    </svg>
  );
};
