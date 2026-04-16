import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const VideoIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <rect x='20' y='17' width='10' height='2' transform='rotate(-90 20 17)' fill='currentColor' />
        <rect x='18' y='15' width='6' height='2' transform='rotate(-90 18 15)' fill='currentColor' />
        <rect x='2' y='7' width='2' height='10' fill='currentColor' />
        <rect x='16' y='7' width='2' height='10' fill='currentColor' />
        <rect x='4' y='5' width='12' height='2' fill='currentColor' />
        <rect x='4' y='17' width='12' height='2' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M30.907 6.85001H29.377V25.14H30.907V6.85001Z' fill='currentColor' />
      <path d='M29.377 25.14H27.857V26.66H29.377V25.14Z' fill='currentColor' />
      <path d='M29.377 5.32999H27.857V6.84999H29.377V5.32999Z' fill='currentColor' />
      <path d='M27.858 26.66H3.478V28.19H27.858V26.66Z' fill='currentColor' />
      <path
        d='M20.238 12.95H18.718V11.43H17.187V9.9H15.667V8.38H11.097V23.62H15.667V22.09H17.187V20.57H18.718V19.04H20.238V17.52H21.757V14.47H20.238V12.95Z'
        fill='currentColor'
      />
      <path d='M27.858 3.81H3.478V5.33H27.858V3.81Z' fill='currentColor' />
      <path d='M3.47701 25.14H1.94701V26.66H3.47701V25.14Z' fill='currentColor' />
      <path d='M3.47701 5.32999H1.94701V6.84999H3.47701V5.32999Z' fill='currentColor' />
      <path d='M1.947 6.85001H0.427002V25.14H1.947V6.85001Z' fill='currentColor' />
    </svg>
  );
};
