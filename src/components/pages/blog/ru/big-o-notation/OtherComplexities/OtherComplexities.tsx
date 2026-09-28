import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ENoteType, Note } from 'src/components/common/Note';

export const OtherComplexities = forwardRef<HTMLDivElement>(({}, ref) => {
  const getPermutationsCodeExample = `function getPermutations(str: string) {
  if (str.length <= 1) {
    return [str];
  }

  const permutations = [];

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      // Получаем оставшуюся часть строки без текущего символа
      const remaining = str.slice(0, i) + str.slice(i + 1);

      // Рекурсивно перебираем перестановки хвоста
      const subPermutations = getPermutations(remaining);
      for (const p of subPermutations) {
          permutations.push(char + p);
      }
  }

  return permutations;
}

console.log(getPermutations("abc")); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]`;

  const fibonacciCodeExample = `function fibonacci(n: number) {
  if (n <= 1) {
      return n;
  }
  // Каждый шаг порождает 2 новых вызова
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55`;

  const isPrimeCodeExample = `function isPrime(n: number) {
  if (n <= 1) return false;

  // Цикл идет только до тех пор, пока i * i <= n (то есть i <= корень из n)
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false; // Нашли делитель, число не простое
  }

  return true;
}

console.log(isPrime(1000003)); // true`;

  return (
    <section ref={ref} className='section outer'>
      <h2>Какие ещё бывают сложности</h2>
      <p>Конечно же, это не все сложности оценки алгоритмов. Здесь быстренько пробежимся по остальным.</p>
      <section className='section inner'>
        <section>
          <h3>Факториальная сложность O(n!)</h3>
          <p>
            Самая медленная сложность, при которой количество операций растет катастрофически быстро из-за того, что
            количество операций будет равно произведению всех чисел от 1 до n т.е. <code>1 ⋅ 2 ⋅ 3 ⋅ ... ⋅ n</code>.
          </p>
          <Note type={ENoteType.SECONDARY}>
            <p>
              Факториал — это произведение всех целых чисел от единицы до заданного числа. Обозначается факториал
              восклицательным знаком <strong>!</strong> после числа. Например, запись 5! читается как «пять факториал».
            </p>
            <p>
              Чтобы найти факториал числа n, нужно умножить друг на друга все натуральные числа от 1 до n включительно.
            </p>
            <p>Например: 5! = 1 ⋅ 2 ⋅ 3 ⋅ 4 ⋅ 5 = 120</p>
          </Note>
          <p>Самый наглядный пример здесь — найти все перестановки букв в строке:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={getPermutationsCodeExample} name='getPermutations' />

          <p>
            Для 3 букв перестановок будет всего 6 т.к. 3! = 6, а вот для 5 букв уже 120 (5! = 120). А дальше ещё больше.
          </p>
        </section>
        <section>
          <h3>Экспоненциальная сложность O(2ⁿ)</h3>
          <p>При такой сложности каждый новый элемент входных данных удваивает количество операций.</p>
          <p>
            Здесь отличным примером послужат числа Фибоначчи — в этом алгоритме каждый шаг порождает 2 новых вызова:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={fibonacciCodeExample} name='fibonacci' />
        </section>
        <p>
          Факториальная и экспоненциальная сложности, как вы могли заметить, обычно реализуются с помощью рекурсии.
          Рекурсия не обязательная форма записи для них, а просто удобная. Из-за того что рекурсивный перебор занимает
          слишком много времени, для решения таких задач на практике используют всё же что-то другое.
        </p>
      </section>
      <section className='section inner'>
        <h3>Линейно-логарифмическая сложность O(n log n)</h3>
        <p>
          Если вы внимательно читали статью, эта сложность уже мелькала выше. Её имеют эффективные алгоритмы сортировки,
          например, быстрая сортировка. Тут не будем их разбирать, изучите сами. Из того как называется и выглядит эта
          сложность можно догадаться, что она чуть медленнее линейной, но намного быстрее квадратичной.
        </p>
      </section>
      <section className='section inner'>
        <h3>Сложность корень из n O(√n)</h3>
        <p>
          Да, и такое тоже бывает. Причём если кажется, что они имеют совсем медленную сложность, то спешу разочаровать.
          Конечно такие алгоритмы медленнее, чем имеющие логарифмическую сложность, но всё ещё намного быстрее тех, у
          которых линейная. Если n = 100, то алгоритм сделает около √100 = 10 операций, если n = 10000, то √10000 = 100.
          Выглядит в целом неплохо.
        </p>
        <p>
          Такие алгоритмы встречаются редко, так сказать совсем нишевые. Самый просто пример алгоритма с такой
          сложностью — проверка числа на простоту:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={isPrimeCodeExample} name='isPrime' />
        <p>Например, для числа 1000003 будет выполнено всего ~1000 итераций т.к. √1000003 = ~1000.</p>
        <Note type={ENoteType.SECONDARY}>
          <p>
            Простое число — это целое число больше единицы, которое делится без остатка только на единицу и на само
            себя.
          </p>
          <p>Например: 2, 3, 5, 7, 11, 13 и 17.</p>
        </Note>
      </section>
    </section>
  );
});

OtherComplexities.displayName = 'OtherComplexities';
