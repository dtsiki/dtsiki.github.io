import classNames from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { ECodeExt, ECodeLang, ICodeProps } from './Code.types';
import { CopyIcon } from '../icons/ui';
import { useTranslate } from 'src/hooks/useTranslate';
import { COPY_TO_CLIPBOARD } from 'src/i18n';
import { CodingIcon, TextFileIcon, ClipboardMiniIcon } from '../icons/ui';

import styles from './Code.module.scss';

export const Code = (props: ICodeProps) => {
  const {
    name,
    customName,
    code,
    language,
    showOnlyCode = false,
    showLineNumbers = true,
    startingLineNumber,
    isTerminal = false,
    isNameUppercase = false,
  } = props;

  const bind = classNames.bind(styles);
  const { translate } = useTranslate();

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.code}>
      {showOnlyCode ? (
        <div className={styles.code__highlighter}>
          <div className={styles.code__actions}>
            <button
              className={styles.code__control}
              onClick={copyToClipboard}
              aria-label={translate(COPY_TO_CLIPBOARD)}>
              <CopyIcon />
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
            <div className={bind([styles.code__name, { [styles.uppercase]: isNameUppercase }])}>
              {isTerminal ? (
                <CodingIcon useMini={true} className={styles.code__icon} />
              ) : (
                <TextFileIcon useMini={true} className={styles.code__icon} />
              )}
              {(language !== ECodeLang.BASH && customName) ||
                (language && name && `${name}.${ECodeExt[language].toLocaleLowerCase()}`)}
            </div>
            <div className={styles.code__actions}>
              <button
                className={styles.code__control}
                onClick={copyToClipboard}
                aria-label={translate(COPY_TO_CLIPBOARD)}>
                <ClipboardMiniIcon />
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
