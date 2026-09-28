import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTranslate } from 'src/hooks/useTranslate';
import { COPY_TO_CLIPBOARD } from 'src/i18n';
import { CheckMiniIcon, ClipboardMiniIcon, TerminalMiniIcon } from '../icons/ui';
import { IExampleProps } from './Example.types';
import classNames from 'classnames';
import { xcode } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from './Example.module.scss';

export const Example = ({ code, isCopyable = true, isEmbedded = false, showConsole = false }: IExampleProps) => {
  const bind = classNames.bind(styles);
  const { translate } = useTranslate();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const classNameModifier = isEmbedded ? styles.EMBEDDED : styles.DEFAULT;

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <div className={bind([styles.example, classNameModifier])}>
      <div className={styles.code__wrapper}>
        {isCopyable && (
          <div className={styles.example__actions}>
            <button
              className={bind([styles.example__control, classNameModifier])}
              onClick={copyToClipboard}
              aria-label={translate(COPY_TO_CLIPBOARD)}>
              {isCopied ? <CheckMiniIcon /> : <ClipboardMiniIcon />}
            </button>
          </div>
        )}
        {showConsole && (
          <div className={bind([styles.example__console, classNameModifier])}>
            <TerminalMiniIcon className={styles.example__console_icon} />
            <div className={styles.example__console_title}>Console</div>
          </div>
        )}
        <SyntaxHighlighter
          language='javascript'
          showLineNumbers={false}
          style={xcode}
          wrapLines={true}
          lineProps={() => ({
            style: {
              display: 'block',
              position: 'relative',
              paddingLeft: '1.5em',
            },
            className: 'prefixed-line',
          })}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
