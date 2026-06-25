import type { FC, SVGProps } from 'react';

export const DotMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='6' height='6' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='2' width='2' height='2' fill='currentColor' />
      <rect y='2' width='2' height='2' fill='currentColor' />
      <rect x='2' y='4' width='2' height='2' fill='currentColor' />
      <rect x='4' y='2' width='2' height='2' fill='currentColor' />
    </svg>
  );
};
