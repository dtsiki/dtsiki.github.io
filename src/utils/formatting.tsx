import { ElementType, ReactNode } from 'react';

export const getGhostText = (text: ReactNode) => {
  return <span className='accented GHOST spacer left extra-small'>({text})</span>;
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
