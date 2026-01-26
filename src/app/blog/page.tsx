import { getAllPostsMeta } from '@/lib/posts';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | kallesova',
  description: 'Thoughts on programming, technology, and projects.',
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="container">
      <div className="blog-header">
        <span className="blog-command">ls -la ./blog</span>
      </div>

      <BlogList posts={posts} />
    </main>
  );
}
