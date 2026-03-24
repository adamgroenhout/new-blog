export function parseFilename(filename) {
    // Strip YYYYMMDD prefix and extension for the title/slug
    const nameMatch = filename.replace(/\.(md|txt)$/, '').match(/^(\d{8}\s*-\s*)?(.+)$/);
    const rawTitle = nameMatch ? nameMatch[2] : filename;

    const title = rawTitle.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const slug = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

    return { title, slug };
}
