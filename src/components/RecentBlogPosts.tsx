import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

interface RecentBlogPostsProps {
  limit?: number;
}

export default function RecentBlogPosts({ limit = 3 }: RecentBlogPostsProps) {
  const posts = getAllPostsMeta().slice(0, limit);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.slug} className="blog-item">
            <Link href={`/blog/${post.slug}`} className="blog-item-link">
              <div className="blog-item-header">
                <h3 className="blog-item-title">{post.title}</h3>
                <span className="blog-item-date">{post.date}</span>
              </div>
              <p className="blog-item-desc">{post.description}</p>
              {post.tags.length > 0 && (
                <div className="blog-item-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
      <Link href="/blog" className="btn">
        All Posts &gt;
      </Link>
    </section>
  );
}
