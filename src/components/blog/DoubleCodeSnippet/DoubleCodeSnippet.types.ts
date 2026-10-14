import { type TCodeLang } from '~components/common/Code/Code.types';

export interface IDoubleCodeSnippetProps {
  lang: [TCodeLang, TCodeLang];
  code: [string, string];
  name?: [string, string];
  log?: [string, string];
  isEmbeddedLog?: boolean;
}
