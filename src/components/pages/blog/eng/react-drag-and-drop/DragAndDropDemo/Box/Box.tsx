import { useRef } from 'react';
import { IBoxProps } from './Box.types';

import styles from './Box.module.scss';

export const Box = ({ children }: IBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const allowDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();

    const data = e.dataTransfer.getData('text');
    const card = document.getElementById(data) as Node;

    ref?.current?.appendChild(card);
  };

  return (
    <div
      ref={ref}
      className={styles.box}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => allowDrop(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}>
      {children}
    </div>
  );
};
