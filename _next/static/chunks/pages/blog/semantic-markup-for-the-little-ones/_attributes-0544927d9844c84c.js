(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{13861:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/semantic-markup-for-the-little-ones/_attributes",function(){return t(55644)}])},11428:function(e,i,t){"use strict";t.d(i,{uw:function(){return o}});var o,n,s=t(85893),a=(t(67294),t(92814)),_=t(51436),r=t(35192),d=t(26671),l=t(28964),c=t.n(l);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(o||(o={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(n||(n={}));i.ZP=function(e){var i=e.name,t=e.customName,o=e.code,l=e.language,w=e.showOnlyCode,h=void 0!==w&&w,p=e.showLineNumbers,A=void 0===p||p,m=e.startingLineNumber;return(0,s.jsx)("div",{className:c().code,children:h?(0,s.jsx)("div",{className:c().code__highlighter,children:(0,s.jsx)(r.Z,{startingLineNumber:m,language:l,showLineNumbers:!0,style:d.Y3,children:o})}):(0,s.jsxs)("div",{className:c().code__wrapper,children:[(0,s.jsxs)("div",{className:c().code__header,children:[(0,s.jsxs)("div",{className:c().code__name,children:[(0,s.jsx)(a.G,{icon:_.gMD}),t||l&&i&&"".concat(i,".").concat(n[l])]}),(0,s.jsx)("div",{className:c().code__actions,children:(0,s.jsxs)("button",{className:c().code__control,onClick:function(){navigator.clipboard.writeText(o)},children:[(0,s.jsx)(a.G,{icon:_.kZ_}),(0,s.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,s.jsx)("div",{className:c().code__body,children:(0,s.jsx)(r.Z,{language:l,showLineNumbers:A,style:d.Y3,children:o})})]})})}},95319:function(e,i,t){"use strict";t.d(i,{Z:function(){return o.ZP}});var o=t(11428)},85276:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var o,n,s=t(85893),a=(t(67294),t(94184)),_=t.n(a),r=t(31416),d=t.n(r);!function(e){e.SECONDARY="secondary",e.PRIMARY="primary"}(o||(o={})),function(e){e.DIV="div",e.FIRST_HEADING="h1",e.SECOND_HEADING="h2"}(n||(n={}));var l=function(e){var i=e.element,t=e.children,n=e.variant,a=void 0===n?o.PRIMARY:n,r=e.isUnpaired,l=void 0!==r&&r,c=e.isSingle,w=void 0!==c&&c,h=_().bind(d());return w?(0,s.jsxs)("span",{className:h([d().htmlTag,d().single]),children:["<",t,">"]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:h([d().htmlTag,d()[a]]),children:["<",i,">"]}),t&&t,!l&&(0,s.jsxs)("span",{className:h([d().htmlTag,d()[a]]),children:["</",i,">"]})]})}},25865:function(e,i,t){"use strict";t.d(i,{A:function(){return s},NS:function(){return n}});var o,n,s,a=t(85893),_=t(67294),r=t(92814),d=t(51436),l=t(51417),c=t(47166),w=t.n(c),h=t(68584),p=t.n(h);function A(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}!function(e){e.LIGHT="light",e.PRIMARY="primary",e.SECONDARY="secondary",e.DARK="dark",e.GHOST="ghost"}(o||(o={})),function(e){e.WINDOW="window",e.BROWSER="browser",e.SLIDESHOW="slideshow",e.FOLDER="folder",e.IMAGE="image",e.VALIDATOR="validator",e.CHAT="chat"}(n||(n={})),function(e){e.WAVY="wavy",e.CROSS="cross",e.SMILEY="smiley",e.SCALES="scales",e.SPRINKLES="sprinkles"}(s||(s={}));i.ZP=function(e){var i=e.type,t=void 0===i?n.WINDOW:i,s=e.title,c=e.fileTitle,h=e.children,m=e.pattern,u=e.filesCount,g=e.showMenu,f=void 0!==g&&g,x=e.isInverted,v=void 0!==x&&x,b=e.isPopUp,j=void 0!==b&&b,N=e.bodyBackground,y=void 0===N?o.LIGHT:N,I=w().bind(p()),T={slideshow:["File","Edit","View","Insert","Format","Help"],folder:["File","Edit","View","Favourites","Tools","Help"]},E={browser:l.qlP,slideshow:d.Krp,folder:d.Pk,image:d.VmB,validator:d.dT$,chat:d.lXL},S=(0,_.useMemo)((function(){return T.slideshow.map((function(e){return(0,a.jsx)("li",{children:e},e)}))}),[T]),C=(0,_.useMemo)((function(){if(t&&t!==n.WINDOW&&t!==n.CHAT)return(0,a.jsx)(r.G,{icon:E[t]})}),[t]);return(0,a.jsxs)("div",{className:p().window,children:[(0,a.jsxs)("div",{className:I([p().window__header,p()[t],A({},p().inverted,v),A({},p().popUp,j)]),children:[(0,a.jsxs)("div",{className:I([p().window__heading,A({},p().inverted,v)]),children:[C,(0,a.jsx)("span",{className:p().window__title,children:s}),c&&(0,a.jsx)("span",{className:p().window__fileTitle,children:c})]}),(0,a.jsxs)("div",{className:p().window__actions,children:[(0,a.jsx)("span",{className:I([p().window__control,A({},p().inverted,v)]),children:(0,a.jsx)(r.G,{icon:d.IQi})}),(0,a.jsx)("span",{className:I([p().window__control,A({},p().inverted,v)]),children:(0,a.jsx)(r.G,{icon:d.iAX})}),(0,a.jsx)("span",{className:I([p().window__control,A({},p().inverted,v)]),children:(0,a.jsx)(r.G,{icon:d.g82})})]})]}),f&&(t===n.SLIDESHOW||t===n.FOLDER)&&(0,a.jsx)("div",{className:p().window__menu,children:S}),(0,a.jsxs)("div",{className:I([p().window__body,p()[t],p()[y],A({},p().inverted,v)]),children:[(0,a.jsx)("div",{className:I([p().window__content]),children:h}),m&&(0,a.jsx)("div",{className:I([p().window__pattern,p()[m]])}),t===n.FOLDER&&(0,a.jsx)("div",{className:p().window__footer,children:(0,a.jsxs)("span",{className:p().window__count,children:[u," object(s)"]})})]})]})}},75302:function(e,i,t){"use strict";t.d(i,{Z:function(){return o.ZP}});var o=t(25865)},55644:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var o=t(85893),n=(t(67294),t(25675)),s=t.n(n),a=t(95319),_=t(11428),r=t(85276),d=t(75302),l=t(25865),c=t(24754),w=t.n(c),h={src:"/_next/static/media/kesha.08865924.jpg",height:1280,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAIRMf//EAB0QAAAFBQAAAAAAAAAAAAAAAAABAgMREhMUISL/2gAIAQEAAT8AU+7YNeUouoirY//EABoRAAAHAAAAAAAAAAAAAAAAAAABAgMTQ5H/2gAIAQIBAT8AkcOxej//xAAZEQABBQAAAAAAAAAAAAAAAAAAAQISUpH/2gAIAQMBAT8Ai2qYf//Z"},p=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Use required attributes"}),(0,o.jsxs)("p",{children:["Some HTML tags have required attributes. There aren't a lot of them but they are there and developers often forget about them or even don't know. Alternative text attribute ",(0,o.jsx)("span",{className:"highlighted ghost",children:"alt"})," of HTML image ",(0,o.jsx)(r.Z,{isSingle:!0,children:"img"})," tag is probably the most neglected attribute."]}),(0,o.jsx)("div",{className:w().post__snippet,children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,o.jsxs)("p",{children:["Sometimes it happens that browser might not display images. In these cases browser may replace missing image with text of alternate text attribute. This attribute describes context of an image. For these reasons you should provide useful value for ",(0,o.jsx)("span",{className:"highlighted ghost",children:"alt"})," whenever possible."]}),(0,o.jsx)("p",{children:"Alternative text also helps users on a screen reader or with a slow Internet connection to decide whether or not the image is important."}),(0,o.jsx)("p",{className:"spacer bottom medium",children:"The most important rule about alternative text is that it needs to describe its image as concisely as possible. At first do not use keywords as alternate text e.g. for the image of my dog below: 'Dog, corgi, smile, flowers, nature, lake, green'. Instead of this try to describe an image as I did in the example below:"}),(0,o.jsx)(a.Z,{language:_.uw.HTML,name:"index",code:"<img\n  src='kesha.jpg'\n  alt='A happy smiling dog breed corgi\n  lying in a flower field on a hill\n  with a small pond in the background' />"})]}),(0,o.jsx)("div",{className:"col col--50 col--tablet-100",children:(0,o.jsx)(d.Z,{type:l.NS.IMAGE,title:"GALLERY",fileTitle:"kesha.jpg",children:(0,o.jsx)(s(),{layout:"responsive",src:h,alt:"A happy smiling dog breed corgi lying in a flower field on a hill with a small pond in the background"})})})]})}),(0,o.jsxs)("p",{className:"spacer top medium",children:["Another important requierd attribute is ",(0,o.jsx)("code",{className:"highlighted ghost",children:"href"})," of already mentioned above HTML element ",(0,o.jsx)(r.Z,{isSingle:!0,children:"a"})," which is used to link from one page to another. This attribute indicates a link destination. If you'll use ",(0,o.jsx)(r.Z,{isSingle:!0,children:"a"})," tag for creating buttons, ",(0,o.jsx)("code",{className:"highlighted ghost",children:"href"})," obviously will be useless. As it was mentioned above, don't make unclickable elements clickable."]}),(0,o.jsxs)("p",{className:"note spacer top medium",children:[(0,o.jsx)("span",{className:"note__title",children:"Hint:"})," if you set ",(0,o.jsx)("span",{className:"highlighted ghost",children:"alt"})," attribute to an empty string it will be indicate that its image is not a key part of content, for example it's decorative. An image with an empty alternative text attribute is not the same as having no ",(0,o.jsx)("code",{className:"highlighted ghost",children:"alt"})," attribute. If there is no ",(0,o.jsx)("code",{className:"highlighted ghost",children:"alt"})," attribute on the ",(0,o.jsx)(r.Z,{isSingle:!0,children:"img"})," element, screen readers will announce full name of the image file, which may not make any sense to users."]})]})}},28964:function(e){e.exports={code__wrapper:"code_code__wrapper__oNs_B",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__highlighter:"code_code__highlighter__RhRpK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM",code:"code_code__cWoxw"}},31416:function(e){e.exports={htmlTag:"html-tag_htmlTag__HpA81",primary:"html-tag_primary__7jywi",secondary:"html-tag_secondary___TUWp",single:"html-tag_single__4ViUH"}},68584:function(e){e.exports={window:"window_window__ZM8IX",window__header:"window_window__header__laqgW",popUp:"window_popUp__DdBTj",inverted:"window_inverted__U6mBB",window__heading:"window_window__heading__2XtgQ",window__title:"window_window__title__zsSWg",window__fileTitle:"window_window__fileTitle__dgpl6",window__actions:"window_window__actions__JJ169",window__body:"window_window__body__lA33P",light:"window_light__h5AlA",primary:"window_primary__vWP8a",secondary:"window_secondary__zwzKx",ghost:"window_ghost__HvvW8",dark:"window_dark__ne_IN",slideshow:"window_slideshow__EY_ZT",folder:"window_folder__x6rfd",image:"window_image__wAC1C",validator:"window_validator__zNQZz",chat:"window_chat__W7WmC",window__control:"window_window__control__1_ma5",window__pattern:"window_window__pattern__f_UQS",wavy:"window_wavy__sntu0",cross:"window_cross___O2Kz",smiley:"window_smiley__7JtLl",scales:"window_scales__9JClC",sprinkles:"window_sprinkles__X1_aF",window__content:"window_window__content__VCTuY",window__menu:"window_window__menu__xxLJC",window__footer:"window_window__footer__yO1_3",window__count:"window_window__count__ODemJ",appearFromLeft:"window_appearFromLeft__y0FWg",appearFromBottom:"window_appearFromBottom__feRw4",appearFromTop:"window_appearFromTop__nc5Ox",appearFromRight:"window_appearFromRight__Rr6fm",appearFromNowhere:"window_appearFromNowhere__QS2k8",appearFromFront:"window_appearFromFront__X_sby",hideInFront:"window_hideInFront__f_AqU",appearFromNearFront:"window_appearFromNearFront__IPxgd"}},24754:function(e){e.exports={post:"post_post__JaQqG",post__details:"post_post__details__VwgJ9",post__snippet:"post_post__snippet__V7vyC",post__label:"post_post__label__4Azpz",post__subtitle:"post_post__subtitle__iwV2_",post__address:"post_post__address__WCGh9",post__pin:"post_post__pin__iRCSI",post__envelope:"post_post__envelope__ozHPq",post__sticker:"post_post__sticker__OQztb",post__text:"post_post__text__AgXDZ",post__menu:"post_post__menu__zJRYp",post__anchor:"post_post__anchor__elytn",post__buttonWrapper:"post_post__buttonWrapper__XXJC2",post__button:"post_post__button__SH9rI"}}},function(e){e.O(0,[5675,319,9774,2888,179],(function(){return i=13861,e(e.s=i);var i}));var i=e.O();_N_E=i}]);