import { ReactNode } from 'react';

export const TDragItemType = {
  SHORTCUT: 'SHORTCUT',
  WINDOW: 'WINDOW',
} as const;

export type TDragItemType = typeof TDragItemType[keyof typeof TDragItemType];

export const TDragItemPositionUnit = {
  PIXELS: 'PIXELS',
  PERCENTAGE: 'PERCENTAGE',
} as const;

export type TDragItemPositionUnit = typeof TDragItemPositionUnit[keyof typeof TDragItemPositionUnit];

export type TDragItemPosition = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  unit?: TDragItemPositionUnit;
};

export type TDragItem = {
  id: string;
  type: TDragItemType;
  initialPosition: TDragItemPosition;
  position?: TDragItemPosition;
};

export type TDragItemComponent = TDragItem & {
  children: ReactNode;
};
