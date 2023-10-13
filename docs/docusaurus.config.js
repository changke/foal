module.exports = {
  title: 'FoalTS',
  tagline: 'Full-featured Node.js framework, with no complexity',
  url: 'https://foalts.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'FoalTS', // Usually your GitHub org/user name.
  projectName: 'foal', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'id'],
    localeConfigs: {
      en: {
        label: 'EN',
      },
      fr: {
        label: 'FR',
      },
      es: {
        label: 'ES',
      },
      id: {
        label: 'Bahasa Indonesia',
      },
    },
  },
  scripts: [
    'https://m.servedby-buysellads.com/monetization.custom.js',
    { src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'foalts.org' }
  ],
  themeConfig: {
    image: 'img/meta-image.png',
    // announcementBar: {
    //   id: '...',
    //   content:
    //     '👉 ... ✨',
    // },
    algolia: {
      appId: 'VRIT2ZBVSX',
      apiKey: '0e5ec5503a51d81abd83ed758f9e9c4e',
      indexName: 'foalts',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'FoalTS',
      style: 'primary',
      hideOnScroll: true,
      logo: {
        alt: 'FoalTS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'newsletter',
          label: 'Newsletter',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
        },
        {
          to: 'who-is-using-foal',
          label: 'Who\'s using Foal?',
          position: 'right'
        },
        {
          href: 'https://github.com/FoalTS/foal',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://twitter.com/FoalTs',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter profile',
        },
        {
          href: 'https://discord.gg/QUrJv98',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Discord chat',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    }
  },
  plugins: [
    'docusaurus-plugin-sass',
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/FoalTS/foal/edit/master/docs/',
          lastVersion: "current",
          versions: {
            current: {
              "label": `${require('../lerna.json').version[0]}.x`,
            },
            '3.x': {
              'label': '3.x',
              banner: 'none',
              noIndex: true
            },
            '2.x': {
              'label': '2.x',
              noIndex: true
            },
            '1.x': {
              'label': '1.x',
              noIndex: true
            }
          }
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/FoalTS/foal/edit/master/docs',
        },
        googleAnalytics: {
          trackingID: 'UA-112613053-1',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
