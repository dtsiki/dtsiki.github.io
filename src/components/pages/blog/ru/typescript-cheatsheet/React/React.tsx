import { MouseEvent, forwardRef } from 'react';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const React = forwardRef<HTMLDivElement>(({}, ref) => {
  const installCommand = `npm i -D typescript @types/react @types/react-dom`;

  const componentWithInterfaceExampleCode = `interface IButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ label, onClick, disabled = false }: IButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`;

  const typesInterfaceExampleCode = `export interface IButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};`;

  const componentExampleCode = `import { IButtonProps } from './types';

export const Button = ({ label, onClick, disabled = false }: IButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`;

  const childrenTypesExampleCode = `import { ReactNode } from 'react';

export interface IHeaderProps = {
  children: ReactNode;
}`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Кнопка нажата', event.currentTarget);
  };

  const childrenComponentExampleCode = `import { IHeaderProps } from './types';

export const Header = ({ children }: IHeaderProps) => {
  return <header>{children}</header>;
};`;

  const mouseEventExampleCode = `import { MouseEvent } from 'react';

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  console.log('Кнопка нажата', event.currentTarget);
}

const Button = () => {
  return <button onClick={handleClick}>Нажми меня</button>;
};`;

  const inputEventExampleCode = `import { ChangeEvent } from 'react';

const Input = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};`;

  const clickEventHintExampleCode = `<button onClick={(event) => {} />`;

  const clickHandlerHintHintExampleCode = `const handleClick = (event) => {
  console.log(event.currentTarget);
};`;

  const genericsListTypesExampleCode = `import { ReactNode } from 'react';

export interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}`;

  const genericsListComponentExampleCode = `import { IListProps } from './types';

export const List = <T,>({ items, renderItem }: IListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};`;

  const FCTypeExampleCode = `export interface IButtonProps = {
  label: string;
  onClick: () => void;
};`;

  const FCComponentExampleCode = `import { FC } from 'react';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};`;

  const withoutFCTypeExampleCode = `export interface IButtonProps = {
  label: string;
  onClick: () => void;
};`;

  const withoutFCComponentExampleCode = `import { IButtonProps } from './types';

export const Button = ({ label, onClick }:IButtonProps) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};`;

  const genericsHookExampleCode = `import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}`;

  const awesomeComponentPrimitiveStatesExampleCode = `const [label, setLabel] = useState<string>('Hello');
const [num, setNum] = useState<number>(42);
const [isAwesome, setIsAwesome] = useState<boolean>(true)`;

  const awesomeComponentPrimitiveStatesSkippedExampleCode = `const [label, setLabel] = useState('Hello'); // тип string
const [num, setNum] = useState(42); // тип number
const [isAwesome, setIsAwesome] = useState(true); // тип boolean`;

  const genericsUseStateExampleCode = `interface User {
  id: number;
  name: string;
}

const [user, setUser] = useState<User | null>(null);`;

  const emptyArrayUseStateExampleCode = `interface User {
  id: number;
  name: string;
}

const [users, setUsers] = useState<User[]>([]);`;

  const useRefDOMRefExampleCode = `const inputRef = useRef<HTMLInputElement>(null);`;

  const useRefVarRefExampleCode = `const timerId = useRef<number | null>(null);`;

  const customHookExampleCode = `function useCounter(initialValue: number = 0): [number, () => void, () => void] {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return [count, increment, decrement];
}`;

  const customHookReturnObjectExampleCode = `type UseFormReturn<T> = {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

function useForm<T extends Record<string, any>>(initialValues: T): UseFormReturn<T> {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}`;

  const useMemoExampleCode = `const total = useMemo(() => price * quantity, [price, quantity]);`;

  const useCallbackExampleCode = `const toggle = useCallback((id: number) => {
    // ...
}, []);`;

  //export const LanguageContext = createContext<ILanguageContextData | undefined>(undefined);

  const useContextInterfaceExampleCode = `interface ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);`;

  const providerExampleCode = `type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`;

  const useThemeExampleCode = `export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }

  return context;
};`;

  const themeExampleCode = `const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme(); // Типы подхватятся автоматически

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      Сменить тему
    </button>
  );
};`;

  const forwardRefTypesExampleCode = `import { ReactNode } from 'react';

export interface IButtonProps = {
  children: ReactNode;
  onClick: () => void;
};`;

  const forwardRefComponentExampleCode = `import { IButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ onClick, children }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} onClick={onClick}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';`;

  return (
    <section ref={ref}>
      <h2>Типизация React</h2>
      <p>TypeScript поддерживает большинство популярных веб-фреймворков, в том числе и React.</p>
      <p>
        Написание кода на React в связке с TypeScript очень похоже на JavaScript/React код, ключевая разница будет
        заключаться только в том, что нужно будет указывать типы для компонентов, пропсов, стейтов и функций.
      </p>

      <article>
        <h3>Настройка TypeScript</h3>
        <p>
          Чтобы использовать TypeScript в React-проектах достаточно использовать расширение <em>.tsx</em> для файлов
          компонентов и установить типы:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              Для новых проектов лучший способ — инициализировать приложение через поддерживаемые фреймворки (например,
              с помощью Vite или Next.js), выбрав шаблон с TypeScript
            </p>
          </li>
          <li className='list__item'>
            <p>Для ручного подключения установите типы командой:</p>
            <ExampleSnippet code={installCommand} />
          </li>
        </ul>
      </article>
      <article>
        <h3>Типизация пропсов</h3>
        <p>
          Для типизации пропсов используйте ключевое слово <code className='code'>type</code> или{' '}
          <code className='code'>interface</code>. Создайте отдельный тип для пропсов и задайте его для функционального
          компонента:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} code={componentWithInterfaceExampleCode} name='Button' />
        <p>
          Что выбрать: <code className='code'>interface</code> или <code className='code'>type</code>? Для пропсов они
          взаимозаменяемы, но часто выбирают <code className='code'>interface</code>.
        </p>
        <p>
          Можно создать в директории компонента отдельный файл <em>COMPONENT_NAME.types.ts</em> и перенести
          тип/интерфейс для пропса туда — это отличная практика для очистки кода компонентов:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typesInterfaceExampleCode} name='Button.types' />
        <div className='spacer top small'></div>
        <CodeSnippet lang={ECodeLang.REACT} code={componentExampleCode} name='Button' />
      </article>
      <article>
        <h3>Типизация компонентов</h3>
        <p>
          Раньше надо было типизировать компоненты с <em>FC</em> (или <em>FunctionComponent</em>):
        </p>
        <CodeSnippet lang={ECodeLang.REACT} code={FCTypeExampleCode} name='Button.types' />
        <div className='spacer top small'></div>
        <CodeSnippet lang={ECodeLang.REACT} code={FCComponentExampleCode} name='Button' />
        <p className='explanation'>Внимание: это старый подход!</p>
        <p>
          В современном TypeScript это делать не обязательно и часто не рекомендуется — <em>FC</em> автоматически
          добавляет <code className='code'>children: ReactNode</code> в пропсы компонента, а также тип <em>FC</em> не
          принимает дженерики в пропсах. Это может привести к ситуациям, когда компонент, который не должен принимать
          дочерние элементы, всё равно их принимает без ошибок со стороны TypeScript. Поэтому достаточно просто
          протипизировать пропсы без типизации самого компонента:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} code={withoutFCTypeExampleCode} name='Button.types' />
        <div className='spacer top small'></div>
        <CodeSnippet lang={ECodeLang.REACT} code={withoutFCComponentExampleCode} name='Button' />
      </article>
      <article>
        <h3>
          Типизация <code className='code'>children</code>
        </h3>
        <p>
          Если компонент должен оборачивать другие компоненты т.е. принимать <code className='code'>children</code>,
          используйте стандартный тип <strong>ReactNode</strong>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={childrenTypesExampleCode} name='Header.types' />
        <div className='spacer top small'></div>
        <CodeSnippet lang={ECodeLang.REACT} code={childrenComponentExampleCode} name='Header' />
        <p>
          Этот тип настоящая палочка-выручалочка и представляет собой всё, что может быть отрендерено в React: элементы
          React (JSX), строки, числа, массивы, фрагменты, <code className='code'>null</code>,{' '}
          <code className='code'>undefined</code> и логические значения.
        </p>
      </article>
      <article>
        <h3>Типизация событий</h3>
        <p>
          События типизируются встроенными типами из <strong>React</strong>. В зависимости от типа действия (клик, ввод,
          отправка формы) используются специфические типы, такие как <strong>MouseEvent</strong>,{' '}
          <strong>ChangeEvent</strong> или <strong>FormEvent</strong>, соответственно.
        </p>
        <article>
          <h4>
            События мыши
            {getGhostText('Mouse Events')}
          </h4>
          <p>
            Для кликов, наведений и других манипуляций мышью используйте тип <strong>MouseEvent</strong>. В дженерике{' '}
            <code className='code'>
              <AngleBrackets> </AngleBrackets>
            </code>{' '}
            обычно указывается HTML-тег элемента, с которого приходит событие, в данном случае это кнопка поэтому тип
            будет <strong>HTMLButtonElement</strong>:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={mouseEventExampleCode} name='Button' />
        </article>
        <article>
          <h4>
            События ввода
            {getGhostText('Change Events')}
          </h4>
          <p>
            Если нужно обработать изменение в поле ввода, селекторе или чекбоксе, используйте{' '}
            <strong>ChangeEvent</strong>. В качестве дженерика нужно передать элемент формы:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={inputEventExampleCode} name='Input' />
        </article>
        <p>
          Остальные события работают аналогично. Если не понятно, какой тип следует присвоить, то в React с TypeScript
          для определения типа события достаточно: либо воспользоваться подсказкой вашей среды разработки, наведя курсор
          на место, где будет передан аргумент события.
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              Посмотреть на атрибут тега, например, <code className='code'>onClick</code> или{' '}
              <code className='code'>onChange</code>. Начните писать тег, напишите атрибут, наведите на слово{' '}
              <code className='code'>event</code> в IDE и TypeScript покажет, что это{' '}
              <strong>
                MouseEvent<AngleBrackets>HTMLButtonElement</AngleBrackets>
              </strong>
              :
            </p>
            <CodeSnippet lang={ECodeLang.REACT} code={clickEventHintExampleCode} name='Button' />
          </li>
          <li className='list__item'>
            <p>
              Воспользоваться подсказкой вашей среды разработки, наведя курсор на место, где будет передан аргумент
              события. Похоже на предыдущий способ: вынесите функцию, но не пишите тип сразу, наведите на{' '}
              <code className='code'>event</code>, IDE снова подскажет нужный тип:
            </p>
            <CodeSnippet lang={ECodeLang.REACT} code={clickHandlerHintHintExampleCode} name='Button' />
          </li>
        </ul>
        <p>
          В большинстве проектов вам понадобятся лишь несколько основных типов. Главное правило:{' '}
          <strong>ChangeEvent</strong> используется, когда меняется значение (ввод), а <strong>MouseEvent</strong> для
          кликов или перемещений. В качестве дженерика нужно передать тип HTML-элемента.
        </p>
      </article>
      <article>
        <h3>Типизация хуков</h3>
        <p>
          Типизация хуков происходит автоматически, но часто требует явного указания типов при работе с начальными
          состояниями, сложными объектами или массивами.
        </p>
        <article>
          <h4>
            <code className='code'>useState</code>
          </h4>
          <p>Типизация useState обычно выводится автоматически из начального значения. Тип можно указывать:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={awesomeComponentPrimitiveStatesExampleCode} />
          <p>
            А можно и пропустить, как и в случае с переменными (см.{' '}
            <a href='#Type_Annotations' className='link PRIMARY'>
              Аннотация типов
            </a>
            ) — TypeScript сам может автоматически определить тип по начальному значению:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={awesomeComponentPrimitiveStatesSkippedExampleCode} />
          <p>
            Если начальное значение может быть <code className='code'>null</code> или тип неочевиден, используйте
            дженерик в виде{' '}
            <code className='code'>
              useState<AngleBrackets>Type</AngleBrackets>(initialValue)
            </code>{' '}
            c объединением для явного указания:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={genericsUseStateExampleCode} />
          <p>Если начальное состояние это массив объектов, который изначально пуст:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={emptyArrayUseStateExampleCode} />
        </article>
        <article>
          <h4>
            <code className='code'>useRef</code>
          </h4>
          <p>
            Хук <code className='code'>useRef</code> используется как для хранения значений, так и для ссылок на
            DOM-элементы, поэтому есть два способа его типизации, важно передавать точный тип элемента и начальное
            значение в зависимости от варианта использования хука:
          </p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                <code className='code'>useRef</code> хранит ссылку на DOM-элемент:
              </p>
              <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={useRefDOMRefExampleCode} />
            </li>
            <li className='list__item'>
              <p>
                <code className='code'>useRef</code> используется как переменная для сохранения данных:
              </p>
              <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={useRefVarRefExampleCode} />
            </li>
          </ul>
          <p>
            Если нужно пробросить <code className='code'>ref</code> в компонент как пропс, то нужно обернуть дочерний
            компонент в <code className='code'>forwardRef</code> и проставить соответствующие типы:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={forwardRefTypesExampleCode} />
          <div className='spacer top small'></div>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={forwardRefComponentExampleCode} />
        </article>
        <article>
          <h4>Кастомные хуки</h4>
          <p>
            Для создания кастомных хуков применяются те же правила типизации аргументов функций и возвращаемых значений.
            Возвращаемый результат часто типизируется как кортеж:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={customHookExampleCode} />

          <p>
            Если хук возвращает более 2-3 значений, лучше вернуть объект. Это сделает код при деструктуризации
            независимым от порядка следования переменных и самодокументируемым:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={customHookReturnObjectExampleCode} />

          <p>
            {' '}
            Так же можно использовать{' '}
            <a href='#Generics_Custom_Hooks' className='link PRIMARY'>
              дженерики
            </a>{' '}
            для создания хуков.
          </p>
        </article>
        <article>
          <h4>
            <code className='code'>useMemo</code>, <code className='code'>useCallback</code>
          </h4>
          <p>
            TypeScript автоматически определяет возвращаемый тип функции или значения в{' '}
            <code className='code'>useMemo</code>:
          </p>

          <p>
            Основное внимание нужно уделить аргументам функции, передаваемой в <code className='code'>useCallback</code>{' '}
            — их типы лучше прописывать явно, чтобы избежать ошибок типизации при передаче пропсов:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={useCallbackExampleCode} />
          <p>
            Тип возвращемого значения, аналогично как и дл <code className='code'>useMemo</code>, указывать не надо.
          </p>
        </article>
        <article>
          <h4>
            <code className='code'>useContext</code>
          </h4>
          <p>
            Чтобы типизировать хук <code className='code'>useContext</code>, нужно задать интерфейс для данных контекста
            на этапе создания через <code className='code'>createContext</code>:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={useContextInterfaceExampleCode} />
          <p>
            Передаем <code className='code'>null</code> в качестве значения по умолчанию, чтобы избежать ложных
            срабатываний.
          </p>
          <p>
            TypeScript автоматически подхватит указанный тип при вызове <code className='code'>useContext</code>. Для
            избежания проблем с <code className='code'>null</code> рекомендуется создавать кастомный хук-обертку,
            который будет проверять, что компонент находится внутри провайдера:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={useThemeExampleCode} />
          <div className='spacer top small'></div>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={providerExampleCode} />
          <div className='spacer top small'></div>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={themeExampleCode} />
        </article>
      </article>
      <article>
        <h3>Компоненты-дженерики</h3>
        <p>
          С помощью дженериков можно делать универсальные компоненты, которые будут работать с разными типами данных,
          сохраняя при этом строгую типизацию.{' '}
        </p>
        <p>Самый базовый пример такого компонента-дженерика это компонент-список:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={genericsListTypesExampleCode} name='List.types' />
        <div className='spacer top small'></div>
        <CodeSnippet lang={ECodeLang.REACT} code={genericsListComponentExampleCode} name='List' />
      </article>
      <article id='Generics_Custom_Hooks'>
        <h3>Дженерики-хуки</h3>
        <p>
          Дженерики также позволяют создавать переиспользуемые хуки, которые адаптируют свои типы под передаваемые
          данные. Например:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={genericsHookExampleCode} name='useLocalStorage' />
        <p>
          При вызове{' '}
          <code className='code'>
            useLocalStorage<AngleBrackets>string</AngleBrackets>('user', 'dtsiki')
          </code>{' '}
          TypeScript автоматически выведет все типы как <em>string</em>.
        </p>
      </article>
    </section>
  );
});

React.displayName = 'React';
