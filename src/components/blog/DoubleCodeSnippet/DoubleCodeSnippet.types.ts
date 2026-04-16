import { ECodeLang } from 'src/components/common/Code/Code.types';

export interface IDoubleCodeSnippetProps {
  lang: [ECodeLang, ECodeLang];
  code: [string, string];
  name?: [string, string];
}
