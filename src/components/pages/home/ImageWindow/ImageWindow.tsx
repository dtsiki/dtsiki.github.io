import Image from 'next/image';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { Window } from 'src/components/common/Window';

import styles from './ImageWindow.module.scss';
import kesha from '../../../../../public/assets/blog/semantic-markup-for-the-little-ones/kesha.jpg';

export const HomeImageWindow = () => {
  return (
    <div className={styles.home_image_window}>
      <Window type={EWindowType.IMAGE} title='kesha.jpg'>
        <Image
          layout='responsive'
          src={kesha}
          alt='A happy smiling dog breed corgi lying in a flower field on a hill with a small pond in the background'
        />
      </Window>
    </div>
  );
};
