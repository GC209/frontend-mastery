# Frontend Mastery

Preparation for senior frontend interviews and AI code review work: recap notes, solved problems with tests, and written critiques of AI-generated code.

## What is in here

| Folder | Contents |
| --- | --- |
| [`notes/`](./notes) | Recap notes per topic, a gotchas log and a questions log. Published as a searchable site on GitHub Pages |
| [`problems/`](./problems) | One folder per solved problem: solution, tests and a README covering approach, complexity and edge cases |
| [`reviews/`](./reviews) | Rubric-scored critiques of AI-generated frontend code |
| [`PROGRESS.md`](./PROGRESS.md) | Where the 8-week plan stands |
| [`CLAUDE.md`](./CLAUDE.md) | The rules Claude follows when working in this repo |

## Pipeline

```
branch  ->  pull request  ->  CI (lint, typecheck, tests, site build)  ->  merge to main  ->  notes site deploys to GitHub Pages
```

- [`ci.yml`](./.github/workflows/ci.yml) runs on every pull request and every push to `main`.
- [`deploy.yml`](./.github/workflows/deploy.yml) publishes the notes site when `main` changes.

## Running it locally

Requires Node 22 or newer.

```bash
npm install
npm run check        # lint + typecheck + tests
npm run test:watch   # tests in watch mode while solving
npm run notes:dev    # notes site at http://localhost:5173
```

## One-time GitHub setup

1. Repo **Settings > Pages > Source**: choose **GitHub Actions**.
2. Repo **Settings > Branches**: add a rule for `main` that requires the `check` status to pass before merging.
