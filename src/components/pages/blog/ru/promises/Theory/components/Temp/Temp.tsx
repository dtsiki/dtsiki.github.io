import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import {
  catchInline,
  finallyInline,
  fulfilledEm,
  getRejectInline,
  getResolveInline,
  onFinallyInline,
  onFulfilledInline,
  onRejectedInline,
  pendingEm,
  promiseResultInline,
  promiseStateInline,
  rejectedEm,
  thenInline,
} from '../../../utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { getTextWithChevrons } from 'src/utils';

export const Temp = forwardRef<HTMLDivElement>((_, ref) => {
  return <section ref={ref} className='section outer'></section>;
});

Temp.displayName = 'Temp';
