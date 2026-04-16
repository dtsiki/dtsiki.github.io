import { useRef } from 'react';
import { IDroppableElementProps } from './DroppableElement.types';

export const DroppableElement = ({ children, className }: IDroppableElementProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const allowDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();

    const data = e.dataTransfer.getData('text');
    const card = document.getElementById(data) as Node;

    console.log('drop', data, card);

    ref?.current?.appendChild(card);
  };

  return (
    <div
      ref={ref}
      className={className}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => allowDrop(e)}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}>
      {children}
    </div>
  );
};
