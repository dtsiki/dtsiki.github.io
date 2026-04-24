import type { FC, SVGProps } from 'react';

export const HeartIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_1128_24860)'>
        <path d='M1.52 9.14H30.48V28.95H32V3.05H30.48V7.62H1.52V3.05H0V28.95H1.52V9.14Z' fill='currentColor' />
        <path d='M30.48 28.95H1.52V30.48H30.48V28.95Z' fill='currentColor' />
        <path
          d='M4.57 12.19V25.91H27.43V12.19H4.57ZM13.71 19.81H12.19V21.33H10.67V22.86H9.14V21.33H10.67V19.81H12.19V18.29H10.67V16.76H9.14V15.24H10.67V16.76H12.19V18.29H13.71V19.81ZM22.86 19.81H16.76V18.29H22.86V19.81Z'
          fill='currentColor'
        />
        <path d='M10.67 4.57H9.14V6.1H10.67V4.57Z' fill='currentColor' />
        <path d='M7.62 4.57H6.1V6.1H7.62V4.57Z' fill='currentColor' />
        <path d='M4.57 4.57H3.05V6.1H4.57V4.57Z' fill='currentColor' />
        <path d='M30.48 1.52H1.52V3.05H30.48V1.52Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_1128_24860'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
