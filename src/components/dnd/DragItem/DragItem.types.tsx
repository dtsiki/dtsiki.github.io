import type { ReactNode } from 'react';
import type { TDragItem } from '~types/dnd';

export interface IDragItemProps {
  config: TDragItem;
  children: ReactNode;
}
