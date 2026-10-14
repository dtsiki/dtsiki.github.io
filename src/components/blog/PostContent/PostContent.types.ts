import type { ReactNode } from 'react';
import type { TPostConfig, TPostMeta } from '../PostWrapper/PostWrapper.types';

export interface IPostContentProps {
  postConfig: TPostConfig;
  children: ReactNode;
  nextLink?: string;
  nextLinkLabel?: string;
}
