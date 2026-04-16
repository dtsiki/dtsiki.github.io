import { useState } from 'react';
import classNames from 'classnames';
import { ECardType, ICardProps } from './Card.types';

import styles from './Card.module.scss';

export const Card = ({ title, variant = ECardType.PRIMARY }: ICardProps) => {
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
      className={bind([styles.card, styles[variant], { [styles.grabbing]: isGrabbing }])}
      draggable
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e)}
      onDragEnd={() => handleDragEnd()}>
      {title}
    </div>
  );
};
