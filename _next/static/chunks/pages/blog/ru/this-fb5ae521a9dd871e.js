(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{336:e=>{e.exports={code_snippet:"CodeSnippet_code_snippet__EDJgC"}},5351:(e,s,l)=>{"use strict";l.d(s,{z:()=>h});var n=l(37876),i=l(28948),c=l(14232),o=l(78984),t=l(99342),a=l.n(t),r=l(336),d=l.n(r);let h=({lang:e,code:s,name:l,customName:t,consoleLog:r,hideLines:h=!1})=>{let x=((e=!0)=>{let s=(0,c.useContext)(o.M),l=(0,c.useRef)(null);if(!s)throw Error("useCodeSnippetNumber must be used within a <CodeSnippetProvider>");return e&&null===l.current&&(s.counterRef.current+=1,l.current=s.counterRef.current),l.current})(a()(l)&&a()(t)),_=l??`snippet(${x})`;return(0,n.jsx)("div",{className:"spacer bottom small",children:(0,n.jsx)("div",{className:d().code_snippet,children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col col--100",children:(0,n.jsx)(i.Cy,{language:e,name:_,customName:t,code:s,isTerminal:h,consoleLog:r})})})})})}},7214:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>p});var n=l(37876),i=l(54587),c=l.n(i),o=l(83577),t=l(27689),a=l(37339),r=l(58525),d=l(5351),h=l(28948),x=l(35064),_=l(84390),j=l(60813);let m="example",p=()=>{let e=(0,n.jsx)(r.R,{children:"this"}),s=`console.log(this); // window
console.log(this === window); // true`,l=`const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

user.sayHello(); // Привет, я dtsiki`,i=`function doSomething() {
  console.log(this);
}

function doSomethingStrict() {
  'use strict';
  console.log(this);
}

doSomething(); // window
doSomethingStrict(); // undefined`,p=`const user = {
  name: 'dtsiki',
  sayHi: () => {
     console.log(\`Привет, я $\{this.name}\`);
  }
};

user.sayHi(); // Привет, я undefined`,u=`const user = {
  name: 'dtsiki',
  skills: ['JavaScript', 'TypeScript', 'React'],
  showSkills() {
    this.skills.forEach((skill) => {
      console.log(\`$\{this.name} знает $\{skill}\`);
    });
  }
};

user.showSkills();`,R=`dtsiki знает JavaScript
dtsiki знает TypeScript
dtsiki знает React`,N=`const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

const introduce = user.sayHello;
introduce(); // Привет, я undefined`,g=`function User(name) {
  this.name = name;
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
}`,S=`function User(name) {
  // Создаётся пустой объект this = {}
  this.name = name; // Записывается в this name
   sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
  // Функция возвращает этот объект this
}

const user = new User('dtsiki');
user.sayHello(); // Привет, я dtsiki
console.log(user.name); // dtsiki`,y=`class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
}

const user = new User('dtsiki');
user.sayHello(); // Привет, я dtsiki`,C=`const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

const sayHello = user.sayHello;
sayHello.call(user); // Привет, я dtsiki
sayHello.apply(user); // Привет, я dtsiki`,A=`function introduce(position, language) {
  console.log(\`Я $\{this.name}, я $\{position} и я люблю $\{language}\`);
}

const user = {
  name: "dtsiki"
};

introduce.call(user, "фронтенд-разработчица", "JavaScript"); // Я dtsiki, я фронтенд-разработчица и я люблю JavaScript`,w=`function introduce(position, language) {
  console.log(\`Я $\{this.name}, я $\{position} и я люблю $\{language}\`);
}

const user = {
  name: "dtsiki"
};

introduce.apply(user, ["фронтенд-разработчица", "JavaScript"]); // Я dtsiki, я фронтенд-разработчица и я люблю JavaScript`,v=`const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

const sayHello = user.sayHello.bind(user);
sayHello(); // Привет, я dtsiki`,P=`function introduce(position, language) {
  console.log(\`Я $\{this.name}, я $\{position} и я люблю $\{language}\`);
}

const user = {
  name: "dtsiki"
};

const introduceUser = introduce.bind(user, "фронтенд-разработчица", "JavaScript"); // "Я dtsiki, я фронтенд-разработчица и я люблю JavaScript"
introduceUser();`,b=`const sayHello = user.sayHi.bind(user);
sayHello.call({ name: 'Кто-то другой' }); // "Привет, я dtsiki"
sayHello.apply({ name: 'Ещё кто-то' }); // "Привет, я dtsiki"`,k=`const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

setTimeout(user.sayHello, 1000); // Привет, я undefined`,T=`const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

setTimeout(() => user.sayHi(), 1000); // Привет, я dtsiki`,f=`const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log(this, event); // <button>, click
});`,E=`const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log(this, event); // window, click
});`;return(0,n.jsxs)(o.o,{postConfig:t.KG[t.Zr.THIS],heroConfig:{size:a.Xd.SMALL,pattern:a.Uy.TRIANGLES},children:[(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsxs)("p",{children:[e," — это указатель."]}),(0,n.jsxs)("p",{children:[e," — это указатель на объект, который функция получает при вызове. Через ",e," ","функция может получить доступ к свойствам и методам этого объекта. Всё это происходит внутри контекста выполнения функции, который включает в себя ",e,", переменные и ссылку на внешнюю область видимости."]}),(0,n.jsxs)("p",{children:[e," — это не контекст выполнения, а просто указатель."]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Глобальный контекст"}),(0,n.jsxs)("p",{children:["Если написать ",e," не внутри чего-либо, то он будет глобальным. Например, если написать прямо в консоли браузера:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:s}),(0,n.jsxs)("p",{children:[e," в этом случае ссылается на глобальный объект, в браузере это объект"," ",(0,n.jsx)(r.R,{children:"window"}),", в Node.js это объект ",(0,n.jsx)(r.R,{children:"global"}),". Независимо от строгого режима."]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Объекты"}),(0,n.jsxs)("p",{children:["В объектах ",e," указывает непосредственно на объект, который стоит перед точкой во время вызова:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:l,name:m}),(0,n.jsxs)("p",{children:["Смотрим только на точку перед функцией в момент её запуска: ",e," указывает на объект"," ",(0,n.jsx)(r.R,{children:"user"}),", функция видит ",(0,n.jsx)(r.R,{children:"name"}),", всё работает."]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsxs)("h2",{children:["Обычные функции ",(0,x.Z8)("все, которые не стрелочные")]}),(0,n.jsxs)("p",{children:["У функций, объявленых через ключевое слово ",(0,n.jsx)(r.R,{children:"function"}),", ",e," в строгом режиме равен ",(0,n.jsx)(r.R,{children:"undefined"}),", а в нестрогом — ",(0,n.jsx)(r.R,{children:"window"}),":"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:i,name:m}),(0,n.jsx)("p",{children:"Потому что обычные функции не умеют ходить дальше своей функции и брать контекст из лексического окружения. Но есть кто-то, кто так умеет."})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Стрелочные функции"}),(0,n.jsx)("p",{children:"У стрелочных функций тоже нет контекста:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:p,name:m}),(0,n.jsx)("p",{children:"Когда стрелочная функция пишется как свойство объекта, она создаётся в глобальном контексте (не внутри другой функции). При этом стрелочная функция не привязывается к объекту, в котором она лежит как свойство."}),(0,n.jsx)(j.L,{type:j.G.SECONDARY,children:(0,n.jsxs)("p",{children:["Вместо ",(0,n.jsx)(r.R,{children:"undefined"})," может выводится пустая строка в браузере, так как контекст может ссылаться на объект ",(0,n.jsx)(r.R,{children:"window"}),", у которого есть поле ",(0,n.jsx)(r.R,{children:"name"})," со своим дефолтным значением — пустая строка ",(0,n.jsx)(r.R,{children:'""'}),"."]})}),(0,n.jsx)("p",{children:"Но в отличии от обычных функций, стрелочные умеют брать контекст из родительского лексического окружения. Конечно же, зависит от того, где стрелочная функция написана. Как проявить суперспособность стрелочной функции:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:u,name:m}),(0,n.jsx)(_.k,{code:R}),(0,n.jsxs)("p",{children:["Внутри ",(0,n.jsx)(r.R,{children:"forEach"})," стрелочная функция, у которой нет контекста, но код тем не менее работает. Всё потому, что стрелочная функция смотрит наверх и берёт контекст из родительского окружения т.е. из метода ",(0,n.jsx)(r.R,{children:"showSkills"}),"."]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Функции-конструкторы"}),(0,n.jsxs)("p",{children:["Функция-конструктор в JavaScript — это обычная функция, которая создает и настраивает новые объекты с помощью ключевого слова ",(0,n.jsx)(r.R,{children:"new"}),":"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:g,name:m}),(0,n.jsxs)("p",{children:["Если функция вызывается как конструктор через ",(0,n.jsx)(r.R,{children:"new"}),", то будет создан пустой объект и привязыван к ",e,":"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:S,name:m})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Классы"}),(0,n.jsx)("p",{children:"Классы в JavaScript это синтаксический сахар над функциями-конструкторами. Поэтому в классах контекст ведет себя аналогично функциям-конструкторам:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:y,name:m}),(0,n.jsxs)("p",{children:["Разница лишь в том, что контекст ссылается не на объект как таковой, а на конкретный экземпляр объекта, который был создан с помощью оператора ",(0,n.jsx)(r.R,{children:"new"}),". Те же яйца, только в профиль."]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Обработчики событий"}),(0,n.jsxs)("p",{children:["В обработчиках событий ",e," ссылается на DOM-элемент, на который непосредственно привязан этот обработчик:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:f,name:m}),(0,n.jsx)("p",{children:"У стрелочных функций тут всё ещё контекста:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:E,name:m})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Снова объекты"}),(0,n.jsx)("p",{children:"В JavaScript контекст легко потерять:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:N,name:m}),(0,n.jsx)("p",{children:"Куда делся контекст?"}),(0,n.jsx)("div",{className:"width-limiter medium centered spacer top bottom small",children:(0,n.jsx)(c(),{src:"/assets/blog/this/pulp-fiction.gif",alt:"",layout:"responsive",objectFit:"cover",width:350,height:350})}),(0,n.jsxs)("p",{children:["На (8) строчке в переменную ",(0,n.jsx)(r.R,{children:"introduce"})," передаётся только ссылка на функцию"," ",(0,n.jsx)(r.R,{children:"sayHello"}),". Объект ",(0,n.jsx)(r.R,{children:"user"})," в этот момент остался где-то в стороне. На (9) строчке функция вызывается как изолированная функция, не привязанная к объекту"," ",(0,n.jsx)(r.R,{children:"user"}),". Контекст теперь начинает указывать либо глобальный объект"," ",(0,n.jsx)(r.R,{children:"window"}),", либо становится ",(0,n.jsx)(r.R,{children:"undefined"})," в строгом режиме. А у глобального объекта нет свойства ",(0,n.jsx)(r.R,{children:"name"}),". Вот и потеряли ",e,"."]}),(0,n.jsx)("p",{children:"Аналогичная ситуация произойдёт если метод объекта передать куда-то как колбэк. Например так:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:k,name:m}),(0,n.jsxs)("p",{children:["Тут прописать ",(0,n.jsx)(r.R,{children:"user.sayHello()"})," уже не прокатит — функция вызовется мгновенно."]}),(0,n.jsx)("p",{children:"Что можно сделать здесь в таких ситуация?"}),(0,n.jsxs)("ol",{className:"list ordered",children:[(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsxs)("p",{children:["Не забывать, что ",(0,n.jsx)(r.R,{children:"obj.func"})," и ",(0,n.jsx)(r.R,{children:"obj.func()"})," это совершенно разные вещи. Помним:"]}),(0,n.jsxs)("ul",{className:"list markered",children:[(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("p",{className:"list__title",children:(0,n.jsx)(r.R,{children:"obj.func"})}),(0,n.jsx)("p",{className:"list__footer",children:"— обращение к свойству объекта, значением которого является сама функция или ссылка на неё. Сама функция при этом не вызывается"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("p",{className:"list__title",children:(0,n.jsx)(r.R,{children:"obj.func()"})}),(0,n.jsx)("p",{className:"list__footer",children:"— непосредственный вызов этой функции как метода объекта"})]})]})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("p",{className:"list__title",children:"Использовать анонимную или стрелочную функцию"}),(0,n.jsx)("p",{className:"list__footer",children:"Вызывать метод напрямую нельзя, поэтому отдаем функцию-пустышку, внутри которой вызываем метод правильно — через точку:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:T,name:m})]}),(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"Вручную привязать объект к контексту"})})]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Принудительная привязка контекста"}),(0,n.jsx)("p",{children:"Вспомним пример где контекст потерялся:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:N,name:m}),(0,n.jsxs)("p",{children:["Помимо вызова метода через точку ",(0,n.jsx)(r.R,{children:"user.sayHello()"}),", этот код можно исправить тремя способами."]}),(0,n.jsxs)("p",{children:["Можно вручную указать, что за контекст нужно принять такой-то конкретный объект. Для этого существуют три метода: ",(0,n.jsx)(r.R,{children:"call"}),", ",(0,n.jsx)(r.R,{children:"apply"})," и ",(0,n.jsx)(r.R,{children:"bind"}),"."]}),(0,n.jsxs)("section",{className:"section inner",children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)(r.R,{children:"call"})," и ",(0,n.jsx)(r.R,{children:"apply"})]}),(0,n.jsx)("p",{children:"Принимают контекст первым аргументом::"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:C,name:m}),(0,n.jsx)("p",{children:"Обе функции вызываются сразу"}),(0,n.jsxs)("p",{children:["Можно передать аргументы если они есть. Для ",(0,n.jsx)(r.R,{children:"call"})," они передаются через запятую:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:A,name:m}),(0,n.jsxs)("p",{children:["Для ",(0,n.jsx)(r.R,{children:"apply"})," в виде массива:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:w,name:m})]}),(0,n.jsxs)("section",{className:"section inner",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(r.R,{children:"bind"})}),(0,n.jsxs)("p",{children:["Метод ",(0,n.jsx)(r.R,{children:"bind"})," не вызывает функцию сразу, а создает новую функцию-обёртку, которая будет ",(0,n.jsx)("strong",{children:"всегда"})," помнить на что ",e," теперь указывает:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:v,name:m}),(0,n.jsx)("p",{children:"Аргументы тоже можно передать, если они есть. Передаются через запятую после будущего контекста:"}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:P,name:m}),(0,n.jsxs)("p",{children:["Изменить контекст, который уже привязан с помощью ",(0,n.jsx)(r.R,{children:"bind"}),", невозможно:"]}),(0,n.jsx)(d.z,{lang:h.Pl.JAVASCRIPT,code:b,name:m}),(0,n.jsxs)("p",{children:["Если нужно, чтобы у функции менялся контекст, просто не используйте ",(0,n.jsx)(r.R,{children:"bind"}),"."]})]}),(0,n.jsxs)("section",{className:"section outer",children:[(0,n.jsx)("h2",{children:"Резюмируем"}),(0,n.jsxs)("p",{children:["Чтобы безошибочно понимать, чему равен ",e,", смотрите только на точку перед функцией в момент её запуска:"]}),(0,n.jsxs)("ul",{className:"list markered",children:[(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsxs)("p",{className:"list__title",children:["Точка стоит после объекта: ",(0,n.jsx)(r.R,{children:"obj.doSomething()"})]}),(0,n.jsxs)("p",{children:[e," равен объекту ",(0,n.jsx)(r.R,{children:"obj"})," перед точкой"," "]})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsxs)("p",{className:"list__title",children:["Точки нет: ",(0,n.jsx)(r.R,{children:"doSomething()"})]}),(0,n.jsxs)("p",{children:[e," будет либо ",(0,n.jsx)(r.R,{children:"undefined"})," в строгом режиме либо"," ",(0,n.jsx)(r.R,{children:"window"})]})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsxs)("p",{className:"list__title",children:["Точки нет, но есть конструктор-функции c ",(0,n.jsx)(r.R,{children:"new"}),":"," ",(0,n.jsx)(r.R,{children:"new Something()"})]}),(0,n.jsxs)("p",{children:[e," равен новому, только что созданному пустому объекту"]})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsxs)("p",{className:"list__title",children:["Есть ",(0,n.jsx)(r.R,{children:"call"}),", ",(0,n.jsx)(r.R,{children:"apply"})," или ",(0,n.jsx)(r.R,{children:"bind"})]}),(0,n.jsxs)("p",{children:[e," будет равен тому объекту, который вы передали в скобки"]})]})]})]}),(0,n.jsx)("p",{children:"Всё!"})]})]})}},23161:e=>{e.exports={note:"Note_note__sQHx8",note__title:"Note_note__title__fZgQj",note__icon:"Note_note__icon__YuH5f",primary:"Note_primary__ho0yL",primary__title:"Note_primary__title__RhGpk",secondary:"Note_secondary__7qn5p",secondary__title:"Note_secondary__title__AJC5N"}},28948:(e,s,l)=>{"use strict";l.d(s,{Pl:()=>d,Cy:()=>R});var n=l(37876),i=l(15039),c=l.n(i),o=l(43747),t=l(14232),a=l(16686),r=l(26457);let d={PLAINTEXT:"plaintext",HTML:"html",CSS:"css",JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",REACT:"react",SCSS:"scss",BASH:"bash",JSON:"json"},h={[d.HTML]:"HTML",[d.CSS]:"CSS",[d.JAVASCRIPT]:"JS",[d.TYPESCRIPT]:"TS",[d.REACT]:"TSX",[d.SCSS]:"SCSS",[d.JSON]:"JSON",[d.PLAINTEXT]:"",[d.BASH]:""};var x=l(78261),_=l(40502),j=l(9399),m=l(78196),p=l(58411),u=l.n(p);let R=e=>{let{name:s,customName:l,code:i,language:p,showOnlyCode:R=!1,showLineNumbers:N=!0,startingLineNumber:g,isTerminal:S=!1,isNameUppercase:y=!1,consoleLog:C}=e,A=c().bind(u()),{translate:w}=(0,x.W)(),[v,P]=(0,t.useState)(!1),b=()=>{navigator.clipboard.writeText(i),P(!0),setTimeout(()=>{P(!1)},5e3)};return(0,n.jsx)("div",{className:u().code,children:R?(0,n.jsxs)("div",{className:u().code__highlighter,children:[(0,n.jsx)("div",{className:u().code__actions,children:(0,n.jsx)("button",{className:u().code__control,onClick:b,"aria-label":w(_.x_),children:v?(0,n.jsx)(a.f,{}):(0,n.jsx)(j.LE,{})})}),(0,n.jsx)(o.A,{startingLineNumber:g,language:p?.toLocaleLowerCase()||"plaintext",showLineNumbers:N,style:r.C5,children:i})]}):(0,n.jsxs)("div",{className:u().code__wrapper,children:[(0,n.jsxs)("div",{className:u().code__header,children:[(0,n.jsxs)("div",{className:A([u().code__name,{[u().uppercase]:y}]),children:[S?(0,n.jsx)(j.q7,{useMini:!0,className:u().code__icon}):(0,n.jsx)(j.RO,{useMini:!0,className:u().code__icon}),p!==d.BASH&&l||p&&s&&`${s}.${h[p].toLocaleLowerCase()}`]}),(0,n.jsx)("div",{className:u().code__actions,children:(0,n.jsx)("button",{className:u().code__control,onClick:b,"aria-label":w(_.x_),children:v?(0,n.jsx)(a.f,{}):(0,n.jsx)(j.LE,{})})})]}),(0,n.jsxs)("div",{className:u().code__body,children:[(0,n.jsx)(o.A,{language:p?.toLocaleLowerCase()||"plaintext",showLineNumbers:!S&&N,wrapLines:!0,style:r.C5,children:i}),C&&(0,n.jsx)("div",{className:u().code__console,children:(0,n.jsx)(m.R,{code:C,showConsole:!0,isCopyable:!0,isEmbedded:!0})})]})]})})}},35064:(e,s,l)=>{"use strict";l.d(s,{OR:()=>t,Z8:()=>c,iO:()=>a,mq:()=>o});var n=l(37876),i=l(58525);let c=e=>(0,n.jsxs)("span",{className:"accented ghost spacer left extra-small",children:["(",e,")"]}),o=(e,s,l)=>{let i=s||"span";return e.map((s,c)=>(0,n.jsxs)("span",{children:[(0,n.jsx)(i,{className:l,children:s}),c!==e.length-1?", ":null]},`${s}-${c}`))},t=(e,s=!0)=>{let l=s?"'":"",c=e&&`${l}${e}${l}`;return(0,n.jsxs)(i.R,{children:["console.log(",c,")"]})},a=e=>(0,n.jsxs)(n.Fragment,{children:["\xab",e,"\xbb"]})},35468:(e,s,l)=>{"use strict";l.d(s,{G:()=>n});let n={PRIMARY:"primary",SECONDARY:"secondary"}},48700:e=>{e.exports={example_snippet:"ExampleSnippet_example_snippet__Fwo7u"}},54399:(e,s,l)=>{"use strict";l.d(s,{L:()=>r});var n=l(37876),i=l(15039),c=l.n(i),o=l(35468),t=l(23161),a=l.n(t);let r=({title:e,children:s,type:l=o.G.PRIMARY})=>{let i=c().bind(a());return(0,n.jsxs)("div",{className:i([a().note,a()[l]]),children:[e&&(0,n.jsxs)("span",{className:a().note__title,children:[e,": "]}),s]})}},58411:e=>{e.exports={code:"Code_code___ALYP",code__wrapper:"Code_code__wrapper__VoZb9",code__header:"Code_code__header__XUQ5W",code__name:"Code_code__name__rsVhv",uppercase:"Code_uppercase__3suyI",code__body:"Code_code__body__Hy27d",code__highlighter:"Code_code__highlighter__JwMRG",code__icon:"Code_code__icon__HYjpp",code__control:"Code_code__control__yx_MM",demo__control:"Code_demo__control__r9nlJ",code__console:"Code_code__console__o8ueE"}},58525:(e,s,l)=>{"use strict";l.d(s,{R:()=>i});var n=l(37876);let i=({children:e=""})=>(0,n.jsx)("code",{className:"code",children:e})},60813:(e,s,l)=>{"use strict";l.d(s,{G:()=>i.G,L:()=>n.L});var n=l(54399),i=l(35468)},74343:e=>{e.exports={example:"Example_example__9St6s",DEFAULT:"Example_DEFAULT__HFLHk",EMBEDDED:"Example_EMBEDDED__MPi77",example__console:"Example_example__console__Gt__w",example__console_icon:"Example_example__console_icon__gj4yg",example__console_title:"Example_example__console_title__C_pUG",example__actions:"Example_example__actions__lpQQr",example__control:"Example_example__control__wPPLQ"}},78196:(e,s,l)=>{"use strict";l.d(s,{R:()=>j});var n=l(37876),i=l(14232),c=l(43747),o=l(78261),t=l(40502),a=l(9399),r=l(15039),d=l.n(r),h=l(26457),x=l(74343),_=l.n(x);let j=({code:e,isCopyable:s=!0,isEmbedded:l=!1,showConsole:r=!1})=>{let x=d().bind(_()),{translate:j}=(0,o.W)(),[m,p]=(0,i.useState)(!1),u=l?_().EMBEDDED:_().DEFAULT;return(0,n.jsx)("div",{className:x([_().example,u]),children:(0,n.jsxs)("div",{className:_().code__wrapper,children:[s&&(0,n.jsx)("div",{className:_().example__actions,children:(0,n.jsx)("button",{className:x([_().example__control,u]),onClick:()=>{navigator.clipboard.writeText(e),p(!0),setTimeout(()=>{p(!1)},5e3)},"aria-label":j(t.x_),children:m?(0,n.jsx)(a.fH,{}):(0,n.jsx)(a.LE,{})})}),r&&(0,n.jsxs)("div",{className:x([_().example__console,u]),children:[(0,n.jsx)(a.$2,{className:_().example__console_icon}),(0,n.jsx)("div",{className:_().example__console_title,children:"Console"})]}),(0,n.jsx)(c.A,{language:"javascript",showLineNumbers:!1,style:h.C5,wrapLines:!0,lineProps:()=>({style:{display:"block",position:"relative",paddingLeft:"1.5em"},className:"prefixed-line"}),children:e})]})})}},84390:(e,s,l)=>{"use strict";l.d(s,{k:()=>t});var n=l(37876),i=l(78196),c=l(48700),o=l.n(c);let t=({code:e,isCopyable:s})=>(0,n.jsx)("div",{className:o().example_snippet,children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,n.jsx)(i.R,{code:e,isCopyable:s,showConsole:!0})})})})},91745:(e,s,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/this",function(){return l(7214)}])}},e=>{e.O(0,[230,867,459,577,636,593,792],()=>e(e.s=91745)),_N_E=e.O()}]);