import { IDoubleCodeSnippetProps } from './DoubleCodeSnippet.types';
import { Code } from 'src/components/common/Code/Code';
import { ExampleSnippet } from '../ExampleSnippet/ExampleSnippet';

import styles from './DoubleCodeSnippet.module.scss';

export const DoubleCodeSnippet = ({
  lang,
  code,
  log = ['', ''],
  name = ['index', 'index'],
  isEmbeddedLog,
}: IDoubleCodeSnippetProps) => {
  const [firstLang, secondLang] = lang;
  const [firstCode, secondCode] = code;
  const [firstName, secondName] = name;
  const [firstLog, secondLog] = log;

  return (
    <div className={styles.double_code_snippet}>
      <div className='row'>
        <div className='col col--50 col--tablet-50'>
          <Code
            language={firstLang}
            name={firstName}
            code={firstCode}
            consoleLog={isEmbeddedLog ? firstLog : undefined}
          />
          {!isEmbeddedLog && firstLog && <ExampleSnippet code={firstLog} />}
        </div>
        <div className='col col--50 col--tablet-50'>
          <Code
            language={secondLang}
            name={secondName}
            code={secondCode}
            consoleLog={isEmbeddedLog ? secondLog : undefined}
          />
          {!isEmbeddedLog && secondLog && <ExampleSnippet code={secondLog} />}
        </div>
      </div>
    </div>
  );
};
