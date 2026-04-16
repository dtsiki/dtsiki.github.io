import type { FC, SVGProps } from 'react';

export const ChartMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='4' y='2' width='16' height='2' fill='currentColor' />
      <rect x='4' y='20' width='16' height='2' fill='currentColor' />
      <rect x='2' y='4' width='2' height='16' fill='currentColor' />
      <rect x='20' y='4' width='2' height='16' fill='currentColor' />
      <rect x='7' y='11' width='2' height='6' fill='currentColor' />
      <rect x='11' y='7' width='2' height='10' fill='currentColor' />
      <rect x='15' y='13' width='2' height='4' fill='currentColor' />
    </svg>
  );
};
