import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';
import { FaArrowLeft } from 'react-icons/fa';
import WindowFrame from '../../../components/WindowFrame';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | kallesova`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container">
      <WindowFrame title={`${slug}.md`}>
        <div className="page-header">
          <Link href="/blog" className="page-back-btn" aria-label="Back to blog">
            <FaArrowLeft />
          </Link>
          <span className="page-command">cat ./blog/{slug}.md</span>
        </div>

        <article className="blog-post">
          <header className="blog-post-header">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <time className="blog-post-date">{post.date}</time>
              {post.tags.length > 0 && (
                <div className="blog-post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="page-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="blog-post-footer">
            <Link href="/blog" className="blog-back-link">
              ← cd ../blog
            </Link>
          </footer>
        </article>
      </WindowFrame>
    </main>
  );
}
