# Problems

One folder per problem, grouped by week: `problems/week-01/debounce/`.

Each folder holds three files:

| File | Purpose |
| --- | --- |
| `README.md` | Problem, clarifying questions, approach, complexity, gotchas, what a reviewer should flag |
| `<name>.js` (or `.ts`, `.jsx`) | The solution |
| `<name>.test.js` | Tests for the happy path and every edge case in the README |

See [`_example/pipe`](./_example/pipe) for the standard to match.

## Definition of done

A problem is pushed only when all of these are true:

1. I solved it myself first, without AI help.
2. It survived a grilling session: every "what if" question has an answer in code or in the README.
3. `npm run check` passes.
4. The pull request's CI run is green.
