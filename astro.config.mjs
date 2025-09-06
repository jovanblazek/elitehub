// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeRapidePlugin from 'starlight-theme-rapide'
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics'
import starlightImageZoomPlugin from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Elitehub',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Elitehub Logo',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      plugins: [
        starlightImageZoomPlugin({
          showCaptions: true,
        }),
        starlightSidebarTopicsPlugin([
          {
            label: 'Pre začiatočníkov',
            link: '/beginners/introduction',
            icon: 'rocket',
            items: ['beginners/introduction'],
          },
          {
            label: 'Wiki',
            link: '/wiki/introduction',
            icon: 'open-book',
            items: [
              'wiki/introduction',
              {
                label: 'Mechaniky',
                autogenerate: {
                  directory: '/wiki/mechanics',
                },
              },
            ],
          },
          {
            label: 'Návody',
            link: '/guides/introduction',
            icon: 'puzzle',
            items: [
              'guides/introduction',
              {
                label: 'Profesie',
                autogenerate: {
                  directory: '/guides/professions',
                },
              },
            ],
          },
        ]),
        starlightThemeRapidePlugin(),
      ],
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/invite/a7Zsx6a' },
        {
          icon: 'youtube',
          label: 'YouTube',
          href: 'https://www.youtube.com/channel/UCRxMAY5KbBh_RsKhxbefeLg',
        },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jovanblazek/elitehub' },
      ],
      editLink: {
        baseUrl: 'https://github.com/jovanblazek/elitehub/edit/main',
      },
      locales: {
        root: {
          label: 'Slovensky',
          lang: 'sk',
        },
      },
    }),
  ],
})
