import { ICodeSnippetProps } from './CodeSnippet.types';
import { Code } from 'src/components/common/Code/Code';
import { useCodeSnippetNumber } from 'src/hooks/useCodeSnippetNumber';
import { isUndefined } from 'lodash';

import styles from './CodeSnippet.module.scss';

export const CodeSnippet = ({ lang, code, name, customName, consoleLog, hideLines = false }: ICodeSnippetProps) => {
  const isSnippet = isUndefined(name) && isUndefined(customName);
  const snippetCounter = useCodeSnippetNumber(isSnippet);

  const formattedName = name ?? `snippet(${snippetCounter})`;
  const wrapperClassName = 'spacer bottom small';

  return (
    <div className={wrapperClassName}>
      <div className={styles.code_snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={lang}
              name={formattedName}
              customName={customName}
              code={code}
              isTerminal={hideLines}
              consoleLog={consoleLog}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
