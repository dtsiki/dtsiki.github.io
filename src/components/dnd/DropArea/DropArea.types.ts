import type { TDragItemComponent } from '~types/dnd';

export interface IDropAreaProps {
  initialItems: TDragItemComponent[];
  isWindowRenderer?: boolean;
}
