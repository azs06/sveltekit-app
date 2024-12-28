import fs from 'node:fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
    const filePath = path.resolve(`src/content/blog/${params.slug}.md`);
    const file = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(file);
    return {
        html: marked(content),
        metadata: data,
    };
}

export const prerender = true;
