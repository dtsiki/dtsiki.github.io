import { useRef, UIEvent, forwardRef, useImperativeHandle } from 'react';
import SimpleBar from 'simplebar-react';
import { ICustomScrollbarProps, ICustomScrollbarRef } from './CustomScrollbar.types';

import 'simplebar/dist/simplebar.min.css';

export const CustomScrollbar = forwardRef<ICustomScrollbarRef, ICustomScrollbarProps>(
  ({ children, fixedHeight, maxHeight = 450, onScroll }, ref) => {
    const simpleBarRef = useRef<SimpleBar>(null);

    useImperativeHandle(ref, () => ({
      getScrollElement: () => {
        return simpleBarRef.current?.getScrollElement() || null;
      },
    }));

    const handleScroll = (event: UIEvent<HTMLDivElement>) => {
      if (onScroll) {
        const scrollContainer = simpleBarRef.current?.getScrollElement();
        onScroll(scrollContainer || event.currentTarget);
      }
    };

    const options = {
      autoHide: false,
      style: {
        maxHeight: fixedHeight ? 'none' : `${maxHeight}px`,
        height: fixedHeight ? fixedHeight : '100%',
        width: '100%',
      },
    };

    return (
      <SimpleBar ref={simpleBarRef} scrollableNodeProps={{ onScroll: handleScroll }} {...options}>
        {children}
      </SimpleBar>
    );
  }
);
