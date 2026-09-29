import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { Accordion } from 'src/components/common/Accordion';
import { ECodeLang } from 'src/components/common/Code/Code.types';

export const Scope = () => {
  const exampleVarScope = `if (true) {
  var yay = 'yay';
}

console.log(yay); // "yay"`;

  const exampleVarScopeReality = `var yay;

if (true) {
  yay = 'yay';
}

console.log(yay); // "yay"`;

  const exampleFunctionScopeVar = `var yay = 'yay';

function doSomething() {
  var qeq = 'qeq';
}

console.log(yay); // "yay"
console.log(qeq); // ReferenceError: qeq is not defined`;

  const exampleFunctionScopeLet = `let yay = 'yay';

function doSomething() {
  let qeq = 'qeq';
}

console.log(yay); // "yay"
console.log(qeq); // ReferenceError: qeq is not defined`;

  const exampleFunctionScopeConst = `const yay = 'yay';

function doSomething() {
  const qeq = 'qeq';
}

console.log(yay); // "yay"
console.log(qeq); // ReferenceError: qeq is not defined`;

  const exampleLetScope = `if (true) {
  let yay = 'yay';
}

console.log(yay); // ReferenceError: yay is not defined`;

  const exampleConstScope = `if (true) {
  const yay = 'yay';
}

console.log(yay); // ReferenceError: yay is not defined`;

  const exampleTwoVarsInSameScope = `const yay = 'yay';
const yay = 42; // SyntaxError: redeclaration of const yay`;

  const exampleTwoVarsWithSameName = `const yay = 'yay';

if (true) {
  const yay = 42;
}

console.log(yay); // "yay"`;

  return (
    <Accordion title='Scope'>
      <p>Scope means where variables are available for use. There are three types of scope in JavaScript:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <div className='list__title'>Global scope</div>
        </li>
        <li className='list__item'>
          <div className='list__title'>Block scope</div>
        </li>
        <li className='list__item'>
          <div className='list__title'>Function scope</div>
        </li>
      </ol>
      <p>
        Mentioned above <code>var</code> declarations are globally scoped. This means that any variable that is declared
        with <code>var</code> outside a block is available for use in the whole window. Whoa!
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleVarScope} />
      <p className='spacer top medium'>
        This occurs because <code>var</code> declarations, wherever they occur, are processed before any code is
        executed. This proccess is called hoisting and we&#39;ll explore it in detail later. This is how the example
        above looks like in reality in JavaScript:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleVarScopeReality} />

      <p className='spacer top medium'>
        There is a trick called <strong>function scope</strong>. When a variable is declared inside a function, it is
        only accessible within that function and cannot be used outside that function. The example above would look like
        this:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleFunctionScopeVar} />

      <p className='spacer top medium'>
        Variable <code>yay</code>, even though it is declared using <code>var</code>, is globally scoped because it
        exists outside a function while <code>qeq</code> is function scoped. We cannot access any variable outside of a
        function, neither <code>const</code> or <code>let</code>:
      </p>
      <DoubleCodeSnippet
        lang={[ECodeLang.JAVASCRIPT, ECodeLang.JAVASCRIPT]}
        name={['index', 'index']}
        code={[exampleFunctionScopeConst, exampleFunctionScopeLet]}
      />
      <p>
        <code>let</code> solves the problem with <code>var</code> that we covered above. It is block scoped. Any
        variable declared in a block with <code>let</code> is only available for use within that block:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleLetScope} />
      <p>
        Like <code>let</code> declarations, <code>const</code> declarations can only be accessed within a block:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleConstScope} />

      <p>There cannot be two variables with the same name in the same scope:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleTwoVarsInSameScope} />

      <p>But if one of the variables is in a different scope - it will work:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleTwoVarsWithSameName} />

      <p>
        Pay attention to the example above: the variable eventually has a value of <code>yay</code>. All of this because
        given value <code>42</code> is in a different scope. Closures and hoisting are built on this process in
        JavaScript.
      </p>
    </Accordion>
  );
};
