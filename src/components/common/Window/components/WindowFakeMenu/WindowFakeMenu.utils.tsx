import { LANGUAGE } from '~types/language';
import { EWindowType } from '../../Window.types';

export const FAKE_MENU_ITEMS = {
  [EWindowType.SLIDESHOW]: {
    [LANGUAGE.ENG]: ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'],
    [LANGUAGE.RU]: ['Файл', 'Редактор', 'Вид', 'Вставка', 'Анимация', 'Помощь'],
  },
  [EWindowType.FOLDER]: {
    [LANGUAGE.ENG]: ['File', 'Edit', 'View', 'Favourites', 'Tools', 'Help'],
    [LANGUAGE.RU]: ['Файл', 'Изменить', 'Просмотр', 'Избранное', 'Инструменты', 'Помощь'],
  },
  [EWindowType.DOC_FILE]: {
    [LANGUAGE.ENG]: ['File', 'Edit', 'Print', 'Tools', 'Help'],
    [LANGUAGE.RU]: ['Файл', 'Изменить', 'Напечатать', 'Инструменты', 'Помощь'],
  },
  [EWindowType.TXT_FILE]: {
    [LANGUAGE.ENG]: ['File', 'Edit', 'Search', 'Help'],
    [LANGUAGE.RU]: ['Файл', 'Изменить', 'Поиск', 'Помощь'],
  },
};

export const hasFakeMenu = (type: EWindowType): type is keyof typeof FAKE_MENU_ITEMS => {
  return type in FAKE_MENU_ITEMS;
};
