import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useDrop, XYCoord } from 'react-dnd';

import DragItem, { DragItemType } from 'src/components/common/DragItem';
import { convertPercentageToPixels, convertPixelsToPercentage } from 'src/utils';

import styles from './drop-area.module.scss';

interface Props {
  initialItems: Array<any>;
}

const DropArea = ({ initialItems }: Props): ReactElement => {
  const [items, setItems] = useState<any>([...initialItems]);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const moveItem = useCallback((id: string, updatedLeft: number, updatedTop: number) => {
    const nextItems = [...items];

    const movedItem = items.find(
      (item: any) => item.id === id
    );

    const { top, left } = convertPixelsToPercentage(updatedTop, updatedLeft);

    movedItem.top = top;
    movedItem.left = left;

    setItems(nextItems);
  }, [items, setItems]);

  const [, dropRef] = useDrop(() => ({
    accept: Object.values(DragItemType),
    drop(item: any, monitor) {
      const { top, left } = convertPercentageToPixels(item.top, item.left);

      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const updatedLeft = Math.round(left + delta.x);
      const updatedTop = Math.round(top + delta.y);

      moveItem(item.id, updatedLeft, updatedTop);

      return undefined;
    }
  }), [moveItem]);

  return (
    <div
      ref={dropRef}
      className={styles.dropArea}>
      {items.map((item: any) => (
        <DragItem
          key={item.id}
          type={item.type}
          id={item.id}
          top={item.top}
          left={item.left}>
          {item.component}
        </DragItem>
      ))}
    </div>
  );
};

export default DropArea;
