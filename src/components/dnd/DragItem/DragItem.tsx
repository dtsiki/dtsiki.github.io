import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import type { IDragItemProps } from './DragItem.types';
import { getPositionStyle, getPosition } from './DragItem.utils';
import { useWindowSize } from '~hooks/useWindowSize';

import styles from './DragItem.module.scss';

export const DragItem = ({ config, children }: IDragItemProps) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const { windowSize } = useWindowSize();

  const { id, type, position, initialPosition } = config;
  const { top, left } = getPosition(windowSize, initialPosition, position);

  const [_, drag] = useDrag(
    () => ({
      type,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  drag(dragRef);

  return (
    <div ref={dragRef} className={styles.drag_item} style={getPositionStyle(initialPosition, position)}>
      {children}
    </div>
  );
};
