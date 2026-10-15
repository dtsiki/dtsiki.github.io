(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{336:e=>{e.exports={code_snippet:"CodeSnippet_code_snippet__EDJgC"}},5351:(e,t,s)=>{"use strict";s.d(t,{z:()=>h});var o=s(37876),n=s(28948),a=s(14232),r=s(78984),i=s(99342),l=s.n(i),c=s(336),d=s.n(c);let h=({lang:e,code:t,name:s,customName:i,consoleLog:c,hideLines:h=!1})=>{let p=((e=!0)=>{let t=(0,a.useContext)(r.M),s=(0,a.useRef)(null);if(!t)throw Error("useCodeSnippetNumber must be used within a <CodeSnippetProvider>");return e&&null===s.current&&(t.counterRef.current+=1,s.current=t.counterRef.current),s.current})(l()(s)&&l()(i)),m=s??`snippet(${p})`;return(0,o.jsx)("div",{className:"spacer bottom small",children:(0,o.jsx)("div",{className:d().code_snippet,children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col col--100",children:(0,o.jsx)(n.Cy,{language:e,name:m,customName:i,code:t,isTerminal:h,consoleLog:c})})})})})}},6549:(e,t,s)=>{"use strict";s.d(t,{M:()=>m});var o=s(37876),n=s(14232),a=s(15039),r=s.n(a),i=s(78261),l=s(55686),c=s(40502),d=s(20381),h=s(41395),p=s.n(h);let m=({customTitle:e,items:t,strictLanguage:s,hideNumbers:a,variant:h=l.j.PRIMARY})=>{let m=r().bind(p()),{language:u}=(0,i.W)(),x=(0,n.useMemo)(()=>t.map(e=>(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("button",{onClick:()=>(e=>{let t=e.current?.getBoundingClientRect();if(t){let e=t.top+window.pageYOffset-150;window.scrollTo({top:e,behavior:"smooth"})}})(e.ref),className:m([p().table_of_contents__button,p()[h]]),"arial-label":`${(0,d.T)(s||u,c.fN)} ${e.title}`,children:e.title})},e.title)),[t]);return(0,o.jsxs)("section",{className:m([p().table_of_contents,"section outer"]),children:[(0,o.jsx)("h2",{className:m([p().table_of_contents__title,p()[h]]),children:(0,d.T)(s||u,e||c.cL)}),a?(0,o.jsx)("ul",{className:"list",children:x}):(0,o.jsx)("ol",{className:"list ordered",children:x})]})}},9095:e=>{e.exports={external_link:"ExternalLink_external_link__91aO2",external_link__icon:"ExternalLink_external_link__icon__u3FgC"}},12062:(e,t,s)=>{"use strict";s.d(t,{G:()=>c});var o=s(37876),n=s(15039),a=s.n(n),r=s(9399),i=s(9095),l=s.n(i);let c=({href:e,label:t})=>{let s=a().bind(l());return(0,o.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:s(["link",l().external_link]),children:[t,(0,o.jsx)(r.li,{className:l().external_link__icon})]})}},27500:e=>{e.exports={htmlTag:"html-tag_htmlTag__q_ssE",primary:"html-tag_primary__Q0GX0",secondary:"html-tag_secondary__rCVb9",single:"html-tag_single__G6D50"}},28948:(e,t,s)=>{"use strict";s.d(t,{Pl:()=>d,Cy:()=>f});var o=s(37876),n=s(15039),a=s.n(n),r=s(43747),i=s(14232),l=s(16686),c=s(26457);let d={PLAINTEXT:"plaintext",HTML:"html",CSS:"css",JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",REACT:"react",SCSS:"scss",BASH:"bash",JSON:"json"},h={[d.HTML]:"HTML",[d.CSS]:"CSS",[d.JAVASCRIPT]:"JS",[d.TYPESCRIPT]:"TS",[d.REACT]:"TSX",[d.SCSS]:"SCSS",[d.JSON]:"JSON",[d.PLAINTEXT]:"",[d.BASH]:""};var p=s(78261),m=s(40502),u=s(9399),x=s(78196),_=s(58411),j=s.n(_);let f=e=>{let{name:t,customName:s,code:n,language:_,showOnlyCode:f=!1,showLineNumbers:g=!0,startingLineNumber:b,isTerminal:y=!1,isNameUppercase:w=!1,consoleLog:N}=e,v=a().bind(j()),{translate:T}=(0,p.W)(),[k,S]=(0,i.useState)(!1),C=()=>{navigator.clipboard.writeText(n),S(!0),setTimeout(()=>{S(!1)},5e3)};return(0,o.jsx)("div",{className:j().code,children:f?(0,o.jsxs)("div",{className:j().code__highlighter,children:[(0,o.jsx)("div",{className:j().code__actions,children:(0,o.jsx)("button",{className:j().code__control,onClick:C,"aria-label":T(m.x_),children:k?(0,o.jsx)(l.f,{}):(0,o.jsx)(u.LE,{})})}),(0,o.jsx)(r.A,{startingLineNumber:b,language:_?.toLocaleLowerCase()||"plaintext",showLineNumbers:g,style:c.C5,children:n})]}):(0,o.jsxs)("div",{className:j().code__wrapper,children:[(0,o.jsxs)("div",{className:j().code__header,children:[(0,o.jsxs)("div",{className:v([j().code__name,{[j().uppercase]:w}]),children:[y?(0,o.jsx)(u.q7,{useMini:!0,className:j().code__icon}):(0,o.jsx)(u.RO,{useMini:!0,className:j().code__icon}),_!==d.BASH&&s||_&&t&&`${t}.${h[_].toLocaleLowerCase()}`]}),(0,o.jsx)("div",{className:j().code__actions,children:(0,o.jsx)("button",{className:j().code__control,onClick:C,"aria-label":T(m.x_),children:k?(0,o.jsx)(l.f,{}):(0,o.jsx)(u.LE,{})})})]}),(0,o.jsxs)("div",{className:j().code__body,children:[(0,o.jsx)(r.A,{language:_?.toLocaleLowerCase()||"plaintext",showLineNumbers:!y&&g,wrapLines:!0,style:c.C5,children:n}),N&&(0,o.jsx)("div",{className:j().code__console,children:(0,o.jsx)(x.R,{code:N,showConsole:!0,isCopyable:!0,isEmbedded:!0})})]})]})})}},40401:e=>{e.exports={post:"keep-calm-and-test_post__WkbZf",post__anchor:"keep-calm-and-test_post__anchor__tKP0R"}},41395:e=>{e.exports={table_of_contents__title:"TableOfContents_table_of_contents__title__31aUG",SECONDARY:"TableOfContents_SECONDARY__mp5of",table_of_contents__button:"TableOfContents_table_of_contents__button__lf7Gl",PRIMARY:"TableOfContents_PRIMARY__7Hy_1"}},48700:e=>{e.exports={example_snippet:"ExampleSnippet_example_snippet__Fwo7u"}},51874:(e,t,s)=>{"use strict";s.d(t,{e:()=>c});var o=s(37876),n=s(14232),a=s(40502),r=s(20381),i=s(11931),l=s(12062);let c=(0,n.forwardRef)(({items:e,language:t=i.N.RU},s)=>{let c=(0,n.useMemo)(()=>e.map(({id:e,link:t,label:s})=>(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)(l.G,{href:t,label:s})},e)),[e]);return(0,o.jsxs)("section",{ref:s,children:[(0,o.jsx)("h2",{className:"spacer bottom medium",children:(0,r.T)(t,a.JF)}),(0,o.jsx)("ol",{className:"list ordered",children:c})]})});c.displayName="ReadMoreList"},55686:(e,t,s)=>{"use strict";s.d(t,{j:()=>o});let o={PRIMARY:"PRIMARY",SECONDARY:"SECONDARY"}},56410:(e,t,s)=>{"use strict";s.d(t,{W:()=>l});var o=s(37876),n=s(85335),a=s(81010),r=s(64156),i=s.n(r);let l=({src:e,alt:t,fileTitle:s,maxWidth:r=1024})=>(0,o.jsx)("div",{className:i().post_image,style:{maxWidth:r?`${r}px`:"unset"},children:(0,o.jsx)(n.p,{type:a.gz.IMAGE,fileTitle:s,children:(0,o.jsx)("img",{src:e,alt:t,width:"100%"})})})},58411:e=>{e.exports={code:"Code_code___ALYP",code__wrapper:"Code_code__wrapper__VoZb9",code__header:"Code_code__header__XUQ5W",code__name:"Code_code__name__rsVhv",uppercase:"Code_uppercase__3suyI",code__body:"Code_code__body__Hy27d",code__highlighter:"Code_code__highlighter__JwMRG",code__icon:"Code_code__icon__HYjpp",code__control:"Code_code__control__yx_MM",demo__control:"Code_demo__control__r9nlJ",code__console:"Code_code__console__o8ueE"}},64156:e=>{e.exports={post_image:"PostImage_post_image__BD4eg"}},74343:e=>{e.exports={example:"Example_example__9St6s",DEFAULT:"Example_DEFAULT__HFLHk",EMBEDDED:"Example_EMBEDDED__MPi77",example__console:"Example_example__console__Gt__w",example__console_icon:"Example_example__console_icon__gj4yg",example__console_title:"Example_example__console_title__C_pUG",example__actions:"Example_example__actions__lpQQr",example__control:"Example_example__control__wPPLQ"}},75009:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var o=s(37876),n=s(15039),a=s.n(n),r=s(27500),i=s.n(r);let l=({element:e,children:t,variant:s="primary",isUnpaired:n=!1,isSingle:r=!1})=>{let l=a().bind(i());return r?(0,o.jsxs)("span",{className:l([i().htmlTag,i().single]),children:["<",t,">"]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{className:l([i().htmlTag,i()[s]]),children:["<",e,">"]}),t&&t,!n&&(0,o.jsxs)("span",{className:l([i().htmlTag,i()[s]]),children:["</",e,">"]})]})}},78196:(e,t,s)=>{"use strict";s.d(t,{R:()=>u});var o=s(37876),n=s(14232),a=s(43747),r=s(78261),i=s(40502),l=s(9399),c=s(15039),d=s.n(c),h=s(26457),p=s(74343),m=s.n(p);let u=({code:e,isCopyable:t=!0,isEmbedded:s=!1,showConsole:c=!1})=>{let p=d().bind(m()),{translate:u}=(0,r.W)(),[x,_]=(0,n.useState)(!1),j=s?m().EMBEDDED:m().DEFAULT;return(0,o.jsx)("div",{className:p([m().example,j]),children:(0,o.jsxs)("div",{className:m().code__wrapper,children:[t&&(0,o.jsx)("div",{className:m().example__actions,children:(0,o.jsx)("button",{className:p([m().example__control,j]),onClick:()=>{navigator.clipboard.writeText(e),_(!0),setTimeout(()=>{_(!1)},5e3)},"aria-label":u(i.x_),children:x?(0,o.jsx)(l.fH,{}):(0,o.jsx)(l.LE,{})})}),c&&(0,o.jsxs)("div",{className:p([m().example__console,j]),children:[(0,o.jsx)(l.$2,{className:m().example__console_icon}),(0,o.jsx)("div",{className:m().example__console_title,children:"Console"})]}),(0,o.jsx)(a.A,{language:"javascript",showLineNumbers:!1,style:h.C5,wrapLines:!0,lineProps:()=>({style:{display:"block",position:"relative",paddingLeft:"1.5em"},className:"prefixed-line"}),children:e})]})})}},84390:(e,t,s)=>{"use strict";s.d(t,{k:()=>i});var o=s(37876),n=s(78196),a=s(48700),r=s.n(a);let i=({code:e,isCopyable:t})=>(0,o.jsx)("div",{className:r().example_snippet,children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,o.jsx)(n.R,{code:e,isCopyable:t,showConsole:!0})})})})},91491:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var o=s(37876),n=s(14232),a=s(12062),r=s(75009),i=s(92334),l=s(6549),c=s(83577),d=s(27689),h=s(46512),p=s(37339),m=s(84390),u=s(28948),x=s(51874),_=s(5351),j=s(56410),f=s(40401),g=s.n(f);let b=()=>{let e=(0,n.useRef)(null),t=(0,n.useRef)(null),s=(0,n.useRef)(null),f=(0,n.useRef)(null),b=(0,n.useRef)(null),y=(0,n.useRef)(null),w=(0,n.useRef)(null),N=(0,n.useRef)(null),v=[{id:(0,h.Ak)(),link:"https://jestjs.io",label:"Jest documentation"},{id:(0,h.Ak)(),link:"https://reactjs.org/docs/test-renderer.html",label:"Test Rendered documentation"},{id:(0,h.Ak)(),link:"https://jestjs.io/docs/snapshot-testing",label:"Jest snapshot testing documentation"},{id:(0,h.Ak)(),link:"https://www.valentinog.com/blog/jest-coverage/",label:"Configuring code coverage in Jest"},{id:(0,h.Ak)(),link:"https://reactjs.org/docs/test-renderer.html",label:"React Test Rendered documentation"}],T=[{title:"What is Jest?",ref:t},{title:"Prerequisites",ref:s},{title:"Introduction to Jest",ref:f},{title:"Snapshot testing",ref:b},{title:"Handling assets",ref:y},{title:"Coverage reporting",ref:w},{title:"Conclusion",ref:N}],k=`...
import { describe, expect, test } from '@jest/globals'
...`,S=`"scripts": {
  ...
  "test": "jest"
}`,C=`npm test

> test-test-test@0.1.0 test
> jest

No tests found, exiting with code 1
Run with \`--passWithNoTests\` to exit with code 0
`,A=`...
"dependencies": {
  "react": ...,
  "react-dom": ...,
  "react-scripts": ...
  ...
},
"devDependencies": {
  "@babel/preset-env": ...,
  "@babel/preset-react": ...,
  "@babel/preset-typescript": ...,
  "@jest/globals": ...,
  "@types/jest": ...,
  "babel-jest": ...,
  "jest": ...,
  "react-test-renderer": ...,
  "ts-jest": ...,
  "typescript": ...
},
...`,R=`describe('Component', () => {
  ...
});`,E=`describe('Component', () => {
  describe("check some state", () => {
  ...
  });

  describe("check another state", () => {
    ...
  });
});`,P=`describe('Component', () => {
  test('test something', () => {
    ...
  });
});`,I=`describe('Component', () => {
  beforeEach(() => {
    initialize();
  });

  afterEach(() => {
    reset();
  });

  test('test something', () => {
    ...
  });

  test('test another', () => {
    ...
  });
});`,B=`describe('Component', () => {
  beforeAll(() => {
    initialize();
  });

  afterAll(() => {
    reset();
  });

  test('test something', () => {
    ...
  });

  test('test another', () => {
    ...
  });
});`,J=`describe('Component', () => {
  test.only('test something', () => {
    ...
  });

  test('test another', () => {
    ...
  });
});`,L=`describe('Button', () => {
  test('renders correctly', () => {
    ...
  });

  test('renders disabled button', () => {
    ...
  });

  test('renders focused button', () => {
    ...
  });

  test('renders large button', () => {
    ...
  });
});`,M=`const variants = ...

test.each(variants)(
  'renders %s correctly',
  (variant) => {
    ...
  }
);`,Y=`import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';

describe('App', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});`,O=`// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[\`App renders correctly 1\`] = \`
  <div>
    ...
  </div>
\`;
`,G=`npm test
> test-test-test@0.1.0 test
> jest

PASS  src/components/__tests__/App.test.tsx

App
  ✓ renders correctly (8 ms)

  › 1 snapshot written.

Snapshot Summary
  › 1 snapshot written from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 written, 1 total
Time:        2.656 s

Ran all test suites.`,z=`npm test
> test-test-test@0.1.0 test
> jest

PASS  src/components/__tests__/App.test.tsx

App
  ✓ renders correctly (8 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        1.816 s, estimated 3 s
Ran all test suites.`,D=`...
<div className='container'>
  <h1>Yay!</h1>
  ...
</div>
...`,F=`npm test
> test-test-test@0.1.0 test
> jest

FAIL  src/components/__tests__/App.test.tsx
App
  ✕ renders correctly (10 ms)

● App › renders correctly

  expect(received).toMatchSnapshot()

  Snapshot name: \`App renders correctly 1]\`

    - Snapshot  - 0
    + Received  + 3

    @@ -1,8 +1,11 @@
      <div
        className="container"
      >
    +   <h1>
    +     Yay!
    +   </h1>
      11 |
      12 |     expect(tree)
    > 13 |       .toMatchSnapshot();
          |        ^
      14 |   });
      15 | });
      16 |

      at Object.<anonymous> (src/components/__tests__/App.test.tsx:13:8)

   › 1 snapshot failed.
  Snapshot Summary
   › 1 snapshot failed from 1 test suite. Inspect your code changes or run \`npm test -- -u\` to update them.

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   1 failed, 1 total
Time:        2.792 s
Ran all test suites.`,W=`npm test -- --coverage
> test-test-test@0.1.0 test
> jest "--coverage"

PASS  src/components/__tests__/App.test.tsx
App
  ✓ renders correctly (13 ms)

  ------------------------|---------|----------|---------|---------|-------------------
  File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
  ------------------------|---------|----------|---------|---------|-------------------
  All files               |     100 |      100 |     100 |     100 |
  src                     |     100 |      100 |      50 |     100 |
  App.tsx                 |     100 |      100 |      50 |     100 |
  ------------------------|---------|----------|---------|---------|-------------------

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        4.583 s
Ran all test suites.`,V=`SyntaxError: Invalid or unexpected token
  > 10 | import cover from './assets/cover.jpg';`,H=`/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js'
  }
  ...
};`,q=`import React, { ReactNode } from 'react';
import classNames from 'classnames';

export enum ButtonVariant {
  INFO = 'is-info',
  SUCCESS = 'is-success',
  WARNING = 'is-warning',
  DANGER = 'is-danger'
}

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = ButtonVariant.INFO, onClick }: ButtonProps) => {
  const bind = classNames.bind([]);

  return (
    <button
      className={bind(['button', variant])}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;`,U=`import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('Button', () => {
  test('renders INFO correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.INFO}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });

  test('renders SUCCESS correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.SUCCESS}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });

  test('renders WARNING correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.WARNING}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });

  test('renders ERROR correctly', () => {
    const tree = renderer
      .create(<Button
        variant={ButtonVariant.WARNING}>
        Click me
      </Button>)
      .toJSON();

    expect(tree)
      .toMatchSnapshot();
  });
});`,X=`import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import { ButtonVariant } from './../Button/Button';

const variants = Object.keys(ButtonVariant);

describe('Button', () => {
  test.each(variants)(
    'renders %s correctly',
    (variant) => {
      const tree = renderer
        .create(<Button
          variant={variant as ButtonVariant}>
          Click me
        </Button>)
        .toJSON();

      expect(tree)
        .toMatchSnapshot();
    }
  );
});`;return(0,o.jsxs)(c.o,{postConfig:d.KG[d.Zr.KEEP_CALM_AND_TEST],customHero:(0,o.jsx)(i.l,{size:p.Xd.HALF,variant:p.V2.VIOLET,children:(0,o.jsxs)("div",{className:"marquee",children:["This is a sign",(0,o.jsx)("br",{}),"to start testing"]})}),children:[(0,o.jsx)(l.M,{items:T,strictLanguage:d.KG[d.Zr.KEEP_CALM_AND_TEST].language}),(0,o.jsxs)("section",{ref:t,className:"section outer",children:[(0,o.jsx)("h2",{className:"spacer top large",children:"What is Jest?"}),(0,o.jsxs)("p",{children:["There are many different ways of testing, in particular React applications. For instance, you can use"," ",(0,o.jsx)(a.G,{label:"React Testing Library",href:"https://github.com/testing-library/react-testing-library"})," ","or ",(0,o.jsx)(a.G,{label:"Enzyme",href:"https://enzymejs.github.io"})," for these purposes. In this article we'll focus on tests using Jest in pair with"," ",(0,o.jsx)(a.G,{label:"Test Renderer",href:"https://reactjs.org/docs/test-renderer.html"})," package (",(0,o.jsx)("code",{children:"react-test-renderer"}),")"]}),(0,o.jsx)("p",{children:"Jest is a popular JavaScript testing framework which works with projects using React, Angular, Vue, etc. Initially, Jest was created by Facebook specifically for testing React applications. It's one of the most popular framework for testing React components. Thus, Jest can be easily integrated with React, that's why my choice fell on it."})]}),(0,o.jsxs)("section",{ref:s,className:"section outer",children:[(0,o.jsx)("h2",{children:"Prerequisites"}),(0,o.jsxs)("p",{children:["Let's begin by installing the required libraries and setting up the project. You can create a sample project for testing in any convenient way (e.g. by using"," ",(0,o.jsx)(a.G,{label:"Create React App",href:"https://create-react-app.dev/"}),") or implement it in already existing project, there are no any restrictions or requirements."]}),(0,o.jsxs)("p",{children:["First, add Jest and other reqiured packages as a dev dependencies to the project. If your project based on mentioned above ",(0,o.jsx)("code",{children:"create-react-app"}),", you'll only need to add ",(0,o.jsx)("code",{children:"react-test-renderer"})," ","because Jest is already included out of the box in ",(0,o.jsx)("code",{children:"create-react-app"}),":"]}),(0,o.jsx)(m.k,{code:"npm install --save-dev react-test-renderer"}),(0,o.jsx)("p",{className:"spacer top medium",children:"If you have an existing application, as in my case, you'll need to install a few packages to make everything work well together:"}),(0,o.jsx)(m.k,{code:"npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer"}),(0,o.jsxs)("p",{children:["We install the ",(0,o.jsx)("code",{children:"@types/jest"})," package to provide types for Jest globals without a need to import them. Without this package you have to import globals as in the example below in all test files:"]}),(0,o.jsx)(_.z,{customName:"Component.test.tsx",lang:u.Pl.TYPESCRIPT,code:k}),(0,o.jsxs)("p",{className:"spacer top large",children:["After installing required packages, add a new npm script to your"," ",(0,o.jsx)("span",{className:"highlighted ghost",children:"package.json"})," to make tests runnable:"]}),(0,o.jsx)(m.k,{code:S}),(0,o.jsxs)("p",{className:"spacer top large",children:["Here's my ",(0,o.jsx)("span",{className:"highlighted ghost",children:"package.json"}),":"]}),(0,o.jsx)(m.k,{code:A}),(0,o.jsxs)("p",{className:"spacer top medium",children:["Make sure you are using the same version of ",(0,o.jsx)("i",{children:"react"})," and ",(0,o.jsx)("i",{children:"react-test-renderer"}),". Otherwise you'll end up with a confusing TypeScript error such as"," ",(0,o.jsx)("span",{className:"highlighted secondary",children:"cannot read properties of undefined"})," (as it has happened with me)."]}),(0,o.jsxs)("p",{children:["Pay attention, Jest doesn't require any configuration to find test files. It goes through the whole project and looks for files that look like they're tests, for example files with ",(0,o.jsx)("code",{children:".test.*"})," ","extension. For your convenience, tests can be organized into special ",(0,o.jsx)("code",{children:"__tests__"})," folder under a top-level src directory. We'll get to that below."]}),(0,o.jsx)("p",{className:"spacer top medium",children:"Now we can run this command to fire up Jest and run all tests:"}),(0,o.jsx)(m.k,{code:"npm test"}),(0,o.jsx)("p",{children:"Let's run it to make sure nothing has broken yet because there're no test yet:"}),(0,o.jsx)(m.k,{code:C}),(0,o.jsx)(j.W,{fileTitle:"meme.jpg",src:"/assets/blog/keep-calm-and-test/meme.jpeg",alt:"Roll Safe meme with text: tests cannot fail if there are no test"})]}),(0,o.jsxs)("section",{ref:f,className:"section outer",children:[(0,o.jsx)("h2",{children:"Introduction to Jest"}),(0,o.jsx)("p",{children:"Before testing we should take a look at some Jest basics. There are a few key concept which you need to know before diving in. Jest comes with three different built-in blocks for organizing tests. The most important are:"}),(0,o.jsxs)("ul",{className:"list markered",children:[(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"describe()"})}),(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"test()"})}),(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"it()"})})]}),(0,o.jsxs)("p",{children:["Method ",(0,o.jsx)("code",{children:"describe()"})," creates a block that groups together several related tests. Whenever you start writing your test files from an empty file you may start with ",(0,o.jsx)("code",{children:"describe()"}),". However, starting with"," ",(0,o.jsx)("code",{children:"describe()"})," is not necessarily. The describe block may contain other different blocks that will be mentioned below."]}),(0,o.jsx)(_.z,{customName:"Component.test.tsx",lang:u.Pl.TYPESCRIPT,code:R}),(0,o.jsxs)("p",{className:"spacer top large",children:["You can nest ",(0,o.jsx)("code",{children:"describe()"})," blocks into each other to further break down your tests and improve readability if needed. Meanwhile, nested blocks do not depend on each other to run."]}),(0,o.jsx)(_.z,{customName:"Component.test.tsx",lang:u.Pl.TYPESCRIPT,code:E}),(0,o.jsxs)("p",{className:"spacer top large",children:["Method ",(0,o.jsx)("code",{children:"test()"}),", as you can guess, runs a test, and method ",(0,o.jsx)("code",{children:"it()"}),"is just an alias of"," ",(0,o.jsx)("code",{children:"test()"}),". Yep, it's confusing, but ",(0,o.jsx)("code",{children:"test()"})," and ",(0,o.jsx)("code",{children:"it()"})," are interchangeable according to the official API of Jest. You can use either of these."]}),(0,o.jsx)(_.z,{customName:"Component.test.tsx",lang:u.Pl.TYPESCRIPT,code:P}),(0,o.jsxs)("p",{className:"spacer top large",children:["To run only one test with Jest, add ",(0,o.jsx)("code",{className:"accented primary",children:"only()"})," after block name. This applies to ",(0,o.jsx)("code",{children:"test()"})," as well as to its alias ",(0,o.jsx)("code",{children:"it()"}),". In the example below the first test will be the only test that runs, and the second test will not run:"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Component.test.tsx",code:J}),(0,o.jsxs)("p",{className:"spacer top large",children:["Another way to focus on some tests is replacing ",(0,o.jsx)("code",{children:"it()"})," with ",(0,o.jsx)("code",{children:"xit()"})," to temporarily exclude a test from being executed. Similarly, ",(0,o.jsx)("code",{children:"fit()"})," lets focus on a specific test without running any other tests."]}),(0,o.jsx)("p",{className:"spacer top large",children:"Moreover, there are a few of useful methods in Jest which will be worth a lot in the future:"}),(0,o.jsxs)("ul",{className:"list markered",children:[(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"beforeEach()"})}),(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"beforeAll()"})}),(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"afterEach()"})}),(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"afterAll()"})}),(0,o.jsx)("li",{className:"list__item",children:(0,o.jsx)("span",{className:"list__title",children:"each()"})})]}),(0,o.jsx)("p",{children:"Let's quickly go through all of them."}),(0,o.jsxs)("p",{children:["If you have some tests you need to do repeatedly for many times, you can use ",(0,o.jsx)("code",{children:"beforeEach()"})," and"," ",(0,o.jsx)("code",{children:"afterEach()"}),". ",(0,o.jsx)("code",{children:"beforeEach()"})," runs before any other block and ",(0,o.jsx)("code",{children:"afterEach()"})," ","runs after, respectively. For example, if you need to initialize something before testing and reset some things immediately after, you can do this with following:"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Component.test.tsx",code:I}),(0,o.jsx)("p",{children:"In the example above, initializing will be called before each of these two tests, and reset method will be called after each of them."}),(0,o.jsxs)("p",{children:["In some cases, the opposite situation is also possible when you only need to do something once at the beginning of a test file. Jest provides ",(0,o.jsx)("code",{children:"beforeAll()"})," and ",(0,o.jsx)("code",{children:"afterAll()"})," blocks to handle this. In the example below, initializing will be called before all of tests, and reset method will be called after all of them:"]}),(0,o.jsxs)("div",{className:"flex h-centered",children:[" ",(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Component.test.tsx",code:B})})})]}),(0,o.jsx)("p",{children:"There are some situation, when we need to write similar tests. For example, you may need to check all possible variants of a component property."}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Button.test.tsx",code:L}),(0,o.jsxs)("p",{children:["The only difference between the two tests below are the variant of button. To avoid repetition, you can use"," ",(0,o.jsx)("code",{children:"each()"})," that will alow to reduce all these tests into one. Using ",(0,o.jsx)("code",{children:"each()"})," block, tests could be rewritten like this:"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Button.test.tsx",code:M}),(0,o.jsxs)("p",{className:"spacer top arge",children:["At last, but not least, writing tests is impossible without ",(0,o.jsx)("code",{children:"expect()"}),". This method in most cases is used with its matchers. There are a lot of matchers: ",(0,o.jsx)("code",{children:"toBe()"}),", ",(0,o.jsx)("code",{children:"toEqual()"}),","," ",(0,o.jsx)("code",{children:"toContain()"}),", etc. You can find full list of Jest matchers in its"," ",(0,o.jsx)(a.G,{href:"https://jestjs.io/docs/expect",label:"documenation"}),". Below we will consider a couple of them in more detail."]}),(0,o.jsxs)("p",{children:["Let's not stray too far, in Jest ",(0,o.jsx)(a.G,{href:"https://jestjs.io/docs/api",label:"documentation"})," ","you can find more information about its API."]})]}),(0,o.jsxs)("section",{ref:b,className:"section outer",children:[(0,o.jsx)("h2",{children:"Snapshot testing"}),(0,o.jsx)("p",{children:"Finally, let's the tests! We'll create a snapshot test for a small component. Based on that you will be able to create tests for other components in a similar way."}),(0,o.jsxs)("p",{children:["Snapshot testing is popular use case. In the process of snapshot testing, as the name suggests, renders a UI component and then takes a snapshot to compare it to a reference snapshot file stored alongside the test. The test will fail if these two snapshots do not match to each other. What is the difference between snapshots and visual testing? Visual testing requires building the entire application. But instead you can use a test renderer to quickly generate snapshots for specific components. All generated snapshots you will find in your"," ",(0,o.jsx)("code",{children:"__tests__"})," directory in folder ",(0,o.jsx)("code",{children:"__snapshots__"}),"."]}),(0,o.jsxs)("p",{children:["To create test just add ",(0,o.jsx)("code",{children:"code()"})," or ",(0,o.jsx)("code",{children:"it()"})," blocks with the name of the test and its code. You can optionally wrap them in ",(0,o.jsx)("code",{children:"describe()"})," blocks for logical grouping but this not strict required."]}),(0,o.jsxs)("p",{children:["Let's test a top-level React component ",(0,o.jsx)(r.A,{isSingle:!0,children:"App /"}),". This will be the easiest test to check correct rendering without crashing. To test we'll ",(0,o.jsx)("code",{children:"App.test.jsx"})," file in the"," ",(0,o.jsx)("code",{children:"__tests__"})," folder and with the following code:"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"App.test.tsx",code:Y}),(0,o.jsx)("p",{children:"If you are using JSX in your Jest test files, you'll need to add the following import line to the top of the file:"}),(0,o.jsx)(m.k,{code:"import React from 'react';"}),(0,o.jsxs)("p",{children:["The reason for this is that Babel transforms the JSX syntax into a series of"," ",(0,o.jsx)("code",{children:"React.createElement()"})," calls, and if you fail to import React, those will fail."]}),(0,o.jsxs)("p",{children:["The test above mounts ",(0,o.jsx)(r.A,{isSingle:!0,children:"App /"})," component and makes sure that it didn't throw during rendering. Let's find out what's going on the code above. Method ",(0,o.jsx)("code",{children:"create()"})," create a Test Renderer instance with the passed React element, in this case ",(0,o.jsx)(r.A,{isSingle:!0,children:"App /"})," ","component. Then ",(0,o.jsx)("code",{children:"toJSON()"})," return an object representing the rendered tree. After that we should use mentioned above ",(0,o.jsx)("code",{children:"expect"}),". It has a lot matchers, that let validate different things. One of this matchers is ",(0,o.jsx)("code",{children:"toMatchSnapshot"})," that ensures that a value matches the most recent snapshot."]}),(0,o.jsxs)("p",{children:["If you run test command after adding ",(0,o.jsx)(r.A,{isSingle:!0,children:"App /"})," test you'll see the following output in your terminal:"]}),(0,o.jsx)(m.k,{code:G}),(0,o.jsxs)("p",{children:["Also you will find a new file in ",(0,o.jsx)("code",{children:"__snapshots__"})," folder. This file will contain code below that is called ",(0,o.jsx)("code",{children:"snapshot"}),":"]}),(0,o.jsx)(m.k,{code:O}),(0,o.jsx)("p",{children:"If you run test again without changing test file, you'll get the following output:"}),(0,o.jsx)(m.k,{code:z}),(0,o.jsxs)("p",{children:["As you can see, there is not snapshot summary. That's because there are no changes in snapshots. Let's change something in ",(0,o.jsx)(r.A,{isSingle:!0,children:"App /"})," component and run test command again. I've just changed component template and added a new ",(0,o.jsx)(r.A,{isSingle:!0,children:"h1"})," element:"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"App.jsx",code:D}),(0,o.jsx)("p",{children:"Now Jest will print this output:"}),(0,o.jsx)(m.k,{code:F}),(0,o.jsx)("p",{children:"This snapshot test failed because the snapshot for updated component no longer matches a snapshot artifact for this test case. To resolve this, we will need to update the snapshot artifacts. To do this you can run Jest with special flag that will tell it to re-generate snapshots. Note extra -- in the middle of the command."}),(0,o.jsx)(m.k,{code:"npm test -- -u"}),(0,o.jsxs)("p",{children:["This command will re-generate snapshot artifacts for all failing snapshot tests. Let's complicate a task and create a new component ",(0,o.jsx)(r.A,{isSingle:!0,children:"Button /"}),":"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Button.jsx",code:q}),(0,o.jsxs)("p",{children:["You may have noticed, there's a property ",(0,o.jsx)("code",{children:"variant"}),", that may have one of a certain value:"," ",(0,o.jsx)("code",{children:"INFO"}),", ",(0,o.jsx)("code",{children:"SUCCESS"}),", ",(0,o.jsx)("code",{children:"WARNING"})," or ",(0,o.jsx)("code",{children:"ERROR"}),(0,o.jsxs)("button",{className:g().post__anchor,onClick:()=>{e.current?.scrollIntoView({behavior:"smooth"})},children:["*",(0,o.jsx)("span",{className:"visually-hidden",children:"Scroll to note"})]}),". To test all of this button variants we can write the following test in a file ",(0,o.jsx)("code",{children:"Button.test.tsx"}),":"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Button.test.tsx",code:U}),(0,o.jsxs)("p",{children:["Well, so far it doesn't look that bad, but if you add a new property, that may have one of an another certain value, you'll"," ",(0,o.jsx)(a.G,{href:"https://thevaluable.dev/dry-principle-cost-benefit-example/",label:"repeat yourself"}),". There's a simple solution, that we've already mentioned above: ",(0,o.jsx)("code",{children:"each()"}),". Take a look at how amazing test looks after refactoring:"]}),(0,o.jsx)(_.z,{lang:u.Pl.TYPESCRIPT,customName:"Button.test.tsx",code:X}),(0,o.jsx)("p",{children:"It looks much better!"}),(0,o.jsxs)("p",{ref:e,className:"note spacer top medium",children:[(0,o.jsx)("span",{className:"note__title accented primary",children:"Note:"})," I've used CSS framework"," ",(0,o.jsx)(a.G,{label:"Bulma",href:"https://bulma.io/"})," in this example project. Used above"," ",(0,o.jsx)("code",{children:"is-info"}),", ",(0,o.jsx)("code",{children:"is-success"}),", etc are Bulma CSS classes for buttons."]})]}),(0,o.jsxs)("section",{ref:y,className:"section outer",children:[(0,o.jsx)("h2",{children:"Handling assets"}),(0,o.jsx)("p",{children:"If you're using any static files in your project, e.g. images, you'll probably face with an configuration error in the process of running tests:"}),(0,o.jsx)(m.k,{code:V}),(0,o.jsxs)("p",{children:["Let's configure Jest to handle asset files. Usually, asset files aren't useful in tests so we can safely mock them out like this in ",(0,o.jsx)("code",{children:"jest.config.js"}),":"]}),(0,o.jsx)(m.k,{code:H}),(0,o.jsxs)("p",{children:["Then create folder ",(0,o.jsx)("code",{children:"__mocks__"})," under a top-level src directory and add the following file in this folder:"]}),(0,o.jsx)(m.k,{code:"module.exports = 'test-file-stub';"}),(0,o.jsx)("p",{children:"That's all! Now this assets problem must be solved."})]}),(0,o.jsxs)("section",{ref:w,children:[(0,o.jsx)("h2",{children:"Coverage reporting"}),(0,o.jsxs)("p",{children:["Code coverage makes possible to spot untested paths in your code. Jest has an integrated coverage reporter that requires no configuration. Run the following command to include a coverage report like this. Again note extra ",(0,o.jsx)("code",{children:"--"})," in the middle of the command."]}),(0,o.jsx)(m.k,{code:"npm test -- --coverage"}),(0,o.jsx)("p",{children:"After running this command you'll see test coverage report in the output:"}),(0,o.jsx)(m.k,{code:W}),(0,o.jsx)("p",{children:"Recommended to run coverage test separately from your normal workflow because it runs much slower."})]}),(0,o.jsxs)("section",{ref:N,className:"section outer",children:[(0,o.jsx)("h2",{children:"Conclusion"}),(0,o.jsx)("p",{children:"Testing doesn't hurt."}),(0,o.jsxs)("p",{children:["The full source code for this article can be found in this ",(0,o.jsx)(a.G,{href:"",label:"Github repository"}),"."]})]}),(0,o.jsx)(x.e,{items:v,language:d.KG[d.Zr.KEEP_CALM_AND_TEST].language})]})}},96257:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/eng/keep-calm-and-test",function(){return s(91491)}])}},e=>{e.O(0,[230,867,459,577,636,593,792],()=>e(e.s=96257)),_N_E=e.O()}]);