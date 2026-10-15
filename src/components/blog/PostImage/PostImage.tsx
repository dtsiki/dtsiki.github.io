import Image from 'next/image';
import type { IPostImageProps } from './PostImage.types';
import { Window } from 'src/components/common/Window/Window';
import { EWindowType } from 'src/components/common/Window/Window.types';

import styles from './PostImage.module.scss';

export const PostImage = ({ src, alt, fileTitle, maxWidth = 1024 }: IPostImageProps) => {
  return (
    <div className={styles.post_image} style={{ maxWidth: maxWidth ? `${maxWidth}px` : 'unset' }}>
      <Window type={EWindowType.IMAGE} fileTitle={fileTitle}>
        <img src={src} alt={alt} width='100%' />
      </Window>
    </div>
  );
};
