import { useState } from 'react';
import { IDraggableElementProps } from './DraggableElement.types';

import styles from './DraggableElement.module.scss';

export const DraggableElement = ({ title }: IDraggableElementProps) => {
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
