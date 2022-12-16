import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from './example.module.scss';


interface Props {
  code: string;
}

const Example = ({ code }: Props): ReactElement => {
  const copyToClipboard= (): void => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.example}>
      <div className={styles.code__wrapper}>
        <div className={styles.example__actions}>
          <button
            className={styles.example__control}
            onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faCopy} />
            <span className='visually-hidden'>Copy to clipboard</span>
          </button>
        </div>
        <SyntaxHighlighter
          language='plaintext'
          showLineNumbers={false}
          style={ascetic}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Example;
