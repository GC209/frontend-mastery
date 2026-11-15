/**
 * Composes functions left to right: pipe(f, g, h)(x) === h(g(f(x))).
 *
 * @param {...Function} fns Functions to compose. The first may take any
 *   number of arguments. Each later one receives the previous result.
 * @returns {(...args: any[]) => any}
 */
export function pipe(...fns) {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError(`pipe expects functions, received ${typeof fn}`);
    }
  }

  if (fns.length === 0) {
    return (/** @type {any[]} */ ...args) => args[0];
  }

  const [first, ...rest] = fns;

  return function piped(/** @type {any[]} */ ...args) {
    // Forward `this` so pipe works when the result is used as a method.
    let result = first.apply(this, args);
    for (const fn of rest) {
      result = fn.call(this, result);
    }
    return result;
  };
}
