(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3327],{96192:function(t,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return e(15781)}])},3590:function(t,r,e){"use strict";e.d(r,{c:function(){return n},Z:function(){return u}});var n,o=e(85893),i=e(9311);function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],c=!0,a=!1;try{for(e=e.call(t);!(c=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"===typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(t){t.SHORTCUT="shortcut",t.WINDOW="window"}(n||(n={}));var u=function(t){var r=t.id,e=t.children,n=t.top,c=t.left,u=t.type,l=a((0,i.c)((function(){return{type:u,item:{id:r,left:c,top:n},collect:function(t){return{isDragging:t.isDragging()}}}}),[r,c,n]),2),s=(l[0],l[1]);return(0,o.jsx)("div",{ref:s,style:{position:"absolute",top:"".concat(n,"%"),left:"".concat(c,"%")},children:e})}},32569:function(t,r,e){"use strict";e.d(r,{Z:function(){return p}});var n=e(85893),o=e(67294),i=e(34569),c=e(3590),a=e(45332),u=e(85979),l=e.n(u);function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function _(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i=[],c=!0,a=!1;try{for(e=e.call(t);!(c=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,r)||h(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||h(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,r){if(t){if("string"===typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,r):void 0}}var p=function(t){var r=t.initialItems,e=(0,o.useState)(f(r)),u=e[0],s=e[1];(0,o.useEffect)((function(){s(r)}),[r]);var h=(0,o.useCallback)((function(t,r,e){var n=f(u),o=u.find((function(r){return r.id===t})),i=(0,a.Y9)(e,r),c=i.top,l=i.left;o.top=c,o.left=l,s(n)}),[u,s]),p=_((0,i.L)((function(){return{accept:Object.values(c.c),drop:function(t,r){var e=(0,a.YS)(t.top,t.left),n=e.top,o=e.left,i=r.getDifferenceFromInitialOffset(),c=Math.round(o+i.x),u=Math.round(n+i.y);h(t.id,c,u)}}}),[h]),2)[1];return(0,n.jsx)("div",{ref:p,className:l().dropArea,children:u.map((function(t){return(0,n.jsx)(c.Z,{type:t.type,id:t.id,top:t.top,left:t.left,children:t.component},t.id)}))})}},5820:function(t,r,e){"use strict";e.d(r,{S:function(){return n}});var n,o=e(85893),i=(e(67294),e(94184)),c=e.n(i),a=e(92814),u=e(25675),l=e.n(u),s=e(39237),_=e.n(s);!function(t){t.PRIMARY="primary",t.SECONDARY="secondary",t.DARK="dark",t.LIGHT="light",t.GHOST="ghost"}(n||(n={}));r.Z=function(t){var r=t.icon,e=t.name,i=t.variant,u=void 0===i?n.PRIMARY:i,s=t.handleAction,f=t.tooltip,h=t.customIcon,p=c().bind(_());return(0,o.jsxs)("div",{className:p([_().shortcut,_()[u],f?" tooltip":""]),children:[r&&(0,o.jsx)("span",{className:_().shortcut__icon,children:(0,o.jsx)(a.G,{icon:r})}),h&&(0,o.jsx)(l(),{src:h,alt:"",width:60,height:60}),e&&(0,o.jsx)("span",{className:_().shortcut__label,children:e}),f&&(0,o.jsx)("div",{className:p(["tooltip__message",_().shortcut__tooltip]),children:f}),s&&(0,o.jsx)("button",{onClick:s,className:_().shortcut__button,children:(0,o.jsx)("span",{children:"Click on shortcut"})})]})}},46793:function(t,r,e){"use strict";e.d(r,{S:function(){return n.S},Z:function(){return n.Z}});var n=e(5820)},15781:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return O}});var n=e(85893),o=e(67294),i=e(94184),c=e.n(i),a=e(90771),u=e(73793),l=e(45332),s=e(64388),_=e(94878),f=e(26601),h=e(51436),p=e(10242),d=e(46793),m=e(32569),y=e(3590),v=e(26343),b=e(29158),g=e.n(b);function j(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function S(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return j(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(t){var r=t.handleScroll,e=[{id:"quote-generator",icon:h.cC_,label:"quote generator",top:10,left:40},{id:"todo",label:"to do",icon:h.cC_,top:75,left:60},{id:"tic-tac-toe",label:"tic tac toe",icon:h.cC_,top:40,left:75},{id:"18-minutes",label:"18 minutes",icon:h.cC_,top:50,left:15},{id:"dictionary",label:"dictionary",icon:h.cC_,top:15,left:67},{id:"audioplayer",label:"audio player",icon:h.cC_,top:45,left:45},{id:"task-manager",label:"task manager",icon:h.cC_,top:63,left:12}],i=(0,o.useState)(S(e.map((function(t){return{id:t.id,top:t.top,left:t.left,type:y.c.SHORTCUT,component:(0,n.jsx)(d.Z,{handleAction:r,variant:d.S.LIGHT,icon:t.icon,name:t.label})}})))),c=i[0];i[1];return(0,n.jsx)("div",{className:g().hero,children:(0,n.jsx)(p.Z,{variant:v.ho.PRIMARY,children:(0,n.jsx)(m.Z,{initialItems:c})})})},I=e(56901),A=e.n(I),O=function(){var t=(0,o.useState)(a.tP.WHITE),r=t[0],e=t[1],i=(0,o.useState)(a.tP.WHITE),h=i[0],p=i[1],d=(0,o.useRef)(null),m=(0,o.useRef)(null),y=(0,u.bI)().dispatch,v=c().bind(A());(0,s.Z)(s.j.SCROLL,(function(){var t={top:document.documentElement.clientHeight-50,bottom:document.documentElement.clientHeight};(0,l.Jv)(d)&&e(a.tP.WHITE),(0,l.Jv)(d,t)&&p(a.tP.WHITE),(0,l.Jv)(m)&&e(a.tP.VIOLET),(0,l.Jv)(m,t)&&p(a.tP.VIOLET)})),(0,o.useEffect)((function(){y(a.Sp.SET_TOP_COLOR,r),y(a.Sp.SET_BOTTOM_COLOR,h)}),[]),(0,o.useEffect)((function(){r&&y(a.Sp.SET_TOP_COLOR,r)}),[r]),(0,o.useEffect)((function(){h&&y(a.Sp.SET_BOTTOM_COLOR,h)}),[h]);var b=(0,o.useMemo)((function(){return f.q.map((function(t){var r=t.id,e=t.title,o=t.highlight,i=t.link,c=t.tags,a=t.thumbnail;return(0,n.jsx)(_.Z,{title:e,highlight:o,link:i,hasExternalLink:!0,tags:c,thumbnail:"assets/projects/previews/".concat(a,".png")},r)}))}),[]);return(0,n.jsxs)("div",{className:A().projects,children:[(0,n.jsx)("div",{ref:d,children:(0,n.jsx)(w,{handleScroll:function(){var t;null===(t=m.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}})}),(0,n.jsx)("div",{ref:m,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("ul",{className:v(["row",A().projects__list]),children:b})})})]})}},45332:function(t,r,e){"use strict";e.d(r,{Jv:function(){return n},Y9:function(){return o},YS:function(){return i}});var n=function(t){var r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{top:50,bottom:50},n=null===(r=t.current)||void 0===r?void 0:r.getBoundingClientRect();return!!n&&(n.top<=e.top&&n.bottom>=e.bottom)},o=function(t,r){return{left:100*r/window.screen.width,top:100*t/window.screen.height}},i=function(t,r){return{left:r*window.screen.width/100,top:t*window.screen.height/100}}},85979:function(t){t.exports={dropArea:"drop-area_dropArea__flyQ0"}},39237:function(t){t.exports={shortcut:"shortcut_shortcut__svodw",primary:"shortcut_primary__5_M7X",secondary:"shortcut_secondary__fzbCG",dark:"shortcut_dark__FQS4G",light:"shortcut_light__ezB9t",ghost:"shortcut_ghost__W34gd",shortcut__icon:"shortcut_shortcut__icon__YJFvF",shortcut__customIcon:"shortcut_shortcut__customIcon__0oCcI",shortcut__label:"shortcut_shortcut__label__qtFa3",shortcut__button:"shortcut_shortcut__button__wriup",shortcut__tooltip:"shortcut_shortcut__tooltip__fWQUx"}},29158:function(t){t.exports={hero:"hero_hero__V3w4D",hero__overlay:"hero_hero__overlay__ICsu5",hero__wrapper:"hero_hero__wrapper__2TR5A",hero__heading:"hero_hero__heading__ElDg2",hero__title:"hero_hero__title__cwvts",hero__subtitle:"hero_hero__subtitle__Km5LL",hero__icon:"hero_hero__icon__pNd5G",hero__shortcut:"hero_hero__shortcut__FeTRq",appearFromLeft:"hero_appearFromLeft__u7fXb",appearFromBottom:"hero_appearFromBottom__e70hc",appearFromTop:"hero_appearFromTop__DkiNg",appearFromRight:"hero_appearFromRight__43SX4",appearFromNowhere:"hero_appearFromNowhere__S43Ji",appearFromFront:"hero_appearFromFront__w2XLp",hideInFront:"hero_hideInFront__bC95o",appearFromNearFront:"hero_appearFromNearFront__e7Wig",spin:"hero_spin__XJuhs",slide:"hero_slide__FvEmM",shake:"hero_shake__ZZT3E","up-and-down":"hero_up-and-down__GlXmj",beat:"hero_beat__qsD5Q",neon:"hero_neon__qHGZp"}},56901:function(t){t.exports={projects:"projects_projects__FsgQB",projects__title:"projects_projects__title__2_u_z",projects__subtitle:"projects_projects__subtitle__oOHWe",projects__list:"projects_projects__list__Xs8zO"}},53416:function(t,r,e){"use strict";e.d(r,{x0:function(){return n}});let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,r)=>t+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"),"")}},function(t){t.O(0,[5675,5812,2798,9774,2888,179],(function(){return r=96192,t(t.s=r);var r}));var r=t.O();_N_E=r}]);