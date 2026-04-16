import type { FC, SVGProps } from 'react';

export const BrushMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='7' y='2' width='10' height='2' fill='currentColor' />
      <rect x='5' y='4' width='2' height='10' fill='currentColor' />
      <rect x='17' y='2' width='2' height='12' fill='currentColor' />
      <rect x='13' y='2' width='2' height='6' fill='currentColor' />
      <rect x='9' y='2' width='2' height='4' fill='currentColor' />
      <rect x='5' y='10' width='14' height='2' fill='currentColor' />
      <rect x='7' y='14' width='10' height='2' fill='currentColor' />
      <rect x='9' y='16' width='2' height='4' fill='currentColor' />
      <rect x='13' y='16' width='2' height='4' fill='currentColor' />
      <rect x='9' y='20' width='6' height='2' fill='currentColor' />
    </svg>
  );
};
