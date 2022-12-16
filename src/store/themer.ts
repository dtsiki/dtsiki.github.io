import { StoreonModule } from 'storeon';

export enum ThemeColor {
  VIOLET = 'violet',
  BLACK = 'black',
  WHITE = 'white'
}

export interface State {
  topColor: ThemeColor,
  bottomColor: ThemeColor
}

export interface Events {
  'setTopColor': ThemeColor,
  'setBottomColor': ThemeColor
}

export enum ThemerEvent {
  SET_TOP_COLOR = 'setTopColor',
  SET_BOTTOM_COLOR = 'setBottomColor',
}

export const themer: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({ topColor: ThemeColor.VIOLET, bottomColor: ThemeColor.VIOLET }));

  store.on(ThemerEvent.SET_TOP_COLOR, (_, event) => ({
    topColor: event
  }));

  store.on(ThemerEvent.SET_BOTTOM_COLOR, (_, event) => ({
    bottomColor: event
  }));
};
