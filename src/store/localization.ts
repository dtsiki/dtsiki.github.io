import { StoreonModule } from 'storeon';

export enum ELanguage {
  ENG = 'Eng',
  RU = 'Ru',
}

export interface State {
  language: ELanguage,
}

export interface Events {
  'setLanguage': ELanguage,
}

export enum LocalizationEvent {
  SET_LANGUAGE = 'setLanguage',
}

export const localization: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({ language: ELanguage.ENG }));

  store.on(LocalizationEvent.SET_LANGUAGE, (_, event) => ({
    language: event
  }));
};
