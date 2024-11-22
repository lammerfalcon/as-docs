export default defineAppConfig({
  ui: {
    primary: 'brand',
    gray: 'gray-brand',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'AdSkill Docs'
  },
  header: {
    logo: {
      alt: 'AdSkill',
      light: '/logo.svg',
      dark: '/logo-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-heroicons-link',
      'to': 'https://adskill.io',
      'target': '_blank',
      'aria-label': 'AdSkill.io platform docs'
    }]
  },
  // footer: {
  //   credits: 'Copyright © 2023',
  //   colorMode: false,
  //   links: [{
  //     'icon': 'i-simple-icons-nuxtdotjs',
  //     'to': 'https://nuxt.com',
  //     'target': '_blank',
  //     'aria-label': 'Nuxt Website'
  //   }, {
  //     'icon': 'i-simple-icons-discord',
  //     'to': 'https://discord.com/invite/ps2h6QT',
  //     'target': '_blank',
  //     'aria-label': 'Nuxt UI on Discord'
  //   }, {
  //     'icon': 'i-simple-icons-x',
  //     'to': 'https://x.com/nuxt_js',
  //     'target': '_blank',
  //     'aria-label': 'Nuxt on X'
  //   }, {
  //     'icon': 'i-simple-icons-github',
  //     'to': 'https://github.com/nuxt/ui',
  //     'target': '_blank',
  //     'aria-label': 'Nuxt UI on GitHub'
  //   }]
  // },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Links',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-simple-icons-gitlab',
        label: 'Repository',
        to: 'https://gitlab.adskill.io/adskill',
        target: '_blank'
      }, {
        icon: 'i-heroicons-link',
        label: 'Service page',
        to: 'http://staging.redesign.app.adskill.io/projects',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-figma',
        label: 'Figma design',
        to: 'https://www.figma.com/design/uP8THkptwZSOUgfcJ5ucdo/Full-Platform-%E2%80%94-MVP?node-id=167-4351&node-type=canvas&t=r6TORgA32HNxhttP-0',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-atlassian',
        label: 'Jira',
        to: 'https://adskill.atlassian.net/jira/software/projects/AP/boards/1',
        target: '_blank'
      }]
    }
  }
})