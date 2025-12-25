import React from 'react';
import classNames from 'classnames';

import Window from 'src/components/common/Window';
import { WindowPatternVariant } from 'src/components/common/Window/Window';
import { DraggableElement } from './DraggableElement/DraggableElement';
import { DroppableElement } from './DroppableElement/DroppableElement';

import styles from './drag-and-drop-demo.module.scss';

export const DragAndDropDemo = (): React.ReactElement => {
  const bind = classNames.bind(styles);

  const windowTitle = 'Cписок задач [DEMO]';
  const columnsConfig = ['Сделать', 'В процессе', 'Готово'];
  const tasksConfig = ['Сделать то', 'Сделать сё', 'Сделать пятое', 'Сделать десятое'];

  return (
    <Window pattern={WindowPatternVariant.SPRINKLES} title={windowTitle}>
      <div className={bind(styles.dnd_demo_wrapper, styles.dnd_demo_columns)}>
        {columnsConfig.map((column) => (
          <DroppableElement key={column} className={styles.dnd_demo_column}>
            <div className={styles.dnd_demo_column_title}>{column}</div>
          </DroppableElement>
        ))}
      </div>
      <DroppableElement className={bind(styles.dnd_demo_wrapper, styles.dnd_demo_tasks)}>
        {tasksConfig.map((task) => (
          <DraggableElement key={task} title={task} />
        ))}
      </DroppableElement>
    </Window>
  );
};
