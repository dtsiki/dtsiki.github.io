import React, { ReactElement, useMemo } from 'react';

import styles from './palette.module.scss';

const Palette = (): ReactElement => {
  const colors = [
    {
      name: 'Violet',
      color: '#7F00FF'
    },
    {
      name: 'Electric violet',
      color: '#8F00FF'
    },
    {
      name: 'Vivid violet',
      color: '#9F00FF'
    },
    {
      name: 'Dark violet',
      color: '#9400D3'
    },
    {
      name: 'Pixie powder',
      color: '#501098'
    }
  ];

  const renderPallete = useMemo(() => {
    return colors.map((item) => {
      const { name, color } = item;

      return (
        <li
          key={color}
          className={styles.palette__item}>
          <span
            className={styles.palette__color}
            style={{ background: `${color}` }}>
            {name}
          </span>
          <span className={styles.palette__label}>{color}</span>
        </li>
      );
    })
  }, [colors]);

  return (
    <ul className={styles.palette}>
      {renderPallete}
    </ul>
  );
};

export default Palette;
