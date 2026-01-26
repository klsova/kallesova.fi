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
      <div className="page-sort">
        <span className="page-sort-label">sort:</span>
        <button
          className={`page-sort-btn ${sortBy === 'newest' ? 'active' : ''}`}
          onClick={() => setSortBy('newest')}
        >
          newest
        </button>
        <button
          className={`page-sort-btn ${sortBy === 'oldest' ? 'active' : ''}`}
          onClick={() => setSortBy('oldest')}
        >
          oldest
        </button>
      </div>

      <div className="page-list">
        {sortedPosts.length === 0 ? (
          <p className="page-empty">No posts found.</p>
        ) : (
          sortedPosts.map((post) => (
            <article key={post.slug} className="page-item">
              <Link href={`/blog/${post.slug}`} className="page-item-link">
                <div className="page-item-header">
                  <span className="page-item-perms">-rw-r--r--</span>
                  <span className="page-item-date">{post.date}</span>
                  <span className="page-item-title">{post.slug}.md</span>
                </div>
                <div className="page-item-meta">
                  <h2 className="page-item-name">{post.title}</h2>
                  <p className="page-item-desc">{post.description}</p>
                  {post.tags.length > 0 && (
                    <div className="page-item-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="page-tag">
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
