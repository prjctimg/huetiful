import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { description } from '../package.json';

const config: Config = {
	title: 'huetiful-js',
	tagline: description,
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://huetiful-js.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	// organizationName: 'facebook', // Usually your GitHub org/user name.
	// projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'fr', 'zh-Hans']
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/prjctimg/huetiful/tree/main/www/docs',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],
	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				// @ts-ignore
				entryPoints: ['../lib/index.ts'],
				excludeTags: ['@internal'],
				outputFileStrategy: 'modules',
				fileExtension: '.md',
				expandObjects: true,
				tsconfig: '../tsconfig.json',
				excludeNotDocumented: true,
				excludeReferences: false,
				modulesFileName: 'api',
				plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-remark'],
				remarkPlugins: ['unified-prettier', 'remark-toc'],
				entryPointStrategy: 'resolve',
				out: '.temp',
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
				// @ts-ignore
				tsconfig: '../tsconfig.json',
				disableSources: false,
				skipErrorChecking: true,
				readme: 'none'
			}
		]
	],
	themeConfig: {
		// Replace with your project's social card
		image: 'img/social.jpg',
		navbar: {
			title: 'huetiful-js',
			logo: {
				alt: 'huetiful-js',
				src: 'img/logo.svg',
				srcDark: 'img/logo_dark.svg',
				href: 'https://huetiful-js.com',
				target: '_self',
				width: 32,
				height: 32
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Getting started'
				},
				{ to: '/docs/globals', label: 'API', position: 'left' },
				{
					href: 'https://github.com/prjctimg/huetiful',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		docs: {
			sidebar: { autoCollapseCategories: true, hideable: true }
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs 🏛️',
					items: [
						{
							label: 'Quickstart 🏁 ',
							to: '/docs/quickstart'
						},
						{
							label: "What's a colour 🎨 ?",
							to: '/docs/color'
						},
						{
							label: 'API ⛓️',
							to: '/docs/api'
						},
						{
							label: 'Types 📊',
							to: '/docs/types'
						},
						{
							label: 'Common errors⚠️  and defaults',
							to: '/docs/errors_and_defaults'
						},
						{
							label: 'Wiki 📜',
							to: 'https://github.com/prjctimg/huetiful/wiki'
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
							href: 'https://github.com/prjctimg/huetiful' // link to contributing.md
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
			content: `V3 is here! Smaller API,better docs & more <a href=''>Learn more</a>`,
			backgroundColor: '#333',
			textColor: '#fff',
			isCloseable: true
		}
	} satisfies Preset.ThemeConfig
};

export default config;
