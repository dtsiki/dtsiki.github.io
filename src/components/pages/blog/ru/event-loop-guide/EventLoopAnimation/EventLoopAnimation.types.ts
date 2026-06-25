import { CSSProperties, ReactNode, RefObject } from 'react';

export type TAnimationItem = Record<
  string,
  {
    id: string;
    content: ReactNode;
    style: CSSProperties;
    ref?: RefObject<HTMLElement | null>;
  }
>;

export interface IEventLoopAnimationProps {
  demo: AnimationDemo;
}

export type TPreparedItem = {
  id: string;
  content: ReactNode;
  initialSpot: {
    target: Target;
    cell: number;
  };
};

export type TAnimationFunc = () => void;

export type TAnimationSpot = {
  target: Target;
  cell: number;
};

export const Target = {
  CALL_STACK: 'CALL_STACK',
  MICRO_QUEUE: 'MICRO_QUEUE',
  MACRO_QUEUE: 'MACRO_QUEUE',
  WEB_API: 'WEB_API',
} as const;

export type Target = typeof Target[keyof typeof Target];

export const Animation = {
  APPEAR: 'APPEAR',
  HIDE: 'HIDE',
  APPEAR_AND_HIDE: 'APPEAR_AND_HIDE',
  MOVE: 'MOVE',
  APPEAR_AND_MOVE: 'APPEAR_AND_MOVE',
  APPEAR_FROM_NOWHERE: 'APPEAR_FROM_NOWHERE',
  WAITING: 'WAITING',
  SHAKE_AND_HIDE: 'SHAKE-AND-HIDE',
  HIDE_WITH_DELAY: 'HIDE_WITH_DELAY',
} as const;

export type Animation = typeof Animation[keyof typeof Animation];

export const AnimationDemo = {
  FUNCTIONS: 'FUNCTIONS',
  SINGLE_PROMISE: 'SINGLE_PROMISE',
  SINGLE_TIMEOUT: 'SINGLE_TIMEOUT',
  PROMISE_AND_TIMEOUT: 'PROMISE_AND_TIMEOUT',
  CLICK_EVENT_LISTENER: 'CLICK_EVENT_LISTENER',
  FETCH: 'FETCH',
  PROMISE_RACE: 'PROMISE_RACE',
} as const;

export type AnimationDemo = typeof AnimationDemo[keyof typeof AnimationDemo];
