# Using Claude well for learning

## Habits that make the biggest difference

- **Commit to an answer before asking.** "I think the output is 1, 3, 2 because microtasks run first. Am I right?" teaches far more than "what is the output?".
- **Ask to be tested, not told.** "Give me 5 snippets on closures, hardest first, and don't show answers until I reply."
- **Ask for the failure case.** "Show me an input where my solution breaks" beats "is this correct?".
- **Explain it back.** Write a 100-word explanation and ask Claude to attack it for imprecision.
- **Ask for a variation right after getting something wrong.** One corrected answer proves nothing. Three in a row does.
- **Paste real code, not descriptions.** Claude reviews what it can see.
- **Say what level you want.** "Answer as a staff engineer reviewing a senior's PR" changes the depth.

## Prompts worth reusing

| Goal | Prompt |
| --- | --- |
| Warm-up | "Quiz me on 3 items from my gotchas log. One at a time." |
| Depth check | "Ask me follow-ups on closures until I get one wrong." |
| Review practice | "Write a flawed solution to `throttle` with 3 hidden bugs. Don't tell me what they are." |
| Writing practice | "Grade this justification against the rubric. Be harsh about vague wording." |
| Recap | "Summarise today's session as a recap note in the repo's note format." |
| Mock | "Run a 30-minute mock task: one review, one solution, one justification. Time me." |

## Keeping conversations sharp

- **One conversation per week of the plan.** Long conversations get slower and less focused. Start a new one for each week from the project chat.
- **Start each one the same way:** "Week 2, session 1. Read CLAUDE.md and PROGRESS.md, then start with the warm-up."
- **End each session the same way:** "Close the session." Claude then writes the note, updates the logs and opens the pull request.
- **The repo is the memory.** Claude does not carry anything between conversations here, so anything worth keeping must be in the repo before the session ends.
- **At the office:** read the published notes site, or open the project on claude.ai from any browser and continue the same conversation.

## What not to do

- Don't ask for a solution before trying. It feels productive and teaches nothing.
- Don't accept "looks good". Ask what a stricter reviewer would flag.
- Don't run the snippet before predicting its output.
