import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';

import Window from 'src/components/common/Window';

import styles from './chat.module.scss';
import { WindowType } from 'src/components/common/Window/Window';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPhone, faSmile } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const Chat = (): ReactElement => {
  const bind = classNames.bind(styles);

  const currentDate = moment()
    .format('MMM D YYYY');

  return (
    <div className={styles.chat}>
      <Window
        type={WindowType.CHAT}
        title=''>
        <div className={styles.chat__header}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <div className={styles.chat__title}>
            Buddy
          </div>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className={styles.chat__wrapper}>
          <div className={styles.chat__date}>
            {currentDate}
          </div>
          <div className={bind([styles.chat__row, styles.left])}>
            <div className={bind([styles.chat__message, styles.left])}>
              What do you like doing?
            </div>
          </div>
          <div className={bind([styles.chat__row, styles.right])}>
            <div className={bind([styles.chat__message, styles.right])}>
              I like eating cakes
            </div>
          </div>
          <div className={bind([styles.chat__row, styles.right])}>
            <div className={bind([styles.chat__message, styles.emoji])}>
              😎
            </div>
          </div>
          <div className={bind([styles.chat__row, styles.right, styles.note])}>
            <div className={styles.chat__note}>
              Seen
            </div>
          </div>
          <div className={bind([styles.chat__row, styles.left])}>
            <div className={bind([styles.chat__message, styles.emoji])}>
              🍰 🍰 🍰
            </div>
          </div>
          <div className={styles.chat__footer}>
            Typing...
          </div>
        </div>
        <div className={styles.chat__input}>
          <span className={styles.chat__placeholder}>Write a message...</span>
          <FontAwesomeIcon icon={faSmile} />
        </div>
      </Window>
    </div>
  );
};

export default Chat;
