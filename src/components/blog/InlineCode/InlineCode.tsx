import { IInlineCodePros } from './InlineCode.types';

export const InlineCode = ({ children = '' }: IInlineCodePros) => {
  return <code className='code'>{children}</code>;
};
