(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3419],{55128:function(o,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/pure-css-tooltips/directions-tooltips-demo/DirectionsTooltipsDemo",function(){return e(38266)}])},25865:function(o,i,e){"use strict";e.d(i,{A:function(){return t},NS:function(){return n}});var n,t,_=e(85893),s=e(67294),d=e(92814),l=e(51436),r=e(51417),w=e(47166),c=e.n(w),a=e(68584),m=e.n(a);!function(o){o.WINDOW="window",o.BROWSER="browser",o.SLIDESHOW="slideshow",o.FOLDER="folder",o.IMAGE="image"}(n||(n={})),function(o){o.WAVY="wavy",o.CROSS="cross",o.SMILEY="smiley"}(t||(t={}));i.ZP=function(o){var i=o.type,e=void 0===i?n.WINDOW:i,t=o.title,w=o.fileTitle,a=o.children,u=o.pattern,p=o.filesCount,f=o.showMenu,h=void 0!==f&&f,T=c().bind(m()),v={slideshow:["File","Edit","View","Insert","Format","Help"],folder:["File","Edit","View","Favourites","Tools","Help"]},x={browser:r.qlP,slideshow:l.Krp,folder:l.Pk,image:l.VmB},N=(0,s.useMemo)((function(){return v.slideshow.map((function(o){return(0,_.jsx)("li",{children:o},o)}))}),[v]),j=(0,s.useMemo)((function(){if(e&&e!==n.WINDOW)return(0,_.jsx)(d.G,{icon:x[e]})}),[e]);return(0,_.jsxs)("div",{className:m().window,children:[(0,_.jsxs)("div",{className:T([m().window__header,m()[e]]),children:[(0,_.jsxs)("div",{className:m().window__heading,children:[j,(0,_.jsx)("span",{className:m().window__title,children:t}),w&&(0,_.jsx)("span",{className:m().window__fileTitle,children:w})]}),(0,_.jsxs)("div",{className:m().window__actions,children:[(0,_.jsx)("span",{className:m().window__control,children:(0,_.jsx)(d.G,{icon:l.IQi})}),(0,_.jsx)("span",{className:m().window__control,children:(0,_.jsx)(d.G,{icon:l.iAX})}),(0,_.jsx)("span",{className:m().window__control,children:(0,_.jsx)(d.G,{icon:l.g82})})]})]}),h&&(e===n.SLIDESHOW||e===n.FOLDER)&&(0,_.jsx)("div",{className:m().window__menu,children:N}),(0,_.jsxs)("div",{className:T([m().window__body,m()[e]]),children:[(0,_.jsx)("div",{className:T([m().window__content]),children:a}),u&&(0,_.jsx)("div",{className:T([m().window__pattern,m()[u]])}),e===n.FOLDER&&(0,_.jsx)("div",{className:m().window__footer,children:(0,_.jsxs)("span",{className:m().window__count,children:[p," object(s)"]})})]})]})}},75302:function(o,i,e){"use strict";e.d(i,{Z:function(){return n.ZP}});var n=e(25865)},61809:function(o,i,e){"use strict";e.d(i,{LW:function(){return n},Ym:function(){return t}});var n,t,_=e(85893),s=(e(67294),e(94184)),d=e.n(s),l=e(74645),r=e.n(l);!function(o){o.DEFAULT="default",o.PRIMARY="primary",o.SECONDARY="secondary",o.HERO="hero"}(n||(n={})),function(o){o.TOP="top",o.BOTTOM="bottom",o.LEFT="left",o.RIGHT="right"}(t||(t={}));i.ZP=function(o){var i,e,s,l=o.tooltip,w=o.message,c=o.variant,a=void 0===c?n.PRIMARY:c,m=o.direction,u=void 0===m?t.RIGHT:m,p=o.isInline,f=void 0!==p&&p,h=o.disableTriggering,T=void 0!==h&&h,v=d().bind(r()),x=!f&&a!==n.HERO;return(0,_.jsxs)("div",{className:v(["tooltip",r().demoTooltip,r()[a],x&&r()[u],(i={},e=r().inline,s=f,e in i?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,i)]),children:[l,(0,_.jsx)("div",{className:v([!T&&"tooltip__message",r().demoTooltip__message]),children:w})]})}},34487:function(o,i,e){"use strict";e.d(i,{Z:function(){return n.ZP}});var n=e(61809)},38266:function(o,i,e){"use strict";e.r(i);var n=e(85893),t=e(94184),_=e.n(t),s=e(67294),d=e(75302),l=e(34487),r=e(61809),w=e(15235),c=e.n(w);i.default=function(){var o=_().bind(c()),i=[r.Ym.RIGHT,r.Ym.TOP,r.Ym.LEFT,r.Ym.BOTTOM],e=(0,s.useMemo)((function(){return i.map((function(i){return(0,n.jsx)("li",{className:"col col--25 col--tablet-50 col--mobile-100",children:(0,n.jsx)("div",{className:c().directionsTooltipsDemo__item,children:(0,n.jsx)(l.Z,{tooltip:(0,n.jsx)("span",{className:o([c().directionsTooltipsDemo__label,"underlined dotted primary"]),children:i}),message:i,variant:r.LW.PRIMARY,direction:i})})},i)}))}),[i]);return(0,n.jsx)(d.Z,{children:(0,n.jsxs)("div",{className:c().directionsTooltipsDemo,children:[(0,n.jsx)("h3",{className:c().directionsTooltipsDemo__title,children:"There are four directions of tooltips:"}),(0,n.jsx)("ul",{className:o(["row",c().directionsTooltipsDemo__list]),children:e})]})})}},68584:function(o){o.exports={window:"window_window__ZM8IX",window__header:"window_window__header__laqgW",window__heading:"window_window__heading__2XtgQ",window__title:"window_window__title__zsSWg",window__fileTitle:"window_window__fileTitle__dgpl6",window__actions:"window_window__actions__JJ169",window__body:"window_window__body__lA33P",slideshow:"window_slideshow__EY_ZT",folder:"window_folder__x6rfd",image:"window_image__wAC1C",window__control:"window_window__control__1_ma5",window__pattern:"window_window__pattern__f_UQS",wavy:"window_wavy__sntu0",cross:"window_cross___O2Kz",smiley:"window_smiley__7JtLl",window__content:"window_window__content__VCTuY",window__menu:"window_window__menu__xxLJC",window__footer:"window_window__footer__yO1_3",window__count:"window_window__count__ODemJ"}},74645:function(o){o.exports={demoTooltip__message:"demo-tooltip_demoTooltip__message__7IuJU",demoTooltip:"demo-tooltip_demoTooltip__Qe85f",default:"demo-tooltip_default__uvru8",hero:"demo-tooltip_hero__Bq6iA",primary:"demo-tooltip_primary__9JFAs",secondary:"demo-tooltip_secondary__W8KWp",right:"demo-tooltip_right__AwwQD",left:"demo-tooltip_left__VftPN",top:"demo-tooltip_top__r82FN",bottom:"demo-tooltip_bottom__kw4dT",inline:"demo-tooltip_inline__7mcVt"}},15235:function(o){o.exports={directionsTooltipsDemo__title:"directions-tooltips-demo_directionsTooltipsDemo__title__zQan9",directionsTooltipsDemo__label:"directions-tooltips-demo_directionsTooltipsDemo__label__u5rmA",directionsTooltipsDemo__item:"directions-tooltips-demo_directionsTooltipsDemo__item__fvgaV"}}},function(o){o.O(0,[9774,2888,179],(function(){return i=55128,o(o.s=i);var i}));var i=o.O();_N_E=i}]);