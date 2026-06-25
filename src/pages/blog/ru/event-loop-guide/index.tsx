import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import { IItemOfContent } from 'src/interfaces';
import { useRef } from 'react';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { Accordion } from 'src/components/common/Accordion';
import { EventLoopAnimation } from 'src/components/pages/blog/ru/event-loop-guide/EventLoopAnimation';
import { AnimationDemo } from 'src/components/pages/blog/ru/event-loop-guide/EventLoopAnimation/EventLoopAnimation.types';
import { ENoteType } from 'src/components/common/Note/Note.types';
import { InlineHint } from 'src/components/common/InlineHint';

const Post = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const eventLoopAnatomyRef = useRef<HTMLDivElement>(null);
  const algorithmRef = useRef<HTMLDivElement>(null);
  const callStackRef = useRef<HTMLDivElement>(null);
  const tasksQueueRef = useRef<HTMLDivElement>(null);
  const webApiRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const additionalMaterialsRef = useRef<HTMLDivElement>(null);

  const TABLE_OF_CONTENTS_CONFIG: Array<IItemOfContent> = [
    {
      title: 'Введение',
      ref: introRef,
    },
    {
      title: 'Из чего состоит Event Loop',
      ref: eventLoopAnatomyRef,
    },
    {
      title: 'Принцип работы Event Loop',
      ref: algorithmRef,
    },
    {
      title: 'Call Stack',
      ref: callStackRef,
    },
    {
      title: 'Macrotask Queue, Microtask Queue',
      ref: tasksQueueRef,
    },
    {
      title: 'Web API',
      ref: webApiRef,
    },
    {
      title: 'Как перестать бояться Event Loop',
      ref: summaryRef,
    },
    {
      title: 'Что дальше?',
      ref: additionalMaterialsRef,
    },
  ];

  const syncCoffeeExample = `boilWater();      // 5 минут стоим и ждём чайник, программа дальше не идёт
washDishes();     // 1 минута
takeCup();        // 30 секунд
getMilk();        // 30 секунд
steamMilk();      // 1 минута
getCoffee();      // 1 минута`;

  const asyncCoffeeExample = `boilWaterAsync(() => {
  // Этот колбэк выполнится только когда чайник закипит
  getCoffee();
});

// А эти действия не ждут закипания:
washDishes();
takeCup();
getMilk();
steamMilk();`;

  const callStackExampleCode = `function doSomething() {
  console.log('Сделать то');
  doSomethingElse();
}

function doSomethingElse() {
  console.log('Сделать сё');
}

doSomething();`;

  const callStackExampleLog = `Сделать то
Сделать cё`;

  const whileTrueExampleCode = `while (true) {
  console.log('Асталависта, бейби!');
}`;

  const infiniteRecursionExampleCode = `function infiniteRecursion() {
  infiniteRecursion();
}

infiniteRecursion(); // RangeError: Maximum call stack size exceeded`;

  const simplePromiseExampleCode = `console.log("Начало");

Promise.resolve().then(() => {
  console.log("Промис выполнился");
});

console.log("Конец");`;

  const simplePromiseExampleLog = `Начало
Конец
Промис выполнился`;

  const simpleTimeoutExampleCode = `console.log("Раз");

setTimeout(() => {
  console.log("Два");
}, 5000);

console.log("Три");`;

  const simpleTimeoutExampleLog = `Раз
Три
Два`;

  const zeroDelayTimeoutExampleCode = `console.log("Раз");

setTimeout(() => {
  console.log("Два");
}, 0);

console.log("Три");`;

  const zeroDelayTimeoutExampleLog = `Раз
Три
Два`;

  const promiseAndTimeoutExampleCode = `console.log("Начало");

setTimeout(() => {
  console.log("Колбэк таймаута");
}, 0);

Promise.resolve()
  .then(function () {
    console.log('Колбэк раз');
  })
  .then(function () {
    console.log('Колбэк два');
  });

console.log("Конец");`;

  const promiseAndTimeoutExampleLog = `Начало
Конец
Колбэк раз
Колбэк два
Колбэк таймаута`;

  const queueMicrotaskExampleCode = `queueMicrotask(() => {
  console.log('Хоба, я выполнюсь асинхронно');
})`;

  const promiseWithDelayExampleCode = `new Promise((resolve) => {
  setTimeout(() => resolve(), 100000);
}).then(() => {
  console.log("Промис выполнился");
});`;

  const promiseRejectedExampleCode = `new Promise((resolve, reject) => {
  setTimeout(() => reject('Ошибка'), 100000);
}).catch((error) => {
  console.log('Поймали:', error);
});`;

  const eventListenerClickExampleCode = `console.log('Начало');

document.getElementById('button').addEventListener('click', () => {
  console.log('Кнопка нажата');
});

console.log('Конец');`;

  const eventListenerClickExampleMarkup = `<div id="button">Нажми на меня</div>`;

  const eventListenerClickExampleLog = `Начало
Конец
Кнопка нажата`;

  const macroCreateMicroExampleCode = `setTimeout(() => {
  console.log('Начало макрозадачи');

  Promise.resolve().then(() => {
      console.log('Промис выполнился (микрозадача внутри макрозадачи)');
  });

  console.log('Конец макрозадачи');
}, 0);

console.log('Просто вывод');

Promise.resolve().then(() => console.log('Промис выполнился (микрозадача снаружи)'));`;

  const macroCreateMicroExampleLog = `Просто вывод
Промис выполнился (микрозадача снаружи)
Начало макрозадачи
Конец макрозадачи
Промис выполнился (микрозадача внутри макрозадачи)`;

  const microCreateMacroExampleCode = `Promise.resolve().then(() => {
  console.log('Начало микрозадачи');

  setTimeout(() => {
    console.log('setTimeout внутри промиса (макрозадача)');
  }, 0);

  console.log('Конец микрозадачи');
});

console.log('Просто вывод');`;

  const microCreateMacroExampleLog = `Просто вывод
Начало микрозадачи
Конец микрозадачи
setTimeout внутри промиса (макрозадача)`;

  const fetchExampleCode = `console.log('Начало');

fetch('https://www.google.com').then(() => console.log('Запрос выполнился'));

console.log('Конец');`;

  const fetchExampleLog = `Начало
Конец
Запрос выполнился`;

  const infiniteMicrotaskLoopExampleCode = `let counter = 0;

function infiniteMicrotaskLoop() {
  // Добавляем микрозадачу, которая добавляет новую микрозадачу
  Promise.resolve().then(() => {
    counter++;
    // Обновляем текст на странице (но это никогда не отрендерится)
    document.getElementById('counter').textContent = counter;

    // Рекурсивно добавляем следующую микрозадачу
    infiniteMicrotaskLoop();
  });
}

infiniteMicrotaskLoop();`;

  const safeMicrotaskLoopExampleCode = `function safeLoop() {
  if (!isRunning) return;

  // Работаем в синхронном коде
  counter++;
  document.getElementById('counter').textContent = counter;

  // Разрываем цепочку через макрозадачу
  setTimeout(safeLoop, 0);
}`;

  const safeAnimationLoop = `function animationLoop() {
  if (!isRunning) return;

  counter++;
  document.getElementById('counter').textContent = counter;

  // Следующий кадр анимации (до рендеринга)
  requestAnimationFrame(animationLoop);
}`;

  const promiseRaceExampleCode = `console.log('Делаем ставки');

Promise.race([
    fetch('https://www.google.com').then(() => console.log('Гугл ответил')),
    fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
  ])
  .then(() => {
    console.log('Гонка завершена');
  });

console.log('Ставки сделаны');`;

  const promiseRaceExampleLog = `Делаем ставки
Ставки сделаны
Яндекс ответил
Гонка завершена
Гугл ответил`;

  const promiseAllExampleCode = `console.log('Делаем ставки');

Promise.all([
    fetch('https://www.google.com').then(() => console.log('Гугл ответил')),
    fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
  ])
  .then(() => {
    console.log('Гонка завершена');
  });

console.log('Ставки сделаны');`;

  const promiseAllExampleLog = `Делаем ставки
Ставки сделаны
Яндекс ответил
Гугл ответил
Гонка завершена`;

  const promiseAllCatchErrorExampleCode = `console.log('Делаем ставки');

Promise.all([
  fetch('https://www.google.google').then(() => console.log('Гугл ответил')),
  fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
])
  .then(() => {
    console.log('Гонка завершена');
  })
  .catch((error) => {
    console.log('Авария на гонке:', error);
  });

console.log('Ставки сделаны');`;

  const promiseAllCatchErrorExampleLog = `Делаем ставки
Ставки сделаны
Яндекс ответил
Авария на гонке: TypeError: NetworkError when attempting to fetch resource.
Яндекс ответил`;

  const promiseLoopExampleCode = `Promise.resolve().then(function loop() {
  Promise.resolve().then(loop);
});`;

  const test_ = async () => {
    console.log('Делаем ставки');

    Promise.all([
      fetch('https://www.google.google').then(() => console.log('Гугл ответил')),
      fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
    ])
      .then(() => {
        console.log('Гонка завершена');
      })
      .catch((error) => {
        console.log('Авария на гонке:', error);
      });

    console.log('Ставки сделаны');
  };

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.EVENT_LOOP_GUIDE]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.MEMPHIS,
      }}>
      <TableOfContents
        items={TABLE_OF_CONTENTS_CONFIG}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.EVENT_LOOP_GUIDE].language}
      />
      <section ref={introRef}>
        <h2>Введение</h2>
        <p className='spacer bottom large'>
          Прежде, чем перейдём к Event Loop, стоит уделить внимание двум парам понятий в программировании.{' '}
          <a href='#js' className='link'>
            <strong>TL;DR</strong>
          </a>
          .
        </p>
        <article>
          <h3>Синхронность и асинхронность</h3>
          <p>— это про то, как в языке выполняются операции в коде:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <h4 className='list__title spacer bottom small'>синхронно:</h4>
              <ol className='list ordered nested'>
                <li className='list__item'>Операции выполняются последовательно и строго по очереди</li>
                <li className='list__item'>Каждая новая операция ждет завершения предыдущей</li>
                <li className='list__item'>
                  Если одна из операций зависнет или потребует больше времени, вся программа зависнет и будет ждать её
                  выполнения
                </li>
              </ol>
              <p className='list__footer'>
                Пример из жизни: вы захотели выпить кофе. Идёте на кухню, включаете чайник и стоите перед ним, не
                двигаясь, пока вода не закипит. Ничего другого вы не делаете — просто ждёте. Проходит 3 минуты. Чайник
                закипает. Теперь вы идёте к шкафу, берёте кружку и обнаруживаете, что она грязная. Приходится мыть
                посуду. Затем достаёте молоко, греете его в капучинаторе, завариваете кофе и наконец пьёте. Весь процесс
                занимает ±10 минут. Из них целых 5 минут вы просто стоите, ничего не делаете и смотрите на чайник.
              </p>
              <p className='list__footer'>В коде это можно оформить так:</p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={syncCoffeeExample} hideLines={true} name='snippet(1)' />
            </li>
            <li className='list__item'>
              <h4 className='list__title spacer bottom small'>асинхронно:</h4>
              <ol className='list ordered nested'>
                <li className='list__item'>Выполняется не в строгой последовательности</li>
                <li className='list__item'>
                  Результат выполнения может быть доступен не сразу, а через некоторое время
                </li>
                <li className='list__item'>
                  Если одна из операций зависнет или потребует больше времени, вся программа не зависнет и не будет
                  ждать её выполнения, а просто пойдёт дальше
                </li>
              </ol>
              <p className='list__footer'>
                Пример из жизни: вернёмся к кофе из примера выше. Идёте на кухню, включаете чайник и не ждёте. Пока вода
                греется, вы идёте мыть кружку. Помыли. Достаёте молоко из холодильника и ставите его рядом. Чайник всё
                ещё греется. Вы успеваете даже подготовить капучинатор. Наконец, чайник закипает — вы слышите свист (это
                как «callback» от чайника). Вы завариваете кофе, греете молоко и пьёте. Всё то же самое количество дел,
                но вы ни секунды не стояли без дела. Чайник кипятился параллельно с вашими действиями.
              </p>
              <p className='list__footer'>В коде это можно оформить так:</p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={asyncCoffeeExample} hideLines={true} name='snippet(2)' />
            </li>
          </ul>
        </article>
        <article>
          <h3>Однопоточность и многопоточность</h3>
          <p>— это про то, сколько дел может выполняться физически одновременно: </p>
          <ul className='list markered'>
            <li className='list__item'>
              <h4 className='list__title spacer bottom small'>однопоточность:</h4>
              <ol className='list ordered nested'>
                <li className='list__item'>
                  Вся программа имеет только один поток выполнения, поэтому в один момент времени может выполняется
                  только что-то одно
                </li>
                <li className='list__item'>
                  Чтобы сделать несколько дел одновременно, нужно использовать асинхронность: начать операцию, а когда
                  она завершится — получить уведомление. Но в сам момент выполнения всё равно занят только один поток.
                </li>
              </ol>
              <p className='list__footer'>
                Пример из жизни: один повар в ресторане. Приходит заказ: приготовить три блюда. Он готовит первое блюдо
                от начала до конца, потом второе, потом третье. Клиенты ждут, пока повар приготовит каждое блюдом по
                очереди, потому что повар не может одновременно жарить картошку и нарезать салат — руки-то одни.
              </p>
            </li>
            <li className='list__item'>
              <h4 className='list__title spacer bottom small'>многопоточность:</h4>
              <ol className='list ordered nested'>
                <li className='list__item'>
                  Может быть несколько потоков, которые выполняются параллельно — на разных ядрах процессора или в
                  вытесняющем режиме
                </li>
                <li className='list__item'>Эти несколько потоков могут работать одновременно и не ждать друг друга</li>
              </ol>
              <p className='list__footer'>
                Пример из жизни: вернёмся к повару из примера выше, но тут у него будут помощник повара и стажёр. Пока
                повар готовит одно блюдо, помощник повара занимается вторым, а стажёр третьим. Всё это происходит
                одновременно, потому что три человека работают независимо. Блюда будут готовы раньше, чем если бы их
                готовил только один повар.
              </p>
            </li>
          </ul>
        </article>
        <article>
          <p>Эти две пары понятий часто путают потому что:</p>
          <ol className='list markered'>
            <li className='list__item'>Асинхронный код часто реализуется в однопоточной среде</li>
            <li className='list__item'>Многопоточный код часто бывает синхронным, но может быть и асинхронным </li>
          </ol>
          <p className='spacer top large'>К какому виду относится JavaScript?</p>
          <p id='js'>По умолчанию JavaScript является синхронным и однопоточным языком.</p>
          <p className='spacer bottom medium'>
            Но как так? Ведь мы нажимаем на кнопки, при этом страницы не зависают, анимации продолжаются, а через
            секунду появляются результат запросов. И в JavaScript же есть асинхронные операции. Всё дело в Event Loop.
          </p>
          <Note>
            <p>
              <strong>Event Loop</strong> или <strong>событийный цикл</strong> — это механизм, который
              организует асинхронность в однопоточной среде. Он не делает код многопоточным. Он просто позволяет,
              во-первых, не блокировать поток на долгих операциях, а во-вторых переключаться между задачами.
            </p>
          </Note>
          <p className='spacer bottom top medium'>
            Сам по себе событийный цикл невозможен на движке только самого JavaScript. Браузеры, которые являются
            средами выполнения для JavaScript, предоставляют Web API для создания новых потоков для выполнения
            JavaScript. Таким образом браузеры дают JavaScript суперспособность: они выносят долгие операции за пределы
            основного и единственного потока. А как — разберём ниже.
          </p>
        </article>
      </section>
      <section ref={eventLoopAnatomyRef}>
        <h2>Из чего состоит Event Loop</h2>
        <p>Event Loop в JavaScript состоит из:</p>
        <ol className='list markered'>
          <li className='list__item'>
            <p>
              <strong>Call Stack</strong>: стек вызовов
            </p>
          </li>
          <li className='list__item'>
            <p>
              <strong>Task Queue/Macrotask Queue</strong>: очередь задач/макрозадач
            </p>
          </li>
          <li className='list__item'>
            <p>
              <strong>Microtask Queue</strong>: очередь микрозадач
            </p>
          </li>
          <li className='list__item'>
            <p>
              <strong>Web API</strong>: браузерное окружение
            </p>
          </li>
        </ol>
        <p className='spacer bottom medium'>
          Изначально в модели событийного цикла была только одна очередь задач — Task Queue, куда складывались абсолютно
          все задачи. Но, с выходом ES6 и появления промисов, была добавлена ещё одна очередь — Microtask Queue, которая
          нужна, чтобы выполнять короткие, приоритетные задачи сразу после текущего кода, не дожидаясь следующего цикла.
          Не пугайтесь, что в каких-то моделях может попадаться только одна очередь задач (Task Queue), а в каких-то две
          — это не является ошибкой.
        </p>
        <Note type={ENoteType.SECONDARY}>
          <p>
            <b>Для самых дотошных:</b> термин «макрозадача» — это народное название, которое прижилось в сообществе, но
            его нет в официальной спецификации ECMAScript.
          </p>
          <p>
            В целом, про Event Loop ничего нет в спецификации JavaScript. Но есть в{' '}
            <ExternalLink
              label='спецификации HTML'
              href='https://html.spec.whatwg.org/multipage/webappapis.html#event-loops'
            />
            , где и описан Event Loop. Там и используется термин «task queue» (очередь задач). В этой спецификации
            задачи делятся на несколько типов:
          </p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>Tasks — это то, что мы и называем макрозадачами</p>
            </li>
            <li className='list__item'>
              <p>Microtasks — микрозадачи</p>
            </li>
            <li className='list__item'>
              <p>Animation callbacks — задачи рендеринга</p>
            </li>
          </ul>
          <p>
            Как видно, термин «macrotask» в спецификации не используется. Это придумали разработчики, чтобы отличать их
            от микрозадач. На практике это не меняет ровно ничего.
          </p>
        </Note>
        <Note type={ENoteType.SECONDARY}>
          <p>
            <b>Для ещё более дотошных:</b> в спецификации HTML также говорится, что «task queues are sets, not queues» —
            то есть очереди задач — это не совсем очереди в классическом понимании FIFO. На самом деле это наборы задач,
            и браузер может выбирать из них задачу с учётом приоритетов, а не строго по порядку поступления. На практике
            это тоже ничего не меняет.
          </p>
        </Note>
      </section>
      <section ref={algorithmRef}>
        <h2>Принцип работы Event Loop</h2>
        <p>Event Loop работает очень просто, весь алгоритм можно уместить в 4 шага:</p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p>
              Выполняется <em>ВСЁ</em>, что есть в <strong>стеке вызовов</strong> и до тех пор пока он не опустеет
            </p>
            <p className='list__footer'>
              Сюда попадает весь синхронный код при загрузке страницы. После того как синхронный код закончился, он
              больше не появляется в стеке вызовов в том же виде — до перезагрузки страницы. После этого новые задачи
              приходят из очередей: макро- и микро-.
            </p>
            <p className='list__footer'>
              Если бы шаг 1 повторялся постоянно, то браузер бы бесконечно перевыполнял один и тот же код, а макрозадачи
              и микрозадачи никогда бы не обрабатывались.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Когда стек вызовов станет пустым — выполняются <em>ВСЕ</em> задачи из <strong>очереди микрозадач</strong>
            </p>
            <p className='list__footer'>
              Микрозадачи выполняются все подряд, потому что они предназначены для «срочных» операций, которые должны
              обрабатываться как можно быстрее и без задержек между ними.
            </p>
            <p className='list__footer'>
              Если бы микрозадачи выполнялись по одной с перерывами на рендеринг, это создало бы задержки между
              связанными операциями. Например, представим есть цепочка промисов, где каждый вызов создаёт микрозадачу.
              Если бы эти микрозадачи выполнялись по одной как макрозадачи, а затем после каждой выполнялся бы рендеринг
              или макрозадача, то порядок бы нарушился. Поэтому их выполняют пачкой — всю очередь микрозадач за раз.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Затем берётся только <em>ОДНУ</em> задача из <strong>очереди макрозадач</strong> и выполняется
            </p>
            <p className='list__footer'>
              Сразу после того, как будут выполнены все микрозадачи, но до того, как будет взята следующая макрозадача
              происходит рендеринг. Браузер использует это окно, чтобы обновить экран, отрисовать анимации и применить
              изменения в DOM. Если в очереди микро- или макрозадач слишком много, рендеринг может задерживаться —
              интерфейс будет тормозить, потому что браузеру просто некогда обновлять экран.
            </p>
            <p className='list__footer'>
              Макрозадачи — это более крупные операции и могут занимать больше времени и ресурсов. Если выполнять их все
              подряд, браузер не сможет обновлять экран и реагировать на пользователя. Поэтому выполняется только одна
              макрозадача за раз, а рендеринг происходит до взятия очередной макрозадачи в работу.
            </p>
            <p className='list__footer'>
              Если стек вызовов опустел, а микрозадач тоже нет, то последовательно могут выполняться все макрозадачи.
            </p>
          </li>
          <li className='list__item'>
            <p>Повторять шаги 2-3</p>
            <p className='list__footer'>
              Цикл повторяется, начиная с шага 2: сначала все микрозадачи, потом одна макрозадача — и так до
              бесконечности. В стек вызовов операции теперь попадают только из очередей микро- и макрозадач.
            </p>
          </li>
        </ol>
        <p className='spacer bottom large'>Далее подробно разберём как работает событийный цикл в JavaScript.</p>
      </section>
      <section ref={callStackRef}>
        <h2>Call Stack</h2>
        <p>
          Call Stack или стек вызовов — это место, где выполняется <em>только синхронный код</em>.
        </p>
        <p>Поведение стека вызовов можно описать следующими нехитрыми правилами:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              Когда вызывается любая синхронная операция она попадает в стек вызовов. Когда заканчивает работу —
              удаляется из стека вызовов.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Функции попадают в стек только при вызове. Объявления функций не попадают в стек вызовов. Возврат из
              функции — удаляет её из стека.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Если внутри функции вызывается другая функция — вложенная кладётся в стеке поверх родительской и сразу
              начинает выполняться, а родительская функция ждёт, т.е. её выполнение приостанавливается до возврата из
              вложенной. И так до тех пор, пока стек не опустеет.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Функции попадают в стек вызовов в том порядке, в котором они вызываются, а выполняются и удаляются в
              обратном порядке — с последней вызванной по принципу LIFO т.е. последним пришёл — первым ушел.
            </p>
            <Note type={ENoteType.SECONDARY}>
              <p>
                <b>LIFO (Last In, First Out)</b> — это принцип обработки данных, является основой для работы такой
                структуры структуры данных как стек.
              </p>
              <p>
                Пример из жизни: представьте стопку тарелок. Вы можете положить новую тарелку только сверху и взять
                самую верхнюю тоже первой. В программировании стек вызовов работает так же как стопка тарелок. Основная
                функция программы вызывает другую функцию, та вызывает третью. Выполнение завершается с самой последней
                добавленной функции, после чего программа «возвращается» на шаг назад.
              </p>
            </Note>
          </li>
          <li className='list__item'>
            <p>Пока стек не опустеет, никакие асинхронные задачи из очередей не выполняются.</p>
          </li>
        </ul>

        <article id='call_stack' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Рассмотрим пример с двумя функциями:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={callStackExampleCode} customName='example(1).js' />
          <p className='spacer top medium'>В консоли выведется следующее:</p>
          <ExampleSnippet code={callStackExampleLog} />
          <p className='spacer top medium'>Разберём по шагам что в этот момент происходит в Event Loop:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Строки 1-4 и 6-8 — объявления функций, поэтому они в стек вызовов не попадают. На строке 10 вызывается
                функция, поэтому <code className='code'>doSomething()</code> попадает в стек вызовов. Больше в стек на
                данный момент ничего не поступает, функция <code className='code'>doSomething()</code>
                оказывается на верхушке стека и начинает выполняться.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполняется функция <code className='code'>doSomething()</code>: вызывается{' '}
                <code className='code'>console.log("Сделать то")</code>. <code className='code'>console.log()</code> —
                функция, поэтому она тоже попадает в стек вызовов. В консоли выведется текст «Сделать то», затем{' '}
                <code className='code'>console.log("Сделать то")</code> удалится из стека.
              </p>
              <Note type={ENoteType.SECONDARY}>
                <p>
                  Почему следом в стек не попадает <code className='code'>doSomethingElse()</code>? Потому что стек не
                  планировщик и не умеет смотреть в будущее. Он не видит, что после одной функции есть другие.{' '}
                </p>
                <p>Стек работает синхронно:</p>
                <ol className='list ordered'>
                  <li className='list__item'>
                    <p>Берётся текущая операция</p>
                  </li>
                  <li className='list__item'>
                    <p>Если это вызов функции — функция попадает в стек и выполняется</p>
                  </li>
                  <li className='list__item'>
                    <p>Когда она завершается — стек очищается</p>
                  </li>
                  <li className='list__item'>
                    <p>Интерпретатор переходит к следующей инструкции</p>
                  </li>
                </ol>
                <p>
                  Главное правило: обрабатывается <b>ОДНА</b> операция за раз. Что ждёт дальше — пока что неизвестно,
                  важна только текущая операция.
                </p>
              </Note>
            </li>
            <li className='list__item'>
              <p>
                Далее внутри функции <code className='code'>doSomething()</code> идёт вызов функции{' '}
                <code className='code'>doSomethingElse()</code>. Эта функция тоже отправится в стек вызовов и затем
                начинается выполняться. Вложенная функция содержит только вывод в консоль
                <code className='code'>console.log("Сделать сё")</code>, аналогично своему товарищу из предыдущего шага,
                он тоже попадёт в стек вызовов, выполнится, в консоли выведется текст, а затем{' '}
                <code className='code'>console.log("Сделать сё")</code> удалится из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В стеке вызовов на вершине остаётся функция <code className='code'>doSomethingElse()</code>. В ней все
                операции выполнили, удаляем её из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В стеке вызовов остаётся функция <code className='code'>doSomething()</code>. В ней все операции
                выполнили, удаляем её из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пустой. По алгоритму затем провериться очередь микрозадач — там пусто, и очередь макрозадач
                — там тоже ничего нет. Пока что делать больше нечего.
              </p>
            </li>
          </ol>
          <p>Всё это можно увидеть визуально в демо ниже — просто нажмите кнопку «Пуск» и наблюдайте:</p>
          <EventLoopAnimation demo={AnimationDemo.FUNCTIONS} />
        </article>
        <p className='spacer top large'>Ещё важные нюансы, которые необходимо понимать и помнить про стек вызовов:</p>
        <ol className='list markered'>
          <li className='list__item'>
            <p>
              JavaScript — однопоточный, поэтому стек вызовов один. Пока стек вызовов не опустеет, никакие другие задачи
              не запустятся. Поэтому если вы случайно запустите бесконечный цикл или тяжёлую синхронную операцию,
              событийный цикл просто не сможет брать новые задачи и страница зависнет:
            </p>
            <p>
              Код ниже убьёт Event Loop: стек вызовов никогда не опустеет т.к. будет бесконечно занят одной операцией,
              из-за этого зависнет браузер, кнопки перестанутся нажимаются и так далее. Никакие очереди тут не помогут.
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={whileTrueExampleCode} customName='DO_NOT_DO_THIS(1).js' />

            <li className='list__item'>
              <p>
                Предыдущий пункт можно дополнить тем, что стек не резиновый: имеет ограниченный размер и может
                переполниться. А каждый вызов функции занимает память. И если функций слишком много (например, вы решили
                побаловаться бесконечными рекурсиями), стек переполнится:
              </p>
              <p>
                Код ниже тоже заставит прикурить: функция будет бесконечно вызывать саму себя т.е. в стек будет
                добавляться каждый раз одна и та же функция, рано или поздно, в зависимости от размера вашей памяти,
                стек закончится и всё, бадибум. Так что с этим тоже нужно быть аккуратнее.
              </p>
              <CodeSnippet
                lang={ECodeLang.JAVASCRIPT}
                code={infiniteRecursionExampleCode}
                customName='DO_NOT_DO_THIS(2).js'
              />
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов только для синхронных операций, но колбэки асинхронных операций тоже попадают в стек
                вызовов, но позже, когда Event Loop принесёт их специально из очереди задач: макро или микро. Это
                разберём далее.
              </p>
            </li>
          </li>
        </ol>
      </section>
      <section ref={tasksQueueRef}>
        <h2>Macrotask Queue, Microtask Queue</h2>
        <p>Мы уже знаем, что в событийной модели есть две очереди задач:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <strong>Task/Macrotask Queue</strong>: очередь задач/макрозадач (раньше, до выхода ES6 и появления
              промисов, была только одна очередь задач)
            </p>
          </li>
          <li className='list__item'>
            <p>
              <strong>Microtask Queue</strong>: очередь микрозадач
            </p>
          </li>
        </ul>
        <Note type={ENoteType.SECONDARY}>
          <p>
            Если стек вызовов работает по принципу <b>LIFO</b>, то очереди задач работают строго по принципу{' '}
            <b>FIFO (First In, First Out)</b> — кто первым пришёл, тот первым и ушёл. Пример из жизни: очередь в
            магазине — кто раньше встал к кассе, того раньше обслужили.
          </p>
          <p>
            Почему именно так? Разные принципы — потому что у стека и очереди разное назначение. В стеке важно сохранить
            вложенность, а очереди важно сохранять порядок поступления задач.
          </p>
        </Note>
        <p className='spacer top bottom medium'>
          Из названий очередей можно догадаться, что в очередь макрозадач попадают макрозадачи, а в очередь микрозадач —
          микрозадачи. Так в чём же разница?
        </p>
        <h3>Микрозадачи</h3>
        <p>
          Это маленькие, но высокоприоритетные задачи. Они создаются для выполнения кода, который должен сработать сразу
          после завершения текущего синхронного блока, но до того, как браузер или среда выполнит что-либо другое,
          например, отобразит изменения на экране.
        </p>
        <p>К микрозадачам относятся:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>промисы и всё, что с ними связано:</p>
            <ul className='list markered nested'>
              <li className='list__item'>
                <p>
                  обработчики промисов <code className='code'>.then(...)</code>,{' '}
                  <code className='code'>.catch(...)</code>, <code className='code'>.finally(...)</code>
                </p>
                <Note>
                  <p>
                    В очередь микрозадач попадают только сами колбэки внутри методов
                    <code className='code'>.then(...)</code>, <code className='code'>.catch(...)</code>,{' '}
                    <code className='code'>.finally(...)</code>. Сами эти методы в коде выполняются синхронно, но их
                    переданные функции-аргументы откладываются для асинхронного запуска в очередь микрозадач.
                  </p>
                </Note>
              </li>
              <li className='list__item'>
                <p>
                  <code className='code'>async</code>/<code className='code'>await</code> — это просто синтаксический
                  сахар для существующего API промисов
                </p>
              </li>
              <li className='list__item'>
                <p>
                  функция <code className='code'>fetch()</code> для отправки сетевых запросов — под капотом имеет тот же
                  промис
                </p>
                <Note>
                  <p>
                    <strong>Обратите внимание: </strong>
                    часто можно встретить ошибку, в которой функцию <code className='code'>fetch()</code> относят к
                    макрозадачам . Это никак не может быть правдой из-за промисной природы функции. Скорее всего
                    путаница появилась из-за того, что <code className='code'>fetch()</code> является частью{' '}
                    <ExternalLink
                      label='Web API'
                      href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
                    />
                    , а где Web API, там и макрозадачи. Поэтому относить <code className='code'>fetch()</code> к
                    макрозадачами не просто упрощение, а грубая ошибка потому что:
                  </p>
                  <ul className='list markered'>
                    <li className='list__item'>
                      <p>
                        сама по себе функция <code className='code'>fetch()</code> — это синхронная операция, т.е.
                        попадёт в стек вызовов, но её результатом будет промис
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        сетевой запрос, созданный <code className='code'>fetch()</code>, отправится в Web API (о нём
                        будет ниже), но это не задача в очереди — ни в очереди макрозадач, ни в очереди микрозадач
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        колбэки в <code className='code'>.then(...)</code> и <code className='code'>.catch(...)</code> —
                        это микрозадачи как у любого промиса
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        сами по себе методы <code className='code'>.then(...)</code> и{' '}
                        <code className='code'>.catch(...)</code> же будут выполняться как синхронные операции и попадут
                        в стек вызовов
                      </p>
                    </li>
                  </ul>
                  <p>Как видите, очередь макрозадач, тут не используется.</p>
                </Note>
              </li>
            </ul>{' '}
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>queueMicrotask()</code> — специальная встроенная функция JavaScript, которая
              используется для добавления функции в очередь микрозадач.
            </p>
            <p>
              Например, вывод в консоль — это, вообще-то, синхронная операция, но с помощью функции{' '}
              <code className='code'>queueMicrotask()</code> мы можем лёгким движением руки сделать её асинхронной:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={queueMicrotaskExampleCode} name='snippet(3)' />
            <p>
              Сильно этой функцией злоупотрепблять тоже не надо: есть риск забить очередь микрозадач и тогда ничего
              кроме микрозадач не будет выполняться.
            </p>
          </li>
        </ul>
        <article id='promise' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Рассмотрим пример с самым простым промисом:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={simplePromiseExampleCode} name='example(2)' />
          <p className='spacer top medium'>В консоли выведется следующее:</p>
          <ExampleSnippet code={simplePromiseExampleLog} />
          <p className='spacer top medium'>Алгоритм по шагам будет выглядеть следующим образом:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                В стек вызовов попадает первая строчка синхронного кода{' '}
                <code className='code'>console.log("Начало")</code>, выполняется. В консоли выводится текст «Начало».
                Затем функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Доходим до промиса. <code className='code'>Promise.resolve()</code> — это синхронная операция, промис
                создаётся сразу уже выполненными. Поэтому он попадёт в стек вызовов, выполнится, статус промиса перейдёт
                в успешно выполенно и всё это удалится удалится быстренько из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Следующий метод промиса <code className='code'>.then(...)</code> тоже синхронная операция и попадает в
                стек вызовов, выполняется и удаляется из стека вызовов. Колбэк же внутри метода помещается в очередь
                микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В стек вызовов попадает последняя строчка синхронного кода{' '}
                <code className='code'>console.log("Конец")</code>. В консоли выводится текст «Конец». Затем функция
                удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов становится пустым. Event Loop видит, что стек вызовов пуст и заглядывает в очередь
                микрозадач, чтобы выполнить оттуда <strong>ВСЕ</strong> задачи. Там лежит один единственный колбэк
                промиса.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop забирает колбэк промиса и помещает его в стек вызовов. Вот так асинхронные операции окольным
                путём попадают таки в стек вызовов.
              </p>
            </li>
            <Note>
              <p>
                А если промис ещё не будет выполнен на момент, когда стек вызов будет пустой и Event Loop дойдёт до
                очереди микрозадач? Например:
              </p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseWithDelayExampleCode} name='snippet(4)' />
              <p>
                Здесь колбэк <strong>НЕ</strong> попадёт в очередь микрозадач сразу. Он будет ждать внутри промиса, пока
                не вызовется <code className='code'>resolve()</code>. Только тогда колбэк уйдёт в очередь микрозадач.
              </p>
              <p>
                Если бы промис перешёл в состояние <em>rejected</em>, то в очередь микрозадач попал бы колбэк из{' '}
                <code className='code'>.catch(...)</code> (или второй колбэк из <code className='code'>.then(...)</code>
                , всё зависит от кода). Механизм точно такой же, как с <em>resolve</em>:
              </p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseRejectedExampleCode} name='snippet(5)' />
            </Note>
            <li className='list__item'>
              <p>
                В стеке вызовов что-то появилось, нужно это выполнить. Выполняется колбэк промиса. В консоли появляется
                «Промис выполнился», а колбэк удаляется из стека.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Возвращаемся в очередь микрозадач потому что нужно выполнить оттуда все задачи, там больше ничего нет.
                Event Loop возвращается в стек вызовов, но он тоже пустой. Пока что делать больше нечего.
              </p>
              <Note>
                <p>
                  Если промисов несколько, Event Loop выполнит их все подряд. Если бы в очереди было 1000 промисов — они
                  все выполнились бы строго друг за другом.
                </p>
              </Note>
            </li>
          </ol>
          {/*<EventLoopDemo
            id={nanoid()}
            selectedDemo={EventLoopDemoVariant.MICROTASK_QUEUE_PROMISE}
            fileTitle='promise/microtask-queue-demo.exe'
          />*/}
          <EventLoopAnimation demo={AnimationDemo.SINGLE_PROMISE} />
        </article>
        <p className='spacer bottom large'>
          А если добавить к промисам <code className='code'>setTimeout</code>? Для этого нужно разобраться что же такое{' '}
          <a href='#macrotasks' className='link'>
            макрозадачи
          </a>{' '}
          и{' '}
          <a href='#webapi' className='link'>
            Web API
          </a>
          .
        </p>
        <h3 id='macrotasks'>Макрозадачи</h3>
        <p>Это крупные задачи, из которых в основном и состоит работа веб-приложений: таймеры, события DOM-дерева.</p>
        <p>Конкретизируем что относится к макрозадачам:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              Таймеры: <code className='code'>setTimeout</code>, <code className='code'>setInterval</code>
            </p>
          </li>
          <li className='list__item'>
            <p>
              События DOM:{' '}
              {['scroll', 'click', 'focus', 'mouseup', 'keydown', 'submit'].map((item, index, arr) => (
                <>
                  <code className='code'>{item}</code>
                  {index !== arr.length - 1 && ', '}
                </>
              ))}{' '}
              и т.д. и т.п.
            </p>
          </li>
        </ul>
        <h3 className='spacer top large'>Приоритет выполнения</h3>
        <p>
          Обе очереди имеют разный приоритет выполнения — у очереди <strong>микрозадач</strong> приоритет выше.
        </p>
        <p>
          Почему именно так? Потому что балом правят промисы. Промисы нужны для реакции на результат асинхронной
          операции как можно скорее. Если бы они ждали своей очереди как, например,{' '}
          <code className='code'>setTimeout</code>, то пришлось бы ждать, пока выполнятся все таймеры. А это долго.
          Микрозадачи — это срочное сообщение, которое надо прочитать как можно скорее.
        </p>
        <p>Чтобы рассмотреть примеры с очередью макрозадач, забежим вперёд и рассмотрим что такое Web API подробнее.</p>
      </section>
      <section ref={webApiRef} id='webapi'>
        <h2>Web API</h2>
        <p>
          Web API — это браузерное окружение, которое находится вне движка JavaScript. Web API выполняет{' '}
          <em>асинхронные</em> операции, пока поток JavaScript занимается другими делами. Без Web API Event Loop был бы
          просто циклом, который ничего не умеет ждать.
        </p>
        <p>
          Web API не «склад для колбэков», а диспетчер, который берёт задачу («поставь таймер», «скачай данные», «жди
          клика»), выполняет её на фоне, а когда заканчивает — отправляет колбэк в очередь.
        </p>
        <Note type={ENoteType.SECONDARY}>
          <p>
            Web API работает ни по принципу <b>LIFO</b>, ни по принципу <b>FIFO</b>. Это вообще не очередь, а набор
            независимых таймеров и обработчиков, которые живут своей жизнью.
          </p>
        </Note>
        <p className='spacer top large'>Что попадает в Web API:</p>
        <ul className='list markered'>
          <li className='list__item'>
            Таймеры: <code className='code'>setTimeout</code>, <code className='code'>setInterval</code>
          </li>
          <li className='list__item'>
            <p>
              События DOM:{' '}
              {['scroll', 'click', 'focus', 'mouseup', 'keydown', 'submit'].map((item, index, arr) => (
                <>
                  <code className='code'>{item}</code>
                  {index !== arr.length - 1 && ', '}
                </>
              ))}{' '}
              и т.д. и т.п.
            </p>
          </li>
          <li className='list__item'>
            <p>Сетевые запросы</p>
          </li>
        </ul>
        <p>
          Напоминает список из раздела про макрозадачи, верно? Да, но не совсем. Когда появится убеждение, что
          макрозадачи и Web API связаны, главное вовремя остановить его. <strong>Макрозадачи ≠ Web API</strong>. После
          того, как Web API завершил работу (протикал таймеры, получил ответ на запрос, словил клик по кнопке), он
          отправит в соответствующую очередь колбэки. Этой очередью может быть как очередь макрозадач так и очередь
          микрозадач, в зависимости от операции, которая выполнялась в Web API:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>если в Web API закончил тикать таймер, то колбэк отправится в очередь макрозадач</p>
          </li>
          <li className='list__item'>
            <p>если в Web API был получен ответ на сетевой запрос, то колбэк отправится в очередь микрозадач</p>
          </li>
          <li className='list__item'>
            <p>если Web API словил клик по кнопке, то колбэк отправится в очередь макрозадач</p>
          </li>
        </ul>
        <Note type={ENoteType.SECONDARY}>
          <p>
            Если вы знакомы с JavaScript, вы должны знать, что объект <b>console</b> не является частью самого
            JavaScript, а является{' '}
            <ExternalLink label='частью Web API' href='https://developer.mozilla.org/en-US/docs/Web/API/console' />.
            Почему же тогда вызовы <code className='code'>console.log()</code> попадают в стек вызовов, а не
            отправляются в Web API?
          </p>
          <p>
            Ответ прост: <code className='code'>console.log()</code> — синхронная операция. Она выполняется здесь и
            сейчас, не требует ожидания, не отправляет колбэки в очереди. Вывод в консоль не обращается к сети, не
            ставит таймеры, не ждёт действий пользователя. Консоль браузера готова принять сообщение в ту же секунду.
            Web API нужен именно для ожидания: чтобы не блокировать главный поток на время, пока сервер ответит или
            таймер протикает.
          </p>
        </Note>
        <article id='timeout_5ms' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Рассмотрим следующий пример:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={simpleTimeoutExampleCode} name='example(3)' />
          <p>В консоли выведется следующее:</p>
          <ExampleSnippet code={simpleTimeoutExampleLog} />
          <p>
            Здесь нет ошибки: «Два» выведется позже, чем «Три». Этот пример классическая иллюстрация того, как работает
            асинхронность в JavaScript. Разберём его пример по шагам:
          </p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Первая строчка синхронного кода <code className='code'>console.log("Раз")</code> попадает в стек
                вызовов, выполняется, в консоли выводится «Раз», затем функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Доходим до <code className='code'>setTimeout</code>. Сам по себе вызов этой функции — синхронная
                операция, поэтому <code className='code'>setTimeout</code> появится в стеке вызовов, выполнится и
                удалиться. JavaScript понимает, что нужно отправить таймер в Web API. Там таймер будет тикать независимо
                от основного потока, а JavaScript продолжит дальше идти по коду. Колбэк таймера при этом не выполняется
                сразу же и пока что никуда не попадает, а ждёт завершения таймера.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Идём дальше по коду, доходим до <code className='code'>console.log("Три")</code>, функция попадает в
                стек вызовов и выполняется, в консоли выводится «Три», затем функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В Web API всё это время тикал таймер, не блокируя основной поток. Проходит 5 секунд. Браузер замечает,
                что таймер истёк, и перемещает колбэк таймера в очередь макрозадач.
              </p>
              <Note>
                <p>
                  <strong>Важно:</strong> макрозадача появляется уже после того, как Web API закончил работу. Все
                  макрозадачи это колбэки, которые дождались перемещения в очередь макрозадач, где будут ждать своего
                  звёздного часа — когда Event Loop заберёт их в стек вызовов для выполнения.
                </p>
              </Note>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пуст. По алгоритму нужно проверить очередь микрозадач и выполнить оттуда{' '}
                <strong>ВСЕ</strong> микрозадачи, но там ничего нет. Затем по алгоритму нужно проверить очередь
                макрозадач и взять оттуда на выполнение <strong>ОДНУ</strong> микрозадачу — там лежит колбэк, который
                передавали с<code className='code'>setTimeout</code>. Event Loop берёт его из очереди макрозадач и
                перемещает в стек вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В стеке вызовов появляется колбэк — <code className='code'>console.log('Два')</code>: он выполняется, в
                консоли выводится «Два» и затем удаляется из стека вызовов.
              </p>
            </li>
          </ol>
          <EventLoopAnimation demo={AnimationDemo.SINGLE_TIMEOUT} />
        </article>
        <article id='timeout_0ms' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Что будет если в примере выше поменять задержку таймера с 5000 миллисекунд на 0?</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={zeroDelayTimeoutExampleCode} name='example(4)' />
          <p className='spacer top medium'>
            Предлагаю подумать над ответом, прежде чем читать дальше. Если готовы — раскрывайте правильный ответ ниже.{' '}
          </p>
          <Accordion title='Правильный ответ'>
            <p>В консоли выведется следующее:</p>
            <ExampleSnippet code={zeroDelayTimeoutExampleLog} />
            <p>Будет тот же самый вывод, что и с задержкой 5000 миллисекунд.</p>
            <p>
              Здесь тоже нет ошибки — даже если задержка равна 0 миллисекунд, «Два» всё равно появится после «Три».
              Многие попадают в эту ловушку, считая, что <code className='code'>setTimeout(callback, 0)</code> поможет
              выполнить колбэк «между строчками» синхронного кода. Помните,{' '}
              <strong>0 миллисекунд — это не гарантия немедленного выполнения</strong>. Это просто запись в очередь как
              можно скорее, но всё равно после выполнения всего синхронного кода и микрозадач. Даже с задержкой 0
              миллисекунд порядок вывода не меняется, шаги остаются такими же как и в примере выше.
            </p>
          </Accordion>
        </article>
        <p>Двигаемся дальше.</p>
        <article id='event_listener' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Разберём пример с обработкой клика по кнопке:</p>
          <DoubleCodeSnippet
            lang={[ECodeLang.JAVASCRIPT, ECodeLang.HTML]}
            code={[eventListenerClickExampleCode, eventListenerClickExampleMarkup]}
            name={['example(5)', 'example(5)']}
          />
          <p>В консоли выведется следующее:</p>
          <ExampleSnippet code={eventListenerClickExampleLog} />
          <p>Что будет происходить в Event Loop по шагам:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Первая строчка синхронного кода <code className='code'>console.log("Начало")</code> попадает в стек
                вызовов и выполняется. В консоли появляется «Начало». Затем функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполняется метод <code className='code'>getElementById('button')</code> — это синхронная функция,
                которая выполняется в стеке вызовов: движок доходит до этого метода, обращается к DOM-дереву, мгновенно
                находит элемент и возвращает ссылку на него в стек.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполняется <code className='code'>addEventListener()</code> — регистрация обработчика события{' '}
                <code className='code'>click</code> к найденному элементу на прошлом шаге.{' '}
                <code className='code'>addEventListener()</code> — это синхронный вызов, который тоже попадёт в стек
                вызовов, выполнится и удалится затем из стека вызовов, но он отправит запрос в Web API: слушать клики по
                такой-то кнопке, в случае клика реагировать таким-то колбэком.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В Web API появится слушатель события <code className='code'>click</code>. Он будет фоново ждать, когда
                пользователь сделает нужное действие, в данном случае это клик по кнопке.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполняется последняя строчка синхронного кода, <code className='code'>console.log("Конец")</code>{' '}
                попадает в стек вызовов, в консоли выводится «Конец», функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек пуст, Event Loop бездействует до того момента пока не будет нажата кнопка. Как только это
                произойдёт, колбэк события попадёт в очередь макрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop возвращается в стек вызовов, проверяет очередь микрозадач (там ничего нет), доходит до
                очереди макрозадач, обнаруживает там колбэк события, перемещает его в стек вызовов, где он начинается
                выполняться. В консоли будет выведен текст «Кнопка нажата», затем колбэк будет удалён из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пуст. Проверяем очередь микрозадач — там пусто, очередь макрозадач — тоже пусто. Пока что
                делать больше нечего.
              </p>
            </li>
          </ol>
          <EventLoopAnimation demo={AnimationDemo.CLICK_EVENT_LISTENER} />
        </article>
        <article id='promise_chaining' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>
            Пришло время разобраться и с промисами и с очередью макрозадач. Добавим в пример выше с таймером не просто
            промис, а промис с цепочкой и разберёмся как работают все компоненты Event Loop вместе:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseAndTimeoutExampleCode} name='example(6)' />
          <p>В консоли выведется следующее:</p>
          <ExampleSnippet code={promiseAndTimeoutExampleLog} />
          <p>По шагам что здесь происходит:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Выполнится первая строчка синхронного кода: <code className='code'>console.log("Начало")</code> попадёт
                в стек вызовов, выполнится, в консоли появится «Начало», затем функция удалится из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Далее по коду дойдём до <code className='code'>setTimeout</code>. Без разницы какая будет у него
                задержка — таймер в любом случае отправится тикать в Web API, а колбэк после того как время истечёт
                будет перемещён в очередь макрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Идём дальше по коду и доходим до промиса. Будет создан промис — это синхронная операция и{' '}
                <code className='code'>Promise.resolve(...)</code> появится в стеке вызовов и удалится оттуда. Далее
                доходим до первого <code className='code'>then(...)</code> и колбэк немедленно попадает в очередь
                микрозадач. Следующий колбэк в цепочке промисов попадёт в очередь только после выполнения первого.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Идём дальше по коду, выполнится последняя строчка синхронного кода: стек вызовов берёт{' '}
                <code className='code'>console.log("Конец")</code>, выполняет, в консоли появляется «Конец», затем
                функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пуст. По алгоритму нужно проверить очередь микрозадач т.к. микрозадачи имеют приоритет
                выше. Нам нужно выполнить <strong>всё</strong>, что лежит в этой очереди. Там сейчас лежит <em>ОДИН</em>{' '}
                колбэк промиса. Event Loop берёт его и переносит из очереди микрозадач в стек вызовов и затем сразу же
                выполняет: В консоли выводится «Колбэк раз». Затем колбэк удаляется из стека вызовов. Первый колбэк
                промиса выполнился, поэтому в очередь микрозадач отправляется по цепочке следующий колбэк промиса. Event
                Loop сразу же берёт и переносит его в стек вызовов и выполняет: в консоли выводится «Колбэк два». Затем
                колбэк удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Очередь микрозадач пустая. Дальше по алгоритму проверяем очередь. Пока Event Loop разбирался с цепочкой
                промисов в Web API протикала формально нулевая задержка и затем Web API перенесли в очередь макрозадач
                колбэк таймера. Отправляем его в стек вызовов, выполняем, в консоли выводится «Колбэк таймаута».
              </p>
            </li>
          </ol>
          <EventLoopAnimation demo={AnimationDemo.PROMISE_AND_TIMEOUT} />
          <p>
            Как видно из этого примера, даже с задержкой 0 миллисекунд, <code className='code'>setTimeout</code> никогда
            не обгонит промисы: промисы всегда выполняются раньше макрозадач, потому что Event Loop опустошает очередь с
            ними до того, как берёт первую задачу из очереди макрозадач.
          </p>
        </article>
        <p className='spacer top medium'>
          Отдельно разберём сетевые запросы — метод <code className='code'>fetch()</code>, параллельные запросы и
          обработку ошибок.
        </p>
        <article>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Начнём с простого примера с один запросом:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={fetchExampleCode} name='example(7)' />
          <p className='spacer top medium'>
            Это классический пример смешивания Web API, промисов и микрозадач. В консоли выведется следующее:
          </p>
          <ExampleSnippet code={fetchExampleLog} />
          <p className='spacer top medium'>Пройдёмся вместе с Event Loop по шагам по всему циклу:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Первая строчка синхронного кода <code className='code'>console.log("Начало")</code> попадает в стек
                вызовов и выполняется. В консоли появляется «Начало». Затем функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Функция <code className='code'>fetch()</code> попадает в стек вызовов — сама по себе это просто
                синхронная операция, которая отвечает за создание промиса: функция попала в стек вызовов, выполнилась,
                создала промис, сетевой запрос отправился выполняться в Web API, функция удалилась из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                В Web API вне основого потока выполняется запрос. Основной поток не блокируется, поэтому можно идти
                дальше по коду: далее выполнится последняя строчка синхронного кода, стек вызовов берёт{' '}
                <code className='code'>console.log("Конец")</code>, в консоли появится «Конец», затем функция удалится
                из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                К этому моменту получаем ответ на сетевой запрос. Вызывается метод{' '}
                <code className='code'>then(...)</code> — это тоже просто синхронная операция, поэтому она тоже попадёт
                в стек вызовов, выполнится и удалится. <code className='code'>fetch()</code>, хоть и будет выполняться в
                Web API, возвращает промис, поэтому его колбэки пойдут в очередь микрозадач. Колбэк{' '}
                <code className='code'>console.log('Запрос выполнился')</code> отпрвится в очередь микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек пуст, Event Loop проверяет очередь микрозадач, берёт оттуда колбэк запроса, перемещает в стек
                вызовов, выполняет, в консоли появляется «Запрос выполнился», колбэк удаляется из стека вызовов.
              </p>
            </li>
          </ol>
          <EventLoopAnimation demo={AnimationDemo.FETCH} />
          <p>
            Здесь важно понимать, что Event Loop, как только в очереди микрозадач появится колбэк ответа на запрос, не
            бросит всё, чтобы немедленно пойти выполнять этот колбэк. Например если в этот момент в стеке вызовов
            выполняется много-много операций (или просто одна какая-то очень долгая), стек вызовов выполнит их все (эту
            долгую) и только потом пойдёт проверять очередь микрозадач.
          </p>
        </article>
        <article>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>
            Методы промисов <code className='code'>.race()</code>, <code className='code'>.all()</code>,{' '}
            <code className='code'>.allSettled()</code> и <code className='code'>.any()</code> по-разному собирают
            результаты и по-разному реагируют на завершение промисов. Они сами не создают дополнительных асинхронных
            операций, а только комбинируют уже запущенные промисы.
          </p>
          <p>
            Расмотрим гонку запросов на примере метода <code className='code'>.race()</code>. Этот метод возвращает
            промис с результатом первого завершённого из переданных промисов и неважно, оказался ли он успешным или
            завершился с ошибкой. Остальные же промисы будут продолжаться выполняться в фоне, гонка будет продолжаться,
            но результаты других промисов будут уже проигнорированы.
          </p>
          <p>Итак, дамы и господа, делаем ставки:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseRaceExampleCode} hideLines={true} name='example(8)' />
          <p>Одним из вариантов вывода в консоль здесь может быть:</p>
          <ExampleSnippet code={promiseRaceExampleLog} />
          <p>
            Если Гугл ответит первым, то изменится только одна строчка (№3), но сообщение «Гонка завершена» всё равно
            появится после первого ответа, но до второго.
          </p>
          <p>Пошагово разберём как этот пример пройдёт через Event Loop:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Первая строчка синхронного кода <code className='code'>console.log("Делаем ставки")</code> попадает в
                стек вызовов, выполняется, в консоли появится «Делаем ставки», затем функция удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Доходим до промиса <code className='code'>Promise.race(...)</code>. Сама по себе эта операция синхронная
                и попадёт в стек вызовов: выполнится и удалится из стека вызовов. Создаётся промис, внутри начинается
                перебор массива. Во время этого перебора создадутся два промиса — по количеству запросов, сами запросы
                уйдут выполняться в Web API (см. следующий шаг). Колбэк <code className='code'>Promise.race(...)</code>{' '}
                просто регистрируется и никуда не отправляется. Он попадёт в очередь микрозадач только когда промис{' '}
                <code className='code'>Promise.race(...)</code> зарезолвится т.е. как только первый из переданных
                промисов с <code className='code'>fetch()</code> завершится (любым статусом).
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполнятся два <code className='code'>fetch()</code> в следующей последовательности: сперва в стек
                вызовов попадёт <code className='code'>fetch()</code> -- потому что это синхронная операция, затем в Web
                API появится запрос, <code className='code'>fetch()</code> возвращает промис (пока в состоянии{' '}
                <em>pending</em>), затем <code className='code'>fetch()</code> удалится из стека вызовов. У каждого
                запроса есть свой колбэк. Эти колбэки попадут в очередь микрозадач только когда соответствующий запрос
                завершится. Пока что метод <code className='code'>.then()</code> вызывается синхронно на возвращённом
                промисе чтобы зарегистрировать колбэк.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполняется последняя строчка синхронного кода{' '}
                <code className='code'>console.log("Ставки сделаны")</code> попадёт в стек вызовов, ввыполнится, в
                консоли появится «Ставки сделаны», затем функция удалится из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пуст, а Event Loop ждёт. Дальше всё зависит от того, какой сервер ответит первым. Допустим,
                Яндекс ответил быстрее. Web API получает ответ от Яндекса, колбэк этого запроса с{' '}
                <code className='code'>console.log('Яндекс ответил')</code> отправляется в очередь микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop видит, что очередь микрозадач не пустая и забирает оттуда задачу: переносит колбэк запроса в
                стек вызовов, выполняет его, в консоли появится «Яндекс ответил», колбэк удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Как только первый промис завершился, а это как раз и произошло,{' '}
                <code className='code'>Promise.race(...)</code> переходит в состояние <em>resolved</em>, а его колбэк
                попадает в очередь микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop забирает следующую микрозадачу: переносит колбэк в стек вызовов, выполняет его, в консоли
                появится «Гонка завершена», колбэк удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Думаете всё? А вот и нет. Web API получает ответ от Гугла, запрос-то никуда не делся. Колбэк с{' '}
                <code className='code'>console.log('Гугл ответил')</code>
                отправляется в очередь микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop забирает последнюю микрозадачу: переносит колбэк в стек вызовов, выполняет его, в консоли
                появится «Гугл ответил», колбэк удаляется из стека вызовов.
              </p>
            </li>
          </ol>
          <EventLoopAnimation demo={AnimationDemo.PROMISE_RACE} />
          <p>
            Что изменилось, если бы в примере выше использовали не <code className='code'>Promise.race(...)</code>, а,
            например, <code className='code'>Promise.all(...)</code> (этот метод ожидает выполнения <em>всех</em>{' '}
            промисов)? Тогда вывод был бы таким (если оба запроса выполнились бы без ошибок):
          </p>
          <ExampleSnippet code={promiseAllExampleLog} />
          <CodeSnippet code={promiseAllExampleCode} lang={ECodeLang.JAVASCRIPT} name='example(9)' />
          <p>
            Почему так: потому что здесь <code className='code'>Promise.all(...)</code> ждёт <em>все</em> промисы, и его{' '}
            <code className='code'>.then(...)</code> выполнится только после того, как <em>оба</em> запроса завершатся.
          </p>
        </article>
        <article id='promise_race' className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>
            До этого мы ещё не рассматривали обработку ошибок. Рассмотрим поведение{' '}
            <code className='code'>Promise.all(...)</code> в случае ошибки:
          </p>
          <CodeSnippet code={promiseAllCatchErrorExampleCode} lang={ECodeLang.JAVASCRIPT} name='example(10)' />
          <p className='spacer top medium'>
            Главный нюанс здесь в том, первый запрос гарантированно упадёт с ошибкой, потому что такого домена не
            существует:
          </p>
          <ExampleSnippet code={promiseAllCatchErrorExampleLog} />
          <p>Давайте разберём по шагам:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                Первая строчка синхронного кода <code className='code'>console.log("Делаем ставки")</code> попадёт в
                стек вызовов, ввыполнится, в консоли появится «Делаем ставки», затем функция удалится из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Встречается <code className='code'>Promise.all(...)</code>. Сама операция попадёт в стек вызовов,
                выполнится, удалится из стека вызовов. Создадутся два промиса, запросы в каждом уйдут в Web API, при
                этом первый запрос упадёт, т.к. такой домен не существует, а второй успешно выполнится.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Регистрируются колбэки для каждого запроса, но каждый из них попадёт в очередь микрозадач только когда
                соответствующий запрос завершится.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Регистрируются колбэки <code className='code'>Promise.all(...)</code>, их здесь два. Первый колбэк
                попадёт в очередь микрозадач если все промисы завершатся успешно, а второй если хотя бы один промис
                завершится ошибкой. Важно помнить, что <code className='code'>Promise.all(...)</code> зарезолвится (или
                упадёт) только когда <em>все</em> промисы завершатся.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Выполняется последняя строчка синхронного кода{' '}
                <code className='code'>console.log("Ставки сделаны")</code> попадёт в стек вызовов, ввыполнится, в
                консоли появится «Ставки сделаны», затем функция удалится из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пуст, Event Loop ждёт ответы от серверов. Теперь начинается самое интересное! Сначала
                приходит ошибка от первого запроса. Web API получает ошибку и промис переходит в состояние{' '}
                <em>rejected</em>. Колбэк же с <code className='code'>console.log('Гугл ответил')</code> НЕ вызывается,
                потому что промис упал.
              </p>
              <p>
                <code className='code'>Promise.all(...)</code> получает первую ошибку, ему этого достаточно для того
                чтобы немедленно перейти в состояние <em>rejected</em> (даже если другие промисы ещё не завершились).
                Колбэк из <code className='code'>catch()</code> отправляется в очередь микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop забирает микрозадачу: переносит в стек вызовов, выполняется вывод в консоль «Авария на гонке:
                TypeError: ...», колбэк удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Второй запрос никуда не делся. Через некоторое время приходит успешный ответ от Яндекса. Web API
                переносит соответствующий колбэк в очередь микрозадач. Event Loop забирает последнюю микрозадачу,
                переносит в стек вызовов, выполняет, в консоли появляется «Яндекс ответил».
              </p>
            </li>
          </ol>
          <p>
            Колбэк c выводом «Гонка завершена» здесь не выполнится, потому что промис{' '}
            <code className='code'>Promise.all(...)</code> перешёл в состояние <em>rejected</em> при первой же ошибке, и
            после этого он уже никогда не перейдёт в <em>fulfilled</em>, даже если потом Яндекс успешно ответит. Этот
            колбэк выполнился бы только если бы оба промиса завершились успешно. Если нужно дождаться всех промисов,
            даже с ошибками, можно использовать <code className='code'>Promise.allSettled(...)</code>.
          </p>
        </article>
      </section>
      <section>
        <h2>
          Макрозадачи, создающие микрозадачи/микрозадачи, создающие макрозадачи/микрозадачи, создаюзие микрозадачи
        </h2>
        <p>Да, можно и так, и так, и так. Более того, на практике такое сплошь и рядом:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              макрозадача может создать микрозадачу: например, внутри <code className='code'>setTimeout</code> можно
              вызвать <code className='code'>Promise.resolve().then(...)</code>
            </p>
          </li>
          <li className='list__item'>
            <p>
              микрозадача может создать макрозадачу: например, внутри <code className='code'>.then(...)</code> можно
              вызвать <code className='code'>setTimeout(...)</code>
            </p>
          </li>
          <li className='list__item'>
            <p>
              микрозадача может создать микрозадачу: например, внутри промиса можно создать промис и так до
              бесконечности:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseLoopExampleCode} name='snippet(6)' />
            <p>
              В этом случае стоит быть осторжными: бесконечная генерация микрозадач приведет к зависанию вкладки
              браузера из-за того, что Event Loop будет бесконечно обрабатывать только очередь микрозадач.
            </p>
          </li>
        </ul>
        <p>
          Event Loop не запрещает вкладывать одно в другое. Макрозадачи спокойно создают микрозадачи (промисы внутри
          таймеров), а микрозадачи — макрозадачи (таймеры внутри промисов). Важно помнить порядок: микрозадачи,
          накопленные во время выполнения макрозадачи, выполнятся сразу после её завершения, а макрозадачи, созданные
          внутри микрозадач, попадают в конец общей очереди и ждут следующего цикла. В общем, общий алгоритм работы
          Event Loop совершенно не меняется.
        </p>
        <p className='spacer bottom large'>Далее разберём примеры.</p>
        <article className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Начнём с более простого примера: микрозадача (промис) создаёт макрозадачу (таймер):</p>
          <CodeSnippet
            lang={ECodeLang.JAVASCRIPT}
            code={microCreateMacroExampleCode}
            hideLines={true}
            name='example(11)'
          />
          <p className='spacer top medium'>Предлагаю предсказать вывод, прежде чем читать дальше.</p>
          <Accordion title='Правильный ответ' children={<ExampleSnippet code={microCreateMacroExampleLog} />} />
          <p>Разберём по шагам что здесь произошло:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>Промис попадает в стек, выполняется, колбэк отправляется сразу в очередь микрозадач.</p>
            </li>
            <li className='list__item'>
              <p>
                Доходим до <code className='code'>console.log('Просто вывод')</code> и как по накатаной: добавляем в
                стек, выполняем, выводим в консоль «Просто вывод», удаляем из стека.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Код кончился. Стек вызовов пустой. Event Loop идёт в очередь микрозадач, там лежит колбэк промиса.
                Перемещаем его в стек вызовов, начинаем выполнять. Первой строчкой идёт вывод в консоль: добавляем в
                стек, выполняем, выводим в консоль «Начало микрозадачи», удаляем из стека. Следующей строчкой идёт{' '}
                <code className='code'>setTimeout</code>. Таймер отправляется в Web API (помним, что 0 ms этому не
                помеха), там оттикивает свои условные 0 ms, затем Web API отправляет колбэк в очередь макрозадач.
                Продолжаем выполнение колбэка микрозадачи — доходим до последнего вывода в консоль: добавляем в стек,
                выполняем, выводим в консоль «Конец микрозадачи», удаляем из стека.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пустой. Очередь микрозадач пустая. Идём в очередь макрозадач, оттуда перемещаем колбэк
                таймера в стек вызовов и выполняем, в консоли появляется «setTimeout внутри промиса (макрозадача)»
              </p>
            </li>
            <li className='list__item'>
              <p>
                Event Loop возвращается в стек вызовов, но он тоже пустой. В очередях тоже ничего нет. Пока что делать
                больше нечего.
              </p>
            </li>
          </ol>
          <p className='spacer bottom large'>
            Таким образом макрозадачи, созданные внутри микрозадач, попадают в конец очереди макрозадач и будут ждать
            там своей очереди. Всё в рамках алгоритма работы Event Loop. А что будет если всё будет ровно наоборот?
          </p>
        </article>
        <article className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>Следующий пример: макрозадача (таймер) создаёт промис микрозадачу (промис):</p>
          <CodeSnippet
            lang={ECodeLang.JAVASCRIPT}
            code={macroCreateMicroExampleCode}
            hideLines={true}
            name='example(12)'
          />
          <p className='spacer top medium'>Предлагаю предсказать вывод, прежде чем читать дальше.</p>
          <Accordion title='Правильный ответ' children={<ExampleSnippet code={macroCreateMicroExampleLog} />} />
          <p className='spacer top medium'>Разберём по шагам что здесь произошло:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              <p>
                <code className='code'>setTimeout</code> отправляется в Web API, хоть у него и стоит 0 ms. После этого
                колбэк с промисом внутри уходит в очередь макрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Доходим до <code className='code'>console.log('Просто вывод')</code>, просто отправляется в стек
                вызовов, просто сразу выполняется, просто сразу выводится в консоли «Просто вывод» и затем также просто
                удаляется из стека вызовов.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Идём дальше, доходим до промиса. Сам промис отправляется в стек вызовов, быстренько выполняется и
                удаляется из стека.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Метод промиса <code className='code'>.then(...)</code> просто регистрирует колбэк, который должен будет
                выполниться после текущего синхронного кода, сам по себе никуда не попадает — ни в стек, ни в очереди
                задач. Колбэк же помещается в очередь микрозадач.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Код кончился. Что имеем на данный момент: в очереди микрозадач один колбэк от наружнего промиса, в
                очереди макрозадач один колбэк с промисом внутри <code className='code'>setTimeout</code>.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов пуст, Event Loop первым делом идёт в очередь микрозадач и выполняет там всё, что там лежит.
                У нас там колбэк от наружнего промиса. Колбэк перемещается в стек вызовов, выполняется, в консоли
                появляется «Промис выполнился (микрозадача снаружи)».
              </p>
            </li>
            <li className='list__item'>
              <p>
                В очереди микрозадач всё выполнили, идём в очередь макрозадач. Там один колбэк с промисом внутри.
                Перемещаем колбэк в стек вызовов и начинаем выполнять. Первая строчка в колбэке — синхронный вывод.
                Добавляем в стек, выводим в консоли «Начало макрозадачи», удаляем из стека. Далее доходим до промиса.
                Сам промис попадает в стек вызовов, быстренько выполняется и сразу удаляется. Метод промиса{' '}
                <code className='code'>.then()</code> отправляет колбэк в очередь микрозадач. Идём по коду дальше —
                снова синхронный вывод. Добавляем в стек, выводим в консоли «Конец макрозадачи», удаляем из стека.
              </p>
            </li>
            <li className='list__item'>
              <p>
                Стек вызовов снова опустел. Идём по порядку: заглядываем в очередь микрозадач, а там нас уже ждёт колбэк
                промиса, созданного внутри таймера. Перемещаем его в стек вызовов, выполняем, выводим в консоли «Промис
                выполнился (микрозадача внутри макрозадачи)», удаляем из стека.{' '}
              </p>
            </li>
            <li className='list__item'>
              <p>
                Возвращаемся в очередь микрозадач потому что нужно выполнить оттуда все задачи, там больше ничего нет.
                Заглядываем в очередь макрозадач — тоже пусто. Event Loop возвращается в стек вызовов, но он тоже
                пустой. Пока что делать больше нечего.
              </p>
            </li>
          </ol>
          <p className='spacer bottom large'>
            Что из этого важно вынести: Event Loop не прерывает текущую макрозадачу ради микрозадачи — микрозадачи
            накопятся и выполнятся после завершения макрозадачи, хоть у микрозадач и есть приоритет над макрозадачами.
            При этом если в очереди макрозадач есть колбэки, которые ожидают своей очереди, а в процессе выполнения
            одной из макрозадач появились микрозадачи, выполнение оставшихся макрозадач отложится до тех пор, пока все
            микрозадачи не будут выполнены.
          </p>
        </article>
        <article className='spacer top large'>
          <div className='tags'>
            <div className='tag PRIMARY'>Пример</div>
          </div>
          <p>
            Повышаем уровень сложности: рассмотрим пример, в котором микрозадачи (промисы), которые создают другие
            микрозадачи (промисы).
          </p>
          <p>
            <strong>Осторожно: бесконечные микрозадачи!</strong> Если внутри микрозадачи создавать новую микрозадачу,
            Event Loop может застрять в бесконечном цикле. В этом случае браузер никогда не дойдёт до фазы рендеринга и
            интерфейс зависнет. Это классическая ошибка при работе с промисами и/или{' '}
            <code className='code'>queueMicrotask()</code>.
          </p>
          <CodeSnippet
            lang={ECodeLang.JAVASCRIPT}
            code={infiniteMicrotaskLoopExampleCode}
            customName='DO_NOT_DO_THIS(3).js'
          />
          <p className='spacer top medium'>Чтобы избежать этого можно:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                использовать макрозадачи для разрыва цепочки микрозадач. Отлично подойдут таймеры с нулевой задержкой{' '}
                <code className='code'>setTimeout(callback, 0)</code>:
              </p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={safeMicrotaskLoopExampleCode} customName='DO_THIS(1).js' />
            </li>
            <li className='list__item'>
              <p>
                использовать <code className='code'>requestAnimationFrame</code> для разрыва цепочки, чтобы дать
                браузеру возможность обновить экран:
              </p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={safeAnimationLoop} customName='DO_THIS(2).js' />
            </li>
            <li className='list__item'>
              <p>Следить за количеством микрозадач и не допускать застревания Event Loop в очереди микрозадач.</p>
            </li>
          </ul>
        </article>
      </section>
      <section ref={summaryRef}>
        <h2>Как перестать бояться Event Loop</h2>
        <p>Вы прошли долгий путь. Давайте соберём самое важное, что нужно запомнить по Event Loop в JavaScript:</p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p className='list__title'>
              <strong>Call Stack</strong>: стек вызовов
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>сюда весь синхронный код</li>
              <li className='list__item'>
                выполняется один раз при загрузке страницы, а потом сюда попадают только колбэки
              </li>
              <li className='list__item'>LIFO</li>
            </ul>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              <strong>Microtask Queue</strong>: очередь микрозадач
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>сюда промисы</li>
              <li className='list__item'>выполняется вся целиком после стека, но до макрозадач</li>
              <li className='list__item'>после всех микрозадач рендерится страница</li>
              <li className='list__item'>FIFO</li>
            </ul>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              <strong>Macrotask Queue</strong>: очередь макрозадач
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>
                сюда{' '}
                {['setTimeout', 'setInterval', 'события DOM'].map((item, index, arr) => (
                  <>
                    <code className='code'>{item}</code>
                    {index !== arr.length - 1 && ', '}
                  </>
                ))}
              </li>
              <li className='list__item'>выполняется по одной задаче за итерацию Event Loop</li>
              <li className='list__item'>до начала выполнения очередной макрозадачи рендерится страница</li>
              <li className='list__item'>FIFO</li>
            </ul>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              <strong>Web API</strong>: браузерное окружение
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>
                <p>выполняются фоново таймеры, слушатели событий, запросы</p>
              </li>
              <li className='list__item'>
                <p>только для асинхронных операций</p>
              </li>
              <li className='list__item'>
                <p>не стек и не очередь</p>
              </li>
            </ul>
          </li>
        </ol>

        <p className='spacer top large'>
          Принцип работы Event Loop можно сократить следующим образом до — <strong>выполняем</strong>:
        </p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p>
              <em>ВСЁ</em> в стеке вызовов пока он не опустеет
            </p>
          </li>
          <li className='list__item'>
            <p>
              <em>ВСЕ</em> микрозадачи
            </p>
          </li>
          <li className='list__item'>
            <p>
              <em>ОДНУ</em> макрозадачу
            </p>
          </li>
        </ol>
        <p>Затем вернуться к шагу 2 и повторять пункты 2-3 до бесконечности.</p>
      </section>
      <section ref={additionalMaterialsRef}>
        <h2>Что дальше?</h2>
        <h3>Интерактивные песочницы</h3>
        <p>
          Если хочешь поиграться с Event Loop в реальном времени, зайди на 
          <ExternalLink label='loupe' href='http://latentflip.com/loupe/' />
           от Филиппа Робертса (Philip Roberts). Там можно увидеть как код шаг за шагом перемещается между очередями. Из
          минусов: нет очереди микрозадач — она появилась только в 2015 году вместе с промисами.
        </p>
        <p className='spacer bottom large'>
          Ещё один вариант песочницы —{' '}
          <ExternalLink href='https://www.jsv9000.app/' label='JavaScript Visualizer 9000' />. Отличается от loupe тем,
          что стек вызовов уже разбит на очереди микро- и макрозадач, а также есть несколько примеров по умолчанию. Из
          минусов: <code className='code'>console.log</code> в этой песочнице не отображается в стеке вызовов. Зато
          можно запускать примеры по шагам.
        </p>
        <h3>Материалы по теме</h3>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              Выступление упомянутого выше Филиппа Робертса{' '}
              <ExternalLink
                label='«What the heck is the event loop anyway?»'
                href='https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html'
              />{' '}
              — оно уже довольно старое, но всё ещё отлично объясняет что такое, чёрт подери, Event Loop. Можно найти
              версию с русскими субтитрами.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <ExternalLink
                href='https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/'
                label='«Tasks, microtasks, queues and schedules»'
              />{' '}
              — уже классическая статья Джейка Арчибальда, где наглядно показаны различия между задачами, микрозадачами
              и очередями.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <ExternalLink
                label='«queueMicrotask(): брат setTimeout, или как добавить синхронную функцию в очередь микрозадач»'
                href='https://doka.guide/js/queuemicrotask/'
              />{' '}
              — здесь можно почитать подробнее про функцию <code className='code'>queueMicrotask()</code>, которая в
              этой статье была упомянута вскольз.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Конечно же, в современном JavaScript уже есть возможность вообще вынести какие-то тяжёлые вычисления вне
              основного потока с помощью{' '}
              <ExternalLink
                label='Web Workers API'
                href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers'
              />
              . Если интересно, то можно прочитать про это API подробнее в{' '}
              <ExternalLink label='Доке' href='https://doka.guide/js/web-workers/' />.
            </p>
          </li>
        </ul>
      </section>
    </PostWrapper>
  );
};

export default Post;
