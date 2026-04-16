import { IDoubleCodeSnippetProps } from './DoubleCodeSnippet.types';
import { Code } from 'src/components/common/Code/Code';

import styles from './DoubleCodeSnippet.module.scss';

export const DoubleCodeSnippet = ({ lang, code, name = ['index', 'index'] }: IDoubleCodeSnippetProps) => {
  const [firstLang, secondLang] = lang;
  const [firstCode, secondCode] = code;
  const [firstName, secondName] = name;

  return (
    <div className={styles.double_code_snippet}>
      <div className='row'>
        <div className='col col--50 col--tablet-50'>
          <Code language={firstLang} name={firstName} code={firstCode} />
        </div>
        <div className='col col--50 col--tablet-50'>
          <Code language={secondLang} name={secondName} code={secondCode} />
        </div>
      </div>
    </div>
  );
};
