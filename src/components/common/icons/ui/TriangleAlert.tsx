import type { FC, SVGProps } from 'react';

export const TriangleAlertIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_1128_24183)'>
        <path
          d='M30.48 24.38H28.95V21.33H27.43V18.29H25.9V15.24H24.38V12.19H22.86V9.14H21.33V6.09H19.81V3.05H18.29V1.52H16.76V0H15.24V1.52H13.71V3.05H12.19V6.09H10.67V9.14H9.14V12.19H7.62V15.24H6.09V18.29H4.57V21.33H3.05V24.38H1.52V27.43H0V30.48H1.52V32H30.48V30.48H32V27.43H30.48V24.38ZM19.81 27.43H18.29V28.95H13.71V27.43H12.19V22.86H13.71V21.33H18.29V22.86H19.81V27.43ZM19.81 16.76H18.29V19.81H13.71V16.76H12.19V10.67H13.71V9.14H18.29V10.67H19.81V16.76Z'
          fill='currentColor'
        />
        <path d='M18.29 12.19H16.76V15.24H18.29V12.19Z' fill='currentColor' />
        <path d='M16.76 10.67H15.24V12.19H16.76V10.67Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_1128_24183'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
