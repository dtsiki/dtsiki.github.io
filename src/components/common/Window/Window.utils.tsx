import { EWindowType } from './Window.types';
import type { TWindowConfig } from '~types/window';

export const isBaseWindow = (config?: TWindowConfig) => {
  if (config && config.type && config.type in EWindowType) {
    return true;
  }
};

export const isCustomWindow = (config?: TWindowConfig) => {
  if (config && config.type === undefined) {
    return false;
  }
};

export const renderCustomWindow = (config?: TWindowConfig) => {
  if (config?.customComponent) {
    const Component = config.customComponent;

    return Component;
  }
};
