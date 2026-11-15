# How we work

## The rules

1. **Grill, don't flatter.** A wrong answer gets a direct "wrong", the reason, and a harder follow-up. A topic is closed only after three correct answers in a row on fresh variations.
2. **Answer first, then learn.** Attempt every question before seeing the explanation. Guessing counts. "I don't know" counts. Looking it up first does not.
3. **Nothing is pushed until it is right.** Code goes to GitHub only after it passes the grilling session and the automated checks.
4. **Every mistake is logged.** If it was wrong once, it goes into the [gotchas log](./gotchas) so it gets re-tested later.

## A study session, start to finish

1. **Warm-up (5 min):** three questions pulled from the gotchas log.
2. **Grilling round:** output-prediction snippets or "explain it" questions on the day's topic. Answer in chat without running code.
3. **Build:** solve the day's problem yourself. No AI help.
4. **Defend:** paste the solution. Expect "what if" questions until it holds up.
5. **Review drill:** critique an AI-written answer to the same problem using the rubric.
6. **Close:** Claude writes the recap note, updates the logs and the progress tracker, and pushes everything through a pull request.

## Where things live

| What | Where | Why |
| --- | --- | --- |
| Recap notes | `notes/` in this repo, published as this site | Readable from any browser, including at the office or on a phone |
| Solved problems | `problems/week-NN/<name>/` | Code, tests and a README per problem |
| AI code reviews | `reviews/week-NN/` | Practice for the actual job |
| Mistakes | [`notes/gotchas.md`](./gotchas) | Source of warm-up questions |
| Questions asked | [`notes/questions-log.md`](./questions-log) | So nothing gets asked twice |
| Progress | `PROGRESS.md` | One glance shows where things stand |
| Rules for Claude | `CLAUDE.md` | Any new Claude conversation reads this and picks up where the last one stopped |

## How code reaches GitHub

1. Claude creates a branch, for example `week-01/debounce`.
2. Claude commits the solution, tests, README and the updated notes.
3. Claude opens a pull request.
4. GitHub Actions runs lint, typecheck, tests and a build of this site.
5. When every check is green, the pull request is merged into `main`.
6. A second workflow publishes this site to GitHub Pages within a couple of minutes.

A red check blocks the merge. That is the point: `main` only ever holds work that passed.
