import type { FC, SVGProps } from 'react';

export const ChevronRightMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M9 17L11 17L11 15L13 15L13 13L15 13L15 11L13 11L13 9L11 9L11 7L9 7L9 17Z' fill='currentColor' />
    </svg>
  );
};
