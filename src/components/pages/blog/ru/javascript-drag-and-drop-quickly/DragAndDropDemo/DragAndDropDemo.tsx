import classNames from 'classnames';
import { Window } from 'src/components/common/Window/Window';
import { EWindowPatternVariant, EWindowType } from 'src/components/common/Window/Window.types';
import { DraggableElement } from './DraggableElement/DraggableElement';
import { DroppableElement } from './DroppableElement/DroppableElement';

import styles from './DragAndDropDemo.module.scss';

export const DragAndDropDemo = () => {
  const bind = classNames.bind(styles);

  const windowTitle = 'Cписок задач [DEMO]';
  const columnsConfig = ['Сделать', 'В процессе', 'Готово'];
  const tasksConfig = ['Сделать то', 'Сделать сё', 'Сделать пятое', 'Сделать десятое'];

  return (
    <Window type={EWindowType.CUSTOM} pattern={EWindowPatternVariant.SPRINKLES} title={windowTitle}>
      <div className={styles.dnd_demo}>
        <div className={bind(styles.dnd_demo__wrapper, styles.dnd_demo__columns)}>
          {columnsConfig.map((column) => (
            <DroppableElement key={column} className={styles.dnd_demo__column}>
              <div className={styles.dnd_demo__column_title}>{column}</div>
            </DroppableElement>
          ))}
        </div>
        <DroppableElement className={bind(styles.dnd_demo__wrapper, styles.dnd_demo__tasks)}>
          {tasksConfig.map((task) => (
            <DraggableElement key={task} title={task} />
          ))}
        </DroppableElement>
      </div>
    </Window>
  );
};
