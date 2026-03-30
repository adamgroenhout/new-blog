import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

	let llmsTxt = `# ${SITE_TITLE}\n`;
	llmsTxt += `> ${SITE_DESCRIPTION}\n\n`;

	llmsTxt += `## Blog Posts\n\n`;

	for (const post of posts) {
		const postUrl = new URL(`${baseUrl}/blog/${post.id}/`, context.site).href;
		llmsTxt += `- [${post.data.title}](${postUrl}): ${post.data.description}\n`;
	}

	return new Response(llmsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}
