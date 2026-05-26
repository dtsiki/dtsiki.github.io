import { ReactNode } from 'react';

export type TBookType = 'audiobook' | 'ebook' | 'paperbook';

export type TReadingListItem = {
  id: string;
  type: TBookType;
  title: string;
  author: string;
  tags: string[];
  content?: ReactNode;
};
