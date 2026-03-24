import { test } from 'node:test';
import assert from 'node:assert';
import { parseFilename } from './publish-utils.mjs';

test('parseFilename: Standard filename with date prefix', () => {
    const { title, slug } = parseFilename('20260317 - My Post.md');
    assert.strictEqual(title, 'My Post');
    assert.strictEqual(slug, 'my-post');
});

test('parseFilename: Filename without date prefix', () => {
    const { title, slug } = parseFilename('My New Post.md');
    assert.strictEqual(title, 'My New Post');
    assert.strictEqual(slug, 'my-new-post');
});

test('parseFilename: Filename with .txt extension', () => {
    const { title, slug } = parseFilename('Draft Post.txt');
    assert.strictEqual(title, 'Draft Post');
    assert.strictEqual(slug, 'draft-post');
});

test('parseFilename: Filename with multiple dashes', () => {
    const { title, slug } = parseFilename('20260317 - My-Post-With-Dashes.md');
    assert.strictEqual(title, 'My Post With Dashes');
    assert.strictEqual(slug, 'my-post-with-dashes');
});

test('parseFilename: Filename with special characters', () => {
    const { title, slug } = parseFilename('20260317 - My Post! @#$.md');
    assert.strictEqual(title, 'My Post! @#$');
    assert.strictEqual(slug, 'my-post');
});

test('parseFilename: Edge case - multiple spaces and dashes', () => {
    const { title, slug } = parseFilename('20260317-post--with---dashes.md');
    assert.strictEqual(title, 'Post  With   Dashes');
    assert.strictEqual(slug, 'post-with-dashes');
});

test('parseFilename: Edge case - starting/ending with dashes', () => {
    const { title, slug } = parseFilename('--leading-and-trailing--.md');
    assert.strictEqual(title, '  Leading And Trailing  ');
    assert.strictEqual(slug, 'leading-and-trailing');
});
