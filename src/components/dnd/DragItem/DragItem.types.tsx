import { ReactNode } from 'react';
import { TDragItem, TDragItemPositionUnit } from 'src/types';

export interface IDragItemProps {
  config: TDragItem;
  children: ReactNode;
}
