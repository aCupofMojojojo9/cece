import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), 'blog-posts');
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.Title ?? '',
        date: data.Date ?? '',
        author: data.Author ?? '',
        category: data.Category ?? '',
        image: data.Image ?? '',
        content: content.trim(),
      } as BlogPost;
    });

  // Sort newest first — filename starts with YYYY-MM-DD so lexicographic sort works
  posts.sort((a, b) => b.slug.localeCompare(a.slug));

  return posts;
}
