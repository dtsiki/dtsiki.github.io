import { IExampleSnippetProps } from './ExampleSnippet.types';
import { Example } from 'src/components/common/Example';

import styles from './ExampleSnippet.module.scss';

export const ExampleSnippet = ({ code, isCopyable }: IExampleSnippetProps) => {
  return (
    <div className={styles.example_snippet}>
      <div className='row'>
        <div className='col col--100 col--tablet-100'>
          <Example code={code} isCopyable={isCopyable} />
        </div>
      </div>
    </div>
  );
};
