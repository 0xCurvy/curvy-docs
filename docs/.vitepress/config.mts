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
            text: 'Get Started with Curvy', 
            link: '/get-started', 
            collapsible: true,
            items: [
              {text: 'Create Your Curvy Wallet', link: '/get-started.html#_1-create-your-curvy-wallet' },
              {text: 'Deposit Assets', link: '/get-started.html#_2-deposit-assets' },
              {text: 'Send Assets Privately', link: '/get-started.html#_3-send-assets-privately' },
            ]
          },
          { text: 'How Curvy Works', 
            link: '/how-curvy-works',
            collapsible: true,
            items: [
              {text: 'How Privacy Works in Curvy', link: '/how-curvy-works.html#_1-how-privacy-works-in-curvy' },
              {text: 'Best Practices for Maximum Privacy', link: '/how-curvy-works.html#_2-best-practices-for-maximum-privacy' },
              {text: 'How You Stay in Control', link: '/how-curvy-works.html#_3-how-you-stay-in-control' },
              {text: 'Wallets & Networks', link: '/how-curvy-works.html#_4-wallets-networks' },
            ]
          },
          { text: 'Deep Dive: Technical Documentation', 
            link: '/technical-documentation',
            collapsible: true,
            items: [
              {text: 'Cryptographic Foundations', link: '/technical-documentation.html#cryptographic-foundations' },
              {text: 'Generating the Stealth Address', link: '/technical-documentation.html#generating-the-stealth-address' },
              {text: 'Fast Transaction Detection: View Tags', link: '/technical-documentation.html#fast-transaction-detection-view-tags' },
              {text: 'How the Recipient Unlocks the Funds', link: '/technical-documentation.html#how-the-recipient-unlocks-the-funds' },
            ]
          },
          { text: 'Research & Protocol Versions', 
            link: '/research-and-protocol-versions',
            collapsible: true,
            items: [
            {text: 'Research Papers', link: '/research-and-protocol-versions.html#research-papers' },
            {text: 'Curvy Protocol Versions', link: '/research-and-protocol-versions.html#curvy-protocol-versions' }
            ]
          }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xCurvy/' },
      { icon: 'x', link: 'https://x.com/0xcurvy' }
    ]
  }
})
