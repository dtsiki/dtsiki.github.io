import type { FC, SVGProps } from 'react';

export const ShareIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M11 5H5V7H11V5Z' fill='currentColor' />
      <path d='M5 7H3V19H5V7Z' fill='currentColor' />
      <path d='M17 19H5V21H17V19Z' fill='currentColor' />
      <path d='M19 13H17V19H19V13Z' fill='currentColor' />
      <path d='M11 13H9V15H11V13Z' fill='currentColor' />
      <path d='M13 11H11V13H13V11Z' fill='currentColor' />
      <path d='M15 9H13V11H15V9Z' fill='currentColor' />
      <path d='M17 7H15V9H17V7Z' fill='currentColor' />
      <path d='M19 5H17V7H19V5Z' fill='currentColor' />
      <path d='M21 3H19V11H21V3Z' fill='currentColor' />
      <path d='M21 3H13V5H21V3Z' fill='currentColor' />
    </svg>
  );
};
