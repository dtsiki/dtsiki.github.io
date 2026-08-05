import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ENoteType, Note, NoteType } from 'src/components/common/Note';

export const LinearComplexity = forwardRef<HTMLDivElement>(({}, ref) => {
  const forPrintAllCodeSnippet = `function printAll(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printAll([1, 2, 3]);
// 1
// 2
// 3`;

  const forPrintAllOneElementCodeSnippet = `function printAll(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printAll([1]);
// 1`;

  const sumAndProductCodeSnippet = `function sumAndProduct(array: number[]) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return { sum, product };
}`;

  const sayHelloMultipleTimesCodeSnippet = `function sayHelloMultipleTimes(n) {
  for (let i = 0; i < 100; i++) {
    console.log("Привет!");
  }
}`;

  const loopWithStepCodeSnippet = `function loopWithStep(n) {
  for (let i = 0; i < n; i += 2) {
    console.log(i);
  }
}`;

  const sumArrayRecursiveCodeSnippet = `function sumArrayRecursive(array: number[], index: number = 0) {
  if (index === array.length) return 0;
  return array[index] + sumArrayRecursive(array, index + 1);
}`;

  const copyCodeSnippet = `const copy = [...arr]; // O(n)
const slice = arr.slice(0, n); // O(n)
const concat = arr.concat([1, 2, 3]); // O(n + m)`;

  return (
    <section ref={ref}>
      <h2>Линейная сложность O(n)</h2>
      <p>
        Здесь время прямо пропорционально количеству данных. Если данных в 10 раз больше, то и времени нужно в 10 раз
        больше. Если данных станет в 1000 раньше больше, то и времени нужно будет в 1000 раз больше. И так далее и так
        далее и так далее.
      </p>
      <p>
        Самый просто пример алгоритма с такой сложностью — пройтись старым добрым циклом{' '}
        <code className='code'>for</code> по каждому элементу массиву <em>один</em> раз от его начала до самого конца:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={forPrintAllCodeSnippet} name='printAll' />
      <p>
        Три элемента массива — три операции. Если массив станет в 2 раза больше — алгоритм будет работать в 2 раза
        дольше. Всё просто.
      </p>
      <p>
        Методы массивов <code className='code'>forEach</code>, <code className='code'>map</code>,{' '}
        <code className='code'>filter</code>, <code className='code'>find</code> и <code className='code'>reduce</code>{' '}
        тоже содержат скрытый перебор каждого элемента коллекции и будут иметь сложность O(n).
      </p>
      <Note type={ENoteType.SECONDARY}>
        <div className='tags'>
          <div className='tag'>Вопросик</div>
        </div>
        <p>
          <b>Вопрос с подвохом: что будет, если в массиве, по которому проходит цикл, будет всего 1 элемент?</b>
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={forPrintAllOneElementCodeSnippet} name='printAll' />
        <p>
          Если вы ответили O(1) — ответ неверный. Сложность алгоритма все равно останется O(n). Если в массиве будет 1
          элемент, цикл выполнится просто 1 раз.
        </p>
      </Note>
      <p>
        А если будут два <em>последовательных</em> цикла? Например:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={sumAndProductCodeSnippet} name='sumAndProduct' />
      <p>
        Тут два цикла, но они идут последовательно, а не вложенно. Сначала делаем n операций на сложение, потом еще n
        операций на умножение. Итого: n + n = 2n. Вспоминаем из предыдущего раздела, что константы не складываются и
        отбрасываются, поэтому 2n упрощается до O(n). Поэтому здесь сложность будет тоже O(n).
      </p>
      <p>А что, если у цикла будет постоянное количество итераций? Например:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={sayHelloMultipleTimesCodeSnippet} name='sayHelloMultipleTimes' />
      <p>
        Цикл всегда выполняется 100 раз, независимо от входного параметра n. Количество операций постоянно и не растет с
        ростом n. Поэтому сложность тут константная О(1), а не О(n), хоть здесь и цикл. Это то исключение, когда имеем
        цикл и все показания для сложности О(n), но сложность на самом деле константная. Так что не забываем, что если
        видим цикл, это не означает, что сложность у алгоритма обязательно будет О(n).
      </p>
      <p>Ладно, а если у цикла будет шаг? Например вот такой:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={loopWithStepCodeSnippet} name='loopWithStep' />
      <p>
        Сложность здесь будет всё ещё O(n). Да, цикл увеличивает шаг на 2, но это все равно линейная зависимость.
        Количество итераций примерно n/2. С константами мы что делаем? Правильно — отбрасываем, даже если константы 1/2,
        поэтому остается O(n).
      </p>
      <p>Не циклом едины. Сложность О(n) имеют помимо циклов рекурсивные алгоритмы.</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={sumArrayRecursiveCodeSnippet} name='sumArrayRecursive' />
      <p>Каждый вызов обрабатывает один элемент, глубина рекурсии здесь n, а сложность, соотвественно, будет О(n).</p>
      <p>Копирование данных тоже будет иметь сложность О(n):</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={copyCodeSnippet} name='printAll' />

      <p>Резюмируем, как узнать сложность О(n) в коде:</p>
      <ul className='list markered'>
        <li className='list__item'>один простой цикл, который проходит по списку от начала до конца</li>
        <li className='list__item'>
          методы массивов <code className='code'>forEach</code>, <code className='code'>map</code>,
          <code className='code'>filter</code>, <code className='code'>find</code> и{' '}
          <code className='code'>reduce</code>
        </li>
        <li className='list__item'>нет вложенных циклов</li>
        <li className='list__item'>цикл заглядывает в каждый элемент ровно один раз</li>
        <li className='list__item'>функции с рекурсией</li>
        <li className='list__item'>копирование данных</li>
      </ul>
    </section>
  );
});

LinearComplexity.displayName = 'LinearComplexity';
