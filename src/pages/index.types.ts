export const HomeItem = {
  CV: 'CV',
  SLIDES: 'SLIDES',
  README: 'README',
} as const;

export type HomeItem = typeof HomeItem[keyof typeof HomeItem];
