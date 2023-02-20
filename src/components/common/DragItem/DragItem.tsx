import { ReactElement, ReactNode } from 'react';
import { useDrag } from 'react-dnd';

export enum DragItemType {
  SHORTCUT = 'shortcut',
  WINDOW = 'window'
}

interface Props {
  id: string;
  top?: number;
  left?: number;
  children: ReactNode;
  type: DragItemType;
}

const DragItem = ({ id, children, top, left, type }: Props): ReactElement => {
  const [_, dragRef] = useDrag(() => ({
    type,
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [id, left, top]);

  return (
    <div
      ref={dragRef}
      style={{ position: 'absolute', top: `${top}%`, left: `${left}%` }}>
      {children}
    </div>
  );
};

export default DragItem;
