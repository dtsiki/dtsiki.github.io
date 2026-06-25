import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { CSSProperties, ReactNode, RefObject, useLayoutEffect, useRef, useState } from 'react';
import { useAnimationQueue } from './useAnimationQueue';
import { ChevronRightMiniIcon } from 'src/components/common/icons/ui';
import {
  Animation,
  TAnimationItem,
  AnimationDemo,
  IEventLoopAnimationProps,
  TAnimationSpot,
  TPreparedItem,
  Target,
} from './EventLoopAnimation.types';
import { Window } from 'src/components/common/Window';
import { EWindowPatternVariant, EWindowType } from 'src/components/common/Window/Window.types';
import {
  getConsoleLog,
  getFunction,
  getPrimaryLabel,
  getPromiseMethod,
  getPromiseThenFunc,
  getSecondaryLabel,
  getWebAPIEvent,
  getWebAPIRequest,
  getWebAPITimer,
  getWindowTitle,
} from './EventLoopAnimation.utils';
import { getEmptyArray } from 'src/utils';

import styles from './EventLoopAnimation.module.scss';

export const EventLoopAnimation = ({ demo }: IEventLoopAnimationProps) => {
  const bind = classNames.bind(styles);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const callStackRef = useRef<(HTMLDivElement | null)[]>([]);
  const macroQueueRef = useRef<(HTMLDivElement | null)[]>([]);
  const microQueueRef = useRef<(HTMLDivElement | null)[]>([]);
  const webAPIRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationQueue = useAnimationQueue();

  const [initialItems, setInitialItems] = useState<TAnimationItem>({});
  const [preparedItems, setPreparedItems] = useState<TAnimationItem>({});

  const doSomethingFunction = getFunction('doSomething');
  const logDoSomething = getConsoleLog('Сделать то');
  const doSomethingElseFunction = getFunction('doSomethingElse');
  const logDoSomethingElse = getConsoleLog('Сделать сё');

  const FUNCTIONS_ANIMATION_ITEMS: TPreparedItem[] = [
    {
      id: 'doSomethingFunction',
      content: doSomethingFunction,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'logDoSomething',
      content: logDoSomething,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 8,
      },
    },
    {
      id: 'doSomethingElseFunction',
      content: doSomethingElseFunction,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 8,
      },
    },
    {
      id: 'logDoSomethingElse',
      content: logDoSomethingElse,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 7,
      },
    },
  ];

  const FUNCTIONS_ANIMATION_SEQUENCE = [
    () => animateItem('doSomethingFunction', Animation.APPEAR),
    () => animateItem('logDoSomething', Animation.APPEAR),
    () => animateItem('logDoSomething', Animation.HIDE),
    () => animateItem('doSomethingElseFunction', Animation.APPEAR),
    () => animateItem('logDoSomethingElse', Animation.APPEAR),
    () => animateItem('logDoSomethingElse', Animation.HIDE),
    () => animateItem('doSomethingElseFunction', Animation.HIDE),
    () => animateItem('doSomethingFunction', Animation.HIDE),
  ];

  const singlePromiseLogStart = getConsoleLog('Начало');
  const singlePromiseLogEnd = getConsoleLog('Конец');
  const singlePromiseResolveFunc = (
    <span>
      {getSecondaryLabel('Promise')}
      {getPrimaryLabel('.resolve()')}
    </span>
  );
  const singlePromiseThenFunc = getPromiseThenFunc();
  const singlePromiseCallback = getConsoleLog('Промис выполнился');

  const SINGLE_PROMISE_ANIMATION_ITEMS: TPreparedItem[] = [
    {
      id: 'singlePromiseLogStart',
      content: singlePromiseLogStart,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'singlePromiseLogEnd',
      content: singlePromiseLogEnd,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'singlePromiseResolveFunc',
      content: singlePromiseResolveFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'singlePromiseThenFunc',
      content: singlePromiseThenFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'singlePromiseCallback',
      content: singlePromiseCallback,
      initialSpot: {
        target: Target.MICRO_QUEUE,
        cell: 0,
      },
    },
  ];

  const SINGLE_PROMISE_ANIMATION_SEQUENCE = [
    () => animateItem('singlePromiseLogStart', Animation.APPEAR),
    () => animateItem('singlePromiseLogStart', Animation.HIDE),
    () => animateItem('singlePromiseResolveFunc', Animation.APPEAR),
    () => animateItem('singlePromiseResolveFunc', Animation.HIDE),
    () => animateItem('singlePromiseThenFunc', Animation.APPEAR),
    () => animateItem('singlePromiseThenFunc', Animation.HIDE),
    () => animateItem('singlePromiseCallback', Animation.APPEAR),
    () => animateItem('singlePromiseLogEnd', Animation.APPEAR),
    () => animateItem('singlePromiseLogEnd', Animation.HIDE),
    () => animateItem('singlePromiseCallback', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('singlePromiseCallback', Animation.HIDE),
  ];

  const timeoutLogFirst = getConsoleLog('Раз');
  const timeoutLogSecond = getConsoleLog('Два');
  const timeoutLogThird = getConsoleLog('Три');
  const setTimeoutFunc = getFunction('setTimeout');
  const timer = getWebAPITimer('5 ms');

  const SINGLE_TIMEOUT_ANIMATION_ITEMS: TPreparedItem[] = [
    {
      id: 'timeoutLogFirst',
      content: timeoutLogFirst,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'timeoutLogSecond',
      content: timeoutLogSecond,
      initialSpot: {
        target: Target.MACRO_QUEUE,
        cell: 0,
      },
    },
    {
      id: 'timeoutLogThird',
      content: timeoutLogThird,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'setTimeoutFunc',
      content: setTimeoutFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'timer',
      content: timer,
      initialSpot: {
        target: Target.WEB_API,
        cell: 0,
      },
    },
  ];

  const SINGLE_TIMEOUT_ANIMATION_SEQUENCE = [
    () => animateItem('timeoutLogFirst', Animation.APPEAR),
    () => animateItem('timeoutLogFirst', Animation.HIDE),
    () => animateItem('setTimeoutFunc', Animation.APPEAR),
    () => animateItem('timer', Animation.APPEAR),
    () => animateItem('setTimeoutFunc', Animation.HIDE),
    () => animateItem('timeoutLogThird', Animation.APPEAR),
    () => animateItem('timeoutLogThird', Animation.HIDE),
    () => animateItem('timer', Animation.SHAKE_AND_HIDE),
    () => animateItem('timeoutLogSecond', Animation.APPEAR),
    () => animateItem('timeoutLogSecond', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('timeoutLogSecond', Animation.HIDE),
  ];

  const clickEventLogStart = getConsoleLog('Начало');
  const clickEventLogEnd = getConsoleLog('Конец');
  const getElementByIdFunc = getFunction('getElementById', 'button');
  const addEventListenerFunc = getFunction('addEventListener');
  const clickEventWebAPI = getWebAPIEvent('click');
  const clickEventCallback = getConsoleLog('Кнопка нажата');

  const CLICK_EVENT_LISTENER_ANIMATION_ITEMS: TPreparedItem[] = [
    {
      id: 'clickEventLogStart',
      content: clickEventLogStart,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'addEventListenerFunc',
      content: addEventListenerFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'clickEventWebAPI',
      content: clickEventWebAPI,
      initialSpot: {
        target: Target.WEB_API,
        cell: 0,
      },
    },
    {
      id: 'clickEventLogEnd',
      content: clickEventLogEnd,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'clickEventCallback',
      content: clickEventCallback,
      initialSpot: {
        target: Target.MACRO_QUEUE,
        cell: 0,
      },
    },
    {
      id: 'getElementByIdFunc',
      content: getElementByIdFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
  ];

  const CLICK_EVENT_LISTENER_ANIMATION_SEQUENCE = [
    () => animateItem('clickEventLogStart', Animation.APPEAR),
    () => animateItem('clickEventLogStart', Animation.HIDE),
    () => animateItem('getElementByIdFunc', Animation.APPEAR),
    () => animateItem('getElementByIdFunc', Animation.HIDE),
    () => animateItem('addEventListenerFunc', Animation.APPEAR),
    () => animateItem('clickEventWebAPI', Animation.APPEAR),
    () => animateItem('addEventListenerFunc', Animation.HIDE),
    () => animateItem('clickEventLogEnd', Animation.APPEAR),
    () => animateItem('clickEventLogEnd', Animation.HIDE),
    () => animateItem('clickEventWebAPI', Animation.SHAKE_AND_HIDE),
    () => animateItem('clickEventCallback', Animation.APPEAR),
    () => animateItem('clickEventCallback', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('clickEventCallback', Animation.HIDE),
  ];

  const fetchLogStart = getConsoleLog('Начало');
  const fetchLogEnd = getConsoleLog('Конец');
  const fetchFunc = getFunction('fetch', 'https://www.google.com');
  const fetchThenFunc = getFunction('then');
  const fetchCallbackFunc = getConsoleLog('Запрос выполнился');
  const fetchWebAPIRequest = getWebAPIRequest('https://www.google.com');

  const FETCH_ANIMATION_ITEMS: TPreparedItem[] = [
    {
      id: 'fetchLogStart',
      content: fetchLogStart,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchLogEnd',
      content: fetchLogEnd,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchFunc',
      content: fetchFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchThenFunc',
      content: fetchThenFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchWebAPIRequest',
      content: fetchWebAPIRequest,
      initialSpot: {
        target: Target.WEB_API,
        cell: 0,
      },
    },
    {
      id: 'fetchCallbackFunc',
      content: fetchCallbackFunc,
      initialSpot: {
        target: Target.MICRO_QUEUE,
        cell: 0,
      },
    },
  ];

  const FETCH_ANIMATION_SEQUENCE = [
    () => animateItem('fetchLogStart', Animation.APPEAR),
    () => animateItem('fetchLogStart', Animation.HIDE),
    () => animateItem('fetchFunc', Animation.APPEAR),
    () => animateItem('fetchWebAPIRequest', Animation.APPEAR),
    () => animateItem('fetchFunc', Animation.HIDE),
    () => animateItem('fetchLogEnd', Animation.APPEAR),
    () => animateItem('fetchLogEnd', Animation.HIDE),
    () => animateItem('fetchWebAPIRequest', Animation.SHAKE_AND_HIDE),
    () => animateItem('fetchThenFunc', Animation.APPEAR),
    () => animateItem('fetchCallbackFunc', Animation.APPEAR),
    () => animateItem('fetchThenFunc', Animation.HIDE),
    () => animateItem('fetchCallbackFunc', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('fetchCallbackFunc', Animation.HIDE),
  ];

  const promiseRaceLogStart = getConsoleLog('Делаем ставки');
  const promiseRaceLogEnd = getConsoleLog('Ставки сделаны');
  const promiseRaceFunc = getPromiseMethod('race()');
  const fetchGoogleFunc = getFunction('fetch', 'https://www.google.com)');
  const fetchYandexFunc = getFunction('fetch', 'https://www.yandex.ru)');
  const fetchGoogleWebAPIRequest = getWebAPIRequest('https://www.google.com');
  const fetchYandexWebAPIRequest = getWebAPIRequest('https://www.yandex.ru');
  const promiseRaceThenFunc = getPromiseThenFunc();
  const promiseCallbackFunc = getConsoleLog('Гонка завершена');
  const googleThenFunc = getPromiseThenFunc();
  const googleCallbackLog = getConsoleLog('Гугл ответил');
  const yandexThenFunc = getPromiseThenFunc();
  const yandexCallbackLog = getConsoleLog('Яндекс ответил');

  const PROMISE_RACE_ANIMATION_ITEMS: TPreparedItem[] = [
    {
      id: 'promiseRaceLogStart',
      content: promiseRaceLogStart,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'promiseRaceLogEnd',
      content: promiseRaceLogEnd,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'promiseRaceFunc',
      content: promiseRaceFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchGoogleFunc',
      content: fetchGoogleFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchYandexFunc',
      content: fetchYandexFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'fetchGoogleWebAPIRequest',
      content: fetchGoogleWebAPIRequest,
      initialSpot: {
        target: Target.WEB_API,
        cell: 0,
      },
    },
    {
      id: 'fetchYandexWebAPIRequest',
      content: fetchYandexWebAPIRequest,
      initialSpot: {
        target: Target.WEB_API,
        cell: 1,
      },
    },
    {
      id: 'promiseRaceThenFunc',
      content: promiseRaceThenFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'promiseCallbackFunc',
      content: promiseCallbackFunc,
      initialSpot: {
        target: Target.MICRO_QUEUE,
        cell: 0,
      },
    },

    {
      id: 'googleCallbackLog',
      content: googleCallbackLog,
      initialSpot: {
        target: Target.MICRO_QUEUE,
        cell: 0,
      },
    },
    {
      id: 'yandexCallbackLog',
      content: yandexCallbackLog,
      initialSpot: {
        target: Target.MICRO_QUEUE,
        cell: 0,
      },
    },
    {
      id: 'googleThenFunc',
      content: googleThenFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
    {
      id: 'yandexThenFunc',
      content: yandexThenFunc,
      initialSpot: {
        target: Target.CALL_STACK,
        cell: 9,
      },
    },
  ];

  const PROMISE_RACE_ANIMATION_SEQUENCE = [
    () => animateItem('promiseRaceLogStart', Animation.APPEAR),
    () => animateItem('promiseRaceLogStart', Animation.HIDE),
    () => animateItem('promiseRaceFunc', Animation.APPEAR),
    () => animateItem('promiseRaceFunc', Animation.HIDE),
    () => animateItem('fetchGoogleFunc', Animation.APPEAR),
    () => animateItem('fetchGoogleWebAPIRequest', Animation.APPEAR),
    () => animateItem('fetchGoogleFunc', Animation.HIDE),
    () => animateItem('fetchYandexFunc', Animation.APPEAR),
    () => animateItem('fetchYandexWebAPIRequest', Animation.APPEAR),
    () => animateItem('fetchYandexFunc', Animation.HIDE),
    () => animateItem('promiseRaceLogEnd', Animation.APPEAR),
    () => animateItem('promiseRaceLogEnd', Animation.HIDE),
    () => animateItem('fetchYandexWebAPIRequest', Animation.SHAKE_AND_HIDE),
    () => animateItem('yandexThenFunc', Animation.APPEAR),
    () => animateItem('yandexCallbackLog', Animation.APPEAR),
    () => animateItem('yandexThenFunc', Animation.HIDE),
    () => animateItem('yandexCallbackLog', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('yandexCallbackLog', Animation.HIDE),
    () => animateItem('promiseRaceThenFunc', Animation.APPEAR),
    () => animateItem('promiseCallbackFunc', Animation.APPEAR),
    () => animateItem('promiseRaceThenFunc', Animation.HIDE),
    () => animateItem('promiseCallbackFunc', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('promiseCallbackFunc', Animation.HIDE),
    () => animateItem('fetchGoogleWebAPIRequest', Animation.SHAKE_AND_HIDE),
    () => animateItem('googleThenFunc', Animation.APPEAR),
    () => animateItem('googleCallbackLog', Animation.APPEAR),
    () => animateItem('googleThenFunc', Animation.HIDE),
    () => animateItem('googleCallbackLog', Animation.MOVE, { target: Target.CALL_STACK, cell: 9 }),
    () => animateItem('googleCallbackLog', Animation.HIDE),
  ];

  const resetAnimation = () => {
    if (!animationQueue) {
      return;
    }

    animationQueue.addCallback(async () => {
      setPreparedItems({});
      setPreparedItems(initialItems);
      setIsRunning(false);
    });
  };

  const getAnimationItems = (demo: AnimationDemo) => {
    switch (demo) {
      case AnimationDemo.FUNCTIONS:
        return FUNCTIONS_ANIMATION_ITEMS;
      case AnimationDemo.SINGLE_PROMISE:
        return SINGLE_PROMISE_ANIMATION_ITEMS;
      case AnimationDemo.SINGLE_TIMEOUT:
        return SINGLE_TIMEOUT_ANIMATION_ITEMS;
      case AnimationDemo.CLICK_EVENT_LISTENER:
        return CLICK_EVENT_LISTENER_ANIMATION_ITEMS;
      case AnimationDemo.FETCH:
        return FETCH_ANIMATION_ITEMS;
      case AnimationDemo.PROMISE_RACE:
        return PROMISE_RACE_ANIMATION_ITEMS;
    }
  };

  const getAnimationSequence = (demo: AnimationDemo) => {
    switch (demo) {
      case AnimationDemo.FUNCTIONS:
        return FUNCTIONS_ANIMATION_SEQUENCE;
      case AnimationDemo.SINGLE_PROMISE:
        return SINGLE_PROMISE_ANIMATION_SEQUENCE;
      case AnimationDemo.SINGLE_TIMEOUT:
        return SINGLE_TIMEOUT_ANIMATION_SEQUENCE;
      case AnimationDemo.CLICK_EVENT_LISTENER:
        return CLICK_EVENT_LISTENER_ANIMATION_SEQUENCE;
      case AnimationDemo.FETCH:
        return FETCH_ANIMATION_SEQUENCE;
      case AnimationDemo.PROMISE_RACE:
        return PROMISE_RACE_ANIMATION_SEQUENCE;
    }
  };

  const getRefArray = (target: Target) => {
    switch (target) {
      case Target.CALL_STACK:
        return callStackRef.current;
      case Target.MICRO_QUEUE:
        return microQueueRef.current;
      case Target.MACRO_QUEUE:
        return macroQueueRef.current;
      case Target.WEB_API:
        return webAPIRef.current;
    }
  };

  const getCellPosition = (target: Target, index: number): { top: number; left: number } | null => {
    const cells = getRefArray(target);
    const targetCell = cells[index];

    if (!targetCell) {
      return null;
    }

    const top = targetCell.offsetTop;
    const left = targetCell.offsetLeft;

    return { top, left };
  };

  const prepareItem = (item: TPreparedItem) => {
    const { id, content, initialSpot } = item;
    const { target, cell } = initialSpot;
    const initialPosition = getCellPosition(target, cell);

    if (!initialPosition) {
      return null;
    }

    return {
      id,
      content,
      style: {
        top: initialPosition.top,
        left: initialPosition.left,
      } as CSSProperties,
    };
  };

  useLayoutEffect(() => {
    const items = getAnimationItems(demo);

    items?.forEach((item) => {
      const preparedItem = prepareItem(item);

      if (!preparedItem) {
        return;
      }

      setPreparedItems((prev) => ({ ...prev, [item.id]: preparedItem }));
      setInitialItems((prev) => ({ ...prev, [item.id]: preparedItem }));
    });
  }, []);

  const updateItemRef = (id: string, newRef: RefObject<HTMLElement | null>) => {
    setPreparedItems((prev) => {
      if (!prev[id]) {
        return prev;
      }

      return {
        ...prev,
        [id]: {
          ...prev[id],
          ref: newRef,
        },
      };
    });
  };

  const moveAnimatedItem = (id: string, spot: TAnimationSpot) => {
    const newPosition = getCellPosition(spot.target, spot.cell);

    if (!newPosition) {
      return;
    }

    setPreparedItems((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        style: {
          ...prev[id].style,
          top: newPosition.top,
          left: newPosition.left,
          transition: 'all 1s ease-out',
          opacity: 1,
        } as CSSProperties,
      },
    }));
  };

  const animateItem = (id: string, animation: Animation, spot?: TAnimationSpot) => {
    if (!animationQueue) {
      return;
    }

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    if (animation === Animation.MOVE && spot) {
      animationQueue.addCallback(async () => {
        moveAnimatedItem(id, spot);
      });
    }

    animationQueue.add(element, animation);
  };

  const run = () => {
    setIsRunning(true);

    const currentSequence = getAnimationSequence(demo);

    if (currentSequence) {
      const sequence = [...currentSequence, () => resetAnimation()];

      for (const func of sequence) {
        func();
      }
    }
  };

  return (
    <div className='spacer top bottom medium'>
      <Window
        id={nanoid()}
        type={EWindowType.CUSTOM}
        fileTitle={getWindowTitle(demo)}
        pattern={EWindowPatternVariant.MEMPHIS}>
        <div className={styles.event_loop_animation}>
          <div className={styles.event_loop_animation__wrapper}>
            {Object.entries(preparedItems).map(([id, item]) => (
              <div
                key={id}
                id={id}
                ref={(node) => {
                  if (node && !item.ref) {
                    updateItemRef(item.id, { current: node });
                  }
                }}
                className={styles.event_loop_animation__item}
                style={item.style}>
                {item.content}
              </div>
            ))}
            <div className={bind([styles.event_loop_animation__column, styles.CALL_STACK])}>
              <div className={styles.event_loop_animation__card}>
                <div className={styles.event_loop_animation__subtitle}>Call Stack</div>
                <div className={bind([styles.event_loop_animation__list, styles.CALL_STACK])}>
                  {getEmptyArray(10).map((_, index) => (
                    <div
                      className={styles.event_loop_animation__cell}
                      ref={(element) => (callStackRef.current[index] = element)}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.event_loop_animation__column}>
              <div className={styles.event_loop_animation__card}>
                <div className={styles.event_loop_animation__subtitle}>Microtask Queue</div>
                <div className={bind([styles.event_loop_animation__list, styles.QUEUE])}>
                  {getEmptyArray(5).map((_, index) => (
                    <div
                      className={styles.event_loop_animation__cell}
                      ref={(element) => (microQueueRef.current[index] = element)}></div>
                  ))}
                </div>
              </div>
              <div className={styles.event_loop_animation__card}>
                <div className={styles.event_loop_animation__subtitle}>Macrotask Queue</div>
                <div className={bind([styles.event_loop_animation__list, styles.QUEUE])}>
                  {getEmptyArray(5).map((_, index) => (
                    <div
                      className={styles.event_loop_animation__cell}
                      ref={(element) => (macroQueueRef.current[index] = element)}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className={bind([styles.event_loop_animation__column, styles.WEB_API])}>
              <div className={styles.event_loop_animation__card}>
                <div className={styles.event_loop_animation__subtitle}>Web API</div>
                <div className={bind([styles.event_loop_animation__list, styles.WEB_API])}>
                  {getEmptyArray(10).map((_, index) => (
                    <div
                      className={styles.event_loop_animation__cell}
                      ref={(element) => (webAPIRef.current[index] = element)}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.event_loop_animation__footer}>
            <div className={styles.event_loop_animation__controls}>
              <button onClick={run} className={styles.event_loop_animation__control} disabled={isRunning}>
                Пуск
                <ChevronRightMiniIcon className={styles.event_loop_animation__control_icon} />
              </button>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};
