import { EShortcutPreviewType } from 'src/components/pages/blog/ShortcutPreview/ShortcutPreview';

export const enum EShortcutVariant {
  ENG_POSTS = 'eng',
  RU_POSTS = 'ru',
  TXT_FILE = 'txt_file',
  DRAFTS = 'drafts',
  EMPTY_FOLDER = 'empty_folder',
}

export type TShortcut = {
  id: string;
  variant: EShortcutVariant;
  title: string;
  highlight?: string;
  date: string;
  type: EShortcutPreviewType;
  link?: string;
  tags?: Array<string>;
  category?: string;
};
