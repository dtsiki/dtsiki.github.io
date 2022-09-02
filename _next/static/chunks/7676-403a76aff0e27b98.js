(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7676],{5557:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(85893),i=r(67294),o=r(41664),a=r.n(o),l=r(92814),s=r(51436),c=r(47166),u=r.n(c),_=r(94878),d=r(80856),p=r(29504),h=r.n(p),g=function(){var t=u().bind(h()),e=(0,i.useMemo)((function(){return d.x.map((function(t){var e=t.id,r=t.title,i=t.highlight,o=t.link,a=t.category,l=t.date,s=t.tags;return(0,n.jsx)(_.Z,{title:r,highlight:i,link:o,category:a,date:l,tags:s},e)}))}),[d.x]);return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h2",{className:h().latestPosts__title,children:(0,n.jsx)("span",{className:"highlighted primary",children:"Latest posts"})}),(0,n.jsx)("div",{className:"spacer large top",children:(0,n.jsx)("ul",{className:"row",children:e})}),(0,n.jsx)(a(),{href:"/blog",children:(0,n.jsxs)("a",{className:t(["link",h().latestPosts__link]),children:["Read blog",(0,n.jsx)(l.G,{icon:s.U23})]})})]})}},63534:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(85893),i=r(67294),o=r(41664),a=r.n(o),l=r(94184),s=r.n(l),c=r(51436),u=r(92814),_=r(83826),d=r.n(_),p=function(t){var e=t.title,r=t.description,i=t.variant,o=t.col,l=s().bind(d());return(0,n.jsx)("li",{className:l(["col col--tablet-100",o]),children:(0,n.jsx)("div",{className:l([d().project,d()[i]]),children:(0,n.jsxs)("div",{className:d().project__overlay,children:[(0,n.jsx)("h2",{className:d().project__title,children:e}),(0,n.jsx)("p",{className:d().project__description,children:r}),(0,n.jsx)(a(),{href:"/projects",children:(0,n.jsxs)("a",{className:d().project__link,children:["Read more",(0,n.jsx)(u.G,{icon:c.U23})]})})]})})})},h=function(){var t=[{variant:"todo",title:"Todo",description:"A simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.",col:"col--33"},{variant:"quoteGenerator",title:"Quote generator",description:"A simple pure JavaScript generator shows random quote and random background color for every quote.",col:"col--33"},{variant:"ticTacToe",title:"Tic Tac Toe",description:"My React implementation of one of the most popular board games in the world for one or two players.",col:"col--33"},{variant:"dictionary",title:"Dictionary",description:"This simple dictionary application is using real-time data from the Free Dictionary API and images from Unsplash API.",col:"col--50"},{variant:"taskManager",title:"Task manager",description:"A simplified kanban board inspired by Trello built with React and TypeScript. HTML drag and drop API is used here.",col:"col--50"}],e=(0,i.useMemo)((function(){return t.map((function(t){var e=t.title,r=t.description,i=t.variant,o=t.col;return(0,n.jsx)(p,{title:e,description:r,variant:i,col:o},e)}))}),[t]);return(0,n.jsx)("ul",{className:"row row--no-margin",children:e})}},42295:function(t,e,r){"use strict";r.d(e,{q:function(){return n}});var n,i=r(85893),o=(r(67294),r(47166)),a=r.n(o),l=r(92814),s=r(51436),c=r(95050),u=r.n(c);!function(t){t.LIGHT="light",t.PRIMARY="primary",t.DARK="dark"}(n||(n={}));e.Z=function(t){var e,r,o,c=t.targetRef,_=t.variant,d=void 0===_?n.PRIMARY:_,p=t.isHidden,h=a().bind(u());return(0,i.jsx)("div",{className:h([u().scrollDownButton,d,(e={},r=u().scrollDownButton_hidden,o=p,r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e)]),children:(0,i.jsxs)("button",{onClick:function(){var t;null===(t=c.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})},className:"button button--circle button--".concat(d),children:[(0,i.jsx)("span",{className:"visually-hidden",children:"Scroll down"}),(0,i.jsx)(l.G,{icon:s.gc2})]})})}},2917:function(t,e,r){"use strict";r.d(e,{Wl:function(){return n},sy:function(){return o}});var n,i,o,a=r(85893),l=(r(67294),r(47166)),s=r.n(l),c=r(41658),u=r.n(c);function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){t.LIGHT="light",t.DARK="dark",t.PRIMARY="primary",t.SECONDARY="secondary",t.GHOST="ghost"}(n||(n={})),function(t){t.LIGHT="light",t.DARK="dark",t.PRIMARY="primary",t.SECONDARY="secondary",t.GHOST="ghost"}(i||(i={})),function(t){t.DIV="div",t.SPAN="span",t.LIST_ITEM="li",t.LINK="a",t.BUTTON="button"}(o||(o={}));e.ZP=function(t){var e,r=t.element,i=void 0===r?o.SPAN:r,l=t.children,c=t.variant,d=void 0===c?n.PRIMARY:c,p=t.linkPath,h=t.isOutlined,g=void 0!==h&&h,v=t.onClick,f=i,m=s().bind(u())([u().tag,d,(e={},_(e,u().outlined,g),_(e,u().button,i===o.BUTTON),e)]);return(0,a.jsx)(a.Fragment,{children:i===o.LINK?(0,a.jsx)("a",{className:m,href:p,target:"_blank",rel:"noopener noreferrer",children:l}):i===o.BUTTON?(0,a.jsx)("button",{onClick:v,className:m,children:l}):(0,a.jsx)(f,{className:m,children:l})})}},96375:function(t,e,r){"use strict";r.d(e,{Z:function(){return n.ZP}});var n=r(2917)},94878:function(t,e,r){"use strict";r.d(e,{Z:function(){return _}});var n=r(85893),i=r(67294),o=r(41664),a=r.n(o),l=r(94184),s=r.n(l),c=r(35714),u=r.n(c),_=function(t){var e=t.title,r=t.highlight,o=t.link,l=t.category,c=t.date,_=t.tags,d=s().bind(u()),p=(0,i.useMemo)((function(){return null===_||void 0===_?void 0:_.map((function(t){return(0,n.jsx)("li",{className:u().preview__tag,children:t},t)}))}),[_]);return(0,n.jsx)("li",{className:"col col--50 col--tablet-100",children:(0,n.jsxs)("div",{className:u().preview,children:[(0,n.jsxs)("div",{className:u().preview__heading,children:[(0,n.jsx)("div",{className:u().preview__date,children:c}),(0,n.jsx)("h2",{className:u().preview__title,children:(0,n.jsx)(a(),{href:o,children:(0,n.jsx)("a",{className:d(["link",u().preview__link]),children:e})})}),(0,n.jsx)("div",{className:u().preview__category,children:l})]}),(0,n.jsx)("p",{className:u().preview__highlight,children:r}),(null===_||void 0===_?void 0:_.length)&&(0,n.jsx)("div",{className:u().preview__footer,children:(0,n.jsx)("ul",{className:u().preview__tags,children:p})})]})})}},80856:function(t,e,r){"use strict";r.d(e,{x:function(){return i}});var n=r(53416),i=[{id:(0,n.x0)(),title:"How to improve your skills",highlight:"If you feel that you're stuck in a rut or just need some fresh inspiration how to enhance your skills there are ways you can do to help achieve this goal.",link:"/blog/how-to-improve-your-skills",category:"insight",date:"2 sep 2022",tags:["skills"]},{id:(0,n.x0)(),title:"Drag and drop",highlight:"A guide to implementing drag and drop in React app without using any third party libraries.",link:"/blog/drag-and-drop",category:"tutorial",date:"1 sep 2022",tags:["React"]},{id:(0,n.x0)(),title:"Pure CSS tooltips",highlight:"A step-by-step tutorial that will show you how to create a tooltip using only CSS without any additional JavaScript code.",link:"/blog/pure-css-tooltips",category:"tutorial",date:"30 jul 2022",tags:["HTML","CSS"]}]},54295:function(t,e,r){"use strict";var n=r(67294);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(t,e,r){var i=(0,n.useState)(!1),a=i[0],l=i[1],s={root:null,rootMargin:null!==r&&void 0!==r?r:"0px",threshold:null!==e&&void 0!==e?e:.1},c=function(e){if(t.current){var r=o(e,1)[0];l(r.isIntersecting)}};return(0,n.useEffect)((function(){var e=new IntersectionObserver(c,s);return t.current&&e.observe(t.current),function(){t.current&&e.unobserve(t.current)}}),[t]),a}},29504:function(t){t.exports={latestPosts__title:"latest-posts_latestPosts__title__6_7g3",latestPosts__link:"latest-posts_latestPosts__link__4aIXv"}},83826:function(t){t.exports={project:"project_project__ZpSFs",project__overlay:"project_project__overlay__8nH9x",project__title:"project_project__title__ttGRc",project__description:"project_project__description__blfR_",project__link:"project_project__link__L3aJ3",dictionary:"project_dictionary__XDpQn",todo:"project_todo__Xkv1T",ticTacToe:"project_ticTacToe__tQ7V_",quoteGenerator:"project_quoteGenerator__rqVwV",taskManager:"project_taskManager__aivR0"}},95050:function(t){t.exports={scrollDownButton:"scroll-down-button_scrollDownButton__Uwuk6",scrollDownButton_hidden:"scroll-down-button_scrollDownButton_hidden__H8WLW",primary:"scroll-down-button_primary__71ooQ",dark:"scroll-down-button_dark__VhVJG",light:"scroll-down-button_light__gA4fH"}},41658:function(t){t.exports={tag:"tag_tag__rXYw3",primary:"tag_primary__CbiDw",secondary:"tag_secondary__10leO",dark:"tag_dark__2QIif",light:"tag_light__6Tdw9",outlined:"tag_outlined__Q9yfG",ghost:"tag_ghost__F_jKN",button:"tag_button__ISOrO"}},35714:function(t){t.exports={preview:"preview_preview__2Eo5p",preview__heading:"preview_preview__heading__Sxn26",preview__title:"preview_preview__title__yIKn5",preview__category:"preview_preview__category__47wkX",preview__date:"preview_preview__date__fX4us",preview__highlight:"preview_preview__highlight__RnHmQ",preview__link:"preview_preview__link__uzNVz",preview__tags:"preview_preview__tags__aX4r_",preview__tag:"preview_preview__tag__TjPP4"}},53416:function(t,e,r){"use strict";r.d(e,{x0:function(){return n}});let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}]);