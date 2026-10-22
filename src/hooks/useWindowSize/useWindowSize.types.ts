export const WINDOW_TYPE = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
};

export type TWindowType = (typeof WINDOW_TYPE)[keyof typeof WINDOW_TYPE];

export const WINDOW_BREAKPOINT = {
  [WINDOW_TYPE.MOBILE]: 576,
  [WINDOW_TYPE.TABLET]: 768,
  [WINDOW_TYPE.DESKTOP]: 1024,
} as const;

export type TWindowBreakpoint = (typeof WINDOW_BREAKPOINT)[keyof typeof WINDOW_BREAKPOINT];

export type TWindowSize = {
  width: number;
  height: number;
};

export interface IUseWindowSizeHookResult {
  isMobile: boolean;
  isTablet: boolean;
  windowSize: TWindowSize;
  windowType: TWindowType;
}
