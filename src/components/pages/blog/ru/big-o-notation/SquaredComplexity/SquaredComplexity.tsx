import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ENoteType, Note } from 'src/components/common/Note';

export const SquaredComplexity = forwardRef<HTMLDivElement>(({}, ref) => {
  const printAllPairsCodeExample = `function printAllPairs(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

printAllPairs([1, 2, 3]);

// 1, 1
// 1, 2
// 1, 3
// 2, 1
// 2, 2
// 2, 3
// 3, 1
// 3, 2
// 3, 3`;

  const hiddenInnerForCodeExample = `for (let i = 0; i < users.length; i++) {
  if (blackList.includes(users[i].id)) {
    // Какое-то действие
  }
}`;

  const printArraysCodeExample = `function printArrays(array1: number[], array2: number[]) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      console.log(array1[i], array2[j]);
    }
  }
}`;

  return (
    <section ref={ref}>
      <h2>Квадратичная сложность O(n²)</h2>
      <p>
        В прошлой сложности мы проходились по каждому элементу массива <em>один</em> раз и это было не случайностью.
        Теперь пройдёмся по каждому элементу дважды, например, выведем пары — каждый элементы + каждый элемент:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={printAllPairsCodeExample} name='printAllPairs' />
      <p>Что мы здесь имеем и видим:</p>
      <ul className='list markered'>
        <li className='list__item'>вложенные массивы — один в другой</li>
        <li className='list__item'>
          количество элементов массива осталось такое же как в прошлом разделе — 3 элемента
        </li>
        <li className='list__item'>
          по каждому элементу массива прошлись <em>2</em> раза, вместо 1 раза
        </li>
        <li className='list__item'>выводов в консоль стало в 3 раза больше — теперь их 9</li>
      </ul>
      <p>
        Этот алгоритм будет выполняться в 3 раза медленнее похожего алгоритма из прошлого раздела. Почему так? Перед
        вами классический пример с квадратичной сложностью. Здесь сложность растёт как квадрат входных данных, что и
        видно на примере выше невооружённым взглядом. И чаще всего квадратичную сложность как раз имеют алгоритмы из
        двух вложенных циклов (как всегда есть оговорка: не всегда).
      </p>
      <p>А что если у вложенных циклов будут разные размеры? Например:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={printArraysCodeExample} name='printArrays' />
      <p>
        Допустим здесь у первого массива размер n, а у второго m, т.е. размеры массивов разные. Общее количество
        операций будет n * m. Сложность здесь так и записывается — O(n*m), в этот раз ничего не отбрасывается, констант
        тут нет. Это все ещё квадратичная сложность по своей природе, но для двух разных переменных.
      </p>
      <p>
        Мы выяснили, что время работы в квадратичной сложности пропорционально квадрату количества данных. Это на
        практике очень плохая сложность. Точнее ООООООООООООООООООЧЕНЬ ПЛОХАЯ сложность. Если данных в 10 раз больше, то
        времени нужно в будет ~100 раз больше! (10 * 10 = 100). 1.000 (тысяча) элементов — 1.000.000 (миллион) операций.
        100.000 элементов — 10.000.000.000 (10 миллиардов) операций. Это не описать как медленно.
      </p>
      <p>
        Иногда можно создать O(n²) случайно, используя встроенные методы массивов внутри циклов. Например, классическая
        ловушка со скрытым внутренним вторым циклом:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={hiddenInnerForCodeExample} name='' />
      <p>
        Здесь у цикла <code className='code'>for</code> уже сложность O(n), а метод{' '}
        <code className='code'>includes()</code> тоже проходит весь массив и имеет O(n), в итоге и получаем O(n²). Если
        в списке пользователей будет 100 тысяч записей — пиши пропало.
      </p>
      <p>
        Избегать O(n²) как чумы стоит, но не всегда возможно. Если n маленькое (массив из 10 элементов) — O(n²) работает
        быстро, моргнуть не успеешь. Но на большом количестве данных это уже выстрел себе в ногу, на очень большом — в
        обе.
      </p>
      <Note type={ENoteType.SECONDARY}>
        <div className='tags'>
          <div className='tag'>Вопросик</div>
        </div>
        <p>
          <b>Есть ли что-то хуже O(n²)?</b> Конечно же нет предела совершеннству. С лихвой можно сделать и O(n³), и
          O(n⁴), и так далее сложности. Это уже очень и очень плохо. Это настолько медленно, что уже почти нереально для
          больших данных.
        </p>
        <p>
          Степень в сложности O(n<sup>k</sup>) равна количеству вложенных циклов, которые зависят от размера входных
          данных n. Если видите в коде 4 и более вложенных циклов, это почти всегда означает, что:
        </p>
        <ol className='list ordered'>
          <li className='list__item'>нужно срочно искать другой алгоритм</li>
          <li className='list__item'>см. пункт №1</li>
        </ol>
      </Note>
      <p>
        То, что O(n²) это очень плохая сложность мы выяснили. Но есть ли отличная? Да, такая имеется и помогут нам
        логарифмы.
      </p>
    </section>
  );
});

SquaredComplexity.displayName = 'SquaredComplexity';
