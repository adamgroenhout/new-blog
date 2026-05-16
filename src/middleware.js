import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();
	
	// Only add headers to HTML responses
	const contentType = response.headers.get('content-type');
	if (contentType && contentType.includes('text/html')) {
		const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
		const site = context.site?.toString().replace(/\/$/, '') || '';
		
		const llmsUrl = `${site}${baseUrl}/llms.txt`;
		const rssUrl = `${site}${baseUrl}/rss.xml`;
		const sitemapUrl = `${site}${baseUrl}/sitemap-index.xml`;

		const links = [
			`<${llmsUrl}>; rel="llms-txt service-doc"`,
			`<${rssUrl}>; rel="alternate"; type="application/rss+xml"`,
			`<${sitemapUrl}>; rel="sitemap"`,
		];

		// Avoid duplicating if already set in page frontmatter (though append is usually fine)
		if (!response.headers.has('Link')) {
			response.headers.set('Link', links.join(', '));
		}
	}
	
	return response;
});
