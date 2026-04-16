import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const ArrowLeftIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='20' y='11' width='2' height='16' transform='rotate(90 20 11)' fill='currentColor' />
        <rect x='8' y='13' width='2' height='2' transform='rotate(90 8 13)' fill='currentColor' />
        <rect x='10' y='15' width='2' height='2' transform='rotate(90 10 15)' fill='currentColor' />
        <rect x='12' y='17' width='2' height='2' transform='rotate(90 12 17)' fill='currentColor' />
        <rect width='2' height='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 8 11)' fill='currentColor' />
        <rect width='8' height='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 10 15)' fill='currentColor' />
        <rect width='12' height='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 12 17)' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='20' y='11' width='2' height='16' transform='rotate(90 20 11)' fill='currentColor' />
      <rect x='8' y='13' width='2' height='2' transform='rotate(90 8 13)' fill='currentColor' />
      <rect x='10' y='15' width='2' height='2' transform='rotate(90 10 15)' fill='currentColor' />
      <rect x='12' y='17' width='2' height='2' transform='rotate(90 12 17)' fill='currentColor' />
      <rect width='2' height='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 8 11)' fill='currentColor' />
      <rect width='8' height='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 10 15)' fill='currentColor' />
      <rect width='12' height='2' transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 12 17)' fill='currentColor' />
    </svg>
  );
};
