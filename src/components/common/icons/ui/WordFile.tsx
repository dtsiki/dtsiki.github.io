import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const WordFileIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='5' y='2' width='16' height='2' fill='currentColor' />
        <rect x='5' y='20' width='16' height='2' fill='currentColor' />
        <rect x='3' y='16' width='2' height='4' fill='currentColor' />
        <rect x='21' y='4' width='2' height='16' fill='currentColor' />
        <rect x='12' y='7' width='7' height='2' fill='currentColor' />
        <rect x='10' y='11' width='9' height='2' fill='currentColor' />
        <rect x='8' y='15' width='11' height='2' fill='currentColor' />
        <rect y='5' width='1.6' height='8.18187' fill='currentColor' />
        <rect x='6.3999' y='5' width='1.6' height='8.18187' fill='currentColor' />
        <rect x='1.60059' y='13.1816' width='1.6' height='1.81819' fill='currentColor' />
        <rect x='4.80029' y='13.1816' width='1.6' height='1.81819' fill='currentColor' />
        <rect x='3.19971' y='5' width='1.6' height='8.18187' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_54_57)'>
        <mask id='mask0_54_57' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'>
          <path d='M32 0H0V32H32V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_54_57)'>
          <path d='M3.80518 13.71V32H29.7152V15L28.1852 14.5V30.47H5.33518V13.71H3.80518Z' fill='currentColor' />
          <path d='M25 12.1899H12.9551V13.7099H25V12.1899Z' fill='currentColor' />
          <path d='M23.5 18.28H8.375V19.81H23.5V18.28Z' fill='currentColor' />
          <path d='M25 18.28H8.375V19.81H25V18.28Z' fill='currentColor' />
          <path d='M25 24.3799H8.375V25.8999H25V24.3799Z' fill='currentColor' />
          <path
            d='M3.80518 0V1.52H20.5652V9.14H28.1852V15.24H29.7152V7.62H28.1852V6.09H26.6652V4.57H25.1452V3.05H23.6152V1.52H22.0952V0H3.80518Z'
            fill='currentColor'
          />
        </g>
        <rect x='1' y='3' width='1.63635' height='7.36359' fill='currentColor' />
        <rect x='7.54541' y='3' width='1.63635' height='7.36359' fill='currentColor' />
        <rect x='2.63672' y='10.3635' width='1.63635' height='1.63635' fill='currentColor' />
        <rect x='5.90918' y='10.3635' width='1.63635' height='1.63635' fill='currentColor' />
        <rect x='4.27246' y='3' width='1.63635' height='7.36359' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_54_57'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
