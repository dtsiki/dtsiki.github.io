import { useRef } from 'react';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import { IItemOfContent } from 'src/interfaces';
import {
  AsyncFunctionsExample,
  ComplexExample,
  EventListenerExample,
  FetchExample,
  FunctionsExample,
  MacroCreateMacroExample,
  MacroCreateMicroExample,
  MicroCreateMacroExample,
  MicroCreateMicroExample,
  PromiseChainingExample,
  RaceExample,
  RaceWithCatchExample,
  SinglePromiseExample,
  SingleTimeoutWithDelayExample,
  SingleTimeoutWithoutDelayExample,
  SyncCodeExample,
} from 'src/components/pages/blog/ru/event-loop-guide/EventLoopAnimation';
import { ENoteType } from 'src/components/common/Note/Note.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { EXAMPLES } from 'src/i18n';
import { TableOfContentsVariant } from 'src/components/pages/blog/TableOfContents/TableOfContents.types';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog } from 'src/utils';

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

  const syncCodeExampleRef = useRef<HTMLDivElement>(null);
  const syncFunctionsExampleRef = useRef<HTMLDivElement>(null);
  const singlePromiseExampleRef = useRef<HTMLDivElement>(null);
  const singleTimerWithDelayExampleRef = useRef<HTMLDivElement>(null);
  const singleTimerWithoutDelayExampleRef = useRef<HTMLDivElement>(null);
  const eventListenerExampleRef = useRef<HTMLDivElement>(null);
  const promiseChainingAndTimerExampleRef = useRef<HTMLDivElement>(null);
  const asyncFunctionsExampleRef = useRef<HTMLDivElement>(null);
  const complexExampleRef = useRef<HTMLDivElement>(null);
  const fetchExampleRef = useRef<HTMLDivElement>(null);
  const promiseRaceExampleRef = useRef<HTMLDivElement>(null);
  const promiseRaceWithCatchExampleRef = useRef<HTMLDivElement>(null);
  const microCreateMacroExampleRef = useRef<HTMLDivElement>(null);
  const macroCreateMicroExampleRef = useRef<HTMLDivElement>(null);
  const microCreateMicroExampleRef = useRef<HTMLDivElement>(null);
  const macroCreateMacroExampleRef = useRef<HTMLDivElement>(null);

  const TABLE_OF_EXAMPLES_CONFIG: Array<IItemOfContent> = [
    {
      title: 'Синхронный код',
      ref: syncCodeExampleRef,
    },
    {
      title: 'Функции',
      ref: syncFunctionsExampleRef,
    },
    {
      title: 'Промис',
      ref: singlePromiseExampleRef,
    },
    {
      title: 'Таймер с задержкой',
      ref: singleTimerWithDelayExampleRef,
    },
    {
      title: 'Таймер с нулевой задержкой',
      ref: singleTimerWithoutDelayExampleRef,
    },
    {
      title: 'Слушатели событий',
      ref: eventListenerExampleRef,
    },
    {
      title: 'Цепочка промисов и таймер',
      ref: promiseChainingAndTimerExampleRef,
    },
    {
      title: 'Асинхронные функции',
      ref: asyncFunctionsExampleRef,
    },
    {
      title: 'Всё и сразу: асинхронные функции, интервал, цепочка промисов',
      ref: complexExampleRef,
    },
    {
      title: 'Сетевой запрос',
      ref: fetchExampleRef,
    },
    {
      title: 'Гонка запросов',
      ref: promiseRaceExampleRef,
    },
    {
      title: 'Обработка ошибок',
      ref: promiseRaceWithCatchExampleRef,
    },

    {
      title: 'Микрозадачи, создающие макрозадачи',
      ref: microCreateMacroExampleRef,
    },
    {
      title: 'Макрозадачи, создающие микрозадачи',
      ref: macroCreateMicroExampleRef,
    },
    {
      title: 'Микрозадачи, создающие микрозадачи',
      ref: microCreateMicroExampleRef,
    },
    {
      title: 'Макрозадачи, создающие макрозадачи',
      ref: macroCreateMacroExampleRef,
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

  const whileTrueExampleCode = `while (true) {
  console.log('Асталависта, бейби!');
}`;

  const infiniteRecursionExampleCode = `function infiniteRecursion() {
  infiniteRecursion();
}

infiniteRecursion(); // RangeError: Maximum call stack size exceeded`;

  const queueMicrotaskExampleCode = `queueMicrotask(() => {
  console.log('Хоба, я выполнюсь асинхронно');
})`;

  const promiseLoopExampleCode = `Promise.resolve().then(function loop() {
  Promise.resolve().then(loop);
});`;

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
      <TableOfContents
        customTitle={EXAMPLES}
        items={TABLE_OF_EXAMPLES_CONFIG}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.EVENT_LOOP_GUIDE].language}
        variant={TableOfContentsVariant.SECONDARY}
      />
      <section ref={introRef} className='section outer'>
        <h2>Введение</h2>
        <p className='spacer bottom medium'>
          Прежде, чем перейдём к Event Loop, стоит уделить внимание двум парам понятий в программировании (
          <a href='#js' className='link' style={{ fontWeight: '600' }}>
            <strong>TL;DR</strong>
          </a>
          ) .
        </p>
        <section className='section inner'>
          <h3>Синхронность и асинхронность</h3>
          <p>{LONG_DASH} это про то, как в языке выполняются операции в коде:</p>
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
                двигаясь, пока вода не закипит. Ничего другого вы не делаете {LONG_DASH} просто ждёте. Проходит 3
                минуты. Чайник закипает. Теперь вы идёте к шкафу, берёте кружку и обнаруживаете, что она грязная.
                Приходится мыть посуду. Затем достаёте молоко, греете его в капучинаторе, завариваете кофе и наконец
                пьёте. Весь процесс занимает ±10 минут. Из них целых 5 минут вы просто стоите, ничего не делаете и
                смотрите на чайник.
              </p>
              <p className='list__footer'>В коде это можно оформить так:</p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={syncCoffeeExample} hideLines={true} />
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
                ещё греется. Вы успеваете даже подготовить капучинатор. Наконец, чайник закипает {LONG_DASH} вы слышите
                свист (это как «callback» от чайника). Вы завариваете кофе, греете молоко и пьёте. Всё то же самое
                количество дел, но вы ни секунды не стояли без дела. Чайник кипятился параллельно с вашими действиями.
              </p>
              <p className='list__footer'>В коде это можно оформить так:</p>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={asyncCoffeeExample} hideLines={true} />
            </li>
          </ul>
        </section>
        <section className='section inner'>
          <h3>Однопоточность и многопоточность</h3>
          <p>{LONG_DASH} это про то, сколько дел может выполняться физически одновременно: </p>
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
                  она завершится {LONG_DASH} получить уведомление. Но в сам момент выполнения всё равно занят только
                  один поток.
                </li>
              </ol>
              <p className='list__footer'>
                Пример из жизни: один повар в ресторане. Приходит заказ: приготовить три блюда. Он готовит первое блюдо
                от начала до конца, потом второе, потом третье. Клиенты ждут, пока повар приготовит каждое блюдом по
                очереди, потому что повар не может одновременно жарить картошку и нарезать салат {LONG_DASH} руки-то
                одни.
              </p>
            </li>
            <li className='list__item'>
              <h4 className='list__title spacer bottom small'>многопоточность:</h4>
              <ol className='list ordered nested'>
                <li className='list__item'>
                  Может быть несколько потоков, которые выполняются параллельно {LONG_DASH} на разных ядрах процессора
                  или в вытесняющем режиме
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
        </section>
        <section className='section inner'>
          <p>Эти две пары понятий часто путают потому что:</p>
          <ol className='list markered'>
            <li className='list__item'>Асинхронный код часто реализуется в однопоточной среде</li>
            <li className='list__item'>Многопоточный код часто бывает синхронным, но может быть и асинхронным </li>
          </ol>
          <p>К какому виду относится JavaScript?</p>
          <p id='js'>По умолчанию JavaScript является синхронным и однопоточным языком.</p>
          <p className='spacer bottom medium'>
            Но как так? Ведь мы нажимаем на кнопки, при этом страницы не зависают, анимации продолжаются, а через
            секунду появляются результат запросов. И в JavaScript же есть асинхронные операции. Всё дело в Event Loop.
          </p>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.5 }}>
            <strong>Event Loop</strong> или <strong>событийный цикл</strong> {LONG_DASH} это механизм, который
            организует асинхронность в однопоточной среде. Event Loop не делает код многопоточным, а просто позволяет не
            блокировать синхронный код на долгих операциях и даёт возможность переключаться между ними.
          </p>
          <p className='spacer bottom top medium'>
            Сам по себе событийный цикл невозможен на движке только самого JavaScript. Браузеры, которые являются
            средами выполнения для JavaScript, предоставляют Web API для создания новых потоков для выполнения
            JavaScript. Таким образом браузеры дают JavaScript суперспособность: они выносят долгие операции за пределы
            основного и единственного потока. А как {LONG_DASH} разберём ниже.
          </p>
        </section>
      </section>
      <section ref={eventLoopAnatomyRef} id='' className='section outer'>
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
          Изначально в модели событийного цикла была только одна очередь задач {LONG_DASH} Task Queue, куда складывались
          абсолютно все задачи. Но, с выходом ES6 и появления промисов, была добавлена ещё одна очередь {LONG_DASH}{' '}
          Microtask Queue, которая нужна, чтобы выполнять короткие, приоритетные задачи сразу после текущего кода,
          не дожидаясь следующего цикла. Не пугайтесь, что в каких-то моделях может попадаться только одна очередь задач
          (Task Queue), а в каких-то две
          {LONG_DASH} это не является ошибкой.
        </p>
        <Note type={ENoteType.SECONDARY}>
          <p>
            <b>Для самых дотошных:</b> термин «макрозадача» {LONG_DASH} это народное название, которое прижилось в
            сообществе, но его нет в официальной спецификации ECMAScript.
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
              <p>Tasks {LONG_DASH} это то, что мы и называем макрозадачами</p>
            </li>
            <li className='list__item'>
              <p>Microtasks {LONG_DASH} микрозадачи</p>
            </li>
            <li className='list__item'>
              <p>Animation callbacks {LONG_DASH} задачи рендеринга</p>
            </li>
          </ul>
          <p>
            Как видно, термин «macrotask» в спецификации не используется. Это придумали разработчики, чтобы отличать их
            от микрозадач. На практике это не меняет ровно ничего.
          </p>
        </Note>
        <Note type={ENoteType.SECONDARY}>
          <p>
            <b>Для ещё более дотошных:</b> в спецификации HTML также говорится, что «task queues are sets, not queues»{' '}
            {LONG_DASH}
            то есть очереди задач {LONG_DASH} это не совсем очереди в классическом понимании FIFO. На самом деле это
            наборы задач, и браузер может выбирать из них задачу с учётом приоритетов, а не строго по порядку
            поступления. На практике это тоже ничего не меняет.
          </p>
        </Note>
      </section>
      <section ref={algorithmRef} className='section outer'>
        <h2>Принцип работы Event Loop</h2>
        <p>Event Loop работает очень просто, весь алгоритм можно уместить в 4 шага:</p>
        <ol className='list stepped'>
          <li className='list__item'>
            <p className='list__title'>
              Выполняется <em>ВСЁ</em>, что есть в <strong>стеке вызовов</strong> и до тех пор пока он не опустеет
            </p>
            <p>
              Сюда попадает весь синхронный код при загрузке страницы. После того как синхронный код закончился, он
              больше не появляется в стеке вызовов в том же виде {LONG_DASH} до перезагрузки страницы. После этого новые
              задачи приходят из очередей: макро- и микро-.
            </p>
            <p>
              Если бы шаг 1 повторялся постоянно, то браузер бы бесконечно перевыполнял один и тот же код, а макрозадачи
              и микрозадачи никогда бы не обрабатывались.
            </p>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              Когда стек вызовов станет пустым {LONG_DASH} выполняются <em>ВСЕ</em> задачи из{' '}
              <strong>очереди микрозадач</strong>
            </p>
            <p>
              Микрозадачи выполняются все подряд, потому что они предназначены для «срочных» операций, которые должны
              обрабатываться как можно быстрее и без задержек между ними.
            </p>
            <p>
              Если бы микрозадачи выполнялись по одной с перерывами на рендеринг, это создало бы задержки между
              связанными операциями. Например, представим есть цепочка промисов, где каждый вызов создаёт микрозадачу.
              Если бы эти микрозадачи выполнялись по одной как макрозадачи, а затем после каждой выполнялся бы рендеринг
              или макрозадача, то порядок бы нарушился. Поэтому их выполняют пачкой {LONG_DASH} всю очередь микрозадач
              за раз.
            </p>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              Затем берётся только <em>ОДНУ</em> задача из <strong>очереди макрозадач</strong> и выполняется
            </p>
            <p>
              Сразу после того, как будут выполнены все микрозадачи, но до того, как будет взята следующая макрозадача
              происходит рендеринг. Браузер использует это окно, чтобы обновить экран, отрисовать анимации и применить
              изменения в DOM. Если в очереди микро- или макрозадач слишком много, рендеринг может задерживаться{' '}
              {LONG_DASH}
              интерфейс будет тормозить, потому что браузеру просто некогда обновлять экран.
            </p>
            <p>
              Макрозадачи {LONG_DASH} это более крупные операции и могут занимать больше времени и ресурсов. Если
              выполнять их все подряд, браузер не сможет обновлять экран и реагировать на пользователя. Поэтому
              выполняется только одна макрозадача за раз, а рендеринг происходит до взятия очередной макрозадачи в
              работу.
            </p>
            <p>
              Если стек вызовов опустел, а микрозадач тоже нет, то последовательно могут выполняться все макрозадачи.
            </p>
          </li>
          <li className='list__item'>
            <p className='list__title'>Повторить шаги 2-3</p>
            <p>
              Цикл повторяется, начиная с шага 2: сначала все микрозадачи, потом одна макрозадача {LONG_DASH} и так до
              бесконечности. В стек вызовов операции теперь попадают только из очередей: микрозадач и макрозадач.
            </p>
          </li>
        </ol>
        <p className='spacer bottom large'>Далее подробно разберём как работает событийный цикл в JavaScript.</p>
      </section>
      <section ref={callStackRef} className='section outer'>
        <h2>Call Stack</h2>
        <p>
          Call Stack или стек вызовов {LONG_DASH} это место, где выполняется <em>только синхронный код</em>.
        </p>
        <p>Поведение стека вызовов можно описать следующими нехитрыми правилами:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              Когда вызывается любая синхронная операция она попадает в стек вызовов. Когда заканчивает работу{' '}
              {LONG_DASH}
              удаляется из стека вызовов.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Функции попадают в стек только при вызове. Объявления функций не попадают в стек вызовов. Возврат из
              функции {LONG_DASH} удаляет её из стека.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Если внутри функции вызывается другая функция {LONG_DASH} вложенная кладётся в стеке поверх родительской и
              сразу начинает выполняться, а родительская функция ждёт, т.е. её выполнение приостанавливается до возврата
              из вложенной. И так до тех пор, пока стек не опустеет.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Функции попадают в стек вызовов в том порядке, в котором они вызываются, а выполняются и удаляются в
              обратном порядке {LONG_DASH} с последней вызванной по принципу LIFO т.е. последним пришёл {LONG_DASH}{' '}
              первым ушел.
            </p>
            <Note type={ENoteType.SECONDARY}>
              <p>
                <b>LIFO (Last In, First Out)</b> {LONG_DASH} это принцип обработки данных, является основой для работы
                такой структуры структуры данных как стек.
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
        <SyncCodeExample ref={syncCodeExampleRef} />
        <FunctionsExample ref={syncFunctionsExampleRef} />

        <p className='spacer top large'>Ещё важные нюансы, которые необходимо понимать и помнить про стек вызовов:</p>
        <ol className='list markered'>
          <li className='list__item'>
            <p>
              JavaScript {LONG_DASH} однопоточный, поэтому стек вызовов один. Пока стек вызовов не опустеет, никакие
              другие задачи не запустятся. Поэтому если вы случайно запустите бесконечный цикл или тяжёлую синхронную
              операцию, событийный цикл просто не сможет брать новые задачи и страница зависнет.
            </p>
            <p>
              Код ниже убьёт Event Loop: стек вызовов никогда не опустеет т.к. будет бесконечно занят одной операцией,
              из-за этого зависнет браузер, кнопки перестанутся нажимаются и так далее. Никакие очереди тут не помогут.
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={whileTrueExampleCode} customName='DO_NOT_DO_THIS(1).js' />

            <li className='list__item'>
              <p>
                Предыдущий пункт можно дополнить тем, что стек не резиновый и имеет ограниченный размер. Каждый вызов
                функции занимает память и если функций слишком много (например, вы решили побаловаться бесконечными
                рекурсиями), стек переполнится:
              </p>
              <p>
                Например, если функция будет бесконечно вызывать саму себя т.е. в стек будет добавляться каждый раз одна
                и та же функция, рано или поздно, в зависимости от объёма памяти, стек закончится и всё, бадибум. Так
                что с этим тоже нужно быть аккуратнее.
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
      <section ref={tasksQueueRef} className='section outer'>
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
            <b>FIFO (First In, First Out)</b> {LONG_DASH} кто первым пришёл, тот первым и ушёл. Пример из жизни: очередь
            в магазине {LONG_DASH} кто раньше встал к кассе, того раньше обслужили.
          </p>
          <p>
            Почему именно так? Разные принципы {LONG_DASH} потому что у стека и очереди разное назначение. В стеке важно
            сохранить вложенность, а очереди важно сохранять порядок поступления задач.
          </p>
        </Note>
        <p className='spacer top bottom medium'>
          Из названий очередей можно догадаться, что в очередь макрозадач попадают макрозадачи, а в очередь микрозадач{' '}
          {LONG_DASH}
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
                  обработчики результатов выполнения промисов <InlineCode>then</InlineCode>,{' '}
                  <InlineCode>catch</InlineCode> и <InlineCode>finally</InlineCode>
                </p>
                <Note>
                  <p>
                    В очередь микрозадач попадают только сами колбэки внутри методов <InlineCode>then</InlineCode>,{' '}
                    <InlineCode>catch</InlineCode> и <InlineCode>finally</InlineCode>. Сами эти методы в коде
                    выполняются синхронно, но переданные в функции-колбэки откладываются в очередь микрозадач.
                  </p>
                </Note>
              </li>
              <li className='list__item'>
                <p>
                  <InlineCode>async</InlineCode>/<InlineCode>await</InlineCode> {LONG_DASH} это просто синтаксический
                  сахар для существующего API промисов
                </p>
              </li>
              <li className='list__item'>
                <p>
                  функция <InlineCode>fetch()</InlineCode> для отправки сетевых запросов {LONG_DASH} под капотом имеет
                  тот же промис
                </p>
                <Note>
                  <p>
                    <strong>Обратите внимание: </strong>
                    часто можно встретить ошибку, в которой функцию <InlineCode>fetch()</InlineCode> относят к
                    макрозадачам . Это никак не может быть правдой из-за промисной природы функции. Скорее всего
                    путаница появилась из-за того, что <InlineCode>fetch()</InlineCode> является частью{' '}
                    <ExternalLink
                      label='Web API'
                      href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
                    />
                    , а где Web API, там и макрозадачи. Поэтому относить <InlineCode>fetch()</InlineCode> к
                    макрозадачами не просто упрощение, а грубая ошибка потому что:
                  </p>
                  <ul className='list markered'>
                    <li className='list__item'>
                      <p>
                        сама по себе функция <InlineCode>fetch()</InlineCode> {LONG_DASH} это синхронная операция, т.е.
                        попадёт в стек вызовов, но её результатом будет промис
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        сетевой запрос, созданный <InlineCode>fetch()</InlineCode>, отправится в Web API (о нём будет
                        ниже), но это не задача в очереди {LONG_DASH} ни в очереди макрозадач, ни в очереди микрозадач
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        колбэки в <InlineCode>then</InlineCode> и <InlineCode>catch</InlineCode> {LONG_DASH} это
                        микрозадачи как у любого промиса
                      </p>
                    </li>
                    <li className='list__item'>
                      <p>
                        сами по себе методы <InlineCode>then</InlineCode> и <InlineCode>catch</InlineCode> же будут
                        выполняться как синхронные операции и попадут в стек вызовов
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
              <InlineCode>queueMicrotask()</InlineCode> {LONG_DASH} специальная встроенная функция JavaScript, которая
              используется для добавления функции в очередь микрозадач.
            </p>
            <p>
              Например, вывод в консоль {LONG_DASH} это, вообще-то, синхронная операция, но с помощью функции{' '}
              <InlineCode>queueMicrotask()</InlineCode> мы можем лёгким движением руки сделать её асинхронной:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={queueMicrotaskExampleCode} />
            <p>
              Сильно этой функцией злоупотрепблять тоже не надо: есть риск забить очередь микрозадач и тогда ничего
              кроме микрозадач не будет выполняться.
            </p>
          </li>
        </ul>

        <SinglePromiseExample ref={singlePromiseExampleRef} />

        <p className='spacer bottom large'>
          А если добавить к промисам <InlineCode>setTimeout</InlineCode>? Для этого нужно сперва разобраться что же
          такое{' '}
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
              Таймеры: <InlineCode>setTimeout</InlineCode>, <InlineCode>setInterval</InlineCode>
            </p>
          </li>
          <li className='list__item'>
            <p>
              События DOM:{' '}
              {['scroll', 'click', 'focus', 'mouseup', 'keydown', 'submit'].map((item, index, arr) => (
                <>
                  <InlineCode>{item}</InlineCode>
                  {index !== arr.length - 1 && ', '}
                </>
              ))}{' '}
              и т.д. и т.п.
            </p>
          </li>
        </ul>
        <h3 className='spacer top large'>Приоритет выполнения</h3>
        <p>
          Обе очереди имеют разный приоритет выполнения {LONG_DASH} у очереди <strong>микрозадач</strong> приоритет
          выше.
        </p>
        <p>
          Почему именно так? Потому что балом правят промисы. Промисы нужны для реакции на результат асинхронной
          операции как можно скорее. Если бы они ждали своей очереди как, например, <InlineCode>setTimeout</InlineCode>,
          то пришлось бы ждать, пока выполнятся все таймеры. А это долго. Микрозадачи {LONG_DASH} это срочное сообщение,
          которое надо прочитать как можно скорее.
        </p>
        <p>Чтобы рассмотреть примеры с очередью макрозадач, забежим вперёд и рассмотрим что такое Web API подробнее.</p>
      </section>
      <section ref={webApiRef} id='webapi' className='section outer'>
        <h2>Web API</h2>
        <p>
          Web API {LONG_DASH} это браузерное окружение, которое находится вне движка JavaScript. Web API выполняет{' '}
          <em>асинхронные</em> операции, пока поток JavaScript занимается другими делами. Без Web API Event Loop был бы
          просто циклом, который ничего не умеет ждать.
        </p>
        <p>
          Web API не «склад для колбэков», а диспетчер, который берёт задачу («поставь таймер», «скачай данные», «жди
          клика»), выполняет её на фоне, а когда заканчивает {LONG_DASH} отправляет колбэк в очередь.
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
            Таймеры: <InlineCode>setTimeout</InlineCode>, <InlineCode>setInterval</InlineCode>
          </li>
          <li className='list__item'>
            <p>
              События DOM:{' '}
              {['scroll', 'click', 'focus', 'mouseup', 'keydown', 'submit'].map((item, index, arr) => (
                <>
                  <InlineCode>{item}</InlineCode>
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
            Почему же тогда вызовы {getConsoleLog()} попадают в стек вызовов, а не отправляются в Web API?
          </p>
          <p>
            Ответ прост: {getConsoleLog()} {LONG_DASH} синхронная операция. Она выполняется здесь и сейчас, не требует
            ожидания, не отправляет колбэки в очереди. Вывод в консоль не обращается к сети, не ставит таймеры, не ждёт
            действий пользователя. Консоль браузера готова принять сообщение в ту же секунду. Web API нужен именно для
            ожидания: чтобы не блокировать главный поток на время, пока сервер ответит или таймер протикает.
          </p>
        </Note>
        <SingleTimeoutWithDelayExample ref={singleTimerWithDelayExampleRef} />
        <SingleTimeoutWithoutDelayExample ref={singleTimerWithoutDelayExampleRef} />
        <p>Двигаемся дальше.</p>
        <EventListenerExample ref={eventListenerExampleRef} />
        <PromiseChainingExample ref={promiseChainingAndTimerExampleRef} />
        <AsyncFunctionsExample ref={asyncFunctionsExampleRef} />
        <ComplexExample ref={complexExampleRef} />
        <p className='spacer top large'>
          Отдельно разберём сетевые запросы {LONG_DASH} метод <InlineCode>fetch()</InlineCode>, параллельные запросы и
          обработку ошибок.
        </p>
        <FetchExample ref={fetchExampleRef} />
        <RaceExample ref={promiseRaceExampleRef} />
        <RaceWithCatchExample ref={promiseRaceWithCatchExampleRef} />
      </section>
      <section className='section outer'>
        <h2>
          Макрозадачи, создающие микрозадачи/микрозадачи, создающие макрозадачи/микрозадачи, создаюзие микрозадачи
        </h2>
        <p>Да, можно и так, и так, и так. Более того, на практике такое сплошь и рядом:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>макрозадача создаёт макрозадачу</p>
            <p className='list__footer'>
              Например, внутри <InlineCode>setTimeout</InlineCode> вызывается другой <InlineCode>setTimeout</InlineCode>
            </p>
          </li>
          <li className='list__item'>
            <p>макрозадача может создаёт микрозадачу</p>
            <p className='list__footer'>
              Например, внутри <InlineCode>setTimeout</InlineCode> можно создать промис
            </p>
          </li>
          <li className='list__item'>
            <p>микрозадача создаёт макрозадачу</p>
            <p className='list__footer'>
              Например, внутри метода промиса <InlineCode>then</InlineCode> можно создать таймер
              <InlineCode>setTimeout</InlineCode>
            </p>
          </li>
          <li className='list__item'>
            <p>микрозадача может создать микрозадачу</p>
            <p className='list__footer'>Например, внутри промиса можно создать промис и так до бесконечности:</p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseLoopExampleCode} />
            <p>
              В этом случае стоит быть осторжными: бесконечная генерация микрозадач приведет к зависанию вкладки
              браузера из-за того, что Event Loop будет бесконечно обрабатывать только очередь микрозадач.
            </p>
          </li>
        </ul>
        <p>
          Event Loop не запрещает вкладывать одно в другое. Макрозадачи спокойно создают микрозадачи (промисы внутри
          таймеров), а микрозадачи {LONG_DASH} макрозадачи (таймеры внутри промисов). Важно помнить порядок:
          микрозадачи, накопленные во время выполнения макрозадачи, выполнятся сразу после её завершения, а макрозадачи,
          созданные внутри микрозадач, попадают в конец общей очереди и ждут следующего цикла. В общем, общий алгоритм
          работы Event Loop совершенно не меняется.
        </p>
        <p className='spacer bottom large'>Далее разберём примеры.</p>
        <MicroCreateMacroExample ref={microCreateMacroExampleRef} />
        <MacroCreateMicroExample ref={macroCreateMicroExampleRef} />
        <MicroCreateMicroExample ref={microCreateMicroExampleRef} />
        <MacroCreateMacroExample ref={macroCreateMacroExampleRef} />
      </section>
      <section ref={summaryRef} className='section outer'>
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
                    <InlineCode>{item}</InlineCode>
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
          Принцип работы Event Loop можно сократить следующим образом до {LONG_DASH} <strong>выполняем</strong>:
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
      <section ref={additionalMaterialsRef} className='section outer'>
        <h2>Что дальше?</h2>
        <h3>Интерактивные песочницы</h3>
        <p>
          Если хочешь поиграться с Event Loop в реальном времени, зайди на 
          <ExternalLink label='loupe' href='http://latentflip.com/loupe/' />
           от Филиппа Робертса (Philip Roberts). Там можно увидеть как код шаг за шагом перемещается между очередями. Из
          минусов: нет очереди микрозадач {LONG_DASH} она появилась только в 2015 году вместе с промисами.
        </p>
        <p className='spacer bottom large'>
          Ещё один вариант песочницы {LONG_DASH}{' '}
          <ExternalLink href='https://www.jsv9000.app/' label='JavaScript Visualizer 9000' />. Отличается от loupe тем,
          что стек вызовов уже разбит на очереди микро- и макрозадач, а также есть несколько примеров по умолчанию. Из
          минусов: {getConsoleLog()} в этой песочнице не отображается в стеке вызовов. Зато можно запускать примеры по
          шагам.
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
              {LONG_DASH} оно уже довольно старое, но всё ещё отлично объясняет что такое, чёрт подери, Event Loop.
              Можно найти версию с русскими субтитрами.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <ExternalLink
                href='https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/'
                label='«Tasks, microtasks, queues and schedules»'
              />{' '}
              {LONG_DASH} уже классическая статья Джейка Арчибальда, где наглядно показаны различия между задачами,
              микрозадачами и очередями.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <ExternalLink
                label='«queueMicrotask(): брат setTimeout, или как добавить синхронную функцию в очередь микрозадач»'
                href='https://doka.guide/js/queuemicrotask/'
              />{' '}
              {LONG_DASH} здесь можно почитать подробнее про функцию <InlineCode>queueMicrotask()</InlineCode>, которая
              в этой статье была упомянута вскольз.
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
