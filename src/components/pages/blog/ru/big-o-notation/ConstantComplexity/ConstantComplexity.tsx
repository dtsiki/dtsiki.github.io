import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';

export const ConstantComplexity = forwardRef<HTMLDivElement>(({}, ref) => {
  const arrayCodeSnippet = `function getFirstElement(array: number[]) {
  return array[0];
}`;

  const sumCodeSnippet = `function sum(a: number, b: number) {
  return a + b;
}`;

  const doStrangeThingsCodeSnippet = `function doStrangeThings(array: number[]) {
  let a = 7;
  let b = 16;
  let sum = a + b;
  let firstElement = array[0];

  return firstElement + sum;
}`;

  const checkFirstCodeSnippet = `function checkFirst(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) return true;
    break;
  }

  return false;
}`;

  const validatePasswordCodeSnippet = `function validatePassword(password: string) {
  if (password.length > 100) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    // Какая-то проверка
  }

  return true;
}`;

  return (
    <section ref={ref}>
      <h2>Константная сложность O(1)</h2>
      <p>
        Алгоритму здесь вообще по барабану на входные данные (окак). Да, мы так долго размусоливали про зависимость от
        входных данных, а тут бац, и оказывается, что можно на них забыть. Да, и такое бывает. Будет тут хоть 1 элемент
        или 100500 миллионов — алгоритм потратит одно и то же время на него. Быстрее O(1) только ничего не делать.
      </p>
      <p>Что же это за алгоритмы такие?</p>
      <p>Например, получение первого элемента массива:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={arrayCodeSnippet} name='getFirstElement' />
      <p>
        Без разницы какого размера будет массив <code className='code'>array</code>: хоть будет состоять из одного
        элемента, хоть из миллиона, всё равно — операция получения элемента по индексу занимает ровно одно действие и
        тратится на это всегда одинаковое количество времени.
      </p>
      <p>Арифметические операции тоже имеют О(1):</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={sumCodeSnippet} name='sum' />
      <p>
        Операция сложения в примере выше выполняется за постоянное время и независимо от значений a и b (конечно если не
        говорим об очень больших числах, выходящих за рамки стандартных типов).
      </p>
      <p>Так, а если будет несколько действий подряд, например сперва сложим что-то, потом получим элемент массива:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={doStrangeThingsCodeSnippet} name='doStrangeThings' />
      <p>
        По логике, каждая строка будет иметь сложность О(1), тогда получается весь алгоритм будет иметь сложность
        О(1)+О(1)+О(1)+О(1)+О(1)=О(5)? Нет, это работает не так. Тут тоже будет сложность O(1) потому что{' '}
        <b>константы не складываются</b>. Даже если внутри 5 операций или 100500, если все они константы, то сложность
        будет О(1).
      </p>
      <p>
        Как же определить сложность О(1) в полевых условиях? Довольно просто — у алгоритма О(1) сложность если у него:
      </p>
      <ul className='list markered'>
        <li className='list__item'>нет циклов</li>
        <li className='list__item'>нет рекурсий</li>
        <li className='list__item'>нет вызовов функций с другой сложностью</li>
      </ul>
      <p>
        Но важно помнить нюанс про циклы: даже если в алгоритме есть цикл, это не означает, что алгоритм не может не
        иметь О(1) сложность. Например:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={checkFirstCodeSnippet} name='checkFirst' />
      <p>
        Здесь хоть и есть цикл, но алгоритм тоже имеет сложность O(1). Алгоритм тут всегда делает ровно одну итерацию
        благодаря <code className='code'>break</code>, а время не зависит от n.
      </p>
      <p>Если цикл ограничен константой, то у алгоритма тоже будет сложность О(1). Например:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={validatePasswordCodeSnippet} name='validatePassword' />
      <p>
        Длина строки тут ограничена 100 символами. Даже если цикл есть, он никогда не пройдёт больше 100 итераций, это
        константа отсюда и О(1).
      </p>
      <p>Двигаемся дальше и усложняем задачу.</p>
    </section>
  );
});

ConstantComplexity.displayName = 'ConstantComplexity';
