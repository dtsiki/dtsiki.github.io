import React, { ReactElement, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

interface Props {
  children: ReactNode;
  maxHeight?: number;
}

const CustomScrollbar = ({ children, maxHeight = 450 }: Props): ReactElement => {
  const defaultOptions = {
    autoHide: false,
    style: {
      maxHeight: `${maxHeight}px`,
      height: '100%',
      width: '100%'
    }
  };

  return (
    <SimpleBar {...defaultOptions}>
      {children}
    </SimpleBar>
  );
};

export default CustomScrollbar;
