import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['problems/**/*.test.{js,ts,jsx,tsx}'],
    // Pure-JS problems run in Node. For DOM problems, add this line at the top
    // of the test file:  // @vitest-environment jsdom
    environment: 'node',
  },
});
