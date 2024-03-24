import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SLN spellbook',
			social: {
				github: 'https://github.com/OskarHulter/sln-spellbook',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
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
	],
});
