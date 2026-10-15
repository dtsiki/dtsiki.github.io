(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{33711:e=>{e.exports={post__snippet:"javascript-drag-and-drop-quickly_post__snippet__cHmqm",post__image:"javascript-drag-and-drop-quickly_post__image__2mufS",dnd_wrapper:"javascript-drag-and-drop-quickly_dnd_wrapper__q_RJI",dnd_column:"javascript-drag-and-drop-quickly_dnd_column__vdfZ_",dnd_column_title:"javascript-drag-and-drop-quickly_dnd_column_title__PVXgo",dnd_tasks:"javascript-drag-and-drop-quickly_dnd_tasks__BCCla",dnd_task:"javascript-drag-and-drop-quickly_dnd_task__N6Fly",example_wrapper:"javascript-drag-and-drop-quickly_example_wrapper__QnATj",draggable_example:"javascript-drag-and-drop-quickly_draggable_example__WK44p",droppable_example:"javascript-drag-and-drop-quickly_droppable_example__pkSzZ"}},51039:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>C});var d=s(37876),l=s(46512),n=s(12062),t=s(32842),r=s(15039),c=s.n(r),o=s(85335),i=s(81010),m=s(14232),p=s(51443),g=s.n(p);let x=({title:e})=>{let[a,s]=(0,m.useState)(!1);return(0,d.jsx)("div",{draggable:!0,id:e,className:g().draggable_element,style:{opacity:a?.4:1},onDragStart:a=>{a.dataTransfer.setData("text",e),s(!0)},onDragEnd:()=>void s(!1),children:e})},h=({children:e,className:a})=>{let s=(0,m.useRef)(null);return(0,d.jsx)("div",{ref:s,className:a,onDragOver:e=>{e.preventDefault()},onDrop:e=>{let a,d;return e.preventDefault(),a=e.dataTransfer.getData("text"),d=document.getElementById(a),void(console.log("drop",a,d),s?.current?.appendChild(d))},children:e})};var j=s(57141),v=s.n(j);let _=()=>{let e=c().bind(v());return(0,d.jsx)(o.p,{type:i.gz.CUSTOM,pattern:i.J$.SPRINKLES,title:"Cписок задач [DEMO]",children:(0,d.jsxs)("div",{className:v().dnd_demo,children:[(0,d.jsx)("div",{className:e(v().dnd_demo__wrapper,v().dnd_demo__columns),children:["Сделать","В процессе","Готово"].map(e=>(0,d.jsx)(h,{className:v().dnd_demo__column,children:(0,d.jsx)("div",{className:v().dnd_demo__column_title,children:e})},e))}),(0,d.jsx)(h,{className:e(v().dnd_demo__wrapper,v().dnd_demo__tasks),children:["Сделать то","Сделать сё","Сделать пятое","Сделать десятое"].map(e=>(0,d.jsx)(x,{title:e},e))})]})})};var u=s(83577),N=s(27689),D=s(5351),k=s(28948),f=s(56410),b=s(54666),S=s(51874),E=s(37339),y=s(33711),A=s.n(y);let C=()=>{let e=`<div>На меня можно сбрасывать</div>
<div>И на меня можно сбрасывать</div>
<div draggable="true">Вы не поверите! На меня тоже можно сбрасывать!</div>`,a=`const handleDragStart = () => {
  // Инициализация перетаскивания
};`,s=`const handleDragOver = (event) => {
  event.preventDefault();
};`,r=`function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.target.style.opacity = "0.4";
}`,c=`function handleDragEnd(event) {
  event.target.style.opacity = "1";
}`,m=`function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
};

function handleDragOver(event) {
  event.preventDefault();
};`,p=`function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");

  const draggedElement = document.querySelector(".task[style*="opacity: 0.4"]");

  if (draggedElement) {
    draggedElement.style.opacity = "1";

    // Проверяем, куда сбрасываем: в колонку или обратно в контейнер
    if (event.target.classList.contains("column")) {
      // Сбрасываем в колонку
      event.target.appendChild(draggedElement);
    } else if (event.target === tasksContainer || event.target.classList.contains("tasks")) {
      // Сбрасываем обратно в контейнер с задачами
      tasksContainer.appendChild(draggedElement);
    }
  }
}`,g=`const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

tasks.forEach(function (task) {
  task.addEventListener("dragstart", handleDragStart);
  task.addEventListener("dragend", handleDragEnd);
});

columns.forEach(function (column) {
  column.addEventListener("drop", handleDrop);
  column.addEventListener("dragover", handleDragOver);
});`,x=`const tasksContainer = document.querySelector(".wrapper.tasks");

tasksContainer.addEventListener("drop", handleDrop);
tasksContainer.addEventListener("dragover", handleDragOver);

function handleDragOver(event) {
  // Разрешаем сброс на колонки И на контейнер задач
  if (event.target.classList.contains("column") ||
      event.target === tasksContainer ||
      event.target.classList.contains("tasks")) {
    event.preventDefault();
  }
}`,h=`.wrapper {
  display: flex;
  gap: 20px;
}

.column {
  width: 33%;
  height: 100px;
  border: 2px dashed #000;
}`,j=`
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
}`,v=`.wrapper {
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
}`,y=`<div class="wrapper columns">
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
`,C=`<div class="wrapper tasks">
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
</div> `,P=`<div class="wrapper columns">
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
</div> `,T=`const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");
const tasksContainer = document.querySelector(".wrapper.tasks");

function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.textContent);
  event.target.style.opacity = "0.4";
}

function handleDragEnd(event) {
  event.target.style.opacity = "1";
}

function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");

  const draggedElement = document.querySelector(".task[style*="opacity: 0.4"]");

  if (draggedElement) {
    draggedElement.style.opacity = "1";

    // Проверяем, куда сбрасываем: в колонку или обратно в контейнер
    if (event.target.classList.contains("column")) {
      // Сбрасываем в колонку
      event.target.appendChild(draggedElement);
    } else if (event.target === tasksContainer || event.target.classList.contains("tasks")) {
      // Сбрасываем обратно в контейнер с задачами
      tasksContainer.appendChild(draggedElement);
    }
  }
}

function handleDragOver(event) {
  // Разрешаем сброс на колонки И на контейнер задач
  if (event.target.classList.contains("column") ||
      event.target === tasksContainer ||
      event.target.classList.contains("tasks")) {
    event.preventDefault();
  }
}

// Вешаем обработчики на задачи
tasks.forEach(function (task) {
  task.addEventListener("dragstart", handleDragStart);
  task.addEventListener("dragend", handleDragEnd);
});

// Вешаем обработчики на колонки
columns.forEach(function (column) {
  column.addEventListener("drop", handleDrop);
  column.addEventListener("dragover", handleDragOver);
});

// Вешаем обработчики на контейнер задач
tasksContainer.addEventListener("drop", handleDrop);
tasksContainer.addEventListener("dragover", handleDragOver);`,L=[{id:(0,l.Ak)(),link:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",label:"HTML Drag and Drop API"},{id:(0,l.Ak)(),link:"https://web.dev/articles/drag-and-drop",label:"The HTML5 Drag and Drop API"},{id:(0,l.Ak)(),link:"https://dtsiki.github.io/blog/drag-and-drop",label:"Drag and Drop Guide"}];return(0,d.jsxs)(u.o,{postConfig:N.KG[N.Zr.JAVASCRIPT_DRAG_AND_DROP_QUICKLY],heroConfig:{size:E.Xd.SMALL,pattern:E.Uy.SPRINKLES},children:[(0,d.jsxs)("section",{className:"section outer",children:[(0,d.jsxs)("p",{children:[(0,d.jsx)(t.V,{title:"Drag-and-drop",hint:"Часто пишется как \xabдраг-н-дроп\xbb, а произносится \xabдрэг-энд-дроп\xbb. Переводится буквально как \xabтащи и бросай\xbb. Иногда ещё можно встретить аббревиатуру DND."})," ","— способ использования элементов на экране, при котором можно брать элементы и перетаскивать их куда-либо. Прямо как папки, ярлыки, файлы на рабочем столе вашего компьютера (и не только на рабочем столе)."]}),(0,d.jsx)("p",{children:"Реализовать драг-н-дроп на JavaScript можно с помощью нативного API. Этот API так и называется — Drag and Drop API. Нам совершенно не нужны будут никакие библиотеки, например такие популярные как React DnD или React Beautiful DnD."}),(0,d.jsx)("p",{children:"В этом уроке сделаем вместе список задач, в котором задачи можно будет перетаскивать между трёх колонок - \xabСделать\xbb, \xabВ процессе\xbb и \xabГотово\xbb:"}),(0,d.jsx)(_,{}),(0,d.jsx)("p",{className:"explanation",children:"Попробуйте перетащить любую задачу внизу окна из списка задач в любую из трёх колонок \xabСделать\xbb, \xabВ процессе\xbb и \xabГотово\xbb. Потом попробуйте перетащить задачу обратно вниз. Так и работает драг-н-дроп, который будем делать в этом уроке"}),(0,d.jsx)("p",{className:"spacer top medium",children:"Но сперва разберём быстро небольшую теорию."})]}),(0,d.jsxs)("section",{className:"section outer",children:[(0,d.jsx)("h2",{children:"Элементы драг-н-дропа"}),(0,d.jsx)("p",{children:"В драг-н-дропе есть два вида элементов:"}),(0,d.jsxs)("ul",{className:"list markered",children:[(0,d.jsxs)("li",{className:"list__item",children:[(0,d.jsx)("div",{className:"list__title",children:"Draggable или перетаскиваемые"}),(0,d.jsx)("div",{className:"list__footer",children:"элементы, которые можно взять и куда-то потащить"})]}),(0,d.jsxs)("li",{className:"list__item",children:[(0,d.jsxs)("div",{className:"list__title",children:["Droppable или"," ",(0,d.jsx)(t.V,{title:"сбрасываемые",hint:"Сбрасываемые - не самый лучший перевода для слова \xabDroppable\xbb на русский язык. Правильнее было бы перевести как \xabкакая-то область, куда можно сбросить или перетащить что-то\xbb. Чтобы не писать каждый раз такую длинную конструкцию будем использовать перевод сбрасываемые."})," "]}),(0,d.jsx)("div",{className:"list__footer",children:"элементы, на которые мы можем сбросить перетаскиваемые элементы (зона сброса)"})]})]}),(0,d.jsxs)("p",{children:["Как сделать элемент перетаскиваемым? Всё просто — добавить HTML-элементу флаг"," ",(0,d.jsx)("code",{className:"code",children:"draggable"})," со значением ",(0,d.jsx)("em",{children:"true"}),":"]}),(0,d.jsx)(D.z,{lang:k.Pl.HTML,name:"index",code:'<div draggable="true">Меня можно перетаскивать</div>'}),(0,d.jsx)("p",{className:"spacer top medium",children:"Теперь при попытке взять и перетащить такой элемент будет отображаться встроенный в ваш браузер стиль перетаскиваемых элементов. Скорее всего это будет просто отображение курсора в виде захвата (grab):"}),(0,d.jsx)(o.p,{pattern:i.J$.SPRINKLES,type:i.gz.CUSTOM,children:(0,d.jsx)("div",{className:A().example_wrapper,children:(0,d.jsx)("div",{className:A().draggable_example,draggable:!0,children:"Меня можно перетаскивать"})})}),(0,d.jsx)("p",{className:"explanation spacer bottom medium",children:"Попробуйте взять текст и потащить куда-нибудь - появится курсор захвата. Никакие специальные стили для этого не были прописаны, это дефолтное поведение браузера"}),(0,d.jsx)(f.W,{fileTitle:"DND_UI.jpg",src:"/assets/blog/javascript-drag-and-drop-quickly/dnd-ui.png",alt:""}),(0,d.jsx)("p",{className:"explanation",children:"Вот так это выглядит в моём браузере на моём ноутбуке"}),(0,d.jsx)("p",{className:"spacer top medium",children:"С перетаскиваемыми элементами разобрались, чтобы сделать элемент сбрасываемым никаких флагов вообще не надо добавлять, все элементы по умолчанию позволяют сбрасывать на себя перетаскиваемые элементы:"}),(0,d.jsx)(D.z,{lang:k.Pl.HTML,name:"index",code:e}),(0,d.jsx)("p",{className:"spacer top medium",children:"К сожалению, по умолчанию у сбрасываемых элементов нет никакого выделения во время драг-н-дропа — это нужно делать вручную. Попробуйте взять перетаскиваемый текст и перетащить в сбрасываемое окошко — увидите, что сбрасываемый элемент никак не меняется и не подсвечивается, в отличии от элемента, который мы перетаскиваем:"}),(0,d.jsx)(o.p,{pattern:i.J$.SPRINKLES,type:i.gz.CUSTOM,children:(0,d.jsxs)("div",{className:A().example_wrapper,children:[(0,d.jsx)("div",{className:A().draggable_example,draggable:!0,onDragStart:()=>{console.log("onDragStart")},onDrag:()=>{console.log("onDrag")},onDragEnd:()=>{console.log("onDragEnd")},children:"Меня можно перетаскивать"}),(0,d.jsx)("div",{className:A().droppable_example,draggable:!0,onDragEnter:()=>{console.log("onDragEnter")},onDragOver:()=>{console.log("onDragOver")},onDragLeave:()=>{console.log("onDragLeave")},onDrop:()=>{console.log("onDrop")},children:"На меня можно сбрасывать"})]})}),(0,d.jsx)("p",{className:"explanation",children:"Откройте консоль разработчика в своём браузере, чтобы увидеть какие события когда срабатывают"}),(0,d.jsx)("p",{className:"spacer top medium",children:"Все элементы можно сделать перетаскиваемыми и сбрасываемыми - можно перетаскивать что угодно и сбрасывать куда угодно. Можно добавить ограничения и тогда не всё можно будет перетаскивать и сбрасывать куда угодно, в зависимости от ваших вводных данных и требований, но это уже другая история."})]}),(0,d.jsxs)("section",{className:"section outer",children:[(0,d.jsx)("h2",{children:"События и обработчики"}),(0,d.jsxs)("p",{children:["Плохие новости: само по себе ничего не заработает после добавления флага"," ",(0,d.jsx)("code",{className:"code",children:"draggable"}),". Вы могли это заметить в небольшом демо чуть выше - мы начинаем перетаскивать элемент, сбрасываем его, но он остаётся на своём исходном месте."]}),(0,d.jsx)("p",{children:"Чтобы управлять процессом переноса элементов нам нужны будут обработчики событий. В API драг-н-дропа такие имеются. Все события там можно разделить грубо на две категории — события для перетаскиваемых элементов и события для сбрасываемых элементов. Из названия понятно, что в обработчиках каждой из категории нам нужно сделать что-то с элементами. Рассмотрим это более подробно."}),(0,d.jsxs)("p",{children:["Итак, есть следующие события для перетаскиваемых элементов (которые ",(0,d.jsx)("code",{className:"code",children:"draggable"}),"):"]}),(0,d.jsxs)("ol",{className:"list ordered",children:[(0,d.jsxs)("li",{className:"list_item spacer bottom medium",children:[(0,d.jsxs)("div",{className:"list_title spacer bottom small",children:[(0,d.jsx)("code",{className:"code",children:"dragstart"}),"/",(0,d.jsx)("code",{className:"code",children:"onDragStart"})]}),(0,d.jsx)("div",{className:"list_footer",children:"запускается, когда мы потащили какой-то элемент (начало перетаскивания)"})]}),(0,d.jsxs)("li",{className:"list_item spacer bottom medium",children:[(0,d.jsxs)("div",{className:"list_title spacer bottom small",children:[(0,d.jsx)("code",{className:"code",children:"drag"}),"/",(0,d.jsx)("code",{className:"code",children:"onDrag"})," "]}),(0,d.jsx)("div",{className:"list_footer",children:"запускается во время перетаскивания элемента, срабатывает многократно, пока не отпустим элемент"})]}),(0,d.jsxs)("li",{className:"list_item",children:[(0,d.jsxs)("div",{className:"list_title spacer bottom small",children:[(0,d.jsx)("code",{className:"code",children:"dragend"}),"/",(0,d.jsx)("code",{className:"code",children:"onDragEnd"})]}),(0,d.jsx)("div",{className:"list_footer",children:"запускается, когда мы отпустили перетаскиваемый элемент (конец перетаскивания)"})]})]}),(0,d.jsxs)("p",{className:"spacer top large",children:["И для сбрасываемых элементов (которые ",(0,d.jsx)("code",{className:"code",children:"droppable"}),") есть вот такие события:"]}),(0,d.jsxs)("ol",{className:"list ordered",children:[(0,d.jsxs)("li",{className:"list_item spacer bottom medium",children:[(0,d.jsxs)("div",{className:"list_title spacer bottom small",children:[(0,d.jsx)("code",{className:"code",children:"dragenter"}),"/",(0,d.jsx)("code",{className:"code",children:"onDragEnter"})]}),(0,d.jsx)("div",{className:"list_footer",children:" перетаскиваемый элемент попал в область сбрасываемого элемента"})]}),(0,d.jsxs)("li",{className:"list_item spacer bottom medium",children:[(0,d.jsxs)("div",{className:"list_title spacer bottom small",children:[(0,d.jsx)("code",{className:"code",children:"dragover"}),"/",(0,d.jsx)("code",{className:"code",children:"onDragOver"})]}),(0,d.jsx)("div",{className:"list_footer",children:"запускается всё время пока перетаскиваемый элемент находится в области сбрасываемого, срабатывает многократно"})]}),(0,d.jsxs)("li",{className:"list_item",children:[(0,d.jsxs)("div",{className:"list_title spacer bottom small",children:[(0,d.jsx)("code",{className:"code",children:"leave"}),"/",(0,d.jsx)("code",{className:"code",children:"onDragLeave"})," и"," ",(0,d.jsx)("code",{className:"code",children:"drop"}),"/",(0,d.jsx)("code",{className:"code",children:"onDrop"})]}),(0,d.jsx)("div",{className:"list_footer",children:"первый запускается когда перетаскиваемый элемент покинул зону сбрасывания, второй - когда элемент был сброшен в сбрасываемую зону"})]})]}),(0,d.jsx)("p",{className:"note spacer top botton medium",children:"Чтобы лучше понять за что отвечает каждое событие, предлагаю открыть консоль в браузере и поперетаскивать элемент в демо выше. В логах консоли вы увидите сообщения, которые будут выводиться в зависимости от того, какое событие будет срабатывать."}),(0,d.jsxs)("p",{className:"spacer top large",children:["В нашем простом примере со списком задач нам потребуются не все эти события, а только часть из них. Прежде всего для перетаскиваемых элементов нам потребуется два события - ",(0,d.jsx)("code",{className:"code",children:"onDragStart"})," и"," ",(0,d.jsx)("code",{className:"code",children:"onDragEnd"}),"."]}),(0,d.jsxs)("p",{children:["С помощью ",(0,d.jsx)("code",{className:"code",children:"onDragStart"})," будем иницилизировать процесс перетаскивания:"]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:a}),(0,d.jsx)("p",{className:"spacer top medium",children:"О том, что же именно нужно делать в этой инициализации будет рассказано чуть ниже."}),(0,d.jsxs)("p",{children:["Второй обработчик ",(0,d.jsx)("code",{className:"code",children:"onDragEnd"})," понадобится только для визуала - с помощью этого события сделаем интерфейс драг-н-дропа более понятным. Об этом тоже чуть ниже."]}),(0,d.jsxs)("p",{className:"spacer top large",children:["Для сбрасываемых элементов понадобится тоже два обработчика - ",(0,d.jsx)("code",{className:"code",children:"onDrop"})," и"," ",(0,d.jsx)("code",{className:"code",children:"onDragOver"}),". В ",(0,d.jsx)("code",{className:"code",children:"onDrop"})," будет обрабатываться сброс и как мы будем это делать рассмотрим чуть ниже, а вот ",(0,d.jsx)("code",{className:"code",children:"onDragOver"})," нужен будет только для того, чтобы предотвратить поведение браузера по умолчанию с помощью метода"," ",(0,d.jsx)("code",{className:"code",children:"preventDefault()"}),". Если вы забудете указать обработчик"," ",(0,d.jsx)("code",{className:"code",children:"onDragOver"})," с отменой стандартного поведения браузера, то обработчик"," ",(0,d.jsx)("code",{className:"code",children:"onDrop"})," не будет работать."]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:s}),(0,d.jsxs)("p",{className:"spacer top medium",children:["Передаваемый объект в обработчики ",(0,d.jsx)("code",{className:"code",children:"event"})," будет объектом типа"," ",(0,d.jsx)("code",{className:"code",children:"DragEvent"}),", который наследует свойства от"," ",(0,d.jsx)("code",{className:"code",children:"MouseEvent"})," и соответственно типа ",(0,d.jsx)("code",{className:"code",children:"Event"}),". Нам это очень пригодится в дальнейшем."]})]}),(0,d.jsxs)("section",{className:"section outer",children:[(0,d.jsx)("h2",{children:"Верстаем"}),(0,d.jsx)("p",{children:"С теорией всё, займёмся практикой и сперва чуть-чуть поверстаем. Нам нужен будет какой-то контейнер, в котором будет три колонки со статусом задач - \xabСделать\xbb, \xabВ процессе\xbb и \xabГотово\xbb. Эти три колонки будут зонами сброса или droppable элементами:"}),(0,d.jsx)(b.k,{code:[y,h],lang:[k.Pl.HTML,k.Pl.CSS]}),(0,d.jsx)("p",{className:"spacer top medium",children:"Под колонками со статусами разместим область с задачами - это будут наши перетаскиваемые или draggable элементы. Для них тоже нужен будет какой-то контейнер - эта область тоже будет зоной сброса, если мы захотим убрать задачу из любой колонки:"}),(0,d.jsx)(b.k,{code:[C,j],lang:[k.Pl.HTML,k.Pl.CSS]}),(0,d.jsx)("p",{className:"spacer top bottom medium",children:"CSS-стили здесь и ниже могут быть какими ваша душа пожелает."}),(0,d.jsx)("p",{className:"spacer bottom medium",children:"Обратите внимание, что список задач и колонки находятся в разных контейнерах - не обязательно, чтобы перетаскиваемые и сбрасываемые элементы находились на одном уровне. На самом деле эти области могут находитmся на совершенно разных уровнях вложенности в DOM-дереве."}),(0,d.jsx)("p",{children:"В итоге HTML-разметка и CSS-стили будет выглядеть так:"}),(0,d.jsx)(b.k,{code:[P,v],lang:[k.Pl.HTML,k.Pl.CSS]})]}),(0,d.jsxs)("section",{className:"section outer",children:[(0,d.jsx)("h2",{children:"Пишем JavaScript"}),(0,d.jsx)("p",{children:"Приступим к самой интересной части, попишем чуть-чуть на JavaScript."}),(0,d.jsxs)("p",{children:["Когда мы начинаем перетаскивать элемент нам обязательно нужно проинициализировать данные, мы уже затрагивали это. Как это сделать? Нужно как-то пометить какую из задач мы начали перетаскивать. Будем делать это в обработчике ",(0,d.jsx)("code",{className:"code",children:"handleDragStart"}),"."]}),(0,d.jsxs)("p",{children:["В этот обработчик мы передаём объект ",(0,d.jsx)("code",{className:"code",children:"event"}),", который, как было сказано выше, является типом ",(0,d.jsx)("code",{className:"code",children:"DragEvent"}),". У него есть объект"," ",(0,d.jsx)("code",{className:"code",children:"dataTransfer"}),", который поможет нам связать перетаскиваемый элемент и сбрасываемый. Для этого нам воспользуемся методом, который предоставляет нам"," ",(0,d.jsx)("code",{className:"code",children:"dataTransfer"})," - ",(0,d.jsx)("code",{className:"code",children:"setData()"}),". Он позволяет\xa0передавать данные между перетаскиваемым элементом и зоной сброса. ",(0,d.jsx)("code",{className:"code",children:"dataTransfer"}),"\xa0может хранить только строки. С помощью этого метода мы запишем информацию о задаче, которую мы начали перетаскивать, в нашем простом примере это просто сама задача. Не будем здесь хитрить и просто передадим текст элемента. Достать его можно из",(0,d.jsx)("code",{className:"code",children:"event.target"}),", подойдёт ",(0,d.jsx)("code",{className:"code",children:"textContent"})," или"," ",(0,d.jsx)("code",{className:"code",children:"innerHTML"}),":"]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:r}),(0,d.jsx)("p",{className:"spacer top medium",children:"Помимо передачи данных, тут же изменим прозрачность перетаскиваемой задачи, чтобы визуально было видно какая из множества задач сейчас перетаскивается. Также изменение прозрачности нам поможет найти нужную задачу, когда нам это потребуется ниже, избавив от необходимости прописывать какие-либо дополнительные атрибуты или идентификаторы задачам и колонкам."}),(0,d.jsx)("p",{children:"Раз уже мы меняем прозрачность перетаскиваемого элемента, надо где-то возвращать её назад, верно? А когда её возвращать назад? Правильно, когда мы сбрасываем задачу:"}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:c}),(0,d.jsxs)("p",{className:"spacer top bottom medium",children:["Теперь займёмся обработчиком сброса ",(0,d.jsx)("code",{className:"code",children:"handleDrop"}),". В"," ",(0,d.jsx)("code",{className:"code",children:"handleDragStart"})," мы записали информацию, а тут будем её читать. В этом нам поможет снова объект",(0,d.jsx)("code",{className:"code",children:"dataTransfer"}),". Раз есть метод записи"," ",(0,d.jsx)("code",{className:"code",children:"setData"}),", значит есть и метод для чтения -"," ",(0,d.jsx)("code",{className:"code",children:"getData()"}),". Обязательно отключим снова поведение браузера по умолчанию здесь с помощью ",(0,d.jsx)("code",{className:"code",children:"preventDefault()"}),". Обработчик"," ",(0,d.jsx)("code",{className:"code",children:"handleDragOver"})," пока останется таким, каким мы его написали выше, чуть позже доработаем его под наши нужды. Вот что у нас получается:"]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:m}),(0,d.jsxs)("p",{className:"spacer top medium",children:["Пока что драг-н-дроп не будет работать. Мы просто записываем задачу когда начинаем перетаскивать её и читаем, когда сбрасываем."," "]}),(0,d.jsxs)("p",{children:["Теперь важно вспомнить, что, задачи можно перетаскивать как из области задач, так и между колонкам, а также задачи можно всегда вернуть обратно в область задач."," "]}),(0,d.jsx)("p",{children:"Поэтому, чтобы интерфейс заработал, нам нужно:"}),(0,d.jsxs)("ol",{className:"list ordered",children:[(0,d.jsx)("li",{className:"list__item",children:"Когда перетащили задачу и сбросили её - убрать её оттуда, откуда её начали перетаскивать (т.е. убрать как из колонки так и из области задач)"}),(0,d.jsx)("li",{className:"list__item",children:"Когда перетащили задачу и сбросили её - вставить туда куда сбросили (т.е. вставить как в колонку, там и в область задач)"})]}),(0,d.jsxs)("p",{children:["Тут нам и пригодится трюк с прозрачностью. Выше мы уже добавили прозрачность",(0,d.jsx)("code",{className:"code",children:"opacity = `0.4`"})," задаче, которую начали перетаскивать. Теперь мы можем воспользоваться этим свойством и быстро найти перетаскивемую задачу следующим образом:"]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:'const draggedElement = document.querySelector(".task[style*="opacity: 0.4"]");'}),(0,d.jsx)("p",{className:"spacer top medium",children:"Обновим наш обработчик сброса, держа в голове ТЗ выше:"}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:p}),(0,d.jsxs)("p",{className:"spacer top medium",children:["Пока что у нас есть только обработчики. Нужно подписаться на них. Сделаем это классическим способом - с помощью метода ",(0,d.jsx)("code",{className:"code",children:"querySelectorAll"})," получим список всех задач и колонок, а потом пройдёмся по этим массивам методом перебора ",(0,d.jsx)("code",{className:"code",children:"forEach"})," и подпишемся на нужные обработчики задач и колонок:"]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:g}),(0,d.jsxs)("p",{className:"spacer top medium",children:["Забыли про возврат задач в область задач! Сейчас быстренько исправим. Аналогичным образом получим контейнер области задач и подпишем его на такие же обработчики, как и у колонок, но чуть-чуть модернизируем",(0,d.jsx)("code",{children:"handleDragOver"}),":"]}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:x}),(0,d.jsx)("p",{className:"spacer top medium",children:"Собираем всё вместе. Разметка будет выглядеть так (тут ничего не изменилось с самого начала):"}),(0,d.jsx)(D.z,{lang:k.Pl.HTML,name:"index",code:P}),(0,d.jsx)("p",{className:"spacer top medium",children:"Разметку CSS здесь не буду прикладывать т.к. она совершенно не влияет на работоспособность кода и вы можете стилизовать список задач как ваша душа захочет. И, наконец-то, JavaScript:"}),(0,d.jsx)(D.z,{lang:k.Pl.JAVASCRIPT,name:"index",code:T}),(0,d.jsxs)("p",{className:"spacer top bottom large",children:["Вы можете перейти по"," ",(0,d.jsx)(n.G,{label:"ссылке в песочницу на Codepen",href:"https://codepen.io/thevioletmaniac/pen/RNrebRR"}),", чтобы вживую потыкать сделанный в этом уроке список задач с нативным драг-н-дропом на JavaScript."," "]}),(0,d.jsx)(S.e,{items:L,language:N.KG[N.Zr.JAVASCRIPT_DRAG_AND_DROP_QUICKLY].language})]})]})}},51443:e=>{e.exports={draggable_element:"DraggableElement_draggable_element__lMtUi"}},56410:(e,a,s)=>{"use strict";s.d(a,{W:()=>c});var d=s(37876),l=s(85335),n=s(81010),t=s(64156),r=s.n(t);let c=({src:e,alt:a,fileTitle:s,maxWidth:t=1024})=>(0,d.jsx)("div",{className:r().post_image,style:{maxWidth:t?`${t}px`:"unset"},children:(0,d.jsx)(l.p,{type:n.gz.IMAGE,fileTitle:s,children:(0,d.jsx)("img",{src:e,alt:a,width:"100%"})})})},57141:e=>{e.exports={dnd_demo:"DragAndDropDemo_dnd_demo__ewsEs",dnd_demo__wrapper:"DragAndDropDemo_dnd_demo__wrapper__JvHpY",dnd_demo__column:"DragAndDropDemo_dnd_demo__column__35C2W",dnd_demo__column_title:"DragAndDropDemo_dnd_demo__column_title__NklAc",dnd_demo__tasks:"DragAndDropDemo_dnd_demo__tasks__SmXmp"}},61183:(e,a,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/javascript-drag-and-drop-quickly",function(){return s(51039)}])},64156:e=>{e.exports={post_image:"PostImage_post_image__BD4eg"}}},e=>{e.O(0,[230,867,459,577,498,636,593,792],()=>e(e.s=61183)),_N_E=e.O()}]);