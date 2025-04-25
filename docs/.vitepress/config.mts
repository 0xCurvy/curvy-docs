import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curvy's Docs",
  description: "Curvy documentation portal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/get-started' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Get Started with Curvy', 
            link: '/get-started' 
            collapsible: true,
            items: [
            {text: 'Create Your Curvy Wallet', link: '/get-started#_1-create-your-curvy-wallet' },
            {text: 'Deposit Assets', link: '/get-started#_2-deposit-assets' },
            {text: 'Send Assets Privately', link: '/get-started#_3-send-assets-privately' }
            ]},
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xCurvy/' },
      { icon: 'x', link: 'https://x.com/0xcurvy' }
    ]
  }
})
