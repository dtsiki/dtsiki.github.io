(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8527],{24895:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/pure-css-tooltips",function(){return t(45407)}])},11428:function(e,o,t){"use strict";t.d(o,{uw:function(){return i}});var i,s,n=t(85893),l=(t(67294),t(92814)),a=t(51436),r=t(35192),c=t(26671),d=t(28964),_=t.n(d);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(i||(i={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(s||(s={}));o.ZP=function(e){var o=e.name,t=e.customName,i=e.code,d=e.language,p=e.showOnlyCode,m=void 0!==p&&p,h=e.showLineNumbers,u=void 0===h||h,g=e.startingLineNumber;return(0,n.jsx)("div",{className:_().code,children:m?(0,n.jsx)("div",{className:_().code__highlighter,children:(0,n.jsx)(r.Z,{startingLineNumber:g,language:d,showLineNumbers:!0,style:c.Y3,children:i})}):(0,n.jsxs)("div",{className:_().code__wrapper,children:[(0,n.jsxs)("div",{className:_().code__header,children:[(0,n.jsxs)("div",{className:_().code__name,children:[(0,n.jsx)(l.G,{icon:a.gMD}),t||d&&o&&"".concat(o,".").concat(s[d])]}),(0,n.jsx)("div",{className:_().code__actions,children:(0,n.jsxs)("button",{className:_().code__control,onClick:function(){navigator.clipboard.writeText(i)},children:[(0,n.jsx)(l.G,{icon:a.kZ_}),(0,n.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,n.jsx)("div",{className:_().code__body,children:(0,n.jsx)(r.Z,{language:d,showLineNumbers:u,style:c.Y3,children:i})})]})})}},95319:function(e,o,t){"use strict";t.d(o,{Z:function(){return i.ZP}});var i=t(11428)},3885:function(e,o,t){"use strict";t.d(o,{Z:function(){return d}});var i=t(85893),s=(t(67294),t(94184)),n=t.n(s),l=t(92814),a=t(51436),r=t(90723),c=t.n(r),d=function(e){var o=e.href,t=e.label,s=n().bind(c());return(0,i.jsxs)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:s(["link",c().externalLink]),children:[t,(0,i.jsx)("span",{className:c().externalLink__icon,children:(0,i.jsx)(l.G,{icon:a.wlW})})]})}},73016:function(e,o,t){"use strict";t.d(o,{Z:function(){return r}});var i=t(85893),s=t(67294),n=t(35380),l=t.n(n),a=t(64388),r=function(){var e=(0,s.useState)(0),o=e[0],t=e[1];return(0,a.Z)(a.j.SCROLL,(function(){var e=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=window.scrollY,i=Math.round(100*o/e);t(i)})),(0,i.jsx)("div",{className:l().progressScroll,children:(0,i.jsx)("div",{className:l().progressScroll__tracker,style:{width:"".concat(o,"%")}})})}},25865:function(e,o,t){"use strict";t.d(o,{A:function(){return s},NS:function(){return i}});var i,s,n=t(85893),l=t(67294),a=t(92814),r=t(51436),c=t(51417),d=t(47166),_=t.n(d),p=t(68584),m=t.n(p);!function(e){e.WINDOW="window",e.BROWSER="browser",e.SLIDESHOW="slideshow",e.FOLDER="folder",e.IMAGE="image",e.VALIDATOR="validator",e.CHAT="chat"}(i||(i={})),function(e){e.WAVY="wavy",e.CROSS="cross",e.SMILEY="smiley",e.SCALES="scales",e.SPRINKLES="sprinkles"}(s||(s={}));o.ZP=function(e){var o=e.type,t=void 0===o?i.WINDOW:o,s=e.title,d=e.fileTitle,p=e.children,h=e.pattern,u=e.filesCount,g=e.showMenu,w=void 0!==g&&g,x=_().bind(m()),j={slideshow:["File","Edit","View","Insert","Format","Help"],folder:["File","Edit","View","Favourites","Tools","Help"]},v={browser:c.qlP,slideshow:r.Krp,folder:r.Pk,image:r.VmB,validator:r.dT$,chat:r.lXL},f=(0,l.useMemo)((function(){return j.slideshow.map((function(e){return(0,n.jsx)("li",{children:e},e)}))}),[j]),N=(0,l.useMemo)((function(){if(t&&t!==i.WINDOW&&t!==i.CHAT)return(0,n.jsx)(a.G,{icon:v[t]})}),[t]);return(0,n.jsxs)("div",{className:m().window,children:[(0,n.jsxs)("div",{className:x([m().window__header,m()[t]]),children:[(0,n.jsxs)("div",{className:m().window__heading,children:[N,(0,n.jsx)("span",{className:m().window__title,children:s}),d&&(0,n.jsx)("span",{className:m().window__fileTitle,children:d})]}),(0,n.jsxs)("div",{className:m().window__actions,children:[(0,n.jsx)("span",{className:m().window__control,children:(0,n.jsx)(a.G,{icon:r.IQi})}),(0,n.jsx)("span",{className:m().window__control,children:(0,n.jsx)(a.G,{icon:r.iAX})}),(0,n.jsx)("span",{className:m().window__control,children:(0,n.jsx)(a.G,{icon:r.g82})})]})]}),w&&(t===i.SLIDESHOW||t===i.FOLDER)&&(0,n.jsx)("div",{className:m().window__menu,children:f}),(0,n.jsxs)("div",{className:x([m().window__body,m()[t]]),children:[(0,n.jsx)("div",{className:x([m().window__content]),children:p}),h&&(0,n.jsx)("div",{className:x([m().window__pattern,m()[h]])}),t===i.FOLDER&&(0,n.jsx)("div",{className:m().window__footer,children:(0,n.jsxs)("span",{className:m().window__count,children:[u," object(s)"]})})]})]})}},75302:function(e,o,t){"use strict";t.d(o,{Z:function(){return i.ZP}});var i=t(25865)},61809:function(e,o,t){"use strict";t.d(o,{LW:function(){return i},Ym:function(){return s}});var i,s,n=t(85893),l=(t(67294),t(94184)),a=t.n(l),r=t(74645),c=t.n(r);!function(e){e.DEFAULT="default",e.PRIMARY="primary",e.SECONDARY="secondary",e.HERO="hero"}(i||(i={})),function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right"}(s||(s={}));o.ZP=function(e){var o,t,l,r=e.tooltip,d=e.message,_=e.variant,p=void 0===_?i.PRIMARY:_,m=e.direction,h=void 0===m?s.RIGHT:m,u=e.isInline,g=void 0!==u&&u,w=e.disableTriggering,x=void 0!==w&&w,j=a().bind(c()),v=!g&&p!==i.HERO;return(0,n.jsxs)("div",{className:j(["tooltip",c().demoTooltip,c()[p],v&&c()[h],(o={},t=c().inline,l=g,t in o?Object.defineProperty(o,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[t]=l,o)]),children:[r,(0,n.jsx)("div",{className:j([!x&&"tooltip__message",c().demoTooltip__message]),children:d})]})}},34487:function(e,o,t){"use strict";t.d(o,{Z:function(){return i.ZP}});var i=t(61809)},99074:function(e,o,t){"use strict";t.d(o,{Z:function(){return h}});var i=t(85893),s=t(67294),n=t(41664),l=t.n(n),a=t(92814),r=t(51436),c=t(94184),d=t.n(c),_=t(2962),p=t(24335),m=t.n(p),h=function(e){var o=e.title,t=e.highlight,n=e.metaDescription,c=e.metaTags,p=e.category,h=e.date,u=e.children,g=e.nextLink,w=e.nextLinkLabel,x=e.tags,j=d().bind(m()),v=(0,s.useMemo)((function(){return null===x||void 0===x?void 0:x.map((function(e){return(0,i.jsx)("li",{className:m().post__tag,children:e},e)}))}),[x]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.PB,{title:"@dtsiki/blog: ".concat(o),description:n,additionalMetaTags:[{name:"keywords",content:c}]}),(0,i.jsx)("div",{className:m().post,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:m().post__header,children:[(null===x||void 0===x?void 0:x.length)&&(0,i.jsx)("ul",{className:m().post__tags,children:v}),(0,i.jsx)("h1",{className:m().post__title,children:o})]}),(0,i.jsxs)("div",{className:m().post__info,children:[(0,i.jsxs)("div",{className:m().post__details,children:[(0,i.jsx)("div",{className:m().post__category,children:p}),(0,i.jsx)("div",{className:m().post__date,children:h})]}),(0,i.jsx)("p",{className:m().post__highlight,children:t})]}),(0,i.jsx)("div",{className:m().post__content,children:u}),(0,i.jsxs)("div",{className:m().post__footer,children:[(0,i.jsx)(l(),{href:"/blog",children:(0,i.jsxs)("a",{className:j(["link",m().post__link,m().back]),children:[(0,i.jsx)(a.G,{icon:r.Atv}),"Blog"]})}),g&&(0,i.jsx)(l(),{href:g,children:(0,i.jsxs)("a",{className:j(["link",m().post__link,m().next]),children:["Next",(0,i.jsx)(a.G,{icon:r.U23}),(0,i.jsx)("span",{className:m().post__next,children:w})]})})]})]})})]})}},3340:function(e,o,t){"use strict";t.r(o);var i=t(85893),s=(t(67294),t(92814)),n=t(51436),l=t(75302),a=t(34487),r=t(61809),c=t(46578),d=t.n(c);o.default=function(e){var o=e.disableTriggering,t=void 0!==o&&o;return(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:d().post__example,children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud yay ",(0,i.jsx)(a.Z,{tooltip:(0,i.jsx)(s.G,{icon:n.DBf}),message:"I'm a tooltip!",isInline:!0,disableTriggering:t,variant:r.LW.DEFAULT}),"ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]})})}},28610:function(e,o,t){"use strict";t.r(o);var i=t(85893),s=(t(67294),t(47166)),n=t.n(s),l=t(75302),a=t(34487),r=t(61809),c=t(58941),d=t.n(c);o.default=function(){var e=n().bind(d());return(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:d().customizedTooltipsDemo,children:[(0,i.jsx)("h3",{className:d().customizedTooltipsDemo__title,children:"There are two types of tooltips:"}),(0,i.jsxs)("ol",{className:"list ordered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)("div",{className:d().customizedTooltipsDemo__item,children:(0,i.jsx)(a.Z,{tooltip:(0,i.jsx)("span",{className:e([d().customizedTooltipsDemo__label,"underlined dotted primary"]),children:"Primary"}),message:"Yay!",variant:r.LW.PRIMARY,direction:r.Ym.RIGHT})})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)("div",{className:d().customizedTooltipsDemo__item,children:(0,i.jsx)(a.Z,{tooltip:(0,i.jsx)("span",{className:e([d().customizedTooltipsDemo__label,"underlined dotted primary"]),children:"Secondary tooltip"}),message:"Yay!",variant:r.LW.SECONDARY,direction:r.Ym.RIGHT})})})]})]})})}},71225:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return i.default}});var i=t(28610)},38266:function(e,o,t){"use strict";t.r(o);var i=t(85893),s=t(94184),n=t.n(s),l=t(67294),a=t(75302),r=t(34487),c=t(61809),d=t(15235),_=t.n(d);o.default=function(){var e=n().bind(_()),o=[c.Ym.RIGHT,c.Ym.TOP,c.Ym.LEFT,c.Ym.BOTTOM],t=(0,l.useMemo)((function(){return o.map((function(o){return(0,i.jsx)("li",{className:"col col--25 col--tablet-50 col--mobile-100",children:(0,i.jsx)("div",{className:_().directionsTooltipsDemo__item,children:(0,i.jsx)(r.Z,{tooltip:(0,i.jsx)("span",{className:e([_().directionsTooltipsDemo__label,"underlined dotted primary"]),children:o}),message:o,variant:c.LW.PRIMARY,direction:o})})},o)}))}),[o]);return(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{className:_().directionsTooltipsDemo,children:[(0,i.jsx)("h3",{className:_().directionsTooltipsDemo__title,children:"There are four directions of tooltips:"}),(0,i.jsx)("ul",{className:e(["row",_().directionsTooltipsDemo__list]),children:t})]})})}},90863:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return i.default}});var i=t(38266)},83939:function(e,o,t){"use strict";t.r(o);var i=t(85893),s=(t(67294),t(75302)),n=t(34487),l=t(61809),a=t(89647),r=t.n(a);o.default=function(){return(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:r().heroTooltipDemo,children:["Let's make a ",(0,i.jsx)(n.Z,{tooltip:(0,i.jsx)("span",{className:"underlined dotted primary",children:"tooltip"}),message:"Yay!",variant:l.LW.HERO,direction:l.Ym.BOTTOM})]})})}},15383:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return i.default}});var i=t(83939)},45407:function(e,o,t){"use strict";t.r(o);var i=t(85893),s=(t(67294),t(92814)),n=t(51436),l=t(99074),a=t(73016),r=t(3885),c=t(95319),d=t(11428),_=t(3340),p=t(71225),m=t(15383),h=t(90863),u=t(46578),g=t.n(u);o.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{}),(0,i.jsxs)(l.Z,{title:"Pure CSS tooltips",highlight:"In this tutorial you will learn how to create tooltips using only CSS without any additional JavaScript code.",category:"tutorial",date:"30 jul 2022",nextLink:"drag-and-drop",nextLinkLabel:"Drag and drop",metaDescription:"How to create pure CSS tooltips without using JavaScript",metaTags:"HTML, CSS, pure CSS, tooltip, CSS tutorial",tags:["HTML","CSS"],children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"What is a tooltip?"}),(0,i.jsx)("p",{children:"Tooltip is a short message that appears when a user interacts with a specific element. Tooltips are used to give some information on how the website or the app works. In short, tooltips are text boxes that display a brief explanation of the elements."}),(0,i.jsx)("p",{children:"Traditionally, tooltips appeared when the user hovered cursor over some elements. In this step-by-step tutorial you'll learn how to create this type of tooltips."}),(0,i.jsx)("p",{children:"Try out a live demo below:"}),(0,i.jsx)(m.default,{}),(0,i.jsxs)("p",{className:"spacer top medium",children:["Let's get into it step by step ",(0,i.jsx)(s.G,{icon:n.tMT,color:"#8a2be2"})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Step 1: Create a triggering element"}),(0,i.jsx)("p",{children:"There is no required markup for the tooltip in general. First of all create a triggering element. When the user mouse over this element'll be shown a tooltip message."}),(0,i.jsx)("div",{className:g().post__snippet,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,i.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip">\n  {{ tooltip trigger }}\n</div>'})}),(0,i.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,i.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n}"})})]})}),(0,i.jsxs)("p",{children:["You can make as the triggering element anything you want. It can be a text, an icon, an card, etc. But don't forget to use ",(0,i.jsx)("code",{className:"highlighted secondary",children:"position: relative;"})," property. It needs for positioning the tooltip itself."]}),(0,i.jsxs)("p",{children:["In the example below an information icon ",(0,i.jsx)(s.G,{icon:n.DBf,color:"#8a2be2"})," will be the triggering element."]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Step 2: Create a tooltip message"}),(0,i.jsxs)("p",{children:["Create a tooltip message inside the triggering element. You have to add absolute positioning to it because the triggering element class uses ",(0,i.jsx)("code",{className:"highlighted secondary",children:"position:relative;"})," which is needed to position the tooltip message relative to the tooltip element."]}),(0,i.jsx)("div",{className:g().post__snippet,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,i.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>'})}),(0,i.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,i.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n}\n\n.tooltip__message {\n  position: absolute;\n}"})})]})}),(0,i.jsx)("p",{children:"You also can customize the tooltip message element whatever you want. Usually tooltips have a contrasting color relative to other design and have a little arrow pointing to the triggering element that the tooltip message is referring to. We'll cover it next in the fourth step."}),(0,i.jsx)("p",{children:"Here's the result so far:"}),(0,i.jsx)(_.default,{disableTriggering:!0})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{className:"spacer large bottom",children:(0,i.jsx)("div",{className:g().post__snippet,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:[(0,i.jsx)("h2",{children:"Step 3: Add triggering"}),(0,i.jsx)("p",{children:"By default, tooltip message is always hidden and then it'll appear on hover the triggering element. There are many ways to hide it: using a display property, using a opacity property, etc."}),(0,i.jsx)("p",{children:"Here I've used the opacity property. Values for this property range from 0 to 1. Set the property to 0 to make the tooltip message completely transparent. Then the opacity of the tooltip message'll be changed on hover to opaque."}),(0,i.jsx)("p",{className:"spacer bottom medium",children:"Move mouse over icons below, to see how the tooltip'll fade in. The transition property along with the opacity property is used to do this fade in effect."})]}),(0,i.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,i.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n\n  &:hover {\n    .tooltip__message {\n      opacity: 1;\n    }\n  }\n}\n\n.tooltip__message {\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  pointer-events: none;\n}"})})]})})}),(0,i.jsx)(_.default,{}),(0,i.jsx)("p",{className:"spacer top medium",children:"Let's make tooltips fancy!"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Step 4: Customize"}),(0,i.jsx)("p",{children:"You may use additional classes to customize tooltips."}),(0,i.jsx)("div",{className:"spacer bottom large",children:(0,i.jsx)("div",{className:g().post__snippet,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,i.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip tooltip--primary">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>\n<div class="tooltip tooltip--secondary">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>'})}),(0,i.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,i.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n\n  &--primary {\n    {{ primary trigger style }}\n\n    .tooltip__message {\n      {{ primary message style }}\n    }\n  }\n\n  &--secondary {\n    {{ secondary trigger style }}\n\n    .tooltip__message {\n      {{ secondary message style }}\n    }\n  }\n}"})})]})})}),(0,i.jsx)("p",{children:"In the example below you can see two variants of tooltip implemented by adding additional classes as described above. These additional classes are written in accordance with the BEM naming methodology, feel free to use your own style guide."}),(0,i.jsx)(p.default,{})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("p",{children:"You can combine the techniques above in any fashion to change the position of the tooltip. Let's show the tooltip message on the right:"}),(0,i.jsx)("div",{className:"spacer bottom large",children:(0,i.jsx)("div",{className:g().post__snippet,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,i.jsx)(c.Z,{language:d.uw.HTML,name:"index",code:'<div class="tooltip tooltip--right">\n  {{ tooltip trigger }}\n  <div class="tooltip__message">\n    {{ tooltip message }}\n  </div>\n</div>'})}),(0,i.jsx)("div",{className:"col col--50 col--tablet-100 col--mobile-100",children:(0,i.jsx)(c.Z,{language:d.uw.CSS,name:"style",code:".tooltip {\n  position: relative;\n\n    &--right {\n      .tooltip__message {\n        top: calc(50% - 14px);\n        right: -145px;\n      }\n  }\n}"})})]})})})]}),(0,i.jsxs)("section",{children:[(0,i.jsxs)("p",{children:["In a similar way we can set another position by adding modifiers like ",(0,i.jsx)("code",{className:"highlighted secondary",children:"tooltip--right"}),". Use top, bottom, left, and right properties to set the placement of tooltip messages. Values in the example below are calculated based on my layout. Hover over the icons below to see the tooltips four directions in action: top, right, bottom, and left."]}),(0,i.jsx)(h.default,{})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Conclusion"}),(0,i.jsx)("p",{children:"You can create tooltips in CSS without using JavaScript."})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:"Read more"}),(0,i.jsxs)("ol",{className:"list ordered",children:[(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)(r.Z,{href:"https://sarahmhigley.com/writing/tooltips-in-wcag-21/",label:"Tooltips in the time of WCAG 2.1"})}),(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)(r.Z,{href:"https://www.nngroup.com/articles/tooltip-guidelines/",label:"Tooltip guidelines"})}),(0,i.jsx)("li",{children:(0,i.jsx)(r.Z,{href:"https://apps.eky.hk/css-triangle-generator/",label:"CSS triangle generator for styling tooltips"})})]})]})]})]})}},28964:function(e){e.exports={code__wrapper:"code_code__wrapper__oNs_B",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__highlighter:"code_code__highlighter__RhRpK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM",code:"code_code__cWoxw"}},90723:function(e){e.exports={externalLink__icon:"external-link_externalLink__icon__QpxN3"}},35380:function(e){e.exports={progressScroll:"progress-scroll_progressScroll__IM5Sn",progressScroll__tracker:"progress-scroll_progressScroll__tracker__OOKkH"}},68584:function(e){e.exports={window:"window_window__ZM8IX",window__header:"window_window__header__laqgW",window__heading:"window_window__heading__2XtgQ",window__title:"window_window__title__zsSWg",window__fileTitle:"window_window__fileTitle__dgpl6",window__actions:"window_window__actions__JJ169",window__body:"window_window__body__lA33P",slideshow:"window_slideshow__EY_ZT",folder:"window_folder__x6rfd",image:"window_image__wAC1C",validator:"window_validator__zNQZz",chat:"window_chat__W7WmC",window__control:"window_window__control__1_ma5",window__pattern:"window_window__pattern__f_UQS",wavy:"window_wavy__sntu0",cross:"window_cross___O2Kz",smiley:"window_smiley__7JtLl",scales:"window_scales__9JClC",sprinkles:"window_sprinkles__X1_aF",window__content:"window_window__content__VCTuY",window__menu:"window_window__menu__xxLJC",window__footer:"window_window__footer__yO1_3",window__count:"window_window__count__ODemJ"}},74645:function(e){e.exports={demoTooltip__message:"demo-tooltip_demoTooltip__message__7IuJU",demoTooltip:"demo-tooltip_demoTooltip__Qe85f",default:"demo-tooltip_default__uvru8",hero:"demo-tooltip_hero__Bq6iA",primary:"demo-tooltip_primary__9JFAs",secondary:"demo-tooltip_secondary__W8KWp",right:"demo-tooltip_right__AwwQD",left:"demo-tooltip_left__VftPN",top:"demo-tooltip_top__r82FN",bottom:"demo-tooltip_bottom__kw4dT",inline:"demo-tooltip_inline__7mcVt"}},24335:function(e){e.exports={post:"post_post___Jkkf",post__header:"post_post__header__u0SR7",post__title:"post_post__title__QMMZV",post__details:"post_post__details__0xNYq",post__category:"post_post__category___pGRB",post__date:"post_post__date__x2U7c",post__highlight:"post_post__highlight__l6PM0",post__content:"post_post__content___SEHz",post__footer:"post_post__footer___LEgT",post__link:"post_post__link__a02w1",back:"post_back__yoqeo",next:"post_next__1PVG9",post__next:"post_post__next__CSnMP",post__tags:"post_post__tags__Nr98i",post__tag:"post_post__tag__icLsF"}},58941:function(e){e.exports={customizedTooltipsDemo__title:"customized-tooltips-demo_customizedTooltipsDemo__title__1CsHY",customizedTooltipsDemo__label:"customized-tooltips-demo_customizedTooltipsDemo__label__7yWaf",customizedTooltipsDemo:"customized-tooltips-demo_customizedTooltipsDemo__ySFfm"}},15235:function(e){e.exports={directionsTooltipsDemo__title:"directions-tooltips-demo_directionsTooltipsDemo__title__zQan9",directionsTooltipsDemo__label:"directions-tooltips-demo_directionsTooltipsDemo__label__u5rmA",directionsTooltipsDemo__item:"directions-tooltips-demo_directionsTooltipsDemo__item__fvgaV"}},89647:function(e){e.exports={heroTooltipDemo:"hero-tooltip-demo_heroTooltipDemo__pgJ9L"}},46578:function(e){e.exports={post:"post_post__l8Tf4",post__details:"post_post__details__M1mob",post__example:"post_post__example__J2iv1",post__snippet:"post_post__snippet__cQqgT",post__code:"post_post__code__jg3f0"}}},function(e){e.O(0,[319,2962,9774,2888,179],(function(){return o=24895,e(e.s=o);var o}));var o=e.O();_N_E=o}]);