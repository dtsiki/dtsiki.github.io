import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const TypingMachineIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='3' y='20' width='18' height='2' fill='currentColor' />
        <rect x='1' y='16' width='2' height='4' fill='currentColor' />
        <rect x='3' y='14' width='2' height='2' fill='currentColor' />
        <rect x='19' y='14' width='2' height='2' fill='currentColor' />
        <rect x='21' y='16' width='2' height='4' fill='currentColor' />
        <rect x='5' y='12' width='14' height='2' fill='currentColor' />
        <rect x='6' y='17' width='2' height='12' transform='rotate(-90 6 17)' fill='currentColor' />
        <rect x='4' y='19' width='2' height='16' transform='rotate(-90 4 19)' fill='currentColor' />
        <rect width='2' height='10' transform='matrix(-1 0 0 1 6 4)' fill='currentColor' />
        <rect width='10' height='2' transform='matrix(-1 0 0 1 16 2)' fill='currentColor' />
        <rect width='2' height='8' transform='matrix(-1 0 0 1 20 6)' fill='currentColor' />
        <rect x='16' y='4' width='2' height='2' fill='currentColor' />
        <rect x='12' y='4' width='2' height='6' fill='currentColor' />
        <rect x='12' y='8' width='6' height='2' fill='currentColor' />
        <rect x='8' y='12' width='8' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_1138_2121)'>
        <path d='M28.96 25.91V27.43H30.48V30.48H32V24.38H30.48V25.91H28.96Z' fill='currentColor' />
        <path d='M30.48 21.33H28.96V24.38H30.48V21.33Z' fill='currentColor' />
        <path d='M30.48 30.48H1.53V32H30.48V30.48Z' fill='currentColor' />
        <path d='M28.96 18.29H27.43V21.33H28.96V18.29Z' fill='currentColor' />
        <path d='M28.96 27.4301H3.05V28.9501H28.96V27.4301Z' fill='currentColor' />
        <path d='M25.91 18.2899H27.43V13.7199H28.96V12.1899H25.91V18.2899Z' fill='currentColor' />
        <path d='M24.39 3.05002V4.57002H27.43V1.52002H25.91V3.05002H24.39Z' fill='currentColor' />
        <path d='M18.29 15.24H13.72V16.76H18.29V15.24Z' fill='currentColor' />
        <path d='M22.86 1.52V3.05H24.39V1.52H25.91V0H10.67V1.52H22.86Z' fill='currentColor' />
        <path
          d='M27.43 25.91V22.86H25.91V19.81H24.39V18.29H7.62V19.81H6.1V22.86H4.58V25.91H27.43ZM24.39 24.38H22.86V22.86H24.39V24.38ZM21.34 19.81H22.86V21.33H21.34V19.81ZM21.34 24.38H19.81V22.86H21.34V24.38ZM18.29 19.81H19.81V21.33H18.29V19.81ZM18.29 24.38H13.72V22.86H18.29V24.38ZM15.24 19.81H16.77V21.33H15.24V19.81ZM12.2 19.81H13.72V21.33H12.2V19.81ZM12.2 24.38H10.67V22.86H12.2V24.38ZM9.15 19.81H10.67V21.33H9.15V19.81ZM7.62 22.86H9.15V24.38H7.62V22.86Z'
          fill='currentColor'
        />
        <path
          d='M6.1 12.19H4.58V10.67H6.1V12.19H7.62V10.67H12.2V12.19H10.67V13.72H21.34V12.19H19.81V10.67H24.39V12.19H25.91V10.67H28.96V12.19H30.48V9.14002H27.43V7.62002H25.91V9.14002H22.86V7.62002H25.91V6.10002H22.86V3.05002H21.34V9.14002H10.67V1.52002H9.15V6.10002H6.1V7.62002H9.15V9.14002H6.1V7.62002H4.58V9.14002H1.53V10.67H3.05V13.72H4.58V18.29H6.1V12.19Z'
          fill='currentColor'
        />
        <path d='M4.58 18.29H3.05V21.33H4.58V18.29Z' fill='currentColor' />
        <path d='M3.05 21.33H1.53V24.38H3.05V21.33Z' fill='currentColor' />
        <path d='M1.53 27.43H3.05V25.91H1.53V24.38H0V30.48H1.53V27.43Z' fill='currentColor' />
        <path d='M1.53 6.09998H0V9.13998H1.53V6.09998Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_1138_2121'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
