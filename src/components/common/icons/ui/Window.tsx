import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const WindowIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='4' y='2' width='16' height='2' fill='currentColor' />
        <rect x='4' y='8' width='16' height='2' fill='currentColor' />
        <rect x='4' y='20' width='16' height='2' fill='currentColor' />
        <rect x='2' y='4' width='2' height='16' fill='currentColor' />
        <rect x='20' y='4' width='2' height='16' fill='currentColor' />
        <rect x='5' y='5' width='2' height='2' fill='currentColor' />
        <rect x='8' y='5' width='2' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect width='20' height='6.6667' fill='currentColor' />
      <rect y='6.6665' width='2' height='13.3334' fill='currentColor' />
      <rect x='18' y='6.6665' width='2' height='13.3334' fill='currentColor' />
      <rect y='20' width='2.22223' height='20' transform='rotate(-90 0 20)' fill='currentColor' />
    </svg>
  );
};
