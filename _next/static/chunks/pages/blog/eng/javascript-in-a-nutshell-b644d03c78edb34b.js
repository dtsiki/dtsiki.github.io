(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{336:e=>{e.exports={code_snippet:"CodeSnippet_code_snippet__EDJgC"}},5351:(e,s,n)=>{"use strict";n.d(s,{z:()=>h});var t=n(37876),o=n(28948),i=n(14232),a=n(78984),l=n(99342),c=n.n(l),r=n(336),d=n.n(r);let h=({lang:e,code:s,name:n,customName:l,consoleLog:r,hideLines:h=!1})=>{let m=((e=!0)=>{let s=(0,i.useContext)(a.M),n=(0,i.useRef)(null);if(!s)throw Error("useCodeSnippetNumber must be used within a <CodeSnippetProvider>");return e&&null===n.current&&(s.counterRef.current+=1,n.current=s.counterRef.current),n.current})(c()(n)&&c()(l)),x=n??`snippet(${m})`;return(0,t.jsx)("div",{className:"spacer bottom small",children:(0,t.jsx)("div",{className:d().code_snippet,children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col col--100",children:(0,t.jsx)(o.Cy,{language:e,name:x,customName:l,code:s,isTerminal:h,consoleLog:r})})})})})}},9095:e=>{e.exports={external_link:"ExternalLink_external_link__91aO2",external_link__icon:"ExternalLink_external_link__icon__u3FgC"}},12062:(e,s,n)=>{"use strict";n.d(s,{G:()=>r});var t=n(37876),o=n(15039),i=n.n(o),a=n(9399),l=n(9095),c=n.n(l);let r=({href:e,label:s})=>{let n=i().bind(c());return(0,t.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:n(["link",c().external_link]),children:[s,(0,t.jsx)(a.li,{className:c().external_link__icon})]})}},28948:(e,s,n)=>{"use strict";n.d(s,{Pl:()=>d,Cy:()=>g});var t=n(37876),o=n(15039),i=n.n(o),a=n(43747),l=n(14232),c=n(16686),r=n(26457);let d={PLAINTEXT:"plaintext",HTML:"html",CSS:"css",JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",REACT:"react",SCSS:"scss",BASH:"bash",JSON:"json"},h={[d.HTML]:"HTML",[d.CSS]:"CSS",[d.JAVASCRIPT]:"JS",[d.TYPESCRIPT]:"TS",[d.REACT]:"TSX",[d.SCSS]:"SCSS",[d.JSON]:"JSON",[d.PLAINTEXT]:"",[d.BASH]:""};var m=n(78261),x=n(40502),p=n(9399),u=n(78196),y=n(58411),j=n.n(y);let g=e=>{let{name:s,customName:n,code:o,language:y,showOnlyCode:g=!1,showLineNumbers:f=!0,startingLineNumber:_,isTerminal:v=!1,isNameUppercase:b=!1,consoleLog:w}=e,A=i().bind(j()),{translate:T}=(0,m.W)(),[S,N]=(0,l.useState)(!1),k=()=>{navigator.clipboard.writeText(o),N(!0),setTimeout(()=>{N(!1)},5e3)};return(0,t.jsx)("div",{className:j().code,children:g?(0,t.jsxs)("div",{className:j().code__highlighter,children:[(0,t.jsx)("div",{className:j().code__actions,children:(0,t.jsx)("button",{className:j().code__control,onClick:k,"aria-label":T(x.x_),children:S?(0,t.jsx)(c.f,{}):(0,t.jsx)(p.LE,{})})}),(0,t.jsx)(a.A,{startingLineNumber:_,language:y?.toLocaleLowerCase()||"plaintext",showLineNumbers:f,style:r.C5,children:o})]}):(0,t.jsxs)("div",{className:j().code__wrapper,children:[(0,t.jsxs)("div",{className:j().code__header,children:[(0,t.jsxs)("div",{className:A([j().code__name,{[j().uppercase]:b}]),children:[v?(0,t.jsx)(p.q7,{useMini:!0,className:j().code__icon}):(0,t.jsx)(p.RO,{useMini:!0,className:j().code__icon}),y!==d.BASH&&n||y&&s&&`${s}.${h[y].toLocaleLowerCase()}`]}),(0,t.jsx)("div",{className:j().code__actions,children:(0,t.jsx)("button",{className:j().code__control,onClick:k,"aria-label":T(x.x_),children:S?(0,t.jsx)(c.f,{}):(0,t.jsx)(p.LE,{})})})]}),(0,t.jsxs)("div",{className:j().code__body,children:[(0,t.jsx)(a.A,{language:y?.toLocaleLowerCase()||"plaintext",showLineNumbers:!v&&f,wrapLines:!0,style:r.C5,children:o}),w&&(0,t.jsx)("div",{className:j().code__console,children:(0,t.jsx)(u.R,{code:w,showConsole:!0,isCopyable:!0,isEmbedded:!0})})]})]})})}},32688:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>J});var t=n(37876),o=n(56410),i=n(83577),a=n(27689),l=n(37339),c=n(78165),r=n(28948),d=n(5351),h=n(84390);let m=()=>{let e=`const something = ['yay', 'qeq', 'uou'];

console.log(typeof something);`,s=`const something = [];
console.log(something);

something[0]= 'yay';
something[1]= 'qeq';
something[2]= 'uou';

console.log(something);`,n=`> []
> ["yay","qeq","uou"]`,o=`const something = ['yay', 'qeq', 'uou'];

console.log(something[0]);
console.log(something[1]);
console.log(something[2]);
console.log(something[3]);
`,i=`> "yay"
> "qeq"
> "uou"
> undefined`,a=`const something = ['yay', 'qeq', 'uou'];

console.log(something);

something[3] = 'kek';

console.log(something);`,l=`> ["yay","qeq","uou"]
> ["yay","qeq","uou", "kek"]`,m=`const something = ['yay', 'qeq', 'uou'];

console.log(something.length);`;return(0,t.jsxs)(c.n,{title:"Arrays",children:[(0,t.jsx)("p",{children:"In JavaScript arrays are objects that represent a collection of elements:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)(h.k,{code:'> "object"'}),(0,t.jsx)("p",{children:"There are two ways to create an array:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsxs)("div",{className:"list__title",children:["using an array literal ",(0,t.jsx)("code",{children:"[]"}),":"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)("p",{children:"It's apparent to create an empty array and then provide the elements:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsx)(h.k,{code:n})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsxs)("div",{className:"list__title",children:["using the ",(0,t.jsx)("code",{children:"new"})," keyword:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:"const something = new Array('yay', 'qeq', 'uou');"})]})]}),(0,t.jsxs)("p",{className:"note spacer top medium",children:[(0,t.jsx)("span",{className:"note__title",children:"Note: "}),"it's a common practice to declare arrays with ",(0,t.jsx)("code",{children:"const"})," keyword."]}),(0,t.jsx)("p",{className:"spacer top medium",children:"JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:o}),(0,t.jsx)(h.k,{code:i}),(0,t.jsx)("p",{className:"spacer top medium",children:"JavaScript arrays can be with mixed data types:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:"const something = new Array('yay', 42, true);"}),(0,t.jsx)("p",{className:"spacer top medium",children:"JavaScript arrays are resizable: we can dynamically add or remove its elements:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a}),(0,t.jsx)(h.k,{code:l}),(0,t.jsxs)("p",{className:"spacer top medium",children:["To find the length of an array use the ",(0,t.jsx)("code",{children:"length"})," property:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:m}),(0,t.jsx)(h.k,{code:"> 3"})]})},x=()=>{let e=`const something = ['yay', 'qeq', 'uou'];

console.log(Array.isArray(something));`,s=`const something = ['yay', 'qeq', 'uou'];

console.log(something.includes(42));
console.log(something.includes('yay'));`,n=`> false
> true`,o=`const something = ['yay', 'qeq', 'uou'];

console.log(something.indexOf(42));
console.log(something.indexOf('yay'));
console.log(something.indexOf('uou'));`,i=`> -1
> 0
> 2`,a=`const something = ['yay', 'qeq', 'uou', 'yay', 'kek'];

console.log(something.lastIndexOf(42));
console.log(something.lastIndexOf('yay'));`,l=`> -1
> 3`,m=`const something = ['yay', 'qeq', 'uou', 'yay', 'kek'];

const somethingElse = something.map((item) => {
  console.log('do something with: ', item);

  return item.toUpperCase();
});

console.log(something);
console.log(somethingElse);`,x=`> "do something with: yay"
> "do something with: qeq"
> "do something with: uou"
> "do something with: yay"
> "do something with: kek"
> ["yay","qeq","uou","yay","kek"] // something
> ["YAY","QEQ","UOU","YAY","KEK"] // somethingElse `,p=`const something = ['yay', 'qeq', 'uou', 'yay', 'kek'];

const somethingElse = something.map((item) => {
  console.log('do something with: ', item);
});

console.log(something);
console.log(somethingElse);`,u=`> "do something with: yay"
> "do something with: qeq"
> "do something with: uou"
> "do something with: yay"
> "do something with: kek"
> ["yay","qeq","uou","yay","kek"] // something
> [undefined, undefined, undefined, undefined, undefined] // somethingElse`,y=`const something = [7, 16, 10, 42];

const somethingElse = something.filter((item) => {
  return item >= 42;
});

console.log(something);
console.log(somethingElse);`,j=`> [7, 16, 10, 42]
> [42]`,g=`const something = ['yay', 'qeq', 'uou', 'yay', 'kek']

const somethingElse = something.forEach((item) => {
  console.log(item);
});

console.log(something);
console.log(somethingElse);`,f=`> "yay"
> "qeq"
> "uou"
> "yay"
> "kek"
> ["yay","qeq","uou","yay","kek"] // something
> undefined // somethingElse`;return(0,t.jsxs)(c.n,{title:"Arrays methods",children:[(0,t.jsx)("p",{children:"Let's see the list of JavaScript array methods and that they do:"}),(0,t.jsxs)("ul",{className:"list markered",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"isArray()"})}),(0,t.jsx)("p",{children:"It tests if the given array is an array:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)(h.k,{code:"> true"})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"includes()"})}),(0,t.jsx)("p",{children:"It checks whether the given array contains the specified element:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsx)(h.k,{code:n})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"indexOf()"})}),(0,t.jsx)("p",{children:"It searches the specified element in the given array and returns the index of the first match:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:o}),(0,t.jsxs)("p",{className:"spacer top medium",children:["It returns ",(0,t.jsx)("code",{children:"-1"})," value if the given element not present in the array."]}),(0,t.jsx)(h.k,{code:i})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"lastIndexOf()"})}),(0,t.jsxs)("p",{children:["It's similar to ",(0,t.jsx)("code",{children:"indexOf"}),", but it searches the specified element in the given array and returns the index of the last match:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a}),(0,t.jsx)(h.k,{code:l})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"map()"})}),(0,t.jsxs)("p",{children:["It's probably one of the most popular methods in JavaScript - the ",(0,t.jsx)("code",{children:"map()"})," method. It calls the specified function for every array element and returns the new array:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:m}),(0,t.jsx)("p",{children:"In the code snippet above every element of the array converted to uppercase. This method is a copying method: the original array remains the same."}),(0,t.jsx)(h.k,{code:x}),(0,t.jsxs)("p",{children:["If nothing is returned in an callback function it will automatically return ",(0,t.jsx)("code",{children:"undefined"})," value:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:p}),(0,t.jsx)(h.k,{code:u})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"filter()"})}),(0,t.jsxs)("p",{children:["It's probably another one of the most popular methods in JavaScript - the ",(0,t.jsx)("code",{children:"filter()"})," method. It's similar to the ",(0,t.jsx)("code",{children:"map()"})," method mentioned above. It returns the new array containing the elements that pass the provided ",(0,t.jsx)("strong",{children:"condition"}),"."]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:y}),(0,t.jsx)("p",{children:"In the code snippet above every element of the array converted to uppercase. This method is also a copying method: the original array remains the same."}),(0,t.jsx)(h.k,{code:j}),(0,t.jsx)("p",{children:"An empty array will be returned if no elements pass the condition."})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"forEach()"})}),(0,t.jsxs)("p",{children:["It's similar to the ",(0,t.jsx)("code",{children:"map()"})," method mentioned above. The difference between these two methods is that the ",(0,t.jsx)("code",{children:"map()"})," creates a new array:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:g}),(0,t.jsx)(h.k,{code:f})]})]})]})},p=()=>{let e=`async function doSomethingAsync() {
  // do something async here
}`,s=`const doSomethingAsync = async() => {
  // do something async here
};`;return(0,t.jsxs)(c.n,{title:"Async and await",children:[(0,t.jsxs)("p",{children:["How to handle asynchronous code in JavaScript? One way is to use the ",(0,t.jsx)("code",{children:"async"})," and ",(0,t.jsx)("code",{children:"await"})," ","keywords which allow to write asynchronous code in a synchronous-looking style."]}),(0,t.jsxs)("p",{children:["To define an async function just add ",(0,t.jsx)("code",{children:"async"})," keyword:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)("p",{className:"spacer top medium",children:"Async functions may also be defined as expressions:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsxs)("p",{children:["Async functions can contain zero or more ",(0,t.jsx)("code",{children:"await"})," expressions. The ",(0,t.jsx)("code",{children:"await"})," keyword make functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. That's why is calling an async function will always return a ",(0,t.jsx)("code",{children:"Promise"}),"."]}),(0,t.jsxs)("p",{className:"note spacer top medium",children:[(0,t.jsx)("span",{className:"note__title",children:"Keep in mind: "}),"the ",(0,t.jsx)("code",{children:"await"})," keyword is only valid inside async functions. If use it outside of an async function, we will get a ",(0,t.jsx)("code",{children:"SyntaxError"}),"."]})]})};var u=n(54666);let y=()=>{let e=`<button onclick="doSomething()">
  Do something
</button>`,s=`setInterval(() => {
  console.log('yay');
}, 1000);

function doSomething() {
  console.log('qeq');
}`,n=`> "yay"
> "yay"
> "yay"
> "qeq"
> "yay"
> "yay"`;return(0,t.jsxs)(c.n,{title:"Asynchronous JavaScript",children:[(0,t.jsx)("p",{children:"Synchronous programming is a programming model where operations take place sequentially step by step:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:"const yay = 'yay';\nconst qeq = 'qeq';\nconst yayQeq = `${yay} ${qeq}`;"}),(0,t.jsxs)("p",{className:"spacer top medium",children:["This code above declares a string called ",(0,t.jsx)("code",{children:"yay"}),", then declares a string called ",(0,t.jsx)("code",{children:"qeq"})," and then declares another string called ",(0,t.jsx)("code",{children:"yayQeq"}),", which uses ",(0,t.jsx)("code",{children:"yay"})," and ",(0,t.jsx)("code",{children:"qeq"}),". In other words, the browser steps through this code one line at a time in the order it was written."]}),(0,t.jsxs)("p",{children:["What if the synchronous function takes a long time? If any function will execute too long or will be"," ",(0,t.jsx)("code",{children:"long-running"}),", the whole program can be completely unresponsive: you cannot type anything, click anything or do anything else. There are asynchronous functions to address this issue."]}),(0,t.jsx)("p",{className:"spacer bottom medium",children:"With asynchronous programming, JavaScript programs can start long-running tasks and continue running other tasks in paralell."}),(0,t.jsx)(o.W,{fileTitle:"async.jpg",src:"/assets/blog/frontend-in-a-nutshell/javascript/async.png",alt:"Knock knock. Race condition. Who is there?",maxWidth:500}),(0,t.jsxs)("p",{className:"spacer top large",children:["Mentioned earlier ",(0,t.jsx)("code",{children:"setTimeout()"})," and ",(0,t.jsx)("code",{children:"setInterval()"})," methods are the only native functions of the JavaScript to execute code asynchronously. What does it mean? Asynchronous functions are not block the JavaScript main thread. Check out the example below. There is a button that do something. There is also inteval timer starts which executes ",(0,t.jsx)("code",{children:"console.log()"})," once every second. If a non-asynchronous function were used in the example below we cannot click on this button: it would be blocked by execution of the non-asynchronous function."]}),(0,t.jsx)(u.k,{name:["index","index"],code:[e,s],lang:[r.Pl.HTML,r.Pl.JAVASCRIPT]}),(0,t.jsxs)("p",{children:["But the asynchronous function ",(0,t.jsx)("code",{children:"setInterval()"})," is used here and we can see the following output if we click on the button:"]}),(0,t.jsx)(h.k,{code:n}),(0,t.jsxs)("p",{children:["By default, JavaScript is a synchronous and single threaded programming language. What are we supposed to do, if we need to fetch some large amount of data from a backend and then display it on our web page? With the help of callbacks, ",(0,t.jsx)("code",{children:"async/await"})," and promises, JavaScript is used to do asynchronous programming."]})]})},j=()=>{let e=`setTimeout(() => {
  console.log('yay');
}, 1000);`;return(0,t.jsxs)(c.n,{title:"Callbacks",children:[(0,t.jsx)("p",{children:"A callback is a function that is passed inside another function, and then called in that function to perform a task. You've already faced with callbacks."}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{className:"spacer top medium",children:["The ",(0,t.jsx)("code",{children:"setTimeout()"})," is a JavaScript function that takes two parameters: an another function and time in milliseconds after which that function should be executed. So ",(0,t.jsx)("code",{children:"console.log('yay')"})," is actually the callback in the example above."]}),(0,t.jsx)("p",{className:"spacer bottom medium",children:"Using callbacks was very efficient, but only to a certain point (e.g. using synchronous callbacks is still normal practice) and now using asynchronous callbacks is a bad practice. If synchronous callbacks are ways to achieve greater programming flexibility, then asynchronous callbacks are ways to achieve greater performance and user experience. The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell."}),(0,t.jsx)(o.W,{src:"/assets/blog/frontend-in-a-nutshell/javascript/callback-hell.jpg",alt:"Callback hell",fileTitle:"callback-hell.jpg",maxWidth:500}),(0,t.jsxs)("p",{className:"spacer top large",children:["To fix this problem ",(0,t.jsx)("em",{children:"promises"})," were introduced."]})]})},g=()=>{let e=`let name = "yay";

function doSomething() {
  console.log("Hey, " + name);
}

name = "qeq";

doSomething();`,s=`function doSomething() {
  let name = "yay";

  return function() {
    console.log(name);
  };
}

let name = "qeq";

let do = doSomething();

do();`;return(0,t.jsxs)(c.n,{title:"Closures",children:[(0,t.jsx)("p",{className:"spacer bottom medium",children:"A closure is a function having access to the parent scope. In other words, a closure gives access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created at function creation time. It might seem, at first, that closures are not so common, but:"}),(0,t.jsx)(o.W,{fileTitle:"EVERYWHERE!.jpg",src:"/assets/blog/frontend-in-a-nutshell/javascript/closures.jpg",alt:"A toy story meme: Buzz is saying to Woddy that closures everywhere",maxWidth:500}),(0,t.jsx)("p",{children:"An example of simple closure is demonstrated in the example below:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{className:"spacer top medium",children:["What result will output the code above: ",(0,t.jsx)("em",{children:"Hey, yay"})," or ",(0,t.jsx)("em",{children:"Hey, qeq"}),"?"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:'> "Hey, qeq"'}),(0,t.jsxs)("p",{className:"spacer top medium",children:["The ",(0,t.jsx)("code",{children:"doSomething"})," function uses an external variable ",(0,t.jsx)("code",{children:"name"}),". A function uses only the most recent value ",(0,t.jsx)("code",{children:"qeq"})," and old variable value ",(0,t.jsx)("code",{children:"yay"})," is not saved anywhere. When a function wants a variable it takes the ",(0,t.jsx)("strong",{children:"current"})," value from its own lexical environment or the outer one. If the ",(0,t.jsx)("code",{children:"name"})," variable was declared inside the ",(0,t.jsx)("code",{children:"doSomething"})," function the code below will output ",(0,t.jsx)("code",{children:"Hey, yay"})," because the function used value from its own own lexical environment."]}),(0,t.jsxs)("p",{children:["Let's look at another example of closure. The function ",(0,t.jsx)("code",{children:"doSomething"})," create another function and returns it. Then this new function can be called. What result will output the code snippet below?"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsxs)("p",{className:"spacer top medium",children:["The answer is ",(0,t.jsx)("code",{children:"yay"}),"!"]}),(0,t.jsx)(h.k,{code:s}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("code",{children:"do"})," function in the code above gets name from the place of its origin through the outer lexical environment reference."]})]})};var f=n(12062);let _=()=>(0,t.jsx)(c.n,{title:"Event loop",children:(0,t.jsxs)("p",{className:"spacer bottom medium",children:["I'm not sure I can say it any better on this topic:"," ",(0,t.jsx)(f.G,{href:"https://www.youtube.com/watch?v=8aGhZQkoFbQ",label:"[Youtube]: What the heck is the event loop anyway? | Philip Roberts"})]})}),v=()=>{let e=`function doSomething() {
  console.log('yay');
}

doSomething();`,s=`function getAnswerToLifeTheUniverseAndEverything() {
  return 42;
}

console.log(getAnswerToLifeTheUniverseAndEverything());`,n=`doSomething();

function doSomething() {
  console.log('yay');
  console.log('qeq');
}`,i=`> "yay"
> "qeq"`,a=`const doSomething = function() {
  console.log('yay');
};

doSomething();`,l=`const calculate = function getAnswerToLifeTheUniverseAndEverything() {
  return 42;
};

const result = calculate(); // 42
getAnswerToLifeTheUniverseAndEverything(); // ReferenceError: getAnswerToLifeTheUniverseAndEverything is not defined`,m=`doSomething();

var doSomething = function () {
  console.log('yay');
};`,x=`(function () {
  console.log('Yay!');
})();`,p=`const doSomething = () => {
  console.log('yay!');
}`,u=`function doSomething() {
  console.log('yay');

  function doSomethingElse() {
    console.log('qeq');
  }
}

doSomething();`,y=`> "yay"
> "qeq"`,j=`(function () {
  console.log('yay');

  (function () {
    console.log('qeq');
  })();
})();`,g=`> "yay"
> "qeq"`;return(0,t.jsxs)(c.n,{title:"Functions",children:[(0,t.jsx)("p",{children:"JavaScript provides functions similar to most of the languages. A function is a block of code designed to perform a particular task. All the functions in JavaScript can use arguments object by default or may not have any arguments."}),(0,t.jsx)("p",{children:"To create a function in JavaScript we can use different approaches:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"function declaration"}),(0,t.jsxs)("p",{children:["A function created with a function declaration is a ",(0,t.jsx)("code",{children:"Function"})," object and has all its properties, methods and behavior of ",(0,t.jsx)("code",{children:"Function"})," objects."]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{children:["Functions declared with function declaration return ",(0,t.jsx)("code",{children:"undefined"})," value by default. To return any other value, the function must have a return statement:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsx)(h.k,{code:"> 42"}),(0,t.jsx)("p",{children:"Furthermore, function declarations in JavaScript are hoisted to the top of the enclosing function or global scope:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n}),(0,t.jsx)("p",{children:"In the terminal you will find the following output after executing this code snippet. As you can see, any statements that operate on a function still run in normal order."}),(0,t.jsx)(h.k,{code:i})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"function expression"}),(0,t.jsx)("p",{children:"A function expression is very similar to a function declaration. Here's the code snippet of an unnamed function declaration:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a}),(0,t.jsx)(h.k,{code:'> "yay"'}),(0,t.jsx)("p",{children:"The main difference between function expressions and function declarations is the function name: JavaScript allows to assign a function to a variable and then use that variable as a function:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:l}),(0,t.jsx)("p",{children:"Function expressions, unlike function declarations, are not hoisted:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:m}),(0,t.jsx)(h.k,{code:"> TypeError: doSomething is not a function "}),(0,t.jsx)("p",{className:"spacer top medium",children:"A function expression can be used as an IIFE or Immediately Invoked Function Expression which runs as soon as it is defined."}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:x})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"arrow function expression"}),(0,t.jsx)("p",{children:"An arrow function expression is a alternative to a regular function expression:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:p}),(0,t.jsx)("p",{className:"spacer top medium",children:"Arrow functions can have a concise body:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:"const doSomething = () => console.log('yay!');"}),(0,t.jsxs)("p",{children:["Arrow functions don't have their own bindings to ",(0,t.jsx)("code",{children:"this"}),", ",(0,t.jsx)("code",{children:"arguments"}),", or"," ",(0,t.jsx)("code",{children:"super"}),". Also they should not be used as methods. Arrow functions cannot be used as constructors too. Calling them with new throws a ",(0,t.jsx)("code",{children:"TypeError"}),"."]})]})]}),(0,t.jsx)(o.W,{fileTitle:"javascript-is-awesome.jpg",src:"/assets/blog/frontend-in-a-nutshell/javascript/functions.jpg",alt:"Tuxedo Winnie The Pooh meme but JavaScript functions",maxWidth:600}),(0,t.jsx)("p",{children:"Functions in JavaScript can be nested:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:u}),(0,t.jsx)(h.k,{code:y}),(0,t.jsx)("p",{children:"This applies to all types of functions:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:j}),(0,t.jsx)(h.k,{code:g})]})},b=()=>{let e=`doSomething();

function doSomething() {
  console.log('yay');
  console.log('qeq');
}`,s=`> "yay"
> "qeq"`,n=`doSomething();

const doSomething = () => {
  console.log('yay');
}`,o=`doSomething();

var doSomething = () => {
  console.log('yay');
}`,i=`doSomething();

var doSomething = undefined;`;return(0,t.jsxs)(c.n,{title:"Hoisting",children:[(0,t.jsx)("p",{children:"Below is an example of classical hoisting. Here you can see calling a function before defining it."}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)("p",{children:"In the terminal you will find the following output after executing this code snippet. Everything works fine. But how?"}),(0,t.jsx)(h.k,{code:s}),(0,t.jsxs)("p",{className:"spacer top medium",children:["The reason is hoisting. Hoisting is a JavaScript mechanism where variables and function"," ",(0,t.jsx)("strong",{children:"declarations"})," are moved to the top of their scope before code execution. Javascript statements are executed in the order they appear. In other words, JavaScript executes code from top to bottom. That is until hoisting get involved into game. Function declaration statements are always hoisted to their containing scope, so their functions exist even before the statements appear. But any statements that operate on a function still run in normal order. Unfortunately, it doesn't apply to anonymous functions or arrow functions because we cannot call them before initialization:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n}),(0,t.jsxs)("p",{children:["In the terminal you will find the following output after executing the code snippet above. We will get exactly the same result for arrow function with ",(0,t.jsx)("code",{children:"let"})," keyword."]}),(0,t.jsx)(h.k,{code:"> ReferenceError: can't access lexical declaration 'doSomething' before initialization"}),(0,t.jsxs)("p",{className:"spacer top medium",children:["But there is trick for ",(0,t.jsx)("code",{children:"var"})," arrow function:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:o}),(0,t.jsx)(h.k,{code:"> TypeError: doSomething is not a function"}),(0,t.jsxs)("p",{className:"spacer top medium",children:["Why that happened? Variable declarations using ",(0,t.jsx)("code",{children:"var"})," keyword are also hoisted, are not? This occurs because variable assignments actually are not hoisted. The ",(0,t.jsx)("code",{children:"var doSomething"})," variable will contain"," ",(0,t.jsx)("code",{children:"undefined"})," until the line of code that does the assignment is executed. In other words, the code snipper below is equal the code snippet above:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:i}),(0,t.jsx)(h.k,{code:"> TypeError: doSomething is not a function"})]})},w=()=>{let e=`let yay = 42;
yay = 'yay';
yay = true;`,s=`console.log(typeof 'yay'); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"`,n=`let yay = {
  id: 42,
  name: 'yay',
  isAwesome: true
};

console.log(typeof yay); // "object"`,i=`let yay = 'Yay!';

console.log(typeof yay); // "string"`,a=`let yay = 42;
let qeq = 42.42;

console.log(typeof yay); // "number"
console.log(typeof qeq); // "number"`,l=`let yay = 42n;

console.log(typeof yay); // "bigint"`,h=`let isAwesome = true;

console.log(typeof isAwesome); // "boolean"`,m=`let yay = Symbol('✨');
let qeq = Symbol('✨');

console.log(yay === qeq); // false
console.log(yay === qeq); // false

console.log(typeof yay); // "symbol";
console.log(typeof qeq); // "symbol";`;return(0,t.jsxs)(c.n,{title:"What are data types in JavaScript?",children:[(0,t.jsxs)("p",{children:["First at all, JavaScript is a dynamic language with dynamic types. Variables are not directly associated with any type and can be assigned or reassigned at any moment. In the example below a variable ",(0,t.jsx)("code",{children:"yay"})," was initialized with one type, then it was reassigned twice by modifying the value. What are these types?"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{className:"spacer top medium",children:["There are only two kind of data types in JavaScript: primitive and reference data types. Primitive types are pretty simple as the name suggests. They are so simple that they don't have methods. Wait, stop - you might say, strings actually have methods! In fact, JavaScript converts primitive types to objects (it's called"," ",(0,t.jsx)("em",{children:"Object wrapper"}),"), so this is why it is possible to use string object methods."]}),(0,t.jsxs)("div",{className:"note spacer bottom large",children:[(0,t.jsx)("div",{className:"note__title",children:"typeof operator"}),(0,t.jsxs)("p",{children:["We can use ",(0,t.jsx)("code",{children:"typeof"})," operator to find the data type of JavaScript variables. If we use this operator along with each of primitive type, it will return a type of the same name:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s})]}),(0,t.jsx)("p",{children:"There are 7 primitive types in JavaScript:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"string"}),(0,t.jsx)("div",{className:"list__footer spacer bottom medium",children:"represents any textual data"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:i})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"number"}),(0,t.jsx)("div",{className:"list__footer spacer bottom medium",children:"represents an integer or a floating-point number"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"bigInt"}),(0,t.jsx)("div",{className:"list__footer spacer bottom medium",children:"represents an integer with arbitrary precision"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:l})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"boolean"}),(0,t.jsx)("div",{className:"list__footer spacer bottom medium",children:"represents one of two values: true or false"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:h})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:"symbol"}),(0,t.jsx)("div",{className:"list__footer spacer bottom medium",children:"represents a unique identifier. Every symbol has its own identity and will never be equal even if they have same name"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:m})]}),(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"null"})}),(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"undefined"})})]}),(0,t.jsxs)("p",{children:["The difference between ",(0,t.jsx)("code",{children:"null"})," and ",(0,t.jsx)("code",{children:"undefined"})," data types is barely perceptible and deserves special attention that you can find in the section below."]}),(0,t.jsxs)("p",{children:["All these types, except ",(0,t.jsx)("code",{children:"null"})," and ",(0,t.jsx)("code",{children:"undefined"}),", have their corresponding object wrapper types or class, for example: ",(0,t.jsx)("code",{children:"number"})," - ",(0,t.jsx)("code",{children:"Number"}),", ",(0,t.jsx)("code",{children:"string"})," -"," ",(0,t.jsx)("code",{children:"String"}),", etc. As a result, these object wrappers provide us methods for primitive types, for exampe"," ",(0,t.jsx)("code",{children:"toUpperCase()"})," for numbers or ",(0,t.jsx)("code",{children:"toLowerCase()"})," for strings."]}),(0,t.jsxs)("p",{className:"spacer top medium",children:["And, last but not least, objects are JavaScript data types. While primitive types can contain only a single thing, objects are used to store collections of key-value pairs.",(0,t.jsx)("code",{children:"typeof object"})," command always returns ",(0,t.jsx)("code",{children:"object"}),"."]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n}),(0,t.jsxs)("p",{className:"spacer top bottom medium",children:["Arrays in JavaScript are a special type of objects. ",(0,t.jsx)("code",{children:"typeof"})," operator in JavaScript also returns"," ",(0,t.jsx)("code",{children:"object"})," for arrays:"]}),(0,t.jsx)("p",{className:"spacer bottom medium",children:"Thus, almost everything in JavaScript is an object. In fact, only six things are not objects: null , undefined , strings, numbers, boolean, and symbols. Object wrappers, thanks for that!"}),(0,t.jsx)(o.W,{fileTitle:"THIS-IS-AN-OBJECT!.jpg",src:"/assets/blog/frontend-in-a-nutshell/javascript/everything-is-object.png",alt:"Sparta meme but everything is an object in JavaScript",maxWidth:400})]})},A=()=>(0,t.jsxs)(c.n,{title:"Mutable and immutable",children:[(0,t.jsx)("p",{children:"A mutable object is an object whose state can be modified after it is created. An immutable object is an object whose state cannot be changed once the object is created."}),(0,t.jsxs)("p",{children:["In JavaScript only ",(0,t.jsx)("code",{children:"objects"})," and ",(0,t.jsx)("code",{children:"arrays"})," are mutable, primitive data types are immutable. Let's break it down."]}),(0,t.jsxs)("p",{className:"spacer bottom medium",children:["There are two data types in JavaScript: primitive types (",(0,t.jsx)("code",{children:"string"}),", ",(0,t.jsx)("code",{children:"number"}),","," ",(0,t.jsx)("code",{children:"boolean"}),", etc) and non-primitive or reference data type (",(0,t.jsx)("code",{children:"object"}),"). Primitive types are stored on the ",(0,t.jsx)("code",{children:"stack"})," memory. When storing a Primitive type in memory, it adds an element to the top of the stack with this value of the newly created variable, in other words last in, first out (LIFO). When we create a new variable and assigned the first one to the new one, it adds a new element on top of the stack with the value of the new variable. Reference types are stored on the ",(0,t.jsx)("code",{children:"heap"}),". It, indifference from the"," ",(0,t.jsx)("code",{children:"stack"}),", has no order of how to store the data. When storing a reference type in memory, it adds a new element to the top of the stack when its value is a reference to the address of the object that has been stored on the heap."]}),(0,t.jsx)("p",{children:"Each time a primitive type is created, a new element gets into the top of the stack and stores the data of that variable. On the other hand, when create a reference data type, a new element gets into the top of the stack, but this time it stores its poitner to the address location of the object in the heap. Then, when we assign the created object to a new object variable a new element gets into the top of the stack but with the same pointer to the first object."})]}),T=()=>{let e=`let yay;

console.log(yay); // undefined
console.log(typeof yay); // "undefined"`,s=`let yay = null;

console.log(yay); // null
console.log(typeof yay); // "object"`;return(0,t.jsxs)(c.n,{title:"What is the difference between null and undefined?",children:[(0,t.jsx)(o.W,{src:"/assets/blog/frontend-in-a-nutshell/javascript/null-and-undefined.jpg",alt:"Spider-Man (null) pointing at Spider-Man (undefined)",fileTitle:"null-and-undefined.jpg",maxWidth:400}),(0,t.jsxs)("p",{className:"spacer medium top",children:["The difference between ",(0,t.jsx)("code",{children:"null"})," and ",(0,t.jsx)("code",{children:"undefined"})," data types is barely perceptible and deserves special attention."]}),(0,t.jsxs)("p",{children:["Type ",(0,t.jsx)("code",{children:"undefined"})," represents the absence of a variable itself:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{className:"spacer top medium",children:["While ",(0,t.jsx)("code",{children:"undefined"})," data type indicates the absence of a value, ",(0,t.jsx)("code",{children:"null"})," data type indicates the absence of an object. That's why ",(0,t.jsx)("code",{children:"typeof null"})," will return as result ",(0,t.jsx)("code",{children:"object"})," ","type."]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsx)("p",{className:"spacer bottom medium",children:"This means that there is literally nothing here."}),(0,t.jsx)(o.W,{src:"/assets/blog/frontend-in-a-nutshell/javascript/confused-travolta.gif",alt:"Confused Travolta is trying to find a null variable value",fileTitle:"null.jpg",maxWidth:400}),(0,t.jsxs)("p",{className:"spacer bottom medium",children:["The difference between ",(0,t.jsx)("code",{children:"null"})," and ",(0,t.jsx)("code",{children:"undefined"})," can be easily explained with toilet tissue holder:"]}),(0,t.jsx)(o.W,{src:"/assets/blog/frontend-in-a-nutshell/javascript/toilet-tissue-holder.png",alt:"JavaScript data types explained with toilet tissue holder",fileTitle:"toilet-tissue-holder.jpg",maxWidth:500})]})},S=()=>{let e=`const promise = new Promise(function(resolve, reject) {
  // executor
});`,s=`let promise = new Promise(function(resolve, reject) {
  resolve('yay');

  reject(new Error('Error')); // ignored

  setTimeout(() => resolve('qeq')); // ignored
});`,n=`new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  console.log(result);

  return result * 2;

}).then(function(result) {

  console.log(result);

  return result * 2;

}).then(function(result) {

  console.log(result);

  return result * 2;
}).finally(() => {
  console.log("All done")
)};`,o=`> 1
> 2
> 4
> "I am done"`,i=`const promise = new Promise(function(resolve, reject) {
  resolve('I am done');
});

promise.then((result) => {
  console.log(result);
});`,a=`const promise = new Promise(function(resolve, reject) {
  reject(new Error('Something went wrong'));
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });`;return(0,t.jsxs)(c.n,{title:"Promises",children:[(0,t.jsx)("p",{children:"Promises came along to solve the problems of callback functions. Promise is a special JavaScript object which contains its state and produces a value after some asynchronous operation completes successfully or unsuccessfully. This promise's state can be:"}),(0,t.jsx)("ul",{className:"list markered",children:[{title:"pending",description:"while the state is pending the result is undefined"},{title:"fulfilled",description:"when the state is fulfilled the result is a value"},{title:"rejected",description:"when the state is rejected the result is an error object"}].map(e=>(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:e.title}),(0,t.jsx)("div",{className:"list__footer",children:e.description})]},e.title))}),(0,t.jsx)("p",{children:"Initially state is pending, then changes to either fulfilled when resolve is called or rejected when reject is called."}),(0,t.jsx)("p",{children:"The constructor syntax for a promise object is:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)("p",{className:"spacer top medium",children:"The function passed to new promise is called the executor. The executor performs a job, usually it is something that takes time."}),(0,t.jsxs)("p",{children:["Its arguments ",(0,t.jsx)("code",{children:"resolve"})," and ",(0,t.jsx)("code",{children:"reject"})," are callbacks provided by JavaScript itself. When the executor obtains the result, it should call one of these callbacks. Callback ",(0,t.jsx)("code",{children:"resolve(value)"})," will call if the job is finished successfully with result value:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:i}),(0,t.jsx)(h.k,{code:'> "I am done"'}),(0,t.jsxs)("p",{children:["Callback ",(0,t.jsx)("code",{children:"reject(error)"})," will call if an error has occurred, where error is the error object:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a}),(0,t.jsx)(h.k,{code:"> [Object error]"}),(0,t.jsx)("p",{children:"There can be only a single result: a value or an error. Here's the example:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsxs)("p",{className:"spacer top medium",children:["Promises can be chained as we touched above. JavaScript provide a couple of methods to do that:"," ",(0,t.jsx)("code",{children:"then"}),", ",(0,t.jsx)("code",{children:"catch"})," and ",(0,t.jsx)("code",{children:"finally"}),". All these methods, in its turn, return promises. The chain is composed of ",(0,t.jsx)("code",{children:"then"})," calls, and typically but not necessarily has a single"," ",(0,t.jsx)("code",{children:"catch"})," at the end and optionally followed by ",(0,t.jsx)("code",{children:"finally"}),". Promises chaining looks like this:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n}),(0,t.jsx)(h.k,{code:o}),(0,t.jsxs)("p",{children:["Apart from the handler methods ",(0,t.jsx)("code",{children:"then"}),", ",(0,t.jsx)("code",{children:"catch"})," and ",(0,t.jsx)("code",{children:"finally"}),", there are six static methods for handle multiple promises."]}),(0,t.jsx)("p",{children:"How can promises be used? In frontend, promises are often used for network requests."})]})},N=()=>{let e=`if (true) {
  var yay = 'yay';
}

console.log(yay); // "yay"`,s=`var yay;

if (true) {
  yay = 'yay';
}

console.log(yay); // "yay"`,n=`var yay = 'yay';

function doSomething() {
  var qeq = 'qeq';
}

console.log(yay); // "yay"
console.log(qeq); // ReferenceError: qeq is not defined`,o=`let yay = 'yay';

function doSomething() {
  let qeq = 'qeq';
}

console.log(yay); // "yay"
console.log(qeq); // ReferenceError: qeq is not defined`,i=`const yay = 'yay';

function doSomething() {
  const qeq = 'qeq';
}

console.log(yay); // "yay"
console.log(qeq); // ReferenceError: qeq is not defined`,a=`if (true) {
  let yay = 'yay';
}

console.log(yay); // ReferenceError: yay is not defined`,l=`if (true) {
  const yay = 'yay';
}

console.log(yay); // ReferenceError: yay is not defined`,h=`const yay = 'yay';
const yay = 42; // SyntaxError: redeclaration of const yay`,m=`const yay = 'yay';

if (true) {
  const yay = 42;
}

console.log(yay); // "yay"`;return(0,t.jsxs)(c.n,{title:"Scope",children:[(0,t.jsx)("p",{children:"Scope means where variables are available for use. There are three types of scope in JavaScript:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"Global scope"})}),(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"Block scope"})}),(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"Function scope"})})]}),(0,t.jsxs)("p",{children:["Mentioned above ",(0,t.jsx)("code",{children:"var"})," declarations are globally scoped. This means that any variable that is declared with ",(0,t.jsx)("code",{children:"var"})," outside a block is available for use in the whole window. Whoa!"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{className:"spacer top medium",children:["This occurs because ",(0,t.jsx)("code",{children:"var"})," declarations, wherever they occur, are processed before any code is executed. This proccess is called hoisting and we'll explore it in detail later. This is how the example above looks like in reality in JavaScript:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsxs)("p",{className:"spacer top medium",children:["There is a trick called ",(0,t.jsx)("strong",{children:"function scope"}),". When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function. The example above would look like this:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n}),(0,t.jsxs)("p",{className:"spacer top medium",children:["Variable ",(0,t.jsx)("code",{children:"yay"}),", even though it is declared using ",(0,t.jsx)("code",{children:"var"}),", is globally scoped because it exists outside a function while ",(0,t.jsx)("code",{children:"qeq"})," is function scoped. We cannot access any variable outside of a function, neither ",(0,t.jsx)("code",{children:"const"})," or ",(0,t.jsx)("code",{children:"let"}),":"]}),(0,t.jsx)(u.k,{lang:[r.Pl.JAVASCRIPT,r.Pl.JAVASCRIPT],name:["index","index"],code:[i,o]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"let"})," solves the problem with ",(0,t.jsx)("code",{children:"var"})," that we covered above. It is block scoped. Any variable declared in a block with ",(0,t.jsx)("code",{children:"let"})," is only available for use within that block:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a}),(0,t.jsxs)("p",{children:["Like ",(0,t.jsx)("code",{children:"let"})," declarations, ",(0,t.jsx)("code",{children:"const"})," declarations can only be accessed within a block:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:l}),(0,t.jsx)("p",{children:"There cannot be two variables with the same name in the same scope:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:h}),(0,t.jsx)("p",{children:"But if one of the variables is in a different scope - it will work:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:m}),(0,t.jsxs)("p",{children:["Pay attention to the example above: the variable eventually has a value of ",(0,t.jsx)("code",{children:"yay"}),". All of this because given value ",(0,t.jsx)("code",{children:"42"})," is in a different scope. Closures and hoisting are built on this process in JavaScript."]})]})},k=()=>{let e=`"use strict";
...
...
...`,s=`function doSomething() {
  "use strict";
  ...
  ...
  ...
}`;return(0,t.jsxs)(c.n,{title:"Strict mode",children:[(0,t.jsx)("p",{children:"Strict mode was introduced in ES5. This mode prevents certain actions from being taken and throws more exceptions. Strict mode makes several changes to normal JavaScript semantics."}),(0,t.jsx)("p",{children:"Strict mode can be used in two ways:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"For the entire script in global scope"})}),(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:"For certain functions"})})]}),(0,t.jsx)("p",{className:"spacer top medium",children:"Along with this, strict mode doesn`'t work with block statements enclosed in curly braces."}),(0,t.jsx)("p",{children:"To invoke strict mode for an entire script just put the following statement before any other statements:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)("p",{children:"To invoke strict mode for a function put the exact statement in the body of function before any other statements:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsx)("p",{children:"Pay attention: the entire contents of JavaScript modules are automatically in strict mode. Also all parts of a class's body are strict mode code too."})]})},P=()=>{let e=`{// TDZ starts here
  // TDZ continues here
  console.log(yay); // ReferenceError: can't access lexical declaration 'yay' before initialization
  // TDZ continues here
  let yay = "yay"; // TDZ ends here
  // TDZ does not exist here
}`,s=`{// TDZ starts here
  // TDZ continues here
  // TDZ continues here
  let yay = "yay"; // TDZ ends here
  // TDZ does not exist here
  console.log(yay); // "yay"
  // TDZ does not exist here
}`,n=`{// TDZ starts and ends here
  // TDZ does not exist here
  console.log(yay); // undefined
  // TDZ does not exist here
  var yay = "yay"; // TDZ does not exist here
  // TDZ does not exist here
  console.log(yay); // "yay"
  // TDZ does not exist here
}`;return(0,t.jsxs)(c.n,{title:"What is temporal dead zone?",children:[(0,t.jsxs)("p",{children:["A temporal dead zone (also known as TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value. A block is a pair of curly braces. A block's temporal dead zone starts at the beginning of the block's local scope. It ends when variable is fully initialized with a value. Here's the example of TDZ of variables declared with ",(0,t.jsx)("code",{children:"let"})," keyword:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsxs)("p",{children:["In the example above TDZ of the ",(0,t.jsx)("code",{children:"yay"})," variable starts from the opening curly bracket and ends once when it initialized with the value. The ",(0,t.jsx)("code",{children:"yay"})," variable was invoked within its temporal dead zone that is why JavaScript will return a ReferenceError."]}),(0,t.jsx)("p",{children:"Here is the example how we can access a variable successfully after its complete initialization:"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s}),(0,t.jsxs)("p",{children:["Another difference between ",(0,t.jsx)("code",{children:"var"}),", ",(0,t.jsx)("code",{children:"let"})," and ",(0,t.jsx)("code",{children:"const"})," variables is when their TDZ ends. Let's look at an example of TDZ of ",(0,t.jsx)("code",{children:"var"}),":"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n}),(0,t.jsxs)("p",{children:["In contrast to ",(0,t.jsx)("code",{children:"let"})," or ",(0,t.jsx)("code",{children:"const"}),", JavaScript automatically initializes ",(0,t.jsx)("code",{children:"var"})," ","variables with ",(0,t.jsx)("code",{children:"undefined"})," value.",(0,t.jsx)("code",{children:"let"})," and ",(0,t.jsx)("code",{children:"const"})," both remains dead and inaccessible. However, ",(0,t.jsx)("code",{children:"var"})," TDZ ends immediately after its hoisting."]})]})},I=()=>{let e=`setTimeout(() => {
  console.log('yay');
}, 1000);`,s=`<button onclick="clearTimeoutyay)">
  Stop
</button>`,n=`setTimeout(() => {
  console.log('yay');
}, 1000);`,o=`setInterval(() => {
  console.log('yay');
}, 1000);`,i=`> "yay"
> "yay"
> "yay"
> "yay"
> "yay"
> "yay"
> "yay"`,a=`<button onclick="clearInterval(yay)">
  Stop
</button>`,l=`setInterval(() => {
  console.log('yay');
}, 1000);`,m=`console.log('yay');

setTimeout(() => {
  console.log('qeq');
}, 1000);

console.log('uou');`,x=`> "yay"
> "uou"
> "qeq"`,p=`console.log('yay');

setTimeout(() => {
  console.log('qeq');
}, 0);

console.log('uou');`,y=`> "yay"
> "uou"
> "qeq"`;return(0,t.jsxs)(c.n,{title:"Timers",children:[(0,t.jsx)("p",{className:"spacer bottom medium",children:"There are timers. A timer is created to execute any task at a particular time. Basically, the timer is used to delay the execution of the JavaScript code in a regular time interval."}),(0,t.jsxs)("p",{className:"note spacer bottom medium",children:[(0,t.jsx)("span",{className:"note__title",children:"Keep in mind: "}),"The ",(0,t.jsx)("code",{children:"setTimeout()"})," and ",(0,t.jsx)("code",{children:"setInterval()"})," are both methods of the HTML DOM Window object, they are not part of JavaScript."]}),(0,t.jsx)("p",{children:"There are two key methods to use timers:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"setTimeout(function, milliseconds)"})}),(0,t.jsx)("div",{className:"list__footer",children:"It executes a function after waiting a specified number of milliseconds"}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e}),(0,t.jsx)("p",{className:"spacer top medium",children:"Wait 1 second and the following output will appear:"}),(0,t.jsx)(h.k,{code:'> "yay"'}),(0,t.jsxs)("p",{children:["Timeout timers can be cancelled using ",(0,t.jsx)("code",{children:"clearTimeout()"}),":"]}),(0,t.jsx)(u.k,{lang:[r.Pl.HTML,r.Pl.JAVASCRIPT],name:["index","index"],code:[s,n]})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"setInterval(function, milliseconds)"})}),(0,t.jsx)("div",{className:"list__footer",children:"It also executes a function after waiting a specified number of milliseconds, but repeats the execution continuously, e.g., every X milliseconds."}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:o}),(0,t.jsxs)("p",{className:"spacer top medium",children:["The example executes ",(0,t.jsx)("code",{children:"console.log()"})," once every second:"]}),(0,t.jsx)(h.k,{code:i}),(0,t.jsxs)("p",{children:["Interval timers can be cancelled using ",(0,t.jsx)("code",{children:"clearInterval()"}),":"]}),(0,t.jsx)(u.k,{lang:[r.Pl.HTML,r.Pl.JAVASCRIPT],name:["index","index"],code:[a,l]})]})]}),(0,t.jsxs)("p",{className:"spacer top medium",children:["A delay set with a timer is not a guaranteed thing. Let's experiment! In what order will be"," ",(0,t.jsx)("code",{children:"console.log()"})," displayed after the execution of the code below?"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:m}),(0,t.jsxs)("p",{children:["It's quite easy: ",(0,t.jsx)("code",{children:"console.log('qeq')"})," is delayed for a second and will execute last:"]}),(0,t.jsx)(h.k,{code:x}),(0,t.jsxs)("p",{children:["But what if we change the delay from ",(0,t.jsx)("code",{children:"1 second"})," to ",(0,t.jsx)("code",{children:"0"}),"? Well, it's possible to set a zero-delay, so why not?"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:p}),(0,t.jsx)("p",{children:"This time the result doesn't seem so obvious, huh?"}),(0,t.jsx)(h.k,{code:y}),(0,t.jsxs)("p",{className:"spacer bottom large",children:["Yep, there are no mistakes in the output above. What does ",(0,t.jsx)("code",{children:"setTimeout()"})," with a zero-delay delay do? The answer is that there is only one event queue in JavaScript which is a list of events to be processed. Despite the zero-delay, ",(0,t.jsx)("code",{children:"setTimeout(0)"})," gets into the event queue and executes at the end of it. Check out section ",(0,t.jsx)("em",{children:"Event loop"})," to read more about this concept."]}),(0,t.jsxs)("p",{className:"note spacer bottom medium",children:[(0,t.jsx)("span",{className:"note__title",children:"Friendly reminder: "}),"there are 1000 milliseconds in one second."]})]})},q=()=>{let e=`var yay = 42; // declared
yay = 'yay'; // updated

if (true) {
  yay = 'qeq'; // updated in block scope
  var isAwesome = true; // declared in block scope
}

console.log(isAwesome); // true - available in global scope
console.log(yay); // "qeq"`,s=`let yay = 42; // declared
let = 'yay'; // updated

if (true) {
  yay = 'qeq'; // updated in block scope
  let isAwesome = true; // declared in block scope
}

console.log(isAwesome); // ReferenceError: isAwesome is not defined
console.log(yay); // "qeq"`,n=`const yay = 42;
yay = 'yay'; // TypeError: invalid assignment to const 'yay'`,i=`const yay = 42;

if (true) {
  yay = 'yay'; // TypeError: invalid assignment to const 'yay'
}`,a=`if (true) {
  const yay = 'yay';
}

console.log(yay); // ReferenceError: yay is not defined`,l=`const yay = {
  id: 13,
  name: 'qeq',
  isAwesome: false
}

console.log(yay.id, yay.name, yay.isAwesome); // 13 "qeq" false

yay.id = 42;
yay.name = 'yay';
yay.isAwesome = true;

console.log(yay.id, yay.name, yay.isAwesome); // 42 "yay" true`;return(0,t.jsxs)(c.n,{title:"What is the difference between var, let, and const?",children:[(0,t.jsx)("p",{children:"We can declare a variable using 3 keywords in JavaScript:"}),(0,t.jsx)("ul",{className:"list markered",children:["var","let","const"].map(e=>(0,t.jsx)("li",{className:"list__item",children:(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{className:"code",children:e})})},e))}),(0,t.jsx)(o.W,{fileTitle:"const-let-var.jpg",src:"/assets/blog/frontend-in-a-nutshell/javascript/const-let-var.png",alt:"Three-headed dragon meme but const, let and var",maxWidth:500}),(0,t.jsxs)("p",{className:"spacer top medium",children:["Keyword ",(0,t.jsx)("code",{children:"var"})," is used in all JavaScript code from 1995 to 2015 for variable declaration. One of the features that came with ES6 is the addition of ",(0,t.jsx)("code",{children:"let"})," and ",(0,t.jsx)("code",{children:"const"}),", which can be used for variable declaration."]}),(0,t.jsx)("p",{children:"There is brief summary of var, let and const:"}),(0,t.jsxs)("ol",{className:"list ordered",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"var"})}),(0,t.jsx)("div",{className:"list__footer",children:(0,t.jsxs)("ul",{className:"list markered",children:[(0,t.jsx)("li",{className:"list__item",children:"can be redeclared and updated"}),(0,t.jsx)("li",{className:"list__item",children:"global scoped"}),(0,t.jsxs)("li",{className:"list__item",children:["doesn't exist in ",(0,t.jsx)("em",{children:"temporal dead zone"})]})]})}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:e})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"let"})}),(0,t.jsx)("div",{className:"list__footer",children:(0,t.jsxs)("ul",{className:"list markered",children:[(0,t.jsx)("li",{className:"list__item",children:"can be only updated, not redeclared"}),(0,t.jsx)("li",{className:"list__item",children:"block scoped"}),(0,t.jsxs)("li",{className:"list__item",children:["exist in ",(0,t.jsx)("em",{children:"temporal dead zone"})]})]})}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:s})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__title",children:(0,t.jsx)("code",{children:"let"})}),(0,t.jsx)("div",{className:"list__footer",children:(0,t.jsxs)("ul",{className:"list markered",children:[(0,t.jsx)("li",{className:"list__item",children:"cannot be neither updated or redeclared"}),(0,t.jsx)("li",{className:"list__item",children:"block scoped"}),(0,t.jsxs)("li",{className:"list__item",children:["exist in ",(0,t.jsx)("em",{children:"temporal dead zone"})]})]})}),(0,t.jsx)("div",{className:"spacer bottom medium",children:(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:n})}),(0,t.jsx)("div",{className:"spacer bottom medium",children:(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:i})}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:a})]})]}),(0,t.jsxs)("p",{children:["But not so strict with ",(0,t.jsx)("code",{children:"const"})," variables. Actually we can update them! The key-value pairs of an object declared using ",(0,t.jsx)("code",{children:"const"})," can be updated directly, but the variable cannot be reassigned:"]}),(0,t.jsx)(d.z,{lang:r.Pl.JAVASCRIPT,name:"index",code:l}),(0,t.jsx)(o.W,{src:"/assets/blog/frontend-in-a-nutshell/javascript/let-or-var.png",alt:'Meme with a guy with two buttons "let" and "var"',fileTitle:"let-or-var.jpg",maxWidth:500}),(0,t.jsxs)("p",{className:"spacer top medium",children:["There is an unspoken rule: always declare variables with ",(0,t.jsx)("code",{children:"const"}),". But if you think the value of the variable can change - use ",(0,t.jsx)("code",{children:"let"}),". And never use ",(0,t.jsx)("code",{children:"var"}),"! But why? The problem lies in scope."]})]})},C=()=>(0,t.jsxs)(c.n,{title:"What is JavaScript?",children:[(0,t.jsx)("p",{className:"spacer bottom medium",children:"JavaScript is a scripting language that allows to implement different features on web pages: dynamically updating content, control, animate staff, etc, etc, etc."}),(0,t.jsx)(o.W,{src:"/assets/blog/frontend-in-a-nutshell/javascript/javascript.jpg",alt:"Sparta meme but everything is an object in JavaScript",fileTitle:"javascript-is-awesome.jpg",maxWidth:500})]}),J=()=>(0,t.jsx)(i.o,{postConfig:a.KG[a.Zr.JAVASCRIPT_IN_A_NUTSHELL],heroConfig:{size:l.Xd.SMALL,pattern:l.Uy.MOTION_LINES},children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(w,{}),(0,t.jsx)(A,{}),(0,t.jsx)(T,{}),(0,t.jsx)(q,{}),(0,t.jsx)(v,{}),(0,t.jsx)(N,{}),(0,t.jsx)(b,{}),(0,t.jsx)(P,{}),(0,t.jsx)(k,{}),(0,t.jsx)(g,{}),(0,t.jsx)(m,{}),(0,t.jsx)(x,{}),(0,t.jsx)(I,{}),(0,t.jsx)(_,{}),(0,t.jsx)(y,{}),(0,t.jsx)(j,{}),(0,t.jsx)(S,{}),(0,t.jsx)(p,{}),(0,t.jsx)("section",{className:"spacer top large",children:(0,t.jsx)(o.W,{fileTitle:"yay.jpg",src:"/assets/blog/frontend-in-a-nutshell/javascript/book.webp",alt:"Spider-Man (null) pointing at Spider-Man (undefined)",maxWidth:500})})]})})},47980:e=>{e.exports={double_code_snippet:"DoubleCodeSnippet_double_code_snippet__gi_Zo"}},48700:e=>{e.exports={example_snippet:"ExampleSnippet_example_snippet__Fwo7u"}},54666:(e,s,n)=>{"use strict";n.d(s,{k:()=>c});var t=n(37876),o=n(28948),i=n(84390),a=n(47980),l=n.n(a);let c=({lang:e,code:s,log:n=["",""],name:a=["index","index"],isEmbeddedLog:c})=>{let[r,d]=e,[h,m]=s,[x,p]=a,[u,y]=n;return(0,t.jsx)("div",{className:l().double_code_snippet,children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col col--50 col--tablet-50",children:[(0,t.jsx)(o.Cy,{language:r,name:x,code:h,consoleLog:c?u:void 0}),!c&&u&&(0,t.jsx)(i.k,{code:u})]}),(0,t.jsxs)("div",{className:"col col--50 col--tablet-50",children:[(0,t.jsx)(o.Cy,{language:d,name:p,code:m,consoleLog:c?y:void 0}),!c&&y&&(0,t.jsx)(i.k,{code:y})]})]})})}},56410:(e,s,n)=>{"use strict";n.d(s,{W:()=>c});var t=n(37876),o=n(85335),i=n(81010),a=n(64156),l=n.n(a);let c=({src:e,alt:s,fileTitle:n,maxWidth:a=1024})=>(0,t.jsx)("div",{className:l().post_image,style:{maxWidth:a?`${a}px`:"unset"},children:(0,t.jsx)(o.p,{type:i.gz.IMAGE,fileTitle:n,children:(0,t.jsx)("img",{src:e,alt:s,width:"100%"})})})},58411:e=>{e.exports={code:"Code_code___ALYP",code__wrapper:"Code_code__wrapper__VoZb9",code__header:"Code_code__header__XUQ5W",code__name:"Code_code__name__rsVhv",uppercase:"Code_uppercase__3suyI",code__body:"Code_code__body__Hy27d",code__highlighter:"Code_code__highlighter__JwMRG",code__icon:"Code_code__icon__HYjpp",code__control:"Code_code__control__yx_MM",demo__control:"Code_demo__control__r9nlJ",code__console:"Code_code__console__o8ueE"}},64156:e=>{e.exports={post_image:"PostImage_post_image__BD4eg"}},74343:e=>{e.exports={example:"Example_example__9St6s",DEFAULT:"Example_DEFAULT__HFLHk",EMBEDDED:"Example_EMBEDDED__MPi77",example__console:"Example_example__console__Gt__w",example__console_icon:"Example_example__console_icon__gj4yg",example__console_title:"Example_example__console_title__C_pUG",example__actions:"Example_example__actions__lpQQr",example__control:"Example_example__control__wPPLQ"}},78165:(e,s,n)=>{"use strict";n.d(s,{n:()=>d});var t=n(37876),o=n(14232),i=n(15039),a=n.n(i),l=n(9399),c=n(97347),r=n.n(c);let d=({title:e,children:s})=>{let n=a().bind(r()),[i,c]=(0,o.useState)(!1);return(0,t.jsxs)("article",{className:n([r().accordion,{[r().opened]:i}]),children:[(0,t.jsxs)("button",{className:r().accordion__header,onClick:()=>{c(!i)},children:[(0,t.jsx)("span",{className:n([r().accordion__icon,{[r().opened]:i}]),children:(0,t.jsx)(l.ZL,{})}),(0,t.jsx)("span",{className:r().accordion__title,children:e})]}),(0,t.jsx)("div",{className:r().accordion__body,children:s})]})}},78196:(e,s,n)=>{"use strict";n.d(s,{R:()=>p});var t=n(37876),o=n(14232),i=n(43747),a=n(78261),l=n(40502),c=n(9399),r=n(15039),d=n.n(r),h=n(26457),m=n(74343),x=n.n(m);let p=({code:e,isCopyable:s=!0,isEmbedded:n=!1,showConsole:r=!1})=>{let m=d().bind(x()),{translate:p}=(0,a.W)(),[u,y]=(0,o.useState)(!1),j=n?x().EMBEDDED:x().DEFAULT;return(0,t.jsx)("div",{className:m([x().example,j]),children:(0,t.jsxs)("div",{className:x().code__wrapper,children:[s&&(0,t.jsx)("div",{className:x().example__actions,children:(0,t.jsx)("button",{className:m([x().example__control,j]),onClick:()=>{navigator.clipboard.writeText(e),y(!0),setTimeout(()=>{y(!1)},5e3)},"aria-label":p(l.x_),children:u?(0,t.jsx)(c.fH,{}):(0,t.jsx)(c.LE,{})})}),r&&(0,t.jsxs)("div",{className:m([x().example__console,j]),children:[(0,t.jsx)(c.$2,{className:x().example__console_icon}),(0,t.jsx)("div",{className:x().example__console_title,children:"Console"})]}),(0,t.jsx)(i.A,{language:"javascript",showLineNumbers:!1,style:h.C5,wrapLines:!0,lineProps:()=>({style:{display:"block",position:"relative",paddingLeft:"1.5em"},className:"prefixed-line"}),children:e})]})})}},80097:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/eng/javascript-in-a-nutshell",function(){return n(32688)}])},84390:(e,s,n)=>{"use strict";n.d(s,{k:()=>l});var t=n(37876),o=n(78196),i=n(48700),a=n.n(i);let l=({code:e,isCopyable:s})=>(0,t.jsx)("div",{className:a().example_snippet,children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,t.jsx)(o.R,{code:e,isCopyable:s,showConsole:!0})})})})},97347:e=>{e.exports={accordion:"Accordion_accordion__HIbE8",accordion__header:"Accordion_accordion__header__UWG0s",accordion__icon:"Accordion_accordion__icon___jgnh",opened:"Accordion_opened__ypqTQ",accordion__title:"Accordion_accordion__title__Tqoe7",accordion__body:"Accordion_accordion__body__co4uD",appearBodyFromTop:"Accordion_appearBodyFromTop__RycRm"}}},e=>{e.O(0,[230,867,459,577,636,593,792],()=>e(e.s=80097)),_N_E=e.O()}]);