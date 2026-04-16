import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const TextFileIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect width='2' height='16' transform='matrix(-1 0 0 1 4 4)' fill='currentColor' />
        <rect width='12' height='2' transform='matrix(-1 0 0 1 16 2)' fill='currentColor' />
        <rect width='2' height='12' transform='matrix(-1 0 0 1 22 8)' fill='currentColor' />
        <rect width='16' height='2' transform='matrix(-1 0 0 1 20 20)' fill='currentColor' />
        <rect x='18' y='6' width='2' height='2' fill='currentColor' />
        <rect x='16' y='4' width='2' height='2' fill='currentColor' />
        <rect x='12' y='4' width='2' height='6' fill='currentColor' />
        <rect x='12' y='10' width='8' height='2' fill='currentColor' />
        <rect x='6' y='12' width='4' height='2' fill='currentColor' />
        <rect x='6' y='16' width='6' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_1138_2425)'>
        <path d='M28.952 4.57495H27.432V30.475H28.952V4.57495Z' fill='currentColor' />
        <path d='M27.432 3.04504H25.902V4.57504H27.432V3.04504Z' fill='currentColor' />
        <path d='M25.902 1.52502H24.382V3.04502H25.902V1.52502Z' fill='currentColor' />
        <path
          d='M25.9 7.61504H24.38V6.10004H22.86V4.57504H21.33V3.04504H3.052V32H25.9V7.61504ZM24.38 30.475H4.572V4.57504H18.282V10.665H24.382L24.38 30.475Z'
          fill='currentColor'
        />
        <path d='M24.382 -0.00500488H4.572V1.525H24.382V-0.00500488Z' fill='currentColor' />
        <path d='M21.332 25.905H7.622V27.425H21.332V25.905Z' fill='currentColor' />
        <path d='M21.332 19.8051H7.622V21.3351H21.332V19.8051Z' fill='currentColor' />
        <path d='M21.332 13.715H7.622V15.235H21.332V13.715Z' fill='currentColor' />
        <path d='M13.712 7.61499H7.622V9.14499H13.712V7.61499Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_1138_2425'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
