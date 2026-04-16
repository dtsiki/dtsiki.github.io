import type { FC, SVGProps } from 'react';

export const ChevronDownMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M17 9V11H15V13H13V15H11V13H9V11H7V9H17Z' fill='currentColor' />
    </svg>
  );
};
