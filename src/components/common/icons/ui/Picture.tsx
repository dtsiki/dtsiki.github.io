import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const PictureIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='2' y='2' width='20' height='2' fill='currentColor' />
        <rect x='2' y='20' width='20' height='2' fill='currentColor' />
        <rect x='2' y='4' width='2' height='16' fill='currentColor' />
        <rect x='20' y='4' width='2' height='16' fill='currentColor' />
        <rect x='16' y='12' width='2' height='2' fill='currentColor' />
        <rect x='14' y='14' width='2' height='2' fill='currentColor' />
        <rect x='18' y='14' width='2' height='2' fill='currentColor' />
        <rect x='10' y='14' width='2' height='2' fill='currentColor' />
        <rect x='12' y='16' width='2' height='2' fill='currentColor' />
        <rect x='14' y='18' width='2' height='2' fill='currentColor' />
        <rect x='20' y='16' width='2' height='2' fill='currentColor' />
        <rect x='8' y='16' width='2' height='2' fill='currentColor' />
        <rect x='6' y='18' width='2' height='2' fill='currentColor' />
        <rect x='8' y='6' width='2' height='2' fill='currentColor' />
        <rect x='6' y='8' width='2' height='2' fill='currentColor' />
        <rect x='8' y='10' width='2' height='2' fill='currentColor' />
        <rect x='10' y='8' width='2' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M27.425 6.09H25.905V4.57H24.385V3.04H22.855V1.52H21.335V0H3.04501V32H28.955V7.62H27.425V6.09ZM27.425 30.47H4.57501V1.52H19.805V9.14H27.425V30.47Z'
        fill='currentColor'
      />
      <path
        d='M19.805 19.81V18.28H18.285V19.81H9.145V18.28H7.615V7.62H6.095V24.38H7.615V21.33H24.385V24.38H25.905V10.66H24.385V18.28H22.855V19.81H19.805Z'
        fill='currentColor'
      />
      <path d='M24.385 24.38H7.61502V25.9H24.385V24.38Z' fill='currentColor' />
      <path d='M22.855 16.76H21.335V18.28H22.855V16.76Z' fill='currentColor' />
      <path d='M21.335 15.24H18.285V16.76H21.335V15.24Z' fill='currentColor' />
      <path d='M18.285 16.76H16.765V18.28H18.285V16.76Z' fill='currentColor' />
      <path d='M16.765 15.24H15.235V16.76H16.765V15.24Z' fill='currentColor' />
      <path d='M15.235 13.71H12.195V15.24H15.235V13.71Z' fill='currentColor' />
      <path d='M12.195 15.24H10.665V16.76H12.195V15.24Z' fill='currentColor' />
      <path d='M10.665 16.76H9.14502V18.28H10.665V16.76Z' fill='currentColor' />
      <path d='M12.195 9.14001H9.14502V12.19H12.195V9.14001Z' fill='currentColor' />
      <path d='M16.765 6.09H7.61502V7.62H16.765V6.09Z' fill='currentColor' />
    </svg>
  );
};
