// @ts-check

import fs from 'fs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const blogFiles = fs.readdirSync('./src/content/blog').filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
const redirects = {};
for (const file of blogFiles) {
	const match = file.match(/^(\d{8})-(.+)\.(md|mdx)$/);
	if (match) {
		const slugWithoutDate = match[2];
		const newSlug = match[1] + '-' + match[2];
		redirects[`/${slugWithoutDate}`] = `/blog/${newSlug}`;
	}
}

// https://astro.build/config
export default defineConfig({
	site: 'https://adamgroenhout.com',
	integrations: [mdx(), sitemap()],
	redirects: redirects,
});
