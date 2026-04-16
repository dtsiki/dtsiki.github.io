import { ReactNode } from 'react';
import { TPostConfig, TPostMeta } from '../PostWrapper/PostWrapper.types';

export interface IPostContentProps {
  postConfig: TPostConfig;
  children: ReactNode;
  nextLink?: string;
  nextLinkLabel?: string;
}
