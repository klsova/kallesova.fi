import { getAllPostsMeta } from '@/lib/posts';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';
import WindowFrame from '../../components/WindowFrame';

export const metadata: Metadata = {
  title: 'Blog | kallesova',
  description: 'Thoughts on programming, technology, and projects.',
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="container">
      <WindowFrame title="blog/">
        <div className="page-header">
          <span className="page-command">ls -la ./blog</span>
        </div>

        <BlogList posts={posts} />
      </WindowFrame>
    </main>
  );
}
