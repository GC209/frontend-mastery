# pipe

> This is the worked example. Every solved problem in this repo follows this shape.

## Problem

Implement `pipe(...fns)`. It returns a function that passes its arguments to the first function, then feeds each result into the next: `pipe(f, g, h)(x) === h(g(f(x)))`.

## Clarifying questions I asked first

A prompt this short is ambiguous. These are the gaps, and the assumption made for each.

| Question | Assumption |
| --- | --- |
| What does `pipe()` with no functions return? | An identity function that returns its first argument |
| Can the first function take several arguments? | Yes. Later functions take exactly one |
| Should `this` be forwarded? | Yes, so the result works as an object method |
| What if an argument is not a function? | Throw a `TypeError` at composition time, not at call time |
| Async functions? | Out of scope. A promise is passed along as a plain value |

## Approach

Validate once up front, then loop. A loop is used instead of `reduce` because it keeps `this` forwarding readable and the stack trace flat.

- Time: O(n) per call, where n is the number of functions
- Space: O(1) per call

## Gotchas

- `fns.reduce((acc, fn) => fn(acc))` with no initial value throws on an empty list.
- Arrow functions in the returned wrapper would lose the caller's `this`.
- Validating inside the returned function hides the bug until the first call. Fail early.

## What a reviewer should flag in a weaker answer

- No handling of the empty case
- Only the first argument forwarded to the first function
- Lost `this`
- No input validation, or validation at the wrong time
