import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { codeInspectorPlugin } from 'code-inspector-plugin';

// https://astro.build/config
export default defineConfig({
  site: 'https://sln-spellbook.com',
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
					autogenerate: { directory: 'guides' },
          /*
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bun Guide', link: '/guides/bun/' },
						{ label: 'Httpie Guide', link: '/guides/httpie/' },
					],
          */
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Partials',
					autogenerate: { directory: 'partials' },
				},
        {
					label: 'Snippets',
					autogenerate: { directory: 'snippets' },
				},
        {
					label: 'Scripts',
					autogenerate: { directory: 'scripts' },
				},
			],
		}),
    sitemap()
	],
});
