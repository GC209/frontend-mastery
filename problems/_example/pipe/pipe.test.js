import { describe, expect, it } from 'vitest';
import { pipe } from './pipe.js';

describe('pipe', () => {
  it('applies functions left to right', () => {
    const add1 = (/** @type {number} */ n) => n + 1;
    const double = (/** @type {number} */ n) => n * 2;
    expect(pipe(add1, double)(3)).toBe(8);
    expect(pipe(double, add1)(3)).toBe(7);
  });

  it('passes every argument to the first function only', () => {
    const sum = (/** @type {number} */ a, /** @type {number} */ b) => a + b;
    const square = (/** @type {number} */ n) => n * n;
    expect(pipe(sum, square)(2, 3)).toBe(25);
  });

  it('returns the first argument when given no functions', () => {
    expect(pipe()(42, 'ignored')).toBe(42);
    expect(pipe()()).toBeUndefined();
  });

  it('preserves `this` for every function', () => {
    const counter = {
      step: 10,
      next: pipe(
        function (/** @type {number} */ n) { return n + this.step; },
        function (/** @type {number} */ n) { return n * this.step; },
      ),
    };
    expect(counter.next(1)).toBe(110);
  });

  it('throws early on non-function arguments', () => {
    // @ts-expect-error deliberately wrong input
    expect(() => pipe(Math.abs, 'nope')).toThrow(TypeError);
  });

  it('does not call any function until the piped function is invoked', () => {
    let calls = 0;
    const spy = (/** @type {unknown} */ x) => { calls += 1; return x; };
    const piped = pipe(spy, spy);
    expect(calls).toBe(0);
    piped(1);
    expect(calls).toBe(2);
  });
});
