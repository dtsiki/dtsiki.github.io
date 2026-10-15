(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{6549:(e,s,l)=>{"use strict";l.d(s,{M:()=>x});var r=l(37876),i=l(14232),n=l(15039),c=l.n(n),t=l(78261),o=l(55686),a=l(40502),d=l(20381),h=l(41395),j=l.n(h);let x=({customTitle:e,items:s,strictLanguage:l,hideNumbers:n,variant:h=o.j.PRIMARY})=>{let x=c().bind(j()),{language:m}=(0,t.W)(),u=(0,i.useMemo)(()=>s.map(e=>(0,r.jsx)("li",{className:"list__item",children:(0,r.jsx)("button",{onClick:()=>(e=>{let s=e.current?.getBoundingClientRect();if(s){let e=s.top+window.pageYOffset-150;window.scrollTo({top:e,behavior:"smooth"})}})(e.ref),className:x([j().table_of_contents__button,j()[h]]),"arial-label":`${(0,d.T)(l||m,a.fN)} ${e.title}`,children:e.title})},e.title)),[s]);return(0,r.jsxs)("section",{className:x([j().table_of_contents,"section outer"]),children:[(0,r.jsx)("h2",{className:x([j().table_of_contents__title,j()[h]]),children:(0,d.T)(l||m,e||a.cL)}),n?(0,r.jsx)("ul",{className:"list",children:u}):(0,r.jsx)("ol",{className:"list ordered",children:u})]})}},11130:(e,s,l)=>{"use strict";l.d(s,{M:()=>r.M});var r=l(6549)},23161:e=>{e.exports={note:"Note_note__sQHx8",note__title:"Note_note__title__fZgQj",note__icon:"Note_note__icon__YuH5f",primary:"Note_primary__ho0yL",primary__title:"Note_primary__title__RhGpk",secondary:"Note_secondary__7qn5p",secondary__title:"Note_secondary__title__AJC5N"}},35064:(e,s,l)=>{"use strict";l.d(s,{OR:()=>t,Z8:()=>n,iO:()=>o,mq:()=>c});var r=l(37876),i=l(58525);let n=e=>(0,r.jsxs)("span",{className:"accented ghost spacer left extra-small",children:["(",e,")"]}),c=(e,s,l)=>{let i=s||"span";return e.map((s,n)=>(0,r.jsxs)("span",{children:[(0,r.jsx)(i,{className:l,children:s}),n!==e.length-1?", ":null]},`${s}-${n}`))},t=(e,s=!0)=>{let l=s?"'":"",n=e&&`${l}${e}${l}`;return(0,r.jsxs)(i.R,{children:["console.log(",n,")"]})},o=e=>(0,r.jsxs)(r.Fragment,{children:["\xab",e,"\xbb"]})},35468:(e,s,l)=>{"use strict";l.d(s,{G:()=>r});let r={PRIMARY:"primary",SECONDARY:"secondary"}},41395:e=>{e.exports={table_of_contents__title:"TableOfContents_table_of_contents__title__31aUG",SECONDARY:"TableOfContents_SECONDARY__mp5of",table_of_contents__button:"TableOfContents_table_of_contents__button__lf7Gl",PRIMARY:"TableOfContents_PRIMARY__7Hy_1"}},54399:(e,s,l)=>{"use strict";l.d(s,{L:()=>a});var r=l(37876),i=l(15039),n=l.n(i),c=l(35468),t=l(23161),o=l.n(t);let a=({title:e,children:s,type:l=c.G.PRIMARY})=>{let i=n().bind(o());return(0,r.jsxs)("div",{className:i([o().note,o()[l]]),children:[e&&(0,r.jsxs)("span",{className:o().note__title,children:[e,": "]}),s]})}},55686:(e,s,l)=>{"use strict";l.d(s,{j:()=>r});let r={PRIMARY:"PRIMARY",SECONDARY:"SECONDARY"}},58525:(e,s,l)=>{"use strict";l.d(s,{R:()=>i});var r=l(37876);let i=({children:e=""})=>(0,r.jsx)("code",{className:"code",children:e})},60813:(e,s,l)=>{"use strict";l.d(s,{G:()=>i.G,L:()=>r.L});var r=l(54399),i=l(35468)},62217:(e,s,l)=>{"use strict";l.d(s,{m:()=>n});var r=l(37876),i=l(46512);let n=e=>{let{id:s,cover:l,title:i}=e;return l?(0,r.jsx)("section",{className:"section inner",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col col--20",children:(0,r.jsx)("img",{src:l,alt:`Обложка книги \xab${i}\xbb`,className:"image BOOKCOVER"})}),(0,r.jsx)("div",{className:"col col--80",children:c(e)})]})},s):(0,r.jsx)("section",{className:"section inner",children:c(e)},s)},c=e=>{let{title:s,author:l,category:i,tags:n,content:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h3",{children:["\xab",s,"\xbb, ",l]}),t(i,n),c]})},t=(e,s)=>(0,r.jsxs)("div",{className:"tags spacer top bottom small",children:[e.map(e=>(0,r.jsx)("div",{className:"tag primary",children:e},(0,i.Ak)())),s?.map(e=>(0,r.jsx)("div",{className:"tag secondary",children:e},(0,i.Ak)()))]})},76149:(e,s,l)=>{"use strict";l.d(s,{d:()=>c,g:()=>n});var r=l(37876),i=l(58525);let n=(0,r.jsx)(i.R,{children:"undefined"}),c=(0,r.jsx)(i.R,{children:"null"})},78165:(e,s,l)=>{"use strict";l.d(s,{n:()=>d});var r=l(37876),i=l(14232),n=l(15039),c=l.n(n),t=l(9399),o=l(97347),a=l.n(o);let d=({title:e,children:s})=>{let l=c().bind(a()),[n,o]=(0,i.useState)(!1);return(0,r.jsxs)("article",{className:l([a().accordion,{[a().opened]:n}]),children:[(0,r.jsxs)("button",{className:a().accordion__header,onClick:()=>{o(!n)},children:[(0,r.jsx)("span",{className:l([a().accordion__icon,{[a().opened]:n}]),children:(0,r.jsx)(t.ZL,{})}),(0,r.jsx)("span",{className:a().accordion__title,children:e})]}),(0,r.jsx)("div",{className:a().accordion__body,children:s})]})}},83232:(e,s,l)=>{"use strict";l.d(s,{OR:()=>r.OR,B4:()=>i,iO:()=>r.iO}),l(62217);var r=l(35064);let i=e=>Array.from({length:e},e=>null);l(20381)},89821:(e,s,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/promises",function(){return l(90971)}])},90971:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>ee});var r=l(37876),i=l(14232),n=l(83577),c=l(27689),t=l(37339),o=l(11130),a=l(46512),d=l(51874),h=l(58525),j=l(32842),x=l(61904);let m=(0,r.jsx)("em",{children:"pending"}),u=(0,r.jsx)("em",{children:"fulfilled"}),p=(0,r.jsx)("em",{children:"rejected"}),_=(0,r.jsx)(h.R,{children:"[[PromiseState]]"}),P=(0,r.jsx)(h.R,{children:"[[PromiseResult]]"}),R=(0,r.jsx)(h.R,{children:"[[PromiseFulfillReactions]]"}),f=(0,r.jsx)(h.R,{children:"[[PromiseRejectReactions]]"}),N=(0,r.jsx)(h.R,{children:"then"}),v=(0,r.jsx)(h.R,{children:"catch"}),A=(0,r.jsx)(h.R,{children:"finally"}),g=(0,r.jsx)(h.R,{children:"Promise.all()"}),S=(0,r.jsx)(h.R,{children:"Promise.race()"}),T=(0,r.jsx)(h.R,{children:"Promise.any()"}),C=(0,r.jsx)(h.R,{children:"Promise.allSettled()"}),y=(0,r.jsx)(h.R,{children:"onFulfilled"}),E=(0,r.jsx)(h.R,{children:"onRejected"}),I=(0,r.jsx)(h.R,{children:"onFinally"}),F=e=>(0,r.jsxs)(h.R,{children:["resolve",e?`(${e})`:""]}),J=e=>(0,r.jsxs)(h.R,{children:["reject",e?`(${e})`:""]}),L=(0,i.forwardRef)((e,s)=>{let l=(0,r.jsxs)(r.Fragment,{children:["Внутренние слоты (internal slots) ",x.C6," служебные поля объекта, которые недоступны из кода напрямую. Они обозначаются двойными квадратными скобками ",(0,r.jsx)(h.R,{children:"[[...]]"})," и используются движком JavaScript для внутренней логики."]}),i=(0,r.jsx)(j.V,{title:"внутренних слота",hint:l});return(0,r.jsxs)("section",{ref:s,className:"section outer",children:[(0,r.jsx)("h3",{children:"Состояние и результат"}),(0,r.jsx)("p",{children:"Промис - это, как и многое в JavaScript, просто объект. Просто объект со своими особенностями и нюансами. Вся магия промисов на самом деле не такая уж магия, если разобраться из чего они состоят."}),(0,r.jsxs)("p",{children:["У промиса как объекта есть два ",i," или простым языком свойства, недоступных напрямую. Они определяют всю логику промисов:"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{className:"list__title",children:[_," хранит состояние промиса"]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{className:"list__title",children:[P," хранит результат выполнения промиса"]})})]}),(0,r.jsxs)("p",{children:["Состояние ",_," может принимать строго три значения ",x.C6," ",m,", ",u,","," ",p," ",x.C6," и от него зависит, что лежит в ",P,":"]}),(0,r.jsxs)("ol",{className:"list ordered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[m," "]}),(0,r.jsx)("p",{children:"Начальное состояние промиса:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[_," = ",m]})}),(0,r.jsxs)("li",{className:"list__item",children:[P," = ",(0,r.jsx)(h.R,{children:"undefined"})]})]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"fulfilled"}),(0,r.jsx)("p",{children:"Промис выполнен успешно:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[_," = ",u]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[P," = значение, с которым промис выполнен"]})})]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"rejected"}),(0,r.jsx)("p",{children:"Промис отклонён:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[_," = ",p]})}),(0,r.jsxs)("li",{className:"list__item",children:[P," причина отклонения (обычно ошибка)"]})]})]})]}),(0,r.jsxs)("p",{children:["Отдельного свойства для хранения ошибки нет. Всё потому, что промис ведёт себя как конечный автомат: состояние меняется только один раз: из ",m," либо в ",u,", либо в ",p,". Поэтому по состоянию промиса легко понять, что лежит в ",P,":"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)(h.R,{children:"undefined"})," если промис в ",m]}),(0,r.jsxs)("li",{className:"list__item",children:["значение если в ",u]}),(0,r.jsxs)("li",{className:"list__item",children:["ошибка если в ",p]})]}),(0,r.jsxs)("p",{children:["Со свойстами и состояними разобрались. Но кто переводит промис из ",m," в ",u," или ",p,"? За это отвечают ",J()," и ",J()," ",x.C6," о них и поговорим дальше."]})]})});L.displayName="StateAndResult";var b=l(5351),k=l(28948);let w=(0,i.forwardRef)((e,s)=>{let l=`const promise = new Promise(executor);

function executor(resolve, reject) {
  // Здесь что-то делаем
}`,i=`const promise = new Promise(executor);

function executor(resolve, reject) {
  // Здесь что-то делаем
  // Затем resolve() и/или reject()
}`,n=`const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
  resolve('Успешный успех');
});`,c=`const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
  reject(new Error('Ой-ой, ошибочка'));
});`,t=`new Promise((resolve) => resolve());
new Promise((resolve) => resolve(42));
new Promise((resolve) => resolve({ id: 42, name: 'dtsiki', isAwesome: true }));

const innerPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Допустим, это сетевой запрос'), 1000);
});

new Promise((resolve) => resolve(innerPromise));`,o=`new Promise((resolve, reject) => {
  reject('Какая-то ошибка доступа');
});

new Promise((resolve, reject) => {
  reject(404);
});`,a=`new Promise((resolve, reject) => {
  reject(new Error('Что-то пошло не так'));
})`,d=`const promise = new Promise((resolve, reject) => {
  resolve('Успешный успех'); // Выполнится
  reject('Ой-ой, ошибочка'); // Не выполнится
  resolve('Снова успешный успех'); // Тоже не выполнится
});`,j=`const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
});

console.log(promise);`,_=`const promise = new Promise((resolve, reject) => {
  const shouldResolve = false;

  if (shouldResolve) {
    resolve('Успешный успех');
  }
});`;return(0,r.jsxs)("section",{ref:s,className:"section outer",children:[(0,r.jsx)("h3",{children:"Управление состоянием промиса"}),(0,r.jsxs)("p",{children:["Промис создается через конструктор ",(0,r.jsx)(h.R,{children:"new Promise"}),", внутрь которого передаётся функция-исполнитель ",(0,r.jsx)("em",{children:"executor"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l}),(0,r.jsxs)("p",{children:["Функция-исполнитель запускается синхронно, сразу же в момент создания промиса (см."," ",(0,r.jsx)("a",{href:"https://dtsiki.github.io/blog/ru/event-loop-guide",className:"link",children:"статью про Event Loop"}),"). Она нужна всего для двух вещей:"]}),(0,r.jsxs)("ol",{className:"list ordered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsx)("p",{className:"list__title",children:"запустить вложенную операцию"})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsx)("p",{className:"list__title",children:"обработать её результат"})})]}),(0,r.jsx)("p",{children:"Всё!"}),(0,r.jsxs)("p",{children:["Функция-исполнитель не обязана быть асинхронной, промис может вообще и не запускать асинхронную операцию. А вот методы обработки результата, ",N," и ",v,", выполняются асинхронно, через очередь микрозадач. Но до них мы ещё дойдём. В любом случае, какой бы код ни содержала функция-исполнитель, она не ждёт его выполнения",x.C6," управление идёт дальше."]}),(0,r.jsxs)("p",{children:["Чтобы обработать результат вложенной операции, когда она выполнится, в функцию-исполнитель передаётся два колбэка для управления состоянием промиса ",x.C6," ",F()," и ",J(),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:["Колбэк ",F("value")," переводит промис в состояние ",u," со значением"," ",(0,r.jsx)(h.R,{children:"value"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n}),(0,r.jsxs)("p",{children:["Колбэк ",J("error")," переводит промис в состояние ",p," с причиной:",(0,r.jsx)(h.R,{children:"error"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:c}),(0,r.jsxs)("p",{children:[F()," и ",J()," могут вызываться в любом месте функции-исполнителя в зависимости от логики. При этом в ",F()," можно передать любое значение: ",(0,r.jsx)(h.R,{children:"undefined"}),", число, строку, булево значение, функцию, объект, массив и даже другой промис:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:t}),(0,r.jsxs)("p",{children:["Что именно происходит, когда в ",F()," передают другой промис, разберём в подразделе про"," ",(0,r.jsx)("a",{href:"#promises_collapsing",className:"link",children:"схлопывание"}),"."]}),(0,r.jsxs)("p",{children:["С ",J()," ситуация чуть отличается. Технически в него тоже можно передать любое значение"," ",x.C6," оно станет причиной отклонения. Но JavaScript не превращает его в объект"," ",(0,r.jsx)(h.R,{children:"Error"}),": если передали строку, причиной будет строка; если число ",x.C6," число:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:o}),(0,r.jsxs)("p",{children:["Поэтому хорошей практикой считается передавать экземпляр класса ",(0,r.jsx)(h.R,{children:"Error"})," ",x.C6," он содержит стек вызовов, что упрощает отладку:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:a}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Сработает"})," внутри функции-исполнителя ",x.C6," только один колбэк: либо"," ",F(),", либо ",J(),". Более того: сработает может только первый вызов одной из этих функций. Любые последующие вызовы ",F()," или ",J()," внутри одного промиса игнорируются:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:d})]}),(0,r.jsxs)("section",{className:"section outer",children:[(0,r.jsxs)("p",{children:["Если забыть вызвать ",F()," и ",J()," промис может навсегда остаться в состоянии"," ",m,":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:j,consoleLog:"Promise\xa0{<pending>}"}),(0,r.jsxs)("p",{children:["И сколько бы не проверяли этот промис, он всегда будет в состоянии ",m,"."]}),(0,r.jsxs)("p",{children:["Если ",F()," и ",J()," вызываются только при определённом условии, промис тоже может зависнуть:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:_}),(0,r.jsxs)("p",{children:["Такие промисы называют ",(0,r.jsx)("strong",{children:"висячими"}),". С ними стоит быть осторожными: если на висячий промис остаются ссылки, он может привести к утечке памяти. А ещё ",x.C6," код, который ждёт результата, может так его и не дождаться."]})]})]})});w.displayName="Executor";var D=l(54666),M=l(83232);let V=(0,i.forwardRef)((e,s)=>{let l=`const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
  resolve('Успешный успех');
});`,i=`if (promise.state === 'fulfilled') {
  // Здесь что-то делаем с результатом
} else if (promise.state === 'rejected') {
  // Здесь что-то делаем с ошибкой
}`,n=`
const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise
  .finally(() => {
    return 'You shall not pass';
  })
  .then((result) => console.log('Результат:', result))
  .catch((error) => console.error('Ошибка:', error.message));`,c=`
const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise
  .finally(() => {
    throw new Error('You shall not pass');
  })
  .then((result) => console.log('Результат:', result))
  .catch((error) => console.error('Ошибка:', error.message));`,t=`promise.then(
  (result) => {
    // Здесь что-то делаем с результатом
  },
  (error) => {
    // Здесь что-то делаем с ошибкой
  }
);`,o=`const promise = new Promise((resolve, reject) => {
  resolve('Успешный успех!');
});

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
);`,a=`const promise = new Promise((resolve, reject) => {
  reject('Ой-ой, ошибочка!');
});

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
);`,d=`const promise = new Promise((resolve, reject) => {
  reject('Ой-ой, ошибочка!');
});

promise.then(
  null,
  (error) => {
    console.error(error);
  },
);`,j=`promise.catch((error) => {
  console.error(error);
});

promise.then(null, (error) => {
  console.error(error);
});`,R=`const promise = new Promise((resolve, reject) => {
  throw new Error('Что-то пошло не так');
});

promise.catch((error) => {
  console.error(error);
});`,f=`let isLoading = true;

loadData()
  .then((response) => response.json())
  .catch((error) => console.error(error))
  .finally(() => {
    isLoading = false;
  });`;return(0,r.jsxs)("section",{ref:s,className:"section outer",children:[(0,r.jsx)("h3",{children:"Обработка результата выполнения промиса"}),(0,r.jsx)("p",{children:"Если запустить пример, который рассматривали выше, в консоли выведется только одна строка:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l,consoleLog:"Этот код выполнится сразу"}),(0,r.jsxs)("p",{children:["При этом если проверить промис ",x.C6," он выполнился и не остался в состоянии ",m,":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"setTimeout(() => console.log(promise), 5000);",consoleLog:"Promise { <state>: 'fulfilled', <value>: 'Успешный успех' }"}),(0,r.jsxs)("p",{children:["Куда же девается результат, который передали в ",F(),"?"]}),(0,r.jsxs)("p",{children:["Вернёмся к внутренним слотам промиса. ",_," и ",P," скрыты и прямого доступа к ним нет. Чтобы что-то сделать с результатом выполнения промиса, недостаточно написать что-то вроде:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Обратите внимание:"})," свойств ",(0,r.jsx)(h.R,{children:"state"})," и ",(0,r.jsx)(h.R,{children:"result"})," у промиса не существует. Это лишь иллюстрация того, что не сработает."]}),(0,r.jsxs)("p",{children:["Для работы с результатом используются специальные методы: ",N," и ",v,"."]}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:[N," получает результат выполнения промиса. У него есть два необязательных параметра: колбэки"," ",y," и ",E,". Обе функции принимают один аргумент ",x.C6," значение, которое лежит в ",P,". Для ",y," это результат, для ",E," ",x.C6," ","причина отклонения:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:t}),(0,r.jsxs)("p",{children:["Часто думают, что ",N," работает только с успешным результатом, когда промис в состоянии ",u,". Но это не так:"]}),(0,r.jsx)(D.k,{lang:[k.Pl.JAVASCRIPT,k.Pl.JAVASCRIPT],code:[o,a],log:["Успешный успех","Ой-ой, ошибочка"],isEmbeddedLog:!0}),(0,r.jsxs)("p",{children:["Как видно из примеров выше, ",N," умеет работать и с ошибками. Для этого достаточно передать только"," ",E,":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:d,consoleLog:"Ой-ой, ошибочка!"})]}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:["Поздравляю! Мы только что написали метод ",v,"!"]}),(0,r.jsxs)("p",{children:[v," ",x.C6," синтаксический сахар для ",(0,r.jsx)(h.R,{children:"then(null, onRejected)"}),". У него только один аргумент: ",E,", а вместо ",y," передаётся"," ",(0,r.jsx)(h.R,{children:"null"}),"."]}),(0,r.jsx)("p",{children:"Эти две записи делают одно и тоже:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:j}),(0,r.jsxs)("p",{children:["Хоть ",v," и является обёрткой над ",N,", принято для успешного результата использовать"," ",N,", а для ошибок ",x.C6," ",v,":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:R})]}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:["Ещё есть метод ",A,". В него передаётся один колбэк ",I,", который выполнится всегда, при любом исходе промиса: ",u," или ",p,"."]}),(0,r.jsxs)("p",{children:[A," принято использовать для так называемой чистки. Например, чтобы скрыть индикатор загрузки:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:f}),(0,r.jsxs)("p",{children:["Технически ",A," не является методом обработки результата: он ничего не делает с результатом, а просто передаёт его дальше. Возвращаемое из ",A," значение игнорируется:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n,consoleLog:"Результат: 42"}),(0,r.jsxs)("p",{children:["В этом примере, несмотря на то что из ",A," возвращается другое значение ",x.C6," строка"," ",(0,M.iO)("You shall not pass"),", ",x.C6," в ",N," по цепочке всё равно попадает результат исходного промиса ",x.C6," ",F("42"),"."]}),(0,r.jsxs)("p",{children:["Но есть исключение: из ",A," можно выбросить ошибку:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:c,consoleLog:"Ошибка: You shall not pass"})]}),(0,r.jsxs)("p",{children:["Резюмируем: ",A,", как и ",v,", — просто обёртки над ",N,". Когда мы вызываем"," ",A,", под капотом вызывается",N," с двумя колбэками: ",y," и ",E,". Оба колбэка вызывают ",I,", а потом пробрасывают исходное значение или ошибку дальше. Что именно происходит под капотом ",A,", разберём, когда будем писать этот метод в классе промиса."]})]})});V.displayName="InstanceMethods";var z=l(76149);let U=(0,i.forwardRef)((e,s)=>{let l=`Promise.resolve(1)
  .then((value) => {
    console.log('Первый:', value);
    return 2;
  })
  .then((value) => {
    console.log('Второй:', value);

    return new Promise(resolve => {
      setTimeout(() => resolve(3), 1000);
    });
  })
  .then((value) => console.log('Третий:', value));`,i=`Первый: 1
Второй: 2
Третий: 3 // Через 1 секунду`;return(0,r.jsxs)("section",{ref:s,className:"section outer",children:[(0,r.jsx)("h3",{children:"Цепочка промисов"}),(0,r.jsxs)("p",{children:["Каждый вызов ",N," неявно создаёт и возвращает абсолютно новый промис. Как будет выглядеть этот промис зависит от того, что возвращается из колбэка прошлого ",N," в цепочке:"]}),(0,r.jsxs)("ul",{className:"list markered nested",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:["ничего (нет ",(0,r.jsx)(h.R,{children:"return"})," из колбэка)"]}),(0,r.jsxs)("p",{children:["Создаётся уже выполненный промис со значением ",z.g]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"обычное значение: число, строка, булево значение, массив, объект"}),(0,r.jsx)("p",{children:"Создаётся выполненный промис с этим значением"})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"промис"}),(0,r.jsx)("p",{children:"Всё равно создаётся новый промис, который будет ждать завершения того, что вернули вручную"})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:["ошибка, выброшенная через ",(0,r.jsx)(h.R,{children:"throw"})]}),(0,r.jsx)("p",{children:"Создаётся уже отклонённый промис с этой ошибкой"})]})]}),(0,r.jsxs)("p",{children:["Под капотом ",N," делает то же самое, что и мы, когда пишем ",(0,r.jsx)(h.R,{children:"new Promise(...)"}),","," ",x.C6," просто берёт на себя управление состоянием нового промиса."]}),(0,r.jsxs)("p",{children:["Если внутри одного ",N," всегда возвращается промис, а следующий ",N," обязательно дождётся его выполнения, то таким образом можно составлять цепочки. Они так и называются ",x.C6," цепочки промисов."]}),(0,r.jsx)("p",{children:"Как это будет выглядеть:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l,consoleLog:i}),(0,r.jsxs)("p",{children:["Механизм, который стоит за этим поведением, называется схлопывание промисов. Его разберём отдельно ",x.C6,"чуть позже (",(0,r.jsx)("a",{href:"#flattering",className:"link",children:"см. Схлопывание и развёртывание"}),")."]})]})});U.displayName="PromiseChaining";var G=l(60813);let O=(0,i.forwardRef)((e,s)=>{let l=`let isLoading = true;

fetch(url)
  .then((response) => response.json())
  .then((result) => renderResult(result))
  .catch((error) => renderError(error))
  .finally(() => {
    isLoading = false
  });`,i=`fetch(url)                                // промис А
  .then((response) => response.json())    // промис B
  .then((result) => renderResult(result)) // промис C
  .catch((error) => renderError(error))   // промис D
  .finally(() => { isLoading = false });  // промис E`;return(0,r.jsxs)("section",{ref:s,className:"section outer",id:"callback_reactions",children:[(0,r.jsx)("h2",{children:"Очереди колбэков"}),(0,r.jsxs)("p",{children:["Кроме уже знакомых нам ",_," и ",P,", у промиса есть ещё два внутренних слота для очередей колбэков:"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:R}),(0,r.jsxs)("p",{children:["Очередь для колбэков, которые выполнятся, когда промис перейдёт в состояние ",u]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:f}),(0,r.jsxs)("p",{children:["Очередь для колбэков, которые выполнятся, когда промис перейдёт в состояние ",p]})]})]}),(0,r.jsxs)("p",{children:["Именно в этих очередях колбэки ждут, пока промис завершится. А сама асинхронность уже заслуга очереди микрозадач, в которую они попадают после смены состояния (подробнее ",x.C6," в"," ",(0,r.jsx)("a",{href:"https://dtsiki.github.io/blog/ru/event-loop-guide",className:"link",children:"статье про Event Loop"}),")."]}),(0,r.jsx)("p",{children:"Разберём, как это работает под капотом, на примере, приближенном к реальности:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l}),(0,r.jsx)("br",{}),(0,r.jsxs)(G.L,{type:G.G.SECONDARY,children:[(0,r.jsx)("div",{className:"tags",children:(0,r.jsx)("div",{className:"tag secondary",children:"Обратите внимание"})}),(0,r.jsxs)("p",{children:["Функция ",(0,r.jsx)(h.R,{children:"fetch(url)"})," сразу возвращает промис в состоянии ",m,". Когда сервер ответит, промис переходит в ",u," и возвращает объект ",(0,r.jsx)(h.R,{children:"Response"}),". Сам по себе"," ",(0,r.jsx)(h.R,{children:"Response"})," это ещё не готовые данные, а обёртка над ними. Чтобы прочитать тело ответа, нужно вызвать специальный метод в зависимости от формата ",x.C6,"например, ",(0,r.jsx)(h.R,{children:"json()"})," для JSON. Этот метод тоже возвращает промис."]}),(0,r.jsxs)("p",{children:["Поэтому в примере выше в первом ",N," выполняется ",(0,r.jsx)(h.R,{children:"response.json()"}),", и из него возвращается промис. Это как будто лишний шаг: ",N," возвращает промис, но в цепочке он схлопывается с предыдущим. Подробнее ",x.C6," в"," ",(0,r.jsx)("a",{href:"#flattering",className:"link",children:"разделе про схлопывание"}),")."]})]}),(0,r.jsx)("p",{children:"Пройдёмся пошагово и разберёмся что происходит в этом примере:"}),(0,r.jsxs)("ol",{className:"list stepped",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{children:["Функция ",(0,r.jsx)(h.R,{children:"fetch()"})," сразу возвращает промис ",(0,r.jsx)("em",{children:"(A)"}),", не дожидаясь ответа сервера. Изначальное состояние этого промиса ",m,"."]}),(0,r.jsx)("p",{children:"Каждый колбэк в цепочке будет тоже возвращать новый промис:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i})]}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["У ",(0,r.jsx)(h.R,{children:"fetch()"})," нет видимой нам функции-исполнителя ",x.C6," браузер делает всю работу сам. Но представим, что на этом шаге начинает выполняться ",(0,r.jsx)("em",{children:"executor"}),": в Web API отправляется сетевой запрос. При этом ",(0,r.jsx)("em",{children:"executor"})," не ждёт ответа ",x.C6," неизвестно, сколько времени займёт запрос: это может быть и миллисекунда, и минута. Поэтому ",(0,r.jsx)("em",{children:"executor"})," только запускает асинхронную операцию и не ждёт её результата. Код идёт дальше, а когда сервер ответит ",x.C6," вызовется ",F()," или"," ",J(),"."]})}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{children:["Код продолжает выполняться. На пути цепочка промисов: два ",N,", ",v," и ",A,". Движок не может выполнить колбэки внутри этих методов потому что первый промис ",(0,r.jsx)("em",{children:"(A)"})," всё ещё в состоянии ",m,". Здесь на помощь приходят очереди ",R," и"," ",f,": колбэки будут откладываться каждый в соответствующую очередь:"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Колбэки из ",N," отправятся в ",R]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Колбэки из ",v," отправятся в ",f]})}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{children:["Колбэки из ",A," отправятся и в ",R,", и в"," ",f]}),(0,r.jsxs)("p",{className:"list__footer",children:["Про это разберём отдельно в практике ",x.C6," в"," ",(0,r.jsxs)("a",{href:"#flattering",className:"link",children:["разделе про кастомный ",A]})]})]})]}),(0,r.jsx)(G.L,{type:G.G.SECONDARY,children:(0,r.jsxs)("p",{children:["У ",N," есть второй аргумент ",E,". Если им воспользоваться, колбэк попадёт в",f," ",x.C6," так же, как колбэк ",v,", который является синтаксическим сахаром ",(0,r.jsx)(h.R,{children:"then(null, onRejected)"}),"."]})}),(0,r.jsx)("p",{children:"Таким образом в очередях будут лежать следующие колбэки:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[R,": колбэки из ",N," ",(0,r.jsx)(h.R,{children:"response.json()"})," и"," ",(0,r.jsx)(h.R,{children:"renderResult(result)"}),", а также колбэк из ",A]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[f,":"," ",(0,r.jsxs)(h.R,{children:["renderError(error) и снова колбэк из ",A]})]})})]}),(0,r.jsxs)("p",{children:["Когда выполнится промис, соответствующий колбэк будет взят из очереди и выполнен. При этом каждый колбэк должен отреагировать на ",(0,M.iO)("свой")," промис. В нашем случае будет следующая цепочка реакций и вызовов. Начнётся всё с того, что ",(0,r.jsx)(h.R,{children:"fetch()"})," создаёт промис ",(0,r.jsx)("em",{children:"(А)"}),". Когда:"]}),(0,r.jsx)("ul",{className:"list markered",children:(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{children:(0,r.jsxs)("strong",{children:["выполняется промис ",(0,r.jsx)("em",{children:"(A)"}),":"]})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"успешно"}),":"]})," ","берётся колбэк первого ",N," из очереди ",R," ",x.C6," ",(0,r.jsx)(h.R,{children:"response.json()"}),". Этот колбэк в свою очередь тоже создаёт промис ",x.C6," ",(0,r.jsx)("em",{children:"(B)"}),". Следующие колбэки ждут выполнения промиса ",(0,r.jsx)("em",{children:"(B)"}),". Когда:"]}),(0,r.jsx)("ul",{className:"list markered nested",children:(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"выполняется промис (B):"})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"успешно"}),":"]})," ","берётся колбэк второго ",N," из очереди ",R,", ",x.C6," ",(0,r.jsx)(h.R,{children:"renderResult(result)"}),". Здесь тоже колбэк вернёт промис, ",x.C6," ",(0,r.jsx)("em",{children:"(C)"}),", даже если из функции нет явного возврата промиса. Когда:",(0,r.jsx)("ul",{className:"list markered nested",children:(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{children:(0,r.jsxs)("strong",{children:["выполняется промис ",(0,r.jsx)("em",{children:"(C)"}),":"]})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"успешно"}),":"]})," ","берётся колбэк ",A," из очереди ",R,". Конец цепочки."]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"с ошибкой"}),":"]})," ","выполняется колбэк из ",v," из очереди ",f,". Колбэк создаёт промис ",(0,r.jsx)("em",{children:"(D)"}),". Когда:",(0,r.jsx)("ul",{className:"list markered nested",children:(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{children:(0,r.jsxs)("strong",{children:["выполняется промис ",(0,r.jsx)("em",{children:"(D)"}),":"]})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"успешно"}),":"]})," ","из очереди ",R," берётся колбэк ",A," и выполняется."]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"c ошибкой"}),":"]})," ","из очереди ",f," берётся колбэк ",A," и выполняется."]})]})})]})]})})]})]})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"с ошибкой"}),":"]})," ","выполняется колбэк из ",v,". Колбэк создаёт промис ",(0,r.jsx)("em",{children:"(D)"}),". Когда:",(0,r.jsx)("ul",{className:"list markered nested",children:(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{children:(0,r.jsxs)("strong",{children:["выполняется промис ",(0,r.jsx)("em",{children:"(D)"}),":"]})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"успешно"}),":"]})," ","из очереди ",R," берётся колбэк ",A," и выполняется."]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["если ",(0,r.jsx)("em",{children:"c ошибкой"}),":"]})," ","из очереди ",f," берётся колбэк ",A," и выполняется."]})]})})]})]})})]})]})]})});O.displayName="CallbackReactions";var Y=l(12062);let q=(0,i.forwardRef)((e,s)=>{let l=`Promise.all([
    Promise.resolve('Раз'),
    Promise.resolve('Два'),
    Promise.resolve('Три')
  ]).then((result) => console.log(result));`,i=`Promise.all([
    Promise.resolve('Раз'),
    Promise.reject('Ой-ой, ошибочка'),
    Promise.resolve('Три'),
    Promise.reject('Ой-ой, снова ошибочка'),
  ]).catch((error) => console.log(error));`,n=`Promise.race([
    new Promise((resolve) => setTimeout(() => resolve('Раз'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Два'), 5000))
  ]).then((result) => console.log(result));`,c=`Promise.race([
    new Promise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Успех'), 2000)),
    new Promise((_, reject) => setTimeout(() => reject('Ой-ой, снова ошибочка'), 3000)),
  ]).catch((error) => console.log(error));`,t=`Promise.allSettled([
    Promise.resolve('Раз'),
    Promise.reject('Ой-ой, ошибочка'),
    Promise.resolve('Два')
  ]).then((result) => console.log(result));`,o=`[
    { status: 'fulfilled', value: 'Раз' },
    { status: 'rejected', reason: 'Ой-ой, ошибочка' },
    { status: 'fulfilled', value: 'Два' }
  ]`,a=`Promise.allSettled([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.reject('Ой-ой, ошибочка #2'),
    Promise.reject('Ой-ой, ошибочка #3'),
  ]).then((error) => console.log(error));`,d=`[
   { status: 'rejected', reason: 'Ой-ой, ошибочка #1' }
   { status: 'rejected', reason: 'Ой-ой, ошибочка #2' }
   { status: 'rejected', reason: 'Ой-ой, ошибочка #3' }
  ]`,j=`Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.resolve('Успех'),
    Promise.reject('Ой-ой, ошибочка #2'),
  ]).then((result) => console.log(result));`,m=`Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.reject('Ой-ой, ошибочка #2'),
    Promise.reject('Ой-ой, ошибочка #3'),
  ]).catch((error) => console.log(error.errors));`;return(0,r.jsxs)("section",{ref:s,className:"section outer",children:[(0,r.jsx)("h3",{children:"Статические методы"}),(0,r.jsx)("p",{children:"У промиса есть статические методы. Их можно разделить на две группы: методы для создания промисов и методы для работы с массивами промисов."}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:["Первая группа ",x.C6," методы, с помощью которых можно создать уже выполненный промис:"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[F()," создает успешно выполненный промис с переданным значением:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"const promise = Promise.resolve('Готово');"}),(0,r.jsx)("p",{children:"Такая запись будет эквивалента:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"const promise = new Promise((resolve) => resolve('Готово'));"})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[J()," создает отклоненный промис с указанной ошибкой:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"const promise = Promise.reject(new Error('Ошибка доступа'));"}),(0,r.jsx)("p",{children:"Такая запись будет эквивалента:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"const promise = new Promise((_, reject)) => reject(new Error('Ошибка доступа')));"})]})]}),(0,r.jsxs)("p",{children:["Не путайте эти статические методы с ",F()," и ",J()," внутри функции-исполнителя"," ",(0,r.jsx)("em",{children:"executor"}),". Статические методы создают новый, уже готовый промис, а функции-аргументы управляют состоянием текущего, уже создающегося промиса."]})]}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:["Вторая группа ",x.C6," методы для работы с коллекциями промисов. На самом деле, это не обязательно должны быть промисы, но обязательно итерируемый объект. JavaScript в этом случае любезно сам обернёт значение в промис."]}),(0,r.jsx)("p",{children:"Все методы этой группы принимают на вход массив, а возвращают один новый промис. Состояние и результат этого промиса зависит от того, что произойдёт во время перебора всей коллекции."}),(0,r.jsx)("p",{children:"Есть 4 метода:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[g," ждёт выполнения ",(0,r.jsx)("strong",{children:"всех"})," переданных промисов"]}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",u," когда все переданные промисы выполнятся успешно, результат"," ",x.C6,"массив результатов:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l,consoleLog:"['Раз', 'Два', 'Три']"}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",p," если хотя бы один переданный промис будет отклонён, результат"," ",x.C6,"ошибка первого отклонённого промиса:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i,consoleLog:"Ой-ой, ошибочка"})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[S," ждёт ",(0,r.jsx)("strong",{children:"первый"})," завершившийся промис"]}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",u," когда самый быстрый промис завершится успешно, результат"," ",x.C6," результат выполнения этого промиса:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n,consoleLog:"Раз"}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",p," если самый быстрый промис завершился с ошибкой, результат"," ",x.C6," снова результат выполнения этого промиса:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:c,consoleLog:"Ой-ой, ошибочка"}),(0,r.jsxs)("p",{children:["Здесь неважно: выполнился самый быстрый промис успешно или с ошибкой ",x.C6," ",S," всегда возвращает результат или ошибку первого завершённого промиса, а результаты остальных промисов игнорируются."]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[C," ждёт когда все промисы завершатся"]}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",u," когда все промисы завершились: неважно ",x.C6," успешно или с ошибкой. Результат ",x.C6," массив объектов с полями в следующем формате:"]}),(0,r.jsxs)("ul",{className:"list markered nested",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)(h.R,{children:"{ status: 'fulfilled', value: ... }"})," для ",u," промисов"]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)(h.R,{children:"{ status: 'rejected', reason: ... }"})," для ",p," промисов"]})})]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:t,consoleLog:o}),(0,r.jsxs)("p",{children:["Возвращаемый промис никогда не будет ",p,", даже если все промисы будут отклонены:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:a,consoleLog:d})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[T," ждёт первый успешный, но падает если все упали"]}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",u," когда самый быстрый промис завершился успешно:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:j,consoleLog:"Успех"}),(0,r.jsxs)("p",{children:["Возвращаемый промис будет ",p," если все промисы завершились ошибкой. Результат ",x.C6," ","специальный объект"," ",(0,r.jsx)(Y.G,{label:(0,r.jsx)(h.R,{children:"AggregateError"}),href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError"}),", у которого можно получить список ошибок:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:m,consoleLog:" [ 'Ой-ой, ошибочка #1', 'Ой-ой, ошибочка #2', 'Ой-ой, ошибочка #3' ]"})]})]})]}),(0,r.jsxs)("section",{className:"section inner",children:[(0,r.jsxs)("p",{children:["Отдельно хочется отметить относительно новый метод ",(0,r.jsx)(h.R,{children:"withResolvers"}),", добавленный в ES2024. Он делает возможным управление промисов в функции-исполнителем ",(0,r.jsx)("em",{children:"executor"})," снаружи. Этот метод возвращает объект, содержащий новый промис и колбэки для управления состоянием этого промиса"," ",F()," и ",J()," (не статические методы):"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"const { promise, resolve, reject } = Promise.withResolvers();"})]})]})});q.displayName="StaticMethods";let $=(0,i.forwardRef)((e,s)=>{let l=`const promise1 = Promise.resolve(42);
const promise2 = Promise.resolve(promise1);

console.log(promise1 === promise2);`,i=`Promise.resolve(1)
  .then((value) => Promise.resolve(value + 1))
  .then((value) => Promise.resolve(value * 2))
  .then((value) => console.log(value));`,n=`Promise.resolve(1)
  .then((value) => Promise.resolve(value + 1))
  .then((promise) => promise.then((value) => Promise.resolve(value * 2)))
  .then((promise) => promise.then((value) => console.log(value)));`;return(0,r.jsxs)("section",{ref:s,className:"section outer",id:"flattering",children:[(0,r.jsx)("h3",{children:"Схлопывание и развёртывание промисов"}),(0,r.jsxs)("p",{children:["Если передать в ",(0,r.jsx)(h.R,{children:"Promise.resolve()"})," другой промис, то метод вернёт переданный промис без изменений. Новый промис создаваться не будет:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l,consoleLog:"true"}),(0,r.jsx)("p",{children:"Этот механизм называется схлопыванием промисов."}),(0,r.jsxs)("p",{children:["Противоположный схлопыванию механизм происходит в ",N,". Если колбэк внутри ",N," возвращает новый промис, JavaScript не создаст структуру вида ",(0,r.jsx)(h.R,{children:"Promise<Promise<value>>"}),", а дождётся разрешения внутреннего промиса и передаст его результат в следующий ",N,". Это называется разворачиванием вложенных промисов: промисов"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i,consoleLog:"4"}),(0,r.jsx)("p",{children:"Что здесь происходит:"}),(0,r.jsxs)("ul",{className:"list stepped",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[(0,r.jsx)(h.R,{children:"Promise.resolve(1)"})," возвращает ",(0,r.jsx)("strong",{children:"значение"})," ",(0,r.jsx)(h.R,{children:"1"})]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Первый ",N," в цепочке возвращает ",(0,r.jsx)("strong",{children:"промис"})," со значением ",(0,r.jsx)(h.R,{children:"2"})]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Второй ",N," получает ",(0,r.jsx)("strong",{children:"значение"})," ",(0,r.jsx)(h.R,{children:"2"})," ",x.C6," произошло разворачивание. Возвращает ",(0,r.jsx)("strong",{children:"промис"})," со значением\xa0",(0,r.jsx)(h.R,{children:"4"})]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Третий ",N," получает ",(0,r.jsx)("strong",{children:"значение"})," ",(0,r.jsx)(h.R,{children:"4"})," ",x.C6," снова произошло разворачивание. Результат просто выводится в консоль."]})})]}),(0,r.jsxs)("p",{children:["Без разворачивания пришлось бы каждый раз вручную вызывать ",N," на промисе, который вернул предыдущий колбэк:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n})]})});$.displayName="PromisesFlattering";let B=(0,i.forwardRef)((e,s)=>(0,r.jsxs)("section",{className:"section outer",ref:s,children:[(0,r.jsx)("p",{children:"Но сперва, конечно же, теория."}),(0,r.jsx)("h2",{children:"Теория: что такое промисы"}),(0,r.jsx)(L,{}),(0,r.jsx)(w,{}),(0,r.jsx)(V,{}),(0,r.jsx)(U,{}),(0,r.jsx)(O,{}),(0,r.jsx)(q,{}),(0,r.jsx)($,{})]}));B.displayName="Theory";let W=(0,i.forwardRef)((e,s)=>{let l=`const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
  };`,i=`const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
  }
}`,n=`const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined; // Для результата
    this.error = undefined; // Для ошибки
  }
}`;return(0,r.jsxs)("section",{className:"section outer",ref:s,children:[(0,r.jsx)("h3",{children:"Состояние и результат"}),(0,r.jsxs)("p",{children:["Класс можно начать с написания конструктора и инициализации. У промиса всего два свойства ",x.C6," состояние и результат. Статусы промиса можно сразу вынести в отдельный объект:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l,name:"MyPromise"}),(0,r.jsxs)("p",{children:["Константы защищают от опечаток. Например если писать\xa0",m," вручную, можно случайно написать"," ",(0,r.jsx)("em",{style:{color:"red"},children:"pendig"})," и получить баг. С константами такого не будет, константы нам бро."]}),(0,r.jsxs)("p",{children:["При создании промис всегда в состоянии ",m,", а значение неизвестно. Поэтому инициализация этих свойств будет выглядеть следующим образом:"," "]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i,name:"MyPromise"}),(0,r.jsxs)("p",{children:["Повторение мать учения: у промисов ",P," хранит и результат выполнения промиса и ошибку. Это очень удобно благодаря тому, что у промиса может быть только три состояния: когда промис в состоянии ",m," ","там записано ",(0,r.jsx)(h.R,{children:"undefined"}),", когда промис в состоянии\xa0",u,", там записан результат, когда в ",p," ",x.C6," ошибка. Результат и ошибка никогда не существуют одновременно, потому что состояние меняется только один раз. Но если очень хочется, то можно всегда завести отдельное состояние для ошибки:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n})]})});W.displayName="StateAndResult";var Z=l(84390);let H=(0,i.forwardRef)((e,s)=>{let l=`const resolve = (value) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.FULFILLED;
  this.value = value;
};

const reject = (error) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.REJECTED;
  this.value = error;
};`,i=`const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;

    const resolve = (value) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.FULFILLED;
      this.value = value;
    };

    const reject = (error) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.REJECTED;
      this.value = error;
    };
  }
}`,n=`try {
    executor(resolve, reject);
} catch (error) {
    reject(error);
}`,c=`const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;

    const resolve = (value) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.FULFILLED;
      this.value = value;
    };

    const reject = (error) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.REJECTED;
      this.value = error;
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}`,t=`class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
    this.onFulfilledCallbacks = []; // <--- Добавили пустой массив для fulfilled-колбэков
    this.onRejectedCallbacks = []; // <--- Добавили пустой массив rejected-колбэков
    ...
  }
}`,o=`const resolve = (value) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.FULFILLED;
  this.value = value;
  this.onFulfilledCallbacks.forEach(callback => callback(this.value));
};

const reject = (error) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.REJECTED;
  this.value = error;
  this.onRejectedCallbacks.forEach(callback => callback(this.value));
};`,a=`const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(callback => callback(this.value));
    };

    const reject = (error) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.REJECTED;
      this.value = error;
      this.onRejectedCallbacks.forEach(callback => callback(this.value));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}`,d=`Жребий брошен
Uncaught TypeError: promise.then is not a function`,j=`const promise = new Promise((resolve, reject) => {
  console.log('Бросаем монету');

  setTimeout(() => {
    const value = Math.floor(Math.random() * 2);

    if (value) {
      resolve(\`Решка! Значение: $\{value}\`);
    } else {
      reject(new Error(\`Орёл! Значение: $\{value}\`));
    }
  }, 1000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message))
  .finally(() => console.log('Жребий брошен'));`;return(0,r.jsxs)("section",{className:"section outer",ref:s,children:[(0,r.jsx)("h3",{children:"Управление состоянием промиса"}),(0,r.jsxs)("p",{children:["Для управления состоянием промиса нужны методы ",F()," и ",J(),". Их логика невероятно проста благодаря тому что состояние может меняться только один раз:"," "]}),(0,r.jsxs)("ol",{className:"list ordered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если состояние промиса не ",m," ",x.C6," ничего не делаем"]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если состояние промиса ",m," ",x.C6," обновляем состояние ",(0,r.jsx)(h.R,{children:"this.state"}),": в"," ",F()," на ",u,", в ",J()," на ",p,". Здесь же обновляем и результат выполнения промиса ",(0,r.jsx)(h.R,{children:"this.value"}),": в ",F(),"записываем результат, в"," ",J()," записываем ошибку"]})})]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l}),(0,r.jsx)("p",{children:"Эти методы тоже добавляем в конструктор класса:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i,name:"MyPromise"}),(0,r.jsx)("br",{}),(0,r.jsxs)(G.L,{type:G.G.SECONDARY,children:[(0,r.jsx)("div",{className:"tags",children:(0,r.jsx)("div",{className:"tag secondary",children:"Вопросик"})}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("b",{children:["Почему методы ",F()," и ",J()," добавляются в конструктор?"]})," ","Если бы они были доступны снаружи, любой сторонний кусок кода мог бы вклиниться в работу промиса и принудительно завершить его, когда ему вздумается. Например:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"paymentPromise.resolve({ status: 'SUCCESS' });"}),(0,r.jsxs)("p",{children:["В этом примере внутри ",(0,r.jsx)(h.R,{children:"paymentPromise"})," делается запрос к банку. Если бы"," ",J()," был бы доступен снаружи, злоумышленник или просто плохой код могли бы сфабриковать транзакцию. Выглядит не очень надёжно."]}),(0,r.jsxs)("p",{children:["Поэтому ",F()," и ",J()," внутри конструктора и вызвать их может только код, который находится прямо внутри функции-исполнителя. Внешний мир никак не может повлиять на исход операции."]})]}),(0,r.jsxs)("p",{children:["Помимо методов ",F()," и ",J()," в конструкторе должна выполняться сама функция-исполнитель. Сейчас в конструкторе ничего не проиходит. Функция-исполнитель уже передаётся в конструктор как аргумент, осталось просто запустить её. Для безопастности нужно обернуть её в"," ",(0,r.jsx)(h.R,{children:"try…catch"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n,hideLines:!0}),(0,r.jsx)("p",{children:"Получаем на данном этапе следующий конструктор:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:c,name:"MyPromise"}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h3",{children:"Очереди колбэков"}),(0,r.jsxs)("p",{children:["Также нужно добавить в конструктор два массива колбэков: ",R," и"," ",f,". В них будут складываться колбэки из ",N," и ",v," в том случае, если промис находится статусе ",m,"."]}),(0,r.jsx)("p",{children:"При создании промиса они инициализируются как пустые списки поэтому:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:t,hideLines:!0,name:"MyPromise"}),(0,r.jsxs)("p",{children:["Нужно учесть эти массивы в методах ",F()," и ",J(),":"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["В ",F()," запускаем все сохраненные колбэки из ",R]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["В ",J()," запускаем все сохраненные колбэки из ",f]})})]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:o,hideLines:!0}),(0,r.jsx)("p",{children:"Собираем конструктор и получаем:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:a,name:"MyPromise"}),(0,r.jsx)("p",{children:"С конструктором закончили. Можно протестировать, что промис создаётся и даже запускается."}),(0,r.jsxs)("p",{children:["Вернёмся к примеру, который анализировали в самом начале этого раздела и запустим его, но уже с"," ",(0,r.jsx)(h.R,{children:"MyPromise"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:j}),(0,r.jsx)("p",{children:"В консоли сейчас выведется:"}),(0,r.jsx)(Z.k,{code:d}),(0,r.jsx)("p",{children:"Всё потому, что мы написали только инициализацию и запуск промиса: выполняется синхронная функция-исполнитель, создаётся промис, а результат выполнения промиса никак не обрабатывается. Для обработки результата выполнения промиса нужно написать соответствующие методы обработки."})]})]})});H.displayName="Executor";var K=l(78165);let Q=(0,i.forwardRef)((e,s)=>{let l=`const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
  };

  class MyPromise {
    constructor(executor) {
      ...
    }

    then(onFulfilled, onRejected) {
      // Что-то делаем с результатом
    }

    catch(onRejected) {
      // Что-то делаем с ошибкой
    }

    finally(onFinally) {
      // Что-то делаем
    }

    static resolve(value) {
    // Создать успешно выполненный промис с переданным значением
    }

    static reject(error) {
      // Создать отклоненный промис с указанной ошибкой
    }
  }`,i=`catch(onRejected) {
    return this.then(null, onRejected);
  }`,n=`then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };
  }`,c=`then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      // Что-то делаем с результатом
    })
  }`,t=`then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      if (this.state === STATUS.FULFILLED) {
        // Что-то делаем с результатом
      }

      if (this.state === STATUS.REJECTED) {
        // Что-то делаем с ошибкой
      }

      if (this.state === STATUS.PENDING) {
        // Откладываем колбэки
      }
    });
  }`,o=`then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        // Что-то делаем с результатом
      };

      const handleRejected = () => {
        // Что-то делаем с ошибкой
      };

      if (this.state === STATUS.FULFILLED) {
        handleFulfilled();
      }

      if (this.state === STATUS.REJECTED) {
        handleRejected();
      }

      if (this.state === STATUS.PENDING) {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }`,a=`if (this.state === STATUS.PENDING) {
    this.onFulfilledCallbacks.push(onFulfilled);
    this.onRejectedCallbacks.push(onRejected);
  }`,d=`if (this.state === STATUS.PENDING) {
    this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
    this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
  }`,j=`then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        // Что-то делаем с результатом
      };

      const handleRejected = () => {
        // Что-то делаем с ошибкой
      };

      if (this.state === STATUS.FULFILLED) {
        queueMicrotask(handleFulfilled);
      }

      if (this.state === STATUS.REJECTED) {
        queueMicrotask(handleRejected);
      }

      if (this.state === STATUS.PENDING) {
        this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
        this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
      }
    });
  }`,_=`const handleFulfilled = () => {
    try {
      // п.1 Получаем результат:
      const result = onFulfilled(this.value);

      if (result instanceof MyPromise) {
        // п.2 Если результат — промис, то нужно дождаться его выполнения:
        result.then(resolve, reject);
      } else {
        // п.3 Если результат не промис — вызываем resolve с этим значением
        resolve(result);
      }
    } catch (error) {
      // п.4 Если результат ошибка — обрабатываем ошибку и вызываем reject с этим значением
      reject(error);
    }
  };`,R=`const handleRejected = () => {
    try {
      // п.1 Получаем результат:
      const result = onRejected(this.value);

      if (result instanceof MyPromise) {
        // п.2 Если результат — промис, то нужно дождаться его выполнения:
        result.then(resolve, reject);
      } else {
        // п.3 Если результат не промис — вызываем resolve с этим значением
        resolve(result);
      }
    } catch (error) {
      // п.4 Если результат ошибка — обрабатываем ошибку и вызываем reject с этим значением
      reject(error);
    }
  };`,f=`Promise.reject('Ошибка')
    .catch(() => {
      return 'Всё хорошо';
    })
    .then((result) => console.log(result));`,g=`Promise.reject('Ошибка 1')
    .catch(() => {
      throw new Error('Ошибка 2');
    })
    .catch((error) => console.log(error.message));`,S=`finally(onFinally) {
      return this.then(
        (value) => {
          // Выполнить onFinally и пробросить value дальше
        },
        (error) => {
          // Выполнить onFinally и выбросить error
        }
      );
    }`,T=`finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (error) => {
        onFinally();
        throw error;
      }
    );
  }`,C=`finally(onFinally) {
    return this.then(
      (value) => {
        return MyPromise.resolve(x);
      },
      (error) => {
        return MyPromise.resolve(x);
      }
    );
  }`,y=`  finally(onFinally) {
    return this.then(
      (value) => {
        return MyPromise.resolve(() => {
          onFinally();
          return value;
        });
      },
      (error) => {
        return MyPromise.resolve(() => {
          onFinally();
          throw error;
        });
      }
    );
  }`,E=`const promise = new MyPromise((resolve, reject) => {
    resolve(42);
  });

  promise
    .finally(() => new MyPromise((resolve) => setTimeout(resolve, 10000)))
    .then((result) => console.log('Результат:', result))
    .catch((error) => console.error('Ошибка:', error.message));`,I=`finally(onFinally) {
    return this.then(
      (value) => {
        return Promise.resolve(onFinally()).then(() => value);
      },
      (error) => {
        return Promise.resolve(onFinally()).then(() => {
          throw error;
        });
      }
    );
  }`,L=`const promise1 = Promise.resolve(42);
const promise2 = Promise.resolve(promise1);

console.log(promise1 === promise2);`,w=`const promise1 = MyPromise.resolve(42);
const promise2 = MyPromise.resolve(promise1);

console.log(promise1 === promise2); // true`,D=`static resolve(value) {
  // Что-то сделать
}

static reject(error) {
  // Что-то сделать
}`,M=`static resolve(value) {
  if (value instanceof MyPromise) return value;
  return new MyPromise((resolve) => resolve(value));
}

static reject(error) {
  return new MyPromise((_, reject) => reject(error));
}`;return(0,r.jsxs)("section",{ref:s,className:"section outer",children:[(0,r.jsx)("h3",{children:"Обработка результата выполнения промиса"}),(0,r.jsxs)("p",{children:["Методы ",N,", ",v," и ",A,", в отличии от ",F()," и ",J(),", доступны всем, кто ждёт результат промиса. Поэтому эти методы будут публичными методами класса. Также нам понадобятся ",(0,r.jsx)("strong",{children:"статические"})," методы ",F()," и ",J(),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l}),(0,r.jsxs)("p",{children:["Можно начать с метода ",v," ",x.C6," это просто обёртка для ",N," с аргументами"," ",(0,r.jsx)(h.R,{children:"null"})," и ",(0,r.jsx)(h.R,{children:"onRejected"}),", поэтому:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:i}),(0,r.jsxs)("p",{children:["А теперь займёмся методом ",N,"."]}),(0,r.jsxs)("p",{children:["В него по спецификации JavaScript передаётся два аргумента для двух возможных исходов промиса — функции"," ",(0,r.jsx)(h.R,{children:"onFulfilled"})," и ",(0,r.jsx)(h.R,{children:"onRejected"})," для успешного выполненого и выполненного с неудачей промиса соответственно. В свою очередь у ",(0,r.jsx)(h.R,{children:"onFulfilled"})," и"," ",(0,r.jsx)(h.R,{children:"onRejected"})," один аргумент — значение с которым промис был выполнен:"," ",P," или просто ",(0,r.jsx)(h.R,{children:"this.value"})," в нашем классе"," ",(0,r.jsx)(h.R,{children:"MyPromise"}),"."]}),(0,r.jsxs)("p",{children:["По спецификации, у ",(0,r.jsx)(h.R,{children:"onFulfilled"})," и ",(0,r.jsx)(h.R,{children:"onRejected"})," есть поведение на случай, если вместо них были переданы не функции. Ну мало ли, всякое бывает."]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если ",(0,r.jsx)(h.R,{children:"onFulfilled"})," не функция, то автоматически возвращается результат"]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если ",(0,r.jsx)(h.R,{children:"onRejected"})," не функция, то автоматически выбрасывается ошибка"]})})]}),(0,r.jsxs)("p",{children:["Учтём это в методе ",N," в самом начале во избежание дальнейших ошибок, когда будем вызывать эти функции:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n,hideLines:!0}),(0,r.jsxs)("p",{children:["Главная особенность метода ",N," в том, что он всегда должен возвращать новый промис, на этом основана возможность строить цепочки промисов. Поэтому из метода ",N," должнен возвращаться промис:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:c,hideLines:!0}),(0,r.jsx)("br",{}),(0,r.jsxs)(G.L,{type:G.G.PRIMARY,children:[(0,r.jsx)("div",{className:"tags",children:(0,r.jsx)("div",{className:"tag primary",children:"Важно"})}),(0,r.jsxs)("p",{children:["У возвращаемого промиса ",F()," и ",J()," ",x.C6," это не те ",F()," ","и ",J(),", что были в конструкторе. Это новые функции, которые управляют новым промисом — тем, который возвращает ",N,". Они нужны для продолжения цепочки промисов."]})]}),(0,r.jsxs)("p",{children:["Внутри возвращаемого промисы и будем проверить состояние ",(0,r.jsx)("strong",{children:"текущего"})," промиса. Промис может быть только в одном из трёх состояний, поэтому будет всего три условия:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:t,hideLines:!0}),(0,r.jsx)("p",{children:"В зависимости от состояния промиса может выполнится одно из трёх условий:"}),(0,r.jsxs)("ol",{className:"list ordered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[m,": откладываем колбэки в массивы ",(0,r.jsx)(h.R,{children:"onFulfilledCallbacks"})," и"," ",(0,r.jsx)(h.R,{children:"onRejectedCallbacks"})]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[u,": вызываем ",(0,r.jsx)(h.R,{children:"onFulfilled"})," с результатом выполнения промиса"]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:[p,": вызываем ",(0,r.jsx)(h.R,{children:"onRejected"})," с результатом выполнения промиса (помним, что в этом случае в ",(0,r.jsx)(h.R,{children:"this.value"})," будет записана ошибка)"]})})]}),(0,r.jsxs)("p",{children:["Добавим вспомогательные функции ",(0,r.jsx)(h.R,{children:"handleFulfilled"})," и"," ",(0,r.jsx)(h.R,{children:"handleRejected"})," ",x.C6," они пригодятся для избежания повторения кода. Держа в голове список выше обновим условия:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:o,hideLines:!0}),(0,r.jsxs)("p",{children:["Задержимся на условии проверки состояния ",m,":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:a,hideLines:!0}),(0,r.jsxs)("p",{children:["У такого кода есть огромная проблема: колбэки будут вызывать синхронно, а это полностью ломает весь смысл промисов. Как это исправить? С помощью функции ",(0,r.jsx)(h.R,{children:"queueMicrotask"}),", которая добавляет переданную функцию в очередь микрозадач:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:d,hideLines:!0}),(0,r.jsxs)("p",{children:["Оборачивание колбэков в ",(0,r.jsx)(h.R,{children:"queueMicrotask"})," в момент регистрации гарантирует, что даже если промис меняет статус синхронно (например сразу после создания промиса вызываем ",F()," со значением), колбэк выполнится после всего синхронного кода. Это точно соответствует спецификации промисов."]}),(0,r.jsxs)("p",{children:["Аналогично нужно обернуть оставшимиеся состояния в ",(0,r.jsx)(h.R,{children:"queueMicrotask"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:j,hideLines:!0}),(0,r.jsxs)("p",{children:["Осталось разобраться со вспомогательными функциями ",(0,r.jsx)(h.R,{children:"handleFulfilled"})," и"," ",(0,r.jsx)(h.R,{children:"handleRejected"}),"."]}),(0,r.jsx)("p",{children:"Обе функции имеют одинаковый алгоритм:"}),(0,r.jsxs)("ol",{className:"list ordered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["С помощью колбэка, ",(0,r.jsx)(h.R,{children:"onFulfilled"})," или ",(0,r.jsx)(h.R,{children:"onRejected"}),", получаем результат: значение, ошибку, ",(0,r.jsx)(h.R,{children:"undefined"})," или промис."]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsx)("p",{children:"Если результат — промис, то нужно дождаться его выполнения "})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если результат не промис — вызываем ",F()," с этим значением"]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если результат ошибка — обрабатываем ошибку и вызываем ",J()," с этим значением"]})})]}),(0,r.jsxs)("p",{children:["В коде ",(0,r.jsx)(h.R,{children:"handleFulfilled"})," будет выглядеть следующим образом:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:_,hideLines:!0}),(0,r.jsxs)("p",{children:["Функция ",(0,r.jsx)(h.R,{children:"handleRejected"})," похожа на ",(0,r.jsx)(h.R,{children:"handleFulfilled"}),", но с разницей в получении результата:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:R}),(0,r.jsxs)("p",{children:["Может показаться, что на (11) строчке затесалась ошибка и вместо ",F("result")," должно быть"," ",J("result"),", но это не так, всё написано верно. Давайте проведём небольшой эксперимент. Что выведет код ниже?"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:f,hideLines:!0}),(0,r.jsx)(K.n,{title:"Правильный ответ",children:(0,r.jsx)(Z.k,{code:"Всё хорошо"})}),(0,r.jsx)("p",{children:"А здесь?"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:g,hideLines:!0}),(0,r.jsx)(K.n,{title:"Правильный ответ",children:(0,r.jsx)(Z.k,{code:"Ошибка 2"})}),(0,r.jsxs)("p",{children:["В первом примере изначальный промис выполняется с ошибкой \xabОшибка\xbb, эту ошибку ловит ",v,", но из самого"," ",v," возвращается не ошибка, а обычное значение \xabВсё хорошо\xbb. Во втором примере изначальный промис тоже выполняется с ошибкой, эту ошибку ловит ",v,", но в этот раз из самого ",v," возвращается другая ошибка."]}),(0,r.jsxs)("p",{children:["Такое поведение можно назвать восстановлением после ошибки: если в цепочке выбрасывается ошибка — цепочка останется ",p,", но если вернуть из цепочки обычное значение, то состояние цепочки меняется с"," ",p," на ",u," или другими словами восстанавливается. Собственно, в строчке (11) это и происходит"," ",x.C6," восстановление цепочки. При этом не следует путать: это меняется не состояние изначального промиса"," ",x.C6," он как был ",p," так и остался ",p,". Из каждого ",N," или ",v," ","возвращается новый промис с новым состоянием."]}),(0,r.jsxs)("p",{children:["Осталось написать метод ",A,"."]}),(0,r.jsx)("p",{children:" Что нам о нём известно:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"Выполняется в любом случае"}),(0,r.jsxs)("p",{className:"list__footer",children:["Если промис ",u," и если промис ",p]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"Не меняет состояние промиса"}),(0,r.jsxs)("p",{className:"list__footer",children:["Если промис был ",u," ",x.C6," промис останется ",u,", если был ",p," ",x.C6," ","останется ",p]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"Не меняет значение промиса"}),(0,r.jsxs)("p",{className:"list__footer",children:["А передаёт его дальше (если есть методы дальше в цепочке). Если вернуть значение ",x.C6," оно будет проигнорировано"]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:["Из ",A," можно выбросить ошибку"]}),(0,r.jsx)("p",{className:"list__footer",children:"Если вернуть значение, то оно будет проигнорировано"})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:["Это синтаксический сахар над ",N]}),(0,r.jsxs)("p",{className:"list__footer",children:["Не нужно писать всю логику с нуля, надо воспользоваться ",N]})]})]}),(0,r.jsxs)("p",{children:["Воспользуемся методом ",N,", написанным ранее. У метода есть два аргумента ",x.C6," колбэки"," ",(0,r.jsx)(h.R,{children:"onFulfilled"})," (c аргументом ",(0,r.jsx)(h.R,{children:"value"}),") и"," ",(0,r.jsx)(h.R,{children:"onRejected"})," (с аргументом ",(0,r.jsx)(h.R,{children:"error"}),"). В обоих колбэках нам необходимо выполнить ",(0,r.jsx)(h.R,{children:"onFinally"}),", значение пробросить дальше, а ошибку выбросить:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:S,hideLines:!0}),(0,r.jsx)("p",{children:"Первый вариант, который приходит в голову:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:T,hideLines:!0}),(0,r.jsxs)("p",{children:["Выглядит отлично, все условия выполняются: выполняем ",(0,r.jsx)(h.R,{children:"onFinally"}),", значение передаём дальше, ошибку выбрасываем. Но у этой этой реализации есть проблема. Пример, где всё сломается:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:E,hideLines:!0}),(0,r.jsxs)("p",{children:["В консоли выведется \xabРезультат: 42\xbb, но важно здесь не то, что выведется, а когда. Промис с задержкой от таймера в 10000 ms был проигнорирован! Результатом выполнения промиса может быть что угодно: число, строку,"," ",(0,r.jsx)(h.R,{children:"undefined"})," и ",(0,r.jsx)("strong",{children:"промис"}),". Здесь про промисы вообще забыли. Хоть"," ",A," и пробрасывает исходное значение дальше, но промисы все всегда обязаны ждать."]}),(0,r.jsxs)("p",{children:["Чтобы это исправить воспользуемся лайфхаком: если передать в ",(0,r.jsx)(h.R,{children:"Promise.resolve()"})," другой промис, то метод вернет этот же самый переданный промис без изменений, новый объект создаваться не будет:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:L,hideLines:!0}),(0,r.jsxs)("p",{children:["Внутри движок JavaScript проверяет тип аргумента и если это промис, то он возвращается как есть, полностью сохраняя состояние и значение, будь они хоть ",u," с результатом или ",p," с ошибкой."]}),(0,r.jsxs)("p",{children:["У нас этот механизм пока не реализован. Добавим для этого два статических метода в класс ",x.C6," ",F()," и ",J(),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:D,name:"snippet"}),(0,r.jsx)("p",{children:" Они буду отличаться от своих тёзок в конструкторе:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[F()," и ",J()," как методы в конструкторе"]}),(0,r.jsxs)("p",{className:"list__footer",children:["Работают только внутри функции-исполнителя ",(0,r.jsx)("em",{children:"executor"})," и меняют состояние только текущего промиса"]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:[F()," и ",J()," как статические методы"]}),(0,r.jsxs)("p",{className:"list__footer",children:["Создают новый промис и могут быть вызваны где угодно в коде. Это как ",(0,r.jsx)(h.R,{children:"Math.random()"})," ",x.C6," ",(0,r.jsx)(h.R,{children:"Math"})," тоже класс, а ",(0,r.jsx)(h.R,{children:"random"})," ",x.C6," его статический метод."]})]})]}),(0,r.jsxs)("p",{children:["Что должны делать эти статические методы? Мы уже отвечали на этот вопрос, например, когда писали"," ",(0,r.jsx)(h.R,{children:"handleFulfilled"})," или ",(0,r.jsx)(h.R,{children:"handleRejected"}),". Только здесь задача будет ещё проще:"]}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если значение уже промис ",x.C6," возвращаем его как есть"]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если значение обычное значение ",x.C6," создаём новый промис, которому сразу вызываем"," ",F("value")]})}),(0,r.jsx)("li",{className:"list__item",children:(0,r.jsxs)("p",{children:["Если ошибка ",x.C6," создаём промис, которому сразу вызываем ",J("error")]})})]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:M}),(0,r.jsx)("p",{children:"Проверим:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:w}),(0,r.jsxs)("section",{id:"custom_finally",children:[(0,r.jsxs)("p",{children:["Теперь надо подправить ",A,". Добавляем возврат промиса из обоих колбэков:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:C}),(0,r.jsxs)("p",{children:["Теперь у нас есть защита на все случаи: если вернётся обычное значение, если вернётся ошибка, если вернётся промис ",x.C6," мы готовы ко всему. Осталось понять, что написать внутри."]}),(0,r.jsx)("p",{children:"Но теперь нельзя просто так написать внутри промиса:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:y}),(0,r.jsxs)("p",{children:["В созданный статическим методом промис сейчас передаётся функция, а не результат её вызова."," ",(0,r.jsx)(h.R,{children:"onFinally"})," никогда не вызывается, ",(0,r.jsx)(h.R,{children:"value"})," не возвращается,"," ",(0,r.jsx)(h.R,{children:"error"})," никогда не выбрасывается."]}),(0,r.jsx)("p",{children:"Нам нужно:"}),(0,r.jsxs)("ol",{className:"list ordered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{children:["Вызвать ",(0,r.jsx)(h.R,{children:"onFinally"}),", получить результат:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"const result = onFinally();"})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{children:["Передать ",(0,r.jsx)(h.R,{children:"result"})," в статический метод ",(0,r.jsx)(h.R,{children:"resolve"}),":"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"MyPromise.resolve(result)"}),(0,r.jsxs)("p",{children:["Это тот промис, который потом будем возвращать из каждого колбэка ",N,"."]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{children:["Так как это промис, то мы можем вызвать у него ",N," и продолжить цепочку. В случае с ",u," ","значение просто передаётся дальше:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"return MyPromise.resolve(result).then(() => value);"}),(0,r.jsx)("p",{children:"А в случае ошибки выбрасывается ошибка:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:"return MyPromise.resolve(result).then(() => { throw error; });"})]})]}),(0,r.jsxs)("p",{children:["Вот и всё, ",A," готов:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:I})]})]})});Q.displayName="InstanceMethods";let X=(0,i.forwardRef)((e,s)=>{let l=`const promise = new Promise((resolve, reject) => {
    console.log('Бросаем монету');

    setTimeout(() => {
      const value = Math.floor(Math.random() * 2);

      if (value) {
        resolve(\`Решка! Значение: $\{value}\`);
      } else {
        reject(new Error(\`Орёл! Значение: $\{value}\`));
      }
    }, 1000);
  });

  promise
    .then((result) => console.log(result))
    .catch((error) => console.error(error.message))
    .finally(() => console.log('Жребий брошен'));`,i=`Бросаем монету
  Решка! Значение: 1 // Или выведет ошибку 'Орёл! Значение: 0'
  Жребий брошен`,n=`finally(onFinally) {
    return this.then(
      (value) => {
        return Promise.resolve(onFinally()).then(() => value);
      },
      (error) => {
        return Promise.resolve(onFinally()).then(() => {
          throw error;
        });
      }
    );
  }`,c=`const STATUS = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
  };
  
  class MyPromise {
    constructor(executor) {
      this.state = STATUS.PENDING;
      this.value = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state !== STATUS.PENDING) return;
        this.state = STATUS.FULFILLED;
        this.value = value;
  
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      };
  
      const reject = (error) => {
        if (this.state !== STATUS.PENDING) return;
        this.state = STATUS.REJECTED;
        this.value = error;
  
        this.onRejectedCallbacks.forEach((callback) => callback(this.value));
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
      onRejected = typeof onRejected === "function" ? onRejected : (error) => { throw error; };
  
      return new MyPromise((resolve, reject) => {
        const handleFulfilled = () => {
          try {
            const result = onFulfilled(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        const handleRejected = () => {
          try {
            const result = onRejected(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === STATUS.FULFILLED) {
          queueMicrotask(handleFulfilled);
        }
  
        if (this.state === STATUS.REJECTED) {
          queueMicrotask(handleRejected);
        }
  
        if (this.state === STATUS.PENDING) {
          this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
          this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    finally(onFinally) {
      return this.then(
        (value) => {
          return Promise.resolve(onFinally()).then(() => value);
        },
        (error) => {
          return Promise.resolve(onFinally()).then(() => {
            throw error;
          });
        }
      );
    }

    static resolve(value) {
      if (value instanceof MyPromise) return value;
      return new MyPromise((resolve) => resolve(value));
    }

    static reject(error) {
      return new MyPromise((_, reject) => reject(error));
    }
  }`;return(0,r.jsxs)("section",{className:"section outer",ref:s,children:[(0,r.jsx)("h2",{children:"Практика: пишем свой промис"}),(0,r.jsx)("p",{children:"Теорию разобрали, приступаем к написанию собственного класса промиса. Опираться будем на следующий пример:"}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:l,consoleLog:i}),(0,r.jsx)("p",{children:"Что мы видим важное для нас в этом примере с первого взгляда:"}),(0,r.jsxs)("ul",{className:"list markered",children:[(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:["Конструкция ",(0,r.jsx)(h.R,{children:"new Promise(...)"})]}),(0,r.jsxs)("p",{className:"list__footer",children:["Она создаёт новый объект промиса. ",(0,r.jsx)(h.R,{children:"Promise"})," ",x.C6," это класс, который доступен глобально в движке JavaScript"]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"Функция-исполнитель"}),(0,r.jsxs)("p",{className:"list__footer",children:["Функция-исполнитель запускает асинхронную операцию, которая выполнится только через какое-то время. Там в зависимости от того, какое число возвращает ",(0,r.jsx)(h.R,{children:"Math.random()"}),", будет вызван один из двух колбэков: ",F()," или ",J()," с результатом."]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsx)("p",{className:"list__title",children:"Результат обрабатывается в цепочке промисов"}),(0,r.jsxs)("p",{className:"list__footer",children:["Колбэки внутри ",N," и ",v," просто выводят результат"]})]}),(0,r.jsxs)("li",{className:"list__item",children:[(0,r.jsxs)("p",{className:"list__title",children:["В конце есть ",A]}),(0,r.jsx)("p",{className:"list__footer",children:"Просто выводит текст"})]})]}),(0,r.jsx)(W,{}),(0,r.jsx)(H,{}),(0,r.jsx)(Q,{}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("p",{children:["Вот и всё, ",A," готов:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:n}),(0,r.jsxs)("p",{children:["Класс ",(0,r.jsx)(h.R,{children:"MyPromise"})," тоже:"]}),(0,r.jsx)(b.z,{lang:k.Pl.JAVASCRIPT,code:c,name:"MyPromise"})]})]})});X.displayName="Practice";let ee=()=>{let e=(0,i.useRef)(null),s=(0,i.useRef)(null),l=[{id:(0,a.Ak)(),link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",label:"MDN Web Docs: Promise"},{id:(0,a.Ak)(),link:"https://learn.javascript.ru/promise-basics",label:"Современный учебник JavaScript: Промисы"},{id:(0,a.Ak)(),link:"https://tc39.es/ecma262/#sec-promise-objects",label:"ECMAScript Language Specification: Promise"}],h=[{title:"Теория: что такое промисы",ref:e},{title:"Практика: пишем свой промис",ref:s}];return(0,r.jsxs)(n.o,{postConfig:c.KG[c.Zr.PROMISES],heroConfig:{size:t.Xd.SMALL,pattern:t.Uy.CROSS},children:[(0,r.jsx)(o.M,{items:h,strictLanguage:c.KG[c.Zr.PROMISES].language}),(0,r.jsx)(B,{ref:e}),(0,r.jsx)(X,{ref:s}),(0,r.jsx)(d.e,{items:l,language:c.KG[c.Zr.PROMISES].language})]})}},97347:e=>{e.exports={accordion:"Accordion_accordion__HIbE8",accordion__header:"Accordion_accordion__header__UWG0s",accordion__icon:"Accordion_accordion__icon___jgnh",opened:"Accordion_opened__ypqTQ",accordion__title:"Accordion_accordion__title__Tqoe7",accordion__body:"Accordion_accordion__body__co4uD",appearBodyFromTop:"Accordion_appearBodyFromTop__RycRm"}}},e=>{e.O(0,[230,867,459,577,498,636,593,792],()=>e(e.s=89821)),_N_E=e.O()}]);