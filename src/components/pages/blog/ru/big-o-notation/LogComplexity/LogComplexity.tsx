import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { Accordion } from 'src/components/common/Accordion';
import { ECodeLang } from 'src/components/common/Code/Code.types';

export const LogComplexity = forwardRef<HTMLDivElement>(({}, ref) => {
  const binarySearchCodeSnippet = `function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}`;

  return (
    <section ref={ref}>
      <h2>Логарифмическая сложность O(log n)</h2>
      <p>
        Сперва вспомним, что такое логарифм. Логарифм — это просто поиск степени. Это вопрос: «В какую степень надо
        возвести одно число, чтобы вышло другое?». Например, возьмём число 2 и возведём его в степень 3, получится 2³ =
        2 × 2 × 2 = 8. Логарифм — делаем всё наоборот: есть результат log<sub>2</sub>8, т.е. надо найти степень, в
        которую нужно возвести 2, чтобы получилось 8. Ответом тут будет 3.
      </p>
      <p>
        Логарифмы бывают разные: двоичные (в основании 2, как в параграфе выше), десятичные (вместо 2 в основании будет
        10) и ещё всякие разные. В логарифмической оценке сложности алгоритмов используется логарифм по основанию 2 т.е.
        двоичные, но основание 2 обычно не пишут: О(log<sub>2</sub>n) эквивалентно О(log n).
      </p>
      <p>
        Теперь можем перейти к логарифмической сложности. Это прекрасная сложность. Скорость выполнения алгоритма здесь
        почти не зависит от размера входных данных. Даже для ОГРОМНЫХ данных такой алгоритм работает очень быстро.
        Каждый шаг уполовинивает задачу. Только представьте: чтобы найти число среди ТРИЛЛИОНА, хватит всего около 40
        попыток потому что log₂(1.000.000.000.000) ≈ 40. Ну разве это не прекрасно? Весь секрет тут именно в основании
        2. Благодаря ему на каждом шаге алгоритма объём работы уменьшается в два раза.
      </p>
      <p>Бинарный поиск — самый известный алгоритм с O(log n):</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={binarySearchCodeSnippet} name='binarySearch' />
      <Accordion title='Как работает бинарный поиск'>
        <p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>Берём массив и находим на его середину</p>
            </li>
            <li className='list__item'>
              <p>Если искомое число меньше середины — отбрасываем правую половину</p>
            </li>
            <li className='list__item'>
              <p>Если больше — отбрасываем левую половину</p>
            </li>
            <li className='list__item'>
              <p>Повторяем, пока не найдём искомое чисто или не останется элементов</p>
            </li>
          </ol>
        </p>
        <p>
          Важно: работает только для отсортированных массивов. Если массив не отсортирован — нужно его отсортировать.
          Сортировка массива имеет сложность О(n). Помним, что сложности в этом случае складываются: О(n) + O(log n) =
          O(n log n).
        </p>
      </Accordion>
      <p>
        У массива из 16 элементов будет максимум 4 шага потому что 2⁴ = 16. У массив из 1.000.000 элементов будет
        максимум 20 шагов потому что 2²⁰ ≈ 1 000 000.
      </p>
      <p>Как распознать O(log n) в коде:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <code className='code'>while (left &lt;= right)</code> с делением пополам{' '}
          <code className='code'>(mid = Math.floor((left + right) / 2))</code> (как в бинарном поиске)
        </li>
        <li className='list__item'>рекурсия, которая передаёт половинный диапазон</li>
      </ul>
    </section>
  );
});

LogComplexity.displayName = 'LogComplexity';
