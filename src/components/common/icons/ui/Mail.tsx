import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const MailIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='6' y='8' width='2' height='2' fill='currentColor' />
        <rect x='8' y='10' width='2' height='2' fill='currentColor' />
        <rect width='2' height='2' transform='matrix(-1 0 0 1 18 8)' fill='currentColor' />
        <rect width='2' height='2' transform='matrix(-1 0 0 1 16 10)' fill='currentColor' />
        <rect x='10' y='12' width='4' height='2' fill='currentColor' />
        <rect x='2' y='6' width='2' height='12' fill='currentColor' />
        <rect x='20' y='6' width='2' height='12' fill='currentColor' />
        <rect x='4' y='4' width='16' height='2' fill='currentColor' />
        <rect x='4' y='18' width='16' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M32 6.1001H30.47V25.9001H32V6.1001Z' fill='currentColor' />
      <path d='M30.47 25.9H28.95V27.43H30.47V25.9Z' fill='currentColor' />
      <path d='M30.47 4.57007H28.95V6.10007H30.47V4.57007Z' fill='currentColor' />
      <path d='M28.95 7.62H27.43V10.67H28.95V7.62Z' fill='currentColor' />
      <path d='M28.95 27.4301H3.04999V28.9501H28.95V27.4301Z' fill='currentColor' />
      <path d='M27.43 22.8601H25.9V24.3801H27.43V22.8601Z' fill='currentColor' />
      <path d='M27.43 10.67H25.9V12.19H27.43V10.67Z' fill='currentColor' />
      <path d='M25.9 21.3301H24.38V22.8601H25.9V21.3301Z' fill='currentColor' />
      <path d='M25.9 12.1901H24.38V13.7101H25.9V12.1901Z' fill='currentColor' />
      <path d='M24.38 19.8101H22.85V21.3301H24.38V19.8101Z' fill='currentColor' />
      <path d='M24.38 13.7101H22.85V15.2401H24.38V13.7101Z' fill='currentColor' />
      <path d='M22.85 18.29H21.33V19.81H22.85V18.29Z' fill='currentColor' />
      <path d='M22.85 15.24H21.33V16.76H22.85V15.24Z' fill='currentColor' />
      <path d='M21.33 16.76H18.28V18.29H21.33V16.76Z' fill='currentColor' />
      <path d='M18.28 18.29H13.71V19.81H18.28V18.29Z' fill='currentColor' />
      <path d='M13.71 16.76H10.66V18.29H13.71V16.76Z' fill='currentColor' />
      <path d='M10.66 18.29H9.14001V19.81H10.66V18.29Z' fill='currentColor' />
      <path d='M10.66 15.24H9.14001V16.76H10.66V15.24Z' fill='currentColor' />
      <path d='M9.14 19.8101H7.62V21.3301H9.14V19.8101Z' fill='currentColor' />
      <path d='M9.14 13.7101H7.62V15.2401H9.14V13.7101Z' fill='currentColor' />
      <path d='M7.62 21.3301H6.09V22.8601H7.62V21.3301Z' fill='currentColor' />
      <path d='M7.62 12.1901H6.09V13.7101H7.62V12.1901Z' fill='currentColor' />
      <path d='M6.09001 22.8601H4.57001V24.3801H6.09001V22.8601Z' fill='currentColor' />
      <path d='M6.09001 10.67H4.57001V12.19H6.09001V10.67Z' fill='currentColor' />
      <path d='M28.95 3.05005H3.04999V4.57005H28.95V3.05005Z' fill='currentColor' />
      <path d='M4.56999 7.62H3.04999V10.67H4.56999V7.62Z' fill='currentColor' />
      <path d='M3.04999 25.9H1.51999V27.43H3.04999V25.9Z' fill='currentColor' />
      <path d='M3.04999 4.57007H1.51999V6.10007H3.04999V4.57007Z' fill='currentColor' />
      <path d='M1.52 6.1001H0V25.9001H1.52V6.1001Z' fill='currentColor' />
    </svg>
  );
};
