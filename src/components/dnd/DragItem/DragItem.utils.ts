import { isUndefined } from 'lodash';
import { TDragItemPosition, TDragItemPositionUnit } from 'src/types';
import { convertPixelsToPercentage } from 'src/utils';
import { TWindowSize } from 'src/hooks';

export const POSITION_UNIT = {
  [TDragItemPositionUnit.PIXELS]: 'px',
  [TDragItemPositionUnit.PERCENTAGE]: '%',
};

export const formatPositionValue = (
  value: number | undefined,
  unit: TDragItemPositionUnit = TDragItemPositionUnit.PERCENTAGE
) => {
  if (isUndefined(value)) {
    return 'unset';
  }

  return `${value}${POSITION_UNIT[unit]}`;
};

export const getPosition = (
  windowSize: TWindowSize,
  initialPosition: TDragItemPosition,
  position?: TDragItemPosition
): { top?: number; left?: number } => {
  if (isUndefined(position)) {
    if (initialPosition.top && initialPosition.left) {
      const { top, left } = convertPixelsToPercentage(initialPosition.top, initialPosition.left, windowSize);

      return { top, left };
    } else {
      return { top: undefined, left: undefined };
    }
  }

  const { top, left } = position;
  return { top, left };
};

export const getPositionStyle = (initialPosition: TDragItemPosition, position?: TDragItemPosition) => {
  if (isUndefined(position)) {
    return {
      top: formatPositionValue(initialPosition.top, initialPosition.unit),
      right: formatPositionValue(initialPosition.right, initialPosition.unit),
      bottom: formatPositionValue(initialPosition.bottom, initialPosition.unit),
      left: formatPositionValue(initialPosition.left, initialPosition.unit),
    };
  }

  return {
    top: formatPositionValue(position.top, position.unit),
    left: formatPositionValue(position.top, position.unit),
    right: 'unset',
    bottom: 'unset',
  };
};
