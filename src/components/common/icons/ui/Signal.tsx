import type { FC, SVGProps } from 'react';

export const SignalIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='4' y='12' width='2' height='6' fill='currentColor' />
      <rect x='11' y='8' width='2' height='10' fill='currentColor' />
      <rect x='18' y='4' width='2' height='2' fill='currentColor' />
      <rect x='2' y='12' width='2' height='6' fill='currentColor' />
      <rect x='9' y='8' width='2' height='10' fill='currentColor' />
      <rect x='16' y='4' width='2' height='14' fill='currentColor' />
      <rect x='6' y='12' width='2' height='6' fill='currentColor' />
      <rect x='13' y='8' width='2' height='10' fill='currentColor' />
      <rect x='20' y='4' width='2' height='14' fill='currentColor' />
      <rect x='2' y='18' width='6' height='2' fill='currentColor' />
      <rect x='9' y='18' width='6' height='2' fill='currentColor' />
      <rect x='16' y='18' width='6' height='2' fill='currentColor' />
    </svg>
  );
};
