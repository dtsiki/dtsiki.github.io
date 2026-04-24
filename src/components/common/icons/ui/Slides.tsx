import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const SlidesIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g clipPath='url(#clip0_76_189)'>
          <path d='M20 2H4V4H20V2Z' fill='currentColor' />
          <path d='M20 8H4V10H20V8Z' fill='currentColor' />
          <path d='M20 20H4V22H20V20Z' fill='currentColor' />
          <path d='M4 4H2V20H4V4Z' fill='currentColor' />
          <path d='M22 4H20V20H22V4Z' fill='currentColor' />
          <path d='M7 5H5V7H7V5Z' fill='currentColor' />
          <path d='M10 5H8V7H10V5Z' fill='currentColor' />
          <path
            d='M17 15.163V14.3315H16.2327V11H7V16H8.53962V15.163H7.77233V11.8315H15.4654V14.3315H14.6931V15.163H17Z'
            fill='currentColor'
          />
          <path
            d='M7.71697 16.399V17.2021H7V18H12V15.6011H11.2877V14.7979H10.5708V14H9.85848V14.7979H9.14152V15.6011H8.42925V16.399H7.71697Z'
            fill='currentColor'
          />
          <path d='M13.6875 15.4844H14.6875' stroke='currentColor' />
          <path d='M16.9375 15.4688H17.8906' stroke='currentColor' />
          <path d='M13.125 16.4062H14.1562' stroke='currentColor' />
          <path d='M17.4219 16.3594H18.5312' stroke='currentColor' />
          <path d='M13.7188 17.3438H14.625' stroke='currentColor' />
          <path d='M17.1406 17.3281H18.0625' stroke='currentColor' />
          <path d='M14.5156 18.1719H17.375' stroke='currentColor' />
          <path d='M11.9062 15.5H13.75' stroke='currentColor' />
        </g>
        <defs>
          <clipPath id='clip0_76_189'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg width='67' height='67' viewBox='0 0 67 67' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M63.4305 15.8677H3.18401V6.3573H0V60.2566H3.18401V19.0309H63.4305V60.2566H66.5937V6.3573H63.4305V15.8677Z'
        fill='currentColor'
      />
      <path d='M63.4318 60.2542H3.1853V63.4174H63.4318V60.2542Z' fill='currentColor' />
      <path d='M57.0839 41.2303H53.9207V50.7407H57.0839V41.2303Z' fill='currentColor' />
      <path d='M53.9202 50.7462H50.7362V53.9094H53.9202V50.7462Z' fill='currentColor' />
      <path d='M53.9202 38.0498H50.7362V41.2338H53.9202V38.0498Z' fill='currentColor' />
      <path d='M50.7362 53.9034H41.2258V57.0874H50.7362V53.9034Z' fill='currentColor' />
      <path
        d='M50.7374 38.0475V34.8843H47.5742V22.2107H9.51172V41.2315H15.8589V38.0475H12.6957V25.3739H44.411V34.8843H41.227V38.0475H50.7374Z'
        fill='currentColor'
      />
      <path d='M41.2262 50.746H38.063V53.9093H41.2262V50.746Z' fill='currentColor' />
      <path d='M41.2262 38.05H38.063V41.234H41.2262V38.05Z' fill='currentColor' />
      <path d='M38.0651 41.2303H34.8811V50.7407H38.0651V41.2303Z' fill='currentColor' />
      <path d='M22.2059 9.51593H19.0219V12.6791H22.2059V9.51593Z' fill='currentColor' />
      <path
        d='M12.696 44.3975V47.5815H9.51196V50.7447H31.7168V41.2343H28.5536V38.0502H25.3696V34.887H22.2064V38.0502H19.0224V41.2343H15.8592V44.3975H12.696Z'
        fill='currentColor'
      />
      <path d='M15.8596 9.51593H12.6964V12.6791H15.8596V9.51593Z' fill='currentColor' />
      <path d='M9.51232 9.51593H6.34912V12.6791H9.51232V9.51593Z' fill='currentColor' />
      <path d='M63.4314 3.17068H3.18494V6.3547H63.4314V3.17068Z' fill='currentColor' />
    </svg>
  );
};
