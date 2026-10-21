(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{336:e=>{e.exports={code_snippet:"CodeSnippet_code_snippet__EDJgC"}},5351:(e,r,s)=>{"use strict";s.d(r,{z:()=>m});var l=s(37876),t=s(28948),o=s(14232),i=s(78984),n=s(99342),c=s.n(n),a=s(336),d=s.n(a);let m=({lang:e,code:r,name:s,customName:n,consoleLog:a,hideLines:m=!1})=>{let j=((e=!0)=>{let r=(0,o.useContext)(i.M),s=(0,o.useRef)(null);if(!r)throw Error("useCodeSnippetNumber must be used within a <CodeSnippetProvider>");return e&&null===s.current&&(r.counterRef.current+=1,s.current=r.counterRef.current),s.current})(c()(s)&&c()(n)),h=s??`snippet(${j})`;return(0,l.jsx)("div",{className:"spacer bottom small",children:(0,l.jsx)("div",{className:d().code_snippet,children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col col--100",children:(0,l.jsx)(t.Cy,{language:e,name:h,customName:n,code:r,isTerminal:m,consoleLog:a})})})})})}},6549:(e,r,s)=>{"use strict";s.d(r,{M:()=>h});var l=s(37876),t=s(14232),o=s(15039),i=s.n(o),n=s(78261),c=s(55686),a=s(40502),d=s(20381),m=s(41395),j=s.n(m);let h=({customTitle:e,items:r,strictLanguage:s,hideNumbers:o,variant:m=c.j.PRIMARY})=>{let h=i().bind(j()),{language:x}=(0,n.W)(),u=(0,t.useMemo)(()=>r.map(e=>(0,l.jsx)("li",{className:"list__item",children:(0,l.jsx)("button",{onClick:()=>(e=>{let r=e.current?.getBoundingClientRect();if(r){let e=r.top+window.pageYOffset-150;window.scrollTo({top:e,behavior:"smooth"})}})(e.ref),className:h([j().table_of_contents__button,j()[m]]),"arial-label":`${(0,d.T)(s||x,a.fN)} ${e.title}`,children:e.title})},e.title)),[r]);return(0,l.jsxs)("section",{className:h([j().table_of_contents,"section outer"]),children:[(0,l.jsx)("h2",{className:h([j().table_of_contents__title,j()[m]]),children:(0,d.T)(s||x,e||a.cL)}),o?(0,l.jsx)("ul",{className:"list",children:u}):(0,l.jsx)("ol",{className:"list ordered",children:u})]})}},9095:e=>{e.exports={external_link:"ExternalLink_external_link__91aO2",external_link__icon:"ExternalLink_external_link__icon__u3FgC"}},11130:(e,r,s)=>{"use strict";s.d(r,{M:()=>l.M});var l=s(6549)},12062:(e,r,s)=>{"use strict";s.d(r,{G:()=>a});var l=s(37876),t=s(15039),o=s.n(t),i=s(9399),n=s(9095),c=s.n(n);let a=({href:e,label:r})=>{let s=o().bind(c());return(0,l.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:s(["link",c().external_link]),children:[r,(0,l.jsx)(i.li,{className:c().external_link__icon})]})}},14831:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>W});var l=s(37876),t=s(83577),o=s(27689),i=s(37339),n=s(14232),c=s(11130),a=s(5351),d=s(58525),m=s(28948),j=s(12062),h=s(60813),x=s(61904),u=s(83232);let P=(0,l.jsx)(d.R,{children:"Promise.all()"}),p=(0,l.jsx)(d.R,{children:"Promise.race()"}),g=(0,l.jsx)(d.R,{children:"Promise.any()"}),_=(0,l.jsx)(d.R,{children:"Promise.allSettled()"}),y=(0,l.jsx)(d.R,{children:"iterable"}),A=(0,l.jsx)("em",{children:"pending"}),v=(0,l.jsx)(d.R,{children:"MyPromise.all()"}),C=(0,l.jsx)(d.R,{children:"MyPromise.race()"}),R=(0,l.jsx)(d.R,{children:"MyPromise.any()"}),f=(0,l.jsx)(d.R,{children:"MyPromise.allSettled()"}),b=(0,l.jsx)(d.R,{children:"Promise.resolve()"});d.R;let S=(0,l.jsx)(d.R,{children:"then"}),T=(0,l.jsx)(d.R,{children:"catch"}),N=(0,n.forwardRef)((e,r)=>{let s=`Promise.all([
  Promise.resolve('Первый выполнился'),
  Promise.resolve('Второй выполнился'),
  Promise.resolve('Третий выполнился'),
]).then((result) => console.log(result));`,t=`const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
};

Promise.all([
  resolveWithDelay('Первый выполнился', 3000),
  resolveWithDelay('Второй выполнился', 1000),
  resolveWithDelay('Третий выполнился', 2000),
]).then((result) => console.log(result));`,o=`const rejectWithDelay = (value, delay) => {
  return new Promise((_, reject) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      reject(value);
    }, delay)
  );
};

const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.all([
  resolveWithDelay('Первый', 3000),
  rejectWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
])
  .then((result) => console.log(\`$\{result} выполнился\`))
  .catch((error) => console.error(\`$\{error} упал\`));`,i=`Второй пошёл
Error: Второй упал
Третий пошёл
Первый пошёл`,n=`Promise.all([
  Promise.reject("Первый"),
  Promise.reject("Второй"),
  Promise.reject("Третий"),
])
  .then((result) => console.log(\`$\{result} выполнился\`))
  .catch((error) => console.error(\`$\{error} упал\`));`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",P]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Всё или ничего"}),(0,l.jsxs)("p",{children:[P," ждёт выполнения ",(0,l.jsx)("strong",{children:"всех"})," промисов. Если все переданные промисы выполнились успешно"," ",x.C6," результатом будет массив значений в\xa0",(0,l.jsx)("strong",{children:"исходном порядке"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:"['Первый выполнился', 'Второй выполнился', 'Третий выполнился']"}),(0,l.jsx)("p",{children:"Порядок результатов сохраняется, даже если промисы завершаются в разное время:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:t,consoleLog:"['Первый выполнился', 'Второй выполнился', 'Третий выполнился']"}),(0,l.jsx)("p",{children:"Если хотя бы один промис будет отклонён, результатом будет ошибка первого отклонённого промиса:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o,consoleLog:i}),(0,l.jsx)("p",{children:"В случае, если один промис отклоняется, остальные промисы продолжают выполняться, а результаты их выполнения игнорируются:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:n,consoleLog:"Error: Первый упал"})]})});N.displayName="PromiseAll";let w=(0,n.forwardRef)((e,r)=>{let s=`Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Первый'), 3000)),
  new Promise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Третий'), 1000)),
]).then((result) => console.log(result));`,t=`Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Успешный успех'), 5000)),
  new Promise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
]).catch((error) => console.error(error));`,o=`const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.race([
  resolveWithDelay('Первый', 3000),
  resolveWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
]).then((result) => console.log(\`$\{result} победил\`));`,i=`Второй пошёл // Через 1 секунду
Второй победил
Третий пошёл // Через 2 секунды
Первый пошёл // Через 3 секунды`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",C]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Кто первый встал, того и тапки"}),(0,l.jsxs)("p",{children:[p," ждёт ",(0,l.jsx)("strong",{children:"первый завершившийся"})," промис, возвращает результат его выполнения:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:"Третий"}),(0,l.jsxs)("p",{children:["Без разницы как завершился этот промис ",x.C6," удачно или с ошибкой ",x.C6," результатом всегда будет результат выполнения этого промиса:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:t,consoleLog:"Ой-ой, ошибочка"}),(0,l.jsxs)("p",{children:["Остальные промисы, как и в случае с ",P,", продолжают выполняться, а результаты их игнорируются:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o,consoleLog:i})]})});w.displayName="PromiseRace";let M=(0,n.forwardRef)((e,r)=>{let s=`Promise.allSettled([
  Promise.resolve('Раз'),
  Promise.reject('Ой-ой, ошибочка'),
  Promise.resolve('Два'),
]).then((result) => console.log(result));`,t=`[
  { status: 'fulfilled', value: 'Раз' },
  { status: 'rejected', reason: 'Ой-ой, ошибочка' },
  { status: 'fulfilled', value: 'Два' }
]`,o=`Promise.allSettled([
  Promise.reject('Ой-ой, ошибочка #1'),
  Promise.reject('Ой-ой, ошибочка #2'),
  Promise.reject('Ой-ой, ошибочка #3'),
]).then((error) => console.log(error));`,i=`[
  { status: 'rejected', reason: 'Ой-ой, ошибочка #1' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #2' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #3' }
]`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",_]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Вместе и до конца"}),(0,l.jsxs)("p",{children:[_," самый терпеливый метод из всех: он никогда не отклоняется, а ждёт завершения абсолютно всех промисов."]}),(0,l.jsx)("p",{children:"Для каждого промиса он формирует объект со статусом:"}),(0,l.jsxs)("ul",{className:"list markered",children:[(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{className:"list__title",children:[(0,l.jsx)(d.R,{children:"{ status: 'fulfilled', value: ... }"})," для выполненных успешно промисов"]})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{className:"list__title",children:[(0,l.jsx)(d.R,{children:"{ status: 'rejected', reason: ... }"})," для отклонённых промисов"]})})]}),(0,l.jsxs)("p",{children:["Результат ",x.C6," массив таких объектов:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:t}),(0,l.jsxs)("p",{children:[_," никогда не отклоняется, даже когда отклоняются все промисы:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o,consoleLog:i}),(0,l.jsxs)("p",{children:["Обратите внимание: у ",_," для получения результатов используется только ",S,", а не"," ",T,"."]})]})});M.displayName="PromiseAllSettled";let E=(0,n.forwardRef)((e,r)=>{let s=`try {
    throw new AggregateError([
      new Error('Ой-ой, ошибочка'),
      new Error('Ой-ой, другая ошибочка'),
    ]);
  } catch (error) {
    console.error(error.errors);
  }`,t=`[
    { Error: 'Ой-ой, ошибочка' }
    { Error: 'Ой-ой, другая ошибочка' }
]`,o=`const error1 = new Error('Ой-ой, ошибка');
  const error2 = new Error('Ой-ой, другая ошибка');

  const errors = new AggregateError([error1, error2], 'Ой-ой, тут две ошибки');`,i=`try {
    throw new AggregateError(
      [new Error('Ой-ой, ошибочка'), new Error('Ой-ой, другая ошибочка')],
      'Обе операции упали'
    );
  } catch (error) {
    console.error(error.message);
  }`;return(0,l.jsx)("aside",{ref:r,className:"section inner",children:(0,l.jsxs)(h.L,{type:h.G.SECONDARY,children:[(0,l.jsx)("div",{className:"tags",children:(0,l.jsx)("div",{className:"tag text-only",children:"Дополнительная информация"})}),(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"AggregateError"})," ",x.C6," это подкласс класс ошибки ",(0,l.jsx)(d.R,{children:"Error"}),", который упаковывает несколько ошибок в одну."]}),(0,l.jsxs)("p",{children:["Что нам важно знать про ",(0,l.jsx)(d.R,{children:"AggregateError"}),":"]}),(0,l.jsxs)("ul",{className:"list markered",children:[(0,l.jsxs)("li",{className:"list__item",children:[(0,l.jsx)("p",{className:"list__title",children:"Конструктор выглядит так:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"new AggregateError(errors, message)"}),(0,l.jsxs)("p",{className:"list__footer",children:["Здесь ",(0,l.jsx)(d.R,{children:"errors"})," это итерируемый объект (массив, коллекция) с ошибками, а"," ",(0,l.jsx)(d.R,{children:"message"})," ",x.C6," необязательно человекочитаемое описание."]}),(0,l.jsx)("p",{children:"Например:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o})]}),(0,l.jsxs)("li",{className:"list__item",children:[(0,l.jsxs)("p",{className:"list__title",children:["Есть свойство ",(0,l.jsx)(d.R,{children:"errors"}),":"]}),(0,l.jsx)("p",{className:"list__footer",children:"Через это свойство можно получить список ошибок:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:t})]}),(0,l.jsxs)("li",{className:"list__item",children:[(0,l.jsxs)("p",{className:"list__title",children:["Есть свойство ",(0,l.jsx)(d.R,{children:"message"}),":"]}),(0,l.jsx)("p",{className:"list__footer",children:"Через это свойство можно получить, соответственно, человекочитаемое описание:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:i,consoleLog:"Обе операции упали"})]})]})]})})});E.displayName="AggregateErrorNote";let I=(0,n.forwardRef)((e,r)=>{let s=`Promise.all(iterable);
Promise.race(iterable);
Promise.any(iterable);
Promise.allSettled(iterable);`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)(h.L,{children:[(0,l.jsx)("div",{className:"tags",children:(0,l.jsx)("div",{className:"tag primary",children:"Важно"})}),(0,l.jsxs)("p",{children:["Статья опирается на"," ",(0,l.jsx)(j.G,{href:"https://dtsiki.github.io/blog/ru/promises",label:"предыдущую статью про промисы"}),". В ней мы написали класс ",(0,l.jsx)(d.R,{children:"MyPromise"})," ",x.C6," его реализация используется и здесь. Если вы её не читали, рекомендую начать с неё."]})]}),(0,l.jsx)("br",{}),(0,l.jsx)("p",{children:"Но сперва, конечно же, теория."}),(0,l.jsx)("h2",{children:"Теория: зачем объединять промисы"}),(0,l.jsxs)("section",{className:"section inner",children:[(0,l.jsxs)("p",{children:[(0,u.iO)("Коллекция промисов")," звучит пафосно, но на самом деле это просто группа (почему не массив ",x.C6," станет понятно ниже), элементами которой являются объекты класса"," ",(0,l.jsx)(d.R,{children:"Promise"}),". Причём это могут быть и не промисы вовсе ",x.C6," обычные значения, которые JavaScript сам приведёт к промису."]}),(0,l.jsxs)("p",{children:["Зачем объединять промисы в группы? Чаще всего ",x.C6," когда одна и та же операция запускается для нескольких задач, и за их результатами нужно следить как за единым целым. Простой пример: несколько сетевых запросов к API, которые должны уйти не друг за другом, а одновременно, а результаты должны обработаться вместе. Вот тут и приходят на помощь методы для работы с группой промисов."]}),(0,l.jsxs)("p",{children:["Для этих целей и нужны методы ",P,", ",p,", ",_," и ",g,"."]}),(0,l.jsx)("p",{children:"У них простой синтаксис:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s}),(0,l.jsx)("p",{children:"Все четыре метода:"}),(0,l.jsxs)("ul",{className:"list markered",children:[(0,l.jsxs)("li",{className:"list__item",children:[(0,l.jsxs)("p",{className:"list__title",children:["принимают на вход итерирумый объект ",y]}),(0,l.jsxs)("p",{children:["Элементами этого объекта не обязательно должны быть промисы, это могут быть любые значения. Если значение не промис, JavaScript сам приведёт его к промису. Главное, чтобы сам объект был итерируемым. Подробнее о том, что такое итерируемые объекты и чем они отличаются от массивов ",x.C6," в разделе практики"," ",(0,l.jsx)("a",{href:"#iterable",className:"link",style:{fontWeight:"600"},children:"(Перейти)"}),"."]})]}),(0,l.jsxs)("li",{className:"list__item",children:[(0,l.jsxs)("p",{className:"list__title",children:["возвращают ",(0,l.jsx)("strong",{children:"один новый"})," промис"]}),(0,l.jsxs)("p",{children:["Состояние и результат этого промиса зависит от того, что произойдёт с ",y," внутри каждого метода. Все они ждут выполнения, но все разного:"]}),(0,l.jsxs)("ul",{className:"list markered nested",children:[(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{children:[P," ждёт выполнения ",(0,l.jsx)("strong",{children:"всех"})," промисов"]})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{children:[p," ждёт ",(0,l.jsx)("strong",{children:"первый завершившийся"})," промис"]})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{children:[_," ждёт, когда ",(0,l.jsx)("strong",{children:"завершатся все"})," промисы"]})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{children:[g," ждёт ",(0,l.jsx)("strong",{children:"первый успешно выполненный"})," промис"]})})]})]})]}),(0,l.jsxs)("p",{children:["Разберём каждый метод отдельно. Под заголовком с названием каждого метода"," ",(0,l.jsx)("span",{className:"accented italic secondary",children:"вот так"})," указано короткое, но ёмкое правило для быстрого запоминания, что именно он делает."]})]}),(0,l.jsx)(N,{}),(0,l.jsx)(w,{}),(0,l.jsx)(M,{}),(0,l.jsx)(E,{})]})});I.displayName="Theory";var J=s(76149),V=s(84390);let z=(0,n.forwardRef)((e,r)=>{let s=`Promise.all([
  Promise.resolve('Первый выполнился'),
  Promise.resolve('Второй выполнился'),
  Promise.resolve('Второй выполнился'),
]).then((result) => console.log(result));`,t=`const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
};

Promise.all([
  resolveWithDelay('Первый выполнился', 3000),
  resolveWithDelay('Второй выполнился', 1000),
  resolveWithDelay('Третий выполнился', 2000),
]).then((result) => console.log(result));`,o=`const rejectWithDelay = (value, delay) => {
  return new Promise((_, reject) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      reject(value);
    }, delay)
  );
};

const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.all([
  resolveWithDelay('Первый', 3000),
  rejectWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
])
  .then((result) => console.log(\`$\{result} выполнился\`))
  .catch((error) => console.error(\`$\{error} упал\`));`,i=`Второй пошёл
Error: Второй упал
Третий пошёл
Первый пошёл`,n=`static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`,c=`items.forEach((item, index) => {
  // Что-то сделать
});`,j=`items.forEach((item) => {
  const promise = Promise.resolve(item);
});`,u=`items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      // Что-то сделать с ошибкой
    });
});`,g=`items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      reject(error);
    });
});`,_=`Promise.resolve(item).then(
  (value) => {
    // Что-то делается с результатом
  },
  (error) => {
    // Что-то делается с ошибкой
  }
);`,y=`.then((value) => {
  results.push(value);
})`,A=`.then((value) => {
  results[index] = value;
})`,C=`const array = new Array(5);
array[10] = 'Ой';

console.log(array);`,R=`results[index] = value;
completedCount++;`,f=` if (completedCount === items.length) {
  resolve(results);
}`,N=`.then((value) => {
  results[index] = value;
  completedCount++;

  if (completedCount === items.length) {
    resolve(results);
  }
})`,w=`static all(promises) {
  return new MyPromise((resolve, reject) => {
    if (!promises || typeof promises[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(promises);

    if (items.length === 0) {
      return resolve([]);
    }

    const results = new Array(items.length);
    let completedCount = 0;

    items.forEach((item, index) => {
      MyPromise.resolve(item)
        .then((value) => {
          results[index] = value;
          completedCount++;

          if (completedCount === items.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}`,M=`MyPromise.all([
  MyPromise.resolve('Раз'),
  MyPromise.resolve('Два'),
  MyPromise.resolve('Три')
]).then((result) => console.log(result));`,E=`Promise.all([
    Promise.resolve('Раз'),
    Promise.reject('Ой-ой, ошибочка'),
    Promise.resolve('Три'),
    Promise.reject('Ой-ой, снова ошибочка')
  ]).catch((error) => console.log(error));`,I=`MyPromise.all([
  new MyPromise((resolve) => setTimeout(() => resolve('Раз'), 2000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Два'), 3000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Три'), 1000)),
]).then((result) => console.log(result));`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",v]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Всё или ничего"}),(0,l.jsxs)("p",{children:[P," либо возвращает все результаты, либо отклоняется при первой же ошибке. Именно это и будем реализовывать. Разберём несколько примеров."]}),(0,l.jsxs)("p",{children:[P," ждёт, пока выполнятся все переданные промисы, и возвращает массив их результатов в том же порядке, в котором они были переданы:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:"['Первый выполнился', 'Второй выполнился', 'Третий выполнился']"}),(0,l.jsx)("p",{children:"Порядок результатов сохраняется, даже если промисы завершаются в разное время:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:t,consoleLog:"['Первый выполнился', 'Второй выполнился', 'Третий выполнился']"}),(0,l.jsxs)("p",{children:["При ошибке остальные промисы не отменяются ",x.C6," они продолжают выполняться, но их результат игнорируется:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o,consoleLog:i}),(0,l.jsxs)("p",{children:["Пока есть только скелет реализации ",v,":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:n}),(0,l.jsxs)("p",{children:["Теперь нужно пройтись по каждому элементу массива ",(0,l.jsx)(d.R,{children:"items"})," и ",(0,l.jsx)("em",{children:"что-то"})," с ним сделать:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:c}),(0,l.jsxs)("p",{children:["Что вообще может лежать в массиве ",(0,l.jsx)(d.R,{children:"items"}),"? В нём может оказаться что угодно: промис, число, строка, объект, функция, ",(0,l.jsx)(d.R,{children:"Set"}),", вложенный массив, кастомные итерируемые объекты, которым вручную добавили метод ",(0,l.jsx)(d.R,{children:"Symbol.iterator"}),". Но всё это разнообразие можно сократить до:"]}),(0,l.jsxs)("ol",{className:"list ordered",children:[(0,l.jsx)("li",{className:"list__item",children:(0,l.jsx)("p",{className:"list__title",children:"промис"})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{className:"list__title",children:[(0,l.jsx)("strong",{children:"не"})," промис"]})})]}),(0,l.jsxs)("p",{children:["Задача упростилась! Воспользуемся приёмом схлопывания промисов: если передать в ",b," промис, метод вернёт тот же самый промис, не создавая новый. Если передать не промис ",x.C6," будет создан уже выполненный промис с этим значением. Так все элементы в массиве будут сведены к одному типу ",x.C6," промису:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:j}),(0,l.jsxs)("p",{children:["А с промисом что можно сделать? Вызвать у него методы ",S," и ",T,":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:u}),(0,l.jsxs)("p",{children:["Такой перебор будем использовать во всех четырёх методах. Отличаться будет только содержимое ",S," и"," ",T,"."]}),(0,l.jsx)("p",{children:"Осталось понять, что нужно написать внутри этих колбэков здесь."}),(0,l.jsxs)("p",{children:["Начнём с простого ",x.C6," ",T,". ",P,") отклоняется, если хотя бы один из промисов отклонён, причём отклоняется с причиной первого отклонённого промиса. Поэтому если промис, который мы обрабатываем, отклоняется ",x.C6," сразу отклоняем и общий промис. Делается это добавление всего одной строки:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:g}),(0,l.jsx)("br",{}),(0,l.jsxs)(h.L,{children:[(0,l.jsx)("div",{className:"tags",children:(0,l.jsx)("div",{className:"tag primary",children:"Обратите внимание"})}),(0,l.jsxs)("p",{children:["В нативном ",P," использует второй аргумент ",S," ",x.C6," колбэк"," ",(0,l.jsx)(d.R,{children:"onRejected"}),", а не ",T,":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:_}),(0,l.jsxs)("p",{children:["Если использовать ",T," после ",S,", то он поймает ошибки и из самого промиса, и из"," ",S,"-колбэка. Для ",P," это не нужно ",x.C6," нужно поймать только отклонение исходного промиса."]}),(0,l.jsxs)("p",{children:[" Здесь оставим ",T," для наглядности: на результат это не влияет, но код читается чуть проще."]})]}),(0,l.jsxs)("p",{children:["Заведём массив для результатов. Его длина должна равняться длине входящего массива ",x.C6," так мы сразу знаем, куда класть каждый результат:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"const results = new Array(items.length);"}),(0,l.jsxs)("p",{children:["Если сохранять результаты через ",(0,l.jsx)(d.R,{children:"push"}),", они будут добавляться в порядке завершения промисов, а не в порядке их передачи. Порядок сломается:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:y}),(0,l.jsx)("p",{children:"А нам важен исходный порядок. Поэтому сохраняем результат по индексу:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:A}),(0,l.jsxs)("p",{children:["Обратите внимание: ",(0,l.jsx)(d.R,{children:"index"})," здесь ",x.C6," это позиция элемента во входном массиве. Именно по нему мы кладём результат, чтобы сохранить исходный порядок. Получаем этот индекс из"," ",(0,l.jsx)(d.R,{children:"forEach"}),"."]}),(0,l.jsxs)("p",{children:["Результаты сохраняются, но нужно понять, когда все промисы выполнились. Нельзя просто сравнить длины"," ",(0,l.jsx)(d.R,{children:"results"})," и",(0,l.jsx)(d.R,{children:"items"}),": длина ",(0,l.jsx)(d.R,{children:"results"})," равна"," ",(0,l.jsx)(d.R,{children:"items.length"})," с самого начала ",x.C6," мы задали её при создании массива. Длина не говорит о том, заполнены ли элементы. А ещё длина массива в JavaScript ",x.C6," ненадёжный показатель: если записать элемент по индексу больше длины, массив растянется:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:C,consoleLog:"Array(11) [ <10 empty slots>, 'Ой' ]"}),(0,l.jsxs)("p",{children:["В этом примере ",(0,l.jsx)(d.R,{children:"<10 empty slots>"})," ",x.C6," пустые слоты. Это не"," ",J.g,", а буквально дырки: массив знает свою длину, но элементов по этим индексам нет. Для нашей задачи это неважно ",x.C6," мы всегда заполняем все индексы. Но знать про эту разницу полезно."]}),(0,l.jsx)("p",{children:"Заведём отдельный счётчик завершённых промисов:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"let completedCount = 0;"}),(0,l.jsx)("p",{children:"Счётчик будет увеличиваться после каждого сохранения результата:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:R}),(0,l.jsxs)("p",{children:["Когда счётчик станет равен ",(0,l.jsx)(d.R,{children:"items.length"}),", можно вызывать"," ",(0,l.jsx)(d.R,{children:"resolve(results)"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:f}),(0,l.jsxs)("p",{children:["Собственно, это всё, что нужно сделать в ",S,":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:N}),(0,l.jsxs)("p",{children:["Вот как выглядит ",(0,l.jsx)(d.R,{children:"MyPromise.all()"})," целиком:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:w}),(0,l.jsx)("p",{children:" Теперь протестируем его."}),(0,l.jsx)("h4",{children:"Тестируем"}),(0,l.jsxs)("p",{children:["Возьмём примеры из разбора теории, заменив нативные промисы ",(0,l.jsx)(d.R,{children:"Promise"})," на"," ",(0,l.jsx)(d.R,{children:"MyPromise"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:M}),(0,l.jsx)("p",{children:"В консоли появится:"}),(0,l.jsx)(V.k,{code:"['Раз', 'Два', 'Три']"}),(0,l.jsx)("p",{children:"Проверим отклонение:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:E}),(0,l.jsx)("p",{children:"В консоли появится:"}),(0,l.jsx)(V.k,{code:"Ой-ой, ошибочка"}),(0,l.jsxs)("p",{children:["Обратите внимание: несмотря на два отклонённых промиса, результатом будет ошибка первого ",x.C6," второй игнорируется."]}),(0,l.jsx)("p",{children:"Теперь проверим, сохраняется ли порядок результатов, когда промисы завершаются в разное время:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:I}),(0,l.jsx)("p",{children:"В консоли появится:"}),(0,l.jsx)(V.k,{code:"['Раз', 'Два', 'Три']"}),(0,l.jsxs)("p",{children:["И наконец ",x.C6," краевые случаи:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.all([]).then((result) => console.log(result));",consoleLog:"[]"}),(0,l.jsx)("br",{}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.all(null).catch((error) => console.error(error));",consoleLog:"TypeError: Argument must be iterable"}),(0,l.jsx)("br",{}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.all('Hello').then((result) => console.log(result));",consoleLog:"['H', 'e', 'l', 'l', 'o'];"}),(0,l.jsx)("br",{}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.all(new Set([1, 2, 3, 4 , 5])).then((result) => console.log(result));",consoleLog:"[1, 2, 3, 4 , 5]"}),(0,l.jsxs)("p",{children:["Переходим к ",p,". Если ",P," ждёт все промисы, то ",p," ",x.C6," только первый, и это сильно упрощает реализацию."]})]})});z.displayName="MyPromiseAll";let L=(0,n.forwardRef)((e,r)=>{let s=`Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Первый'), 3000)),
  new Promise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Третий'), 1000)),
]).then((result) => console.log(result));`,t="Третий",o=`Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Успешный успех'), 5000)),
  new Promise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
]).catch((error) => console.error(error));`,i="Ой-ой, ошибочка",n=`const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.race([
  resolveWithDelay('Первый', 3000),
  resolveWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
]).then((result) => console.log(\`$\{result} победил\`));`,c=`Второй пошёл // Через 1 секунду
Второй победил
Третий пошёл // Через 2 секунды
Первый пошёл // Через 3 секунды`,j=`static race(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(iterable);
  });
}`,h=`items.forEach((item) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      // Что-то сделать с ошибкой
    });
});`,u=`items.forEach((item) => {
  MyPromise.resolve(item)
    .then((value) => {
      resolve(item);
    })
    .catch((error) => {
      reject(error);
    });
});`,P=`class MyPromise {
  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      items.forEach((item) => {
        MyPromise.resolve(item)
          .then((value) => resolve(value))
          .catch((error) => reject(error));
      });
    });
  }
}`,g=`MyPromise.race([
  new MyPromise((resolve) => setTimeout(() => resolve('Первый'), 3000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Третий'), 1000)),
]).then((result) => console.log(result));`,_=`MyPromise.race([
  new MyPromise((resolve) => setTimeout(() => resolve('Успешный успех'), 5000)),
  new MyPromise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
]).catch((error) => console.error(error));`,y=`const promise = MyPromise.race([]).then(() => console.log('Промис выполнился'));
setTimeout(() => console.log(promise), 5000);`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",C]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Кто первый встал, того и тапки"}),(0,l.jsxs)("p",{children:[p," ждёт ",(0,l.jsx)("strong",{children:"первый завершившийся"})," промис и возвращает результат его выполнения:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:t}),(0,l.jsxs)("p",{children:["Не важно, как завершился этот промис ",x.C6," успешно или с отклонением. Главное ",x.C6," чтобы он завершился раньше остальных. Если первый завершившийся промис был отклонён, результатом будет его ошибка:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o,consoleLog:i}),(0,l.jsx)("p",{children:"Результаты остальных промисов игнорируются:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:n,consoleLog:c}),(0,l.jsx)("p",{children:"Начнём со скелета:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:j}),(0,l.jsxs)("p",{children:["Здесь используется тот же перебор, что и в ",v," ",x.C6," ",(0,l.jsx)(d.R,{children:"forEach"}),". Поменяется только содержимое колбэков:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:h}),(0,l.jsxs)("p",{children:["В отличие от ",(0,l.jsx)(d.R,{children:"MyPromise.all()"}),", здесь не нужен ни массив результатов, ни счётчик"," ",x.C6," только первый завершившийся промис. Индекс нам не понадобится, поэтому его убрали из"," ",(0,l.jsx)(d.R,{children:"forEach"})]}),(0,l.jsxs)("p",{children:[p," категоричен: как только любой из промисов выполнится ",x.C6," успешно или с ошибкой ",x.C6," ","можно сразу вызывать",(0,l.jsx)(d.R,{children:"resolve"})," или ",(0,l.jsx)(d.R,{children:"reject"})," с этим значением:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:u}),(0,l.jsxs)("p",{children:["Первый завершившийся промис вызовет либо ",(0,l.jsx)(d.R,{children:"resolve"}),", либо ",(0,l.jsx)(d.R,{children:"reject"}),". Остальные вызовы проигнорируются: состояние промиса, который возвращает метод, уже изменилось ",x.C6," а промис можно перевести из ",A," только один раз."]}),(0,l.jsx)("p",{children:"Всё!"}),(0,l.jsxs)("p",{children:["Вот как выглядит ",(0,l.jsx)(d.R,{children:"MyPromise.race()"})," целиком:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:P}),(0,l.jsx)("h4",{children:"Тестируем"}),(0,l.jsx)("p",{children:"Запустим пример из теории, но уже с нашим методом:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:g}),(0,l.jsx)("p",{children:"В консоли появится:"}),(0,l.jsx)(V.k,{code:t}),(0,l.jsx)("p",{children:"Теперь проверим случай с ошибкой:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:_}),(0,l.jsxs)("p",{children:["Здесь второй промис отклоняется раньше, чем первый успевает выполниться ",x.C6," поэтому race отклоняется:"]}),(0,l.jsx)(V.k,{code:i}),(0,l.jsxs)("p",{children:["И краевой случай ",x.C6," пустой массив:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:y}),(0,l.jsx)("p",{children:"Промис так и не завершится:"}),(0,l.jsx)(V.k,{code:"Object { state: 'pending', value: undefined, ... } // Через 5 секунд"})]})});L.displayName="MyPromiseRace";let D=(0,n.forwardRef)((e,r)=>{let s=`static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      if (items.length === 0) {
        return resolve([]);
      }
    });
  }`,t=`const results = new Array(items.length);
let completedCount = 0;`,o=`items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      // Что-то сделать с ошибкой
    });
});`,i=`.then((value) => {
  results[index] = { status: 'fulfilled', value };
})`,n=`.catch((error) => {
  results[index] = { status: 'rejected', reason: error };
})`,c=`completedCount++;
if (completedCount === items.length) resolve(results);`,j=`items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      results[index] = { status: 'fulfilled', value };
      completedCount++;
      if (completedCount === items.length) resolve(results);
    })
    .catch((error) => {
      results[index] = { status: 'rejected', reason: error };
      completedCount++;
      if (completedCount === items.length) resolve(results);
    });
});`,h=`items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      results[index] = { status: 'fulfilled', value };
    })
    .catch((error) => {
      results[index] = { status: 'rejected', reason: error };
    })
    .then(() => {
      completedCount++;
      if (completedCount === items.length) resolve(results);
    });
});`,u=`class MyPromise {
  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      if (items.length === 0) {
        return resolve([]);
      }

      const results = new Array(items.length);
      let completedCount = 0;

      items.forEach((item, index) => {
        MyPromise.resolve(item)
          .then((value) => {
            results[index] = { status: 'fulfilled', value };
          })
          .catch((error) => {
            results[index] = { status: 'rejected', reason: error };
          })
          .then(() => {
            completedCount++;
            if (completedCount === items.length) resolve(results);
          });
      });
    });
  }
}`,p=`Promise.allSettled([
  Promise.resolve('Раз'),
  Promise.reject('Ой-ой, ошибочка'),
  Promise.resolve('Два'),
]).then((result) => console.log(result));`,g=`[
  { status: 'fulfilled', value: 'Раз' },
  { status: 'rejected', reason: 'Ой-ой, ошибочка' },
  { status: 'fulfilled', value: 'Два' }
]`,y=`Promise.allSettled([
  Promise.reject('Ой-ой, ошибочка #1'),
  Promise.reject('Ой-ой, ошибочка #2'),
  Promise.reject('Ой-ой, ошибочка #3'),
]).then((error) => console.log(error));`,A=`[
  { status: 'rejected', reason: 'Ой-ой, ошибочка #1' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #2' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #3' }
]`,C=`[
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'fulfilled', value: 3 },
  { status: 'fulfilled', value: 4 },
  { status: 'fulfilled', value: 5 }
]`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",f]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Вместе и до конца"}),(0,l.jsxs)("p",{children:[f," самый терпеливый метод из всех: он никогда не отклоняется, а ждёт завершения абсолютно всех промисов."]}),(0,l.jsx)("p",{children:"Для каждого промиса он формирует объект со статусом:"}),(0,l.jsxs)("ul",{className:"list markered",children:[(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"{ status: 'fulfilled', value: ... }"})," ",x.C6," если промис выполнился успешно"]})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"{ status: 'rejected', reason: ... }"})," ",x.C6," если промис был отклонён"]})})]}),(0,l.jsxs)("p",{children:["Результат ",x.C6," массив таких объектов."]}),(0,l.jsx)("p",{children:"Возьмём скелет реализации:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s}),(0,l.jsxs)("p",{children:[_," ",x.C6," ",P,", который никогда не отклоняется: он так же ждёт завершения всех промисов, но не прерывается при первой ошибке, а собирает результаты всех и идёт до конца. Поэтому структура здесь будет такая же как и ",v,": понадобится массив и счётчик для промисов:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:t}),(0,l.jsx)("p",{children:"И снова пройдёмся по всем элементам:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o}),(0,l.jsxs)("p",{children:["Колбэки в ",S," и ",T," здесь будут, очевидно, отличаться. В ",S," формируем объект для успешно выполненного промиса и сохраняем его по индексу:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:i}),(0,l.jsxs)("p",{children:["В ",T," поступим аналогично, но с ключом ",(0,l.jsx)(d.R,{children:"reason"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:n}),(0,l.jsx)("p",{children:"Затем нужно увеличить счётчик и проверить, равен ли он длине входящего массива:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:c}),(0,l.jsxs)("p",{children:["Этот код можно добавить и в ",S,", и в ",T," ",x.C6," но тогда он продублируется:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:j}),(0,l.jsxs)("p",{children:["А можно вынести счётчик в отдельный ",S," далее по цепочке:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:h}),(0,l.jsx)("p",{children:"Всё!"}),(0,l.jsx)("p",{children:"Собираем метод:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:u}),(0,l.jsx)("h4",{children:"Тестируем"}),(0,l.jsxs)("p",{children:["Берём примеры из теории и заменяем нативные промисы на ",(0,l.jsx)(d.R,{children:"MyPromise"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:p}),(0,l.jsx)("p",{children:"В консоли появится массив с объектами:"}),(0,l.jsx)(V.k,{code:g}),(0,l.jsxs)("p",{children:["Даже если все промисы упадут ",x.C6," результат всё равно будет:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:y,consoleLog:A}),(0,l.jsxs)("p",{children:["Мы используем только ",S,", а не ",T," потому, что ",_," никогда не отклоняется, даже когда отклоняются все промисы."]}),(0,l.jsx)("p",{children:"Проверим краевые случаи:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.allSettled([]).then(console.log);",consoleLog:"[]"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.allSettled(null).catch(console.error);",consoleLog:"TypeError: Argument must be iterable"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.allSettled(new Set([1, 2, 3, 4, 5])).then((result) => console.log(result));",consoleLog:C})]})});D.displayName="MyPromiseAllSettled";let k=(0,n.forwardRef)((e,r)=>{let s=`Promise.any([
    Promise.resolve('Успешный успех #1'),
    Promise.resolve('Успешный успех #2'),
    Promise.resolve('Успешный успех #3'),
  ]).then((result) => console.log(result));`,t=`Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.reject('Ой-ой, ошибочка #2'),
    Promise.reject('Ой-ой, ошибочка #3'),
  ]).catch((error) => console.error(error.errors));`,o=`static any(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return reject(new AggregateError([], 'All promises were rejected'));
    }
  });
}`,i=`const errors = new Array(items.length);
let rejectedCount = 0;`,n=`items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то делаем с результатом
    })
    .catch((error) => {
      // Что-то делаем с ошибкой
    });
});`,c=`.then((value) => {
  resolve(value);
})`,j=`errors[index] = error;
rejectedCount++;`,h=`if (rejectedCount === items.length) {
  reject(new AggregateError(errors, 'All promises were rejected'));
}`,u=`class MyPromise {
  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      if (items.length === 0) {
        return reject(new AggregateError([], 'All promises were rejected'));
      }

      const errors = new Array(items.length);
      let rejectedCount = 0;

      items.forEach((item, index) => {
        MyPromise.resolve(item)
          .then((value) => {
            resolve(value);
          })
          .catch((error) => {
            errors[index] = error;
            rejectedCount++;

            if (rejectedCount === items.length) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
      });
    });
  }
}`,p=`MyPromise.any([
  MyPromise.reject('Ой-ой, ошибочка #1'),
  MyPromise.resolve('Успешный успех'),
  MyPromise.reject('Ой-ой, ошибочка #2'),
]).then((result) => console.log(result));`,_=`MyPromise.any([
  MyPromise.reject('Ой-ой, ошибочка #1'),
  MyPromise.reject('Ой-ой, ошибочка #2'),
  MyPromise.reject('Ой-ой, ошибочка #3'),
]).catch((error) => console.error(error.errors));`,y=`MyPromise.any([
  new MyPromise((resolve) => setTimeout(() => resolve('Быстрый выполнился'), 1000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Медленный выполнился'), 3000)),
]).then(() => console.log(result));`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsxs)("h3",{children:["Метод ",R]}),(0,l.jsx)("h4",{className:"accented italic secondary spacer top small",children:"Спасибо, что живой"}),(0,l.jsxs)("p",{children:[g," возвращает результат ",(0,l.jsx)("strong",{children:"первого успешно выполненного"})," промиса:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s,consoleLog:"Успешный успех #1"}),(0,l.jsxs)("p",{children:["Если все промисы отклонились, ",g," отклоняется со специальной ошибкой"," ",(0,l.jsx)(d.R,{children:"AggregateError"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:t,consoleLog:"[ 'Ой-ой, ошибочка #1', 'Ой-ой, ошибочка #2', 'Ой-ой, ошибочка #3' ]"}),(0,l.jsxs)("p",{children:[g," ",x.C6," отзеркаленная версия ",P,". Если ",P," успешен только когда успешны все промисы, то ",g," успешен, когда успешен хотя бы один. И наоборот: ",P," отклоняется при первой ошибке, а ",g," ",x.C6," только если ошибочны все. Ошибки при этом собираются в том же порядке, в котором были переданы промисы. Это нам пригодится далее."]}),(0,l.jsx)("p",{children:"Возьмём скелет реализации:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o}),(0,l.jsxs)("p",{children:["Раз нативный ",g," ",x.C6," отзеркаленная версия ",P,", заведём массив ",x.C6," но не для результатов, а для ошибок, ",x.C6,"и счётчик отклонённых промисов:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:i}),(0,l.jsx)("p",{children:"Как и в других методах, запускаем перебор:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:n}),(0,l.jsx)("p",{children:"Осталось выяснить, что писать в колбэках."}),(0,l.jsxs)("p",{children:["Начнём с ",S,". Нужно вернуть результат первого успешно выполненного промиса ",x.C6," это просто:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:c}),(0,l.jsxs)("p",{children:["Теперь ",T,". Логика здесь зеркальна ",v,": там мы сохраняли результаты в ",S,", а здесь сохраняем ошибки ",x.C6," в ",T,". Записываем ошибку по индексу и увеличиваем счётчик:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:j}),(0,l.jsxs)("p",{children:["Когда счётчик сравняется с количеством промисов, отклоняем общий промис с"," ",(0,l.jsx)(d.R,{children:"AggregateError"}),", внутри которого ",x.C6," массив всех ошибок:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:h}),(0,l.jsx)("p",{children:"Получаем в итоге:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:h}),(0,l.jsx)("p",{children:"Всё!"}),(0,l.jsx)("p",{children:"Финальный метод будет выглядеть следующим образом:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:u}),(0,l.jsx)("h4",{children:"Тестируем"}),(0,l.jsxs)("p",{children:["Снова возьмём примеры из теории. Главное ",x.C6," не забыть поменять ",(0,l.jsx)(d.R,{children:"Promise"})," на"," ",(0,l.jsx)(d.R,{children:"MyPromise"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:p}),(0,l.jsx)("p",{children:"В консоли появится:"}),(0,l.jsx)(V.k,{code:"Успешный успех"}),(0,l.jsx)("p",{children:"Проверим случай, когда все промисы отклонены:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:_,consoleLog:"[ 'Ой-ой, ошибочка #1', 'Ой-ой, ошибочка #2', 'Ой-ой, ошибочка #3' ]"}),(0,l.jsx)("p",{children:"Первый выполненный промис побеждает, даже если остальные промисы ещё не завершились:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:y,consoleLog:"Быстрый выполнился"}),(0,l.jsx)("p",{children:"И проверим краевые случаи. Пустой массив:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.any([]).catch((error) => console.log(error.errors));",consoleLog:"[];"}),(0,l.jsxs)("p",{children:["Значение ",(0,l.jsx)(d.R,{children:"null"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.any(null).catch(() => console.error(error));",consoleLog:"TypeError: Argument must be iterable"}),(0,l.jsxs)("p",{children:["Коллекция значений ",(0,l.jsx)(d.R,{children:"Set"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.any(new Set([1, 2, 3, 4, 5])).then(console.log);",consoleLog:"1"}),(0,l.jsx)("p",{children:"И строка:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"MyPromise.any('Приветик').then((result) => console.log(result));",consoleLog:"Приветик"})]})});k.displayName="MyPromiseAny";let O=(0,n.forwardRef)((e,r)=>{let s=`class MyPromise {
  // Здесь вся остальная логика:
  // - конструктор
  // - статические методы resolve и reject
  // - методы then, catch и finally

  static all(iterable) {
    // Реализовать нативный Promise.all()
  }

  static race(iterable) {
    // Реализовать нативный Promise.race()
  }

  static allSettled(iterable) {
    // Реализовать нативный Promise.allSettled()
  }

  static any(iterable) {
    // Реализовать нативный Promise.any()
  }
}`,t=`return new MyPromise((resolve, reject) => {
   // Тут что-то делаем
});`,o=`class MyPromise {
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }

  static race(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }

  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }

  static any(iterable) {
    return new MyPromise((resolve, reject) => {
       // Тут что-то делаем
    });
  }
}`,i=`static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!Array.isArray(iterable) {
      return reject(new TypeError('Argument must be array'));
    }
  });
}`,n=`const set = new Set([1, 2, 3, 4, 5]);
MyPromise.all(set).then((result) => console.log(result));

const str = "Yay";
MyPromise.all(str).then((result) => console.log(result));`,c=`Ошибка: Argument must be array
Ошибка: Argument must be array`,u=`const set = new Set([1, 2, 3]);
Promise.all(set).then((result) => console.log(result));

const str = "Yay";
Promise.all(str).then((result) => console.log(result));`,p=`Array(3) [ 1, 2, 3 ]
Array(3) [ "Y", "a", "y" ]`,g=`if (typeof iterable[Symbol.iterator] !== 'function') {
  return reject(new TypeError('Argument must be iterable'));
}`,_=`if (!iterable & typeof iterable[Symbol.iterator] !== 'function') {
  return reject(new TypeError('Argument must be iterable'));
}`,v=`class MyPromise {
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }

  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }

  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }

  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }
    });
  }
}`,C=`class MyPromise {
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }

  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }

  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }

  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(new TypeError("Argument must be iterable"));
      }

      const items = Array.from(iterable);
    });
  }
}`,R=`const promise = Promise.race([])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

console.log(promise);`,f=`Promise.any([])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));`,b=`if (items.length === 0) {
  return resolve([]);
}`,S=`static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`,T=`static all(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`,N=`if (items.length === 0) {
  return reject(new AggregateError([], 'All promises were rejected'));
}`,w=`static any(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument must be iterable"));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return resolve([]);
    }
  });
}`;return(0,l.jsxs)("section",{ref:r,className:"section outer",children:[(0,l.jsx)("h2",{children:"Практика: пишем свои методы "}),(0,l.jsxs)("p",{children:["Воспользуемся кастомным классом ",(0,l.jsx)(d.R,{children:"MyPromise"}),"."]}),(0,l.jsxs)(h.L,{children:["Если не понимаете, что за класс ",(0,l.jsx)(d.R,{children:"MyPromise"})," ",x.C6," всё в порядке. Просто загляните в"," ",(0,l.jsx)(j.G,{href:"https://dtsiki.github.io/blog/ru/promises",label:"статью про промисы"}),"."]}),(0,l.jsx)("p",{children:" Добавим к нему 4 статических метода:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:s}),(0,l.jsxs)("section",{className:"section inner",children:[(0,l.jsx)("p",{children:"Прежде чем переходить к написанию отдельных методов, определим, что их объединяет. Для этого посмотрим, что должны принимать и возвращать методы."}),(0,l.jsx)("p",{children:"Все четыре метода устроены одинаково:"}),(0,l.jsxs)("ul",{className:"list markered",children:[(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{className:"list__title",children:["принимают итерируемый объект ",y]})}),(0,l.jsx)("li",{className:"list__item",children:(0,l.jsxs)("p",{className:"list__title",children:["возвращают ",(0,l.jsx)("strong",{children:"новый промис"})]})})]}),(0,l.jsx)("p",{children:"Вопреки привычному порядку, начнём написание методов не с аргументов, а с возвращаемого значения."})]}),(0,l.jsxs)("section",{className:"section inner",children:[(0,l.jsx)("h3",{children:"Возвращаемое значение"}),(0,l.jsxs)("p",{children:["Итак, в основе каждого метода лежит создание и возврат нового объекта ",(0,l.jsx)(d.R,{children:"Promise"}),". Поэтому реализация каждого из методов будет начинаться со следующей конструкции:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:t}),(0,l.jsx)("p",{children:"Теперь перенесём эту конструкцию в структуру каждого метода:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:o}),(0,l.jsx)("p",{children:"С возвращаемым значением всё ясно, переходим к входным данным."})]}),(0,l.jsxs)("section",{id:"iterable",className:"section inner",children:[(0,l.jsx)("h3",{children:"Входные данные"}),(0,l.jsxs)("p",{children:["Каждый метод принимает на вход не ",(0,l.jsx)("em",{children:"массив"}),", а итерируемый объект ",y,". Любой массив является итерируемым объектом, но не наоборот. Разберёмся, в чём разница."]}),(0,l.jsxs)("p",{children:["Представим, что мы добавили в каждый метод проверку через ",(0,l.jsx)(d.R,{children:"Array.isArray()"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:i}),(0,l.jsxs)("p",{children:["Это упрощённый пример ",x.C6," просто намеренно отклоняем всё, что не массив."]}),(0,l.jsxs)("p",{children:["Тогда ",(0,l.jsx)(d.R,{children:"Set"})," или строка вызовут ошибку:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:n,consoleLog:c}),(0,l.jsxs)("p",{children:["Казалось бы, логично. Но нативный ",P," спокойно принимает и ",(0,l.jsx)(d.R,{children:"Set"}),", и строки"," ",x.C6," хотя они не массивы ",x.C6," и успешно выполняется:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:u,consoleLog:p}),(0,l.jsxs)("p",{children:["Всё дело в том, что ",(0,l.jsx)(d.R,{children:"Set"}),", ",(0,l.jsx)(d.R,{children:"Map"})," и строки ",x.C6," ","итерируемые объекты."]}),(0,l.jsxs)("p",{children:["Чем итерируемые объекты отличаются от массивов? Массив ",x.C6," это конкретный встроенный тип. А итерируемый объект ",x.C6,"это любой объект, у которого реализован специальный протокол: есть метод с ключом"," ",(0,l.jsx)(d.R,{children:"Symbol.iterator"}),", возвращающий итератор ",x.C6," объект с методом"," ",(0,l.jsx)(d.R,{children:"next()"}),". Благодаря этому протоколу к итерируемым объектам применимы:"]}),(0,l.jsx)("ul",{className:"list markered",children:[(0,l.jsxs)(l.Fragment,{children:["цикл ",(0,l.jsx)(d.R,{children:"for...of"})]}),(0,l.jsxs)(l.Fragment,{children:["оператор расширения ",(0,l.jsx)(d.R,{children:"...spread"})]}),(0,l.jsx)(l.Fragment,{children:"деструктуризация"}),(0,l.jsxs)(l.Fragment,{children:["конструкторы вроде ",(0,l.jsx)(d.R,{children:"Array.from()"}),", ",(0,l.jsx)(d.R,{children:"new Map()"}),","," ",(0,l.jsx)(d.R,{children:"new Set()"})]})].map(e=>(0,l.jsx)("li",{className:"list__item",children:(0,l.jsx)("p",{children:e})},e.key))}),(0,l.jsxs)("p",{children:["Значит, ",(0,l.jsx)(d.R,{children:"Array.isArray()"})," здесь не подходит. Зато теперь знаем, что у итерируемых объектов есть метод с ключом ",(0,l.jsx)(d.R,{children:"Symbol.iterator"}),". Вот его и надо проверять ",x.C6," и делать это в самом начале: если передан не итерируемый объект, а проверки нет, дальше по коду что-то обязательно сломается."]}),(0,l.jsx)("p",{children:"Добавим такую проверку:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:g}),(0,l.jsxs)("p",{children:["Следует также отсечь ",J.d," и ",J.g,": без этого обращение к"," ",(0,l.jsx)(d.R,{children:"iterable[Symbol.iterator]"})," выбросит ошибку прямо в момент проверки. Добавим дополнительную проверку на ",J.d," и ",J.g,":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:_}),(0,l.jsxs)("p",{children:["Если условие истинно, значит, у объекта нет итератора ",x.C6," передавать его дальше нельзя. Эту проверку добавляем внутрь возвращаемого промиса к каждому методу:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:v}),(0,l.jsxs)("p",{children:["Помимо проверки итератора ",y,", преобразуем итерируемый объект в массив ",x.C6," с ним удобнее работать:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"const items = Array.from(iterable);"}),(0,l.jsx)("p",{children:"Эта строка кода будет одинаковой для каждого метода:"}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:C}),(0,l.jsxs)("p",{children:[y," может быть ",(0,l.jsx)(d.R,{children:"Set"}),", ",(0,l.jsx)(d.R,{children:"Map"})," или другим итерируемым объектом.",(0,l.jsx)(d.R,{children:"Array.from"})," превращает его в массив, с которым просто работать: обращаться к элементам по индексу, вызывать методы перебора вроде ",(0,l.jsx)(d.R,{children:"forEach"})," (спойлеры!)."]}),(0,l.jsxs)("p",{children:["Отдельно стоит рассмотреть случай, когда массив пуст. Для каждого метода он обрабатывается по-разному"," ",x.C6," этому посвящён следующий подраздел."]})]}),(0,l.jsxs)("section",{className:"section inner",children:[(0,l.jsx)("h3",{children:"Краевые случаи"}),(0,l.jsxs)("h4",{className:"spacer top small",children:["Пустой ",y]}),(0,l.jsxs)("p",{children:["Все четыре метода принимают итерируемый объект и возвращают новый промис, но у каждого из них есть особое поведение при передаче пустого итерируемого объекта. Это тот случай, когда методы ведут себя по-разному"," ",x.C6," и именно это различие важно запомнить."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"Promise.all([])"})," выполняется с пустым массивом ",(0,l.jsx)(d.R,{children:"[]"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"Promise.all([]).then((result) => console.log(result));",consoleLog:"[]"}),(0,l.jsxs)("p",{children:["Это логично: все промисы из пустого набора уже выполнены ",x.C6," их просто нет. Добавляем проверку: если массив пуст, сразу выполняем промис с пустым массивом:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:b}),(0,l.jsxs)("p",{children:["Это условие добавляем после приведения ",y," к массиву:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:S}),(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"Promise.race([])"})," навсегда остаётся в состоянии ожидания ",A,": никогда не выполняется и не отклоняется:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:R,consoleLog:'Promise { <state>: "pending" }'}),(0,l.jsxs)("p",{children:["Никакого условия здесь в ",(0,l.jsx)(d.R,{children:"MyPromise.race()"})," не добавляем."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"Promise.allSettled([])"})," выполняется с пустым массивом ",(0,l.jsx)(d.R,{children:"[]"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:"Promise.allSettled([]).then((result) => console.log(result));",consoleLog:"[]"}),(0,l.jsxs)("p",{children:["Как и в случае с ",(0,l.jsx)(d.R,{children:"Promise.all([])"}),", метод просто сообщает: все промисы завершены, а раз их нет ",x.C6," завершать нечего. Добавляем такую же проверку как и у"," ",(0,l.jsx)(d.R,{children:"MyPromise.all()"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:T}),(0,l.jsxs)("p",{children:[(0,l.jsx)(d.R,{children:"Promise.any([])"})," отклоняется с ошибкой ",(0,l.jsx)(d.R,{children:"AggregateError"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:f,consoleLog:"AggregateError: No Promise in Promise.any was resolved"}),(0,l.jsxs)("p",{children:["Логика такая: метод ищет хотя бы один выполненный промис, но в пустом наборе такого нет ",x.C6," значит, ни один промис не выполнен, и это ошибка."]}),(0,l.jsxs)("p",{children:["Добавляем в ",(0,l.jsx)(d.R,{children:"MyPromise.any()"})," проверку: если массив пуст, отклоняем промис с"," ",(0,l.jsx)(d.R,{children:"AggregateError"}),":"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:N}),(0,l.jsxs)("p",{children:["Это условие добавляется после приведения ",y," к массиву:"]}),(0,l.jsx)(a.z,{lang:m.Pl.JAVASCRIPT,code:w}),(0,l.jsxs)("p",{children:["С входными и выходными данными разобрались. Теперь приступим к реализации каждого метода ",x.C6," начнём с",P,". На его примере удобно разобрать основные приёмы, которые потом пригодятся и в остальных методах."]})]}),(0,l.jsx)(z,{}),(0,l.jsx)(L,{}),(0,l.jsx)(D,{}),(0,l.jsx)(k,{})]})});O.displayName="Practice";let W=()=>{let e=(0,n.useRef)(null),r=(0,n.useRef)(null),s=[{title:"Теория: зачем объединять промисы",ref:e},{title:"Практика: пишем свои методы",ref:r}];return(0,l.jsxs)(t.o,{postConfig:o.KG[o.Zr.PROMISES_COLLECTION],heroConfig:{size:i.Xd.SMALL,pattern:i.Uy.CROSS},children:[(0,l.jsx)(c.M,{items:s,strictLanguage:o.KG[o.Zr.PROMISES_COLLECTION].language}),(0,l.jsx)(I,{ref:e}),(0,l.jsx)(O,{ref:r}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Вместо заключения"}),(0,l.jsxs)("p",{children:["Поздравляю! Мы вместе проделали большой путь и теперь у тебя есть свои реализации всех основных статических методов для работы с группой промисов: ",P,", ",p,", ",_," и ",g,". Ты разобрался как они устроены изнутри, а это гораздо ценнее, чем просто уметь ими пользоваться. Разве это не прекрасно?"]})]})]})}},23161:e=>{e.exports={note:"Note_note__sQHx8",note__title:"Note_note__title__fZgQj",note__icon:"Note_note__icon__YuH5f",primary:"Note_primary__ho0yL",primary__title:"Note_primary__title__RhGpk",secondary:"Note_secondary__7qn5p",secondary__title:"Note_secondary__title__AJC5N"}},28948:(e,r,s)=>{"use strict";s.d(r,{Pl:()=>d,Cy:()=>g});var l=s(37876),t=s(15039),o=s.n(t),i=s(43747),n=s(14232),c=s(16686),a=s(26457);let d={PLAINTEXT:"plaintext",HTML:"html",CSS:"css",JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",REACT:"react",SCSS:"scss",BASH:"bash",JSON:"json"},m={[d.HTML]:"HTML",[d.CSS]:"CSS",[d.JAVASCRIPT]:"JS",[d.TYPESCRIPT]:"TS",[d.REACT]:"TSX",[d.SCSS]:"SCSS",[d.JSON]:"JSON",[d.PLAINTEXT]:"",[d.BASH]:""};var j=s(78261),h=s(40502),x=s(9399),u=s(78196),P=s(58411),p=s.n(P);let g=e=>{let{name:r,customName:s,code:t,language:P,showOnlyCode:g=!1,showLineNumbers:_=!0,startingLineNumber:y,isTerminal:A=!1,isNameUppercase:v=!1,consoleLog:C}=e,R=o().bind(p()),{translate:f}=(0,j.W)(),[b,S]=(0,n.useState)(!1),T=()=>{navigator.clipboard.writeText(t),S(!0),setTimeout(()=>{S(!1)},5e3)};return(0,l.jsx)("div",{className:p().code,children:g?(0,l.jsxs)("div",{className:p().code__highlighter,children:[(0,l.jsx)("div",{className:p().code__actions,children:(0,l.jsx)("button",{className:p().code__control,onClick:T,"aria-label":f(h.x_),children:b?(0,l.jsx)(c.f,{}):(0,l.jsx)(x.LE,{})})}),(0,l.jsx)(i.A,{startingLineNumber:y,language:P?.toLocaleLowerCase()||"plaintext",showLineNumbers:_,style:a.C5,children:t})]}):(0,l.jsxs)("div",{className:p().code__wrapper,children:[(0,l.jsxs)("div",{className:p().code__header,children:[(0,l.jsxs)("div",{className:R([p().code__name,{[p().uppercase]:v}]),children:[A?(0,l.jsx)(x.q7,{useMini:!0,className:p().code__icon}):(0,l.jsx)(x.RO,{useMini:!0,className:p().code__icon}),P!==d.BASH&&s||P&&r&&`${r}.${m[P].toLocaleLowerCase()}`]}),(0,l.jsx)("div",{className:p().code__actions,children:(0,l.jsx)("button",{className:p().code__control,onClick:T,"aria-label":f(h.x_),children:b?(0,l.jsx)(c.f,{}):(0,l.jsx)(x.LE,{})})})]}),(0,l.jsxs)("div",{className:p().code__body,children:[(0,l.jsx)(i.A,{language:P?.toLocaleLowerCase()||"plaintext",showLineNumbers:!A&&_,wrapLines:!0,style:a.C5,children:t}),C&&(0,l.jsx)("div",{className:p().code__console,children:(0,l.jsx)(u.R,{code:C,showConsole:!0,isCopyable:!0,isEmbedded:!0})})]})]})})}},35064:(e,r,s)=>{"use strict";s.d(r,{Jd:()=>i,OR:()=>c,Z8:()=>o,iO:()=>a,mq:()=>n});var l=s(37876),t=s(58525);let o=e=>(0,l.jsxs)("span",{className:"accented ghost spacer left extra-small",children:["(",e,")"]}),i=e=>`<${e}>`,n=(e,r,s)=>{let t=r||"span";return e.map((r,o)=>(0,l.jsxs)("span",{children:[(0,l.jsx)(t,{className:s,children:r}),o!==e.length-1?", ":null]},`${r}-${o}`))},c=(e,r=!0)=>{let s=r?"'":"",o=e&&`${s}${e}${s}`;return(0,l.jsxs)(t.R,{children:["console.log(",o,")"]})},a=e=>(0,l.jsxs)(l.Fragment,{children:["\xab",e,"\xbb"]})},35468:(e,r,s)=>{"use strict";s.d(r,{G:()=>l});let l={PRIMARY:"primary",SECONDARY:"secondary"}},41395:e=>{e.exports={table_of_contents__title:"TableOfContents_table_of_contents__title__31aUG",SECONDARY:"TableOfContents_SECONDARY__mp5of",table_of_contents__button:"TableOfContents_table_of_contents__button__lf7Gl",PRIMARY:"TableOfContents_PRIMARY__7Hy_1"}},48700:e=>{e.exports={example_snippet:"ExampleSnippet_example_snippet__Fwo7u"}},54399:(e,r,s)=>{"use strict";s.d(r,{L:()=>a});var l=s(37876),t=s(15039),o=s.n(t),i=s(35468),n=s(23161),c=s.n(n);let a=({title:e,children:r,type:s=i.G.PRIMARY})=>{let t=o().bind(c());return(0,l.jsxs)("div",{className:t([c().note,c()[s]]),children:[e&&(0,l.jsxs)("span",{className:c().note__title,children:[e,": "]}),r]})}},55686:(e,r,s)=>{"use strict";s.d(r,{j:()=>l});let l={PRIMARY:"PRIMARY",SECONDARY:"SECONDARY"}},58411:e=>{e.exports={code:"Code_code___ALYP",code__wrapper:"Code_code__wrapper__VoZb9",code__header:"Code_code__header__XUQ5W",code__name:"Code_code__name__rsVhv",uppercase:"Code_uppercase__3suyI",code__body:"Code_code__body__Hy27d",code__highlighter:"Code_code__highlighter__JwMRG",code__icon:"Code_code__icon__HYjpp",code__control:"Code_code__control__yx_MM",demo__control:"Code_demo__control__r9nlJ",code__console:"Code_code__console__o8ueE"}},58525:(e,r,s)=>{"use strict";s.d(r,{R:()=>t});var l=s(37876);let t=({children:e=""})=>(0,l.jsx)("code",{className:"code",children:e})},60813:(e,r,s)=>{"use strict";s.d(r,{G:()=>t.G,L:()=>l.L});var l=s(54399),t=s(35468)},62217:(e,r,s)=>{"use strict";s.d(r,{m:()=>o});var l=s(37876),t=s(46512);let o=e=>{let{id:r,cover:s,title:t}=e;return s?(0,l.jsx)("section",{className:"section inner",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col col--20",children:(0,l.jsx)("img",{src:s,alt:`Обложка книги \xab${t}\xbb`,className:"image BOOKCOVER"})}),(0,l.jsx)("div",{className:"col col--80",children:i(e)})]})},r):(0,l.jsx)("section",{className:"section inner",children:i(e)},r)},i=e=>{let{title:r,author:s,category:t,tags:o,content:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{children:["\xab",r,"\xbb, ",s]}),n(t,o),i]})},n=(e,r)=>(0,l.jsxs)("div",{className:"tags spacer top bottom small",children:[e.map(e=>(0,l.jsx)("div",{className:"tag primary",children:e},(0,t.Ak)())),r?.map(e=>(0,l.jsx)("div",{className:"tag secondary",children:e},(0,t.Ak)()))]})},63357:(e,r,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/promises-collection",function(){return s(14831)}])},74343:e=>{e.exports={example:"Example_example__9St6s",DEFAULT:"Example_DEFAULT__HFLHk",EMBEDDED:"Example_EMBEDDED__MPi77",example__console:"Example_example__console__Gt__w",example__console_icon:"Example_example__console_icon__gj4yg",example__console_title:"Example_example__console_title__C_pUG",example__actions:"Example_example__actions__lpQQr",example__control:"Example_example__control__wPPLQ"}},76149:(e,r,s)=>{"use strict";s.d(r,{d:()=>i,g:()=>o});var l=s(37876),t=s(58525);let o=(0,l.jsx)(t.R,{children:"undefined"}),i=(0,l.jsx)(t.R,{children:"null"})},78196:(e,r,s)=>{"use strict";s.d(r,{R:()=>x});var l=s(37876),t=s(14232),o=s(43747),i=s(78261),n=s(40502),c=s(9399),a=s(15039),d=s.n(a),m=s(26457),j=s(74343),h=s.n(j);let x=({code:e,isCopyable:r=!0,isEmbedded:s=!1,showConsole:a=!1})=>{let j=d().bind(h()),{translate:x}=(0,i.W)(),[u,P]=(0,t.useState)(!1),p=s?h().EMBEDDED:h().DEFAULT;return(0,l.jsx)("div",{className:j([h().example,p]),children:(0,l.jsxs)("div",{className:h().code__wrapper,children:[r&&(0,l.jsx)("div",{className:h().example__actions,children:(0,l.jsx)("button",{className:j([h().example__control,p]),onClick:()=>{navigator.clipboard.writeText(e),P(!0),setTimeout(()=>{P(!1)},5e3)},"aria-label":x(n.x_),children:u?(0,l.jsx)(c.fH,{}):(0,l.jsx)(c.LE,{})})}),a&&(0,l.jsxs)("div",{className:j([h().example__console,p]),children:[(0,l.jsx)(c.$2,{className:h().example__console_icon}),(0,l.jsx)("div",{className:h().example__console_title,children:"Console"})]}),(0,l.jsx)(o.A,{language:"javascript",showLineNumbers:!1,style:m.C5,wrapLines:!0,lineProps:()=>({style:{display:"block",position:"relative",paddingLeft:"1.5em"},className:"prefixed-line"}),children:e})]})})}},83232:(e,r,s)=>{"use strict";s.d(r,{OR:()=>l.OR,B4:()=>t,iO:()=>l.iO}),s(62217);var l=s(35064);let t=e=>Array.from({length:e},e=>null);s(20381)},84390:(e,r,s)=>{"use strict";s.d(r,{k:()=>n});var l=s(37876),t=s(78196),o=s(48700),i=s.n(o);let n=({code:e,isCopyable:r})=>(0,l.jsx)("div",{className:i().example_snippet,children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,l.jsx)(t.R,{code:e,isCopyable:r,showConsole:!0})})})})}},e=>{e.O(0,[230,867,459,577,636,593,792],()=>e(e.s=63357)),_N_E=e.O()}]);