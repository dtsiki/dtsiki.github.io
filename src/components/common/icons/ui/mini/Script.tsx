import type { FC, SVGProps } from 'react';

export const ScriptMiniIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16 19H18V21H4V19H14V17H16V19ZM6 15H14V17H4V19H2V15H4V5H6V15ZM20 5H22V11H20V19H18V5H6V3H20V5Z'
        fill='currentColor'
      />
    </svg>
  );
};
