import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { myAllInline, myRaceInline, pendingEm, raceInline } from '../../../utils';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const MyPromiseRace = forwardRef<HTMLDivElement>((_, ref) => {
  const raceSuccessSnippetCode = `Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Первый'), 3000)),
  new Promise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Третий'), 1000)),
]).then((result) => console.log(result));`;

  const raceSuccessSnippetLog = 'Третий';

  const raceRejectedSnippetCode = `Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Успешный успех'), 5000)),
  new Promise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
]).catch((error) => console.error(error));`;

  const raceRejectedSnippetLog = 'Ой-ой, ошибочка';

  const raceRejectedOtherResultsSnippetCode = `const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.race([
  resolveWithDelay('Первый', 3000),
  resolveWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
]).then((result) => console.log(\`\${result} победил\`));`;

  const raceRejectedOtherResultsSnippetLog = `Второй пошёл // Через 1 секунду
Второй победил
Третий пошёл // Через 2 секунды
Первый пошёл // Через 3 секунды`;

  const methodTemplateSnippetCode = `static race(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(iterable);
  });
}`;

  const itemsForEachSnippetCode = `items.forEach((item) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      // Что-то сделать с ошибкой
    });
});`;

  const resolveRejectItemSnippetCode = `items.forEach((item) => {
  MyPromise.resolve(item)
    .then((value) => {
      resolve(item);
    })
    .catch((error) => {
      reject(error);
    });
});`;

  const myPromiseRaceSnippetCode = `class MyPromise {
  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      items.forEach((item) => {
        MyPromise.resolve(item)
          .then((value) => resolve(value))
          .catch((error) => reject(error));
      });
    });
  }
}`;

  const myPromiseRaceSuccessSnippetCode = `MyPromise.race([
  new MyPromise((resolve) => setTimeout(() => resolve('Первый'), 3000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Третий'), 1000)),
]).then((result) => console.log(result));`;

  const myPromiseRaceRejectedSnippetCode = `MyPromise.race([
  new MyPromise((resolve) => setTimeout(() => resolve('Успешный успех'), 5000)),
  new MyPromise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
]).catch((error) => console.error(error));`;

  const myPromiseEdgeCaseEmptyArraySnippetCode = `const promise = MyPromise.race([]).then(() => console.log('Промис выполнился'));
setTimeout(() => console.log(promise), 5000);`;

  const myPromiseEdgeCaseEmptyArraySnippetLog = `Object { state: 'pending', value: undefined, ... } // Через 5 секунд`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {myRaceInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Кто первый встал, того и тапки</h4>
      <p>
        {raceInline} ждёт <strong>первый завершившийся</strong> промис и возвращает результат его выполнения:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={raceSuccessSnippetCode} consoleLog={raceSuccessSnippetLog} />
      <p>
        Не важно, как завершился этот промис {LONG_DASH} успешно или с отклонением. Главное {LONG_DASH} чтобы он
        завершился раньше остальных. Если первый завершившийся промис был отклонён, результатом будет его ошибка:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={raceRejectedSnippetCode} consoleLog={raceRejectedSnippetLog} />
      <p>Результаты остальных промисов игнорируются:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={raceRejectedOtherResultsSnippetCode}
        consoleLog={raceRejectedOtherResultsSnippetLog}
      />
      <p>Начнём со скелета:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodTemplateSnippetCode} />
      <p>
        <p>
          Здесь используется тот же перебор, что и в {myAllInline} {LONG_DASH} <InlineCode>forEach</InlineCode>.
          Поменяется только содержимое колбэков:
        </p>
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={itemsForEachSnippetCode} />
      <p>
        В отличие от <InlineCode>MyPromise.all()</InlineCode>, здесь не нужен ни массив результатов, ни счётчик{' '}
        {LONG_DASH} только первый завершившийся промис. Индекс нам не понадобится, поэтому его убрали из{' '}
        <InlineCode>forEach</InlineCode>
      </p>
      <p>
        {raceInline} категоричен: как только любой из промисов выполнится {LONG_DASH} успешно или с ошибкой {LONG_DASH}{' '}
        можно сразу вызывать
        <InlineCode>resolve</InlineCode> или <InlineCode>reject</InlineCode> с этим значением:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resolveRejectItemSnippetCode} />
      <p>
        Первый завершившийся промис вызовет либо <InlineCode>resolve</InlineCode>, либо <InlineCode>reject</InlineCode>.
        Остальные вызовы проигнорируются: состояние промиса, который возвращает метод, уже изменилось {LONG_DASH} а
        промис можно перевести из {pendingEm} только один раз.
      </p>
      <p>Всё!</p>
      <p>
        Вот как выглядит <InlineCode>MyPromise.race()</InlineCode> целиком:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseRaceSnippetCode} />
      <h4>Тестируем</h4>
      <p>Запустим пример из теории, но уже с нашим методом:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseRaceSuccessSnippetCode} />
      <p>В консоли появится:</p>
      <ExampleSnippet code={raceSuccessSnippetLog} />
      <p>Теперь проверим случай с ошибкой:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseRaceRejectedSnippetCode} />
      <p>
        Здесь второй промис отклоняется раньше, чем первый успевает выполниться {LONG_DASH} поэтому race отклоняется:
      </p>
      <ExampleSnippet code={raceRejectedSnippetLog} />
      <p>И краевой случай {LONG_DASH} пустой массив:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseEdgeCaseEmptyArraySnippetCode} />
      <p>Промис так и не завершится:</p>
      <ExampleSnippet code={myPromiseEdgeCaseEmptyArraySnippetLog} />
    </section>
  );
});

MyPromiseRace.displayName = 'MyPromiseRace';
