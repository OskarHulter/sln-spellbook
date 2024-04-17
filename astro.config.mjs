import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { codeInspectorPlugin } from 'code-inspector-plugin';

// https://astro.build/config 'https://sln-spellbook.com',
export default defineConfig({
  site: 'https://OskarHulter.github.io',
  base: '/sln-spellbook',
  vite: {
    plugins: [codeInspectorPlugin({ bundler: 'vite' })],
  },
	integrations: [
		starlight({
			title: 'SLN spellbook',
			social: {
				github: 'https://github.com/OskarHulter/sln-spellbook',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'sln-spellbook/guides' },
          /*
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bun Guide', link: '/guides/bun/' },
						{ label: 'Httpie Guide', link: '/guides/httpie/' },
					],
          */
				},
        {
          label: 'Introductions',
          autogenerate: { directory: 'sln-spellbook/introductions' },
        },
				{
					label: 'Reference',
					autogenerate: { directory: 'sln-spellbook/reference' },
				},
				{
					label: 'Partials',
					autogenerate: { directory: 'sln-spellbook/partials' },
				},
        {
					label: 'Snippets',
					autogenerate: { directory: 'sln-spellbook/snippets' },
				},
        {
					label: 'Scripts',
					autogenerate: { directory: 'sln-spellbook/scripts' },
				},
			],
		}),
    sitemap()
	],
});
