import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { description } from '../package.json';

const typedocOptions = {
	entryPoints: [
		'../lib/accessibility.ts',
		'../lib/generators.ts',
		'../lib/palettes.ts',
		'../lib/wrappers.ts',
		'../lib/utils.ts',
		'../lib/collection.ts'
	],
	excludeTags: ['@internal'],
	outputFileStrategy: 'modules',
	fileExtension: '.mdx',
	expandObjects: true,
	tsconfig: '../tsconfig.json',
	excludeNotDocumented: true,
	excludeReferences: false,
	modulesFileName: 'api',
	plugin: ['typedoc-plugin-markdown'],
	entryPointStrategy: 'resolve',
	out: 'docs/api',
	exclude: ['../lib/internal.ts'],
	groupOrder: [
		'Function',
		'Class',
		'Constructor',
		'Property',
		'Method',
		'TypeAlias'
	],
	hidePageTitle: true,
	hidePageHeader: true,
	hideGroupHeadings: false,
	cleanOutputDir: false,
	disableSources: false,
	skipErrorChecking: true,
	readme: 'none',
	entryModule: undefined
};

const config: Config = {
	title: 'huetiful-js',
	tagline: description,
	favicon: 'img/favicon.ico',
	url: 'https://huetiful-js.com',
	baseUrl: '/docs',

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	plugins: [
		[
			// @ts-ignore
			'docusaurus-plugin-typedoc',
			// @ts-ignore
			typedocOptions
		]
	],

	presets: [
		[
			'classic',
			{
				theme: { customCss: '/css/styles.css' },
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/prjctimg/huetiful/tree/main/www/',
					showLastUpdateTime: true,
					routeBasePath: '/',
					showLastUpdateAuthor: true
				},
				googleAnalytics: { trackingID: 'G-0TXKRCERK8', anonymizeIP: true },
				sitemap: { lastmod: 'datetime', changefreq: 'weekly' }
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		image: '/img/logo.png',
		navbar: {
			title: 'huetiful-js',

			items: [
				{
					to: '/',
					position: 'left',
					label: 'Home 🏠'
				},
				{
					to: '/api/',
					position: 'left',
					label: 'API 🗒️'
				},
				{
					to: '/guides/',
					label: 'Guides 👨‍🏫 ',
					position: 'left'
				},
				{
					href: 'https://github.com/prjctimg/huetiful',
					label: 'GitHub 🐈‍⬛',
					position: 'right'
				},

				{
					position: 'right',
					label: 'Buy me a coffee ☕',
					href: 'https://ko-fi.com/prjctimg'
				}
			]
		},
		docs: {
			sidebar: { autoCollapseCategories: true, hideable: true }
		},
		footer: {
			style: 'light',

			copyright: `<a href='https://huetiful-js.com'><b class='pacifico'>huetiful-js</b></a> <br> <a href='https://deantarisai.com'>© ディーン・タリサイ 🌊</a>`
		},
		prism: {
			theme: prismThemes['shadesOfPurple'],
			darkTheme: prismThemes['palenight']
		},
		algolia: {
			apiKey: 'f031ae0d71cbcbe66956cd02849d00e5',
			indexName: 'huetiful-js',
			appId: 'DOKF6OB7K0',
			contextualSearch: true,
			insights: true
		},
		announcementBar: {
			id: 'huetiful-js-announcement',
			content: `V3 is here! Smaller API footprint,better docs & more <a href='/guides/changes>Learn more</a>`,
			backgroundColor: '#333',
			textColor: '#fff',
			isCloseable: true
		}
	} satisfies Preset.ThemeConfig
};

export default config;
