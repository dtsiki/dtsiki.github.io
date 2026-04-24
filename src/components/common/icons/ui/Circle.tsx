import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const CircleIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini && props.useFilled) {
    return (
      <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='2' width='6' height='2' fill='currentColor' />
        <rect y='2' width='2' height='6' fill='currentColor' />
        <rect x='2' y='8' width='6' height='2' fill='currentColor' />
        <rect x='8' y='2' width='2' height='6' fill='currentColor' />
        <rect x='2' y='2' width='6' height='6' fill='currentColor' fillOpacity='0.7' />
      </svg>
    );
  }

  if (props.useMini) {
    return (
      <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='2' width='6' height='2' fill='currentColor' />
        <rect y='2' width='2' height='6' fill='currentColor' />
        <rect x='2' y='8' width='6' height='2' fill='currentColor' />
        <rect x='8' y='2' width='2' height='6' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='6' y='2' width='12' height='2' fill='currentColor' />
      <rect x='6' y='20' width='12' height='2' fill='currentColor' />
      <rect x='2' y='6' width='2' height='12' fill='currentColor' />
      <rect x='20' y='6' width='2' height='12' fill='currentColor' />
      <rect x='18' y='4' width='2' height='2' fill='currentColor' />
      <rect x='18' y='18' width='2' height='2' fill='currentColor' />
      <rect x='4' y='4' width='2' height='2' fill='currentColor' />
      <rect x='4' y='18' width='2' height='2' fill='currentColor' />
    </svg>
  );
};
