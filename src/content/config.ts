// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

// 2. Define a `type` and `schema` for each collection
const snippetCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    code: z.string(),
    tags: z.array(z.string()),
  }),
})

const partialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    code: z.string(),
    tags: z.array(z.string()),
  }),
})

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    code: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  'blog': blogCollection,
  'snippets': snippetCollection,
  'partials': partialCollection,
}
