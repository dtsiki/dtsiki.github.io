(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8289],{77598:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/semantic-markup-for-the-little-ones/_divs",function(){return s(63438)}])},11428:function(e,n,s){"use strict";s.d(n,{uw:function(){return t}});var t,i,o=s(85893),a=(s(67294),s(92814)),d=s(51436),_=s(35192),l=s(26671),r=s(28964),c=s.n(r);!function(e){e.HTML="html",e.CSS="css",e.JAVASCRIPT="javascript",e.TYPESCRIPT="typescript"}(t||(t={})),function(e){e.html="html",e.css="css",e.javascript="js",e.typescript="ts"}(i||(i={}));n.ZP=function(e){var n=e.name,s=e.customName,t=e.code,r=e.language;return(0,o.jsxs)("div",{className:c().code,children:[(0,o.jsxs)("div",{className:c().code__header,children:[(0,o.jsxs)("div",{className:c().code__name,children:[(0,o.jsx)(a.G,{icon:d.gMD}),s||r&&n&&"".concat(n,".").concat(i[r])]}),(0,o.jsx)("div",{className:c().code__actions,children:(0,o.jsxs)("button",{className:c().code__control,onClick:function(){navigator.clipboard.writeText(t)},children:[(0,o.jsx)(a.G,{icon:d.kZ_}),(0,o.jsx)("span",{className:"visually-hidden",children:"Copy to clipboard"})]})})]}),(0,o.jsx)("div",{className:c().code__body,children:(0,o.jsx)(_.Z,{language:r,showLineNumbers:!0,style:l.Y3,children:t})})]})}},95319:function(e,n,s){"use strict";s.d(n,{Z:function(){return t.ZP}});var t=s(11428)},85276:function(e,n,s){"use strict";s.d(n,{Z:function(){return r}});var t,i,o=s(85893),a=(s(67294),s(94184)),d=s.n(a),_=s(31416),l=s.n(_);!function(e){e.SECONDARY="secondary",e.PRIMARY="primary"}(t||(t={})),function(e){e.DIV="div",e.FIRST_HEADING="h1",e.SECOND_HEADING="h2"}(i||(i={}));var r=function(e){var n=e.element,s=e.children,i=e.variant,a=void 0===i?t.PRIMARY:i,_=e.isUnpaired,r=void 0!==_&&_,c=e.isSingle,p=void 0!==c&&c,v=d().bind(l());return p?(0,o.jsxs)("span",{className:v([l().htmlTag,l().single]),children:["<",s,">"]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{className:v([l().htmlTag,l()[a]]),children:["<",n,">"]}),s&&s,!r&&(0,o.jsxs)("span",{className:v([l().htmlTag,l()[a]]),children:["</",n,">"]})]})}},63438:function(e,n,s){"use strict";s.r(n);var t=s(85893),i=(s(67294),s(95319)),o=s(11428),a=s(85276),d=s(24754),_=s.n(d);n.default=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h2",{children:["Do not use ",(0,t.jsx)(a.Z,{isSingle:!0,children:"div"})," for everything"]}),(0,t.jsx)("p",{children:"There are a lot of various semantic tags in HTML. There are six tags fonly or headings. There are dozen tags for text formatting. Tables, inputs, lists... After all HTML5 was presented us even more new tags: for headers, navs, footers, sections, articles... There are plenty to choose from. It will need to write a separate article only about all HTML tags."}),(0,t.jsx)("p",{children:"It may seem like too much tags so sometimes it seems easier to use divs for everything. Of course, it will work fine with using only divs, but you will drown in divs hell. Do you want it?"}),(0,t.jsx)(i.Z,{language:o.uw.HTML,name:"Stairway to hell",code:"                                                                                                                        </div>\n                                                                                                                    </div>\n                                                                                                                </div>\n                                                                                                            </div>\n                                                                                                        </div>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}),(0,t.jsx)("div",{className:_().post__snippet,children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,t.jsx)("p",{children:"In this example below is used only divs elements. Nothing is clear when you first look at this markup. In addition, you'll have to use unnecessary JavaScript code with this markup to make this fake links clickable."}),(0,t.jsx)(i.Z,{language:o.uw.HTML,name:"index",code:"<div>\n  <div>Hello</div>\n  <div>\n    <div>\n      <div>\n        <div>Home</div>\n      </div>\n      <div>\n        <div>About</div>\n      </div>\n      <div>\n        <div>Blog</div>\n      </div>\n    </div>\n  </div>\n</div>"})]}),(0,t.jsxs)("div",{className:"col col--50 col--tablet-100",children:[(0,t.jsxs)("p",{children:["In this example is used semantic tags. It's clear to see that is going on here: that's a header with a nav with links. There are no additional JavaScript because HTML tag ",(0,t.jsx)(a.Z,{isSingle:!0,children:"a"})," does all the work for us by creating all links."]}),(0,t.jsx)(i.Z,{language:o.uw.HTML,name:"index",code:"<header>\n  <h1>Hello</h1>\n  <nav>\n    <ul>\n      <li>\n        <a href='/home'>Home</a>\n      </li>\n      <li>\n        <a href='/about'>About</a>\n      </li>\n      <li>\n        <a href='/blog'>Blog</a>\n      </li>\n    </ul>\n  </nav>\n</header>"})]})]})}),(0,t.jsxs)("p",{className:"spacer top medium",children:["What follows from this? Use ",(0,t.jsx)(a.Z,{isSingle:!0,children:"div"})," element only to structure layout, for the rest you should use appropriate semantic elements."]})]})}},28964:function(e){e.exports={code:"code_code__cWoxw",code__header:"code_code__header__bW8qj",code__name:"code_code__name__qOcf0",code__body:"code_code__body__rSKiK",code__control:"code_code__control__eLB7Z",demo__control:"code_demo__control__aH9jM"}},31416:function(e){e.exports={htmlTag:"html-tag_htmlTag__HpA81",primary:"html-tag_primary__7jywi",secondary:"html-tag_secondary___TUWp",single:"html-tag_single__4ViUH"}},24754:function(e){e.exports={post:"post_post__JaQqG",post__details:"post_post__details__VwgJ9",post__snippet:"post_post__snippet__V7vyC",post__label:"post_post__label__4Azpz",post__subtitle:"post_post__subtitle__iwV2_",post__address:"post_post__address__WCGh9",post__pin:"post_post__pin__iRCSI",post__envelope:"post_post__envelope__ozHPq",post__sticker:"post_post__sticker__OQztb",post__text:"post_post__text__AgXDZ",post__menu:"post_post__menu__zJRYp",post__anchor:"post_post__anchor__elytn",post__buttonWrapper:"post_post__buttonWrapper__XXJC2",post__button:"post_post__button__SH9rI"}}},function(e){e.O(0,[319,9774,2888,179],(function(){return n=77598,e(e.s=n);var n}));var n=e.O();_N_E=n}]);