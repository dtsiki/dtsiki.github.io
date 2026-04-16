import { HandHeartIcon } from '../icons/ui';

import styles from './Thanks.module.scss';

export const Thanks = () => {
  return (
    <div className='section'>
      <div className={styles.thanks}>
        <HandHeartIcon className={styles.thanks__icon} />
      </div>
    </div>
  );
};
