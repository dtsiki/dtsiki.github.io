import { InlineCode } from 'src/components/blog/InlineCode';

export const allInline = <InlineCode>Promise.all()</InlineCode>;

export const raceInline = <InlineCode>Promise.race()</InlineCode>;

export const anyInline = <InlineCode>Promise.any()</InlineCode>;

export const allSettledInline = <InlineCode>Promise.allSettled()</InlineCode>;

export const iterableInline = <InlineCode>iterable</InlineCode>;

export const pendingEm = <em>pending</em>;

export const fulfilledEm = <em>fulfilled</em>;

export const rejectedEm = <em>rejected</em>;

export const myAllInline = <InlineCode>MyPromise.all()</InlineCode>;

export const myRaceInline = <InlineCode>MyPromise.race()</InlineCode>;

export const myAnyInline = <InlineCode>MyPromise.any()</InlineCode>;

export const myAllSettledInline = <InlineCode>MyPromise.allSettled()</InlineCode>;

export const resolveStaticInline = <InlineCode>Promise.resolve()</InlineCode>;

export const rejectStaticInline = <InlineCode>Promise.reject()</InlineCode>;

export const thenInline = <InlineCode>then</InlineCode>;

export const catchInline = <InlineCode>catch</InlineCode>;
