import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { description, author, keywords } from '../package.json';
import rehypeMeta from 'rehype-meta';
import rehypeDocument from 'rehype-document';
import rehypeStarryNight from 'rehype-starry-night';

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
		image: 'static/img/social.jpg',
		navbar: {
			title: 'huetiful-js',
			logo: {
				alt: 'huetiful-js',
				src: '/static/img/logo.svg',
				srcDark: '/static/img/logo_dark.svg',
				href: 'https://huetiful-js.com',
				target: '_self',
				width: 32,
				height: 32
			},
			items: [
				{
					to: '/docs/quickstart',
					position: 'left',
					label: 'Quickstart ⚡︎'
				},
				{ to: '/docs/color', label: "What's a color 🎨 ?", position: 'left' },
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
			style: 'dark',
			links: [
				{
					title: '🏛️',
					items: [
						{
							label: 'Quickstart ⚡︎ ',
							to: '/docs/quickstart'
						},
						{
							label: "What's a colour 🎨 ?",
							to: '/docs/color'
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
			content: `V3 is here! Smaller API,better docs & more <a href='/docs/what's_new'>Learn more</a>`,
			backgroundColor: '#333',
			textColor: '#fff',
			isCloseable: true
		}
	} satisfies Preset.ThemeConfig
};

export default config;
