import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const CodingIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='7' y='3' width='2' height='2' fill='currentColor' />
        <rect x='15' y='13' width='2' height='2' fill='currentColor' />
        <rect x='5' y='5' width='2' height='4' fill='currentColor' />
        <rect x='13' y='15' width='2' height='4' fill='currentColor' />
        <rect x='9' y='5' width='2' height='4' fill='currentColor' />
        <rect x='17' y='15' width='2' height='4' fill='currentColor' />
        <rect x='7' y='9' width='2' height='2' fill='currentColor' />
        <rect x='15' y='19' width='2' height='2' fill='currentColor' />
        <rect x='13' y='3' width='4' height='2' fill='currentColor' />
        <rect x='5' y='13' width='4' height='2' fill='currentColor' />
        <rect x='15' y='5' width='2' height='4' fill='currentColor' />
        <rect x='7' y='15' width='2' height='4' fill='currentColor' />
        <rect x='13' y='9' width='6' height='2' fill='currentColor' />
        <rect x='5' y='19' width='6' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_1128_24589)'>
        <path d='M32 1.53H30.48V30.48H32V1.53Z' fill='currentColor' />
        <path d='M30.48 30.48H1.52V32H30.48V30.48Z' fill='currentColor' />
        <path
          d='M28.95 3.05H3.05V28.96H28.95V3.05ZM15.24 6.1H16.76V12.19H15.24V6.1ZM9.14 6.1H13.71V12.19H9.14V6.1ZM6.1 6.1H7.62V12.19H6.1V6.1ZM6.1 13.72H10.67V19.81H6.1V13.72ZM12.19 25.91H10.67V27.43H9.14V25.91H10.67V22.86H9.14V21.34H10.67V22.86H12.19V25.91ZM12.19 13.72H13.71V19.81H12.19V13.72ZM18.29 27.43H13.71V25.91H18.29V27.43ZM15.24 19.81V13.72H19.81V19.81H15.24ZM22.86 22.86H21.33V25.91H22.86V27.43H21.33V25.91H19.81V22.86H21.33V21.34H22.86V22.86ZM22.86 19.81H21.33V13.72H22.86V19.81ZM22.86 12.19H18.29V6.1H22.86V12.19ZM25.9 19.81H24.38V13.72H25.9V19.81ZM25.9 12.19H24.38V6.1H25.9V12.19Z'
          fill='currentColor'
        />
        <path d='M21.33 7.62H19.81V10.67H21.33V7.62Z' fill='currentColor' />
        <path d='M18.29 15.24H16.76V18.29H18.29V15.24Z' fill='currentColor' />
        <path d='M12.19 7.62H10.67V10.67H12.19V7.62Z' fill='currentColor' />
        <path d='M9.14 15.24H7.62V18.29H9.14V15.24Z' fill='currentColor' />
        <path d='M30.48 0H1.52V1.53H30.48V0Z' fill='currentColor' />
        <path d='M1.52 1.53H0V30.48H1.52V1.53Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_1128_24589'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
