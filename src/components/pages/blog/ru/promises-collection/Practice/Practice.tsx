import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { Note } from 'src/components/common/Note';
import { LONG_DASH } from 'src/constants';
import { allInline, iterableInline, pendingEm } from '../utils';
import { MyPromiseAll, MyPromiseAllSettled, MyPromiseAny, MyPromiseRace } from './components';
import { nullInline, undefinedInline } from 'src/components/blog/utils';

export const Practice = forwardRef<HTMLDivElement>((_, ref) => {
  const methodsClassTemplateExampleCode = `class MyPromise {
  // Здесь вся остальная логика:
  // - конструктор
  // - статические методы resolve и reject
  // - методы then, catch и finally

  static all(iterable) {
    // Реализовать нативный Promise.all()
  }

  static race(iterable) {
    // Реализовать нативный Promise.race()
  }

  static allSettled(iterable) {
    // Реализовать нативный Promise.allSettled()
  }

  static any(iterable) {
    // Реализовать нативный Promise.any()
  }
}`;

  const resultTemplateSyntaxExampleCode = `return new MyPromise((resolve, reject) => {
   // Тут что-то делаем
});`;

  const methodsStep1ExampleCode = `class MyPromise {
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }

  static race(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }

  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }

  static any(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }
}`;

  const isArrayCheckExampleCode = `static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!Array.isArray(iterable) {
      return reject(new TypeError('Argument must be array'));
    }
  });
}`;

  const customPromiseSetStringExampleCode = `const set = new Set([1, 2, 3, 4, 5]);
MyPromise.all(set).then((result) => console.log(result));

const str = "Yay";
MyPromise.all(str).then((result) => console.log(result));`;

  const customPromiseSetStringExampleLog = `Ошибка: Argument must be array
Ошибка: Argument must be array`;

  const nativePromiseSetStringExampleCode = `const set = new Set([1, 2, 3]);
Promise.all(set).then((result) => console.log(result));

const str = "Yay";
Promise.all(str).then((result) => console.log(result));`;

  const nativePromiseSetStringExampleLog = `Array(3) [ 1, 2, 3 ]
Array(3) [ "Y", "a", "y" ]`;

  const typeofSymbolIteratorStep1ExampleCode = `if (typeof iterable[Symbol.iterator] !== 'function') {
  return reject(new TypeError('Argument must be iterable'));
}`;

  const typeofSymbolIteratorStep2ExampleCode = `if (!iterable & typeof iterable[Symbol.iterator] !== 'function') {
  return reject(new TypeError('Argument must be iterable'));
}`;

  const methodsStep2ExampleCode = `class MyPromise {
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }

  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }

  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }

  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }
}`;

  const methodsStep3ExampleCode = `class MyPromise {
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }

  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }

  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }

  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }
}`;

  const allEdgeCaseExampleCode = `Promise.all([]).then((result) => console.log(result));`;

  const allEdgeCaseExampleLog = `[]`;

  const raceEdgeCaseExampleCode = `const promise = Promise.race([])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

console.log(promise);`;

  const raceEdgeCaseExampleLog = `Promise { <state>: "pending" }`;

  const allSettledEdgeCaseExampleCode = `Promise.allSettled([]).then((result) => console.log(result));`;

  const allSettledEdgeCaseExampleLog = `[]`;

  const anyEdgeCaseExampleCode = `Promise.any([])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`;

  const anyEdgeCaseExampleLog = `AggregateError: No Promise in Promise.any was resolved`;

  const emptyArrayEdgeCaseExampleCode = `if (items.length === 0) {
  return resolve([]);
}`;

  const allMethodStep1ExampleCode = `static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`;

  const raceMethodStep1ExampleCode = `static race(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);
  });
}`;

  const allSettledMethodStep1ExampleCode = `static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`;

  const emptyArrayEdgeCaseAggregateErrorExampleCode = `if (items.length === 0) {
  return reject(new AggregateError([], 'All promises were rejected'));
}`;

  const anyMethodStep1ExampleCode = `static any(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`;

  return (
    <section ref={ref} className='section outer'>
      <h2>Практика: пишем свои методы </h2>
      <p>
        Воспользуемся кастомным классом <InlineCode>MyPromise</InlineCode>.
      </p>
      <Note>
        Если не понимаете, что за класс <InlineCode>MyPromise</InlineCode> {LONG_DASH} всё в порядке. Просто загляните в{' '}
        <ExternalLink href='https://dtsiki.github.io/blog/ru/promises' label='статью про промисы' />.
      </Note>
      <p> Добавим к нему 4 статических метода:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodsClassTemplateExampleCode} />
      <section className='section inner'>
        <p>
          Прежде чем переходить к написанию отдельных методов, определим, что их объединяет. Для этого посмотрим, что
          должны принимать и возвращать методы.
        </p>
        <p>Все четыре метода устроены одинаково:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>принимают итерируемый объект {iterableInline}</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              возвращают <strong>новый промис</strong>
            </p>
          </li>
        </ul>
        <p>Вопреки привычному порядку, начнём написание методов не с аргументов, а с возвращаемого значения.</p>
      </section>
      <section className='section inner'>
        <h3>Возвращаемое значение</h3>
        <p>
          Итак, в основе каждого метода лежит создание и возврат нового объекта <InlineCode>Promise</InlineCode>.
          Поэтому реализация каждого из методов будет начинаться со следующей конструкции:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resultTemplateSyntaxExampleCode} />
        <p>Теперь перенесём эту конструкцию в структуру каждого метода:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodsStep1ExampleCode} />
        <p>С возвращаемым значением всё ясно, переходим к входным данным.</p>
      </section>
      <section id='iterable' className='section inner'>
        <h3>Входные данные</h3>
        <p>
          Каждый метод принимает на вход не <em>массив</em>, а итерируемый объект {iterableInline}. Любой массив
          является итерируемым объектом, но не наоборот. Разберёмся, в чём разница.
        </p>
        <p>
          Представим, что мы добавили в каждый метод проверку через <InlineCode>Array.isArray()</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={isArrayCheckExampleCode} />
        <p>Это упрощённый пример {LONG_DASH} просто намеренно отклоняем всё, что не массив.</p>
        <p>
          Тогда <InlineCode>Set</InlineCode> или строка вызовут ошибку:
        </p>
        <CodeSnippet
          lang={ECodeLang.JAVASCRIPT}
          code={customPromiseSetStringExampleCode}
          consoleLog={customPromiseSetStringExampleLog}
        />
        <p>
          Казалось бы, логично. Но нативный {allInline} спокойно принимает и <InlineCode>Set</InlineCode>, и строки{' '}
          {LONG_DASH} хотя они не массивы {LONG_DASH} и успешно выполняется:
        </p>
        <CodeSnippet
          lang={ECodeLang.JAVASCRIPT}
          code={nativePromiseSetStringExampleCode}
          consoleLog={nativePromiseSetStringExampleLog}
        />
        <p>
          Всё дело в том, что <InlineCode>Set</InlineCode>, <InlineCode>Map</InlineCode> и строки {LONG_DASH}{' '}
          итерируемые объекты.
        </p>
        <p>
          Чем итерируемые объекты отличаются от массивов? Массив {LONG_DASH} это конкретный встроенный тип. А
          итерируемый объект {LONG_DASH}
          это любой объект, у которого реализован специальный протокол: есть метод с ключом{' '}
          <InlineCode>Symbol.iterator</InlineCode>, возвращающий итератор {LONG_DASH} объект с методом{' '}
          <InlineCode>next()</InlineCode>. Благодаря этому протоколу к итерируемым объектам применимы:
        </p>
        <ul className='list markered'>
          {[
            <>
              цикл <InlineCode>for...of</InlineCode>
            </>,
            <>
              оператор расширения <InlineCode>...spread</InlineCode>
            </>,
            <>деструктуризация</>,
            <>
              конструкторы вроде <InlineCode>Array.from()</InlineCode>, <InlineCode>new Map()</InlineCode>,{' '}
              <InlineCode>new Set()</InlineCode>
            </>,
          ].map((item) => (
            <li key={item.key} className='list__item'>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <p>
          Значит, <InlineCode>Array.isArray()</InlineCode> здесь не подходит. Зато теперь знаем, что у итерируемых
          объектов есть метод с ключом <InlineCode>Symbol.iterator</InlineCode>. Вот его и надо проверять {LONG_DASH} и
          делать это в самом начале: если передан не итерируемый объект, а проверки нет, дальше по коду что-то
          обязательно сломается.
        </p>
        <p>Добавим такую проверку:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={typeofSymbolIteratorStep1ExampleCode} />
        <p>
          Следует также отсечь {nullInline} и {undefinedInline}: без этого обращение к{' '}
          <InlineCode>iterable[Symbol.iterator]</InlineCode> выбросит ошибку прямо в момент проверки. Добавим
          дополнительную проверку на {nullInline} и {undefinedInline}:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={typeofSymbolIteratorStep2ExampleCode} />
        <p>
          Если условие истинно, значит, у объекта нет итератора {LONG_DASH} передавать его дальше нельзя. Эту проверку
          добавляем внутрь возвращаемого промиса к каждому методу:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodsStep2ExampleCode} />
        <p>
          Помимо проверки итератора {iterableInline}, преобразуем итерируемый объект в массив {LONG_DASH} с ним удобнее
          работать:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code='const items = Array.from(iterable);' />
        <p>Эта строка кода будет одинаковой для каждого метода:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodsStep3ExampleCode} />

        <p>
          {iterableInline} может быть <InlineCode>Set</InlineCode>, <InlineCode>Map</InlineCode> или другим итерируемым
          объектом.
          <InlineCode>Array.from</InlineCode> превращает его в массив, с которым просто работать: обращаться к элементам
          по индексу, вызывать методы перебора вроде <InlineCode>forEach</InlineCode> (спойлеры!).
        </p>
        <p>
          Отдельно стоит рассмотреть случай, когда массив пуст. Для каждого метода он обрабатывается по-разному{' '}
          {LONG_DASH} этому посвящён следующий подраздел.
        </p>
      </section>
      <section className='section inner'>
        <h3>Краевые случаи</h3>
        <h4 className='spacer top small'>Пустой {iterableInline}</h4>
        <p>
          Все четыре метода принимают итерируемый объект и возвращают новый промис, но у каждого из них есть особое
          поведение при передаче пустого итерируемого объекта. Это тот случай, когда методы ведут себя по-разному{' '}
          {LONG_DASH} и именно это различие важно запомнить.
        </p>
        <p>
          <InlineCode>Promise.all([])</InlineCode> выполняется с пустым массивом <InlineCode>[]</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={allEdgeCaseExampleCode} consoleLog={allEdgeCaseExampleLog} />
        <p>
          Это логично: все промисы из пустого набора уже выполнены {LONG_DASH} их просто нет. Добавляем проверку: если
          массив пуст, сразу выполняем промис с пустым массивом:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={emptyArrayEdgeCaseExampleCode} />
        <p>Это условие добавляем после приведения {iterableInline} к массиву:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={allMethodStep1ExampleCode} />
        <p>
          <InlineCode>Promise.race([])</InlineCode> навсегда остаётся в состоянии ожидания {pendingEm}: никогда не
          выполняется и не отклоняется:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={raceEdgeCaseExampleCode} consoleLog={raceEdgeCaseExampleLog} />
        <p>
          Никакого условия здесь в <InlineCode>MyPromise.race()</InlineCode> не добавляем.
        </p>
        <p>
          <InlineCode>Promise.allSettled([])</InlineCode> выполняется с пустым массивом <InlineCode>[]</InlineCode>:
        </p>
        <CodeSnippet
          lang={ECodeLang.JAVASCRIPT}
          code={allSettledEdgeCaseExampleCode}
          consoleLog={allSettledEdgeCaseExampleLog}
        />
        <p>
          Как и в случае с <InlineCode>Promise.all([])</InlineCode>, метод просто сообщает: все промисы завершены, а раз
          их нет {LONG_DASH} завершать нечего. Добавляем такую же проверку как и у{' '}
          <InlineCode>MyPromise.all()</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={allSettledMethodStep1ExampleCode} />

        <p>
          <InlineCode>Promise.any([])</InlineCode> отклоняется с ошибкой <InlineCode>AggregateError</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={anyEdgeCaseExampleCode} consoleLog={anyEdgeCaseExampleLog} />
        <p>
          Логика такая: метод ищет хотя бы один выполненный промис, но в пустом наборе такого нет {LONG_DASH} значит, ни
          один промис не выполнен, и это ошибка.
        </p>
        <p>
          Добавляем в <InlineCode>MyPromise.any()</InlineCode> проверку: если массив пуст, отклоняем промис с{' '}
          <InlineCode>AggregateError</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={emptyArrayEdgeCaseAggregateErrorExampleCode} />
        <p>Это условие добавляется после приведения {iterableInline} к массиву:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={anyMethodStep1ExampleCode} />
        <p>
          С входными и выходными данными разобрались. Теперь приступим к реализации каждого метода {LONG_DASH} начнём с
          {allInline}. На его примере удобно разобрать основные приёмы, которые потом пригодятся и в остальных методах.
        </p>
      </section>
      <MyPromiseAll />
      <MyPromiseRace />
      <MyPromiseAllSettled />
      <MyPromiseAny />
    </section>
  );
});

Practice.displayName = 'Practice';
