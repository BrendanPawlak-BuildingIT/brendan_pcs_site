import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const WORDS_PER_MINUTE = 200;

/** Newest first. */
function byDateDesc(a: Post, b: Post): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/**
 * Every published post, newest first.
 *
 * Drafts are visible in `astro dev` so you can preview them, and dropped from
 * production builds — which also keeps them out of the RSS feed and sitemap,
 * since those are generated from this function too.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? data.draft === false : true,
  );
  return posts.sort(byDateDesc);
}

/** Featured posts first, then newest first. Used on the blog index. */
export function pinFeatured(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return byDateDesc(a, b);
  });
}

/** Rough reading time in whole minutes, from the raw Markdown body. */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export interface TagCount {
  tag: string;
  count: number;
}

/** Unique tags across the given posts, most-used first then alphabetical. */
export function collectTags(posts: Post[]): TagCount[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const key = tag.toLowerCase();
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** The posts carrying a given tag, case-insensitively. */
export function postsWithTag(posts: Post[], tag: string): Post[] {
  const needle = tag.toLowerCase();
  return posts.filter((post) => post.data.tags.some((t) => t.toLowerCase() === needle));
}

/** The post before and after `id` in the published list (both newest-first order). */
export function neighbours(posts: Post[], id: string): { prev: Post | null; next: Post | null } {
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    // "prev" reads as the older post, which is the next one down a newest-first list.
    prev: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}

/** Absolute URL for a post, used by the feed and structured data. */
export function postPath(post: Post): string {
  return `/blog/${post.id}/`;
}
