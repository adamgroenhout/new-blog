export async function GET(context) {
	const robotsTxt = `User-agent: *
Content-Signal: ai-train=no, search=yes, ai-input=no
Allow: /

Sitemap: ${new URL('sitemap-index.xml', context.site).href}
`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}
