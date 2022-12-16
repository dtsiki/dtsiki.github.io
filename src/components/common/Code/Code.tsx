import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFile, faTerminal } from '@fortawesome/free-solid-svg-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from './code.module.scss';

export enum CodeLanguage {
  HTML = 'html',
  CSS = 'css',
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript'
}

export enum CodeExtension {
  html = 'html',
  css = 'css',
  javascript = 'js',
  typescript = 'ts'
}

interface Props {
  name?: string;
  customName?: string;
  code: string;
  language?: CodeLanguage;
  showOnlyCode?: boolean;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  isTerminal?: boolean;
}

const Code = ({
  name,
  customName,
  code,
  language,
  showOnlyCode = false,
  showLineNumbers = true,
  startingLineNumber,
  isTerminal = false
}: Props): ReactElement => {
  const copyToClipboard= (): void => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.code}>
      {showOnlyCode ? (
        <div className={styles.code__highlighter}>
          <div className={styles.code__actions}>
            <button
              className={styles.code__control}
              onClick={copyToClipboard}>
              <FontAwesomeIcon icon={faCopy} />
              <span className='visually-hidden'>Copy to clipboard</span>
            </button>
          </div>
          <SyntaxHighlighter
            startingLineNumber={startingLineNumber}
            language={language || 'plaintext'}
            showLineNumbers={showLineNumbers}
            style={ascetic}>
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className={styles.code__wrapper}>
          <div className={styles.code__header}>
            <div className={styles.code__name}>
              <FontAwesomeIcon icon={isTerminal ? faTerminal : faFile} />
              {customName || (language && name) && `${name}.${CodeExtension[language]}`}
            </div>
            <div className={styles.code__actions}>
              <button
                className={styles.code__control}
                onClick={copyToClipboard}>
                <FontAwesomeIcon icon={faCopy} />
                <span className='visually-hidden'>Copy to clipboard</span>
              </button>
            </div>
          </div>
          <div className={styles.code__body}>
            <SyntaxHighlighter
              language={language || 'plaintext'}
              showLineNumbers={isTerminal ? false : showLineNumbers}
              style={ascetic}>
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
};

export default Code;
