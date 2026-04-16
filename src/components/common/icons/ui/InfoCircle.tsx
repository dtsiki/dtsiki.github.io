import type { FC, SVGProps } from 'react';

export const InfoCircleIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_1128_24518)'>
        <path
          d='M30.48 9.14H28.95V6.09H27.43V4.57H25.9V3.05H22.86V1.52H19.81V0H12.19V1.52H9.14V3.05H6.09V4.57H4.57V6.09H3.05V9.14H1.52V12.19H0V19.81H1.52V22.86H3.05V25.9H4.57V27.43H6.09V28.95H9.14V30.48H12.19V32H19.81V30.48H22.86V28.95H25.9V27.43H27.43V25.9H28.95V22.86H30.48V19.81H32V12.19H30.48V9.14ZM12.19 6.09H13.71V4.57H18.29V6.09H19.81V10.67H18.29V12.19H13.71V10.67H12.19V6.09ZM22.86 25.9H21.33V27.43H13.71V25.9H12.19V15.24H13.71V13.71H18.29V15.24H19.81V22.86H21.33V24.38H22.86V25.9Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1128_24518'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
