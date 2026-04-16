export enum ECodeLang {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JAVASCRIPT',
  TYPESCRIPT = 'TYPESCRIPT',
  REACT = 'REACT',
  SCSS = 'SCSS',
  BASH = 'BASH',
  JSON = 'JSON',
}

export enum ECodeExt {
  HTML = 'HTML',
  CSS = 'CSS',
  JAVASCRIPT = 'JS',
  TYPESCRIPT = 'TS',
  REACT = 'TSX',
  SCSS = 'SCSS',
  JSON = 'JSON',
  BASH = '',
}

export interface ICodeProps {
  name?: string;
  customName?: string;
  code: string;
  language?: ECodeLang;
  showOnlyCode?: boolean;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  isTerminal?: boolean;
  isNameUppercase?: boolean;
}
