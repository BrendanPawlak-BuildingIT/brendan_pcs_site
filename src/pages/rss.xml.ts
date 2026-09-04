import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../data/site';
import { getPublishedPosts, postPath } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    // `context.site` comes from `site` in astro.config.mjs.
    site: context.site ?? SITE.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
