import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string().max(200),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** YouTube ID when the post is the write-up of a video. */
      videoId: z.string().optional(),
      /** Drafts render in `astro dev` but are excluded from the production build and the feed. */
      draft: z.boolean().default(false),
      /** Pinned to the top of the blog index. */
      featured: z.boolean().default(false),
    }),
});

export const collections = { posts };
