import type { TCodeLang } from '~components/common/Code';

export interface ICodeSnippetProps {
  lang: TCodeLang;
  code: string;
  name?: string;
  customName?: string;
  hideLines?: boolean;
  consoleLog?: string;
}
