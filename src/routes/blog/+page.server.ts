import fs from 'node:fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
    const postsDirectory = path.resolve('src/content/blog');
    const files = fs.readdirSync(postsDirectory);
    const posts = files.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent); // Extract frontmatter metadata
        return {
            slug: filename.replace('.md', ''), // Use the filename as the slug
            ...data, // Include metadata like title, date, etc.
        };
    });

    return {
        posts,
    }
}

export const prerender = true;