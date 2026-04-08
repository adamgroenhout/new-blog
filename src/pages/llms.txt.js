import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

	const parts = [
		`# ${SITE_TITLE}\n`,
		`> ${SITE_DESCRIPTION}\n\n`,
		`## Blog Posts\n\n`,
	];

	for (const post of posts) {
		const postUrl = new URL(`${baseUrl}/blog/${post.id}/`, context.site).href;
		parts.push(`- [${post.data.title}](${postUrl}): ${post.data.description}\n`);
	}

	return new Response(parts.join(''), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}
