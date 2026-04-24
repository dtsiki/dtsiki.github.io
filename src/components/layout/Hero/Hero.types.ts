import { MutableRefObject, ReactNode } from 'react';

export enum EHeroVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LIGHT = 'light',
  DARK = 'dark',
  VIOLET = 'violet',
  VIOLET_DARK = 'violet-dark',
  VIOLET_LIGHTER = 'violet-lighter',
}

export enum EHeroAlign {
  LEFT = 'left',
  CENTER = 'center',
  GRID = 'grid',
}

export enum EHeroSize {
  FULL = 'full',
  HALF = 'half',
  SMALL = 'small',
  CUSTOM = 'custom',
}

export enum EHeroPattern {
  MOTION_LINES = 'MOTION_LINES',
  ARROWS = 'ARROWS',
  CROSS = 'CROSS',
  PENCILS = 'PENCILS',
  SPRINKLES = 'SPRINKLES',
  WAVY = 'WAVY',
  CURSORS = 'CURSORS',
  SMILEY = 'SMILEY',
}

export interface IHeroProps {
  children?: ReactNode;
  variant?: EHeroVariant;
  align?: EHeroAlign;
  heroRef?: MutableRefObject<HTMLElement | null>;
  className?: string;
  size?: EHeroSize;
  pattern?: EHeroPattern;
  height?: number;
  hasOverlay?: boolean;
}
