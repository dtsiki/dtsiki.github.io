import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

import Window from 'src/components/common/Window';
import DragAndDropCard, { DragAndDropCardVariant } from './_card';
import DragAndDropBox from './_box';

import styles from './drag-and-drop.module.scss';

const DragAndDrop = (): ReactElement => {
  return (
    <Window>
      <div className={styles.dragAndDrop}>
        <div className={styles.dragAndDrop__row}>
          <div className={styles.dragAndDrop__column}>
            <div className={styles.dragAndDrop__title}>
              <FontAwesomeIcon icon={faFolder} />
              To do
            </div>
            <DragAndDropBox>
              <DragAndDropCard
                title='Learn drag and drop'
                variant={DragAndDropCardVariant.PRIMARY} />
            </DragAndDropBox>
          </div>
          <div className={styles.dragAndDrop__column}>
            <div className={styles.dragAndDrop__title}>
              <FontAwesomeIcon icon={faFolder} />
              Doing
            </div>
            <DragAndDropBox />
          </div>
          <div className={styles.dragAndDrop__column}>
            <div className={styles.dragAndDrop__title}>
              <FontAwesomeIcon icon={faFolder} />
              Done
            </div>
            <DragAndDropBox />
          </div>
        </div>
        <div className={styles.dragAndDrop__footer}>
          <div className={styles.dragAndDrop__subtitle}>
            Try out to drag and drop cards between boxes:
          </div>
          <div className={styles.dragAndDrop__stack}>
            <DragAndDropCard
              title='Drink coffee'
              variant={DragAndDropCardVariant.SECONDARY} />
            <DragAndDropCard
              title='Commit changes'
              variant={DragAndDropCardVariant.TERTIARY} />
          </div>
        </div>
      </div>
    </Window>
  );
};

export default DragAndDrop;
