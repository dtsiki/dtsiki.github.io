(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3327],{96192:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(13210)}])},3885:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(85893),i=(r(67294),r(94184)),a=r.n(i),s=r(92814),o=r(51436),c=r(90723),l=r.n(c),u=function(t){var e=t.href,r=t.label,i=a().bind(l());return(0,n.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:i(["link",l().externalLink]),children:[r,(0,n.jsx)("span",{className:l().externalLink__icon,children:(0,n.jsx)(s.G,{icon:o.wlW})})]})}},73016:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(85893),i=r(67294),a=r(35380),s=r.n(a),o=r(64388),c=function(){var t=(0,i.useState)(0),e=t[0],r=t[1];return(0,o.Z)(o.j.SCROLL,(function(){var t=document.documentElement.scrollHeight-document.documentElement.clientHeight,e=window.scrollY,n=Math.round(100*e/t);r(n)})),(0,n.jsx)("div",{className:s().progressScroll,children:(0,n.jsx)("div",{className:s().progressScroll__tracker,style:{width:"".concat(e,"%")}})})}},42295:function(t,e,r){"use strict";r.d(e,{q:function(){return n}});var n,i=r(85893),a=(r(67294),r(47166)),s=r.n(a),o=r(92814),c=r(51436),l=r(95050),u=r.n(l);!function(t){t.LIGHT="light",t.PRIMARY="primary",t.DARK="dark"}(n||(n={}));e.Z=function(t){var e,r,a,l=t.targetRef,d=t.variant,f=void 0===d?n.PRIMARY:d,_=t.isHidden,h=s().bind(u());return(0,i.jsx)("div",{className:h([u().scrollDownButton,f,(e={},r=u().scrollDownButton_hidden,a=_,r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e)]),children:(0,i.jsxs)("button",{onClick:function(){var t;null===(t=l.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})},className:"button button--circle button--".concat(f),children:[(0,i.jsx)("span",{className:"visually-hidden",children:"Scroll down"}),(0,i.jsx)(o.G,{icon:c.gc2})]})})}},2917:function(t,e,r){"use strict";r.d(e,{Wl:function(){return n},sy:function(){return a}});var n,i,a,s=r(85893),o=(r(67294),r(47166)),c=r.n(o),l=r(41658),u=r.n(l);function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){t.LIGHT="light",t.DARK="dark",t.PRIMARY="primary",t.SECONDARY="secondary",t.GHOST="ghost"}(n||(n={})),function(t){t.LIGHT="light",t.DARK="dark",t.PRIMARY="primary",t.SECONDARY="secondary",t.GHOST="ghost"}(i||(i={})),function(t){t.DIV="div",t.SPAN="span",t.LIST_ITEM="li",t.LINK="a",t.BUTTON="button"}(a||(a={}));e.ZP=function(t){var e,r=t.element,i=void 0===r?a.SPAN:r,o=t.children,l=t.variant,f=void 0===l?n.PRIMARY:l,_=t.linkPath,h=t.isOutlined,m=void 0!==h&&h,A=t.onClick,p=i,g=c().bind(u())([u().tag,f,(e={},d(e,u().outlined,m),d(e,u().button,i===a.BUTTON),e)]);return(0,s.jsx)(s.Fragment,{children:i===a.LINK?(0,s.jsx)("a",{className:g,href:_,target:"_blank",rel:"noopener noreferrer",children:o}):i===a.BUTTON?(0,s.jsx)("button",{onClick:A,className:g,children:o}):(0,s.jsx)(p,{className:g,children:o})})}},96375:function(t,e,r){"use strict";r.d(e,{Z:function(){return n.ZP}});var n=r(2917)},54295:function(t,e,r){"use strict";var n=r(67294);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,a=[],s=!0,o=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(c){o=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(t,e,r){var i=(0,n.useState)(!1),s=i[0],o=i[1],c={root:null,rootMargin:null!==r&&void 0!==r?r:"0px",threshold:null!==e&&void 0!==e?e:.1},l=function(e){if(t.current){var r=a(e,1)[0];o(r.isIntersecting)}};return(0,n.useEffect)((function(){var e=new IntersectionObserver(l,c);return t.current&&e.observe(t.current),function(){t.current&&e.unobserve(t.current)}}),[t]),s}},21461:function(t,e,r){"use strict";r.r(e);var n=r(85893),i=r(67294),a=r(53416),s=r(10242),o=r(13011),c=r.n(o);e.default=function(){var t=[{id:(0,a.x0)(),name:"Voluntary return and reintegration information portal",stack:"Next.js"},{id:(0,a.x0)(),name:"Social media marketing reporting platform",stack:"React"},{id:(0,a.x0)(),name:"Corporate portal for environmental protection company",stack:"Drupal/Javascript"},{id:(0,a.x0)(),name:"China Studies institute web-site",stack:"Dripal/JavaScript"},{id:(0,a.x0)(),name:"Boat marketplace",stack:"Angular"},{id:(0,a.x0)(),name:"\u0421orporate portal",stack:"Next.js"}],e=(0,i.useMemo)((function(){return t.map((function(t){var e=t.id,r=t.name,i=t.stack;return(0,n.jsxs)("li",{className:"list__item",children:[(0,n.jsx)("h3",{className:"list__title",children:r}),(0,n.jsx)("p",{className:"list__footer",children:i})]},e)}))}),[t]);return(0,n.jsx)(s.Z,{children:(0,n.jsx)("div",{className:c().commercialProjects,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row row--centered",children:[(0,n.jsx)("div",{className:"col col--tablet-100 col--50",children:(0,n.jsx)("h2",{className:c().commercialProjects__title,children:"Commercial projects"})}),(0,n.jsx)("div",{className:"col col--tablet-100 col--50",children:(0,n.jsx)("ul",{className:"list",children:e})})]})})})})}},92094:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(21461)},4128:function(t,e,r){"use strict";r.r(e);var n=r(85893),i=r(67294),a=r(94184),s=r.n(a),o=r(10242),c=r(26343),l=r(3885),u=r(96375),d=r(2917),f=r(25534),_=r.n(f);e.default=function(t){var e=t.title,r=t.tags,a=t.description,f=t.demoLink,h=t.sourceLink,m=s().bind(_()),A=(0,i.useMemo)((function(){return null===r||void 0===r?void 0:r.map((function(t){return(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)(u.Z,{variant:d.Wl.DARK,isOutlined:!0,children:t})},t)}))}),[r]);return(0,n.jsx)(o.Z,{variant:c.ho.SECONDARY,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,n.jsx)("h3",{className:_().details__title,children:e}),(0,n.jsx)("ul",{className:m(["list inline",_().details__tags]),children:A})]}),(0,n.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,n.jsx)("p",{className:_().details__description,children:a}),(f||h)&&(0,n.jsxs)("ul",{className:_().details__list,children:[f&&(0,n.jsx)("li",{children:(0,n.jsx)(l.Z,{label:"Demo",href:f})}),h&&(0,n.jsx)("li",{children:(0,n.jsx)(l.Z,{label:"Source code",href:h})})]})]})]})})})}},81337:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(4128)},8805:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var n=r(85893),i=(r(67294),r(25675)),a=r.n(i),s=r(10242),o=r(26343),c=r(81337),l={src:"/_next/static/media/dictionary.4fc0c7ad.png",height:900,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AGc3r2s+s2cws1UAqlcAp2QxqGItpV8ooQBoPa5fJ6yIb7u0ptCfiMZvPa9iLKBeKJ0AZz6tXCWoiXS7sJ7MnYPBZi+oXSqbXSiaAGY+rmhCsWY6rV0RoFsXn2IwnlwqmlsnlgBnQK1gMJheJYtcIoJeMZldMaBbK5haKJUB7zPG8q/D5wAAAABJRU5ErkJggg=="},u=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{variant:o.ho.DARK,children:(0,n.jsx)(a(),{src:l,alt:"dictionary",layout:"fill",objectFit:"cover"})}),(0,n.jsx)(c.default,{title:"Dictionary",tags:["HTML","CSS","React","API"],description:"This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.",demoLink:"https://dtsiki.github.io/react-dictionary-app",sourceLink:"https://github.com/dtsiki/react-dictionary-app"})]})}},91488:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(8805)},67482:function(t,e,r){"use strict";r.r(e);var n=r(85893),i=(r(67294),r(10242)),a=r(26343),s=r(42295),o=r(43764),c=r.n(o);e.default=function(t){var e=t.targetRef,r=t.showButton;return(0,n.jsxs)(i.Z,{variant:a.ho.LIGHT,children:[(0,n.jsx)("h1",{className:c().hero__title,children:"the frontend made me do it"}),(0,n.jsx)(s.Z,{isHidden:!r,variant:s.q.PRIMARY,targetRef:e})]})}},56102:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(67482)},58534:function(t,e,r){"use strict";r.r(e);var n=r(85893),i=(r(67294),r(10242)),a=r(26343),s=r(81337);e.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:a.ho.PRIMARY,children:(0,n.jsx)("iframe",{className:"frame",src:"https://dtsiki.github.io/quote-generator",title:"Quote generator"})}),(0,n.jsx)(s.default,{title:"Quote generator",tags:["HTML","CSS","JavaScript"],description:"A simple pure JavaScript generator shows random quote and random background color for every quote.",demoLink:"https://dtsiki.github.io/quote-generator",sourceLink:"https://github.com/dtsiki/quote-generator"})]})}},68477:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(58534)},76731:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(85893),i=(r(67294),r(25675)),a=r.n(i),s=r(10242),o=r(81337),c={src:"/_next/static/media/task-manager.322543fd.png",height:800,width:1580,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAATElEQVR42jXJSw6AIAxFUfa/RWdoqGCJGpXIrzVt5OQNXnJNWJKdjggZ3Ysu76F0ZaJ//HxtkBAS2BPX+w/MJFO1ldYrK0PEMqF5/A/Y91zIWVdHXQAAAABJRU5ErkJggg=="},l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(a(),{src:c,alt:"task manager"})}),(0,n.jsx)(o.default,{title:"Task manager",description:"React with TypeScript simplified kanban board inspired by Trello. HTML drag and drop API is used here.",tags:["HTML","CSS","React","TypeScript"],sourceLink:"https://github.com/dtsiki/task-manager"})]})}},68589:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(76731)},65524:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(85893),i=(r(67294),r(25675)),a=r.n(i),s=r(10242),o=r(81337),c={src:"/_next/static/media/tic-tac-toe.c91d04cd.png",height:800,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAANlBMVEX//////v7+/v7+/f79/f78/P77+v77+v339/329v3z8fzz7/vx8Pvx7/vw7/vv7Prw6/rt5/gsMcb8AAAAL0lEQVR42mNgYGIAAiYQ4uDj4YIwePk5GZiAkJFbkBnMYBFgg6hhYmdlYAKyoAgAGmwAwh5KU7sAAAAASUVORK5CYII="},l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(a(),{src:c,alt:"tic tac toe"})}),(0,n.jsx)(o.default,{title:"Tic Tac Toe",tags:["HTML","CSS","React"],description:"Tic tac toe is one of the oldest and most popular board games in the world and there is my React implementation of this legendary game for one or two players.",demoLink:"https://dtsiki.github.io/tic-tac-toe",sourceLink:"https://github.com/dtsiki/tic-tac-toe"})]})}},20390:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(65524)},66400:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(85893),i=(r(67294),r(25675)),a=r.n(i),s=r(10242),o=r(81337),c={src:"/_next/static/media/todo.36c1a050.png",height:550,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEX///////7+/v/+/v79/f79/f39/P78/Pz8+/37+v36+vz6+vv5+P34+Pr49/r39Pz18vz08Pvz8Pncz/TFWH0LAAAALElEQVR42hXIxREAIAAEsYXDXfrvlSHPIJEXAtk6zt1gbI8k98eXaQSI0JAeFWUA3CnpmYoAAAAASUVORK5CYII="},l=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(a(),{src:c,alt:"todo"})}),(0,n.jsx)(o.default,{title:"Todo",description:"Simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.",tags:["HTML","CSS","React"],sourceLink:"https://github.com/dtsiki/todo"})]})}},8778:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n.default}});var n=r(66400)},13210:function(t,e,r){"use strict";r.r(e);var n=r(85893),i=r(67294),a=r(94184),s=r.n(a),o=r(54295),c=r(92094),l=r(91488),u=r(56102),d=r(68477),f=r(20390),_=r(8778),h=r(73016),m=r(2917),A=r(10242),p=r(26343),g=r(68589),v=r(56901),j=r.n(v);e.default=function(){var t=(0,i.useRef)(null),e=(0,i.useRef)(null),r=(0,i.useRef)(null),a=(0,i.useRef)(null),v=(0,i.useRef)(null),x=(0,i.useRef)(null),b=(0,o.Z)(t),k=s().bind(j()),w=[{name:"Quote generator",ref:e},{name:"Todo",ref:r},{name:"Tic Tac Toe",ref:a},{name:"Dictionary",ref:v},{name:"Task manager",ref:x}],N=(0,i.useMemo)((function(){return w.map((function(t){return(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)(m.ZP,{element:m.sy.BUTTON,onClick:function(){return function(t){var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}(t.ref)},variant:m.Wl.LIGHT,isOutlined:!0,children:t.name})},t.name)}))}),[w]);return(0,n.jsxs)("div",{className:j().projects,children:[(0,n.jsx)(h.Z,{}),(0,n.jsx)(u.default,{targetRef:t,showButton:!b}),(0,n.jsx)("div",{ref:t,children:(0,n.jsx)(A.Z,{variant:p.ho.PRIMARY,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:k(["row row--centered",j().projects__pet]),children:[(0,n.jsx)("div",{className:"col col--tablet-100 col--50",children:(0,n.jsx)("ul",{className:k(["list inline",j().projects__list]),children:N})}),(0,n.jsx)("div",{className:"col col--tablet-100 col--50",children:(0,n.jsx)("h2",{className:j().projects__subtitle,children:"Pet projects"})})]})})})}),(0,n.jsx)("div",{ref:r,children:(0,n.jsx)(_.default,{})}),(0,n.jsx)("div",{ref:e,children:(0,n.jsx)(d.default,{})}),(0,n.jsx)("div",{ref:a,children:(0,n.jsx)(f.default,{})}),(0,n.jsx)("div",{ref:v,children:(0,n.jsx)(l.default,{})}),(0,n.jsx)("div",{ref:x,children:(0,n.jsx)(g.default,{})}),(0,n.jsx)(c.default,{})]})}},90723:function(t){t.exports={externalLink__icon:"external-link_externalLink__icon__QpxN3"}},35380:function(t){t.exports={progressScroll:"progress-scroll_progressScroll__IM5Sn",progressScroll__tracker:"progress-scroll_progressScroll__tracker__OOKkH"}},95050:function(t){t.exports={scrollDownButton:"scroll-down-button_scrollDownButton__Uwuk6",scrollDownButton_hidden:"scroll-down-button_scrollDownButton_hidden__H8WLW",primary:"scroll-down-button_primary__71ooQ",dark:"scroll-down-button_dark__VhVJG",light:"scroll-down-button_light__gA4fH"}},41658:function(t){t.exports={tag:"tag_tag__rXYw3",primary:"tag_primary__CbiDw",secondary:"tag_secondary__10leO",dark:"tag_dark__2QIif",light:"tag_light__6Tdw9",outlined:"tag_outlined__Q9yfG",ghost:"tag_ghost__F_jKN",button:"tag_button__ISOrO"}},13011:function(t){t.exports={commercialProjects:"commercial-projects_commercialProjects__GJE1b",commercialProjects__title:"commercial-projects_commercialProjects__title__nWe4V"}},25534:function(t){t.exports={details:"details_details__2LVbx",details__title:"details_details__title__5cib0",details__tags:"details_details__tags__3yvn0",details__description:"details_details__description__FRvn_",details__list:"details_details__list__2FGPW"}},43764:function(t){t.exports={hero:"hero_hero__T343o",hero__title:"hero_hero__title__tamuv"}},56901:function(t){t.exports={projects:"projects_projects__FsgQB",projects__title:"projects_projects__title__2_u_z",projects__subtitle:"projects_projects__subtitle__oOHWe",projects__list:"projects_projects__list__Xs8zO",projects__pet:"projects_projects__pet__Qz03U"}},53416:function(t,e,r){"use strict";r.d(e,{x0:function(){return n}});let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}},function(t){t.O(0,[5675,9774,2888,179],(function(){return e=96192,t(t.s=e);var e}));var e=t.O();_N_E=e}]);