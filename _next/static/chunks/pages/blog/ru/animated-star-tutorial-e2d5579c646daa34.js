(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{336:e=>{e.exports={code_snippet:"CodeSnippet_code_snippet__EDJgC"}},5351:(e,s,t)=>{"use strict";t.d(s,{z:()=>m});var a=t(37876),o=t(28948),n=t(14232),c=t(78984),l=t(99342),r=t.n(l),i=t(336),d=t.n(i);let m=({lang:e,code:s,name:t,customName:l,consoleLog:i,hideLines:m=!1})=>{let p=((e=!0)=>{let s=(0,n.useContext)(c.M),t=(0,n.useRef)(null);if(!s)throw Error("useCodeSnippetNumber must be used within a <CodeSnippetProvider>");return e&&null===t.current&&(s.counterRef.current+=1,t.current=s.counterRef.current),t.current})(r()(t)&&r()(l)),x=t??`snippet(${p})`;return(0,a.jsx)("div",{className:"spacer bottom small",children:(0,a.jsx)("div",{className:d().code_snippet,children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col col--100",children:(0,a.jsx)(o.Cy,{language:e,name:x,customName:l,code:s,isTerminal:m,consoleLog:i})})})})})}},7019:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/animated-star-tutorial",function(){return t(11583)}])},9095:e=>{e.exports={external_link:"ExternalLink_external_link__91aO2",external_link__icon:"ExternalLink_external_link__icon__u3FgC"}},11583:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var a=t(37876),o=t(83577),n=t(27689),c=t(12062),l=t(14232),r=t(35933),i=t.n(r);let d=()=>{let e=(0,l.useRef)([]),s=s=>{e.current.forEach(e=>{if(!e)return;let t=e.getBoundingClientRect(),a=t.left+e.clientWidth/2,o=t.top+e.clientHeight/2,n=-(180/Math.PI*Math.atan2(s.pageX-a,s.pageY-o)*1)+270;e.style.transform=`rotate(${n}deg)`})};(0,l.useEffect)(()=>(document.addEventListener("mousemove",s),()=>{document.removeEventListener("mousemove",s)}),[]);let t=(s,t)=>{s&&!e.current.includes(s)&&(e.current[t]=s)};return(0,a.jsx)("div",{className:i().demo_wrapper,children:(0,a.jsxs)("div",{className:i().eyes_container,children:[(0,a.jsx)("div",{ref:e=>t(e,0),className:i().eye}),(0,a.jsx)("div",{ref:e=>t(e,1),className:i().eye})]})})};var m=t(81010),p=t(85335),x=t(54666),_=t(28948),u=t(56410),h=t(5351),y=t(37339),g=t(49553),j=t.n(g);let v=()=>{let e=`<div class='container'>
  <div class='eye'></div>
  <div class='eye'></div>
</div>`,s=`.container {
  width: 350px;
  height: 323px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../star.svg');
}`,t=`.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;
}

.eye:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  box-sizing: border-box;
}`,l=`function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');
}`,r=`function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    // Здесь сделаем магию
  });
}`,i=`function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
  });
}`,g=`function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
  });
}`,v=`function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
  });
}`,N=`function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;

    eye.style.transform = \`rotate($\{rotation}deg)\`;
  });
}`,f=`document.addEventListener('mousemove', moveEyesToCursor);

function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;

    eye.style.transform = \`rotate($\{rotation}deg)\`;
  });
}`,C=`.container {
  height: 323px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../star.svg');
}

.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;
}

.eye:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  box-sizing: border-box;
}`,b=`const addToRefs = (el: HTMLDivElement | null, index: number) => {
  if (el && !eyesRef.current.includes(el)) {
    eyesRef.current[index] = el;
  }
};`,S=`return (
  <div className={styles.eyes_container}>
    <div ref={(el) => addToRefs(el, 0)} className={styles.eye}></div>
    <div ref={(el) => addToRefs(el, 1)} className={styles.eye}></div>
  </div>
;)`,T=`const moveEyesToCursor = (event: MouseEvent) => {
  eyesRef.current.forEach((eye) => {
    if (!eye) {
      return;
    }

    const rect = eye.getBoundingClientRect();
    const x = rect.left + eye.clientWidth / 2;
    const y = rect.top + eye.clientHeight / 2;

    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const rotation = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = \`rotate($\{rotation}deg)\`;
  });
};`,E=`useEffect(() => {
  document.addEventListener('mousemove', moveEyesToCursor);

  return () => {
    document.removeEventListener('mousemove', moveEyesToCursor);
  };
}, []);`,R=`import styles from './app.module.scss';
...
return (
  <div className={styles.eyes_container}>
    <div className={styles.eye}></div>
    <div className={styles.eye}></div>
  </div>
);`,P=`.eyes_container {
  height: 323px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../star.svg');
}

.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    box-sizing: border-box;
  }
}`,w=`import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

export const AnimatedStar = () => {
  const eyesRef = useRef<(HTMLDivElement | null)[]>([]);

  const moveEyesToCursor = (event: MouseEvent) => {
    eyesRef.current.forEach((eye) => {
      if (!eye) {
        return;
      }

      const rect = eye.getBoundingClientRect();
      const x = rect.left + eye.clientWidth / 2;
      const y = rect.top + eye.clientHeight / 2;

      const radian = Math.atan2(event.pageX - x, event.pageY - y);
      const rotation = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = \`rotate($\{rotation}deg)\`;
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveEyesToCursor);

    return () => {
      document.removeEventListener('mousemove', moveEyesToCursor);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !eyesRef.current.includes(el)) {
      eyesRef.current[index] = el;
    }
  };

  return (
    <div className={styles.eyes_container}>
      <div ref={(el) => addToRefs(el, 0)} className={styles.eye}></div>
      <div ref={(el) => addToRefs(el, 1)} className={styles.eye}></div>
    </div>
  );
};`,L=`.eyes_container {
  height: 323px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../../../../../public/assets/blog/animated-star-tutorial/star.svg');
}

.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    box-sizing: border-box;
  }
}`;return(0,a.jsxs)(o.o,{postConfig:n.KG[n.Zr.ANIMATED_STAR_TUTORIAL],heroConfig:{size:y.Xd.SMALL,pattern:y.Uy.CROSS},children:[(0,a.jsxs)("section",{className:"section outer",children:[(0,a.jsx)(p.p,{type:m.gz.CUSTOM,filesCount:1,fileTitle:"star_final_demo.exe",pattern:m.J$.CROSS,children:(0,a.jsx)(d,{})}),(0,a.jsx)("p",{className:"explanation",children:"Начните двигать курсом по странице — такую анимацию будем делать в этом уроке"})]}),(0,a.jsxs)("section",{className:"section outer",children:[(0,a.jsx)("h2",{children:"Подготовительные работы"}),(0,a.jsx)("p",{children:"Прежде чем приступать к созданию анимации нужно подготовить саму звезду. Это можно сделать разными способами, например:"}),(0,a.jsxs)("ul",{className:"list markered spacer top medium",children:[(0,a.jsx)("li",{className:"list__item",children:"Добавить звезду как фон элемента"}),(0,a.jsxs)("li",{className:"list__item",children:["Вставить звезду как изображение через HTML-тег ",(0,a.jsx)("code",{className:"code",children:"img"})]}),(0,a.jsxs)("li",{className:"list__item",children:["Вставить звезду как векторное изображение ",(0,a.jsx)("code",{className:"code",children:"svg"})]})]}),(0,a.jsx)("p",{children:"Я остановила свой выбор на первом варианте: расположить фигуру звездочки без глаз фоном в элементе-контейнере и затем добавить глаза и зрачки с помошью CSS."}),(0,a.jsxs)("p",{className:"spacer bottom medium",children:["За основу будущей анимированной звёздочки я взяла иллюстрацию, найденную на просторах интернета",(0,a.jsx)("b",{children:"*"}),". Затем в Figma обрисовала исходник и экспортировала получившийся вектор в формате ",(0,a.jsx)("code",{className:"code",children:".svg"})]}),(0,a.jsx)(u.W,{fileTitle:"figma.jpeg",src:"/assets/blog/animated-star-tutorial/figma-preview.png",alt:"Превью приложения Figma с созданием звезды"}),(0,a.jsxs)("p",{className:"note",children:[(0,a.jsx)("strong",{children:"Примечание:"})," если вы являетесь правообладателем этой прекрасной звёздочки, пожалуйста, не ругайтесь, что я использовала её без указания авторских прав. У меня не было совершенно никакого умысла использовать ваш труд в коммерческих или каких-либо других целях получения выгоды. Свяжитесь со мной чтобы решить вопросы правообладания если таковые у вас есть."]}),(0,a.jsxs)("p",{className:"spacer top bottom medium",children:["HTML-разметка и CSS-стили на данном этапе будут совсем простыми. Нам нужен будет контейнер-обёртка с классом"," ",(0,a.jsx)("code",{className:"code",children:".container"}),", в котором будут лежать непосредственно глаза - два дива с одинаковым классом ",(0,a.jsx)("code",{className:"code",children:".eye"}),". В дальнейшем эта HTML-разметка останется практически без изменений. В CSS на данном шаге мы пропишем только стили для контейнера-обёртки - добавим на фон звезду в формате ",(0,a.jsx)("code",{className:"code",children:".svg"})," и отцентрируем внутреннее содержимое, это пригодится нам позже. Здесь ",(0,a.jsx)("code",{className:"code",children:"350px"})," и ",(0,a.jsx)("code",{className:"code",children:"323px"})," не магические числа, взятые из потолка, а размеры ",(0,a.jsx)("code",{className:"code",children:".svg"})," файла звезды, который у меня получился в Figma."]}),(0,a.jsx)(x.k,{lang:[_.Pl.HTML,_.Pl.CSS],name:["index","style"],code:[e,s]}),(0,a.jsx)("p",{className:"spacer bottom medium",children:"На этом этапе звёздочка без глаз выглядит пока что совсем грустно. Поэтому на следующем этапе добавим глаза с помощью чистого CSS."}),(0,a.jsx)(p.p,{type:m.gz.CUSTOM,filesCount:1,fileTitle:"star_demo_1.exe",pattern:m.J$.CROSS,children:(0,a.jsx)("div",{className:j().demo_wrapper,children:(0,a.jsx)("div",{className:j().eyes_container})})}),(0,a.jsx)("p",{className:"explanation",children:"Ой, у звёздочки украли глаза! А, мы их ещё не сделали..."}),(0,a.jsxs)("p",{className:"spacer top bottom medium",children:["Сам глаз застилизуем с помощью класса ",(0,a.jsx)("code",{className:"code",children:".eye"}),", а зрачок добавим псевдоэлементом"," ",(0,a.jsx)("code",{className:"code",children:":before"}),". HTML-разметка остаётся без изменений т.к. элементы с классом"," ",(0,a.jsx)("code",{className:"code",children:".eye"})," мы добавили на прошлом шаге."]}),(0,a.jsx)(x.k,{lang:[_.Pl.HTML,_.Pl.CSS],name:["index","style"],code:[e,t]}),(0,a.jsx)("p",{className:"spacer bottom medium",children:"Теперь звёздочка выглядит отлично!"}),(0,a.jsx)(p.p,{type:m.gz.CUSTOM,filesCount:1,fileTitle:"star_demo_2.exe",pattern:m.J$.CROSS,children:(0,a.jsx)("div",{className:j().demo_wrapper,children:(0,a.jsxs)("div",{className:j().eyes_container,children:[(0,a.jsx)("div",{className:j().eye}),(0,a.jsx)("div",{className:j().eye})]})})}),(0,a.jsx)("p",{className:"spacer bottom medium",children:"Все размеры в коде выше я подбирала индивидуально. Не стесняйтесь экспериментировать на этом этапе: можно менять размер глаз, зрачков, расстояние между ними и т.д. Саму звёздочку можно поменять на другой рисунок: сердце, облако, яблоко, etc."})]}),(0,a.jsxs)("section",{className:"section outer",children:[(0,a.jsx)("h2",{children:"А теперь анимируем!"}),(0,a.jsx)("p",{className:"spacer top bottom medium",children:"Сперва реализуем анимацию на чистом JavaScript, а затем я подскажу как перенести её на React."}),(0,a.jsxs)("p",{className:"spacer top bottom medium",children:["По задумке глаза должны следить за курсором, поэтому нам нужно подписаться на движение мышкой (курсором). Делается это просто с помощью метода подписки на событие ",(0,a.jsx)("code",{className:"code",children:"addEventListener"}),":"]}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:"document.addEventListener('mousemove', moveEyesToCursor);"}),(0,a.jsxs)("p",{className:"spacer bottom medium",children:["В этом коде ",(0,a.jsx)("code",{className:"code",children:"mousemove"})," — событие, которое срабатывает при каждом движении мыши,"," ",(0,a.jsx)("code",{className:"code",children:"moveEyesToCursor"})," — функция-обработчик, которая будет вызываться каждый раз при движении мыши."]}),(0,a.jsxs)("p",{className:"spacer bottom medium",children:["Напишем теперь эту самую функцию-обработчик ",(0,a.jsx)("code",{className:"code",children:"moveEyesToCursor"}),", которая и будет делать всю магию движения глаз. Для начала нужно найти все глаза, которые мы хотим анимировать. Сделаем это так:"]}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:l}),(0,a.jsxs)("p",{className:"spacer bottom medium",children:["Метод ",(0,a.jsx)("code",{className:"code",children:"querySelectorAll"})," в JavaScript используется для поиска и возврата списка всех элементов документа, соответствующих заданному CSS-селектору. В нашем случае это класс"," ",(0,a.jsx)("code",{className:"code",children:".eye"}),". Таким образом в переменной ",(0,a.jsx)("code",{className:"code",children:"eyes"})," будет храниться список объектов NodeList с нашими глазами-дивами и с ними можно будет что-то сделать."]}),(0,a.jsxs)("p",{className:"spacer top bottom medium",children:["А сделаем мы вот что — пройдёмся по всем элементам полученного списка с помощью метода перебора элементов массива ",(0,a.jsx)("code",{className:"code",children:"forEach"}),":"]}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:r}),(0,a.jsxs)("p",{className:"spacer top bottom medium",children:["Время освежить курс математики. Для каждого глаза надо вычислить координаты его центра"," ",(0,a.jsx)("code",{className:"code",children:"x, y"})," по несложной формуле:"]}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:i}),(0,a.jsx)("p",{className:"spacer top bottom medium",children:"Теперь вычислим угол между глазом и курсором:"}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:g}),(0,a.jsx)("p",{className:"spacer top bottom medium",children:"Преобразуем и скорректируем угол:"}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:v}),(0,a.jsxs)("p",{className:"spacer top bottom medium",children:["Всё, с математикой закончили. Осталось с помощью CSS заставить глаза двигаться. Сделаем это с помощью CSS свойства ",(0,a.jsx)("code",{className:"code",children:"transform: rotate()"}),". Глаз будет поворачиваться так, чтобы смотреть на курсор:"]}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:N}),(0,a.jsx)("p",{className:"spacer top bottom medium",children:"Собираем код вместе:"}),(0,a.jsx)(h.z,{lang:_.Pl.JAVASCRIPT,name:"index",code:f}),(0,a.jsx)(x.k,{lang:[_.Pl.HTML,_.Pl.CSS],name:["index","style"],code:[e,C]}),(0,a.jsxs)("p",{className:"spacer top large",children:["Вы можете перейти по ссылке в песочницу на сайте"," ",(0,a.jsx)(c.G,{href:"https://codepen.io/thevioletmaniac/pen/emJWLKx",label:"Codepen"}),", чтобы посмотреть и потыкать результат вживую \uD83D\uDD0D"]})]}),(0,a.jsxs)("section",{className:"section outer",children:[(0,a.jsx)("h2",{children:"Переносим на React"}),(0,a.jsx)("p",{children:"Чтобы перенести наш код на React нужно чуть-чуть модернизировать HTML-разметку, сама разметка при этом практически не изменится. Нужно будет только поддержать тот вид стилизации, который вы используете у себя в проекте или предпочитаете сами. В моём случае это CSS Modules в связке с SASS. Поэтому моя HTML-разметка после переноса на JSX будет выглядеть следующим образом:"}),(0,a.jsx)(x.k,{lang:[_.Pl.REACT,_.Pl.SCSS],name:["AnimatedStar","app.module"],code:[R,P]}),(0,a.jsxs)("p",{className:"spacer top medium",children:["Псевдоэлемент ",(0,a.jsx)("code",{className:"code",children:":before"})," я перенесла внутрь стиля"," ",(0,a.jsx)("code",{className:"code",children:".eye"})," потому что SASS поддерживает такой синтаксис. Это все изменения, которые произошли в CSS-стилях."]}),(0,a.jsxs)("p",{className:"spacer top medium",children:["Чтобы перенести анимацию на React нам понадобится какое-то хранилище, где мы будем хранить ссылки на DOM-элементы глаз. Делать это будем с помощью ссылок ",(0,a.jsx)("code",{className:"code",children:"ref"})," и хука"," ",(0,a.jsx)("code",{className:"code",children:"useRef"}),". Сперва проинициализируем ссылку:"]}),(0,a.jsx)(h.z,{lang:_.Pl.TYPESCRIPT,name:"AnimatedStar",code:"const eyesRef = useRef<(HTMLDivElement | null)[]>([]);"}),(0,a.jsxs)("p",{children:["Не пугайтесь, я использую React в связке с TypeScript. Если вы не знакомы с TypeScript, то небольшое пояснение: ",(0,a.jsx)("code",{className:"code",children:"(HTMLDivElement | null)[]"})," в коде выше означает лишь типизацию элементов, которые будут храниться в нашей созданной только что ссылке, т.е. это будет массив элементов, где элемент может быть либо ",(0,a.jsx)("code",{className:"code",children:"null"})," либо специального типа DOM-дерева"," ",(0,a.jsx)("code",{className:"code",children:"HTMLDivElement"}),"."]}),(0,a.jsxs)("p",{className:"spacer top medium",children:["Чуть попозже назначим ссылки на элементы, но пока что займёмся другим - напишем функцию добавления ссылки в созданный массив ",(0,a.jsx)("code",{className:"code",children:"eyesRef"}),":"]}),(0,a.jsx)(h.z,{lang:_.Pl.TYPESCRIPT,name:"AnimatedStar",code:b}),(0,a.jsxs)("p",{className:"spacer top medium",children:["Вот теперь можно назначать ссылки. Созданная только что выше функция ",(0,a.jsx)("code",{className:"code",children:"addToRefs"})," ","будет вызываться для каждого глаза через свойство ",(0,a.jsx)("code",{className:"code",children:"ref"})," следующим образом:"]}),(0,a.jsx)(h.z,{lang:_.Pl.TYPESCRIPT,name:"AnimatedStar",code:S}),(0,a.jsxs)("p",{className:"spacer top medium",children:["Функция-обработчик движения глаз ",(0,a.jsx)("code",{className:"code",children:"moveEyesToCursor"})," при переносе на React остаётся почти без изменений, но нужно поддержать добавленные ссылки, добавив проверку"," ",(0,a.jsx)("code",{className:"code",children:"current"}),":"]}),(0,a.jsx)(h.z,{lang:_.Pl.TYPESCRIPT,name:"AnimatedStar",code:T}),(0,a.jsxs)("p",{className:"spacer top medium",children:["Чтобы использовать подписку на событие ",(0,a.jsx)("code",{className:"code",children:"mousemove"})," в React, как в нативном JavaScript выше, воспользуемся хуком ",(0,a.jsx)("code",{className:"code",children:"useEffect"}),":"]}),(0,a.jsx)(h.z,{lang:_.Pl.TYPESCRIPT,name:"AnimatedStar",code:E}),(0,a.jsx)("p",{className:"spacer top medium",children:"Return-функция здесь выполняет роль очистки: удаляет обработчик при размонтировании компонента, предотвращая таким образом утечки памяти."}),(0,a.jsx)("p",{className:"spacer top medium",children:"Ну вот и всё, собираем всё вместе:"}),(0,a.jsx)(h.z,{lang:_.Pl.TYPESCRIPT,name:"AnimatedStar",code:w}),(0,a.jsx)("br",{}),(0,a.jsx)(h.z,{lang:_.Pl.SCSS,name:"styles",code:L})]})]})}},12062:(e,s,t)=>{"use strict";t.d(s,{G:()=>i});var a=t(37876),o=t(15039),n=t.n(o),c=t(9399),l=t(9095),r=t.n(l);let i=({href:e,label:s})=>{let t=n().bind(r());return(0,a.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:t(["link",r().external_link]),children:[s,(0,a.jsx)(c.li,{className:r().external_link__icon})]})}},28948:(e,s,t)=>{"use strict";t.d(s,{Pl:()=>d,Cy:()=>g});var a=t(37876),o=t(15039),n=t.n(o),c=t(43747),l=t(14232),r=t(16686),i=t(26457);let d={PLAINTEXT:"plaintext",HTML:"html",CSS:"css",JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",REACT:"react",SCSS:"scss",BASH:"bash",JSON:"json"},m={[d.HTML]:"HTML",[d.CSS]:"CSS",[d.JAVASCRIPT]:"JS",[d.TYPESCRIPT]:"TS",[d.REACT]:"TSX",[d.SCSS]:"SCSS",[d.JSON]:"JSON",[d.PLAINTEXT]:"",[d.BASH]:""};var p=t(78261),x=t(40502),_=t(9399),u=t(78196),h=t(58411),y=t.n(h);let g=e=>{let{name:s,customName:t,code:o,language:h,showOnlyCode:g=!1,showLineNumbers:j=!0,startingLineNumber:v,isTerminal:N=!1,isNameUppercase:f=!1,consoleLog:C}=e,b=n().bind(y()),{translate:S}=(0,p.W)(),[T,E]=(0,l.useState)(!1),R=()=>{navigator.clipboard.writeText(o),E(!0),setTimeout(()=>{E(!1)},5e3)};return(0,a.jsx)("div",{className:y().code,children:g?(0,a.jsxs)("div",{className:y().code__highlighter,children:[(0,a.jsx)("div",{className:y().code__actions,children:(0,a.jsx)("button",{className:y().code__control,onClick:R,"aria-label":S(x.x_),children:T?(0,a.jsx)(r.f,{}):(0,a.jsx)(_.LE,{})})}),(0,a.jsx)(c.A,{startingLineNumber:v,language:h?.toLocaleLowerCase()||"plaintext",showLineNumbers:j,style:i.C5,children:o})]}):(0,a.jsxs)("div",{className:y().code__wrapper,children:[(0,a.jsxs)("div",{className:y().code__header,children:[(0,a.jsxs)("div",{className:b([y().code__name,{[y().uppercase]:f}]),children:[N?(0,a.jsx)(_.q7,{useMini:!0,className:y().code__icon}):(0,a.jsx)(_.RO,{useMini:!0,className:y().code__icon}),h!==d.BASH&&t||h&&s&&`${s}.${m[h].toLocaleLowerCase()}`]}),(0,a.jsx)("div",{className:y().code__actions,children:(0,a.jsx)("button",{className:y().code__control,onClick:R,"aria-label":S(x.x_),children:T?(0,a.jsx)(r.f,{}):(0,a.jsx)(_.LE,{})})})]}),(0,a.jsxs)("div",{className:y().code__body,children:[(0,a.jsx)(c.A,{language:h?.toLocaleLowerCase()||"plaintext",showLineNumbers:!N&&j,wrapLines:!0,style:i.C5,children:o}),C&&(0,a.jsx)("div",{className:y().code__console,children:(0,a.jsx)(u.R,{code:C,showConsole:!0,isCopyable:!0,isEmbedded:!0})})]})]})})}},35933:e=>{e.exports={demo_wrapper:"styles_demo_wrapper__Lj_Jg",eyes_container:"styles_eyes_container__cc_Zw",eye:"styles_eye__1jqPl"}},47980:e=>{e.exports={double_code_snippet:"DoubleCodeSnippet_double_code_snippet__gi_Zo"}},48700:e=>{e.exports={example_snippet:"ExampleSnippet_example_snippet__Fwo7u"}},49553:e=>{e.exports={star_wrapper:"animated-star-tutorial_star_wrapper__7UBXu",star:"animated-star-tutorial_star__QWqu9",demo_wrapper:"animated-star-tutorial_demo_wrapper__zrj9z",eyes_container:"animated-star-tutorial_eyes_container__vQuZ4",eye:"animated-star-tutorial_eye__8kB4t"}},54666:(e,s,t)=>{"use strict";t.d(s,{k:()=>r});var a=t(37876),o=t(28948),n=t(84390),c=t(47980),l=t.n(c);let r=({lang:e,code:s,log:t=["",""],name:c=["index","index"],isEmbeddedLog:r})=>{let[i,d]=e,[m,p]=s,[x,_]=c,[u,h]=t;return(0,a.jsx)("div",{className:l().double_code_snippet,children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col col--50 col--tablet-50",children:[(0,a.jsx)(o.Cy,{language:i,name:x,code:m,consoleLog:r?u:void 0}),!r&&u&&(0,a.jsx)(n.k,{code:u})]}),(0,a.jsxs)("div",{className:"col col--50 col--tablet-50",children:[(0,a.jsx)(o.Cy,{language:d,name:_,code:p,consoleLog:r?h:void 0}),!r&&h&&(0,a.jsx)(n.k,{code:h})]})]})})}},56410:(e,s,t)=>{"use strict";t.d(s,{W:()=>r});var a=t(37876),o=t(85335),n=t(81010),c=t(64156),l=t.n(c);let r=({src:e,alt:s,fileTitle:t,maxWidth:c=1024})=>(0,a.jsx)("div",{className:l().post_image,style:{maxWidth:c?`${c}px`:"unset"},children:(0,a.jsx)(o.p,{type:n.gz.IMAGE,fileTitle:t,children:(0,a.jsx)("img",{src:e,alt:s,width:"100%"})})})},58411:e=>{e.exports={code:"Code_code___ALYP",code__wrapper:"Code_code__wrapper__VoZb9",code__header:"Code_code__header__XUQ5W",code__name:"Code_code__name__rsVhv",uppercase:"Code_uppercase__3suyI",code__body:"Code_code__body__Hy27d",code__highlighter:"Code_code__highlighter__JwMRG",code__icon:"Code_code__icon__HYjpp",code__control:"Code_code__control__yx_MM",demo__control:"Code_demo__control__r9nlJ",code__console:"Code_code__console__o8ueE"}},64156:e=>{e.exports={post_image:"PostImage_post_image__BD4eg"}},74343:e=>{e.exports={example:"Example_example__9St6s",DEFAULT:"Example_DEFAULT__HFLHk",EMBEDDED:"Example_EMBEDDED__MPi77",example__console:"Example_example__console__Gt__w",example__console_icon:"Example_example__console_icon__gj4yg",example__console_title:"Example_example__console_title__C_pUG",example__actions:"Example_example__actions__lpQQr",example__control:"Example_example__control__wPPLQ"}},78196:(e,s,t)=>{"use strict";t.d(s,{R:()=>_});var a=t(37876),o=t(14232),n=t(43747),c=t(78261),l=t(40502),r=t(9399),i=t(15039),d=t.n(i),m=t(26457),p=t(74343),x=t.n(p);let _=({code:e,isCopyable:s=!0,isEmbedded:t=!1,showConsole:i=!1})=>{let p=d().bind(x()),{translate:_}=(0,c.W)(),[u,h]=(0,o.useState)(!1),y=t?x().EMBEDDED:x().DEFAULT;return(0,a.jsx)("div",{className:p([x().example,y]),children:(0,a.jsxs)("div",{className:x().code__wrapper,children:[s&&(0,a.jsx)("div",{className:x().example__actions,children:(0,a.jsx)("button",{className:p([x().example__control,y]),onClick:()=>{navigator.clipboard.writeText(e),h(!0),setTimeout(()=>{h(!1)},5e3)},"aria-label":_(l.x_),children:u?(0,a.jsx)(r.fH,{}):(0,a.jsx)(r.LE,{})})}),i&&(0,a.jsxs)("div",{className:p([x().example__console,y]),children:[(0,a.jsx)(r.$2,{className:x().example__console_icon}),(0,a.jsx)("div",{className:x().example__console_title,children:"Console"})]}),(0,a.jsx)(n.A,{language:"javascript",showLineNumbers:!1,style:m.C5,wrapLines:!0,lineProps:()=>({style:{display:"block",position:"relative",paddingLeft:"1.5em"},className:"prefixed-line"}),children:e})]})})}},84390:(e,s,t)=>{"use strict";t.d(s,{k:()=>l});var a=t(37876),o=t(78196),n=t(48700),c=t.n(n);let l=({code:e,isCopyable:s})=>(0,a.jsx)("div",{className:c().example_snippet,children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,a.jsx)(o.R,{code:e,isCopyable:s,showConsole:!0})})})})}},e=>{e.O(0,[230,867,459,577,636,593,792],()=>e(e.s=7019)),_N_E=e.O()}]);