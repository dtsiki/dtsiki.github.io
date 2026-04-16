import classNames from 'classnames';

import styles from './Hero.module.scss';

export const Hero = () => {
  const bind = classNames.bind(styles);

  const items = [
    {
      label: 'Hello',
      styles: [styles.VIOLET_FILLED, styles.LOWERCASE],
    },
    {
      label: 'Ciao',
      styles: [styles.YELLOW_BORDERED, styles.UPPERCASE, styles.BOLD],
    },
    {
      label: 'Bonjour',
      styles: [styles.BLACK_FILLED, styles.BOLD, styles.LOWERCASE],
    },
    {
      label: 'Aloha',
      styles: [styles.GREY_FILLED, styles.ITALIC, styles.LOWERCASE],
    },
    {
      label: '안녕하세요',
      styles: [styles.YELLOW_FILLED, styles.ITALIC],
    },
    {
      label: 'Hola',
      styles: [styles.YELLOW_FILLED, styles.LOWERCASE],
    },
    {
      label: 'Salut',
      styles: [styles.BLACK_BORDERED, styles.LOWERCASE, styles.ITALIC, styles.BOLD],
    },
    {
      label: 'こんにちは',
      styles: [styles.VIOLET_BORDERED, styles.BOLD],
    },
    {
      label: 'Olá',
      styles: [styles.VIOLET_FILLED, styles.UPPERCASE],
    },
    {
      label: '你好',
      styles: [styles.BLACK_BORDERED, styles.BOLD],
    },
  ];

  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.hero__wrapper}>
          {items.map((item) => (
            <div key={item.label} className={bind([styles.hero__item, item.styles])}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
