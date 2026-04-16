import { isUndefined } from 'lodash';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { WINDOW_ICON } from 'src/components/common/Window/components/WindowHeader/WindowHeader.utils';
import { BinIcon, FolderIcon } from 'src/components/common/icons/ui';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';
import { BIN } from 'src/i18n';
import { Language, TWindowConfig, TranslationObject } from 'src/types';
import { translateTitle } from 'src/utils/translate';

export const getCustomWindowIcon = (id: string) => {
  if (id === EWindowRecord.BLOG_FOLDER) {
    return <FolderIcon useMini={true} />;
  }

  if (id === EWindowRecord.TRASH_BIN) {
    return <BinIcon useMini={true} />;
  }
};

export const getCustomWindowTitle = (
  id: string,
  config: {
    language: Language;
    currentTitle?: string | TranslationObject;
    translate?: (translations: TranslationObject) => string;
  }
) => {
  if (id === EWindowRecord.BLOG_FOLDER && config.currentTitle && config.language) {
    return translateTitle(config.language, config.currentTitle);
  }

  if (id === EWindowRecord.TRASH_BIN) {
    return config.translate?.(BIN);
  }
};

export const getWindowIcon = (config?: TWindowConfig) => {
  if (isUndefined(config)) {
    return;
  }

  const { type } = config;

  if (type) {
    if (
      type in WINDOW_ICON &&
      type !== EWindowType.WINDOW &&
      type !== EWindowType.CHAT &&
      type !== EWindowType.CUSTOM
    ) {
      return WINDOW_ICON[type];
    }
  }
};

export const getWindowTitle = (language: Language, config?: TWindowConfig) => {
  if (isUndefined(config)) {
    return;
  }

  const { title } = config;

  if (title) {
    return translateTitle(language, title);
  }
};
