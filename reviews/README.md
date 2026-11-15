# Reviews

Critiques of AI-generated frontend code. This is the core skill of the target role, so every review is written the way a graded task would be.

One file per review: `reviews/week-01/001-debounce-leading-trailing.md`. Copy [`_template.md`](./_template.md).

## Rubric (score each 1 to 5)

| Dimension | What to check |
| --- | --- |
| Correctness | Does it do what the prompt asked? Name the input that breaks it |
| Edge cases | Empty, null, huge input, fast repeat calls, slow network, unmount mid-request |
| Accessibility | Semantic elements, labels, keyboard, focus management, contrast |
| Efficiency | Unneeded re-renders, O(n²) loops, layout thrashing, bundle weight |
| Clarity | Naming, structure, no dead code, comments only where they earn it |
| Security | `innerHTML`, unvalidated URLs, secrets in client code |
| Prompt fit | Follows stated constraints, flags ambiguity |

## Justification format

1. **Verdict**
2. **Deciding reason** in one sentence
3. **Evidence**: line, input, actual vs. expected
4. **Other issues**
5. **Fix**

Three to six sentences. Evidence first, no filler.
