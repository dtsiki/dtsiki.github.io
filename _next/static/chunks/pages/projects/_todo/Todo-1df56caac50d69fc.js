(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{2959:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/_todo/Todo",function(){return n(6400)}])},3885:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(5893),a=(n(7294),n(4184)),r=n.n(a),s=n(2814),l=n(9398),c=n(723),o=n.n(c),d=function(t){var e=t.href,n=t.label,a=r().bind(o());return(0,i.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:a(["link",o().externalLink]),children:[n,(0,i.jsx)("span",{className:o().externalLink__icon,children:(0,i.jsx)(s.G,{icon:l.wlW})})]})}},2917:function(t,e,n){"use strict";n.d(e,{Wl:function(){return i},sy:function(){return r}});var i,a,r,s=n(5893),l=(n(7294),n(7166)),c=n.n(l),o=n(1658),d=n.n(o);function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t.LIGHT="light",t.DARK="dark",t.PRIMARY="primary",t.SECONDARY="secondary",t.GHOST="ghost"}(i||(i={})),function(t){t.LIGHT="light",t.DARK="dark",t.PRIMARY="primary",t.SECONDARY="secondary",t.GHOST="ghost"}(a||(a={})),function(t){t.DIV="div",t.SPAN="span",t.LIST_ITEM="li",t.LINK="a",t.BUTTON="button"}(r||(r={}));e.ZP=function(t){var e,n=t.element,a=void 0===n?r.SPAN:n,l=t.children,o=t.variant,u=void 0===o?i.PRIMARY:o,f=t.linkPath,h=t.isOutlined,A=void 0!==h&&h,g=t.onClick,x=a,m=c().bind(d())([d().tag,u,(e={},_(e,d().outlined,A),_(e,d().button,a===r.BUTTON),e)]);return(0,s.jsx)(s.Fragment,{children:a===r.LINK?(0,s.jsx)("a",{className:m,href:f,target:"_blank",rel:"noopener noreferrer",children:l}):a===r.BUTTON?(0,s.jsx)("button",{onClick:g,className:m,children:l}):(0,s.jsx)(x,{className:m,children:l})})}},6375:function(t,e,n){"use strict";n.d(e,{Z:function(){return i.ZP}});var i=n(2917)},4128:function(t,e,n){"use strict";n.r(e);var i=n(5893),a=n(7294),r=n(4184),s=n.n(r),l=n(242),c=n(6343),o=n(3885),d=n(6375),_=n(2917),u=n(5534),f=n.n(u);e.default=function(t){var e=t.title,n=t.tags,r=t.description,u=t.demoLink,h=t.sourceLink,A=s().bind(f()),g=(0,a.useMemo)((function(){return null===n||void 0===n?void 0:n.map((function(t){return(0,i.jsx)("li",{className:"list__item",children:(0,i.jsx)(d.Z,{variant:_.Wl.DARK,isOutlined:!0,children:t})},t)}))}),[n]);return(0,i.jsx)(l.Z,{variant:c.ho.SECONDARY,children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,i.jsx)("h3",{className:f().details__title,children:e}),(0,i.jsx)("ul",{className:A(["list inline",f().details__tags]),children:g})]}),(0,i.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,i.jsx)("p",{className:f().details__description,children:r}),(u||h)&&(0,i.jsxs)("ul",{className:f().details__list,children:[u&&(0,i.jsx)("li",{children:(0,i.jsx)(o.Z,{label:"Demo",href:u})}),h&&(0,i.jsx)("li",{children:(0,i.jsx)(o.Z,{label:"Source code",href:h})})]})]})]})})})}},1337:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i.default}});var i=n(4128)},6400:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var i=n(5893),a=(n(7294),n(5675)),r=n.n(a),s=n(242),l=n(1337),c={src:"/_next/static/media/todo.36c1a050.png",height:550,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEX///////7+/v/+/v79/f79/f39/P78/Pz8+/37+v36+vz6+vv5+P34+Pr49/r39Pz18vz08Pvz8Pncz/TFWH0LAAAALElEQVR42hXIxREAIAAEsYXDXfrvlSHPIJEXAtk6zt1gbI8k98eXaQSI0JAeFWUA3CnpmYoAAAAASUVORK5CYII="},o=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{children:(0,i.jsx)(r(),{src:c,alt:"todo"})}),(0,i.jsx)(l.default,{title:"Todo",description:"Simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.",tags:["HTML","CSS","React"],sourceLink:"https://github.com/dtsiki/todo"})]})}},723:function(t){t.exports={externalLink__icon:"external-link_externalLink__icon__QpxN3"}},1658:function(t){t.exports={tag:"tag_tag__rXYw3",primary:"tag_primary__CbiDw",secondary:"tag_secondary__10leO",dark:"tag_dark__2QIif",light:"tag_light__6Tdw9",outlined:"tag_outlined__Q9yfG",ghost:"tag_ghost__F_jKN",button:"tag_button__ISOrO"}},5534:function(t){t.exports={details:"details_details__2LVbx",details__title:"details_details__title__5cib0",details__tags:"details_details__tags__3yvn0",details__description:"details_details__description__FRvn_",details__list:"details_details__list__2FGPW"}}},function(t){t.O(0,[675,774,888,179],(function(){return e=2959,t(t.s=e);var e}));var e=t.O();_N_E=e}]);