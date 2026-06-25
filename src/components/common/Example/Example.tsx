import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTranslate } from 'src/hooks/useTranslate';
import { COPY_TO_CLIPBOARD } from 'src/i18n';
import { ascetic } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CheckMiniIcon, ClipboardMiniIcon } from '../icons/ui';
import { IExampleProps } from './Example.types';

import styles from './Example.module.scss';

export const Example = ({ code, isCopyable = true }: IExampleProps) => {
  const { translate } = useTranslate();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className={styles.example}>
      <div className={styles.code__wrapper}>
        {isCopyable && (
          <div className={styles.example__actions}>
            <button
              className={styles.example__control}
              onClick={copyToClipboard}
              aria-label={translate(COPY_TO_CLIPBOARD)}>
              {isCopied ? <CheckMiniIcon /> : <ClipboardMiniIcon />}
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
