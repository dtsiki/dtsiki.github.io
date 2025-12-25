import React, { useState } from 'react';

import styles from './draggable-element.module.scss';

interface IDraggableElement {
  title: string;
}

export const DraggableElement = ({ title }: IDraggableElement): React.ReactElement => {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    e.dataTransfer.setData('text', title);
    setIsGrabbing(true);
  };

  const handleDragEnd = (): void => {
    setIsGrabbing(false);
  };

  return (
    <div
      draggable
      id={title}
      className={styles.draggable_element}
      style={{ opacity: isGrabbing ? 0.4 : 1 }}
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e)}
      onDragEnd={() => handleDragEnd()}>
      {title}
    </div>
  );
};
