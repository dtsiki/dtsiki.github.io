import { useDrag } from 'react-dnd';
import { IDragItemProps } from './DragItem.types';
import { getPositionStyle, getPosition } from './DragItem.utils';
import { useWindowSize } from 'src/hooks';

import styles from './DragItem.module.scss';

export const DragItem = ({ config, children }: IDragItemProps) => {
  const { windowSize } = useWindowSize();

  const { id, type, position, initialPosition } = config;
  const { top, left } = getPosition(windowSize, initialPosition, position);

  const [_, dragRef] = useDrag(
    () => ({
      type,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  return (
    <div ref={dragRef} className={styles.drag_item} style={getPositionStyle(initialPosition, position)}>
      {children}
    </div>
  );
};
