(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8318:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(4236)}])},3885:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(5893),s=(a(7294),a(4184)),r=a.n(s),i=a(2814),l=a(9398),o=a(723),c=a.n(o),d=function(e){var t=e.href,a=e.label,s=r().bind(c());return(0,n.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:s(["link",c().externalLink]),children:[a,(0,n.jsx)("span",{className:c().externalLink__icon,children:(0,n.jsx)(i.G,{icon:l.wlW})})]})}},2295:function(e,t,a){"use strict";a.d(t,{q:function(){return n}});var n,s=a(5893),r=(a(7294),a(7166)),i=a.n(r),l=a(2814),o=a(9398),c=a(5050),d=a.n(c);!function(e){e.LIGHT="light",e.PRIMARY="primary",e.DARK="dark"}(n||(n={}));t.Z=function(e){var t,a,r,c=e.targetRef,u=e.variant,h=void 0===u?n.PRIMARY:u,_=e.isHidden,m=i().bind(d());return(0,s.jsx)("div",{className:m([d().scrollDownButton,h,(t={},a=d().scrollDownButton_hidden,r=_,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)]),children:(0,s.jsxs)("button",{onClick:function(){var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},className:"button button--circle button--".concat(h),children:[(0,s.jsx)("span",{className:"visually-hidden",children:"Scroll down"}),(0,s.jsx)(l.G,{icon:o.gc2})]})})}},2917:function(e,t,a){"use strict";a.d(t,{Wl:function(){return n},sy:function(){return r}});var n,s,r,i=a(5893),l=(a(7294),a(7166)),o=a.n(l),c=a(1658),d=a.n(c);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(e){e.LIGHT="light",e.DARK="dark",e.PRIMARY="primary",e.SECONDARY="secondary",e.GHOST="ghost"}(n||(n={})),function(e){e.LIGHT="light",e.DARK="dark",e.PRIMARY="primary",e.SECONDARY="secondary",e.GHOST="ghost"}(s||(s={})),function(e){e.DIV="div",e.SPAN="span",e.LIST_ITEM="li",e.LINK="a",e.BUTTON="button"}(r||(r={}));t.ZP=function(e){var t,a=e.element,s=void 0===a?r.SPAN:a,l=e.children,c=e.variant,h=void 0===c?n.PRIMARY:c,_=e.linkPath,m=e.isOutlined,b=void 0!==m&&m,f=e.onClick,x=s,p=o().bind(d())([d().tag,h,(t={},u(t,d().outlined,b),u(t,d().button,s===r.BUTTON),t)]);return(0,i.jsx)(i.Fragment,{children:s===r.LINK?(0,i.jsx)("a",{className:p,href:_,target:"_blank",rel:"noopener noreferrer",children:l}):s===r.BUTTON?(0,i.jsx)("button",{onClick:f,className:p,children:l}):(0,i.jsx)(x,{className:p,children:l})})}},6375:function(e,t,a){"use strict";a.d(t,{Z:function(){return n.ZP}});var n=a(2917)},4295:function(e,t,a){"use strict";var n=a(7294);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,s,r=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(o){l=!0,s=o}finally{try{i||null==a.return||a.return()}finally{if(l)throw s}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e,t,a){var s=(0,n.useState)(!1),i=s[0],l=s[1],o={root:null,rootMargin:null!==a&&void 0!==a?a:"0px",threshold:null!==t&&void 0!==t?t:.1},c=function(t){if(e.current){var a=r(t,1)[0];l(a.isIntersecting)}};return(0,n.useEffect)((function(){var t=new IntersectionObserver(c,o);return e.current&&t.observe(e.current),function(){e.current&&t.unobserve(e.current)}}),[e]),i}},2203:function(e,t,a){"use strict";a.r(t);var n=a(5893);a(7294);t.default=function(){return(0,n.jsxs)("ul",{className:"list",children:[(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:"Bachelor of Informatics and Computer Science"}),(0,n.jsx)("p",{children:"Omsk State Technical University"}),(0,n.jsx)("p",{className:"list__footer",children:"2010 - 2014"})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:"Master of Informatics and Computer Science"}),(0,n.jsx)("p",{children:"Omsk State Technical University"}),(0,n.jsx)("p",{className:"list__footer",children:"2014 - 2016"})]})]})}},4478:function(e,t,a){"use strict";a.r(t);var n=a(5893),s=(a(7294),a(242)),r=a(6343),i=a(2295),l=a(9575),o=a.n(l);t.default=function(e){var t=e.targetRef,a=e.showButton;return(0,n.jsxs)(s.Z,{variant:r.ho.PRIMARY,children:[(0,n.jsxs)("h1",{className:o().hero__title,children:[(0,n.jsx)("em",{children:"Let"})," me ",(0,n.jsx)("span",{className:"underlined light dotted",children:"introduce"})," ",(0,n.jsx)("span",{className:"accented accented--dark highlighted light",children:"myself"})]}),(0,n.jsx)(i.Z,{isHidden:!a,variant:i.q.LIGHT,targetRef:t})]})}},8871:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n.default}});var n=a(4478)},7042:function(e,t,a){"use strict";a.r(t);var n=a(5893),s=a(7294),r=a(4184),i=a.n(r),l=a(2814),o=a(1417),c=a(6375),d=a(2917),u=a(7836),h=a.n(u);t.default=function(){var e=i().bind(h()),t=[{name:"Running",icon:o.Ahb,link:"https://www.strava.com/athletes/15896548"},{name:"Reading",icon:o.ZjG,link:"https://www.goodreads.com/thevioletmaniac"},{name:"Spending time with my dog",icon:o.Zzi,link:"https://www.instagram.com/keshathecorgi"},{name:"Crossfit"},{name:"Puzzles"},{name:"Photoshopping",icon:o.e_U,link:"https://www.deviantart.com/tvm-resources"},{name:"Learning english"},{name:"Traveling"}],a=(0,s.useMemo)((function(){return t.map((function(e){return(0,n.jsx)("li",{className:"list__item",children:e.link?(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"link-with-tag",children:(0,n.jsxs)(c.Z,{variant:d.Wl.DARK,isOutlined:!0,children:[e.name,(0,n.jsx)(l.G,{icon:e.icon})]})}):(0,n.jsx)(c.Z,{variant:d.Wl.DARK,isOutlined:!0,children:e.name})},e.name)}))}),[t]);return(0,n.jsx)("ul",{className:e(["list inline",h().about__hobbies]),children:a})}},2989:function(e,t,a){"use strict";a.r(t);var n=a(5893),s=a(1664),r=a.n(s);a(7294);t.default=function(){return(0,n.jsxs)("p",{children:["You can check more about what I do ",(0,n.jsx)(r(),{href:"/projects",children:(0,n.jsx)("a",{className:"link",children:"here"})})]})}},6651:function(e,t,a){"use strict";a.r(t);var n=a(5893),s=a(4184),r=a.n(s),i=a(7294),l=a(6375),o=a(2917),c=a(7836),d=a.n(c);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t,a,s,c=e.isExtended,u=void 0!==c&&c,_=r().bind(d()),m=["HTML","BEM","CSS","SASS","JavaScript","TypeScript","React","Angular","Next.js","Git","intermediate english"],b=["Webpack","Linter","Prettier","Web API","State management","NPM","a11y"],f=(0,i.useMemo)((function(){return(u?h(m).concat(h(b)):h(m)).map((function(e){return(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)(l.Z,{variant:o.Wl.DARK,isOutlined:!0,children:e})},e)}))}),[m,b,u]);return(0,n.jsx)("ul",{className:_(["list inline",(t={},a=d().about__skills,s=u,a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t)]),children:f})}},3399:function(e,t,a){"use strict";a.r(t);var n=a(5893);a(7294);t.default=function(){return(0,n.jsxs)("ul",{className:"list",children:[(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:"Frontend developer"}),(0,n.jsx)("p",{children:"Ronas IT"}),(0,n.jsx)("p",{className:"list__footer",children:"2021 - present"})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:"Frontend developer"}),(0,n.jsx)("p",{children:"ADCI Solutions"}),(0,n.jsx)("p",{className:"list__footer",children:"2020 - 2021"})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:"Signal processing engineer"}),(0,n.jsx)("p",{children:"Central Design Bureau of Automation"}),(0,n.jsx)("p",{className:"list__footer",children:"2014 - 2020"})]}),(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:"Web developer, designer"}),(0,n.jsx)("p",{children:"freelance"}),(0,n.jsx)("p",{className:"list__footer",children:"2009 - 2014"})]})]})}},4236:function(e,t,a){"use strict";a.r(t),a.d(t,{ViewType:function(){return p},default:function(){return O}});var n=a(5893),s=a(7294),r=a(3416),i=a(9398),l=a(4184),o=a.n(l),c=a(5675),d=a.n(c),u=a(5641),h=a.n(u),_=function(e){var t=e.image,a=e.label,s=e.className,r=e.avatarRef,i=o().bind(h());return(0,n.jsxs)("figure",{ref:r,className:i([h().avatar,s]),children:[(0,n.jsx)(d(),{className:h().avatar__image,src:t,alt:"Me"}),a&&(0,n.jsx)("figcaption",{className:h().avatar__label,children:a})]})},m=a(2814),b=a(3319),f=a.n(b);function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p,A=function(e){var t,a=e.title,s=e.icon,r=e.content,i=e.isReversed,l=void 0!==i&&i,c=e.isCentered,d=void 0!==c&&c,u=o().bind(f())(f().block,(x(t={},f().block_reversed,l),x(t,f().block_centered,d),t));return(0,n.jsx)("div",{className:u,children:(0,n.jsxs)("div",{className:f().block__wrapper,children:[(0,n.jsx)("div",{className:f().block__icon,children:(0,n.jsx)(m.G,{icon:s,size:"2x"})}),(0,n.jsx)("h2",{className:f().block__title,children:a}),r&&(0,n.jsx)("div",{className:f().block__content,children:r})]})})},j=a(8871),v=a(3399),g=a(6651),N=a(2203),w=a(7042),k=a(4295),y=a(2989),I=a(242),R=a(3885),S=a(6343),C=a(8975),T=a.n(C),P=function(){var e=[{name:"Violet",color:"#7F00FF"},{name:"Electric violet",color:"#8F00FF"},{name:"Vivid violet",color:"#9F00FF"},{name:"Dark violet",color:"#9400D3"},{name:"Ultra violet",color:"#645394"},{name:"African violet",color:"#B284BE"},{name:"Lavender",color:"#B57EDC"},{name:"Pixie powder",color:"#501098"}],t=(0,s.useMemo)((function(){return e.map((function(e){var t=e.name,a=e.color;return(0,n.jsxs)("li",{className:T().palette__item,children:[(0,n.jsx)("span",{className:T().palette__color,style:{background:"".concat(a)},children:t}),(0,n.jsx)("span",{className:T().palette__label,children:a})]},a)}))}),[e]);return(0,n.jsx)("ul",{className:T().palette,children:t})},D=a(7836),E=a.n(D),L={src:"/_next/static/media/avatar.86fe612b.jpeg",height:956,width:956,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAmoP/xAAcEAACAgIDAAAAAAAAAAAAAAACAwERAAQSEyH/2gAIAQEAAT8AlqD1EqBUzs9pkZ17xqhHP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"};!function(e){e.FULL="full",e.SHORT="short"}(p||(p={}));var O=function(){var e=(0,s.useState)(p.SHORT),t=e[0],a=e[1],l=(0,s.useRef)(null),c=(0,s.useRef)(null),d=(0,s.useRef)(null),u=(0,s.useRef)(null),h=(0,s.useRef)(null),m=(0,s.useRef)(null),b=(0,k.Z)(l),f=o().bind(E()),x=function(e){var t=e.target.id;a(t)},C=[{id:(0,r.x0)(),title:"Work experience",icon:i.HXv,content:(0,n.jsx)(v.default,{}),ref:c,showInNav:!0},{id:(0,r.x0)(),title:"Skills",icon:i.dT$,content:(0,n.jsx)(g.default,{}),isReversed:!0,ref:d,showInNav:!0},{id:(0,r.x0)(),title:"Education",icon:i.Xf_,content:(0,n.jsx)(N.default,{}),ref:u,showInNav:!0},{id:(0,r.x0)(),title:"Hobbies",icon:i.ctA,content:(0,n.jsx)(w.default,{}),isReversed:!0,ref:h,showInNav:!0},{id:(0,r.x0)(),title:"Projects",icon:i.Zrf,content:(0,n.jsx)(y.default,{}),ref:m,showInNav:!0},{id:(0,r.x0)(),title:"Thanks for watching!",icon:i.m6i,isCentered:!0}],T=(0,s.useMemo)((function(){return C.map((function(e){var t=e.id,a=e.title,s=e.icon,r=e.content,i=e.isReversed,l=e.isCentered,o=e.ref;return(0,n.jsx)("div",{ref:o,children:(0,n.jsx)(A,{icon:s,title:a,content:r,isReversed:i,isCentered:l})},t)}))}),[C]);return(0,n.jsxs)("div",{className:E().about,children:[(0,n.jsx)(j.default,{targetRef:l,showButton:!b}),(0,n.jsx)("div",{ref:l,className:E().about__actions,children:(0,n.jsxs)("ul",{className:"switcher ".concat(t),children:[(0,n.jsxs)("li",{className:"switcher__item",children:[(0,n.jsx)("input",{onChange:x,type:"radio",className:"switcher__input",id:p.SHORT,name:"radioSwitch",checked:t===p.SHORT}),(0,n.jsx)("label",{htmlFor:p.SHORT,className:"switcher__label",children:"Shortest"})]}),(0,n.jsxs)("li",{className:"switcher__item",children:[(0,n.jsx)("input",{onChange:x,type:"radio",className:"switcher__input",id:p.FULL,name:"radioSwitch",checked:t===p.FULL}),(0,n.jsx)("label",{htmlFor:p.FULL,className:"switcher__label",children:"Longest"})]})]})}),t===p.SHORT&&(0,n.jsx)("div",{className:E().about__tab,children:(0,n.jsxs)("div",{className:E().about__section,children:[(0,n.jsx)(_,{image:L,className:E().about__avatar}),(0,n.jsx)("div",{className:"container",children:T})]})}),t===p.FULL&&(0,n.jsx)("div",{className:E().about__tab,children:(0,n.jsxs)("div",{className:E().about__section,children:[(0,n.jsx)(I.Z,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row row--centered",children:[(0,n.jsxs)("div",{className:f(["col col--50 col--tablet-100",E().reversed]),children:[(0,n.jsxs)("h2",{className:E().about__headline,children:["My name is ",(0,n.jsx)("span",{className:"highlighted primary",children:"Daria"})]}),(0,n.jsxs)("h2",{className:E().about__headline,children:["I'm a ",(0,n.jsx)("span",{className:"highlighted secondary",children:"frontend"})," developer"]}),(0,n.jsxs)("h3",{className:E().about__headline,children:["And this is my ",(0,n.jsx)("span",{className:"highlighted ghost",children:"journey"})]})]}),(0,n.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,n.jsxs)("p",{className:E().about__text,children:["My interest in web development started back in ",(0,n.jsx)("span",{className:"underlined primary",children:"2009"})," when I decided to try creating my own little web art project. ",(0,n.jsx)(R.Z,{href:"http://thevioletmaniac.narod.ru/",label:"It still alive!"})]}),(0,n.jsxs)("p",{className:E().about__text,children:["I created different stuff in Photoshop ",(0,n.jsx)("span",{className:"strikethroughed primary",children:"CS3 is my favorite version  for all times!"}),": icons, collages, wallpapers, textures, forum signatures, patterns, tumblr themes, PNGs, pixel art, layout templates, etc, etc, etc. I especially loved to make collages. ",(0,n.jsx)(R.Z,{href:"https://www.deviantart.com/tvm-resources",label:"Here"})," you can see it."]}),(0,n.jsx)("p",{className:E().about__text,children:"I remember that time when JavaScript wasn't popular, everyone loves jQuery and CSS flexbox didn't exist. It was a great time, however!"})]})]})})}),(0,n.jsx)(I.Z,{variant:S.ho.PRIMARY,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row row--centered",children:[(0,n.jsxs)("div",{className:f(["col col--50 col--tablet-100",E().reversed]),children:[(0,n.jsxs)("p",{className:E().about__text,children:["Before now I used to be a digital signal processor ",(0,n.jsx)("span",{className:"highlighted highlighted--dark",children:"engineer"}),". In addition I have a ",(0,n.jsx)("span",{className:"underlined ghost",children:"masters degree"})," in computer science."]}),(0,n.jsxs)("p",{className:E().about__text,children:["In those days I engineered and maintained major features of digital signal processor based systems, proposed and implemented solutions with field programmable gate arrays, developed and maintained code primarily using ",(0,n.jsx)("span",{className:"highlighted highlighted--lavander",children:"C++, Assembler and VHDL"}),"."]}),(0,n.jsx)("p",{className:E().about__text,children:"It's all in the past for me because..."})]}),(0,n.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,n.jsxs)("h2",{className:E().about__headline,children:["Where I've ",(0,n.jsx)("span",{className:"highlighted highlighted--primary",children:"worked"})]})})]})})}),(0,n.jsx)(I.Z,{variant:S.ho.LIGHT,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("p",{className:E().about__subtitle,children:(0,n.jsx)("span",{className:"highlighted highlighted--primary",children:"Now I'm working to make a better web: awesome, easy to use, accessible at all, and I love what I do."})})})}),(0,n.jsx)(I.Z,{variant:S.ho.PRIMARY,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row row--centered",children:[(0,n.jsx)("div",{className:f(["col col--50 col--tablet-100",E().reversed]),children:(0,n.jsx)("h2",{className:E().about__headline,children:"What I do now"})}),(0,n.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,n.jsxs)("p",{className:E().about__text,children:["I have worked as a full-time ",(0,n.jsx)("span",{className:"underlined dotted primary",children:"frontend developer"})," since 2020 with a variety of different languages, platforms, frameworks, and content management systems."]}),(0,n.jsxs)("p",{className:E().about__text,children:["Also I like to pay great attention to ",(0,n.jsx)("span",{className:"highlighted highlighted--grey",children:"semantic"})," and ",(0,n.jsx)("span",{className:"underlined solid primary",children:"accessibility"}),". I write code that is standards based, easy to maintain and cross-browser compatible."]}),(0,n.jsxs)("p",{className:E().about__text,children:["The core technologies I'm working with now: ",(0,n.jsx)("span",{className:"highlighted highlighted--lavander",children:"HTML, CSS"})," and its preprocessors and, of course,  ",(0,n.jsx)("span",{className:"highlighted highlighted--lavander",children:"JavaScript"}),"."]}),(0,n.jsx)("p",{className:E().about__text,children:"Check out the list below showing each technologies:"})]})]})})}),(0,n.jsx)(I.Z,{variant:S.ho.SECONDARY,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row row--centered",children:[(0,n.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,n.jsx)(g.default,{isExtended:!0})}),(0,n.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,n.jsx)("h2",{className:E().about__headline,children:"Tools or technologies I have worked with and my skills:"})})]})})}),(0,n.jsx)(I.Z,{variant:S.ho.PRIMARY,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row row--centered",children:[(0,n.jsx)("div",{className:f(["col col--50 col--tablet-100",E().reversed]),children:(0,n.jsx)("h2",{className:E().about__headline,children:"Outside of work I like"})}),(0,n.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,n.jsx)(w.default,{})})]})})}),(0,n.jsx)(I.Z,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:E().about__pallete,children:[(0,n.jsx)("p",{className:E().about__text,children:(0,n.jsx)("span",{className:"highlighted ghost",children:"The most important thing about me"})}),(0,n.jsxs)("h3",{className:E().about__subtitle,children:["I'm the ",(0,n.jsx)("span",{className:"highlighted primary",children:"violet"})," maniac"]}),(0,n.jsx)(P,{})]})})}),(0,n.jsx)(I.Z,{children:"Projects"}),(0,n.jsx)(I.Z,{children:"Latest posts"}),(0,n.jsx)(I.Z,{variant:S.ho.SECONDARY,children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("h2",{className:E().about__subtitle,children:["Got any ",(0,n.jsx)("span",{className:"highlighted primary",children:"questions?"})]}),(0,n.jsxs)("h3",{className:E().about__subtitle,children:[(0,n.jsx)("span",{className:"highlighted ghost",children:"Feel free"})," to reach me out"]})]})})]})})]})}},5641:function(e){e.exports={avatar:"avatar_avatar___8Tzb",avatar__label:"avatar_avatar__label__KnoGy"}},3319:function(e){e.exports={block:"block_block__fmmpZ",block__wrapper:"block_block__wrapper__mqJ_R",block__icon:"block_block__icon__kGj0K",block__title:"block_block__title___f7Z7",block__content:"block_block__content__T2Caj",block__footer:"block_block__footer__gxR4d",tags:"block_tags__i4tFJ",block_reversed:"block_block_reversed__cbL3g",block_centered:"block_block_centered__CZOhx",list:"block_list__JwMBP"}},723:function(e){e.exports={externalLink__icon:"external-link_externalLink__icon__QpxN3"}},8975:function(e){e.exports={palette:"palette_palette__BJ8GX",palette__item:"palette_palette__item__groPE",palette__color:"palette_palette__color__WQuVN",palette__label:"palette_palette__label__yYlQc"}},5050:function(e){e.exports={scrollDownButton:"scroll-down-button_scrollDownButton__Uwuk6",scrollDownButton_hidden:"scroll-down-button_scrollDownButton_hidden__H8WLW",primary:"scroll-down-button_primary__71ooQ",dark:"scroll-down-button_dark__VhVJG",light:"scroll-down-button_light__gA4fH"}},1658:function(e){e.exports={tag:"tag_tag__rXYw3",primary:"tag_primary__CbiDw",secondary:"tag_secondary__10leO",dark:"tag_dark__2QIif",light:"tag_light__6Tdw9",outlined:"tag_outlined__Q9yfG",ghost:"tag_ghost__F_jKN",button:"tag_button__ISOrO"}},9575:function(e){e.exports={hero:"hero_hero__pWhHv",hero__title:"hero_hero__title__ttHI4"}},7836:function(e){e.exports={about:"about_about__b62NF",about__title:"about_about__title__2mnuD",about__subtitle:"about_about__subtitle__ceHfY",about__headline:"about_about__headline__HMfsy",about__text:"about_about__text__Ndezi",about__avatar:"about_about__avatar__v5FEg",about__actions:"about_about__actions__Rumm6",about__tab:"about_about__tab__smVDK",appearFromLeft:"about_appearFromLeft__P9YvR",about__stack:"about_about__stack__0GyDS",about__pallete:"about_about__pallete__UlpjS",reversed:"about_reversed__8OEYW",about__hobbies:"about_about__hobbies___AQmd",about__skills:"about_about__skills__0kqR0",appearFromBottom:"about_appearFromBottom__QH3uT",appearFromTop:"about_appearFromTop__8_zfe",appearFromRight:"about_appearFromRight__A_Pe8"}},3416:function(e,t,a){"use strict";a.d(t,{x0:function(){return n}});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")}},function(e){e.O(0,[675,774,888,179],(function(){return t=8318,e(e.s=t);var t}));var t=e.O();_N_E=t}]);