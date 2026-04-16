import type { FC, SVGProps } from 'react';

export const PlaneMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M4 19H8V21H2V13H4V19ZM12 19H8V17H12V19ZM16 17H12V15H16V17ZM20 15H16V13H20V15ZM10 13H4V11H10V13ZM22 13H20V11H22V13ZM8 5H4V11H2V3H8V5ZM20 11H16V9H20V11ZM16 9H12V7H16V9ZM12 7H8V5H12V7Z'
        fill='currentColor'
      />
    </svg>
  );
};
