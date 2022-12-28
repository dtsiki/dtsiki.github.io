import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './validator.module.scss';

export enum Type {
  ERROR = 'error',
  WARNING = 'warning',
  SLIDESHOW = 'slideshow',
  FOLDER = 'folder',
  IMAGE = 'image',
  VALIDATOR = 'validator'
}

interface Props {
  result: string;
  code: string;
  type: Type;
}

const Validator = ({ result, code, type }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const getStartingLineNumber = (): number => {
    const maxLineNumber = 100;
    const minLineNumber = 30;

    return Math.round(Math.random() * (maxLineNumber - minLineNumber) + minLineNumber);
  }

  return (
    <Window
      type={WindowType.VALIDATOR}
      title='HTML markup validator'>
      <div className={styles.validator__valivator}>
        <div className={styles.validator__form}>
          <span className={bind([styles.validator__type, styles[type]])}>{type}</span>
          {result}
        </div>
        <Code
          startingLineNumber={getStartingLineNumber()}
          showLineNumbers={false}
          language={CodeLanguage.HTML}
          code={code}
          showOnlyCode/>
      </div>
    </Window>
  );
};

export default Validator;
