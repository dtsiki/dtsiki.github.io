import React, { ReactElement, ReactNode, useRef } from 'react';

import styles from './drag-and-drop.module.scss';

export enum DragAndDropCardVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

interface Props {
  children?: ReactNode;
}

const DragAndDropBox = ({ children }: Props): ReactElement => {
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
      className={styles.dragAndDrop__box}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => allowDrop(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}>
      {children}
    </div>
  );
};

export default DragAndDropBox;
