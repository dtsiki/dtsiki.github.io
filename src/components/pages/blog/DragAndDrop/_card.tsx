import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';

import styles from './drag-and-drop.module.scss';

export enum DragAndDropCardVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

interface Props {
  title: string;
  variant?: DragAndDropCardVariant;
}

const DragAndDropCard = ({ title, variant = DragAndDropCardVariant.PRIMARY }: Props): ReactElement => {
  const bind = classNames.bind(styles);
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
      id={title}
      className={bind([styles.dragAndDrop__card, styles[variant], { [styles.grabbing]: isGrabbing }])}
      draggable
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e)}
      onDragEnd={() => handleDragEnd()}>
      {title}
    </div>
  );
};

export default DragAndDropCard;
