import { PointerMiniIcon } from 'src/components/common/icons/ui';

import styles from './Pointer.module.scss';

export const Pointer = () => {
  return (
    <span className={styles.pointer}>
      <PointerMiniIcon className={styles.pointer__icon} />
    </span>
  );
};
