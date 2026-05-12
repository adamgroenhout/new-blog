import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { parseFilename } from './publish-utils.mjs';

const driveBlogPath = '/mnt/chromeos/GoogleDrive/MyDrive/Blog';
const draftsPath = path.join(driveBlogPath, 'Drafts');
const publishedPath = path.join(driveBlogPath, 'Published');

const filename = process.argv[2]; // e.g., "20260317 - My Post.md"
if (!filename) {
    console.error('Usage: node publish.mjs <filename.md>');
    process.exit(1);
}

// 0. Security Check: Prevent Path Traversal
if (filename.includes('..') || filename.startsWith('/') || filename.includes('\\')) {
    console.error('❌ Invalid filename: Path traversal characters are not allowed.');
    process.exit(1);
}

const sourcePath = path.join(draftsPath, filename);

if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Draft not found: ${sourcePath}`);
    process.exit(1);
}

// 1. Prepare Content & Metadata
let content = fs.readFileSync(sourcePath, 'utf-8');

// Clean up escaped markdown characters (common in some exports)
content = content
    .replace(/\\#/g, '#')
    .replace(/\\!/g, '!')
    .replace(/\\\[/g, '[')
    .replace(/\\\]/g, ']')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\\\*/g, '*')
    .replace(/\\_/g, '_')
    .replace(/\\-/g, '-')
    .replace(/\\`/g, '`');

const { title, slug } = parseFilename(filename);

// Use local date instead of UTC
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
const slugDate = `${year}${month}${day}`;

const destFileName = `src/content/blog/${slugDate}-${slug}.md`;

// Check if content already has frontmatter
let template = '';
if (content.trim().startsWith('---')) {
    template = content;
} else {
    template = `---
title: "${title}"
description: "${title}"
pubDate: "${formattedDate}"
---

${content}`;
}

// 2. Write to Astro
fs.writeFileSync(destFileName, template);
console.log(`✅ Created: ${destFileName}`);

// 3. Git Operations
try {
    console.log('🚀 Pushing to GitHub...');
    const add = spawnSync('git', ['add', destFileName]);
    if (add.error || add.status !== 0) throw new Error(add.stderr?.toString() || 'git add failed');

    const commit = spawnSync('git', ['commit', '-m', `feat: publish ${title}`]);
    if (commit.error || commit.status !== 0) throw new Error(commit.stderr?.toString() || 'git commit failed');

    const push = spawnSync('git', ['push', 'origin', 'main']);
    if (push.error || push.status !== 0) throw new Error(push.stderr?.toString() || 'git push failed');
} catch (error) {
    console.error(`❌ Git push failed: ${error.message}`);
    process.exit(1);
}

// 4. Cleanup Google Drive
if (!fs.existsSync(publishedPath)) fs.mkdirSync(publishedPath, { recursive: true });

// Move corresponding .gdoc file if it exists
const gdocFilename = filename.replace(/\.(md|txt)$/, '') + '.gdoc';
const gdocSourcePath = path.join(draftsPath, gdocFilename);
if (fs.existsSync(gdocSourcePath)) {
    fs.renameSync(gdocSourcePath, path.join(publishedPath, gdocFilename));
    console.log(`📦 Moved Google Doc to Published: ${gdocFilename}`);
}

// Delete the temporary .md/.txt draft
fs.unlinkSync(sourcePath);
console.log(`🗑️ Deleted temporary draft: ${filename}`);
