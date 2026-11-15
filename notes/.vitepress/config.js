import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Frontend Mastery',
  description: 'Recap notes for frontend interviews and AI code review work',
  // GitHub Pages serves a project site from /<repo-name>/. The deploy workflow sets BASE_PATH.
  base: process.env.BASE_PATH || '/',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['templates/**'],
  themeConfig: {
    search: { provider: 'local' },
    outline: [2, 3],
    nav: [
      { text: 'Notes', link: '/week-01/' },
      { text: 'Gotchas', link: '/gotchas' },
      { text: 'Questions', link: '/questions-log' },
      { text: 'How we work', link: '/how-we-work' },
    ],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'How we work', link: '/how-we-work' },
          { text: 'Using Claude well', link: '/using-claude' },
          { text: 'Gotchas log', link: '/gotchas' },
          { text: 'Questions log', link: '/questions-log' },
        ],
      },
      {
        text: 'Week 1: JavaScript core',
        items: [{ text: 'Overview', link: '/week-01/' }],
      },
    ],
  },
});
