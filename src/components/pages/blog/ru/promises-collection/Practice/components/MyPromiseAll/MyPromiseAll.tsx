import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { LONG_DASH } from 'src/constants';
import { allInline, catchInline, myAllInline, raceInline, resolveStaticInline, thenInline } from '../../../utils';
import { undefinedInline } from 'src/components/blog/utils';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const MyPromiseAll = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseAllAllResolvedSnippetCode = `Promise.all([
  Promise.resolve('Первый выполнился'),
  Promise.resolve('Второй выполнился'),
  Promise.resolve('Второй выполнился'),
]).then((result) => console.log(result));`;

  const promiseAllAllResolvedSnippetLog = `['Первый выполнился', 'Второй выполнился', 'Третий выполнился']`;

  const promiseAllAllResolvedWithDelaySnippetCode = `const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
};

Promise.all([
  resolveWithDelay('Первый выполнился', 3000),
  resolveWithDelay('Второй выполнился', 1000),
  resolveWithDelay('Третий выполнился', 2000),
]).then((result) => console.log(result));`;

  const promiseAllAllResolvedWithDelaySnippetLog = `['Первый выполнился', 'Второй выполнился', 'Третий выполнился']`;

  const promiseAllOneRejectedSnippetCode = `const rejectWithDelay = (value, delay) => {
  return new Promise((_, reject) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      reject(value);
    }, delay)
  );
};

const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.all([
  resolveWithDelay('Первый', 3000),
  rejectWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
])
  .then((result) => console.log(\`\${result} выполнился\`))
  .catch((error) => console.error(\`\${error} упал\`));`;

  const promiseAllOneRejectedSnippetLog = `Второй пошёл
Error: Второй упал
Третий пошёл
Первый пошёл`;

  const methodTemplateSnippetCode = `static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`;

  const itemsForEachSnippetCode = `items.forEach((item, index) => {
  // Что-то сделать
});`;

  const itemsForEachPromiseResolveSnippetCode = `items.forEach((item) => {
  const promise = Promise.resolve(item);
});`;

  const thenCatchSyntaxSnippetCode = `items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      // Что-то сделать с ошибкой
    });
});`;

  const rejectPromiseSnippetCode = `items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      reject(error);
    });
});`;

  const nativeAllThenSnippetCode = `Promise.resolve(item).then(
  (value) => {
    // Что-то делается с результатом
  },
  (error) => {
    // Что-то делается с ошибкой
  }
);`;

  const resultsArraySnippetCode = `const results = new Array(items.length);`;

  const resultsArrayPushItemSnippetCode = `.then((value) => {
  results.push(value);
})`;

  const resultsArrayByIndexItemSnippetCode = `.then((value) => {
  results[index] = value;
})`;

  const arrayLengthSnippetCode = `const array = new Array(5);
array[10] = 'Ой';

console.log(array);`;

  const arrayLengthSnippetLog = `Array(11) [ <10 empty slots>, 'Ой' ]`;

  const saveAndCountSnippetCode = `results[index] = value;
completedCount++;`;

  const resolveResultsSnippetCode = ` if (completedCount === items.length) {
  resolve(results);
}`;

  const thenSnippetCode = `.then((value) => {
  results[index] = value;
  completedCount++;

  if (completedCount === items.length) {
    resolve(results);
  }
})`;

  const myPromiseAllSnippetCode = `static all(promises) {
  return new MyPromise((resolve, reject) => {
    if (!promises || typeof promises[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(promises);

    if (items.length === 0) {
      return resolve([]);
    }

    const results = new Array(items.length);
    let completedCount = 0;

    items.forEach((item, index) => {
      MyPromise.resolve(item)
        .then((value) => {
          results[index] = value;
          completedCount++;

          if (completedCount === items.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}`;

  const testAllSuccessSnippetCode = `MyPromise.all([
  MyPromise.resolve('Раз'),
  MyPromise.resolve('Два'),
  MyPromise.resolve('Три')
]).then((result) => console.log(result));`;

  const testAllSuccessSnippetLog = `['Раз', 'Два', 'Три']`;

  const testAllFailureSnippetCode = `Promise.all([
    Promise.resolve('Раз'),
    Promise.reject('Ой-ой, ошибочка'),
    Promise.resolve('Три'),
    Promise.reject('Ой-ой, снова ошибочка')
  ]).catch((error) => console.log(error));`;

  const testAllFailureSnippetLog = `Ой-ой, ошибочка`;

  const testAllWithDelaySnippetCode = `MyPromise.all([
  new MyPromise((resolve) => setTimeout(() => resolve('Раз'), 2000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Два'), 3000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Три'), 1000)),
]).then((result) => console.log(result));`;

  const testAllWithDelaySnippetLog = `['Раз', 'Два', 'Три']`;

  const testAllEdgeCaseEmptyArraySnippetCode = `MyPromise.all([]).then((result) => console.log(result));`;

  const testAllEdgeCaseEmptyArraySnippetLog = `[]`;

  const testAllEdgeCaseStringSnippetCode = `MyPromise.all('Hello').then((result) => console.log(result));`;

  const testAllEdgeCaseStringSnippetLog = `['H', 'e', 'l', 'l', 'o'];`;

  const testAllEdgeCaseNullSnippetCode = `MyPromise.all(null).catch((error) => console.error(error));`;

  const testAllEdgeCaseNullSnippetLog = `TypeError: Argument must be iterable`;

  const testAllEdgeCaseSetSnippetCode = `MyPromise.all(new Set([1, 2, 3, 4 , 5])).then((result) => console.log(result));`;

  const testAllEdgeCaseSetSnippetLog = `[1, 2, 3, 4 , 5]`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {myAllInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Всё или ничего</h4>
      <p>
        {allInline} либо возвращает все результаты, либо отклоняется при первой же ошибке. Именно это и будем
        реализовывать. Разберём несколько примеров.
      </p>
      <p>
        {allInline} ждёт, пока выполнятся все переданные промисы, и возвращает массив их результатов в том же порядке, в
        котором они были переданы:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllAllResolvedSnippetCode}
        consoleLog={promiseAllAllResolvedSnippetLog}
      />
      <p>Порядок результатов сохраняется, даже если промисы завершаются в разное время:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllAllResolvedWithDelaySnippetCode}
        consoleLog={promiseAllAllResolvedWithDelaySnippetLog}
      />
      <p>
        При ошибке остальные промисы не отменяются {LONG_DASH} они продолжают выполняться, но их результат игнорируется:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllOneRejectedSnippetCode}
        consoleLog={promiseAllOneRejectedSnippetLog}
      />
      <p>Пока есть только скелет реализации {myAllInline}:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodTemplateSnippetCode} />
      <p>
        Теперь нужно пройтись по каждому элементу массива <InlineCode>items</InlineCode> и <em>что-то</em> с ним
        сделать:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={itemsForEachSnippetCode} />
      <p>
        Что вообще может лежать в массиве <InlineCode>items</InlineCode>? В нём может оказаться что угодно: промис,
        число, строка, объект, функция, <InlineCode>Set</InlineCode>, вложенный массив, кастомные итерируемые объекты,
        которым вручную добавили метод <InlineCode>Symbol.iterator</InlineCode>. Но всё это разнообразие можно сократить
        до:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p className='list__title'>промис</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>
            <strong>не</strong> промис
          </p>
        </li>
      </ol>
      <p>
        Задача упростилась! Воспользуемся приёмом схлопывания промисов: если передать в {resolveStaticInline} промис,
        метод вернёт тот же самый промис, не создавая новый. Если передать не промис {LONG_DASH} будет создан уже
        выполненный промис с этим значением. Так все элементы в массиве будут сведены к одному типу {LONG_DASH} промису:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={itemsForEachPromiseResolveSnippetCode} />
      <p>
        А с промисом что можно сделать? Вызвать у него методы {thenInline} и {catchInline}:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenCatchSyntaxSnippetCode} />
      <p>
        Такой перебор будем использовать во всех четырёх методах. Отличаться будет только содержимое {thenInline} и{' '}
        {catchInline}.
      </p>
      <p>Осталось понять, что нужно написать внутри этих колбэков здесь.</p>
      <p>
        Начнём с простого {LONG_DASH} {catchInline}. {allInline}) отклоняется, если хотя бы один из промисов отклонён,
        причём отклоняется с причиной первого отклонённого промиса. Поэтому если промис, который мы обрабатываем,
        отклоняется {LONG_DASH} сразу отклоняем и общий промис. Делается это добавление всего одной строки:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={rejectPromiseSnippetCode} />
      <br />
      <Note>
        <div className='tags'>
          <div className='tag PRIMARY'>Обратите внимание</div>
        </div>
        <p>
          В нативном {allInline} использует второй аргумент {thenInline} {LONG_DASH} колбэк{' '}
          <InlineCode>onRejected</InlineCode>, а не {catchInline}:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={nativeAllThenSnippetCode} />
        <p>
          Если использовать {catchInline} после {thenInline}, то он поймает ошибки и из самого промиса, и из{' '}
          {thenInline}-колбэка. Для {allInline} это не нужно {LONG_DASH} нужно поймать только отклонение исходного
          промиса.
        </p>
        <p> Здесь оставим {catchInline} для наглядности: на результат это не влияет, но код читается чуть проще.</p>
      </Note>
      <p>
        Заведём массив для результатов. Его длина должна равняться длине входящего массива {LONG_DASH} так мы сразу
        знаем, куда класть каждый результат:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resultsArraySnippetCode} />
      <p>
        Если сохранять результаты через <InlineCode>push</InlineCode>, они будут добавляться в порядке завершения
        промисов, а не в порядке их передачи. Порядок сломается:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resultsArrayPushItemSnippetCode} />
      <p>А нам важен исходный порядок. Поэтому сохраняем результат по индексу:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resultsArrayByIndexItemSnippetCode} />
      <p>
        Обратите внимание: <InlineCode>index</InlineCode> здесь {LONG_DASH} это позиция элемента во входном массиве.
        Именно по нему мы кладём результат, чтобы сохранить исходный порядок. Получаем этот индекс из{' '}
        <InlineCode>forEach</InlineCode>.
      </p>
      <p>
        Результаты сохраняются, но нужно понять, когда все промисы выполнились. Нельзя просто сравнить длины{' '}
        <InlineCode>results</InlineCode> и<InlineCode>items</InlineCode>: длина <InlineCode>results</InlineCode> равна{' '}
        <InlineCode>items.length</InlineCode> с самого начала {LONG_DASH} мы задали её при создании массива. Длина не
        говорит о том, заполнены ли элементы. А ещё длина массива в JavaScript {LONG_DASH} ненадёжный показатель: если
        записать элемент по индексу больше длины, массив растянется:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={arrayLengthSnippetCode} consoleLog={arrayLengthSnippetLog} />
      <p>
        В этом примере <InlineCode>&lt;10 empty slots&gt;</InlineCode> {LONG_DASH} пустые слоты. Это не{' '}
        {undefinedInline}, а буквально дырки: массив знает свою длину, но элементов по этим индексам нет. Для нашей
        задачи это неважно {LONG_DASH} мы всегда заполняем все индексы. Но знать про эту разницу полезно.
      </p>
      <p>Заведём отдельный счётчик завершённых промисов:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code='let completedCount = 0;' />
      <p>Счётчик будет увеличиваться после каждого сохранения результата:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={saveAndCountSnippetCode} />
      <p>
        Когда счётчик станет равен <InlineCode>items.length</InlineCode>, можно вызывать{' '}
        <InlineCode>resolve(results)</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resolveResultsSnippetCode} />
      <p>Собственно, это всё, что нужно сделать в {thenInline}:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenSnippetCode} />
      <p>
        Вот как выглядит <InlineCode>MyPromise.all()</InlineCode> целиком:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseAllSnippetCode} />
      <p> Теперь протестируем его.</p>
      <h4>Тестируем</h4>
      <p>
        Возьмём примеры из разбора теории, заменив нативные промисы <InlineCode>Promise</InlineCode> на{' '}
        <InlineCode>MyPromise</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={testAllSuccessSnippetCode} />
      <p>В консоли появится:</p>
      <ExampleSnippet code={testAllSuccessSnippetLog} />
      <p>Проверим отклонение:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={testAllFailureSnippetCode} />
      <p>В консоли появится:</p>
      <ExampleSnippet code={testAllFailureSnippetLog} />
      <p>
        Обратите внимание: несмотря на два отклонённых промиса, результатом будет ошибка первого {LONG_DASH} второй
        игнорируется.
      </p>
      <p>Теперь проверим, сохраняется ли порядок результатов, когда промисы завершаются в разное время:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={testAllWithDelaySnippetCode} />
      <p>В консоли появится:</p>
      <ExampleSnippet code={testAllWithDelaySnippetLog} />
      <p>И наконец {LONG_DASH} краевые случаи:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testAllEdgeCaseEmptyArraySnippetCode}
        consoleLog={testAllEdgeCaseEmptyArraySnippetLog}
      />
      <br />
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testAllEdgeCaseNullSnippetCode}
        consoleLog={testAllEdgeCaseNullSnippetLog}
      />
      <br />
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testAllEdgeCaseStringSnippetCode}
        consoleLog={testAllEdgeCaseStringSnippetLog}
      />
      <br />
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testAllEdgeCaseSetSnippetCode}
        consoleLog={testAllEdgeCaseSetSnippetLog}
      />
      <p>
        Переходим к {raceInline}. Если {allInline} ждёт все промисы, то {raceInline} {LONG_DASH} только первый, и это
        сильно упрощает реализацию.
      </p>
    </section>
  );
});

MyPromiseAll.displayName = 'MyPromiseAll';
