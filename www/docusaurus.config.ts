import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { description } from '../package.json';
import type { TypeDocOptions } from 'typedoc';
import type { PluginOptions } from 'typedoc-plugin-markdown';

const typedocOptions: TypeDocOptions & PluginOptions = {
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
	plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-remark'],
	// @ts-ignore
	remarkPlugins: ['unified-prettier', 'remark-toc'],
	entryPointStrategy: 'resolve',
	out: 'docs/api',
	exclude: ['./internal'],
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
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'fr', 'zh-Hans']
	},
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
				theme: { customCss: '/css/github-markdown.css' },
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/prjctimg/huetiful/tree/main/www/',
					showLastUpdateTime: true
				},
				googleAnalytics: { trackingID: 'G-0TXKRCERK8', anonymizeIP: true },
				sitemap: { lastmod: 'datetime', changefreq: 'weekly' }
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		// Replace with your project's social card
		image: '/img/social.jpg',
		navbar: {
			title: 'huetiful-js',
			logo: {
				alt: 'huetiful-js',
				src: '/img/logo.svg',
				srcDark: '/img/logo_dark.svg',
				href: 'https://huetiful-js.com',
				target: '_self',
				width: 32,
				height: 32
			},
			items: [
				{
					to: '/docs/guides/quickstart',
					position: 'left',
					label: 'Quickstart ⚡︎'
				},
				{
					to: '/docs/api/',
					position: 'left',
					label: 'API'
				},
				{
					to: '/docs/guides/',
					label: 'Guides?',
					position: 'left'
				},
				{
					href: 'https://github.com/prjctimg/huetiful',
					label: 'GitHub 🐈‍⬛',
					position: 'right'
				},
				{
					label: 'Wiki 📜',
					href: 'https://github.com/prjctimg/huetiful/wiki',
					position: 'right'
				}
			]
		},
		docs: {
			sidebar: { autoCollapseCategories: true, hideable: true }
		},
		footer: {
			style: 'light',
			links: [
				{
					title: '🏛️',
					items: [
						{
							label: 'Wiki 📜',
							href: 'https://github.com/prjctimg/huetiful/wiki'
						},
						{
							label: 'GitHub 🐈‍⬛',
							href: 'https://github.com/prjctimg/huetiful'
						},
						{
							label: 'Buy me a coffee ☕',
							href: 'https://ko-fi.com/prjctimg'
						},

						{
							label: 'Contribute 🙋‍♂️',
							href: 'https://github.com/prjctimg/huetiful/blob/main/CONTRIBUTING.md' // link to contributing.md
						}
					]
				}
			],
			copyright: `©<a href='https://deantarisai.com'> ディーン・タリサイ</a>`
		},
		prism: {
			theme: prismThemes.palenight,
			darkTheme: prismThemes.duotoneDark
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
			content: `V3 is here! Smaller API,better docs & more <a href='/docs/changes>Learn more</a>`,
			backgroundColor: '#333',
			textColor: '#fff',
			isCloseable: true
		}
	} satisfies Preset.ThemeConfig
};

export default config;
