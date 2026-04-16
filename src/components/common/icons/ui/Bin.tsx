import type { FC, SVGProps } from 'react';
import { ICustomIconProps } from 'src/types';

export const BinIcon: FC<SVGProps<SVGSVGElement> & ICustomIconProps> = (props) => {
  if (props.useMini) {
    return (
      <svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path d='M10.9688 12H11.9688V3H10.9688V12Z' fill='currentColor' />
        <path d='M0.96875 12H1.96875V3H0.96875V12Z' fill='currentColor' />
        <path d='M10.9893 13V12H1.96875V13H10.9893Z' fill='currentColor' />
        <path d='M12.8018 3V2H0V3H12.8018Z' fill='currentColor' />
        <path d='M12.3018 2V1H0.801758V2H12.3018Z' fill='currentColor' />
        <path d='M8.30176 1V0H4.30176V1H8.30176Z' fill='currentColor' />
        <path d='M6.80176 3.83325H5.80176V10.8333H6.80176V3.83325Z' fill='currentColor' />
        <path d='M4.30176 3.83325H3.30176V9.33325H4.30176V3.83325Z' fill='currentColor' />
        <path d='M9.30176 3.83325H8.30176V9.33325H9.30176V3.83325Z' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M25.9054 8.20815V29.6929H27.4354V8.20815H30.4754V6.68815H28.9554V5.15815H22.8554V2.10815H21.3354V5.15815H10.6654V2.10815H9.14539V5.15815H3.05539V6.68815H1.52539V8.20815H4.57539V29.6929H6.09539V8.20815H25.9054Z'
        fill='currentColor'
      />
      <path d='M25.915 29.71H6.11035V31.24H25.915V29.71Z' fill='currentColor' />
      <path d='M22.855 11.4299H21.335V23.6199H22.855V11.4299Z' fill='currentColor' />
      <path d='M16.7651 11.4299H15.2451V26.6599H16.7651V11.4299Z' fill='currentColor' />
      <path d='M21.335 0.76001H10.665V2.28001H21.335V0.76001Z' fill='currentColor' />
      <path d='M10.6655 11.4299H9.14551V23.6199H10.6655V11.4299Z' fill='currentColor' />
    </svg>
  );
};
