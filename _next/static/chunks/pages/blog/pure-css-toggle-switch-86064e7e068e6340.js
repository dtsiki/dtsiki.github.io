(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5076],{8963:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/pure-css-toggle-switch",function(){return t(78495)}])},11428:function(e,s,t){"use strict";t.d(s,{uw:function(){return l}});var l,i,a=t(85893),n=t(92814),o=t(51436),c=t(35192),r=t(26671),h=t(28964),d=t.n(h);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(l||(l={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(i||(i={}));s.ZP=function(e){var s=e.name,t=e.customName,l=e.code,h=e.language,g=e.showOnlyCode,p=void 0!==g&&g,_=e.showLineNumbers,m=void 0===_||_,A=e.startingLineNumber,x=e.isTerminal,u=void 0!==x&&x,j=function(){navigator.clipboard.writeText(l)};return(0,a.jsx)("div",{className:d().code,children:p?(0,a.jsxs)("div",{className:d().code__highlighter,children:[(0,a.jsx)("div",{className:d().code__actions,children:(0,a.jsxs)("button",{className:d().code__control,onClick:j,children:[(0,a.jsx)(n.G,{icon:o.kZ_}),(0,a.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})}),(0,a.jsx)(c.Z,{startingLineNumber:A,language:h||"plaintext",showLineNumbers:m,style:r.Y3,children:l})]}):(0,a.jsxs)("div",{className:d().code__wrapper,children:[(0,a.jsxs)("div",{className:d().code__header,children:[(0,a.jsxs)("div",{className:d().code__name,children:[(0,a.jsx)(n.G,{icon:u?o.Jw3:o.gMD}),t||h&&s&&"".concat(s,".").concat(i[h])]}),(0,a.jsx)("div",{className:d().code__actions,children:(0,a.jsxs)("button",{className:d().code__control,onClick:j,children:[(0,a.jsx)(n.G,{icon:o.kZ_}),(0,a.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,a.jsx)("div",{className:d().code__body,children:(0,a.jsx)(c.Z,{language:h||"plaintext",showLineNumbers:!u&&m,style:r.Y3,children:l})})]})})}},3885:function(e,s,t){"use strict";t.d(s,{Z:function(){return h}});var l=t(85893),i=(t(67294),t(94184)),a=t.n(i),n=t(92814),o=t(51436),c=t(90723),r=t.n(c),h=function(e){var s=e.href,t=e.label,i=a().bind(r());return(0,l.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:i(["link",r().externalLink]),children:[t,(0,l.jsx)("span",{className:r().externalLink__icon,children:(0,l.jsx)(n.G,{icon:o.wlW})})]})}},85276:function(e,s,t){"use strict";t.d(s,{Z:function(){return h}});var l,i,a=t(85893),n=(t(67294),t(94184)),o=t.n(n),c=t(31416),r=t.n(c);!function(e){e.SECONDARY="secondary",e.PRIMARY="primary"}(l||(l={})),function(e){e.DIV="div",e.FIRST_HEADING="h1",e.SECOND_HEADING="h2"}(i||(i={}));var h=function(e){var s=e.element,t=e.children,i=e.variant,n=void 0===i?l.PRIMARY:i,c=e.isUnpaired,h=void 0!==c&&c,d=e.isSingle,g=void 0!==d&&d,p=o().bind(r());return g?(0,a.jsxs)("span",{className:p([r().htmlTag,r().single]),children:["<",t,">"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:p([r().htmlTag,r()[n]]),children:["<",s,">"]}),t&&t,!h&&(0,a.jsxs)("span",{className:p([r().htmlTag,r()[n]]),children:["</",s,">"]})]})}},73016:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var l=t(85893),i=t(67294),a=t(35380),n=t.n(a),o=t(64388),c=function(){var e=(0,i.useState)(0),s=e[0],t=e[1];return(0,o.Z)(o.j.SCROLL,(function(){var e=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=window.scrollY,l=Math.round(100*s/e);t(l)})),(0,l.jsx)("div",{className:n().progressScroll,children:(0,l.jsx)("div",{className:n().progressScroll__tracker,style:{width:"".concat(s,"%")}})})}},99074:function(e,s,t){"use strict";t.d(s,{Z:function(){return _}});var l=t(85893),i=t(67294),a=t(41664),n=t.n(a),o=t(92814),c=t(51436),r=t(94184),h=t.n(r),d=t(2962),g=t(24335),p=t.n(g),_=function(e){var s=e.title,t=e.highlight,a=e.metaDescription,r=e.metaTags,g=e.category,_=e.date,m=e.children,A=e.nextLink,x=e.nextLinkLabel,u=e.tags,j=e.isWorkInProgress,b=h().bind(p()),w=(0,i.useMemo)((function(){return null===u||void 0===u?void 0:u.map((function(e){return(0,l.jsx)("li",{className:p().post__tag,children:e},e)}))}),[u]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.PB,{title:"@dtsiki/blog: ".concat(s),description:a,additionalMetaTags:[{name:"keywords",content:r}]}),(0,l.jsx)("div",{className:p().post,children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:p().post__header,children:[(null===u||void 0===u?void 0:u.length)&&(0,l.jsx)("ul",{className:p().post__tags,children:w}),(0,l.jsxs)("h1",{className:p().post__title,children:[s,j&&(0,l.jsxs)("span",{className:b([p().post__alert]),children:[(0,l.jsx)("span",{className:b([p().post__icon,p().wrapper]),children:(0,l.jsx)(o.G,{icon:c.zc})}),(0,l.jsx)("span",{className:b([p().post__icon,p().icon]),children:(0,l.jsx)(o.G,{icon:c.$tV})}),(0,l.jsx)("span",{className:"visually-hidden",children:"Work in progress"})]})]})]}),(0,l.jsxs)("div",{className:p().post__info,children:[(0,l.jsxs)("div",{className:p().post__details,children:[(0,l.jsx)("div",{className:p().post__category,children:g}),(0,l.jsx)("div",{className:p().post__date,children:_})]}),(0,l.jsx)("p",{className:p().post__highlight,children:t})]}),(0,l.jsx)("div",{className:p().post__content,children:m}),(0,l.jsxs)("div",{className:p().post__footer,children:[(0,l.jsx)(n(),{href:"/blog",children:(0,l.jsxs)("a",{className:b(["link",p().post__link,p().back]),children:[(0,l.jsx)(o.G,{icon:c.Atv}),"Blog"]})}),A&&(0,l.jsx)(n(),{href:A,children:(0,l.jsxs)("a",{className:b(["link",p().post__link,p().next]),children:["Next",(0,l.jsx)(o.G,{icon:c.U23}),(0,l.jsx)("span",{className:p().post__next,children:x})]})})]})]})})]})}},65133:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var l=t(85893),i=t(67294),a=t(3885),n=function(e){var s=e.items,t=(0,i.useMemo)((function(){return s.map((function(e){var s=e.id,t=e.link,i=e.label;return(0,l.jsx)("li",{className:"list__item",children:(0,l.jsx)(a.Z,{href:t,label:i})},s)}))}),[s]);return(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Read more"}),(0,l.jsx)("ol",{className:"list ordered",children:t})]})}},78495:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return C}});var l=t(85893),i=t(67294),a=t(25675),n=t.n(a),o=t(92814),c=t(51436),r=t(53416),h=t(94184),d=t.n(h),g=t(99074),p=t(73016),_=t(3885),m=t(11428),A=t(65133),x=t(75302),u=t(85276),j=t(25865),b=t(608),w=t.n(b),f={src:"/_next/static/media/dimension1.95f66dad.svg",height:46,width:60},N={src:"/_next/static/media/dimension2.39c0c536.svg",height:40,width:56},v={src:"/_next/static/media/dimension3.5b66a4bc.svg",height:40,width:61},y={src:"/_next/static/media/electrical-toggle.454326ce.jpg",height:600,width:600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqAP/xAAeEAAABQUBAAAAAAAAAAAAAAABAgMFEwAEIiRSYv/aAAgBAQABPwCZ2K8AmFpoQ5KG781//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="},k={src:"/_next/static/media/light-switch.164ba2b8.jpg",height:1e3,width:1e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAroP/xAAdEAAABQUAAAAAAAAAAAAAAAAAAQIDEQQSEzGB/9oACAEBAAE/AJqCf0rFdyB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="},S={src:"/_next/static/media/keyboard-switch.ade511d3.png",height:730,width:730,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX////+///+/v79/f35+Pn4+Pn59/r49vn29fb19fX38/n17/jw7u/l4ubg2uTf2ePg0em9scWyn76sn7Ctm7eukb+rirybc66Ybq92WIlkNnt0HZVwGI9ND2deAIYAAEXo/rt2AAAAO0lEQVR42h3HxRHAMAAEsc2FmdnQf5ce+yeBcpBAUJdJxbENffzq3+uugNl+v1tA7OY5O0DNNLaIDOIIRMcCBW240OQAAAAASUVORK5CYII="},C=function(){var e=(0,i.useState)(!1),s=e[0],t=e[1],a=d().bind(w()),h=function(e){t(e.target.checked)},b='<label class="toggle">\n  <input class="toggle__checkbox" type="checkbox" />\n  <span class="toggle__switch"></span>\n  <span class="toggle__label">On</span>\n</label>',C=[{id:(0,r.x0)(),link:"https://dtsiki.github.io/blog/semantic-markup-for-the-little-ones",label:"Semantic markup for the little ones"},{id:(0,r.x0)(),link:"https://www.nngroup.com/articles/toggle-switch-guidelines/",label:"Toggle switch guidelines"},{id:(0,r.x0)(),link:"https://reactjs.org/docs/handling-events.html",label:"Handling Events in React"},{id:(0,r.x0)(),link:"https://dribbble.com/tags/toggle",label:"Toggles ideas"},{id:(0,r.x0)(),link:"https://finolex.com/evolution-of-switchboards-over-the-years/",label:"Evolution of switchboards over the years"},{id:(0,r.x0)(),link:"https://sass-lang.com/documentation/variables",label:"SASS variables syntax"}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p.Z,{}),(0,l.jsxs)(g.Z,{title:"Pure CSS toggle switch",highlight:"In this step-by-step tutorial, you'll learn how to create a toggle switch using  only HTML and CSS. No JavaScript!",category:"tutorial",date:"1 oct, 2022",tags:["HTML","CSS"],metaTags:"HTML, CSS, pure CSS, toggle, toggle switch, UI, tutorial, step by step tutorial, switch",metaDescription:"",children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{className:"spacer top large",children:"What is a toggle switch?"}),(0,l.jsx)("p",{className:"spacer bottom medium",children:"A toggle switch (known also as a \xabtoggle\xbb or just a \xabswitch\xbb) is one of the common and classic an user interface control that has two mutually-exclusive states such as on and off. It came from real life: toggles are the digital equivalent of actual switches:"}),(0,l.jsx)(x.Z,{pattern:j.A.SMILEY,children:(0,l.jsxs)("div",{className:w().post__gallery,children:[(0,l.jsx)("div",{className:a([w().post__image,w().electricalToggle]),children:(0,l.jsx)(x.Z,{type:j.NS.IMAGE,title:"GALLERY",fileTitle:"electrical-toggle.jpg",children:(0,l.jsx)(n(),{layout:"responsive",src:y,alt:"A electrical toggle switch with two signs: off and on"})})}),(0,l.jsx)("div",{className:a([w().post__image,w().lightSwitch]),children:(0,l.jsx)(x.Z,{type:j.NS.IMAGE,title:"GALLERY",fileTitle:"light-switch.jpg",children:(0,l.jsx)(n(),{layout:"responsive",src:k,alt:"A white light switch"})})}),(0,l.jsx)("div",{className:a([w().post__image,w().keyboardSwitch]),children:(0,l.jsx)(x.Z,{type:j.NS.IMAGE,title:"GALLERY",fileTitle:"keyboard-switch.jpg",children:(0,l.jsx)(n(),{layout:"responsive",src:S,alt:"A purple keyboard switch"})})})]})}),(0,l.jsxs)("p",{className:"spacer top large",children:["It may seem that toggles and checkboxes are the same, but they aren't. At first it seems, checkboxes as well as toggles also have two states: unselected and selected. Actually, checkboxes have three states: unselected, selected, and ",(0,l.jsx)("span",{className:"accented accented--primary",children:"indeterminate"})," while toggles are either off or on."]}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsx)("p",{children:"The second difference between toggles and checkboxes is a type of response: instant or not. Use a toggle switch when you need an instant response on an action that this toggle switch performs. If you don't need an immediate effect you should use a checkbox. The example of the toggle with the instant response you can check out on the demo above."}),(0,l.jsx)("p",{className:"spacer bottom medium",children:"On the right is an example of what we'll build in this tutorial."})]}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("div",{className:w().post__demo,children:(0,l.jsxs)("label",{className:"toggle",children:[(0,l.jsx)("input",{onChange:h,className:"toggle__checkbox",type:"checkbox"}),(0,l.jsx)("span",{className:"toggle__switch"}),(0,l.jsx)("span",{className:"toggle__label",children:s?"Off":"On"})]})})})})]})}),(0,l.jsx)("p",{children:"Let's go!"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Step 1: Create a markup"}),(0,l.jsxs)("p",{children:["Our future javascripless toggle has a quite simple HTML markup. To begin with, we need to add the skeleton. HTML element ",(0,l.jsx)(u.Z,{isSingle:!0,children:"label"})," is this skeleton. Then there are three nested elements each of whom has their own job."]}),(0,l.jsxs)("p",{children:["A toggle input is the most important nested element. HTML element ",(0,l.jsx)(u.Z,{isSingle:!0,children:"input"})," is used to create interactive and complex control. Selected type ",(0,l.jsx)("code",{className:"highlighted ghost",children:"checkbox"})," means that this input allows single values to be selected or deselected. Do not be confused by checkbox type. Nest the toggle input directly inside ",(0,l.jsx)(u.Z,{isSingle:!0,children:"label"})," element to associate our wrapper with an ",(0,l.jsx)(u.Z,{isSingle:!0,children:"input"}),". In this case the ",(0,l.jsx)("code",{className:"highlighted ghost",children:"for"})," and ",(0,l.jsx)("code",{className:"highlighted ghost",children:"id"})," attributes are not needed because the association is implicit."]}),(0,l.jsx)("p",{children:"Next nested element is a toggle switch. The toggle swtich is required to customize the toggle. We'll deal with that in the next step and this element will not be visible until step 4."}),(0,l.jsx)("p",{children:"At least, a toggle label represents a caption for the toggle in user interface."}),(0,l.jsxs)("p",{children:["Pay attention: there are no divs. HTML element ",(0,l.jsx)(u.Z,{isSingle:!0,children:"div"})," not allowed as child of element ",(0,l.jsx)(u.Z,{isSingle:!0,children:"label"})," because it's a block element and we cannot place a block element inside of an inline element. Why? Check out my article ",(0,l.jsx)(_.Z,{label:"Semantic markup for the little ones",href:"/blog/semantic-markup-for-the-little-ones"}),". Using HTML inline element ",(0,l.jsx)(u.Z,{isSingle:!0,children:"span"})," for the toggle switch and the toggle label allows us to place it inside of the ",(0,l.jsx)(u.Z,{isSingle:!0,children:"label"})," element."]}),(0,l.jsx)("p",{children:"Putting it all together, here's what the required markup looks like:"}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.html",code:b})}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("div",{className:w().post__demo,children:(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{onChange:h,type:"checkbox"}),(0,l.jsxs)("span",{children:[" ",s?"Off":"On"]})]})})})})]})}),(0,l.jsx)("p",{children:"You need take a note: HTML markup will remains the same until the end of this tutorial."}),(0,l.jsx)("p",{children:"The toogle doesn't look very good so far, but verything in its own time. Let's start customizing with..."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Step 2: Hide the input element"}),(0,l.jsx)("p",{children:"We're going to create custom toggle interface therefore we have to hide the input element because its appearance it's not needed."}),(0,l.jsxs)("p",{children:["CSS property ",(0,l.jsx)("code",{className:"highlighted ghost",children:"visibility: hidden;"})," allows to hide the toggle input without changing the layout. The input is invisible, but still affects the toggle as normal - try to click on the label in the demo below to see it."]}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle__checkbox {\n  position: absolute;\n  visibility: hidden;\n}"})}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("div",{className:w().post__demo,children:(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{onChange:h,className:"toggle__checkbox",type:"checkbox"}),(0,l.jsxs)("span",{children:[" ",s?"Off":"On"]})]})})})})]})}),(0,l.jsx)("p",{children:"The demo above looks lonely, but wait a minute and scroll to the next step."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Step 3: Make the toggle fancy \u2728"}),(0,l.jsx)("p",{children:"Next up, let's start to customize the toggle."}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsxs)("p",{children:["At first, we should think about an user interface. CSS property ",(0,l.jsx)("code",{className:"highlighted ghost",children:"cursor: pointer;"})," will indicate to users that the whole toggle is a clickable element."]}),(0,l.jsxs)("p",{children:["There are no more required styles for the toggle skeleton. CSS property ",(0,l.jsx)("code",{className:"highlighted ghost",children:"display: inline-flex;"})," with ",(0,l.jsx)("code",{className:"highlighted ghost",children:"align-items: center;"})," is optional here. CSS Flexbox property ",(0,l.jsx)("code",{className:"highlighted ghost",children:"align-items"})," centers the toggle content along the cross axis."]})]}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}"})})]})}),(0,l.jsx)("p",{children:"At second, let's customize the toggle label."}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle__label {\n  margin-left: 10px;\n}"})}),(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsx)("p",{children:"You can do whatever you want with this element. All to your taste!"}),(0,l.jsx)("p",{children:"Also, take a note that you can feel free to experiment with the layout of the toggle label. For example, you can lift it up the HTML markup before the toggle switch to align the label on the left. It won't affect toggle behavior."})]})]})}),(0,l.jsxs)("p",{className:"note spacer top large",children:[(0,l.jsx)("span",{className:"note__title",children:"Please: "})," don't ignore the toggle label! Label makes it clear what option the toggle controls, as well as what state the toggle right now. Also one of the best practise is writing clear labels. The toggle labels should describe what the control will do when the switch is on."]}),(0,l.jsxs)("p",{className:"spacer top large",children:["And thirdly, we're going to customize the toggle switch itself. There are a lot of different ",(0,l.jsx)(_.Z,{href:"https://dribbble.com/tags/toggle",label:"toggle user interfaces"}),". I've chosen one of the classic style with rounded edges and a sliding ball as you can see early."]}),(0,l.jsx)("p",{children:"Here are the related styles and some intermediate result:"}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle__switch {\n  position: relative;\n  display: inline-block;\n  width: 56px;\n  height: 32px;\n  border-radius: 32px;\n  background: #dddddd;\n  transition: background 0.25s;\n}"})}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("div",{className:w().post__demo,children:(0,l.jsxs)("label",{className:"toggle",children:[(0,l.jsx)("input",{onChange:h,className:"toggle__checkbox",type:"checkbox"}),(0,l.jsx)("span",{className:w().post__toggleSwitchWithoutBall}),(0,l.jsxs)("span",{className:"toggle__label",children:[" ",s?"Off":"On"]})]})})})})]})}),(0,l.jsxs)("p",{children:["As you can see, there are a few ",(0,l.jsxs)("span",{className:"tooltip primary large",children:["magic numbers ",(0,l.jsx)(o.G,{icon:c.RLE}),(0,l.jsx)("span",{className:"tooltip__message",children:"Magic numbers are unique values, typically numerical, with unexplained meaning in a code that could be replaced by a named constant."})]}),". The magic numbers are 56 and 32. We needed to do something with them. Let's define two variables."]}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsx)("p",{children:"I've used to declare two SASS variables as I've used SASS here. You can use CSS variables or completely refuse using variables and write all values directly in CSS properties as written above."}),(0,l.jsx)("p",{children:"The first variable is a size of the toggle switch ball that we'll implement in the next step. The second variable is a gap between edges of the toggle."})]}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.JAVASCRIPT,customName:"index.scss",code:"$width: 24px;\n$gap: 4px;"})})]})}),(0,l.jsxs)("p",{className:"spacer bottom large",children:["Let me explain. The whole toggle consists of two equal parts and the toggle ball slips between them, therefore, the toggle switch is equal to ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$width * 2 + ($gap * 2)"}),", height is equal to ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$width + ($gap * 2)"})," and border radius is equal to ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$width + ($gap * 2)"}),". Next we're going to create the toggle switch ball with radius is equal to ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$width"})," and set indentation from egdes equal to ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$gap"}),". To understand check out figures below."]}),(0,l.jsxs)("div",{className:a(["row",w().post__dimensions]),children:[(0,l.jsx)("div",{className:"col col--33 col--tablet-100",children:(0,l.jsx)(n(),{src:N,layout:"responsive",objectFit:"cover"})}),(0,l.jsx)("div",{className:"col col--33 col--tablet-100",children:(0,l.jsx)(n(),{src:v,layout:"responsive",objectFit:"cover"})}),(0,l.jsx)("div",{className:"col col--33 col--tablet-100",children:(0,l.jsx)(n(),{src:f,layout:"responsive",objectFit:"cover"})})]}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row spacer top large",children:[(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsx)("p",{children:"Check out the example in the right. With a bit of modification, we get the following code."}),(0,l.jsx)("p",{children:"It looks confusing and a bit incomprehensible now, but this changes make the toggle style more flexible. If you ever want to change the toggle size, you need only edit two variables. Also you don't have to calculate anything."}),(0,l.jsx)("p",{children:"Try to avoid magic numbers wherever possible. Everything is made much clearer when we replace magic numbers with descriptive names since it makes a code easier to read and makes it more maintainable since we can update the value of the magic number by changing its variable assignment."})]}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.JAVASCRIPT,customName:"index.scss",code:".toggle__switch {\n  position: relative;\n  display: inline-block;\n  width: $width * 2 + ($gap * 2);\n  height: $width + ($gap * 2);\n  border-radius: $width + ($gap * 2);\n  background: #dddddd;\n  transition: background 0.25s;\n}"})})]})}),(0,l.jsx)("p",{className:"spacer top large",children:"Move on. The result are still far from satisfactory, but it won't be long now, I promise."})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Step 4: Create the toggle switch ball"}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsxs)("p",{className:"spacer bottom medium",children:["To build the toggle switch ball, we'll define ",(0,l.jsx)("code",{className:"highlighted ghost",children:"::before"})," pseudo-element. It will allow to avoid using additional HTML element in our markup."]}),(0,l.jsx)("p",{children:"The toggle switch ball style is a little tricky, isn't? Let's clear it up."}),(0,l.jsx)(x.Z,{children:(0,l.jsx)("div",{className:w().post__demo,children:(0,l.jsxs)("label",{className:"toggle",children:[(0,l.jsx)("input",{onChange:h,className:"toggle__checkbox",type:"checkbox"}),(0,l.jsx)("span",{className:w().post__toggleSwitchWithBefore}),(0,l.jsxs)("span",{className:"toggle__label",children:[" ",s?"Off":"On"]})]})})})]}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle__switch {\n  &:before {\n    position: absolute;\n    top: $gap;\n    left: $gap;\n    width: $width;\n    height: $width;\n    background: #ffffff;\n    border-radius: 50%;\n    transition: left 0.25s;\n  }\n}"})})]})}),(0,l.jsxs)("p",{children:["The toggle switch ball style depends on the toggle switch size that we defined above. As mentioned above, the toggle consists of two equal parts that are tied together - on and off. The ball slips between them from the left to the right and vice versa. With a few simple calculations, you can find out that the ball size directly depends on the size of the toggle: the ball width is two times less than the toggle width and the ball height is equal to the toggle height. Also we need to add some indentation between the edge of the toggle and the ball. Here we used already familiar variables ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$width"})," and ",(0,l.jsx)("code",{className:"highlighted ghost",children:"$gap"}),"."]}),(0,l.jsx)("p",{children:"And that's all here!"})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("h2",{children:"Step 5: Add the toggle animation \ud83d\udc83"}),(0,l.jsx)("p",{children:"As you may have noticed, the toggle above does not switch. Let's revive out it! We'll specify some more custom styles. This is the most important part of styling."}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle__checkbox {\n  position: absolute;\n  visibility: hidden;\n\n  &:checked ~ {\n    .toggle__switch {\n      background: #8a2be2;\n\n      &:before {\n        left: 50%;\n      }\n    }\n  }\n}"})}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("div",{className:w().post__demo,children:(0,l.jsxs)("label",{className:"toggle",children:[(0,l.jsx)("input",{onChange:h,className:"toggle__checkbox",type:"checkbox"}),(0,l.jsx)("span",{className:"toggle__switch"}),(0,l.jsxs)("span",{className:"toggle__label",children:[" ",s?"Off":"On"]})]})})})})]})}),(0,l.jsxs)("p",{children:["What's going on here? CSS pseudo-class selector ",(0,l.jsx)("code",{className:"highlighted ghost",children:":checked"})," represents HTML checkbox element that is checked or toggled to an on state."]}),(0,l.jsxs)("p",{children:["As a result, then checkbox is checked, it will be changed CSS property ",(0,l.jsx)("code",{className:"highlighted ghost",children:"background"})," and changed the toggle switch ball position. The percentage positioning with ",(0,l.jsx)("code",{className:"highlighted ghost",children:"left: 50%;"})," is used here instead of using another magic number such as ",(0,l.jsx)("code",{className:"highlighted ghost",children:"left: 28px;"}),"."]}),(0,l.jsx)("div",{className:w().post__snippet,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,l.jsx)("p",{className:"spacer botton medium",children:"Here are the finished markup and styles:"}),(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.html",code:b}),(0,l.jsx)("p",{className:"spacer top medium",children:"That it really is all about the toggle switch \ud83e\udd2a"})]}),(0,l.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,l.jsx)(m.ZP,{language:m.uw.CSS,customName:"index.scss",code:".toggle {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n\n  &__checkbox {\n    position: absolute;\n    visibility: hidden;\n\n    &:checked ~ {\n      .toggle__switch {\n        background: #8a2be2;\n\n        &:before {\n          left: 50%;\n        }\n      }\n    }\n  }\n\n  &__label {\n    margin-left: 10px;\n  }\n\n  &__switch {\n    position: relative;\n    display: inline-block;\n    width: $width * 2 + ($gap * 2);\n    height: $width + ($gap * 2);\n    border-radius: $width + ($gap * 2);\n    background: #dddddd;\n    transition: background 0.25s;\n\n    &:before {\n      position: absolute;\n      top: $gap;\n      left: $gap;\n      width: $width;\n      height: $width;\n      background: #ffffff;\n      border-radius: 50%;\n      transition: left 0.25s;\n    }\n  }\n}"})})]})})]}),(0,l.jsx)(A.Z,{items:C})]})]})}},28964:function(e){e.exports={code__wrapper:"code_code__wrapper__oNs_B",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__highlighter:"code_code__highlighter__RhRpK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM",code:"code_code__cWoxw"}},90723:function(e){e.exports={externalLink__icon:"external-link_externalLink__icon__QpxN3"}},31416:function(e){e.exports={htmlTag:"html-tag_htmlTag__HpA81",primary:"html-tag_primary__7jywi",secondary:"html-tag_secondary___TUWp",single:"html-tag_single__4ViUH"}},35380:function(e){e.exports={progressScroll:"progress-scroll_progressScroll__IM5Sn",progressScroll__tracker:"progress-scroll_progressScroll__tracker__OOKkH"}},24335:function(e){e.exports={post:"post_post___Jkkf",post__header:"post_post__header__u0SR7",post__title:"post_post__title__QMMZV",post__details:"post_post__details__0xNYq",post__category:"post_post__category___pGRB",post__date:"post_post__date__x2U7c",post__highlight:"post_post__highlight__l6PM0",post__content:"post_post__content___SEHz",post__footer:"post_post__footer___LEgT",post__link:"post_post__link__a02w1",back:"post_back__yoqeo",next:"post_next__1PVG9",post__next:"post_post__next__CSnMP",post__tags:"post_post__tags__Nr98i",post__tag:"post_post__tag__icLsF",post__alert:"post_post__alert__jnyF6",post__icon:"post_post__icon___vjx2",wrapper:"post_wrapper__Xjhc4",icon:"post_icon__HUbEf"}},608:function(e){e.exports={post:"post_post__ZzONx",post__snippet:"post_post__snippet__Zuwbz",post__toggleSwitchWithoutBall:"post_post__toggleSwitchWithoutBall__y33Ni",post__toggleSwitchWithBefore:"post_post__toggleSwitchWithBefore__ce1pT",post__dimensions:"post_post__dimensions__j21K_",post__demo:"post_post__demo__yF8Qy",post__gallery:"post_post__gallery__H6Hf4",post__image:"post_post__image__4R16n",keyboardSwitch:"post_keyboardSwitch__dA2lQ",electricalToggle:"post_electricalToggle__LKzlU",lightSwitch:"post_lightSwitch__Itaz2"}},53416:function(e,s,t){"use strict";t.d(s,{x0:function(){return l}});let l=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,s)=>e+=(s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_"),"")}},function(e){e.O(0,[5675,319,1856,9774,2888,179],(function(){return s=8963,e(e.s=s);var s}));var s=e.O();_N_E=s}]);