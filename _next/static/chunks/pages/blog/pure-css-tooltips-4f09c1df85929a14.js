(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8527],{24895:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/pure-css-tooltips",function(){return o(45407)}])},69246:function(e,t,o){"use strict";function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,s=new Array(t);o<t;o++)s[o]=e[o];return s}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var s,i,n=[],l=!0,r=!1;try{for(o=o.call(e);!(l=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);l=!0);}catch(a){r=!0,i=a}finally{try{l||null==o.return||o.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,s=e.disabled||!r,d=n.useRef(),p=i(n.useState(!1),2),_=p[0],m=p[1],u=i(n.useState(t?t.current:null),2),h=u[0],g=u[1],x=n.useCallback((function(e){d.current&&(d.current(),d.current=void 0),s||_||e&&e.tagName&&(d.current=function(e,t,o){var s=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},s=c.find((function(e){return e.root===o.root&&e.margin===o.margin}));s?t=a.get(s):(t=a.get(o),c.push(o));if(t)return t;var i=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return a.set(o,t={id:o,observer:n,elements:i}),t}(o),i=s.id,n=s.observer,l=s.elements;return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:o}))}),[s,h,o,_]),f=n.useCallback((function(){m(!1)}),[]);return n.useEffect((function(){if(!r&&!_){var e=l.requestIdleCallback((function(){return m(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[_]),n.useEffect((function(){t&&g(t.current)}),[t]),[x,_,f]};var n=o(67294),l=o(44686),r="undefined"!==typeof IntersectionObserver;var a=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},11428:function(e,t,o){"use strict";o.d(t,{uw:function(){return s}});var s,i,n=o(85893),l=o(92814),r=o(51436),a=o(35192),c=o(26671),d=o(28964),p=o.n(d);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(s||(s={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(i||(i={}));t.ZP=function(e){var t=e.name,o=e.customName,s=e.code,d=e.language,_=e.showOnlyCode,m=void 0!==_&&_,u=e.showLineNumbers,h=void 0===u||u,g=e.startingLineNumber,x=e.isTerminal,f=void 0!==x&&x,v=function(){navigator.clipboard.writeText(s)};return(0,n.jsx)("div",{className:p().code,children:m?(0,n.jsxs)("div",{className:p().code__highlighter,children:[(0,n.jsx)("div",{className:p().code__actions,children:(0,n.jsxs)("button",{className:p().code__control,onClick:v,children:[(0,n.jsx)(l.G,{icon:r.kZ_}),(0,n.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})}),(0,n.jsx)(a.Z,{startingLineNumber:g,language:d||"plaintext",showLineNumbers:h,style:c.Y3,children:s})]}):(0,n.jsxs)("div",{className:p().code__wrapper,children:[(0,n.jsxs)("div",{className:p().code__header,children:[(0,n.jsxs)("div",{className:p().code__name,children:[(0,n.jsx)(l.G,{icon:f?r.Jw3:r.gMD}),o||d&&t&&"".concat(t,".").concat(i[d])]}),(0,n.jsx)("div",{className:p().code__actions,children:(0,n.jsxs)("button",{className:p().code__control,onClick:v,children:[(0,n.jsx)(l.G,{icon:r.kZ_}),(0,n.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,n.jsx)("div",{className:p().code__body,children:(0,n.jsx)(a.Z,{language:d||"plaintext",showLineNumbers:!f&&h,style:c.Y3,children:s})})]})})}},95319:function(e,t,o){"use strict";o.d(t,{Z:function(){return s.ZP}});var s=o(11428)},3885:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var s=o(85893),i=(o(67294),o(94184)),n=o.n(i),l=o(92814),r=o(51436),a=o(90723),c=o.n(a),d=function(e){var t=e.href,o=e.label,i=n().bind(c());return(0,s.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:i(["link",c().externalLink]),children:[o,(0,s.jsx)("span",{className:c().externalLink__icon,children:(0,s.jsx)(l.G,{icon:r.wlW})})]})}},73016:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var s=o(85893),i=o(67294),n=o(35380),l=o.n(n),r=o(64388),a=function(){var e=(0,i.useState)(0),t=e[0],o=e[1];return(0,r.Z)(r.j.SCROLL,(function(){var e=document.documentElement.scrollHeight-document.documentElement.clientHeight,t=window.scrollY,s=Math.round(100*t/e);o(s)})),(0,s.jsx)("div",{className:l().progressScroll,children:(0,s.jsx)("div",{className:l().progressScroll__tracker,style:{width:"".concat(t,"%")}})})}},61809:function(e,t,o){"use strict";o.d(t,{LW:function(){return s},Ym:function(){return i}});var s,i,n=o(85893),l=(o(67294),o(94184)),r=o.n(l),a=o(74645),c=o.n(a);!function(e){e.DEFAULT="default",e.PRIMARY="primary",e.SECONDARY="secondary",e.HERO="hero"}(s||(s={})),function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right"}(i||(i={}));t.ZP=function(e){var t,o,l,a=e.tooltip,d=e.message,p=e.variant,_=void 0===p?s.PRIMARY:p,m=e.direction,u=void 0===m?i.RIGHT:m,h=e.isInline,g=void 0!==h&&h,x=e.disableTriggering,f=void 0!==x&&x,v=r().bind(c()),j=!g&&_!==s.HERO;return(0,n.jsxs)("div",{className:v(["tooltip",c().demoTooltip,c()[_],j&&c()[u],(t={},o=c().inline,l=g,o in t?Object.defineProperty(t,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[o]=l,t)]),children:[a,(0,n.jsx)("div",{className:v([!f&&"tooltip__message",c().demoTooltip__message]),children:d})]})}},34487:function(e,t,o){"use strict";o.d(t,{Z:function(){return s.ZP}});var s=o(61809)},99074:function(e,t,o){"use strict";o.d(t,{Z:function(){return u}});var s=o(85893),i=o(67294),n=o(41664),l=o.n(n),r=o(92814),a=o(51436),c=o(94184),d=o.n(c),p=o(2962),_=o(24335),m=o.n(_),u=function(e){var t=e.title,o=e.highlight,n=e.metaDescription,c=e.metaTags,_=e.category,u=e.date,h=e.children,g=e.nextLink,x=e.nextLinkLabel,f=e.tags,v=e.isWorkInProgress,j=d().bind(m()),y=(0,i.useMemo)((function(){return null===f||void 0===f?void 0:f.map((function(e){return(0,s.jsx)("li",{className:m().post__tag,children:e},e)}))}),[f]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.PB,{title:"@dtsiki/blog: ".concat(t),description:n,additionalMetaTags:[{name:"keywords",content:c}]}),(0,s.jsx)("div",{className:m().post,children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:m().post__header,children:[(null===f||void 0===f?void 0:f.length)&&(0,s.jsx)("ul",{className:m().post__tags,children:y}),(0,s.jsxs)("h1",{className:m().post__title,children:[t,v&&(0,s.jsxs)("span",{className:j([m().post__alert]),children:[(0,s.jsx)("span",{className:j([m().post__icon,m().wrapper]),children:(0,s.jsx)(r.G,{icon:a.zc})}),(0,s.jsx)("span",{className:j([m().post__icon,m().icon]),children:(0,s.jsx)(r.G,{icon:a.$tV})}),(0,s.jsx)("span",{className:"visually-hidden",children:"Work in progress"})]})]})]}),(0,s.jsxs)("div",{className:m().post__info,children:[(0,s.jsxs)("div",{className:m().post__details,children:[(0,s.jsx)("div",{className:m().post__category,children:_}),(0,s.jsx)("div",{className:m().post__date,children:u})]}),(0,s.jsx)("p",{className:m().post__highlight,children:o})]}),(0,s.jsx)("div",{className:m().post__content,children:h}),(0,s.jsxs)("div",{className:m().post__footer,children:[(0,s.jsx)(l(),{href:"/blog",children:(0,s.jsxs)("a",{className:j(["link",m().post__link,m().back]),children:[(0,s.jsx)(r.G,{icon:a.Atv}),"Blog"]})}),g&&(0,s.jsx)(l(),{href:g,children:(0,s.jsxs)("a",{className:j(["link",m().post__link,m().next]),children:["Next",(0,s.jsx)(r.G,{icon:a.U23}),(0,s.jsx)("span",{className:m().post__next,children:x})]})})]})]})})]})}},3340:function(e,t,o){"use strict";o.r(t);var s=o(85893),i=(o(67294),o(92814)),n=o(51436),l=o(75302),r=o(34487),a=o(61809),c=o(46578),d=o.n(c);t.default=function(e){var t=e.disableTriggering,o=void 0!==t&&t;return(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:d().post__example,children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud yay ",(0,s.jsx)(r.Z,{tooltip:(0,s.jsx)(i.G,{icon:n.DBf}),message:"I'm a tooltip!",isInline:!0,disableTriggering:o,variant:a.LW.DEFAULT}),"ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]})})}},28610:function(e,t,o){"use strict";o.r(t);var s=o(85893),i=(o(67294),o(47166)),n=o.n(i),l=o(75302),r=o(34487),a=o(61809),c=o(58941),d=o.n(c);t.default=function(){var e=n().bind(d());return(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:d().customizedTooltipsDemo,children:[(0,s.jsx)("h3",{className:d().customizedTooltipsDemo__title,children:"There are two types of tooltips:"}),(0,s.jsxs)("ol",{className:"list ordered",children:[(0,s.jsx)("li",{className:"list__item",children:(0,s.jsx)("div",{className:d().customizedTooltipsDemo__item,children:(0,s.jsx)(r.Z,{tooltip:(0,s.jsx)("span",{className:e([d().customizedTooltipsDemo__label,"underlined dotted primary"]),children:"Primary"}),message:"Yay!",variant:a.LW.PRIMARY,direction:a.Ym.RIGHT})})}),(0,s.jsx)("li",{className:"list__item",children:(0,s.jsx)("div",{className:d().customizedTooltipsDemo__item,children:(0,s.jsx)(r.Z,{tooltip:(0,s.jsx)("span",{className:e([d().customizedTooltipsDemo__label,"underlined dotted primary"]),children:"Secondary tooltip"}),message:"Yay!",variant:a.LW.SECONDARY,direction:a.Ym.RIGHT})})})]})]})})}},71225:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s.default}});var s=o(28610)},38266:function(e,t,o){"use strict";o.r(t);var s=o(85893),i=o(94184),n=o.n(i),l=o(67294),r=o(75302),a=o(34487),c=o(61809),d=o(15235),p=o.n(d);t.default=function(){var e=n().bind(p()),t=[c.Ym.RIGHT,c.Ym.TOP,c.Ym.LEFT,c.Ym.BOTTOM],o=(0,l.useMemo)((function(){return t.map((function(t){return(0,s.jsx)("li",{className:"col col--25 col--tablet-50 col--mobile-100",children:(0,s.jsx)("div",{className:p().directionsTooltipsDemo__item,children:(0,s.jsx)(a.Z,{tooltip:(0,s.jsx)("span",{className:e([p().directionsTooltipsDemo__label,"underlined dotted primary"]),children:t}),message:t,variant:c.LW.PRIMARY,direction:t})})},t)}))}),[t]);return(0,s.jsx)(r.Z,{children:(0,s.jsxs)("div",{className:p().directionsTooltipsDemo,children:[(0,s.jsx)("h3",{className:p().directionsTooltipsDemo__title,children:"There are four directions of tooltips:"}),(0,s.jsx)("ul",{className:e(["row",p().directionsTooltipsDemo__list]),children:o})]})})}},90863:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s.default}});var s=o(38266)},83939:function(e,t,o){"use strict";o.r(t);var s=o(85893),i=(o(67294),o(75302)),n=o(34487),l=o(61809),r=o(89647),a=o.n(r);t.default=function(){return(0,s.jsx)(i.Z,{children:(0,s.jsxs)("div",{className:a().heroTooltipDemo,children:["Let's make a ",(0,s.jsx)(n.Z,{tooltip:(0,s.jsx)("span",{className:"underlined dotted primary",children:"tooltip"}),message:"Yay!",variant:l.LW.HERO,direction:l.Ym.BOTTOM})]})})}},15383:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return s.default}});var s=o(83939)},45407:function(e,t,o){"use strict";o.r(t);var s=o(85893),i=(o(67294),o(92814)),n=o(51436),l=o(99074),r=o(73016),a=o(3885),c=o(95319),d=o(11428),p=o(3340),_=o(71225),m=o(15383),u=o(90863),h=o(46578),g=o.n(h);t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{}),(0,s.jsxs)(l.Z,{title:"Pure CSS tooltips",highlight:"In this tutorial you will learn how to create tooltips using only CSS without any additional JavaScript code.",category:"tutorial",date:"30 jul 2022",nextLink:"drag-and-drop",nextLinkLabel:"Drag and drop",metaDescription:"How to create pure CSS tooltips without using JavaScript",metaTags:"HTML, CSS, pure CSS, tooltip, CSS tutorial",tags:["HTML","CSS"],children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"What is a tooltip?"}),(0,s.jsx)("p",{children:"Tooltip is a short message that appears when a user interacts with a specific element. Tooltips are used to give some information on how the website or the app works. In short, tooltips are text boxes that display a brief explanation of the elements."}),(0,s.jsx)("p",{children:"Traditionally, tooltips appeared when the user hovered cursor over some elements. In this step-by-step tutorial you'll learn how to create this type of tooltips."}),(0,s.jsx)("p",{children:"Try out a live demo below:"}),(0,s.jsx)(m.default,{}),(0,s.jsxs)("p",{className:"spacer top medium",children:["Let's get into it step by step ",(0,s.jsx)(i.G,{icon:n.tMT,color:"#8a2be2"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Step 1: Create a triggering element"}),(0,s.jsx)("p",{children:"There is no required markup for the tooltip in general. First of all create a triggering element. When the user mouse over this element'll be shown a tooltip message."}),(0,s.jsx)("div",{className:g().post__snippet,children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,s.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip">\n  {{ tooltip trigger }}\n</div>'})}),(0,s.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,s.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n}"})})]})}),(0,s.jsxs)("p",{children:["You can make as the triggering element anything you want. It can be a text, an icon, an card, etc. But don't forget to use ",(0,s.jsx)("code",{className:"highlighted secondary",children:"position: relative;"})," property. It needs for positioning the tooltip itself."]}),(0,s.jsxs)("p",{children:["In the example below an information icon ",(0,s.jsx)(i.G,{icon:n.DBf,color:"#8a2be2"})," will be the triggering element."]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Step 2: Create a tooltip message"}),(0,s.jsxs)("p",{children:["Create a tooltip message inside the triggering element. You have to add absolute positioning to it because the triggering element class uses ",(0,s.jsx)("code",{className:"highlighted secondary",children:"position:relative;"})," which is needed to position the tooltip message relative to the tooltip element."]}),(0,s.jsx)("div",{className:g().post__snippet,children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,s.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>'})}),(0,s.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,s.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n}\n\n.tooltip__message {\n  position: absolute;\n}"})})]})}),(0,s.jsx)("p",{children:"You also can customize the tooltip message element whatever you want. Usually tooltips have a contrasting color relative to other design and have a little arrow pointing to the triggering element that the tooltip message is referring to. We'll cover it next in the fourth step."}),(0,s.jsx)("p",{children:"Here's the result so far:"}),(0,s.jsx)(p.default,{disableTriggering:!0})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{className:"spacer large bottom",children:(0,s.jsx)("div",{className:g().post__snippet,children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:[(0,s.jsx)("h2",{children:"Step 3: Add triggering"}),(0,s.jsx)("p",{children:"By default, tooltip message is always hidden and then it'll appear on hover the triggering element. There are many ways to hide it: using a display property, using a opacity property, etc."}),(0,s.jsx)("p",{children:"Here I've used the opacity property. Values for this property range from 0 to 1. Set the property to 0 to make the tooltip message completely transparent. Then the opacity of the tooltip message'll be changed on hover to opaque."}),(0,s.jsx)("p",{className:"spacer bottom medium",children:"Move mouse over icons below, to see how the tooltip'll fade in. The transition property along with the opacity property is used to do this fade in effect."})]}),(0,s.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,s.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n\n  &:hover {\n    .tooltip__message {\n      opacity: 1;\n    }\n  }\n}\n\n.tooltip__message {\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  pointer-events: none;\n}"})})]})})}),(0,s.jsx)(p.default,{}),(0,s.jsx)("p",{className:"spacer top medium",children:"Let's make tooltips fancy!"})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Step 4: Customize"}),(0,s.jsx)("p",{children:"You may use additional classes to customize tooltips."}),(0,s.jsx)("div",{className:"spacer bottom large",children:(0,s.jsx)("div",{className:g().post__snippet,children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,s.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip tooltip--primary">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>\n<div class="tooltip tooltip--secondary">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>'})}),(0,s.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,s.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n\n  &--primary {\n    {{ primary trigger style }}\n\n    .tooltip__message {\n      {{ primary message style }}\n    }\n  }\n\n  &--secondary {\n    {{ secondary trigger style }}\n\n    .tooltip__message {\n      {{ secondary message style }}\n    }\n  }\n}"})})]})})}),(0,s.jsx)("p",{children:"In the example below you can see two variants of tooltip implemented by adding additional classes as described above. These additional classes are written in accordance with the BEM naming methodology, feel free to use your own style guide."}),(0,s.jsx)(_.default,{})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("p",{children:"You can combine the techniques above in any fashion to change the position of the tooltip. Let's show the tooltip message on the right:"}),(0,s.jsx)("div",{className:"spacer bottom large",children:(0,s.jsx)("div",{className:g().post__snippet,children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,s.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip tooltip--right">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>'})}),(0,s.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,s.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n\n    &--right {\n      .tooltip__message {\n        top: calc(50% - 14px);\n        right: -145px;\n      }\n  }\n}"})})]})})})]}),(0,s.jsxs)("section",{children:[(0,s.jsxs)("p",{children:["In a similar way we can set another position by adding modifiers like ",(0,s.jsx)("code",{className:"highlighted secondary",children:"tooltip--right"}),". Use top, bottom, left, and right properties to set the placement of tooltip messages. Values in the example below are calculated based on my layout. Hover over the icons below to see the tooltips four directions in action: top, right, bottom, and left."]}),(0,s.jsx)(u.default,{})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Conclusion"}),(0,s.jsx)("p",{children:"You can create tooltips in CSS without using JavaScript."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Read more"}),(0,s.jsxs)("ol",{className:"list ordered",children:[(0,s.jsx)("li",{className:"list__item",children:(0,s.jsx)(a.Z,{href:"https://sarahmhigley.com/writing/tooltips-in-wcag-21/",label:"Tooltips in the time of WCAG 2.1"})}),(0,s.jsx)("li",{className:"list__item",children:(0,s.jsx)(a.Z,{href:"https://www.nngroup.com/articles/tooltip-guidelines/",label:"Tooltip guidelines"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.Z,{href:"https://apps.eky.hk/css-triangle-generator/",label:"CSS triangle generator for styling tooltips"})})]})]})]})]})}},28964:function(e){e.exports={code__wrapper:"code_code__wrapper__oNs_B",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__highlighter:"code_code__highlighter__RhRpK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM",code:"code_code__cWoxw"}},90723:function(e){e.exports={externalLink__icon:"external-link_externalLink__icon__QpxN3"}},35380:function(e){e.exports={progressScroll:"progress-scroll_progressScroll__IM5Sn",progressScroll__tracker:"progress-scroll_progressScroll__tracker__OOKkH"}},74645:function(e){e.exports={demoTooltip__message:"demo-tooltip_demoTooltip__message__7IuJU",demoTooltip:"demo-tooltip_demoTooltip__Qe85f",default:"demo-tooltip_default__uvru8",hero:"demo-tooltip_hero__Bq6iA",primary:"demo-tooltip_primary__9JFAs",secondary:"demo-tooltip_secondary__W8KWp",right:"demo-tooltip_right__AwwQD",left:"demo-tooltip_left__VftPN",top:"demo-tooltip_top__r82FN",bottom:"demo-tooltip_bottom__kw4dT",inline:"demo-tooltip_inline__7mcVt"}},24335:function(e){e.exports={post:"post_post___Jkkf",post__header:"post_post__header__u0SR7",post__title:"post_post__title__QMMZV",post__details:"post_post__details__0xNYq",post__category:"post_post__category___pGRB",post__date:"post_post__date__x2U7c",post__highlight:"post_post__highlight__l6PM0",post__content:"post_post__content___SEHz",post__footer:"post_post__footer___LEgT",post__link:"post_post__link__a02w1",back:"post_back__yoqeo",next:"post_next__1PVG9",post__next:"post_post__next__CSnMP",post__tags:"post_post__tags__Nr98i",post__tag:"post_post__tag__icLsF",post__alert:"post_post__alert__jnyF6",post__icon:"post_post__icon___vjx2",wrapper:"post_wrapper__Xjhc4",icon:"post_icon__HUbEf"}},58941:function(e){e.exports={customizedTooltipsDemo__title:"customized-tooltips-demo_customizedTooltipsDemo__title__1CsHY",customizedTooltipsDemo__label:"customized-tooltips-demo_customizedTooltipsDemo__label__7yWaf",customizedTooltipsDemo:"customized-tooltips-demo_customizedTooltipsDemo__ySFfm"}},15235:function(e){e.exports={directionsTooltipsDemo__title:"directions-tooltips-demo_directionsTooltipsDemo__title__zQan9",directionsTooltipsDemo__label:"directions-tooltips-demo_directionsTooltipsDemo__label__u5rmA",directionsTooltipsDemo__item:"directions-tooltips-demo_directionsTooltipsDemo__item__fvgaV"}},89647:function(e){e.exports={heroTooltipDemo:"hero-tooltip-demo_heroTooltipDemo__pgJ9L"}},46578:function(e){e.exports={post:"post_post__l8Tf4",post__details:"post_post__details__M1mob",post__example:"post_post__example__J2iv1",post__snippet:"post_post__snippet__cQqgT",post__code:"post_post__code__jg3f0"}}},function(e){e.O(0,[319,1856,9774,2888,179],(function(){return t=24895,e(e.s=t);var t}));var t=e.O();_N_E=t}]);