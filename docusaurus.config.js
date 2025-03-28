import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blif Bot',
  tagline: 'Fast & Secure USDT to Mobile Money & Bank Transfers',
  favicon: 'img/favicon.ico',

  url: 'https://docs.tradeonnova.io',
  baseUrl: '/',

  organizationName: 'blif-project', // Update with your GitHub org/user
  projectName: 'blif-docs', // Update with your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: false, // Sidebar is still available if needed
          // Removed editUrl to hide "Edit this page" link
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/blif-social-card.jpg',
    navbar: {
      title: 'Blif Bot',
      logo: {
        alt: 'Blif Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/how-it-works', label: 'How It Works', position: 'left' },
        { to: '/docs/getting-started', label: 'Getting Started', position: 'left' },
        { to: '/docs/kyc', label: 'KYC', position: 'left' },
        { href: 'https://t.me/yourbot', label: 'Launch Blif Bot 🚀', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'How It Works', to: '/docs/how-it-works' },
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'KYC', to: '/docs/kyc' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Telegram', href: 'https://t.me/yourbot' },
            { label: 'Twitter', href: 'https://x.com/blif' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'FAQ', to: '/docs/faq' },
            { label: 'Support', to: '/docs/support' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blif. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
