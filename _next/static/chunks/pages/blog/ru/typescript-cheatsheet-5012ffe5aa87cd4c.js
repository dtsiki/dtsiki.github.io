(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{6549:(e,s,n)=>{"use strict";n.d(s,{M:()=>x});var i=n(37876),l=n(14232),r=n(15039),t=n.n(r),c=n(78261),a=n(55686),d=n(40502),o=n(20381),h=n(41395),p=n.n(h);let x=({customTitle:e,items:s,strictLanguage:n,hideNumbers:r,variant:h=a.j.PRIMARY})=>{let x=t().bind(p()),{language:m}=(0,c.W)(),j=(0,l.useMemo)(()=>s.map(e=>(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)("button",{onClick:()=>(e=>{let s=e.current?.getBoundingClientRect();if(s){let e=s.top+window.pageYOffset-150;window.scrollTo({top:e,behavior:"smooth"})}})(e.ref),className:x([p().table_of_contents__button,p()[h]]),"arial-label":`${(0,o.T)(n||m,d.fN)} ${e.title}`,children:e.title})},e.title)),[s]);return(0,i.jsxs)("section",{className:x([p().table_of_contents,"section outer"]),children:[(0,i.jsx)("h2",{className:x([p().table_of_contents__title,p()[h]]),children:(0,o.T)(n||m,e||d.cL)}),r?(0,i.jsx)("ul",{className:"list",children:j}):(0,i.jsx)("ol",{className:"list ordered",children:j})]})}},21173:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/typescript-cheatsheet",function(){return n(88109)}])},23161:e=>{e.exports={note:"Note_note__sQHx8",note__title:"Note_note__title__fZgQj",note__icon:"Note_note__icon__YuH5f",primary:"Note_primary__ho0yL",primary__title:"Note_primary__title__RhGpk",secondary:"Note_secondary__7qn5p",secondary__title:"Note_secondary__title__AJC5N"}},35468:(e,s,n)=>{"use strict";n.d(s,{G:()=>i});let i={PRIMARY:"primary",SECONDARY:"secondary"}},41395:e=>{e.exports={table_of_contents__title:"TableOfContents_table_of_contents__title__31aUG",SECONDARY:"TableOfContents_SECONDARY__mp5of",table_of_contents__button:"TableOfContents_table_of_contents__button__lf7Gl",PRIMARY:"TableOfContents_PRIMARY__7Hy_1"}},54399:(e,s,n)=>{"use strict";n.d(s,{L:()=>d});var i=n(37876),l=n(15039),r=n.n(l),t=n(35468),c=n(23161),a=n.n(c);let d=({title:e,children:s,type:n=t.G.PRIMARY})=>{let l=r().bind(a());return(0,i.jsxs)("div",{className:l([a().note,a()[n]]),children:[e&&(0,i.jsxs)("span",{className:a().note__title,children:[e,": "]}),s]})}},55686:(e,s,n)=>{"use strict";n.d(s,{j:()=>i});let i={PRIMARY:"PRIMARY",SECONDARY:"SECONDARY"}},60813:(e,s,n)=>{"use strict";n.d(s,{G:()=>l.G,L:()=>i.L});var i=n(54399),l=n(35468)},74050:e=>{e.exports={alert_icon:"InstallTS_alert_icon__s4D2d"}},88109:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>G});var i=n(37876),l=n(14232),r=n(83577),t=n(27689),c=n(37339),a=n(15039),d=n.n(a),o=n(60813),h=n(12062),p=n(84390),x=n(9399),m=n(74050),j=n.n(m);let u=(0,l.forwardRef)(({},e)=>{d().bind(j());let s=`node --version
npm --version`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsx)("h2",{children:"Установка TypeScript"}),(0,i.jsx)("p",{children:"Перед установкой TypeScript проверьте, что у вас стоит Node.js. Если есть сомнение — откройте терминал (командную строку) и напишите:"}),(0,i.jsx)(p.k,{code:s}),(0,i.jsxs)("p",{children:["Если появились цифры типа ",(0,i.jsx)("em",{children:"v18.18.0 и 9.8."})," — всё ок. Если нет, то идём на"," ",(0,i.jsx)(h.G,{label:"nodejs.org",href:"https://nodejs.org/en"}),", качаем LTS-версию, устанавливаем. Это всё бесплатно."]}),(0,i.jsx)("p",{children:"Есть несколько вариантов установки TypeScript: глобальная, локальная вручную и автоматическая через сборщики."}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Глобальная установка"}),(0,i.jsx)("p",{children:"Позволяет использовать команды компилятора TypeScript в любом месте на вашем компьютере. Удобно для экспериментов и небольших скриптов."}),(0,i.jsx)("p",{children:"Ставим:"}),(0,i.jsx)(p.k,{code:"npm install -g typescript"}),(0,i.jsx)("p",{children:"Чтобы проверить, что TypeScript установился, просто введите команду проверки текущий версии:"}),(0,i.jsx)(p.k,{code:"tsc -v"}),(0,i.jsxs)("p",{children:["Затем вы просто создаёте файлы с расширением ",(0,i.jsx)("strong",{children:".ts"}),", в котором пишите TypeScript-код, сохраняете изменения, а для компиляции этих файлов запускаете команду:"]}),(0,i.jsx)(p.k,{code:"tsc <название-файла>.ts"}),(0,i.jsxs)("p",{children:["После компиляции в директории проекта будет создан файл ",(0,i.jsx)("em",{children:"<название-файла>.js"}),", который будет содержать JavaScript-код, скомпилированный из вашего TypeScript-кода."]}),(0,i.jsx)("p",{children:" Если нужно скомпилировать весь проект используйте команду:"}),(0,i.jsx)(p.k,{code:"npx tsc"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Локальная установка вручную для проекта"}),(0,i.jsx)("p",{children:"Подойдёт для разработки конкретного приложения."}),(0,i.jsx)("p",{children:"В терминале перейдите в папку проекта и выполните команду:"}),(0,i.jsx)(p.k,{code:"npm install --save-dev typescript"}),(0,i.jsxs)("p",{children:["В зависимостях проекта появится TypeScript, а в директории проекта появится файл ",(0,i.jsx)("em",{children:"tsconfig.json"}),"."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Автоматическая установка через сборщики"}),(0,i.jsx)("p",{children:"Многие современные фреймворки и сборщики, например Vite или Next.js, настраивают TypeScript самостоятельно при создании проекта. Вам просто нужно выбрать соответствующий пункт при инициализации проекта."}),(0,i.jsxs)("p",{children:["Если вы создаёте проект с помощью утилиты ",(0,i.jsx)("em",{children:"create-react-app"}),", то достаточно указать флаг"," ",(0,i.jsx)("em",{children:"--template typescript"}),":"]}),(0,i.jsx)(p.k,{code:"npx create-react-app <название-репозитория>  --template typescript"}),(0,i.jsxs)("p",{children:["Будет создан шаблон React-приложения с файлом ",(0,i.jsx)("em",{children:"tsconfig.json"}),", TypeScript в зависимостях и с файлами с расширением ",(0,i.jsx)("strong",{children:".ts/.tsx"}),"."]}),(0,i.jsx)(o.L,{children:(0,i.jsxs)("p",{children:[(0,i.jsx)(x.Zf,{className:j().alert_icon}),"Create React App официально признан устаревшим (deprecated) инструментом для создания React-приложений с 14 февраля 2025 года. Инструмент больше не рекомендуется для создания новых проектов из-за медленной сборки на Webpack и отсутствия поддержки современных возможностей React 19. Рекомендуется переходить на более современный методы, например, Vite."]})})]})]})});u.displayName="InstallTS";var T=n(524),g=n(5351),y=n(28948),P=n(61904),C=n(35064);let I=(0,l.forwardRef)(({},e)=>{let s=`let isAwesome: boolean = true;
let answer: number = 42;
let username: string = "@dtsiki";
let notDefined: undefined = undefined;
let isNull: null = null;`,n=`let isAwesome = true;
let answer = 42;
let username = "@dtsiki";
let notDefined = undefined;
let isNull = null;`,l=`let isAwesome = true;
let answer = 42;
let username = "@dtsiki";
let notDefined = undefined;
let isNull = null;`,r=`let isAwesome: boolean = true;
let answer: number = 42;
let username: string = "@dtsiki";
let notDefined: undefined = undefined;
let isNull: null = null;
let id: symbol = Symbol("id");
let REALLYBIGNUMBER: bigint = 123n;`,t=`let abc: string[] = ['a', 'b', 'c'];
let nums: number[] = [1, 2, 3, 4, 5];
let flags: boolean[] = [true, false, true];`,c=`let abc: Array<string> = ['a', 'b', 'c'];
let nums: Array<number> =  [1, 2, 3, 4, 5];
let flags: Array<boolean> = [true, false, true]`,a=`const abc: string[] = ['a', 'b', 'c'];
abc.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'`,d=`let user: { id: number; name: string; isAwesome: boolean } = {
  id: 42,
  name: "dtsiki",
  isAwesome: true
};`,o=`let anyVar: any = 42;
anyVar = "Yay";
anyVar = true;

const doSomething = (data: any) => {
  console.log(data);
};

doSomething(42);
doSomething("Привет");
doSomething({ name: "Кеша", age: 4 });`,h=`let input: unknown = 'Что-то';

// input.toUpperCase(); // Ошибка! TS не уверен

if (typeof input === 'string') {
  console.log(input.toUpperCase()); // Теперь можно
}`,p=`function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}`,x=`function logMessage(message: string): void {
  console.log(message);
}`,m=`let someValue: any = "Привет, TypeScript";
let strLength: number = (someValue as string).length;`,j=(0,C.mq)(["any","unknown","never","void"],"code","code");return(0,i.jsxs)("section",{ref:e,id:"Data_Types",className:"section outer",children:[(0,i.jsx)("h2",{children:"Типы данных и их типы"}),(0,i.jsxs)("section",{id:"Type_Annotations",className:"section inner",children:[(0,i.jsxs)("h3",{children:["Аннотация типов",(0,C.Z8)("Type Annotations")]}),(0,i.jsxs)("p",{children:["Это способ явно указать, какие данные ожидаются в переменных, параметрах функций или возвращаемых значениях. В TypeScript она задается с помощью двоеточия ",(0,i.jsx)("strong",{children:":"})," и названия типа, который идет сразу после имени переменной или функции:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("p",{children:"В скомпилированном JavaScript аннотации удаляются, оставляя код чистым JavaScript:"}),(0,i.jsx)(g.z,{lang:y.Pl.JAVASCRIPT,code:l,name:"bundle"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Выводимость типов",(0,C.Z8)("Type Inference")]}),(0,i.jsx)("p",{children:"TypeScript может сам автоматически определять типы переменных у примитивов и такую аннотацию можно не прописывать:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsxs)("p",{children:["Это способность TypeScript автоматически определять тип переменной называется"," ",(0,i.jsx)("strong",{children:"выводимость типов"}),". Также TypeScript справляется сам и может определять тип возвращаемого значения из функции, типы у массивов с явными значениями, тип колбэков у методов массивов, в остальных случаях нужно помогать ему и прописывать аннотации."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Приведение типов",(0,C.Z8)("Type Assertions")]}),(0,i.jsx)("p",{children:"Это способ, позволяющий явно указать компилятору точный тип переменной, когда он не может определить его самостоятельно:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:m}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Важно понимать:"})," это не преобразование, а лишь подсказка компилятору."]}),(0,i.jsx)("p",{children:"При сборке в JavaScript эти конструкции будут удалены."})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("p",{children:"Итак, теперь можно разобрать как в JavaScript типизируются различные штуки с помощью TypeScript."}),(0,i.jsx)("h3",{children:"Примитивные типы данных"}),(0,i.jsxs)("p",{children:["В TypeScript переехали из JavaScript все примитивные типы данных:"," ",(0,C.mq)(["number","string","boolean","null","undefined","bigint","symbol"],"code","code"),"."]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r}),(0,i.jsxs)("p",{children:["TypeScript их не меняет, а просто добавляет к ним соответствующие аннотации типов. Как уже было написано чуть выше ",P.C6," такие анотации можно не писать, TypeScript может сам определить их тип."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:j}),(0,i.jsxs)("p",{children:["В TypeScript появились новые типы данных:"," ",(0,C.mq)(["any","unknown","never","void"],"code","code"),". Этих типов нет в JavaScript. Они существуют только до компиляции, а после того как TypeScript компилируется в JavaScript, они исчезают."]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"any"})}),(0,i.jsx)("p",{children:"Тип данных, который представляет любое значение:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:o}),(0,i.jsxs)("p",{children:["Хотя кажется, что использование ",(0,i.jsx)(T.InlineCode,{children:"any"})," даёт гибкость, лучше избегать его, поскольку это может снизить надежность и читаемость кода. Лучше использовать явные типы данных."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"unknown"})}),(0,i.jsxs)("p",{children:["Безопасная версия ",(0,i.jsx)(T.InlineCode,{children:"any"}),": тоже можно присвоить что угодно, но перед использованием\xa0тип нужно проверить:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:h}),(0,i.jsxs)("p",{children:["Может показаться, что ",(0,i.jsx)(T.InlineCode,{children:"unknown"})," работает так же, как ",(0,i.jsx)(T.InlineCode,{children:"any"}),", но между ними есть различие. Тип ",(0,i.jsx)(T.InlineCode,{children:"any"})," по сути отключает проверку типов и позволяет выполнять любые операции, например, обращаться к свойствам переменной. Тип ",(0,i.jsx)(T.InlineCode,{children:"unknown"})," ","запрещает это и требует предварительной проверки типа переменной, либо приведения к нужному типу."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"never"})}),(0,i.jsx)("p",{children:"Используется для обозначения значений, которые никогда не происходят. Можно использовать для функций, которые выбрасывают ошибку или для бесконечных циклов:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:p})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"void"})}),(0,i.jsx)("p",{children:"Обозначает отсутствие значения. Обычно используется для функций, которые ничего не возвращают:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:x})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Массивы"}),(0,i.jsx)("p",{children:"Массивы в TypeScript работают так же как и в JavaScript. В TypeScript есть два способа протипизировать массивы:"}),(0,i.jsxs)("ol",{className:"list ordered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:["С помощью синтаксиса ",(0,i.jsx)(T.InlineCode,{children:"T[]"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:["С помощью синтаксиса ",(0,i.jsx)(T.InlineCode,{children:"Array<T>"})," (см."," ",(0,i.jsx)("a",{href:"#Generics",className:"link PRIMARY",children:"Дженерики"}),"):"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c})]})]}),(0,i.jsxs)("p",{children:["Оба варианта равнозначны, но чаще используют первый с ",(0,i.jsx)(T.InlineCode,{children:"T[]"}),"."]}),(0,i.jsxs)("p",{children:["При этом массивы являются строго типизированными ",P.C6," если изначально массив содержит строки, то в будущем он сможет работать только со строками. Если попытаться добавить в такой массив число, то будет получена ошибка:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Кортежи ",(0,C.Z8)("Tuples")]}),(0,i.jsxs)("p",{children:["Кортежи ",P.C6," это специальные массивы с фиксированной длиной и строго определенными типами для каждого элемента, даже если они разные. В отличие от обычных массивов, порядок элементов в кортеже имеет значение:"]}),(0,i.jsx)("p",{children:"Типизируются указанием типа для каждого элемента:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:'let user: [number, string] = [42, "Daria"];'}),(0,i.jsx)("p",{children:"После компиляции в JavaScript кортежи превращаются в обычные массивы."})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Объекты"}),(0,i.jsx)("p",{children:"Как и в JavaScript, в TypeScript можно создавать сложные объекты, которые состоят из других объектов, в том числе массивов и примитивных данных. Объекты тоже типизируются в TypeScript: c помощью определения структуры явно описывается какие свойства и типы значений должен содержать объект:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:d}),(0,i.jsxs)("p",{children:["TypeScript позволяет делать какие-то свойства необязательными. Для этого после названия свойства указывается знак вопроса\xa0",(0,i.jsx)("strong",{children:"?"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"let user: { id: number; name: string; isAwesome: boolean, age?: number };"}),(0,i.jsxs)("p",{className:"spacer top medium",children:["Такое определение структуры объектов в TypeScript используется редко. Для определения структуры объектов следует использовать"," ",(0,i.jsx)("a",{href:"#Interfaces",className:"link PRIMARY",children:"интерфейсы"})," ","или"," ",(0,i.jsx)("a",{href:"#Types",className:"link PRIMARY",children:"типы"}),"."]})]})]})});I.displayName="DataTypes";let S=(0,l.forwardRef)(({},e)=>(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsx)("h2",{children:"Песочница TypeScript"}),(0,i.jsxs)("p",{children:["У TypeScript есть официальная"," ",(0,i.jsx)(h.G,{label:"онлайн-песочница",href:"https://www.typescriptlang.org/play"}),", где можно писать, тестировать и компилировать код TypeScript в браузере без установки пакетов. Там можно делать всё что душа захочет и сразу же видеть результат компиляции в JavaScript-код."]})]}));S.displayName="PlaygroundTS";let R=(0,l.forwardRef)(({},e)=>{let s=`type User = {
  id: number;
  name: string;
  isAwesome: boolean;
  age?: number;
};

const user: User = { id: 42, name: 'dtsiki', isAwesome: boolean };`,n=`type StringArray = string[];
type NumberArray = Array<number>;
type MixedArray = (string | number)[];

const abc: StringArray = ['a', 'b', 'c'];
const nums: NumberArray = [1, 2, 3];
const mixed: MixedArray = ['hello', 42];`,l=`type A = { a: number };
type B = { b: string };

type C = A & B;`,r=`type ID = string | number;
const stringId: ID = 'asdfgh';
const numberId: ID = 42;
const bigintId: ID = 123n; // Ошибка: Type 'bigint' is not assignable to type 'ID'`,t=`type MathOperation = (a: number, b: number) => number;

const sum: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;
const concat: MathOperation = (x, y) => \`$\{x}$\{y}\`; // Ошибка: Type 'string' is not assignable to type 'number'`,c=`type User = { name: string };
type Admin = User & { role: string };`,a=`type User = { name: string };
type User = { age: number }; //  Error: Duplicate identifier 'User' `;return(0,i.jsxs)("section",{ref:e,id:"Types",className:"section outer",children:[(0,i.jsxs)("h2",{children:["Типы ",(0,C.Z8)("Types")]}),(0,i.jsxs)("p",{children:["С помощью типов можно описывать любые структуры данных: примитивные типы, объекты, функций, массивов и т.д. Ключевое слово здесь ",P.C6," ",(0,i.jsx)("strong",{children:"любые"}),"."]}),(0,i.jsxs)(o.L,{type:o.G.SECONDARY,children:["Не следует путать с"," ",(0,i.jsx)("a",{href:"#Data_Types",className:"link PRIMARY",children:"типами данных"}),"."]}),(0,i.jsxs)("p",{children:["Типы записываются с помощью ключевого слова ",(0,i.jsx)(T.InlineCode,{children:"type"}),"."]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("p",{children:"Можно описывать не только объекты, можно и примитивы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r}),(0,i.jsx)("p",{children:"Функции:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t}),(0,i.jsx)("p",{children:"Массивы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsx)("p",{children:"Кортежи:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"type Point = [number, number];"}),(0,i.jsx)("div",{className:"spacer top bottom medium",children:(0,i.jsx)(o.L,{type:o.G.SECONDARY,children:(0,i.jsxs)("p",{children:["Типы в TypeScript можно называть с префиксом ",(0,i.jsx)("em",{children:"T"}),", например, ",(0,i.jsx)("em",{children:"TUser"})," вместо ",(0,i.jsx)("em",{children:"User"}),". Это не обязательное правило TypeScript, а соглашение, пришедшее из других языков для улучшения читаемости кода. Это помогает мгновенно отличить тип от других значений, например интерфейсов, классов или объектов."]})})}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Объединение и пересечение типов ",(0,C.Z8)("Union & Intersection")]}),(0,i.jsx)("p",{children:"Для создания нового типа можно комбинировать несколько типов с помощью объединения (Union) и пересечения (Intersection)."}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:"Объединение типов"}),(0,i.jsxs)("p",{children:["Для объединения используется символ ",(0,i.jsx)(T.InlineCode,{children:"|"}),". В результате объединения получается новый тип, который будет содержать всё, что есть в типах, участвующих в объединении:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:'type Status = "loading" | "success" | "error";'})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:"Пересечение типов"}),(0,i.jsxs)("p",{children:["Для пересечения используется символ ",(0,i.jsx)(T.InlineCode,{children:"&"}),". Новый тип будет содержать свойства"," ",(0,i.jsx)("strong",{children:"всех"})," указанных при пересечении типов:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l}),(0,i.jsx)("p",{children:"Также с помощью пересечения можно расширять типы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Ограничения типов"}),(0,i.jsx)("ul",{className:"list markered",children:(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Типы нельзя переопределять:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a})]})})]})]})});R.displayName="Types";var f=n(35468);let b=(0,l.forwardRef)(({},e)=>{let s=`interface User {
  id: number;
  name: string;
  isAwesome: boolean;
  age?: number;
}

const user: User = { id: 42, name: 'dtsiki', isAwesome: true };`,n=`interface User {
  name: string;
}

interface User {
  isAwesome: boolean;
}

const user: User = {
  name: "dtsiki",
  isAwesome: true,
};`,l=`type Department = 'frontend' | 'backend';

interface User {
  name: string;
  isAwesome: boolean;
}

interface Developer extends User {
  department: Department;
}`,r=`type Department = 'frontend' | 'backend';

interface User {
  name: string;
  isAwesome: boolean;
}

interface Developer extends User {
  department: Department;
}

interface TeamLead extends User, Developer {
  projects: string[];
}

const user: TeamLead = {
  name: 'Daria',
  isAwesome: true,
  department: 'frontend',
  projects: ['Awesome projects', 'Another awesome project']
}`,t=`interface MathOperation {
  (a: number, b: number): number;
}`,c=`interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Гав!');
  }
}`,a=`interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal { // Class 'Dog' incorrectly implements interface 'Animal', Property 'makeSound' is missing in type 'Dog' but required in type 'Animal'
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}`;return(0,i.jsxs)("section",{ref:e,id:"Interfaces",className:"section outer",children:[(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h2",{children:["Интерфейсы",(0,C.Z8)("Interfaces")]}),(0,i.jsxs)("p",{children:["Интерфейсы подходят для описания структуры объектов, функций и классов. Ключевое здесь ",P.C6," в первую очередь для объектов."]}),(0,i.jsxs)("p",{children:["Интерфейсы записываются с помощью ключевого слова ",(0,i.jsx)(T.InlineCode,{children:"interface"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("div",{className:"spacer top medium",children:(0,i.jsx)(o.L,{type:f.G.SECONDARY,children:(0,i.jsxs)("p",{children:["Интерфейсы в TypeScript можно называть с префиксом ",(0,i.jsx)("em",{children:"I"}),", например, ",(0,i.jsx)("em",{children:"IUser"})," вместо"," ",(0,i.jsx)("em",{children:"User"}),". Это не обязательное правило TypeScript, а соглашение, пришедшее из других языков для улучшения читаемости кода. Это помогает мгновенно отличить интерфейсы от других значений, например типов, классов или объектов."]})})}),(0,i.jsx)("p",{children:"Интерфейсы могут описывать функции:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Объединение интерфейсов",(0,C.Z8)("Declaration Merging")]}),(0,i.jsx)("p",{children:"Интерфейсы могут быть объединены, но если они имеют одно и то же имя. TypeScript автоматически сам слияет интерфейсы. Это позволяет добавлять новые свойства к существующим интерфейсам:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsx)("p",{})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Расширение интерфейсов"}),(0,i.jsxs)("p",{children:["Интерфейсы могут расширять другие интерфейсы с помощью ключевого слова ",(0,i.jsx)(T.InlineCode,{children:"extends"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l}),(0,i.jsx)("p",{children:"Можно расширять несколько интерфейсов сразу:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r}),(0,i.jsxs)("p",{children:["В отличии от автоматического слияния, расширение с помошью ",(0,i.jsx)(T.InlineCode,{children:"extends"})," ",P.C6," это явное наследование одного интерфейса от другого."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Интерфейсы для классов"}),(0,i.jsxs)("p",{children:["Класс может реализовать интерфейс. С помощью ключевого слова ",(0,i.jsx)(T.InlineCode,{children:"implements"})," TypeScript заставляет класс строго соответствовать определенному интерфейсу:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c}),(0,i.jsxs)("p",{children:["Если чего-то не хватит ",P.C6," TypeScript покажет ошибку:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a}),(0,i.jsxs)("p",{children:["В отличии от ",(0,i.jsx)(T.InlineCode,{children:"extends"}),", который наследует код (свойства, методы, конструктор),",(0,i.jsx)(T.InlineCode,{children:"implements"})," только проверяет соответствие формы."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Ограничения интерфейсов"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Нельзя использовать объединение (Union):"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"С помощью интерфейсов нельзя описывать примитивы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"interface ID = string | number; // Error! "})]})]})]})]})});b.displayName="Interfaces";let N=({children:e=""})=>(0,i.jsxs)(i.Fragment,{children:["<",e,">"]});var E=n(58525);let _=(0,l.forwardRef)(({},e)=>{let s=`function print(value: any): any {
  return value;
}

let str = print('Привет!'); // тип any
let num = print(42); // тип any
let isAwesome = print(true); // тип any`,n=`function print<T>(value: T): T {
  return value;
}

let str = print('Привет!'); // тип string
let num = print(42); // тип number
let isAwesome = print(true); // тип boolean`,l=`function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

let pairResult = pair(42, "Привет"); // тип [number, string]`,r=`interface HistoryState<T, U, V> {
  current: T;
  previous: U;
  metadata: V;
}

const pageState: HistoryState<string, string | null, number> = {
  current: "/home",
  previous: null,
  metadata: 200 // HTTP код
};`,t=`type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: 'Иван', age: 28 },
  status: 200,
  message: 'Success',
};

const stringResponse: ApiResponse<string[]> = {
  data: ['apple', 'banana'],
  status: 200,
  message: 'Success',
};`,c=`interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Использование с конкретными типами
const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: 'Иван', age: 28 },
  status: 200,
  message: 'Success',
};

const stringResponse: ApiResponse<string[]> = {
  data: ['apple', 'banana'],
  status: 200,
  message: 'Success',
};`,a=`type Lengthwise = {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
  console.log(item.length);
}

logLength("Текст"); // Разрешено: у строки есть .length
logLength([1, 2, 3]); // Разрешено: у массива есть .length
logLength(42); // Ошибка: у числа нет .length`,d=`function logLength<T>(value: T) {
  console.log(value.length) // Ошибка: Property 'length' does not exist on type 'T'
}`,o=`class List<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Класс строго работает со строками
const stringList = new List<string>();
stringList.add("Яблоко");
// stringList.add(5); // Ошибка компиляции

// Класс строго работает с числами
const numberList = new List<number>();
numberList.add(10);`,h=`type Box<T = string> = {
  value: T;
};

const box: Box = { value: "Привет" }; // тип string`,p=`type TUser = {
  id: number;
  name: string;
  email: string;
};

const user: TUser = {
  id: 42,
  name: "Awesome User",
  email: "awesomeuser@gmail.com",
};`,x=`type TPost = {
  id: number;
  title: string;
  tags: string[];
};

const post: TPost = {
  id: 67,
  title: "Awesome post about something awesome",
  tags: ["post", "something", "awesome"],
};
`,m=`type TUser = {
  id: number;
  name: string;
  email: string;
};

const user: TUser = {
  id: 42,
  name: "Awesome User",
  email: "awesomeuser@gmail.com",
};

type TPost = {
  id: number;
  title: string;
  tags: string[];
};

const post: TPost = {
  id: 67,
  title: "Awesome post about something awesome",
  tags: ["post", "something", "awesome"],
};

type TUserData = {
  id: string;
  data: TUser;
  isLoading: boolean;
  error?: string;
};

type TPostData = {
  id: string;
  data: TPost;
  isLoading: boolean;
  error?: string;
};

const userData:TUserData = {
  id: "user-1",
  data: user,
  isLoading: false,
}

const postData:TPostData = {
  id: "post-1",
  data: post,
  isLoading: false,
}`,j=`type Entity<T> = {
  id: string; // Новый уникальный id для фронтенда
  data: T;
  isLoading: boolean;
  error?: string;
};`,u=`const userEntity: Entity<TUser> = {
  id: "user-1",
  data: user,
  isLoading: false,
};

const postEntity: Entity<TPost> = {
  id: "post-1",
  data: post,
  isLoading: false,
};`;return(0,i.jsxs)("section",{ref:e,id:"Generics",className:"section outer",children:[(0,i.jsxs)("h2",{children:["Дженерики ",(0,C.Z8)("Generics")]}),(0,i.jsx)("p",{children:"Это инструмент, который позволяет создавать компоненты (функции, классы, интерфейсы), способные работать с различными типами данных без потери строгой типизации. Вместо железобетонно указанного типа он передаётся как параметр."}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Обобщённые функции"}),(0,i.jsx)("p",{children:"Позволяют зафиксировать тип аргумента так, чтобы функция возвращала значение того же типа."}),(0,i.jsxs)("p",{children:["Например есть функция, которая возвращает то, что получила. Без дженериков придётся использовать"," ",(0,i.jsx)(E.R,{children:"any"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsxs)("p",{children:["Из-за использования ",(0,i.jsx)(E.R,{children:"any"})," тип переменной будет утерян."]}),(0,i.jsx)("p",{children:"Эту же функцию можно переписать с помощью дженерика, а тип переменной при этом будет сохранён:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsx)("p",{children:"Что здесь происходит:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:["С помощью"," ",(0,i.jsx)(E.R,{children:(0,i.jsx)(N,{children:"T"})}),"\xa0объявляем\xa0параметр типа. Можно назвать как угодно: ",(0,i.jsx)("em",{children:"Value"}),", ",(0,i.jsx)("em",{children:"Something"}),", но принято"," ",(0,i.jsx)("em",{children:"T"})," или ",(0,i.jsx)("em",{children:"Type"}),"."]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(E.R,{children:"value: T"}),"\xa0",P.C6," параметр функции будет иметь указанный перед этим."]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(E.R,{children:": T"}),"\xa0",P.C6," функция возвращает этот же тип"]})})]}),(0,i.jsx)("p",{children:"С помощью дженериков можно не привязываться к конкретно одному типу, а при вызове TypeScript автоматически будет подставлять конкретный тип."}),(0,i.jsxs)("p",{children:["В TypeScript можно использовать несколько параметров дженерика. Для этого их нужно перечислить в угловых скобках"," ",(0,i.jsx)(E.R,{children:(0,i.jsx)(N,{children:" "})})," ","через запятую. Для второго параметра принято использовать букву ",(0,i.jsx)("em",{children:"U"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l}),(0,i.jsxs)("p",{children:["Для третьего параметра принято использовать букву ",(0,i.jsx)("em",{children:"V"})," (следующая по алфавиту за ",(0,i.jsx)("em",{children:"T"})," и ",(0,i.jsx)("em",{children:"U"}),")."]}),(0,i.jsx)("p",{children:"Три параметра часто нужны в сложных структурах данных. Например, для хранения текущего значения, предыдущего значения и метаданных:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Обобщённые интерфейсы и типы"}),(0,i.jsx)("p",{children:"Используются когда структура данных должна оставаться гибкой."}),(0,i.jsx)("p",{children:"При использовании с интерфейсами они работают как параметры функций:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c}),(0,i.jsx)("p",{children:"Объявления типов работают с дженериками точно так же, как и интерфейсы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Ограничения",(0,C.Z8)("Constraints")]}),(0,i.jsxs)("p",{children:['Это инструмент, который заставляет дженерики соответствовать определенной структуре. Они сужают "вседозволенность" обычных дженериков, позволяя компилятору гарантировать наличие нужных методов и свойств внутри функции или класса. Делается с помощью ключевого слова ',(0,i.jsx)(E.R,{children:"extends"}),"."]}),(0,i.jsx)("p",{children:"Например, без ограничения получим ошибку:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:d}),(0,i.jsx)("p",{children:"Если сузить круг возможных типов, передаваемых в дженерик, ошибки больше не будет:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Обобщённые классы"}),(0,i.jsx)("p",{children:"Дженерики в классах позволяют создавать шаблоны, способные работать с различными типами данных без дублирования кода."}),(0,i.jsxs)("p",{children:["Синтаксис здесь такой же: в угловых скобках"," ",(0,i.jsx)("code",{className:"code",children:(0,i.jsx)(N,{children:" "})})," ","передаётся тип при создании экземпляра и затем TypeScript сам подставит нужный тип:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:o})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Значения по умолчанию"}),(0,i.jsx)("p",{children:"Можно задать значение по умолчанию:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:h})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,i.jsxs)(E.R,{children:["Entity",(0,i.jsx)(N,{children:"T"})]})}),(0,i.jsxs)("p",{children:["Это дженерик-тип, который оборачивает любые данные ",(0,i.jsx)(E.R,{children:"T"}),", добавляя к ним какие-то общие поля."]}),(0,i.jsx)("p",{children:"Например, с бэка приходят данные о пользователе:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:p}),(0,i.jsx)("p",{children:"Или данные о посте:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:x}),(0,i.jsxs)("p",{children:["Для фронта нужно, чтобы у пользователей и постах были дополнительные общие поля, например"," ",(0,i.jsx)(E.R,{children:"id"})," с другим типом данных, флаг ",(0,i.jsx)(E.R,{children:"isLoading"}),", дата создания"," ",(0,i.jsx)(E.R,{children:"createdAt"}),", объект ошибки ",(0,i.jsx)(E.R,{children:"error"})," и т.д. Без"," ",(0,i.jsxs)(E.R,{children:["Entity ",(0,i.jsx)(N,{children:"T"})]})," ","пришлось бы вручную переписывать поля заново для каждого объекта:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:m}),(0,i.jsxs)("p",{children:["Но"," ",(0,i.jsxs)(E.R,{children:["Entity ",(0,i.jsx)(N,{children:"T"})]})," ","позволяет избежать добавления новых полей вручную и создания излишных типов. Просто создаётся в данном случае всего один дженерик-тип:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:j}),(0,i.jsxs)("p",{children:["Оригинальные данные при этом сохраняются внутри поля ",(0,i.jsx)(E.R,{children:"data"}),", чтобы не потерять их собственный идентификатор или другие поля."]}),(0,i.jsx)("p",{children:"Затем дженерик-тип можно применять к нужны типам:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:u})]})]})});_.displayName="Generics";let v=(0,l.forwardRef)(({},e)=>{let s=`type A = IsString<string>; // true
type B = IsString<number>; // false`,n=`type OnlyStrings<T> = T extends string ? T : never;

type A = OnlyStrings<"a" | "b" | 1 | 2>;   // "a" | "b"`,l=`type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type MyFunc = () => string;
type T1 = ReturnType<MyFunc>; // Тип T1 будет string`,r=`type ElementType<T> = T extends (infer E)[] ? E : never;

type NumbersArray = number[];
type T2 = ElementType<NumbersArray>; // Тип T2 будет number`,t=`type MyParams<T> = T extends (...args: infer P) => any ? P : never;

function doSomething(abc: string, num: number, flag: boolean) {
  return { id: 1, abc, num, flag };
}

type FuncArgs = MyParams<typeof doSomething>; // [abc: string, num: number, flag: boolean]`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsxs)("h2",{children:["Условные типы ",(0,C.Z8)("Conditional Types")]}),(0,i.jsxs)("p",{children:["Позволяют создавать типы, которые\xa0меняются в зависимости от условий. Это ",(0,i.jsx)(T.InlineCode,{children:"if/else"}),", но для типов:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"T extends U ? X : Y"}),(0,i.jsx)("p",{children:"Например:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"type IsString<T> = T extends string ? true : false;"}),(0,i.jsx)("p",{children:"Как использовать этот тип:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("p",{children:"Что можно сделать с помощью условных типов:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)("p",{children:"Делать проверку на конкретный тип (см. пример выше)"})}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Комбинировать с дженериками для возврата разных типов данных в зависимости от типа входных данных:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:'type Wrapped<T> = T extends string ? `string: ${T}` : T extends number ? `number: ${T}` : T;\n\ntype A = Wrapped<"Привет">;   // "string: Привет"\ntype B = Wrapped<42>;        // "number: 42"\ntype C = Wrapped<boolean>;   // boolean'})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Фильтровать типы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsxs)("p",{children:["Тип ",(0,i.jsx)(T.InlineCode,{children:"never"})," в объединениях ведет себя как пустое множество: он просто исчезает из объединения, никак не влияя на итоговый тип."]})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,i.jsx)(T.InlineCode,{children:"infer"})}),(0,i.jsxs)("p",{children:["Ключевое слово ",(0,i.jsx)(T.InlineCode,{children:"infer"})," используется в TypeScript внутри условных типов для того, чтобы:"]}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Вывести и сохранить в переменную часть другого типа:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Узнать тип элемента, который лежит внутри массива: тип:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Получить аргументы функции"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t})]})]})]})]})});v.displayName="ConditionalTypes";let k=(0,l.forwardRef)(({},e)=>{let s=`function print(value: string | number) {
  value.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'
}`,n=`function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}`,l=`class Dog {
  bark() {
    console.log('Гав');
  }
}

class Cat {
  meow() {
    console.log('Мяу');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}`,r=`interface Car {
  drive(): void;
}

interface Boat {
  sail(): void;
}

function operate(vehicle: Car | Boat) {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}`,t=`interface User {
  name: string;
  age: number;
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === 'string' && typeof obj.age === 'number';
}

function process(data: unknown) {
  if (isUser(data)) {
    // теперь TypeScript знает, что это User у него есть поле name
    console.log(data.name);
  }
}`,c=`function processName(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  }
}`,a=`function doSomething(x: string | number, y: string) {
  if (x === y) {
    // x теперь string
  }
}`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsxs)("h2",{children:["Сужение типов ",(0,C.Z8)("Type Narrowing")]}),(0,i.jsx)("p",{children:"Позволяет ограничить общий тип до более конкретного на основе проверок в коде."}),(0,i.jsxs)("p",{children:["Например, объединения ",(0,i.jsx)(T.InlineCode,{children:"string | number"})," можно уточнить к более узкому типу, например,"," ",(0,i.jsx)(T.InlineCode,{children:"string"})," внутри блока кода. Без сужения в коде ниже будет ошибка ",P.C6," потому что значение может быть и строкой и числом, а у чисел нет метода ",(0,i.jsx)(T.InlineCode,{children:"toUpperCase"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("p",{children:"А с проверкой всё будет работать:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsxs)("p",{children:["Это позволяет безопасно вызывать специфичные методы. В примере выше будет получена ошибка из-за того, что в случае, если будет передана переменная типа ",(0,i.jsx)(T.InlineCode,{children:"number"}),", метод"," ",(0,i.jsx)(T.InlineCode,{children:"toUpperCase()"})," не будет найден т.к. его просто не существует. Этот метод предназначен исключительно для работы со строками."]}),(0,i.jsxs)("p",{children:["Функция, которая сужает тип, и будет называться ",(0,i.jsx)("strong",{children:"type guard"}),"'ом."]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["С помощью ",(0,i.jsx)(T.InlineCode,{children:"typeof"})]}),(0,i.jsx)("p",{children:"Пример такого сужения был показан выше случай:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsxs)("p",{children:["Сужение с помощью ",(0,i.jsx)(T.InlineCode,{children:"typeof"})," отлично подходит для примитивов."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["С помощью ",(0,i.jsx)(T.InlineCode,{children:"instanceof"})]}),(0,i.jsx)("p",{children:"Подойдёт для классов:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["С помощью оператора ",(0,i.jsx)(T.InlineCode,{children:"in"})]}),(0,i.jsx)("p",{children:"Можно проверять на наличие свойства:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Custom Type Guard"}),(0,i.jsx)("p",{children:"Когда нужно что-то сложнее, то можно написать свою функцию-проверку:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t}),(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"obj is User"})," здесь ",(0,i.jsx)("strong",{children:"предикат типа"})," (type predicate). Это специальный синтаксис, который сообщает компилятору, что если функция возвращает ",(0,i.jsx)("em",{children:"true"}),", то переданный аргумент фактически принадлежит к указанному типу."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Проверка на существование",(0,C.Z8)("Truthiness Narrowing")]}),(0,i.jsx)("p",{children:"Это проверка, которая автоматически сужает тип переменной внутри условных конструкций, основываясь на том, является ли значение \xabистинным\xbb (truthy) или \xabложным\xbb (falsy) в JavaScript:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c}),(0,i.jsxs)("p",{children:["Значения ",(0,i.jsx)(T.InlineCode,{children:"null"})," и ",(0,i.jsx)(T.InlineCode,{children:"undefined"})," здесь отфильтровались автоматически во время проверки значения ",(0,i.jsx)(T.InlineCode,{children:"name"}),". Таким образом можно отсечь"," ",(0,C.mq)(["null","undefined",'""',"0","false"],"code","code")]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Сужение на основе равенства",(0,C.Z8)("Equality narrowing")]}),(0,i.jsxs)("p",{children:["В этом случае сужение будет происходить на основе проверок равенства с помощью операторов"," ",(0,i.jsx)(T.InlineCode,{children:"==="}),", ",(0,i.jsx)(T.InlineCode,{children:"!=="}),", ",(0,i.jsx)(T.InlineCode,{children:"=="})," или"," ",(0,i.jsx)(T.InlineCode,{children:"!="}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a})]})]})});k.displayName="TypeNarrowing";let Y=(0,l.forwardRef)(({},e)=>{let s=`type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
}`,n=`interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type PublicPickUser = Pick<User, 'id' | 'name'>;
type PublicOmitUser = Omit<User, 'email' | 'age'>;`,l=`type PartialUser = Partial<User>;

const user1: User = {}; // Type '{}' is missing the following properties from type 'User': id, name, email
const user2: PartialUser = {};`,r=`type RequiredUser = Required<User>;

const user: RequiredUser = { // Property 'age' is missing in type '{ id: number; name: string; email: string; }' but required in type 'Required<User>'
  id: 42,
  name: 'dtsiki',
  email: 'dtsiki@dtsiki.dtsiki'
};`,t=`type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 42,
  name: 'dtsiki',
  email: 'dtsiki@dtsiki'
};

user.email = 'dtsiki@dtsiki.dtsiki'; // Cannot assign to 'email' because it is a read-only property`,c=`type PublicUser = Pick<User, 'id' | 'name'>;

const user: PublicUser = {
  id: 42,
  name: 'dtsiki',
};`,a=`type PublicUser = Omit<User, 'email' | 'age'>;

const user: PublicUser = {
  id: 42,
  name: 'dtsiki',
};`,d=`type PetInfo = {
  age: number;
  breed: string;
}

const myPets: Record<string, PetInfo> = {
  "Kesha": { age: 5, breed: "Pembroke Welsh Corgi" },
  "Lucky": { age: 3, breed: "Mixed Breed Cat" },
  "Smoke": { age: 16, breed: "Mixed Breed Cat" },
};`,o=`type All = 'a' | 'b' | 'c' | 'd';
type WithoutBAndC = Exclude<All, 'b' | 'c'>; // 'a' | 'd'`,h=`type All = 'a' | 'b' | 'c' | 'd';
type WithBandC = Extract<All, 'b' | 'c'>; // 'b' | 'c'`,p=`type SomeStrangeType = string | null | undefined;
type SomeDefiniteType = NonNullable<SomeStrangeType>; // string`,x=`function sayHello(name: string, age?: number): string {
  return \`Привет, $\{name}\`;
}

type Params = Parameters<typeof sayHello>; // [name: string, age?: number]`,m=`function fetchUser() {
  return { id: 42, name: '@dtsiki', isAwesome: true };
}

type User = ReturnType<typeof fetchUser>; // { id: number; name: string; isAwesome: boolean; }`,j=`class User {
  id: number;
  name: string;
  isAwesome: boolean;
}

type UserInstance = InstanceType<typeof User>; // User`,u=`class User {
  constructor(public name: string, public age: number) {}
}

type UserParams = ConstructorParameters<typeof User>; // [name: string, age: number]

// Теперь можно использовать этот тип для функций-фабрик или оберток
function createUser(...args: UserParams) {
  return new User(...args);
}`,I=`async function fetchUser(): Promise<{ id: number; name: string; isAwesome: boolean }> {
  return { id: 42, name: 'dtsiki', isAwesome: true };
}

// Обычный тип функции: () => Promise<{ id: number; name: string; isAwesome: boolean  }>
type UserFunctionReturnType = ReturnType<typeof fetchUser>;

// Распакованный тип: { id: number; name: string; isAwesome: boolean  }
type User = Awaited<UserFunctionReturnType>;`,S=`type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Выбираем name и email, делаем их необязательными
type UpdateUserDto = Partial<Pick<User, 'name' | 'email'>>;

const user: UpdateUserDto = {
  name: 'dtsiki', // email можно не указывать
};`,R=`type SafeUpdateUser = Partial<Omit<User, 'id'>>;

const updateData: SafeUpdateUser = {
  name: 'dtsiki',
  // id здесь использовать нельзя
};`,f=`// Сделать часть свойств опциональными, а остальные оставить прежними
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Сделать часть свойств обязательными
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

interface Post {
  id: number;
  title: string;
  body?: string;
}

// Делаем title обязательным (если он был опциональным) или меняем id
type StrictPost = RequiredBy<Post, 'body'>;
// Свойство body теперь точно string, а не string | undefined`;return(0,i.jsxs)("section",{ref:e,id:"Utility Types",className:"section outer",children:[(0,i.jsxs)("h2",{children:["Встроенные типы",(0,C.Z8)("Utility Types")]}),(0,i.jsx)("p",{children:"Встроенные типы помогают создавать новые на основе уже существующих."}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,C.mq)(["Partial<Type>","Required<Type>","Readonly<Type>","Pick<Type, Keys>","Omit<Type, Keys>"],"code","code")}),(0,i.jsx)("p",{children:"Эти встроенные типы изменяют модификаторы существующих полей в объектах: делают их опциональными, обязательными или доступными только для чтения, а также позволяют фильтровать, выбирая или удаляя нужные поля из типов."}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Важно:"})," встроенные типы создают новый тип, а исходный при этом не меняется."]}),(0,i.jsxs)("p",{children:["Для примера возьмём тип ",(0,i.jsx)(T.InlineCode,{children:"User"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("p",{children:"На его основе создадим новые типы с помощью встроенных:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Partial",(0,i.jsx)(N,{children:"Type"})]})," ","делает все свойства типа ",(0,i.jsx)(T.InlineCode,{children:"Type"})," необязательными (опциональными):"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Required",(0,i.jsx)(N,{children:"Type"})]})," ","делает все свойства типа ",(0,i.jsx)(T.InlineCode,{children:"Type"})," обязательными, даже если они были объявлены как опциональные:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Readonly",(0,i.jsx)(N,{children:"Type"})]})," ","делает все свойства типа ",(0,i.jsx)(T.InlineCode,{children:"Type"})," доступными только для чтения, предотвращая последующие изменения:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Pick",(0,i.jsx)(N,{children:"Type, Keys"})]})," ","выбирает только указанные свойства ",(0,i.jsx)(T.InlineCode,{children:"Keys"})," из типа ",(0,i.jsx)(T.InlineCode,{children:"Type"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Pick",(0,i.jsx)(N,{children:"Type, Keys"})]})," ","часто используется, чтобы сделать компактную версию типа для списка или превью."]})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Omit",(0,i.jsx)(N,{children:"Type, Keys"})]})," ","удаляет указанные свойства ",(0,i.jsx)(T.InlineCode,{children:"Keys"})," из типа ",(0,i.jsx)(T.InlineCode,{children:"Type"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Omit",(0,i.jsx)(N,{children:"Type, Keys"})]})," ","часто используется, чтобы скрыть служебные поля ",P.C6," например, ",(0,i.jsx)(T.InlineCode,{children:"password"})," ","или ",(0,i.jsx)(T.InlineCode,{children:"createdAt"}),"."]})]})]}),(0,i.jsxs)("p",{children:["Всё выше перечисленное будет работать и для интерфейсов т.к. для TypeScript типы и интерфейсы это одно и то же"," ",P.C6," объектный тип:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,i.jsxs)(T.InlineCode,{children:["Record",(0,i.jsx)(N,{children:"Keys, Type"})]})}),(0,i.jsxs)("p",{children:["Создает новый объект, где ключи имеют тип ",(0,i.jsx)(T.InlineCode,{children:"Keys"}),", а значения ",P.C6," тип"," ",(0,i.jsx)(T.InlineCode,{children:"Тype"}),"."]}),(0,i.jsxs)("p",{children:["Чаще всего используется для создания словарей (хеш-таблиц), где ключом является строка, а значением"," ",P.C6," любой нужный тип:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:d})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,C.mq)(["Exclude<Type, U>","Extract<Type, U>","NonNullable<Type>"],"code","code")}),(0,i.jsx)("p",{children:"Позволяют фильтровать элементы в объединениях, например, оставлять только нужные."}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Exclude",(0,i.jsx)(N,{children:"T, U"})]})," ","исключает из объединения ",(0,i.jsx)(T.InlineCode,{children:"T"})," все типы, которые можно присвоить"," ",(0,i.jsx)(T.InlineCode,{children:"U"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:o})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Extract",(0,i.jsx)(N,{children:"T, U"})]})," ","наоборот ",P.C6," оставляет только совпадающие:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:h})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["NonNullable",(0,i.jsx)(N,{children:"T"})]})," ","убирает из ",(0,i.jsx)(T.InlineCode,{children:"T"})," все ",(0,i.jsx)(T.InlineCode,{children:"null"})," и"," ",(0,i.jsx)(T.InlineCode,{children:"undefined"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:p})]})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,C.mq)(["Parameters<Type>","ReturnType<Type>","ConstructorParameters<Type>","InstanceType<Type>"],"code","code")}),(0,i.jsx)("p",{children:"Служат для извлечения информации о параметрах или возвращаемых значениях из сигнатур функций."}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Parameters",(0,i.jsx)(N,{children:"Type"})]})," ","позволяет получить типы аргументов функции ",(0,i.jsx)(T.InlineCode,{children:"Type"})," в виде кортежа:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:x})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["ReturnType",(0,i.jsx)(N,{children:"Type"})]})," ","позволяет получить тип возвращаемого значения из функции:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:m})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["ConstructorParameters",(0,i.jsx)(N,{children:"Type"})]})," ","позволяет извлечь типы параметров конструктора класса в виде кортежа:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:u})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["InstanceType",(0,i.jsx)(N,{children:"Type"})]})," ","позволяет извлечь тип, который возвращает конструктор класса:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:j})]})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:(0,C.mq)(["Awaited<Type>"],"code","code")}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Awaited",(0,i.jsx)(N,{children:"T"})]})," ",P.C6," специальная утилиты для работы с промисами, которая разворачивает (распаковывает) тип"," ",(0,i.jsx)(T.InlineCode,{children:"Promise"}),", возвращая тип, который находится внутри него:"]}),(0,i.jsxs)("p",{children:["Самый частый сценарий использования ",P.C6," получение типа возвращаемого значения из асинхронных функций в сочетании с ",(0,i.jsx)(T.InlineCode,{children:"ReturnType"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:I})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Комбинация встроенных типов"}),(0,i.jsxs)("p",{children:["Комбинировать можно абсолютно любые встроенные типы. Их можно вкладывать друг в друга как функции или объединять через пересечения ",(0,i.jsx)(T.InlineCode,{children:"&"}),", создавая конструкции любой сложности."]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h4",{children:[(0,i.jsxs)(T.InlineCode,{children:["Pick",(0,i.jsx)(N,{children:"Type, Keys"})]})," ","+"," ",(0,i.jsxs)(T.InlineCode,{children:["Partial",(0,i.jsx)(N,{children:"Type"})]}),": частичный тип на основе выбранных полей"]}),(0,i.jsx)("p",{children:"Если нужно взять только пару полей из типа и сделать их необязательными:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:S})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h4",{children:[(0,i.jsxs)(T.InlineCode,{children:["Omit",(0,i.jsx)(N,{children:"Type, Keys"})]})," ","+"," ",(0,i.jsxs)(T.InlineCode,{children:["Partial",(0,i.jsx)(N,{children:"Type"})]}),": исключение полей с последующим изменением обязательности"]}),(0,i.jsxs)("p",{children:["Если нужно запретить менять какое-то системное поле, например ",(0,i.jsx)(T.InlineCode,{children:"id"}),", а остальные поля сделать опциональными:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:R})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:"Частичное изменение конкретных свойств"}),(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Partial",(0,i.jsx)(N,{children:"Type"})]})," ","и"," ",(0,i.jsxs)(T.InlineCode,{children:["Required",(0,i.jsx)(N,{children:"Type"})]})," ","действуют сразу на весь объект. Чтобы сделать только некоторые поля опциональными или обязательными, их комбинируют через пересечение ",(0,i.jsx)(T.InlineCode,{children:"&"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:f})]})]})]})});Y.displayName="UtilityTypes";let U=(0,l.forwardRef)(({},e)=>{let s=`{
  "compilerOptions": {
    "lib": ["es2022", "dom"]
  }
}`,n=`const awesomeButton = document.getElementById("awesome-button");

if (awesomeButton) {
  awesomeButton.addEventListener("click", () => {
    console.log("Кликнули на кнопку");
  });
}`,l=`const element = document.getElementById("my-element");

if (element instanceof HTMLImageElement) {
  // Внутри этого блока element имеет тип HTMLImageElement
  element.src = "image.png";
}`;return(0,i.jsxs)("section",{ref:e,id:"DOM_and_Events",className:"section outer",children:[(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h2",{children:"Типизация DOM и событий"}),(0,i.jsxs)("p",{children:["Для работы с DOM и событиями в TypeScript компилятор использует встроенные определения типов из файла"," ",(0,i.jsx)("em",{children:"lib.dom.d.ts"}),". Там описаны"," ",(0,C.mq)(["Document","HTMLElement","HTMLInputElement","Event","MouseEvent"],"code","code")," и т.д."]}),(0,i.jsxs)("p",{children:["Файл ",(0,i.jsx)("em",{children:"lib.dom.d.ts"})," не нужно устанавливать вручную, он по молчанию подключается компилятором. Чтобы он работал, достаточно чтобы в вашем файле конфигурации TypeScript ",(0,i.jsx)("em",{children:"tsconfig.json"})," был правильно указан массив ",(0,i.jsx)("em",{children:'"lib"'}),". Если вы используете среду браузера, в настройках должен быть включен параметр"," ",(0,i.jsx)("em",{children:'"dom"'}),". Например:"]}),(0,i.jsx)(g.z,{lang:y.Pl.JSON,code:s,name:"tsconfig"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Проверка типов перед использованием"}),(0,i.jsxs)("p",{children:["Методы вроде ",(0,i.jsx)(T.InlineCode,{children:"getElementById"})," могут вернуть ",(0,i.jsx)(T.InlineCode,{children:"null"}),", если элемента нет, поэтому TypeScript требует проверку:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Приведение типов",(0,C.Z8)("Type Assertions")]}),(0,i.jsxs)("p",{children:["Иногда TypeScript не может точно определить элемент, например, при поиске по классу. Можно явно указать тип с помощью конструкции ",(0,i.jsx)(T.InlineCode,{children:"as"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:'const input = document.querySelector("input") as HTMLInputElement;'}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Важно понимать:"})," это не преобразование, а лишь подсказка компилятору. При сборке в JavaScript эти конструкции будут удалены."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Type Guards"}),(0,i.jsxs)("p",{children:["Альтренатива ",(0,i.jsx)(T.InlineCode,{children:"as"})," ",P.C6," проверка класса объекта через"," ",(0,i.jsx)(T.InlineCode,{children:"instanceof"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Полезные типы DOM"}),(0,i.jsx)("p",{children:"Рано или поздно вам пригодится каждый из этих типов:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{className:"list__title",children:(0,i.jsx)("b",{children:"HTMLElement"})}),(0,i.jsx)("p",{children:"Базовый тип для всех HTML-элементов."}),(0,i.jsx)("p",{children:"От него наследуются все остальные типы HTML-элементов, например:"}),(0,i.jsxs)("ul",{className:"list markered nested",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"HTMLDivElement"}),": тип для тега"," ",(0,i.jsx)(T.InlineCode,{children:(0,i.jsx)(N,{children:"div"})})]})}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"HTMLInputElement"}),": тип для тега"," ",(0,i.jsx)(T.InlineCode,{children:(0,i.jsx)(N,{children:"input"})})]}),(0,i.jsxs)("p",{children:["Этот тип будет иметь свойства поля ввода: ",(0,i.jsx)(T.InlineCode,{children:"value"}),","," ",(0,i.jsx)(T.InlineCode,{children:"type"})," и т.д."]})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"HTMLImageElement"}),": тип для тега"," ",(0,i.jsx)(T.InlineCode,{children:(0,i.jsx)(N,{children:"img"})})]}),(0,i.jsxs)("p",{children:["Этот тип будет иметь свойства тега ",(0,i.jsx)(T.InlineCode,{children:"img"}),": ",(0,i.jsx)(T.InlineCode,{children:"src"}),",",(0,i.jsx)(T.InlineCode,{children:"alt"})," и прочие."]})]})]})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{className:"list__title",children:(0,i.jsx)("b",{children:"Event"})}),(0,i.jsx)("p",{children:"Базовый тип для событий."}),(0,i.jsx)("p",{children:"От него наследуются все остальные типы для событий, например:"}),(0,i.jsxs)("ul",{className:"list markered nested",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"MouseEvent"}),": событие, описывающее любое действие пользователя мышью (клики, наведение, прокрутка)"]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"KeyboardEvent"}),": событие, возникающее при взаимодействии с клавиатурой (нажатие, удержание или отпускание клавиши)"]})})]})]})]})]})]})});U.displayName="DOM";let z=(0,l.forwardRef)(({},e)=>{let s=`interface IButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ label, onClick, disabled = false }: IButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`,n=`export interface IButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};`,l=`import { IButtonProps } from './types';

export const Button = ({ label, onClick, disabled = false }: IButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};`,r=`import type { ReactNode } from 'react';

export interface IHeaderProps = {
  children: ReactNode;
}`,t=`import { IHeaderProps } from './types';

export const Header = ({ children }: IHeaderProps) => {
  return <header>{children}</header>;
};`,c=`import { MouseEvent } from 'react';

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  console.log('Кнопка нажата', event.currentTarget);
}

const Button = () => {
  return <button onClick={handleClick}>Нажми меня</button>;
};`,a=`import { ChangeEvent } from 'react';

const Input = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};`,d=`const handleClick = (event) => {
  console.log(event.currentTarget);
};`,o=`import type { ReactNode } from 'react';

export interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}`,h=`import { IListProps } from './types';

export const List = <T>({ items, renderItem }: IListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};`,x=`export interface IButtonProps = {
  label: string;
  onClick: () => void;
};`,m=`import { FC } from 'react';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};`,j=`export interface IButtonProps = {
  label: string;
  onClick: () => void;
};`,u=`import { IButtonProps } from './types';

export const Button = ({ label, onClick }:IButtonProps) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};`,I=`import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}`,S=`const [label, setLabel] = useState<string>('Hello');
const [num, setNum] = useState<number>(42);
const [isAwesome, setIsAwesome] = useState<boolean>(true)`,R=`const [label, setLabel] = useState('Hello'); // тип string
const [num, setNum] = useState(42); // тип number
const [isAwesome, setIsAwesome] = useState(true); // тип boolean`,f=`interface User {
  id: number;
  name: string;
}

const [user, setUser] = useState<User | null>(null);`,b=`interface User {
  id: number;
  name: string;
}

const [users, setUsers] = useState<User[]>([]);`,E=`function useCounter(initialValue: number = 0): [number, () => void, () => void] {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return [count, increment, decrement];
}`,_=`type UseFormReturn<T> = {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

function useForm<T extends Record<string, any>>(initialValues: T): UseFormReturn<T> {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset };
}`,v=`const toggle = useCallback((id: number) => {
    // ...
}, []);`,k=`interface ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);`,Y=`type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`,U=`export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }

  return context;
};`,z=`const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme(); // Типы подхватятся автоматически

  return (
    <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#333' }}>
      Сменить тему
    </button>
  );
};`,A=`import type { ReactNode } from 'react';

export interface IButtonProps = {
  children: ReactNode;
  onClick: () => void;
};`,w=`import { IButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ onClick, children }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} onClick={onClick}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h2",{children:"Типизация React"}),(0,i.jsx)("p",{children:"TypeScript поддерживает большинство популярных веб-фреймворков, в том числе и React."}),(0,i.jsx)("p",{children:"Написание кода на React в связке с TypeScript очень похоже на написание обычного JavaScript кода, ключевая разница будет заключаться только в том, что нужно будет указывать типы для компонентов, пропсов, состояний и функций."}),(0,i.jsxs)("p",{children:["Помимо этого поменяется расширение файлов. В обычном React файлы имеют расширение ",(0,i.jsx)("em",{children:".jsx"})," или"," ",(0,i.jsx)("em",{children:".js"}),". В связке с TypeScript файлы компонентов и утилит должны иметь расширение ",(0,i.jsx)("em",{children:".tsx"})," или"," ",(0,i.jsx)("em",{children:".ts"}),"."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Настройка TypeScript"}),(0,i.jsxs)("p",{children:["Чтобы использовать TypeScript в React-проектах помимо смены расширения файлов на ",(0,i.jsx)("em",{children:".tsx"}),"/",(0,i.jsx)("em",{children:".ts"}),", нужно установить типы:"]}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:["Для новых проектов лучший способ ",P.C6," инициализировать приложение через поддерживаемые фреймворки (например, с помощью Vite или Next.js), выбрав при установке шаблон с TypeScript, типы появятся сами после установки."]})}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Для ручного подключения установите типы командой:"}),(0,i.jsx)(p.k,{code:"npm i -D typescript @types/react @types/react-dom"})]}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:["Многие современные библиотеки уже имеют типы (как в примере выше React), но иногда, особенно в старых или библиотеках, написанных на нативном JavaScript, они могут отсутствовать. Для них нужно отдельно устанавливать пакеты типов. Обычно названия таких пакетов начинаются с префикса ",(0,i.jsx)("em",{children:"@types"}),"."]})})]}),(0,i.jsxs)("p",{children:["В финальный билд такие библиотеки типов обычно не попадают, поэтому их всегда устанавливают с флагом"," ",(0,i.jsx)("em",{children:"-D"})," или ",(0,i.jsx)("em",{children:"--save-dev"})," (только для разработки)."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Типизация пропсов"}),(0,i.jsxs)("p",{children:["Для типизации пропсов обычно используется ключевое слово ",(0,i.jsx)(T.InlineCode,{children:"type"})," или"," ",(0,i.jsx)(T.InlineCode,{children:"interface"})," для создания отдельных типов для пропсов компонента:"]}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:s,name:"Button"}),(0,i.jsxs)("p",{children:["Что выбрать: ",(0,i.jsx)(T.InlineCode,{children:"interface"})," или ",(0,i.jsx)(T.InlineCode,{children:"type"}),"? Для пропсов они взаимозаменяемы, но часто выбирают ",(0,i.jsx)(T.InlineCode,{children:"interface"}),"."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Best practice:"})," создать в директории компонента отдельный файл"," ",(0,i.jsx)("em",{children:"COMPONENT_NAME.types.ts"})," и перенести тип/интерфейс для пропса туда ",P.C6," это отличная практика для очистки кода компонентов:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n,name:"Button.types"}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:l,name:"Button"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Типизация компонентов"}),(0,i.jsxs)("p",{children:["Раньше надо было типизировать компоненты с ",(0,i.jsx)("em",{children:"FC"})," (или ",(0,i.jsx)("em",{children:"FunctionComponent"}),"):"]}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:x,name:"Button.types"}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:m,name:"Button"}),(0,i.jsx)("p",{className:"explanation",children:"Внимание: это старый подход!"}),(0,i.jsxs)("p",{children:["В современном TypeScript это делать не обязательно и часто не рекомендуется ",P.C6," ",(0,i.jsx)("em",{children:"FC"})," ","автоматически добавляет ",(0,i.jsx)(T.InlineCode,{children:"children: ReactNode"})," в пропсы компонента, а также тип"," ",(0,i.jsx)("em",{children:"FC"})," не принимает дженерики в пропсах. Это может привести к ситуациям, когда компонент, который не должен принимать дочерние элементы, всё равно их принимает без ошибок со стороны TypeScript. Поэтому достаточно просто протипизировать пропсы без типизации самого компонента:"]}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:j,name:"Button.types"}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:u,name:"Button"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Типизация ",(0,i.jsx)(T.InlineCode,{children:"children"})]}),(0,i.jsxs)("p",{children:["Если компонент должен оборачивать другие компоненты т.е. принимать ",(0,i.jsx)(T.InlineCode,{children:"children"}),", используйте стандартный тип ",(0,i.jsx)("strong",{children:"ReactNode"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r,name:"Header.types"}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:t,name:"Header"}),(0,i.jsxs)("p",{children:["Этот тип настоящая палочка-выручалочка и представляет собой всё, что может быть отрендерено в React: элементы React (JSX), строки, числа, массивы, фрагменты, ",(0,i.jsx)(T.InlineCode,{children:"null"}),","," ",(0,i.jsx)(T.InlineCode,{children:"undefined"})," и логические значения."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Типизация событий"}),(0,i.jsxs)("p",{children:["События типизируются встроенными типами из ",(0,i.jsx)("strong",{children:"React"}),". В зависимости от типа действия (клик, ввод, отправка формы) используются специфические типы, такие как ",(0,i.jsx)("strong",{children:"MouseEvent"}),","," ",(0,i.jsx)("strong",{children:"ChangeEvent"})," или ",(0,i.jsx)("strong",{children:"FormEvent"}),", соответственно."]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h4",{children:["События мыши",(0,C.Z8)("Mouse Events")]}),(0,i.jsxs)("p",{children:["Для кликов, наведений и других манипуляций мышью используйте тип ",(0,i.jsx)("strong",{children:"MouseEvent"}),". В дженерике"," ",(0,i.jsx)(T.InlineCode,{children:(0,i.jsx)(N,{children:" "})})," ","обычно указывается HTML-тег элемента, с которого приходит событие, в данном случае это кнопка поэтому тип будет ",(0,i.jsx)("strong",{children:"HTMLButtonElement"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c,name:"Button"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h4",{children:["События ввода",(0,C.Z8)("Change Events")]}),(0,i.jsxs)("p",{children:["Если нужно обработать изменение в поле ввода, селекторе или чекбоксе, используйте"," ",(0,i.jsx)("strong",{children:"ChangeEvent"}),". В качестве дженерика нужно передать элемент формы:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a,name:"Input"})]}),(0,i.jsx)("p",{children:"Остальные события работают аналогично. Если не понятно, какой тип следует присвоить, то в React с TypeScript для определения типа события достаточно: либо воспользоваться подсказкой вашей среды разработки, наведя курсор на место, где будет передан аргумент события."}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:["Посмотреть на атрибут тега, например, ",(0,i.jsx)(T.InlineCode,{children:"onClick"})," или"," ",(0,i.jsx)(T.InlineCode,{children:"onChange"}),". Начните писать тег, напишите атрибут, наведите на слово"," ",(0,i.jsx)(T.InlineCode,{children:"event"})," в IDE и TypeScript покажет, что это"," ",(0,i.jsxs)("strong",{children:["MouseEvent",(0,i.jsx)(N,{children:"HTMLButtonElement"})]}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:"<button onClick={(event) => {} />",name:"Button"})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:["Воспользоваться подсказкой вашей среды разработки, наведя курсор на место, где будет передан аргумент события. Похоже на предыдущий способ: вынесите функцию, но не пишите тип сразу, наведите на"," ",(0,i.jsx)(T.InlineCode,{children:"event"}),", IDE снова подскажет нужный тип:"]}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:d,name:"Button"})]})]}),(0,i.jsxs)("p",{children:["В большинстве проектов вам понадобятся лишь несколько основных типов. Главное правило:"," ",(0,i.jsx)("strong",{children:"ChangeEvent"})," используется, когда меняется значение (ввод), а ",(0,i.jsx)("strong",{children:"MouseEvent"})," для кликов или перемещений. В качестве дженерика нужно передать тип HTML-элемента (см."," ",(0,i.jsx)("a",{className:"link PRIMARY",href:"#DOM_and_Events",children:"Типизация DOM и событий"}),")."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Типизация хуков"}),(0,i.jsx)("p",{children:"Типизация хуков происходит автоматически, но часто требует явного указания типов при работе с начальными состояниями, сложными объектами или массивами."}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"useState"})}),(0,i.jsxs)("p",{children:["Типизация ",(0,i.jsx)(T.InlineCode,{children:"useState"})," для примитивов обычно выводится автоматически из начального значения. Тип можно указывать:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:S}),(0,i.jsxs)("p",{children:["А можно и пропустить, как и в случае с переменными (см."," ",(0,i.jsx)("a",{href:"#Type_Annotations",className:"link PRIMARY",children:"Аннотация типов"}),") ",P.C6," TypeScript сам может автоматически определить тип по начальному значению:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:R}),(0,i.jsxs)("p",{children:["Если начальное значение может быть ",(0,i.jsx)(T.InlineCode,{children:"null"})," или тип неочевиден, используйте дженерик в виде"," ",(0,i.jsxs)(T.InlineCode,{children:["useState",(0,i.jsx)(N,{children:"Type"}),"(initialValue)"]})," ","c объединением для явного указания:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:f}),(0,i.jsx)("p",{children:"Если начальное состояние это массив объектов, который изначально пуст:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:b})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"useRef"})}),(0,i.jsxs)("p",{children:["Хук ",(0,i.jsx)(T.InlineCode,{children:"useRef"})," используется как для хранения значений, так и для ссылок на DOM-элементы, поэтому есть два способа его типизации, важно передавать точный тип элемента и начальное значение в зависимости от варианта использования хука:"]}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"useRef"})," хранит ссылку на DOM-элемент:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"const inputRef = useRef<HTMLInputElement>(null);"})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"useRef"})," используется как переменная для сохранения данных:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"const timerId = useRef<number | null>(null);"})]})]}),(0,i.jsxs)("p",{children:["Если нужно пробросить ",(0,i.jsx)(T.InlineCode,{children:"ref"})," в компонент как пропс, то нужно обернуть дочерний компонент в ",(0,i.jsx)(T.InlineCode,{children:"forwardRef"})," и проставить соответствующие типы в угловых скобках"," ",(0,i.jsx)("code",{className:"code",children:(0,i.jsx)(N,{})})," ","через запятую ",P.C6," типы HTML-элемента и тип для пропсов компонента:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:A}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:w})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:"Кастомные хуки"}),(0,i.jsx)("p",{children:"Для типизации кастомных хуков применяются те же правила типизации аргументов функций и возвращаемых значений. Возвращаемый результат часто типизируется как кортеж:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:E}),(0,i.jsx)("p",{children:"Если хук возвращает более 2-3 значений, лучше вернуть объект. Это сделает код при деструктуризации независимым от порядка следования переменных и самодокументируемым:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:_}),(0,i.jsxs)("p",{children:[" ","Так же можно использовать"," ",(0,i.jsx)("a",{href:"#Generics_Custom_Hooks",className:"link PRIMARY",children:"дженерики"})," ","для типизации хуков."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)(T.InlineCode,{children:"useMemo"}),", ",(0,i.jsx)(T.InlineCode,{children:"useCallback"})]}),(0,i.jsxs)("p",{children:["TypeScript автоматически определяет возвращаемый тип функции или значения в ",(0,i.jsx)(T.InlineCode,{children:"useMemo"}),":"]}),(0,i.jsxs)("p",{children:["Основное внимание нужно уделить аргументам функции, передаваемой в ",(0,i.jsx)(T.InlineCode,{children:"useCallback"})," ",P.C6," их типы лучше прописывать явно, чтобы избежать ошибок типизации при передаче пропсов:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:v}),(0,i.jsxs)("p",{children:["Тип возвращемого значения, аналогично как и дл ",(0,i.jsx)(T.InlineCode,{children:"useMemo"}),", указывать не надо."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h4",{children:(0,i.jsx)(T.InlineCode,{children:"useContext"})}),(0,i.jsxs)("p",{children:["Чтобы типизировать хук ",(0,i.jsx)(T.InlineCode,{children:"useContext"}),", нужно задать интерфейс для данных контекста на этапе создания через ",(0,i.jsx)(T.InlineCode,{children:"createContext"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:k}),(0,i.jsxs)("p",{children:["В качестве значения по умолчанию указывается ",(0,i.jsx)(T.InlineCode,{children:"null"})," , чтобы избежать ложных срабатываний."]}),(0,i.jsxs)("p",{children:["TypeScript автоматически подхватит указанный тип при вызове ",(0,i.jsx)(T.InlineCode,{children:"useContext"}),". Для избежания проблем с ",(0,i.jsx)(T.InlineCode,{children:"null"})," рекомендуется создавать кастомный хук-обертку, который будет проверять, что компонент находится внутри провайдера:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:U}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:Y}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:z})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Компоненты-дженерики"}),(0,i.jsxs)("p",{children:["С помощью дженериков можно делать универсальные компоненты, которые будут работать с разными типами данных, сохраняя при этом строгую типизацию."," "]}),(0,i.jsx)("p",{children:"Самый базовый пример такого компонента-дженерика это компонент-список:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:o,name:"List.types"}),(0,i.jsx)("div",{className:"spacer top small"}),(0,i.jsx)(g.z,{lang:y.Pl.REACT,code:h,name:"List"})]}),(0,i.jsxs)("section",{id:"Generics_Custom_Hooks",className:"section inner",children:[(0,i.jsx)("h3",{children:"Дженерики-хуки"}),(0,i.jsx)("p",{children:"Дженерики также позволяют создавать переиспользуемые хуки, которые адаптируют свои типы под передаваемые данные. Например:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:I,name:"useLocalStorage"}),(0,i.jsxs)("p",{children:["При вызове"," ",(0,i.jsxs)(T.InlineCode,{children:["useLocalStorage",(0,i.jsx)(N,{children:"string"}),"('user', 'dtsiki')"]})," ","TypeScript автоматически выведет все типы как ",(0,i.jsx)("em",{children:"string"}),"."]})]})]})});z.displayName="React";let A=(0,l.forwardRef)(({},e)=>{let s=`function sum(a: number, b: number) {
  return a + b;
}`,n=`sum(2, 2);
sum("Hello", 42); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
sum('2', '2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'`,l=`type MathOperation = (a: number, b: number) => number;

const sum: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;`,r=`function getFavoriteNumber(): number {
  return 42;
}`,t=`const log = (message: string): void => {
  console.log(message);
};`,c=`function format(value: string): string;
function format(value: number): string;

function format(value: string | number): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value.trim();
}`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsx)("h2",{children:"Функции"}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Типизация входных параметров"}),(0,i.jsx)("p",{children:"В TypeScript можно типизировать аргументы функций:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsx)("p",{children:"Теперь, когда аргументы протипизированы, TypeScript будет проверять их при вызове функции:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsx)("p",{children:"Стрелочные функции тоже типизируются:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"const sayHello = (name: string) => {\n  return `Привет, ${name}`;\n};"}),(0,i.jsx)("p",{children:"Можно создать тип для функции, чтобы использовать его повторно в переменных или параметрах других функций:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l}),(0,i.jsxs)("p",{children:["Аргументы функций могут быть необязательными. Для того, чтобы сделать параметр необязательным, после его названия указывается знак вопроса\xa0",(0,i.jsx)("strong",{children:"?"}),". В примере ниже таким образом аргумент"," ",(0,i.jsx)(T.InlineCode,{children:"name"})," может принимать значение как ",(0,i.jsx)(T.InlineCode,{children:"string"}),", так и"," ",(0,i.jsx)(T.InlineCode,{children:"undefined"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:'function sayHello(name?: string) {\n  return `Привет, ${name ?? "таинственный гость"}`;\n}'}),(0,i.jsx)("p",{children:"Параметрам можно задать значение по умолчанию:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:'function sayHello(name: string = "таинственный гость") {\n  return `Привет, ${name}`;\n}'}),(0,i.jsx)("p",{children:"Важно помнить, что необязательные параметры должны идти после обязательных. "})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Типизация возвращаемого значения"}),(0,i.jsx)("p",{children:"Также можно типизировать возвращаемое из функции значение:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r}),(0,i.jsxs)("p",{children:["Если функция ничего не возвращает, то для этого используем специальный тип ",(0,i.jsx)(T.InlineCode,{children:"void"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t}),(0,i.jsxs)("p",{children:["TypeScript определяет тип возвращаемого значения функции на основе оператора ",(0,i.jsx)(T.InlineCode,{children:"return"}),", поэтому писать тип возвращаемого значения необязательно."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Перегрузки функций ",(0,C.Z8)("Function Overloads")]}),(0,i.jsx)("p",{children:"Можно заставить функцию вести себя по-разному в зависимости от аргументов. Для этого используются перезагрузки:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c})]})]})});A.displayName="Functions";let w=(0,l.forwardRef)(({},e)=>{let s=`const admin = "admin";
let user = 'user';`,n=`type Status = 'idle' | 'loading' | 'success' | 'error'; // String literal type

function handleStatus(status: Status) {
  // статусом может быть только одним из четырёх значений
}`,l=`type Dice = 1 | 2 | 3 | 4 | 5 | 6; // Number literal type

function rollDice(): Dice {
  return Math.floor(Math.random() * 6) + 1 as Dice;
}`,r=`type SuccessResult = {
  success: true; // Boolean literal type
  data: string;
};

type FailureResult = {
  success: false; // Boolean literal type
  error: string;
};`,t=`const admin = {
  login: 'admin',
  password: 'admin',
} as const;`,c=`const admin: {
  readonly login: "admin";
  readonly password: "admin";
}`,a=`enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}`,d=`var Status;
(function (Status) {
    Status["IDLE"] = "idle";
    Status["LOADING"] = "loading";
    Status["SUCCESS"] = "success";
    Status["ERROR"] = "error";
})(Status || (Status = {}));`,o=`enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

function handleStatus(status: Status) {
  ...
}

handleStatus(Status.IDLE);`,h=`type Status = 'idle' | 'loading' | 'success' | 'error';

handleStatus('success');`,p=`const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR = 'error'
} as const;

type Status = (typeof Status)[keyof typeof Status]; // 'idle' | 'loading' | 'success' | 'error'

handleStatus(Status.IDLE);`,x=`const colorTheme = {
  background: 'dark',
  text: 'light'
} as const;

colorTheme.background = 'light'; // Ошибка: Cannot assign to 'background' because it is a read-only property`,m=`type World = "world";
type Greeting = \`hello $\{World}\`; // Тип: "hello world"

// Комбинирование union типов
type Direction = "top" | "bottom";
type Margin = \`margin-$\{Direction}\`; // Тип: "margin-top" | "margin-bottom"`,j=`type Size = "small" | "large";
type Color = "red" | "blue";
type Style = \`$\{Size}-$\{Color}\`;
// Тип: "small-red" | "small-blue" | "large-red" | "large-blue"`,u=`type CssSize = \`$\{number}$\{'px' | 'rem' | 'em'}\`;

const size: CssSize = '16px';
const size2: CssSize = '2rem';
// const invalid: CssSize = '16pt'; // Ошибка`,I=`type ActionType = 'add' | 'remove' | 'update';

type Action<T> = {
  type: \`$\{ActionType}_$\{T}\`;
  payload: T;
};

// Создаём конкретный тип
type UserAction = Action<'user'>;
// { type: 'add_user' | 'remove_user' | 'update_user'; payload: 'user' }

const action: UserAction = {
  type: 'add_user',
  payload: 'user',
};`,S=`type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = \`/$\{string}\`;

const route: ApiEndpoint = '/users';
// const invalid: ApiEndpoint = 'users'; // Ошибка`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsxs)("h2",{children:["Литералы ",(0,C.Z8)("Literal Types")]}),(0,i.jsxs)("p",{children:["В TypeScript можно использовать не только общие типы, но и конкретные значения как типы."," ",(0,i.jsx)("strong",{children:"Литерал"})," ",P.C6," это тип, который принимает ровно одно конкретное значение."," "]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Расширение типов",(0,C.Z8)("Type Widening")]}),(0,i.jsxs)("p",{children:["TypeScript по разному реагирует на переменные, объявленные с помощью ключевых слов"," ",(0,i.jsx)(T.InlineCode,{children:"let"})," и ",(0,i.jsx)(T.InlineCode,{children:"const"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s,name:"literal-types-example(1)"}),(0,i.jsxs)("p",{children:["В этом примере типом переменной ",(0,i.jsx)("em",{children:"admin"})," будет не ",(0,i.jsx)(T.InlineCode,{children:"string"}),", а строка"," ",(0,i.jsx)(T.InlineCode,{children:"admin"}),". А вот типом переменной ",(0,i.jsx)("em",{children:"user"})," будет как раз"," ",(0,i.jsx)(T.InlineCode,{children:"string"}),". TypeScript превращает переменную ",(0,i.jsx)("em",{children:"admin"})," в литерал."]}),(0,i.jsxs)("p",{children:["Если вы объявите переменную с помощью ",(0,i.jsx)(T.InlineCode,{children:"const"}),", TypeScript автоматически сузит её тип до литерального, так как её значение не может измениться."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Заморозка литералов",(0,C.Z8)("Const Assertions")]}),(0,i.jsxs)("p",{children:["Можно добавить ",(0,i.jsx)(T.InlineCode,{children:"as const"})," и присвоить литеральные типы:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:"let user = 'user' as const;",name:"literal-types-example(2)"}),(0,i.jsxs)("p",{children:["Теперь ",(0,i.jsx)("em",{children:"user"})," будет литералом с типом ",(0,i.jsx)(T.InlineCode,{children:"user"}),"."]}),(0,i.jsx)("p",{children:"Обычно это используется для заморозки объектов: все свойства автоматически помечаются как readonly, а их значения получают литеральные типы, чтобы избежать случайных ошибок перезаписи:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:x,name:"literal-types-example(3)"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Виды литералов"}),(0,i.jsx)("p",{children:"В TypeScript существует 3 основных вида литеральных типов: строковые, числовые и логические."}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{className:"list__title",children:"строковые литералы"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n,name:"literal-types-example(2)"})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{className:"list__title",children:"числовые литералы"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l,name:"literal-types-example(3)"})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{className:"list__title",children:"логические литералы"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r,name:"literal-types-example(4)"})]})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Приведение к литеральному типу"}),(0,i.jsxs)("p",{children:["Объекты тоже можно приводить к литеральному типу через Type Assertion с помощью"," ",(0,i.jsx)(T.InlineCode,{children:"as const"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t,name:"literal-types-example(5)"}),(0,i.jsxs)("p",{children:["В результате будет получен тип с неизменяемыми ",(0,i.jsx)(T.InlineCode,{children:"readonly"})," полями и литеральными типами в значении:"]}),(0,i.jsx)(g.z,{code:c,lang:y.Pl.TYPESCRIPT,name:"literal-types-example(6)"}),(0,i.jsx)("p",{children:"Такой способ приведения применим и к массивам."})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Перечисления или литеральные типы"}),(0,i.jsxs)("p",{children:["Перечисления ",(0,i.jsx)(T.InlineCode,{children:"enum"})," ",P.C6," это ещё способ задать набор именованных констант:"]}),(0,i.jsx)(g.z,{code:a,lang:y.Pl.TYPESCRIPT,name:"literal-types-example(7)"}),(0,i.jsxs)("p",{children:["Теперь можно использовать ",(0,i.jsx)(T.InlineCode,{children:"Status.IDLE"}),", ",(0,i.jsx)(T.InlineCode,{children:"Status.LOADING"})," и т.д."," ",P.C6," и получать соответствующие строки."]}),(0,i.jsxs)("p",{children:["Рекомендуется избегать использования ",(0,i.jsx)(T.InlineCode,{children:"enum"})," для именнованных констант и отдавать предпочтение типам и литералам. Связано это с тем, что типы и литералы ",P.C6," это чистый TypeScript, который исчезает после компиляции, в том время как перечисления ",P.C6," это реальный JavaScript-объект, который остаётся в рантайме и генерирует лишний код."]}),(0,i.jsx)("p",{children:" Например, после компиляции перечисление из примера выше будет выглядеть так:"}),(0,i.jsx)(g.z,{code:d,lang:y.Pl.JAVASCRIPT,name:"index"}),(0,i.jsx)("p",{children:"Тип же исчезнет при компиляции и не попадёт в бандл:"}),(0,i.jsx)(g.z,{code:"// ничего нет",lang:y.Pl.JAVASCRIPT,name:"index"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Как заменить перечисление на тип"}),(0,i.jsx)("p",{children:"Например, в вашем проекте сложилось использование перечислений в таком виде:"}),(0,i.jsx)(g.z,{code:o,lang:y.Pl.TYPESCRIPT,name:"literal-types-example(8)"}),(0,i.jsx)("p",{children:"Задача: убрать перечисления, но очень не хочется переходить на использование строк:"}),(0,i.jsx)(g.z,{code:h,lang:y.Pl.TYPESCRIPT,name:"literal-types-example(9)"}),(0,i.jsxs)("p",{children:["Эта замена ",P.C6," один из самых частых рефакторингов в современном TypeScript. Для решения создадим объект с ",(0,i.jsx)(T.InlineCode,{children:"as const"})," и затем выведем из него тип:"]}),(0,i.jsx)(g.z,{code:p,lang:y.Pl.TYPESCRIPT,name:"literal-types-example(10)"})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h3",{children:["Шаблонные литералы",(0,C.Z8)("Template Literal Types")]}),(0,i.jsx)("p",{children:"Позволяет строить типы на основе строковых шаблонов. Это как шаблонные строки в JavaScript, но на уровне типов."}),(0,i.jsx)(g.z,{code:m,lang:y.Pl.TYPESCRIPT}),(0,i.jsx)("p",{children:"При использовании нескольких объединений шаблонный тип автоматически создаст все возможные комбинации:"}),(0,i.jsx)(g.z,{code:j,lang:y.Pl.TYPESCRIPT}),(0,i.jsx)("p",{children:"Шаблонные литералы можно использовать для типизации:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"CSS-свойств:"}),(0,i.jsx)(g.z,{code:u,lang:y.Pl.TYPESCRIPT})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"экшенов:"}),(0,i.jsx)(g.z,{code:I,lang:y.Pl.TYPESCRIPT})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"API-путей:"}),(0,i.jsx)(g.z,{code:S,lang:y.Pl.TYPESCRIPT})]})]}),(0,i.jsx)("p",{children:"TypeScript предоставляет специальные функции для изменения регистра букв на уровне типов:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Uppercase",(0,i.jsx)(N,{children:"T"})]})," ","приводит к верхнему регистру"]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Lowercase",(0,i.jsx)(N,{children:"T"})]})," ","приводит к нижнему регистру"]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Capitalize",(0,i.jsx)(N,{children:"T"})]})," ","делает первую букву заглавной"]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsxs)(T.InlineCode,{children:["Uncapitalize",(0,i.jsx)(N,{children:"T"})]})," ","делает первую букву строчной"]})})]}),(0,i.jsx)("p",{children:"Например:"}),(0,i.jsx)(g.z,{code:'type EventName<T extends string> = `on${Capitalize<T>}`;\ntype ClickEvent = EventName<"click">; // Тип: "onClick"',lang:y.Pl.TYPESCRIPT}),(0,i.jsxs)("p",{children:["TypeScript позволяет динамически извлекать части строк или проверять их соответствие шаблону внутри условных типов c помощью ключевого слова ",(0,i.jsx)(T.InlineCode,{children:"infer"}),":"]}),(0,i.jsx)(g.z,{code:'type GetterName<T extends string> = T extends `get${infer U}` ? U : never;\ntype Prop = GetterName<"getUser">; // Тип: "User"',lang:y.Pl.TYPESCRIPT})]})]})});w.displayName="LiteralTypes";let M=(0,l.forwardRef)(({},e)=>{let s=`// Общий тип "фигура" с полем-дискриминатором kind
interface Circle {
  type: 'circle';
  radius: number;
}

interface Square {
  type: 'square';
  side: number;
}

interface Rectangle {
  type: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;`,n=`function assertNever(type: never): never {
  throw new Error(\`Неизвестная фигура: $\{type}\`);
}

function getArea(shape: Shape): number {
  switch (shape.type) {
    case 'circle':
      // TypeScript знает: здесь shape — Circle
      return Math.PI * shape.radius ** 2;
    case 'square':
      // TypeScript знает: здесь shape — Square
      return shape.side ** 2;
    case 'rectangle':
      // TypeScript знает: здесь shape — Rectangle
      return shape.width * shape.height;
    default:
      // Если добавим новую фигуру — попадём сюда
      return assertNever(shape);
  }
}

getArea({ type: 'circle', radius: 42 });`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsxs)("h2",{children:["Дискриминирующие объединения",(0,C.Z8)("Discriminated Unions")]}),(0,i.jsxs)("p",{children:["Это\xa0набор типов, у которых есть общее поле-дискриминатор. Обычно это ",(0,i.jsx)(T.InlineCode,{children:"type"}),","," ",(0,i.jsx)(T.InlineCode,{children:"kind"})," или ",(0,i.jsx)(T.InlineCode,{children:"status"}),". По этому полю TypeScript понимает какой именно тип будет нужен."]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s}),(0,i.jsxs)("p",{children:["Теперь TypeScript знает: если ",(0,i.jsx)(T.InlineCode,{children:"shape.type === 'circle'"}),", то нужным типом точно будет"," ",(0,i.jsx)(T.InlineCode,{children:"Circle"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n})]})});M.displayName="DiscriminatedUnions";let L=(0,l.forwardRef)(({},e)=>{let s=`class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return \`Привет, $\{this.name}!\`;
  }
}

const user = new User('dtsiki');
console.log(user.greet()); // Привет, dtsiki!`,n=`class User {
  public name: string; // доступно везде
  private age: number; // только внутри класса
  protected email: string; // внутри класса и наследников
  readonly id: number; // только для чтения

  constructor(id: number, name: string, age: number, email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  private getAge(): number {
    return this.age; // доступно внутри класса
  }

  public getInfo(): string {
    return \`$\{this.name} ($\{this.getAge()})\`;
  }
}

const user = new User(42, 'dtsiki', 33, 'dtsiki@dtsiki.dtsiki');

// public:
console.log(user.name); // dtsiki

// private:
console.log(user.age); // Ошибка: Property 'age' is private and only accessible within class 'User'

// protected:
console.log(user.email); // Ошибка: Property 'email' is protected and only accessible within class 'User' and its subclasses

// readonly:
user.id = 1; // Ошибка: Cannot assign to 'id' because it is a read-only property`,l=`class User {
  constructor(readonly id: number, public name: string, private age: number, protected email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
  ...
}`,r=`class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(\`$\{this.name} издает звук\`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Обязательно вызываем super для инициализации родительского конструктора
  }

  // Переопределение метода
  makeSound(): void {
    console.log(\`$\{this.name} лает: Гав-гав!\`);
  }

  fetch(): void {
    console.log(\`$\{this.name} приносит палку\`);
  }
}

const myDog = new Dog("Кеша", "корги");
myDog.makeSound(); // Выведет: Кеша лает: Гав-гав!`,t=`abstract class AbstractUser {
  constructor(public id: number, public email: string) {}

  // Абстрактный метод {LONG_DASH} у него нет тела, дочерние классы обязаны его реализовать
  abstract getRole(): string;

  displayInfo(): void {
    console.log(\`Email: $\{this.email}\`);
  }
}

class Admin extends AbstractUser {
  getRole(): string {
    return "Администратор";
  }
}

const admin = new Admin(1, "admin@site.ru");
admin.displayInfo(); // Email: admin@site.ru`,c=`interface Animal {
  name: string;
  makeSound(): void;
}

interface Pet {
  play(): void;
}

class Dog implements Animal, Pet {
  constructor(public name: string) {}

  makeSound() {
    console.log(\`$\{this.name} лает: Гав-гав!\`);
  }

  play() {
    console.log(\`$\{this.name} приносит палку...\`);
  }
}`,a=`class MathUtils {
  // Приватный конструктор запрещает создание экземпляров с помощью new
  private constructor() {}

  // Статическое свойство (константа)
  static readonly PI = 3.14159;

  // Статический метод
  static calculateCircleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// Использование напрямую, без new MathUtils()
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.calculateCircleArea(5)); // 78.53975`,d=`class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push('a');
stringStack.push('b');
console.log(stringStack.pop()); // 'b'`,o=`class User {
  // Приватное поле, к которому нет прямого доступа извне
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  // Геттер: вызывается при чтении (user.age)
  get age(): number {
    return this._age;
  }

  // Сеттер: вызывается при записи (user.age = 25)
  set age(newAge: number) {
    if (newAge < 0) {
      throw new Error("Возраст не может быть отрицательным");
    }
    this._age = newAge;
  }
}

const user = new User(20);
console.log(user.age); // 20 (сработал геттер)

user.age = 25; // сработал сеттер
// user.age = -5; // выбросит ошибку`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsx)("h2",{children:"Объектно-ориентированное программирование в TypeScript"}),(0,i.jsxs)("p",{children:["TypeScript полностью поддерживает классическое объектно-ориентированное программирование, предлагая строгую типизацию, классы, интерфейсы, модификаторы доступа, абстрактные классы и удобную реализацию наследования через ключевое слово ",(0,i.jsx)(T.InlineCode,{children:"extends"}),"."]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Классы"}),(0,i.jsx)("p",{children:"В TypeScript есть полноценная поддержка классов, унаследованная из стандарта ECMAScript, с добавлением мощных возможностей строгой типизации."}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Модификаторы доступа"}),(0,i.jsx)("p",{children:"В TypeScript есть четыре модификатора, которые управляют видимостью свойств и методов класса, обеспечивая инкапсуляцию:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"public"}),": свойства и методы с этим модификатором доступны из любого места"," ",P.C6,"внутри класса, в дочерних классах и снаружи (в экземпляре объекта). Если модификатор не указан, по умолчанию свойство становится ",(0,i.jsx)(T.InlineCode,{children:"public"}),"."]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"private"}),": свойства и методы доступны только внутри того класса, где они объявлены. Доступ к ним извне или из дочерних классов приведет к ошибке компиляции."]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"protected"}),": свойства и методы доступны внутри самого класса, а также во всех его дочерних классах. Снаружи к ним обращаться нельзя."]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"readonly"}),": свойства и методы доступы только для чтения, изменить их после создания или инициализации нельзя."]})})]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n}),(0,i.jsx)("p",{children:"TypeScript позволяет не объявлять свойства и не присваивать им значения вручную, а указать модификатор прямо в аргументах конструктора:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Наследование"}),(0,i.jsxs)("p",{children:["Дочерний класс наследует свойства и методы родительского, но может добавлять свои или переопределять существующие. Наследование осуществляется с помощью ключевого слова ",(0,i.jsx)(T.InlineCode,{children:"extends"}),", а в дочернем классе обязательно нужно вызывать метод ",(0,i.jsx)(T.InlineCode,{children:"super()"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r}),(0,i.jsxs)("p",{children:["В TypeScript нет множественного наследования классов, но его поддерживают интерфейсы ",P.C6," можно унаследовать сразу несколько интерфейсов через запятую с помощью ключевого слова"," ",(0,i.jsx)(T.InlineCode,{children:"implements"})," (см."," ",(0,i.jsx)("a",{href:"#Interfaces_Implementation",className:"link PRIMARY",children:"Реализация интерфейсов"}),")."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Абстрактные классы"}),(0,i.jsx)("p",{children:"Абстрактные классы нельзя инстанциировать. Они нужны как шаблон для других классов."}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t})]}),(0,i.jsxs)("section",{id:"Interfaces_Implementation",className:"section inner",children:[(0,i.jsx)("h3",{children:"Реализация интерфейсов"}),(0,i.jsxs)("p",{children:["Ключевое слово ",(0,i.jsx)(T.InlineCode,{children:"implements"})," в TypeScript заставляет класс строго соответствовать контракту, описанному в интерфейсе. Класс обязан реализовать все указанные свойства и методы; в противном случае компилятор выдаст ошибку:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c}),(0,i.jsxs)("p",{children:["В этом примере, если не будет реализован, например, метод ",(0,i.jsx)(T.InlineCode,{children:"play()"}),", то будет получена ошибка компиляции, сообщающая о том, что необходимо реализовать этот метод потому что он является обязательным в интерфейсе ",(0,i.jsx)(T.InlineCode,{children:"Pet"}),"."]}),(0,i.jsxs)("p",{children:["Разница между ",(0,i.jsx)(T.InlineCode,{children:"extends"})," и ",(0,i.jsx)(T.InlineCode,{children:"implements"}),":"]}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"extends"})," используют для наследования: класс берёт и копирует готовую реализацию от родительского класса."]})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsxs)("p",{children:[(0,i.jsx)(T.InlineCode,{children:"implements"}),": класс лишь обязуется реализовать все свойства и методы, описанные в интерфейсе."]})})]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Статические свойства и методы"}),(0,i.jsxs)("p",{children:["В TypeScript нет выделенного ключевого слова для создания самих статических классов. Ключевое слово"," ",(0,i.jsx)(T.InlineCode,{children:"static"})," помечает только свойства и методы, принадлежащие самому классу. Создать объект такого класса через ",(0,i.jsx)(T.InlineCode,{})," невозможно."]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a}),(0,i.jsxs)("p",{children:["Статические классы используются для создания глобальных утилит (математические операции, работа со строками или датами), фабрик, сервисов и констант. Они группируют логику и данные, которые принадлежат самому классу, а не отдельным экземплярам, избавляя от необходимости вызывать ",(0,i.jsx)(T.InlineCode,{children:"new ClassName()"}),"."]})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Геттеры и сеттеры"}),(0,i.jsxs)("p",{children:["Геттеры и сеттеры ",P.C6," это специальные методы, которые позволяют управлять доступом к свойствам класса. Они полезны для инкапсуляции, выполнения проверок перед изменением данных или вычисления значений на лету."]}),(0,i.jsxs)("p",{children:["Для их создания используются ключевые слова ",(0,i.jsx)(T.InlineCode,{children:"get"})," и ",(0,i.jsx)(T.InlineCode,{children:"set"}),", а при обращении к ним скобки не требуются:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:o})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Классы с дженериками"}),(0,i.jsx)("p",{children:"И тут не обойдёмся без них: дженерики позволяют создавать классы, которые могут работать с разными типами данных, сохраняя при этом строгую типизацию."}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:d})]})]})});L.displayName="OOP";let D=(0,l.forwardRef)(({},e)=>{let s=`type User = {
  id: number;
  name: string;
  age?: number;
}

type NewType = {
  [K in keyof User]: User[K];
};`,n=`type NewType<T> = {
  [K in keyof T]: T[K];
};`,l=`type User = {
  name: string;
  age: number;
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};`,r=`type OptionalUser = {
  name?: string | undefined;
  age?: number | undefined;
}`,t=`type User = {
  id: number;
  name: string;
  age?: number;
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const user: ReadOnly<User> = {
  id: 42,
  name: "веышлш"
};

user.name = 'dtsiki'; // Ошибка: Cannot assign to 'name' because it is a read-only property`,c=`// Встроенный тип:
type PartialUser = Partial<User>;

// Под капотом маппинг тип:
type Partial<T> = {
  [K in keyof T]?: T[K];
};`,a=`type StringKeys<T> = {
  [P in keyof T as P extends string ? P : never]: T[P];
};

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  isAwesome: boolean;
}

type OnlyStrings = StringKeys<User>; `;return(0,i.jsxs)("section",{ref:e,id:"MappedTypes",className:"section outer",children:[(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsxs)("h2",{children:["Маппинг типы",(0,C.Z8)("Mapped Types")]}),(0,i.jsxs)("p",{children:["Позволяют создавать новые типы на основе существующих, путём перебора ключей и последующей модификации их. По сути это функция ",(0,i.jsx)(T.InlineCode,{children:"map"}),", но для типов: проходимся по каждому ключу и что-то делаем с ним."]}),(0,i.jsx)("p",{children:"Есть два синтаксических подхода к написанию маппинга типов:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Применяем маппинг сразу к конкретному типу:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Используем дженерик:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n})]})]}),(0,i.jsxs)("p",{children:["В обоих случаях можно использовать модификаторы ",(0,i.jsx)("strong",{children:"?"})," (сделает свойство необязательным) и"," ",(0,i.jsx)("strong",{children:"readonly"})," (сделает свойство доступным только для чтения), а также"," ",(0,i.jsx)("a",{href:"#Utility Types",className:"link PRIMARY",children:"встроенные типы"}),". Во время создания нового типа можно добавлять или удалять свойства, используя префиксы ",(0,i.jsx)("strong",{children:"+"})," ","(по умолчанию) и ",(0,i.jsx)("strong",{children:"-"}),"."]}),(0,i.jsx)("p",{children:"Например, с помощью маппинга типа сделаем все поля объекта необязательнымы:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l}),(0,i.jsx)("p",{children:"В результате получится такой тип:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r}),(0,i.jsx)("p",{children:"Можно сделать все поля доступными только для чтения:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:t}),(0,i.jsxs)("p",{children:["Также доступна фильтрация через ключевое слово ",(0,i.jsx)(T.InlineCode,{children:"as"}),":"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:a})]}),(0,i.jsxs)("section",{className:"section inner",children:[(0,i.jsx)("h3",{children:"Встроенные типы"}),(0,i.jsxs)("p",{children:["TypeScript уже содержит множество готовых встроенных типов (Utility Types) на базе Mapped Types:",(0,i.jsxs)(T.InlineCode,{children:["Pick",(0,i.jsx)(N,{children:"T, K"})]}),","," ",(0,i.jsxs)(T.InlineCode,{children:["Record",(0,i.jsx)(N,{children:"K, T"})]}),","," ",(0,i.jsxs)(T.InlineCode,{children:["Omit",(0,i.jsx)(N,{children:"T, K"})]})," ","и т.д. Всё это дженерик-версии маппинг-типов. Именно поэтому они работают с любым типом. Например:"]}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:c}),(0,i.jsxs)("p",{children:["Встроенным типам посвящён отдельный раздел (см."," ",(0,i.jsx)("a",{href:"#Utility Types",className:"link PRIMARY",children:"Встроенные типы"}),")."]})]})]})});D.displayName="MappedTypes";var O=n(46512),B=n(51874);let H=(0,l.forwardRef)(({},e)=>{let s=[{id:(0,O.Ak)(),link:"https://www.typescriptlang.org/docs/handbook/",label:"Документация по TypeScript"},{id:(0,O.Ak)(),link:"https://www.typescriptlang.org/play/",label:"Онлайн-песочница TypeScript"},{id:(0,O.Ak)(),link:"https://react.dev/learn/typescript",label:"Документация по TypeScript в React"}];return(0,i.jsx)("section",{ref:e,className:"section outer",children:(0,i.jsx)(B.e,{items:s,language:t.KG[t.Zr.TYPESCRIPT_CHEATSHEET].language})})});H.displayName="ReadMore";let V=(0,l.forwardRef)(({},e)=>{let s=`type TreeNode = {
  value: number;
  children: TreeNode[];
};

const tree: TreeNode = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] },
      ],
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
      ],
    },
  ],
};
`,n=`type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const data: JSONValue = {
  name: 'dtsiki',
  hobbies: ['frontend', 'coding', 'crochet'],
};`,l=`type Comment = {
  id: number;
  text: string;
  replies: Comment[];
};

const comment: Comment = {
  id: 1,
  text: 'Крутая статья!',
  replies: [
    {
      id: 2,
      text: 'Спасибо!',
      replies: [
        {
          id: 3,
          text: 'И правда полезно',
          replies: [],
        },
      ],
    },
  ],
};`,r=`type List<T> = {
  value: T;
  next: List<T> | null; // null — точка остановки
};`;return(0,i.jsxs)("section",{ref:e,className:"section outer",children:[(0,i.jsxs)("h2",{children:["Рекурсивные типы",(0,C.Z8)("Recursive Types")]}),(0,i.jsx)("p",{children:"Типы, которые ссылаются сами на себя. Рекурсивные типы часто встречаются при работе с API, файловой системой, комментариями и древовидными структурами."}),(0,i.jsx)("p",{children:"Ими можно типизировать:"}),(0,i.jsxs)("ul",{className:"list markered",children:[(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Деревья:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:s})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"JSON-объекты:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:n})]}),(0,i.jsxs)("li",{className:"list__item",children:[(0,i.jsx)("p",{children:"Любые сложные вложенные объекты:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:l})]})]}),(0,i.jsx)("p",{children:"В рекурсивных типах должен быть способ остановиться, иначе тип станет бесконечным:"}),(0,i.jsx)(g.z,{lang:y.Pl.TYPESCRIPT,code:r})]})});V.displayName="RecursiveTypes";var K=n(6549);let G=()=>{let e=(0,l.useRef)(null),s=(0,l.useRef)(null),n=(0,l.useRef)(null),a=(0,l.useRef)(null),d=(0,l.useRef)(null),o=(0,l.useRef)(null),h=(0,l.useRef)(null),p=(0,l.useRef)(null),x=(0,l.useRef)(null),m=(0,l.useRef)(null),j=(0,l.useRef)(null),T=(0,l.useRef)(null),g=(0,l.useRef)(null),y=(0,l.useRef)(null),P=(0,l.useRef)(null),C=(0,l.useRef)(null),f=(0,l.useRef)(null),N=[{title:"Установка TypeScript",ref:e,component:u},{title:"Песочница TypeScript",ref:s,component:S},{title:"Типы данных и их типы",ref:n,component:I},{title:"Типизация функций",ref:T,component:A},{title:"Типы (Types)",ref:a,component:R},{title:"Интерфейсы (Interfaces)",ref:d,component:b},{title:"Литералы (Literal Types)",ref:g,component:w},{title:"Дженерики (Generics)",ref:o,component:_},{title:"Условные типы (Conditional Types)",ref:h,component:v},{title:"Сужение типов (Type Narrowing)",ref:p,component:k},{title:"Дискриминирующие объединения (Discriminated Unions)",ref:y,component:M},{title:"Маппинг типы (Mapped Types)",ref:C,component:D},{title:"Рекурсивные типы (Recursive Types)",ref:(0,l.useRef)(null),component:V},{title:"Встроенные типы (Utility Types)",ref:x,component:Y},{title:"Объектно-ориентированное программирование в TypeScript",ref:P,component:L},{title:"Типизация DOM и событий",ref:m,component:U},{title:"Типизация React",ref:j,component:z},{title:"Полезные ссылочки и всякое такое",ref:f,component:H}],E=(0,l.useMemo)(()=>N.map(({title:e,ref:s})=>({title:e,ref:s})),[]);return(0,i.jsxs)(r.o,{postConfig:t.KG[t.Zr.TYPESCRIPT_CHEATSHEET],heroConfig:{size:c.Xd.SMALL,pattern:c.Uy.ARCS},children:[(0,i.jsx)(K.M,{items:E,strictLanguage:t.KG[t.Zr.TYPESCRIPT_CHEATSHEET].language,hideNumbers:!0,showOnScroll:!0}),N.map(e=>(e=>{let{ref:s,component:n}=e;return(0,i.jsx)(n,{ref:s})})(e))]})}}},e=>{e.O(0,[230,867,459,577,109,636,593,792],()=>e(e.s=21173)),_N_E=e.O()}]);