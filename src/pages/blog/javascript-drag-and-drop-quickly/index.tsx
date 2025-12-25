import React, { ReactElement } from 'react';
import Image from 'next/image';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import Window, { WindowPatternVariant, WindowType } from 'src/components/common/Window/Window';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import ExternalLink from 'src/components/common/ExternalLink';
import { Hint } from 'src/components/common/Hint/Hint';

import ReadMore from 'src/components/pages/blog/ReadMore';
import { ISource } from 'src/interfaces';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { EBlogPostLanguage } from 'src/i18n/utils';
import { DragAndDropDemo } from 'src/components/pages/blog/javascript-drag-and-drop-quickly/DragAndDropDemo/DragAndDropDemo';

import styles from './post.module.scss';
import dnd_ui from 'public/assets/blog/javascript-drag-and-drop-quickly/dnd-ui.png';

const Post = (): ReactElement => {
  const title: string = 'Drag-and-drop на JavaScript быстро';
  const highlight: string =
    "Разбираемся в drag-and-drop'e на JavaScript - быстро, без лишней воды, всяких библиотек и прочего.";

  const exampleDraggableElementMarkup = `<div draggable="true">Меня можно перетаскивать</div>`;

  const exampleDroppableElementMarkup = `<div>На меня можно сбрасывать</div>
<div>И на меня можно сбрасывать</div>
<div draggable="true">Вы не поверите! На меня тоже можно сбрасывать!</div>`;

  const exampleHandlerDragStartJavaScript1 = `const handleDragStart = () => {
  // Инициализация перетаскивания
};`;

  const exampleHandlerDragOverJavaScript = `const handleDragOver = (event) => {
  event.preventDefault();
};`;

  const exampleHandlerDragStartJavaScript2 = `function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.textContent);
  event.target.style.opacity = '0.4';
}`;

  const exampleHandlerDragEndJavaScript = `function handleDragEnd(event) {
  event.target.style.opacity = '1';
}`;

  const exampleHandlersDropDragOverJavaScript = `function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
};

function handleDragOver(event) {
  event.preventDefault();
};`;

  const exampleDraggedElementJavaScript = `const draggedElement = document.querySelector('.task[style*="opacity: 0.4"]');`;

  const exampleHandlerDropJavaScript = `function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');

  const draggedElement = document.querySelector('.task[style*="opacity: 0.4"]');

  if (draggedElement) {
    draggedElement.style.opacity = '1';

    // Проверяем, куда сбрасываем: в колонку или обратно в контейнер
    if (event.target.classList.contains('column')) {
      // Сбрасываем в колонку
      event.target.appendChild(draggedElement);
    } else if (event.target === tasksContainer || event.target.classList.contains('tasks')) {
      // Сбрасываем обратно в контейнер с задачами
      tasksContainer.appendChild(draggedElement);
    }
  }
}`;

  const exampleEventListeners1JavaScript = `const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(function (task) {
  task.addEventListener('dragstart', handleDragStart);
  task.addEventListener('dragend', handleDragEnd);
});

columns.forEach(function (column) {
  column.addEventListener('drop', handleDrop);
  column.addEventListener('dragover', handleDragOver);
});`;

  const exampleEventListeners2JavaScript = `const tasksContainer = document.querySelector('.wrapper.tasks');

tasksContainer.addEventListener('drop', handleDrop);
tasksContainer.addEventListener('dragover', handleDragOver);

function handleDragOver(event) {
  // Разрешаем сброс на колонки И на контейнер задач
  if (event.target.classList.contains('column') ||
      event.target === tasksContainer ||
      event.target.classList.contains('tasks')) {
    event.preventDefault();
  }
}`;

  const example1CSS = `.wrapper {
  display: flex;
  gap: 20px;
}

.column {
  width: 33%;
  height: 100px;
  border: 2px dashed #000;
}`;

  const example2CSS = `
.tasks {
  justify-content: center;
  margin: 10px 0;
  background: grey;
  padding: 10px;
}

.task {
  padding: 5px;
  background: purple;
  color: white;
}`;

  const exampleCSS = `.wrapper {
  display: flex;
  gap: 20px;
}

.column {
  width: 33%;
  height: 100px;
  background: lightgrey;
}

.tasks {
  justify-content: center;
  margin: 10px 0;
  background: grey;
  padding: 10px;
}

.task {
  padding: 5px;
  background: purple;
  color: white;
}`;

  const exampleMarkUp1Html = `<div class="wrapper columns">
  <div class="column">
    Сделать
  </div>
  <div class="column">
    В процессе
  </div>
  <div class="column">
    Готово
  </div>
</div>
`;

  const exampleMarkUp2Html = `<div class="wrapper tasks">
  <div class="task" draggable="true">
    Сделать то
  </div>
  <div class="task" draggable="true">
    Сделать сё
  </div>
  <div class="task" draggable="true">
    Сделать пятое
  </div>
  <div class="task" draggable="true">
    Сделать десятое
  </div>
</div> `;

  const exampleMarkUpHtml = `<div class="wrapper columns">
  <div class="column">
    Сделать
  </div>
  <div class="column">
    В процессе
  </div>
  <div class="column">
    Готово
  </div>
</div>

<div class="wrapper tasks">
  <div class="task" draggable="true">
    Сделать то
  </div>
  <div class="task" draggable="true">
    Сделать сё
  </div>
  <div class="task" draggable="true">
    Сделать пятое
  </div>
  <div class="task" draggable="true">
    Сделать десятое
  </div>
</div> `;

  const exampleJavaScript = `const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');
const tasksContainer = document.querySelector('.wrapper.tasks');

function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.textContent);
  event.target.style.opacity = '0.4';
}

function handleDragEnd(event) {
  event.target.style.opacity = '1';
}

function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');

  const draggedElement = document.querySelector('.task[style*="opacity: 0.4"]');

  if (draggedElement) {
    draggedElement.style.opacity = '1';

    // Проверяем, куда сбрасываем: в колонку или обратно в контейнер
    if (event.target.classList.contains('column')) {
      // Сбрасываем в колонку
      event.target.appendChild(draggedElement);
    } else if (event.target === tasksContainer || event.target.classList.contains('tasks')) {
      // Сбрасываем обратно в контейнер с задачами
      tasksContainer.appendChild(draggedElement);
    }
  }
}

function handleDragOver(event) {
  // Разрешаем сброс на колонки И на контейнер задач
  if (event.target.classList.contains('column') ||
      event.target === tasksContainer ||
      event.target.classList.contains('tasks')) {
    event.preventDefault();
  }
}

// Вешаем обработчики на задачи
tasks.forEach(function (task) {
  task.addEventListener('dragstart', handleDragStart);
  task.addEventListener('dragend', handleDragEnd);
});

// Вешаем обработчики на колонки
columns.forEach(function (column) {
  column.addEventListener('drop', handleDrop);
  column.addEventListener('dragover', handleDragOver);
});

// Вешаем обработчики на контейнер задач
tasksContainer.addEventListener('drop', handleDrop);
tasksContainer.addEventListener('dragover', handleDragOver);`;

  const sources: Array<ISource> = [
    {
      id: nanoid(),
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
      label: 'HTML Drag and Drop API',
    },
    {
      id: nanoid(),
      link: 'https://web.dev/articles/drag-and-drop',
      label: 'The HTML5 Drag and Drop API',
    },
    {
      id: nanoid(),
      link: 'https://dtsiki.github.io/blog/drag-and-drop',
      label: 'Drag and Drop Guide',
    },
  ];

  // draggable events
  const onDragStart = () => {
    console.log('onDragStart');
  };

  const onDrag = () => {
    console.log('onDrag');
  };

  const onDragEnd = () => {
    console.log('onDragEnd');
  };

  // droppable events
  const onDragEnter = () => {
    console.log('onDragEnter');
  };

  const onDragOver = () => {
    console.log('onDragOver');
  };

  const onDragLeave = () => {
    console.log('onDragLeave');
  };

  const onDrop = () => {
    console.log('onDrop');
  };

  return (
    <>
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='tutorial'
        date='25 dec, 2025'
        tags={['JavaScript']}
        metaTags={''}
        metaDescription={''}>
        <section>
          <p>
            <Hint
              title='Drag-and-drop'
              hint='Часто пишется как «драг-н-дроп», а произносится «дрэг-энд-дроп». Переводится буквально как «тащи и бросай». Иногда ещё можно встретить аббревиатуру DND.'
            />{' '}
            - способ использования элементов на экране, при котором можно брать элементы и перетаскивать их куда-либо.
            Прямо как папки, ярлыки, файлы на рабочем столе вашего компьютера (и не только на рабочем столе).
          </p>
          <p>
            Реализовать драг-н-дроп на JavaScript можно с помощью нативного API. Этот API так и называется - Drag and
            Drop API. Нам совершенно не нужны будут никакие библиотеки, например такие популярные как React DnD или
            React Beautiful DnD.
          </p>
          <p>
            В этом уроке сделаем вместе список задач, в котором задачи можно будет перетаскивать между трёх колонок -
            «Сделать», «В процессе» и «Готово»:
          </p>
          <DragAndDropDemo />
          <p className='explanation'>
            Попробуйте перетащить любую задачу внизу окна из списка задач в любую из трёх колонок «Сделать», «В
            процессе» и «Готово». Потом попробуйте перетащить задачу обратно вниз. Так и работает драг-н-дроп, который
            будем делать в этом уроке
          </p>
          <p className='spacer top medium'>Но сперва разберём быстро небольшую теорию.</p>
        </section>
        <section>
          <h2>Элементы драг-н-дропа</h2>
          <p>В драг-н-дропе есть два вида элементов:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <div className='list__title'>Draggable или перетаскиваемые</div>
              <div className='list__footer'>элементы, которые можно взять и куда-то потащить</div>
            </li>
            <li className='list__item'>
              <div className='list__title'>
                Droppable или{' '}
                <Hint
                  title='сбрасываемые'
                  hint='Сбрасываемые - не самый лучший перевода для слова «Droppable» на русский язык. Правильнее было бы перевести как «какая-то область, куда можно сбросить или перетащить что-то». Чтобы не писать каждый раз такую длинную конструкцию будем использовать перевод сбрасываемые.'
                />{' '}
              </div>
              <div className='list__footer'>
                элементы, на которые мы можем сбросить перетаскиваемые элементы (зона сброса)
              </div>
            </li>
          </ul>
          <p>
            Как сделать элемент перетаскиваемым? Всё просто - добавить HTML-элементу флаг{' '}
            <code className='code'>draggable</code> со значением <em>true</em>:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.HTML} name='index' code={exampleDraggableElementMarkup} />
          </div>
          <p className='spacer top medium'>
            Теперь при попытке взять и перетащить такой элемент будет отображаться встроенный в ваш браузер стиль
            перетаскиваемых элементов. Скорее всего это будет просто отображение курсора в виде захвата (grab):
          </p>
          <Window pattern={WindowPatternVariant.SPRINKLES}>
            <div className={styles.draggable_example} draggable={true}>
              Меня можно перетаскивать
            </div>
          </Window>
          <p className='explanation spacer bottom medium'>
            Попробуйте взять текст и потащить куда-нибудь - появится курсор захвата. Никакие специальные стили для этого
            не были прописаны, это дефолтное поведение браузера
          </p>
          <div className={styles.post__image}>
            <Window type={WindowType.IMAGE} fileTitle={`DND_UI.jpg`}>
              <Image src={dnd_ui} layout='fixed' alt='' />
            </Window>
          </div>
          <p className='explanation'>Вот так это выглядит в моём браузере на моём ноутбуке</p>
          <p className='spacer top medium'>
            С перетаскиваемыми элементами разобрались, а как сделать элемент сбрасываемым? Всё просто - никаких флагов
            тут вообще не надо добавлять, все элементы по умолчанию позволяют сбрасывать на себя перетаскиваемые
            элементы:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.HTML} name='index' code={exampleDroppableElementMarkup} />
          </div>
          <p className='spacer top medium'>
            К сожалению, по умолчанию у сбрасываемых элементов нет никакого выделения во время драг-н-дропа - это нужно
            делать вручную. Попробуйте взять перетаскиваемый текст и перетащить в сбрасываемое окошко - увидите, что
            сбрасываемый элемент никак не меняется и не подсвечивается, в отличии от элемента, который мы перетаскиваем:
          </p>
          <Window pattern={WindowPatternVariant.SPRINKLES}>
            <div
              className={styles.draggable_example}
              draggable={true}
              onDragStart={onDragStart}
              onDrag={onDrag}
              onDragEnd={onDragEnd}>
              Меня можно перетаскивать
            </div>
            <div
              className={styles.droppable_example}
              draggable={true}
              onDragEnter={onDragEnter}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}>
              На меня можно сбрасывать
            </div>
          </Window>
          <p className='explanation'>
            Откройте консоль разработчика в своём браузере, чтобы увидеть какие события когда срабатывают
          </p>
          <p className='spacer top medium'>
            Все элементы можно сделать перетаскиваемыми и сбрасываемыми - можно перетаскивать что угодно и сбрасывать
            куда угодно. Можно добавить ограничения и тогда не всё можно будет перетаскивать и сбрасывать куда угодно, в
            зависимости от ваших вводных данных и требований, но это уже другая история.
          </p>
        </section>
        <section>
          <h2>События и обработчики</h2>
          <p>
            Плохие новости: само по себе ничего не заработает после добавления флага{' '}
            <code className='code'>draggable</code>. Вы могли это заметить в небольшом демо чуть выше - мы начинаем
            перетаскивать элемент, сбрасываем его, но он остаётся на своём исходном месте.
          </p>
          <p>
            Чтобы управлять процессом переноса элементов нам нужны будут обработчики событий. В API драг-н-дропа такие
            имеются. Все события там можно разделить грубо на две категории - события для перетаскиваемых элементов и
            события для сбрасываемых элементов. Из названия понятно, что в обработчиках каждой из категории нам нужно
            сделать что-то с элементами. Рассмотрим это более подробно.
          </p>
          <p>
            Итак, есть следующие события для перетаскиваемых элементов (которые <code className='code'>draggable</code>
            ):
          </p>
          <ol className='list ordered'>
            <li className='list_item spacer bottom medium'>
              <div className='list_title spacer bottom small'>
                <code className='code'>dragstart</code>/<code className='code'>onDragStart</code>
              </div>
              <div className='list_footer'>запускается, когда мы потащили какой-то элемент (начало перетаскивания)</div>
            </li>
            <li className='list_item spacer bottom medium'>
              <div className='list_title spacer bottom small'>
                <code className='code'>drag</code>/<code className='code'>onDrag</code>{' '}
              </div>
              <div className='list_footer'>
                запускается во время перетаскивания элемента, срабатывает многократно, пока не отпустим элемент
              </div>
            </li>
            <li className='list_item'>
              <div className='list_title spacer bottom small'>
                <code className='code'>dragend</code>/<code className='code'>onDragEnd</code>
              </div>
              <div className='list_footer'>
                запускается, когда мы отпустили перетаскиваемый элемент (конец перетаскивания)
              </div>
            </li>
          </ol>
          <p className='spacer top large'>
            И для сбрасываемых элементов (которые <code className='code'>droppable</code>) есть вот такие события:
          </p>
          <ol className='list ordered'>
            <li className='list_item spacer bottom medium'>
              <div className='list_title spacer bottom small'>
                <code className='code'>dragenter</code>/<code className='code'>onDragEnter</code>
              </div>
              <div className='list_footer'> перетаскиваемый элемент попал в область сбрасываемого элемента</div>
            </li>
            <li className='list_item spacer bottom medium'>
              <div className='list_title spacer bottom small'>
                <code className='code'>dragover</code>/<code className='code'>onDragOver</code>
              </div>
              <div className='list_footer'>
                запускается всё время пока перетаскиваемый элемент находится в области сбрасываемого, срабатывает
                многократно
              </div>
            </li>
            <li className='list_item'>
              <div className='list_title spacer bottom small'>
                <code className='code'>leave</code>/<code className='code'>onDragLeave</code> и{' '}
                <code className='code'>drop</code>/<code className='code'>onDrop</code>
              </div>
              <div className='list_footer'>
                первый запускается когда перетаскиваемый элемент покинул зону сбрасывания, второй - когда элемент был
                сброшен в сбрасываемую зону
              </div>
            </li>
          </ol>
          <p className='note spacer top botton medium'>
            Чтобы лучше понять за что отвечает каждое событие, предлагаю открыть консоль в браузере и поперетаскивать
            элемент в демо выше. В логах консоли вы увидите сообщения, которые будут выводиться в зависимости от того,
            какое событие будет срабатывать.
          </p>
          <p className='spacer top large'>
            В нашем простом примере со списком задач нам потребуются не все эти события, а только часть из них. Прежде
            всего для перетаскиваемых элементов нам потребуется два события - <code className='code'>onDragStart</code>{' '}
            и <code className='code'>onDragEnd</code>.
          </p>
          <p>
            С помощью <code className='code'>onDragStart</code> будем иницилизировать процесс перетаскивания:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleHandlerDragStartJavaScript1} />
          </div>
          <p className='spacer top medium'>
            О том, что же именно нужно делать в этой инициализации будет рассказано чуть ниже.
          </p>
          <p>
            Второй обработчик <code className='code'>onDragEnd</code> понадобится только для визуала - с помощью этого
            события сделаем интерфейс драг-н-дропа более понятным. Об этом тоже чуть ниже.
          </p>
          <p className='spacer top large'>
            Для сбрасываемых элементов понадобится тоже два обработчика - <code className='code'>onDrop</code> и{' '}
            <code className='code'>onDragOver</code>. В <code className='code'>onDrop</code> будет обрабатываться сброс
            и как мы будем это делать рассмотрим чуть ниже, а вот <code className='code'>onDragOver</code> нужен будет
            только для того, чтобы предотвратить поведение браузера по умолчанию с помощью метода{' '}
            <code className='code'>preventDefault()</code>. Если вы забудете указать обработчик{' '}
            <code className='code'>onDragOver</code> с отменой стандартного поведения браузера, то обработчик{' '}
            <code className='code'>onDrop</code> не будет работать.
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleHandlerDragOverJavaScript} />
          </div>
          <p className='spacer top medium'>
            Передаваемый объект в обработчики <code className='code'>event</code> будет объектом типа{' '}
            <code className='code'>DragEvent</code>, который наследует свойства от{' '}
            <code className='code'>MouseEvent</code> и соответственно типа <code className='code'>Event</code>. Нам это
            очень пригодится в дальнейшем.
          </p>
        </section>
        <section>
          <h2>Верстаем</h2>
          <p>
            С теорией всё, займёмся практикой и сперва чуть-чуть поверстаем. Нам нужен будет какой-то контейнер, в
            котором будет три колонки со статусом задач - «Сделать», «В процессе» и «Готово». Эти три колонки будут
            зонами сброса или droppable элементами:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code language={CodeLanguage.HTML} name='index' code={exampleMarkUp1Html} />
              </div>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code language={CodeLanguage.CSS} name='index' code={example1CSS} />
              </div>
            </div>
          </div>
          <p className='spacer top medium'>
            Под колонками со статусами разместим область с задачами - это будут наши перетаскиваемые или draggable
            элементы. Для них тоже нужен будет какой-то контейнер - эта область тоже будет зоной сброса, если мы захотим
            убрать задачу из любой колонки:
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code language={CodeLanguage.HTML} name='index' code={exampleMarkUp2Html} />
              </div>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code language={CodeLanguage.CSS} name='index' code={example2CSS} />
              </div>
            </div>
          </div>
          <p className='spacer top bottom medium'>CSS-стили здесь и ниже могут быть какими ваша душа пожелает.</p>
          <p className='spacer bottom medium'>
            Обратите внимание, что список задач и колонки находятся в разных контейнерах - не обязательно, чтобы
            перетаскиваемые и сбрасываемые элементы находились на одном уровне. На самом деле эти области могут
            находитmся на совершенно разных уровнях вложенности в DOM-дереве.
          </p>
          <p>В итоге HTML-разметка и CSS-стили будет выглядеть так:</p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code language={CodeLanguage.HTML} name='index' code={exampleMarkUpHtml} />
              </div>
              <div className='col col--50 col--tablet-50 col--mobile-50'>
                <Code language={CodeLanguage.CSS} name='index' code={exampleCSS} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Пишем JavaScript</h2>
          <p>Приступим к самой интересной части, попишем чуть-чуть на JavaScript.</p>
          <p>
            Когда мы начинаем перетаскивать элемент нам обязательно нужно проинициализировать данные, мы уже затрагивали
            это. Как это сделать? Нужно как-то пометить какую из задач мы начали перетаскивать. Будем делать это в
            обработчике <code className='code'>handleDragStart</code>.
          </p>
          <p>
            В этот обработчик мы передаём объект <code className='code'>event</code>, который, как было сказано выше,
            является типом <code className='code'>DragEvent</code>. У него есть объект{' '}
            <code className='code'>dataTransfer</code>, который поможет нам связать перетаскиваемый элемент и
            сбрасываемый. Для этого нам воспользуемся методом, который предоставляет нам{' '}
            <code className='code'>dataTransfer</code> - <code className='code'>setData()</code>. Он
            позволяет передавать данные между перетаскиваемым элементом и зоной сброса.{' '}
            <code className='code'>dataTransfer</code> может хранить только строки. С помощью этого метода мы запишем
            информацию о задаче, которую мы начали перетаскивать, в нашем простом примере это просто сама задача. Не
            будем здесь хитрить и просто передадим текст элемента. Достать его можно из
            <code className='code'>event.target</code>, подойдёт <code className='code'>textContent</code> или{' '}
            <code className='code'>innerHTML</code>:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleHandlerDragStartJavaScript2} />
          </div>
          <p className='spacer top medium'>
            Помимо передачи данных, тут же изменим прозрачность перетаскиваемой задачи, чтобы визуально было видно какая
            из множества задач сейчас перетаскивается. Также изменение прозрачности нам поможет найти нужную задачу,
            когда нам это потребуется ниже, избавив от необходимости прописывать какие-либо дополнительные атрибуты или
            идентификаторы задачам и колонкам.
          </p>
          <p>
            Раз уже мы меняем прозрачность перетаскиваемого элемента, надо где-то возвращать её назад, верно? А когда её
            возвращать назад? Правильно, когда мы сбрасываем задачу:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleHandlerDragEndJavaScript} />
          </div>
          <p className='spacer top bottom medium'>
            Теперь займёмся обработчиком сброса <code className='code'>handleDrop</code>. В{' '}
            <code className='code'>handleDragStart</code> мы записали информацию, а тут будем её читать. В этом нам
            поможет снова объект<code className='code'>dataTransfer</code>. Раз есть метод записи{' '}
            <code className='code'>setData</code>, значит есть и метод для чтения -{' '}
            <code className='code'>getData()</code>. Обязательно отключим снова поведение браузера по умолчанию здесь с
            помощью <code className='code'>preventDefault()</code>. Обработчик{' '}
            <code className='code'>handleDragOver</code> пока останется таким, каким мы его написали выше, чуть позже
            доработаем его под наши нужды. Вот что у нас получается:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleHandlersDropDragOverJavaScript} />
          </div>
          <p className='spacer top medium'>
            Пока что драг-н-дроп не будет работать. Мы просто записываем задачу когда начинаем перетаскивать её и
            читаем, когда сбрасываем.{' '}
          </p>
          <p>
            Теперь важно вспомнить, что, задачи можно перетаскивать как из области задач, так и между колонкам, а также
            задачи можно всегда вернуть обратно в область задач.{' '}
          </p>
          <p>Поэтому, чтобы интерфейс заработал, нам нужно:</p>
          <ol className='list ordered'>
            <li className='list__item'>
              Когда перетащили задачу и сбросили её - убрать её оттуда, откуда её начали перетаскивать (т.е. убрать как
              из колонки так и из области задач)
            </li>
            <li className='list__item'>
              Когда перетащили задачу и сбросили её - вставить туда куда сбросили (т.е. вставить как в колонку, там и в
              область задач)
            </li>
          </ol>
          <p>
            Тут нам и пригодится трюк с прозрачностью. Выше мы уже добавили прозрачность{' '}
            <code className='code'>opacity = '0.4'</code> задаче, которую начали перетаскивать. Теперь мы можем
            воспользоваться этим свойством и быстро найти перетаскивемую задачу следующим образом:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleDraggedElementJavaScript} />
          </div>
          <p className='spacer top medium'>Обновим наш обработчик сброса, держа в голове ТЗ выше:</p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleHandlerDropJavaScript} />
          </div>
          <p className='spacer top medium'>
            Пока что у нас есть только обработчики. Нужно подписаться на них. Сделаем это классическим способом - с
            помощью метода <code className='code'>querySelectorAll</code> получим список всех задач и колонок, а потом
            пройдёмся по этим массивам методом перебора <code className='code'>forEach</code> и подпишемся на нужные
            обработчики задач и колонок:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleEventListeners1JavaScript} />
          </div>
          <p className='spacer top medium'>
            Забыли про возврат задач в область задач! Сейчас быстренько исправим. Аналогичным образом получим контейнер
            области задач и подпишем его на такие же обработчики, как и у колонок, но чуть-чуть модернизируем
            <code>handleDragOver</code>:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleEventListeners2JavaScript} />
          </div>
          <p className='spacer top medium'>
            Собираем всё вместе. Разметка будет выглядеть так (тут ничего не изменилось с самого начала):
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.HTML} name='index' code={exampleMarkUpHtml} />
          </div>
          <p className='spacer top medium'>
            Разметку CSS здесь не буду прикладывать т.к. она совершенно не влияет на работоспособность кода и вы можете
            стилизовать список задач как ваша душа захочет. И, наконец-то, JavaScript:
          </p>
          <div className='col col--100 col--tablet-100 col--mobile-100'>
            <Code language={CodeLanguage.JAVASCRIPT} name='index' code={exampleJavaScript} />
          </div>
          <p className='spacer top bottom large'>
            Вы можете перейти по{' '}
            <ExternalLink label='ссылке в песочницу на Codepen' href='https://codepen.io/thevioletmaniac/pen/RNrebRR' />
            , чтобы вживую потыкать сделанный в этом уроке список задач с нативным драг-н-дропом на JavaScript.{' '}
          </p>
          <ReadMore items={sources} language={EBlogPostLanguage.RU} />
        </section>
      </PostLayout>
    </>
  );
};

export default Post;
