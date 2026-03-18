import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const driveBlogPath = '/mnt/chromeos/GoogleDrive/MyDrive/Blog';
const draftsPath = path.join(driveBlogPath, 'Drafts');
const publishedPath = path.join(driveBlogPath, 'Published');

const filename = process.argv[2]; // e.g., "20260317 - My Post.md"
if (!filename) {
    console.error('Usage: node publish.mjs <filename.md>');
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

// Strip YYYYMMDD prefix and extension for the title/slug
const nameMatch = filename.replace(/\.(md|txt)$/, '').match(/^(\d{8}\s*-\s*)?(.+)$/);
const rawTitle = nameMatch ? nameMatch[2] : filename;

const title = rawTitle.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
const slug = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

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
    execSync(`git add ${destFileName}`);
    execSync(`git commit -m "feat: publish ${title}"`);
    execSync('git push origin main');
} catch (error) {
    console.error('❌ Git push failed. Ensure you are authenticated.');
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
