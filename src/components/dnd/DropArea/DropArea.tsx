import { useCallback, useEffect, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import { convertPercentageToPixels, convertPixelsToPercentage } from 'src/utils';
import { IDropAreaProps } from './DropArea.types';
import { DragItem } from '../DragItem';
import { TDragItemComponent, TDragItemPositionUnit, TDragItemType } from 'src/types';
import { useWindowSize } from 'src/hooks';

import styles from './DropArea.module.scss';

export const DropArea = ({ initialItems }: IDropAreaProps) => {
  const [items, setItems] = useState<TDragItemComponent[]>([...initialItems]);
  const { windowSize } = useWindowSize();

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const moveItem = useCallback(
    (id: string, updatedLeft: number, updatedTop: number) => {
      const nextItems = [...items];

      const movedItem = items.find((item: TDragItemComponent) => item.id === id);

      if (movedItem) {
        const { top, left } = convertPixelsToPercentage(updatedTop, updatedLeft, windowSize);

        movedItem.position = {};
        movedItem.position.top = top;
        movedItem.position.left = left;
        movedItem.position.unit = TDragItemPositionUnit.PERCENTAGE;

        setItems(nextItems);
      }
    },
    [items, setItems, windowSize]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: Object.values(TDragItemType),
      drop(item: any, monitor) {
        const { top, left } = convertPercentageToPixels(item.top, item.left, windowSize);

        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const updatedLeft = Math.round(left + delta.x);
        const updatedTop = Math.round(top + delta.y);

        moveItem(item.id, updatedLeft, updatedTop);

        return undefined;
      },
    }),
    [moveItem, windowSize]
  );

  return (
    <div ref={dropRef} className={styles.drop_area}>
      {items.map(({ id, type, position, initialPosition, children }) => (
        <DragItem key={id} config={{ id, type, initialPosition, position }}>
          {children}
        </DragItem>
      ))}
    </div>
  );
};
