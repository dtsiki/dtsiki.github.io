(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2295],{71323:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/semantic-markup-for-the-little-ones/_lists",function(){return n(8859)}])},31551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(i){s=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,c=(a=n(67294))&&a.__esModule?a:{default:a},s=n(41003),i=n(80880),l=n(69246);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _={};function f(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;_[t+"%"+n+(o?"%"+o:"")]=!0}}var d=c.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,d=e.href,p=e.as,h=e.children,m=e.prefetch,v=e.passHref,y=e.replace,b=e.shallow,g=e.scroll,j=e.locale,x=e.onClick,w=e.onMouseEnter,N=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,a&&"string"===typeof n&&(n=c.default.createElement("a",null,n));var C,E=!1!==m,O=i.useRouter(),I=c.default.useMemo((function(){var e=o(s.resolveHref(O,d,!0),2),t=e[0],n=e[1];return{href:t,as:p?s.resolveHref(O,p):n||t}}),[O,d,p]),S=I.href,A=I.as,R=c.default.useRef(S),k=c.default.useRef(A);a&&(C=c.default.Children.only(n));var M=a?C&&"object"===typeof C&&C.ref:t,L=o(l.useIntersection({rootMargin:"200px"}),3),T=L[0],P=L[1],H=L[2],D=c.default.useCallback((function(e){k.current===A&&R.current===S||(H(),k.current=A,R.current=S),T(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[A,M,S,H,T]);c.default.useEffect((function(){var e=P&&E&&s.isLocalURL(S),t="undefined"!==typeof j?j:O&&O.locale,n=_[S+"%"+A+(t?"%"+t:"")];e&&!n&&f(O,S,A,{locale:t})}),[A,S,P,j,E,O]);var U={ref:D,onClick:function(e){a||"function"!==typeof x||x(e),a&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}))}(e,O,S,A,y,b,g,j)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),s.isLocalURL(S)&&f(O,S,A,{priority:!0})}};if(!a||v||"a"===C.type&&!("href"in C.props)){var Z="undefined"!==typeof j?j:O&&O.locale,G=O&&O.isLocaleDomain&&s.getDomainLocale(A,Z,O&&O.locales,O&&O.domainLocales);U.href=G||s.addBasePath(s.addLocale(A,Z,O&&O.defaultLocale))}return a?c.default.cloneElement(C,U):c.default.createElement("a",Object.assign({},N,U),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(i){s=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,u=a.useRef(),_=o(a.useState(!1),2),f=_[0],d=_[1],p=o(a.useState(t?t.current:null),2),h=p[0],m=p[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=i.get(r):(t=i.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),i.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),y=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&m(t.current)}),[t]),[v,f,y]};var a=n(67294),c=n(44686),s="undefined"!==typeof IntersectionObserver;var i=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},11428:function(e,t,n){"use strict";n.d(t,{uw:function(){return r}});var r,o,a=n(85893),c=n(92814),s=n(51436),i=n(35192),l=n(26671),u=n(28964),_=n.n(u);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(r||(r={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(o||(o={}));t.ZP=function(e){var t=e.name,n=e.customName,r=e.code,u=e.language,f=e.showOnlyCode,d=void 0!==f&&f,p=e.showLineNumbers,h=void 0===p||p,m=e.startingLineNumber,v=e.isTerminal,y=void 0!==v&&v,b=function(){navigator.clipboard.writeText(r)};return(0,a.jsx)("div",{className:_().code,children:d?(0,a.jsxs)("div",{className:_().code__highlighter,children:[(0,a.jsx)("div",{className:_().code__actions,children:(0,a.jsxs)("button",{className:_().code__control,onClick:b,children:[(0,a.jsx)(c.G,{icon:s.kZ_}),(0,a.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})}),(0,a.jsx)(i.Z,{startingLineNumber:m,language:u||"plaintext",showLineNumbers:h,style:l.Y3,children:r})]}):(0,a.jsxs)("div",{className:_().code__wrapper,children:[(0,a.jsxs)("div",{className:_().code__header,children:[(0,a.jsxs)("div",{className:_().code__name,children:[(0,a.jsx)(c.G,{icon:y?s.Jw3:s.gMD}),n||u&&t&&"".concat(t,".").concat(o[u])]}),(0,a.jsx)("div",{className:_().code__actions,children:(0,a.jsxs)("button",{className:_().code__control,onClick:b,children:[(0,a.jsx)(c.G,{icon:s.kZ_}),(0,a.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,a.jsx)("div",{className:_().code__body,children:(0,a.jsx)(i.Z,{language:u||"plaintext",showLineNumbers:!y&&h,style:l.Y3,children:r})})]})})}},95319:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.ZP}});var r=n(11428)},85276:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r,o,a=n(85893),c=(n(67294),n(94184)),s=n.n(c),i=n(31416),l=n.n(i);!function(e){e.SECONDARY="secondary",e.PRIMARY="primary"}(r||(r={})),function(e){e.DIV="div",e.FIRST_HEADING="h1",e.SECOND_HEADING="h2"}(o||(o={}));var u=function(e){var t=e.element,n=e.children,o=e.variant,c=void 0===o?r.PRIMARY:o,i=e.isUnpaired,u=void 0!==i&&i,_=e.isSingle,f=void 0!==_&&_,d=s().bind(l());return f?(0,a.jsxs)("span",{className:d([l().htmlTag,l().single]),children:["<",n,">"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:d([l().htmlTag,l()[c]]),children:["<",t,">"]}),n&&n,!u&&(0,a.jsxs)("span",{className:d([l().htmlTag,l()[c]]),children:["</",t,">"]})]})}},28964:function(e){e.exports={code__wrapper:"code_code__wrapper__oNs_B",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__highlighter:"code_code__highlighter__RhRpK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM",code:"code_code__cWoxw"}},31416:function(e){e.exports={htmlTag:"html-tag_htmlTag__HpA81",primary:"html-tag_primary__7jywi",secondary:"html-tag_secondary___TUWp",single:"html-tag_single__4ViUH"}},24754:function(e){e.exports={post:"post_post__JaQqG",post__details:"post_post__details__VwgJ9",post__snippet:"post_post__snippet__V7vyC",post__label:"post_post__label__4Azpz",post__subtitle:"post_post__subtitle__iwV2_",post__address:"post_post__address__WCGh9",post__pin:"post_post__pin__iRCSI",post__envelope:"post_post__envelope__ozHPq",post__sticker:"post_post__sticker__OQztb",post__text:"post_post__text__AgXDZ",post__menu:"post_post__menu__zJRYp",post__anchor:"post_post__anchor__elytn",post__buttonWrapper:"post_post__buttonWrapper__XXJC2",post__button:"post_post__button__SH9rI"}},41664:function(e,t,n){e.exports=n(31551)}},function(e){e.O(0,[319,8859,9774,2888,179],(function(){return t=71323,e(e.s=t);var t}));var t=e.O();_N_E=t}]);