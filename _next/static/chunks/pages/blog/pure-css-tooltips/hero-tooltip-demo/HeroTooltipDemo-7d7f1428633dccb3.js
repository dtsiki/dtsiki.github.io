(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6553],{25793:function(o,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/pure-css-tooltips/hero-tooltip-demo/HeroTooltipDemo",function(){return n(83939)}])},25865:function(o,i,n){"use strict";n.d(i,{A:function(){return t}});var e,t,_=n(85893),d=n(67294),s=n(92814),w=n(51436),r=n(51417),l=n(47166),a=n.n(l),c=n(68584),m=n.n(c);!function(o){o.WINDOW="window",o.BROWSER="browser",o.SLIDESHOW="slideshow"}(e||(e={})),function(o){o.WAVY="wavy",o.CROSS="cross",o.SMILEY="smiley"}(t||(t={}));i.ZP=function(o){var i=o.type,n=void 0===i?e.WINDOW:i,t=o.title,l=o.fileTitle,c=o.children,u=o.pattern,p=a().bind(m()),f={slideshow:["File","Edit","View","Insert","Format","Help"]},h={browser:r.qlP,slideshow:w.Krp},v=(0,d.useMemo)((function(){return null===f||void 0===f?void 0:f.slideshow.map((function(o){return(0,_.jsx)("li",{children:o},o)}))}),[f]),x=(0,d.useMemo)((function(){if(n&&n!==e.WINDOW)return(0,_.jsx)(s.G,{icon:h[n]})}),[n]);return(0,_.jsxs)("div",{className:m().window,children:[(0,_.jsxs)("div",{className:p([m().window__header,m()[n]]),children:[(0,_.jsxs)("div",{className:m().window__heading,children:[x,(0,_.jsx)("span",{className:m().window__title,children:t}),(0,_.jsx)("span",{className:m().window__fileTitle,children:l&&l})]}),(0,_.jsxs)("div",{className:m().window__actions,children:[(0,_.jsx)("span",{className:m().window__control,children:(0,_.jsx)(s.G,{icon:w.IQi})}),(0,_.jsx)("span",{className:m().window__control,children:(0,_.jsx)(s.G,{icon:w.iAX})}),(0,_.jsx)("span",{className:m().window__control,children:(0,_.jsx)(s.G,{icon:w.g82})})]})]}),n===e.SLIDESHOW&&(0,_.jsx)("div",{className:m().window__menu,children:v}),(0,_.jsxs)("div",{className:p([m().window__body,m()[n]]),children:[(0,_.jsx)("div",{className:m().window__content,children:c}),u&&(0,_.jsx)("div",{className:p([m().window__pattern,m()[u]])})]})]})}},75302:function(o,i,n){"use strict";n.d(i,{Z:function(){return e.ZP}});var e=n(25865)},61809:function(o,i,n){"use strict";n.d(i,{LW:function(){return e},Ym:function(){return t}});var e,t,_=n(85893),d=(n(67294),n(94184)),s=n.n(d),w=n(74645),r=n.n(w);!function(o){o.DEFAULT="default",o.PRIMARY="primary",o.SECONDARY="secondary",o.HERO="hero"}(e||(e={})),function(o){o.TOP="top",o.BOTTOM="bottom",o.LEFT="left",o.RIGHT="right"}(t||(t={}));i.ZP=function(o){var i,n,d,w=o.tooltip,l=o.message,a=o.variant,c=void 0===a?e.PRIMARY:a,m=o.direction,u=void 0===m?t.RIGHT:m,p=o.isInline,f=void 0!==p&&p,h=o.disableTriggering,v=void 0!==h&&h,x=s().bind(r()),T=!f&&c!==e.HERO;return(0,_.jsxs)("div",{className:x(["tooltip",r().demoTooltip,r()[c],T&&r()[u],(i={},n=r().inline,d=f,n in i?Object.defineProperty(i,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[n]=d,i)]),children:[w,(0,_.jsx)("div",{className:x([!v&&"tooltip__message",r().demoTooltip__message]),children:l})]})}},34487:function(o,i,n){"use strict";n.d(i,{Z:function(){return e.ZP}});var e=n(61809)},83939:function(o,i,n){"use strict";n.r(i);var e=n(85893),t=(n(67294),n(75302)),_=n(34487),d=n(61809),s=n(89647),w=n.n(s);i.default=function(){return(0,e.jsx)(t.Z,{children:(0,e.jsxs)("div",{className:w().heroTooltipDemo,children:["Let's make a ",(0,e.jsx)(_.Z,{tooltip:(0,e.jsx)("span",{className:"underlined dotted primary",children:"tooltip"}),message:"Yay!",variant:d.LW.HERO,direction:d.Ym.BOTTOM})]})})}},68584:function(o){o.exports={window:"window_window__ZM8IX",window__header:"window_window__header__laqgW",window__heading:"window_window__heading__2XtgQ",window__title:"window_window__title__zsSWg",window__fileTitle:"window_window__fileTitle__dgpl6",window__actions:"window_window__actions__JJ169",window__body:"window_window__body__lA33P",slideshow:"window_slideshow__EY_ZT",window__control:"window_window__control__1_ma5",window__pattern:"window_window__pattern__f_UQS",wavy:"window_wavy__sntu0",cross:"window_cross___O2Kz",smiley:"window_smiley__7JtLl",window__content:"window_window__content__VCTuY",window__menu:"window_window__menu__xxLJC"}},74645:function(o){o.exports={demoTooltip__message:"demo-tooltip_demoTooltip__message__7IuJU",demoTooltip:"demo-tooltip_demoTooltip__Qe85f",default:"demo-tooltip_default__uvru8",hero:"demo-tooltip_hero__Bq6iA",primary:"demo-tooltip_primary__9JFAs",secondary:"demo-tooltip_secondary__W8KWp",right:"demo-tooltip_right__AwwQD",left:"demo-tooltip_left__VftPN",top:"demo-tooltip_top__r82FN",bottom:"demo-tooltip_bottom__kw4dT",inline:"demo-tooltip_inline__7mcVt"}},89647:function(o){o.exports={heroTooltipDemo:"hero-tooltip-demo_heroTooltipDemo__pgJ9L"}}},function(o){o.O(0,[9774,2888,179],(function(){return i=25793,o(o.s=i);var i}));var i=o.O();_N_E=i}]);