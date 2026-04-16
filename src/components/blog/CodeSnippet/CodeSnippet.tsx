import { ICodeSnippetProps } from './CodeSnippet.types';
import { Code } from 'src/components/common/Code/Code';

import styles from './CodeSnippet.module.scss';

export const CodeSnippet = ({ lang, code, name, customName, hideLines = false }: ICodeSnippetProps) => {
  return (
    <div className={styles.code_snippet}>
      <div className='row'>
        <div className='col col--100'>
          <Code language={lang} name={name} customName={customName} code={code} isTerminal={hideLines} />
        </div>
      </div>
    </div>
  );
};
