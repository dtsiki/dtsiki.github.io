import { ECodeLang } from 'src/components/common/Code/Code.types';

export interface ICodeSnippetProps {
  lang: ECodeLang;
  code: string;
  name?: string;
  customName?: string;
  hideLines?: boolean;
}
