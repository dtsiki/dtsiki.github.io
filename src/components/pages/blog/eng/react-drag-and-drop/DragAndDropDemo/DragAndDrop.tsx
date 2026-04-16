import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { Window } from 'src/components/common/Window/Window';

import styles from './DragAndDropDemo.module.scss';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { Card } from './Card/Card';
import { ECardType } from './Card/Card.types';
import { Box } from './Box/Box';

export const DragAndDropDemo = () => {
  return (
    <Window type={EWindowType.CUSTOM} title='drag-and-drop-demo.exe'>
      <div className={styles.drag_and_drop_demo}>
        <div className={styles.drag_and_drop_demo__row}>
          <div className={styles.drag_and_drop_demo__column}>
            <div className={styles.drag_and_drop_demo__title}>
              <FontAwesomeIcon icon={faFolder} />
              To do
            </div>
            <Box>
              <Card title='Learn Drag and Drop' variant={ECardType.PRIMARY} />
            </Box>
          </div>
          <div className={styles.drag_and_drop_demo__column}>
            <div className={styles.drag_and_drop_demo__title}>
              <FontAwesomeIcon icon={faFolder} />
              Doing
            </div>
            <Box />
          </div>
          <div className={styles.drag_and_drop_demo__column}>
            <div className={styles.drag_and_drop_demo__title}>
              <FontAwesomeIcon icon={faFolder} />
              Done
            </div>
            <Box />
          </div>
        </div>
        <div className={styles.drag_and_drop_demo__footer}>
          <div className={styles.drag_and_drop_demo__subtitle}>Try out to drag and drop cards below between boxes</div>
          <div className={styles.drag_and_drop_demo__stack}>
            <Card title='Drink coffee' variant={ECardType.SECONDARY} />
            <Card title='Commit changes' variant={ECardType.TERTIARY} />
          </div>
        </div>
      </div>
    </Window>
  );
};
