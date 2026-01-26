---
title: "Hello World"
date: "2026-01-26"
description: "My first blog post - testing the new terminal-styled blog system."
tags: ["welcome", "nextjs", "blog"]
---

Welcome to my new blog! This is my first post using the markdown-based blog system I built for my portfolio.

## Why a Blog?

I wanted a place to share my thoughts on technology, programming, and projects I'm working on. Since this portfolio already has a terminal aesthetic, it made sense to extend that to the blog.

## Features

This blog system includes:

- **Markdown support** with frontmatter for metadata
- **Syntax highlighting** using Shiki with the github-dark theme
- **Static generation** for fast page loads
- **Terminal aesthetic** matching the rest of the site

## Code Example

Here's some TypeScript to demonstrate syntax highlighting:

```typescript
interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    content: await markdownToHtml(content),
  };
}
```

And some CSS for good measure:

```css
.blog-post {
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.blog-post pre {
  background: #0d1117;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}
```

## What's Next?

I'll be posting about:

- Projects I'm building
- Things I'm learning
- Interesting problems I've solved

Stay tuned!
