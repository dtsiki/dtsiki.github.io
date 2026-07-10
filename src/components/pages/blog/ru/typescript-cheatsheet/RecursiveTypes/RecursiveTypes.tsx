import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const RecursiveTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const treeNodeExampleCode = `type TreeNode = {
  value: number;
  children: TreeNode[];
};

const tree: TreeNode = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] },
      ],
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
      ],
    },
  ],
};
`;

  const jsonExampleCode = `type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const data: JSONValue = {
  name: 'dtsiki',
  hobbies: ['frontend', 'coding', 'crochet'],
};`;

  const commentTypeExampleCode = `type Comment = {
  id: number;
  text: string;
  replies: Comment[];
};

const comment: Comment = {
  id: 1,
  text: 'Крутая статья!',
  replies: [
    {
      id: 2,
      text: 'Спасибо!',
      replies: [
        {
          id: 3,
          text: 'И правда полезно',
          replies: [],
        },
      ],
    },
  ],
};`;

  const breakpointExampleCode = `type List<T> = {
  value: T;
  next: List<T> | null; // null — точка остановки
};`;

  return (
    <section ref={ref}>
      <h2>
        Рекурсивные типы
        {getGhostText('Recursive Types')}
      </h2>
      <p>
        Типы, которые ссылаются сами на себя. Рекурсивные типы часто встречаются при работе с API, файловой системой,
        комментариями и древовидными структурами.
      </p>
      <p>Ими можно типизировать:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>Деревья:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={treeNodeExampleCode} />
        </li>
        <li className='list__item'>
          <p>JSON-объекты:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={jsonExampleCode} />
        </li>
        <li className='list__item'>
          <p>Любые сложные вложенные объекты:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={commentTypeExampleCode} />
        </li>
      </ul>
      <p>В рекурсивных типах должен быть способ остановиться, иначе тип станет бесконечным:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={breakpointExampleCode} />
    </section>
  );
});

RecursiveTypes.displayName = 'RecursiveTypes';
