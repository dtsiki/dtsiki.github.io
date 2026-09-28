import { ElementType, ReactNode } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';

export const getGhostText = (text: ReactNode) => {
  return <span className='accented ghost spacer left extra-small'>({text})</span>;
};

const getComma = (currentIndex: number, array: string[]) => {
  return currentIndex !== array.length - 1 ? ', ' : null;
};

export const renderInlineList = (array: string[], as?: ElementType, className?: string) => {
  const Tag = as || 'span';

  return array.map((item, index) => {
    return (
      <span key={`${item}-${index}`}>
        <Tag className={className}>{item}</Tag>
        {getComma(index, array)}
      </span>
    );
  });
};

export const getInlineCode = (content: ReactNode) => {
  return <InlineCode>{content}</InlineCode>;
};

export const getConsoleLog = (content?: string, isString = true) => {
  const showQuotes = isString ? `'` : '';
  const param = content && `${showQuotes}${content}${showQuotes}`;

  return <InlineCode>console.log({param})</InlineCode>;
};

export const getTextWithChevrons = (text: string) => {
  return <>«{text}»</>;
};
