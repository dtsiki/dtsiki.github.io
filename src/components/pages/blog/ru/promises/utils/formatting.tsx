import { InlineCode } from 'src/components/blog/InlineCode';

export const pendingEm = <em>pending</em>;

export const fulfilledEm = <em>fulfilled</em>;

export const rejectedEm = <em>rejected</em>;

export const promiseStateInline = <InlineCode>[[PromiseState]]</InlineCode>;

export const promiseResultInline = <InlineCode>[[PromiseResult]]</InlineCode>;

export const promiseFulfillReactionsInline = <InlineCode>[[PromiseFulfillReactions]]</InlineCode>;

export const promiseRejectReactionsInline = <InlineCode>[[PromiseRejectReactions]]</InlineCode>;

export const thenInline = <InlineCode>then</InlineCode>;

export const catchInline = <InlineCode>catch</InlineCode>;

export const finallyInline = <InlineCode>finally</InlineCode>;

export const allInline = <InlineCode>Promise.all()</InlineCode>;

export const raceInline = <InlineCode>Promise.race()</InlineCode>;

export const anyInline = <InlineCode>Promise.any()</InlineCode>;

export const allSettledInline = <InlineCode>Promise.allSettled()</InlineCode>;

export const onFulfilledInline = <InlineCode>onFulfilled</InlineCode>;

export const onRejectedInline = <InlineCode>onRejected</InlineCode>;

export const onFinallyInline = <InlineCode>onFinally</InlineCode>;

export const getResolveInline = (param?: string) => {
  return <InlineCode>resolve{param ? `(${param})` : ''}</InlineCode>;
};

export const getRejectInline = (param?: string) => {
  return <InlineCode>reject{param ? `(${param})` : ''}</InlineCode>;
};
