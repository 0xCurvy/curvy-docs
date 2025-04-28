import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curvy's Docs",
  description: "Curvy documentation portal",
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
              {text: 'Wallets & Networks', link: 'wallets-and-newtorks' },
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
