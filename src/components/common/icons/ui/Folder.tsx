import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const FolderIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='4' y='4' width='6' height='2' fill='currentColor' />
        <rect x='4' y='18' width='16' height='2' fill='currentColor' />
        <rect x='20' y='8' width='2' height='10' fill='currentColor' />
        <rect x='2' y='6' width='2' height='12' fill='currentColor' />
        <rect x='10' y='6' width='10' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='4' y='4' width='6' height='2' fill='currentColor' />
      <rect x='4' y='18' width='16' height='2' fill='currentColor' />
      <rect x='20' y='8' width='2' height='10' fill='currentColor' />
      <rect x='2' y='6' width='2' height='12' fill='currentColor' />
      <rect x='10' y='6' width='10' height='2' fill='currentColor' />
    </svg>
  );
};
