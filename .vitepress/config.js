import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kyoshin",
  description: "Css Framework",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup', link: '/docs/installation' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Documentations',
        items: [
          { text: 'Setup', link: '/docs/installation' },
          { text: 'Dark Theme', link: '/docs/dark_theme' },
          { text: 'Hover, Focus and other States', link: '/docs/states' },
          { text: 'Typography', link: '/docs/typography' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/onrirr/Kyoshin' }
    ]
  }
})
