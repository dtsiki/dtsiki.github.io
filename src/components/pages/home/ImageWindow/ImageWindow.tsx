import { ReactElement } from 'react';
import Image from 'next/image';

import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';

import styles from './image-window.module.scss';
import kesha from '../../../../../public/assets/blog/semantic-markup-for-the-little-ones/kesha.jpg';

interface Props {
  close: () => void;
}

const HomeImageWindow = ({ close }: Props): ReactElement => {
  return (
    <div className={styles.imageWindow}>
      <Window
        closeAction={close}
        type={WindowType.IMAGE}
        title=''
        fileTitle='yay.jpg'
        isModal>
        <Image
          layout='responsive'
          src={kesha}
          alt='A happy smiling dog breed corgi lying in a flower field on a hill with a small pond in the background' />
      </Window>
    </div>
  );
};

export default HomeImageWindow;
