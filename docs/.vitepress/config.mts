import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curvy Docs",
  description: "Curvy documentation portal",
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8B1Y93VV4T' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-1M3S5K0GPZ");`
    ], 
    [
      'link',
      { rel: 'icon', href: '/favicon.png' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/get-started-with-curvy' }
    ],

    sidebar: [
          {    
            text: 'Get Started with Curvy', 
            link: '/get-started-with-curvy', 
            collapsible: true,
            items: [
              {text: 'Create Your Curvy Wallet', link: '/create-your-curvy-wallet' },
              {text: 'Deposit Assets', link: '/deposit-assets' },
              {text: 'Send Assets Privately', link: '/send-assets-privately' },
            ]
          },
          { text: 'How Curvy Works', 
            link: '/how-curvy-works',
            collapsible: true,
            items: [
              {text: 'How Privacy Works in Curvy', link: '/how-privacy-works-in-curvy' },
              {text: 'Best Practices for Maximum Privacy', link: 'best-practices-for-maximum-pivacy' },
              {text: 'How You Stay in Control', link: '/how-you-stay-in-control' },
              {text: 'Wallets & Networks', link: 'wallets-and-networks' },
            ]
          },
          { text: 'Deep Dive: Technical Documentation', 
            link: '/technical-documentation',
          },
          { text: 'Research & Protocol Versions', 
            link: '/research-and-protocol-versions',
            collapsible: true,
            items: [
            {text: 'Research Papers', link: '/research-papers' },
            {text: 'Curvy Protocol Versions', link: '/curvy-protocol-versions' }
            ]
          }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xCurvy/' },
      { icon: 'x', link: 'https://x.com/0xcurvy' }
    ]
  }
})
