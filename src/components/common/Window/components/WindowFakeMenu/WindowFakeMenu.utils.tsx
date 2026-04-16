import { Language } from 'src/types';
import { EWindowType } from '../../Window.types';

export const FAKE_MENU_ITEMS = {
  [EWindowType.SLIDESHOW]: {
    [Language.ENG]: ['File', 'Edit', 'View', 'Insert', 'Format', 'Help'],
    [Language.RU]: ['Файл', 'Редактор', 'Вид', 'Вставка', 'Анимация', 'Помощь'],
  },
  [EWindowType.FOLDER]: {
    [Language.ENG]: ['File', 'Edit', 'View', 'Favourites', 'Tools', 'Help'],
    [Language.RU]: ['Файл', 'Изменить', 'Просмотр', 'Избранное', 'Инструменты', 'Помощь'],
  },
  [EWindowType.DOC_FILE]: {
    [Language.ENG]: ['File', 'Edit', 'Print', 'Tools', 'Help'],
    [Language.RU]: ['Файл', 'Изменить', 'Напечатать', 'Инструменты', 'Помощь'],
  },
  [EWindowType.TXT_FILE]: {
    [Language.ENG]: ['File', 'Edit', 'Search', 'Help'],
    [Language.RU]: ['Файл', 'Изменить', 'Поиск', 'Помощь'],
  },
};

export const hasFakeMenu = (type: EWindowType): type is keyof typeof FAKE_MENU_ITEMS => {
  return type in FAKE_MENU_ITEMS;
};
