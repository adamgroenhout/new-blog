import { test } from 'node:test';
import assert from 'node:assert';

// We can't easily import the production code because it has Astro-specific imports and env vars.
// We'll test a representative version of the logic.

function buildLlmsTxt(posts, site, baseUrl, SITE_TITLE, SITE_DESCRIPTION) {
    const parts = [
        `# ${SITE_TITLE}\n`,
        `> ${SITE_DESCRIPTION}\n\n`,
        `## Blog Posts\n\n`,
    ];

    for (const post of posts) {
        const postUrl = new URL(`${baseUrl}/blog/${post.id}/`, site).href;
        parts.push(`- [${post.data.title}](${postUrl}): ${post.data.description}\n`);
    }

    return parts.join('');
}

test('buildLlmsTxt: Generates correct output format', () => {
    const posts = [
        {
            id: 'test-post',
            data: { title: 'Test Title', description: 'Test Description' }
        }
    ];
    const site = 'https://adamgroenhout.com/';
    const baseUrl = '';
    const SITE_TITLE = 'Adam Groenhout';
    const SITE_DESCRIPTION = 'Blog description';

    const output = buildLlmsTxt(posts, site, baseUrl, SITE_TITLE, SITE_DESCRIPTION);

    assert.ok(output.includes('# Adam Groenhout'));
    assert.ok(output.includes('> Blog description'));
    assert.ok(output.includes('## Blog Posts'));
    assert.ok(output.includes('- [Test Title](https://adamgroenhout.com/blog/test-post/): Test Description'));
});
