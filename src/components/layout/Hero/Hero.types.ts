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
  TOPOGRAPHY_LIGHT = 'TOPOGRAPHY_LIGHT',
  TOPOGRAPHY_DARK = 'TOPOGRAPHY_DARK',
  MOTION_LINES = 'MOTION_LINES',
  ARROWS = 'ARROWS',
  CROSS = 'CROSS',
  PENCILS = 'PENCILS',
  SPRINKLES = 'SPRINKLES',
  WAVY = 'WAVY',
  CURSORS = 'CURSORS',
  SMILEY = 'SMILEY',
  GRAPH_PAPER = 'GRAPH_PAPER',
  JIGSAW = 'JIGSAW',
  WINDY = 'WINDY',
  CLOSES = 'CLOSES',
  CURRENT = 'CURRENT',
  TIC_TAC_TOE = 'TIC_TAC_TOE',
  DOODLES = 'DOODLES',
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
