export const CODE_LANG = {
  PLAINTEXT: 'plaintext',
  HTML: 'html',
  CSS: 'css',
  JAVASCRIPT: 'javascript',
  TYPESCRIPT: 'typescript',
  REACT: 'react',
  SCSS: 'scss',
  BASH: 'bash',
  JSON: 'json',
} as const;

export type TCodeLang = typeof CODE_LANG[keyof typeof CODE_LANG];

export const CODE_EXT = {
  [CODE_LANG.HTML]: 'HTML',
  [CODE_LANG.CSS]: 'CSS',
  [CODE_LANG.JAVASCRIPT]: 'JS',
  [CODE_LANG.TYPESCRIPT]: 'TS',
  [CODE_LANG.REACT]: 'TSX',
  [CODE_LANG.SCSS]: 'SCSS',
  [CODE_LANG.JSON]: 'JSON',
  [CODE_LANG.PLAINTEXT]: '',
  [CODE_LANG.BASH]: '',
};

export type TCodeExt = typeof CODE_LANG[keyof typeof CODE_LANG];

export interface ICodeProps {
  name?: string;
  customName?: string;
  code: string;
  consoleLog?: string;
  language?: TCodeLang;
  showOnlyCode?: boolean;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  isTerminal?: boolean;
  isNameUppercase?: boolean;
}
