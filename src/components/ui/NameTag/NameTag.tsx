import React, { ReactElement } from 'react';

import styles from './name-tag.module.scss';

const NameTag = (): ReactElement => {
  return (
    <div className={styles.name_tag}>
      <div className={styles.name_tag__header}>
        <h1 className={styles.name_tag__title}>Hello</h1>
        <h2 className={styles.name_tag__subtitle}>my name is</h2>
      </div>
      <div className={styles.name_tag__field}>
        <span className={styles.name_tag__name}>Daria</span>
      </div>
      <div className={styles.name_tag__footer} />
    </div>
  );
};

export default NameTag;
