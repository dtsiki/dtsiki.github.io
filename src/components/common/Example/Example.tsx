import { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyIcon } from '../icons/ui';

import styles from './example.module.scss';

interface Props {
  code: string;
  isCopyable?: boolean;
}

const Example = ({ code, isCopyable = true }: Props): ReactElement => {
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.example}>
      <div className={styles.code__wrapper}>
        {isCopyable && (
          <div className={styles.example__actions}>
            <button className={styles.example__control} onClick={copyToClipboard}>
              <CopyIcon />
              <span className='visually-hidden'>Copy to clipboard</span>
            </button>
          </div>
        )}
        <SyntaxHighlighter language='plaintext' showLineNumbers={false} style={ascetic}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Example;
