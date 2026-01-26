'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

type SortOption = 'newest' | 'oldest';

interface BlogListProps {
  posts: PostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'newest') {
      return a.date > b.date ? -1 : 1;
    }
    return a.date < b.date ? -1 : 1;
  });

  return (
    <>
      <div className="blog-sort">
        <span className="blog-sort-label">sort:</span>
        <button
          className={`blog-sort-btn ${sortBy === 'newest' ? 'active' : ''}`}
          onClick={() => setSortBy('newest')}
        >
          newest
        </button>
        <button
          className={`blog-sort-btn ${sortBy === 'oldest' ? 'active' : ''}`}
          onClick={() => setSortBy('oldest')}
        >
          oldest
        </button>
      </div>

      <div className="blog-list">
        {sortedPosts.length === 0 ? (
          <p className="blog-empty">No posts found.</p>
        ) : (
          sortedPosts.map((post) => (
            <article key={post.slug} className="blog-item">
              <Link href={`/blog/${post.slug}`} className="blog-item-link">
                <div className="blog-item-header">
                  <span className="blog-item-perms">-rw-r--r--</span>
                  <span className="blog-item-date">{post.date}</span>
                  <span className="blog-item-title">{post.slug}.md</span>
                </div>
                <div className="blog-item-meta">
                  <h2 className="blog-item-name">{post.title}</h2>
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
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}
