(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9542],{46525:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/semantic-markup-for-the-little-ones/_headings",function(){return n(56083)}])},11428:function(e,s,n){"use strict";n.d(s,{uw:function(){return i}});var i,t,o=n(85893),a=(n(67294),n(92814)),l=n(51436),c=n(35192),_=n(26671),d=n(28964),r=n.n(d);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(i||(i={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(t||(t={}));s.ZP=function(e){var s=e.name,n=e.customName,i=e.code,d=e.language,h=e.showOnlyCode,p=void 0!==h&&h,u=e.showLineNumbers,g=void 0===u||u,m=e.startingLineNumber;return(0,o.jsx)("div",{className:r().code,children:p?(0,o.jsx)("div",{className:r().code__highlighter,children:(0,o.jsx)(c.Z,{startingLineNumber:m,language:d,showLineNumbers:!0,style:_.Y3,children:i})}):(0,o.jsxs)("div",{className:r().code__wrapper,children:[(0,o.jsxs)("div",{className:r().code__header,children:[(0,o.jsxs)("div",{className:r().code__name,children:[(0,o.jsx)(a.G,{icon:l.gMD}),n||d&&s&&"".concat(s,".").concat(t[d])]}),(0,o.jsx)("div",{className:r().code__actions,children:(0,o.jsxs)("button",{className:r().code__control,onClick:function(){navigator.clipboard.writeText(i)},children:[(0,o.jsx)(a.G,{icon:l.kZ_}),(0,o.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,o.jsx)("div",{className:r().code__body,children:(0,o.jsx)(c.Z,{language:d,showLineNumbers:g,style:_.Y3,children:i})})]})})}},95319:function(e,s,n){"use strict";n.d(s,{Z:function(){return i.ZP}});var i=n(11428)},85276:function(e,s,n){"use strict";n.d(s,{Z:function(){return d}});var i,t,o=n(85893),a=(n(67294),n(94184)),l=n.n(a),c=n(31416),_=n.n(c);!function(e){e.SECONDARY="secondary",e.PRIMARY="primary"}(i||(i={})),function(e){e.DIV="div",e.FIRST_HEADING="h1",e.SECOND_HEADING="h2"}(t||(t={}));var d=function(e){var s=e.element,n=e.children,t=e.variant,a=void 0===t?i.PRIMARY:t,c=e.isUnpaired,d=void 0!==c&&c,r=e.isSingle,h=void 0!==r&&r,p=l().bind(_());return h?(0,o.jsxs)("span",{className:p([_().htmlTag,_().single]),children:["<",n,">"]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{className:p([_().htmlTag,_()[a]]),children:["<",s,">"]}),n&&n,!d&&(0,o.jsxs)("span",{className:p([_().htmlTag,_()[a]]),children:["</",s,">"]})]})}},56083:function(e,s,n){"use strict";n.r(s);var i=n(85893),t=(n(67294),n(95319)),o=n(11428),a=n(85276),l=n(24754),c=n.n(l);s.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Use headings"}),(0,i.jsxs)("p",{children:["HTML provides us special elements for headings: ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h1"}),", ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h2"}),", ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h3"}),", ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h4"}),", ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h5"})," and ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h6"}),". Whoa, that is a lot! Why not use them?"]}),(0,i.jsxs)("p",{children:["As you can see, these elements have a level given by the number in their name. The heading level corresponds to the levels of nested sections. Tag ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h1"})," is for a top-level headings, ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h2"})," for a second-level headings, etc."]}),(0,i.jsx)("p",{children:"Of course, you can use again only divs elements and it will work fine. This tip is similar to the previous one. Headings give structure to a web page. Nothing is clear when you first look at the markup on the left, that's just a bunch of divs. In addition, search engines use headings to index structure and content of web pages."}),(0,i.jsx)("div",{className:c().post__snippet,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,i.jsx)(t.Z,{language:o.uw.HTML,name:"index",code:"<div>\n  <div>The best cinnamon rolls recipe</div>\n  <div>Ingredients</div>\n  <div>Tools</div>\n  <div>Instructions</div>\n  <div>Step 1</div>\n  <div>Step 2</div>\n  <div>Step 3</div>\n  <div>Tips</div>\n</div>"})}),(0,i.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,i.jsx)(t.Z,{language:o.uw.JAVASCRIPT,customName:"index.html",code:"<section>\n  <h1>The best cinnamon rolls recipe</h1>\n  <h2>Ingredients</h2>\n  <h2>Tools</h2>\n  <h2>Instructions</h2>\n  <h3>Step 1</h3>\n  <h3>Step 2</h3>\n  <h3>Step 3</h3>\n  <h2>Tips</h2>\n</section>"})})]})}),(0,i.jsx)("p",{className:"spacer top large",children:"There are a few tips that will help you  use headings like a pro:"}),(0,i.jsxs)("ol",{className:"list ordered",children:[(0,i.jsxs)("li",{className:"list__item",children:["Avoid skipping heading levels: always start from ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h1"}),", followed by ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h2"}),", then the less important ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h3"}),", and so on."]}),(0,i.jsxs)("li",{className:"list__item",children:["Use only one ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h1"})," heading per a web page, and that ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h1"})," should succinctly represent the content on that page. Using more than one ",(0,i.jsx)(a.Z,{isSingle:!0,children:"h1"})," is allowed by the HTML specification, but is not considered as a best practice."]}),(0,i.jsxs)("li",{className:"list__item",children:["Browsers have default styles for headings. Don't use headings and their default styles to make your text looks big or bold. Instead of it use CSS properties, e.g. ",(0,i.jsx)("code",{className:"highlighted secondary",children:"font-size"})," or ",(0,i.jsx)("code",{className:"highlighted secondary",children:"font-weight"}),"."]})]})]})}},28964:function(e){e.exports={code__wrapper:"code_code__wrapper__oNs_B",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__highlighter:"code_code__highlighter__RhRpK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM",code:"code_code__cWoxw"}},31416:function(e){e.exports={htmlTag:"html-tag_htmlTag__HpA81",primary:"html-tag_primary__7jywi",secondary:"html-tag_secondary___TUWp",single:"html-tag_single__4ViUH"}},24754:function(e){e.exports={post:"post_post__JaQqG",post__details:"post_post__details__VwgJ9",post__snippet:"post_post__snippet__V7vyC",post__label:"post_post__label__4Azpz",post__subtitle:"post_post__subtitle__iwV2_",post__address:"post_post__address__WCGh9",post__pin:"post_post__pin__iRCSI",post__envelope:"post_post__envelope__ozHPq",post__sticker:"post_post__sticker__OQztb",post__text:"post_post__text__AgXDZ",post__menu:"post_post__menu__zJRYp",post__anchor:"post_post__anchor__elytn",post__buttonWrapper:"post_post__buttonWrapper__XXJC2",post__button:"post_post__button__SH9rI"}}},function(e){e.O(0,[319,9774,2888,179],(function(){return s=46525,e(e.s=s);var s}));var s=e.O();_N_E=s}]);