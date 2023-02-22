import { ReactElement } from 'react';

import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './tic-tac-toe-window.module.scss';

interface Props {
  close: () => void;
}

const HomeTicTacToeWindow = ({ close }: Props): ReactElement => {
  return (
    <div className={styles.ticTacToeWindow}>
      <Window
        closeAction={close}
        type={WindowType.CUSTOM}
        fileTitle='tic-tac-toe.exe'
        isModal>
        <div className={styles.ticTacToeWindow__body}>
          <iframe
            title='Tic Tac Toe'
            width='100%'
            height='100%'
            src='https://dtsiki.github.io/tic-tac-toe/' />
        </div>
      </Window>
    </div>
  );
};

export default HomeTicTacToeWindow;
