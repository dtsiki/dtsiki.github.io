import { AnimationDemo } from './EventLoopAnimation.types';
import styles from './EventLoopAnimation.module.scss';
import { ReactNode } from 'react';
import classNames from 'classnames';
import { Clock } from './Clock';
import { Loading } from './Loading';
import { Pointer } from './Pointer';

const bind = classNames.bind(styles);

export const WINDOW_TITLE_CONFIG = {
  [AnimationDemo.FUNCTIONS]: 'call-stack',
  [AnimationDemo.SINGLE_TIMEOUT]: 'timeout',
  [AnimationDemo.SINGLE_PROMISE]: 'promise',
  [AnimationDemo.FETCH]: 'fetch',
  [AnimationDemo.PROMISE_AND_TIMEOUT]: 'promise+timeout',
  [AnimationDemo.CLICK_EVENT_LISTENER]: 'click-event-listener',
  [AnimationDemo.PROMISE_RACE]: 'promise-race',
};

export const getWindowTitle = (demo: AnimationDemo) => {
  return `${WINDOW_TITLE_CONFIG[demo]}-demo.exe`;
};

export const getPrimaryLabel = (item: ReactNode) => {
  return <span className={styles.primary_label}>{item}</span>;
};

export const getSecondaryLabel = (item: ReactNode, isStrikethrough: boolean = false) => {
  return <span className={bind([styles.secondary_label, isStrikethrough && styles.STRIKETHROUGH])}>{item}</span>;
};

export const getConsoleLog = (label: string) => {
  const formattedLog = getPrimaryLabel('.log');

  return (
    <span>
      console
      {formattedLog}('{label}')
    </span>
  );
};

export const getFunction = (name: string, arg?: string) => {
  return (
    <span>
      {getPrimaryLabel(name)}({arg})
    </span>
  );
};

export const getPromiseMethod = (method: string) => {
  return (
    <span>
      {getSecondaryLabel('Promise()')}
      {getPrimaryLabel(`.${method}`)}
    </span>
  );
};

export const getWebAPITimer = (delay: ReactNode) => {
  return (
    <span className={styles.web_api}>
      <Clock />
      <span className={styles.web_api__label}>{delay}</span>
    </span>
  );
};

export const getWebAPIRequest = (label: ReactNode) => {
  return (
    <span className={styles.web_api}>
      <Loading />
      <span className={styles.web_api__label}>{label}</span>
    </span>
  );
};

export const getWebAPIEvent = (event: 'click') => {
  return (
    <span className={styles.web_api}>
      {event === 'click' && <Pointer />}
      <span className={styles.web_api__label}>{event}</span>
    </span>
  );
};

export const getPromiseThenFunc = () => {
  return (
    <span>
      {getSecondaryLabel('Promise', true)}
      {getSecondaryLabel('.resolve()', true)}
      {getPrimaryLabel('.then()')}
    </span>
  );
};
