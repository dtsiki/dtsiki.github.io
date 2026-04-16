import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import {
  BLOG_FOLDER_NAME,
  ENGLISH_POSTS_FOLDER_NAME,
  ENGLISH_POSTS_FOLDER_PATH,
  RUSSIAN_POSTS_FOLDER_NAME,
  RUSSIAN_POSTS_FOLDER_PATH,
} from 'src/i18n';
import { TFolderConfig, TFolderItemType } from './components/Folder/Folder.types';

export enum EBlogRecord {
  BLOG_FOLDER = 'BLOG_FOLDER',
  ENG_POSTS_FOLDER = 'ENG_POSTS_FOLDER',
  RU_POSTS_FOLDER = 'RU_POSTS_FOLDER',
  TXT_FILE = 'TXT_FILE',
}

export const BLOG_FOLDER_LOC = {
  [EBlogRecord.BLOG_FOLDER]: BLOG_FOLDER_NAME,
  [EBlogRecord.ENG_POSTS_FOLDER]: ENGLISH_POSTS_FOLDER_NAME,
  [EBlogRecord.RU_POSTS_FOLDER]: RUSSIAN_POSTS_FOLDER_NAME,
};

export const ENG_POSTS_FOLDER_CONFIG: TFolderConfig = {
  type: TFolderItemType.FOLDER,
  id: EBlogRecord.ENG_POSTS_FOLDER,
  title: BLOG_FOLDER_LOC[EBlogRecord.ENG_POSTS_FOLDER],
  path: ENGLISH_POSTS_FOLDER_PATH,
  parentId: EBlogRecord.BLOG_FOLDER,
  route: '/blog/eng',
  children: [
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.HOW_I_IMPROVED_MY_ENGLISH].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.HOW_I_IMPROVED_MY_ENGLISH].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.HOW_I_IMPROVED_MY_ENGLISH],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.KEEP_CALM_AND_TEST].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.KEEP_CALM_AND_TEST].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.KEEP_CALM_AND_TEST],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.REACT_DRAG_AND_DROP].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.REACT_DRAG_AND_DROP].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.REACT_DRAG_AND_DROP],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOOLTIPS].id,
      parentId: EBlogRecord.ENG_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOOLTIPS].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOOLTIPS],
    },
  ],
};

export const RU_POSTS_FOLDER_CONFIG: TFolderConfig = {
  type: TFolderItemType.FOLDER,
  id: EBlogRecord.RU_POSTS_FOLDER,
  title: BLOG_FOLDER_LOC[EBlogRecord.RU_POSTS_FOLDER],
  path: RUSSIAN_POSTS_FOLDER_PATH,
  parentId: EBlogRecord.BLOG_FOLDER,
  route: '/blog/ru',
  children: [
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.CUSTOM_REACT_I18N].id,
      parentId: EBlogRecord.RU_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.CUSTOM_REACT_I18N].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.CUSTOM_REACT_I18N],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.CREATING_A_REACT_APP].id,
      parentId: EBlogRecord.RU_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.CREATING_A_REACT_APP].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.CREATING_A_REACT_APP],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_DRAG_AND_DROP_QUICKLY].id,
      parentId: EBlogRecord.RU_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_DRAG_AND_DROP_QUICKLY].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.JAVASCRIPT_DRAG_AND_DROP_QUICKLY],
    },
    {
      type: TFolderItemType.TXT_FILE,
      id: POSTS_CONFIG_[EBlogPostRecord.ANIMATED_STAR_TUTORIAL].id,
      parentId: EBlogRecord.RU_POSTS_FOLDER,
      title: POSTS_CONFIG_[EBlogPostRecord.ANIMATED_STAR_TUTORIAL].title,
      postConfig: POSTS_CONFIG_[EBlogPostRecord.ANIMATED_STAR_TUTORIAL],
    },
  ],
};

export const BLOG_FOLDER_CONFIG: TFolderConfig = {
  id: EBlogRecord.BLOG_FOLDER,
  title: BLOG_FOLDER_LOC[EBlogRecord.BLOG_FOLDER],
  type: TFolderItemType.FOLDER,
  path: BLOG_FOLDER_NAME,
  isRoot: true,
  children: [ENG_POSTS_FOLDER_CONFIG, RU_POSTS_FOLDER_CONFIG],
};
