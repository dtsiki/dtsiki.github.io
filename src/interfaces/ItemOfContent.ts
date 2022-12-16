import { MutableRefObject } from 'react';

export interface IItemOfContent {
  title: string;
  ref: MutableRefObject<HTMLElement | null>;
}
